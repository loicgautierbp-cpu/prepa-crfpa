import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Appelle Gemini avec retry automatique et fallback.
 *
 * Stratégie :
 *  1. Essai sur gemini-2.5-flash (qualité supérieure)
 *  2. Sur 503/429/5xx : jusqu'à 2 retries avec backoff exponentiel (1s, 3s)
 *  3. Si ça échoue toujours, fallback sur gemini-flash-latest
 *
 * Retourne { text, model } ou throw une Error avec un message utilisateur.
 */
export async function generateWithFallback(prompt, options = {}) {
  const {
    temperature = 0.8,
    topP = 0.95,
    maxOutputTokens = 16384,
    responseMimeType = 'application/json',
  } = options;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const err = new Error('Service IA non configuré. Contactez l\u2019administrateur du site.');
    err.status = 500;
    err.userMessage = err.message;
    throw err;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const generationConfig = { temperature, topP, maxOutputTokens, responseMimeType };

  const models = ['gemini-2.5-flash', 'gemini-flash-latest'];
  const retryDelays = [0, 1000, 3000]; // 3 essais par modèle : immédiat, 1s, 3s

  let lastError = null;

  for (const modelName of models) {
    for (const delay of retryDelays) {
      if (delay > 0) await sleep(delay);
      try {
        const model = genAI.getGenerativeModel({ model: modelName, generationConfig });
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        return { text, model: modelName };
      } catch (error) {
        lastError = error;
        const status = error?.status || error?.statusCode;
        // Retry uniquement sur erreurs transitoires (surcharge / rate limit / 5xx)
        if (!isRetryable(status)) {
          break; // passe au modèle suivant ou propage
        }
      }
    }
  }

  // Aucun modèle n'a répondu : renvoie une erreur utilisateur claire
  const status = lastError?.status || lastError?.statusCode;
  const err = new Error(userMessageFor(status, lastError));
  err.status = status === 429 ? 429 : status === 503 ? 503 : 500;
  err.userMessage = err.message;
  err.cause = lastError;
  throw err;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isRetryable(status) {
  // 429 = quota / rate limit, 500/502/503/504 = surcharge serveur
  return status === 429 || (status >= 500 && status <= 599);
}

function userMessageFor(status, error) {
  if (status === 429) {
    return 'Quota IA atteint. Merci de patienter quelques minutes avant de relancer une génération.';
  }
  if (status === 503) {
    return 'Le service IA est momentanément saturé. Merci de réessayer dans quelques instants.';
  }
  if (status === 400 && /API[_ ]KEY/i.test(error?.message || '')) {
    return 'Clé API Gemini invalide. Contactez l\u2019administrateur du site.';
  }
  if (status >= 500) {
    return 'Le service IA rencontre une erreur passagère. Réessayez dans un instant.';
  }
  return 'Erreur lors de la génération. Réessayez dans un instant.';
}

/**
 * Parse le texte retourné par Gemini en JSON, avec fallback sur extraction.
 * Gère aussi bien les objets { ... } que les tableaux [ ... ].
 */
export function parseGeminiJson(text, { expectArray = false } = {}) {
  try {
    return JSON.parse(text);
  } catch {
    const pattern = expectArray ? /\[[\s\S]*\]/ : /\{[\s\S]*\}/;
    const match = text.match(pattern);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {
        // fall through
      }
    }
  }
  const err = new Error('Réponse IA illisible. Réessayez dans un instant.');
  err.status = 502;
  err.userMessage = err.message;
  throw err;
}
