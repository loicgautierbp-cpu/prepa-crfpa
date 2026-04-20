import { buildAnalyseDossierPrompt, buildPlanSynthesePrompt, buildRedactionSynthesePrompt } from '@/utils/prompts';
import { generateWithFallback, parseGeminiJson } from '@/utils/gemini';

const VALID_MODES = ['analyse', 'plan', 'redaction'];

export async function POST(request) {
  try {
    const body = await request.json();
    const { mode, theme } = body;

    if (!mode || !VALID_MODES.includes(mode)) {
      return Response.json({ error: `Mode invalide. Modes valides : ${VALID_MODES.join(', ')}` }, { status: 400 });
    }

    let prompt;
    switch (mode) {
      case 'analyse':
        prompt = buildAnalyseDossierPrompt(theme);
        break;
      case 'plan':
        prompt = buildPlanSynthesePrompt(theme);
        break;
      case 'redaction':
        prompt = buildRedactionSynthesePrompt(theme);
        break;
    }

    const { text } = await generateWithFallback(prompt);
    const data = parseGeminiJson(text);
    return Response.json({ result: data, mode });
  } catch (error) {
    console.error('Erreur génération synthèse:', error);
    const status = error.status || 500;
    const message = error.userMessage || 'Erreur lors de la génération';
    return Response.json({ error: message }, { status });
  }
}
