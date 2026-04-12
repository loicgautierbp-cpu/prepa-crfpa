import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildAnalyseDossierPrompt, buildPlanSynthesePrompt, buildRedactionSynthesePrompt } from '@/utils/prompts';

const VALID_MODES = ['analyse', 'plan', 'redaction'];

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Clé API Gemini non configurée' }, { status: 500 });
    }

    const body = await request.json();
    const { mode, theme } = body;

    if (!mode || !VALID_MODES.includes(mode)) {
      return Response.json({ error: `Mode invalide. Modes valides : ${VALID_MODES.join(', ')}` }, { status: 400 });
    }

    // Build prompt based on mode
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

    // Call Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 16384,
      },
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Parse JSON response
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      // Try to extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        return Response.json({ error: 'Réponse IA invalide' }, { status: 500 });
      }
    }

    return Response.json({ result: data, mode });
  } catch (error) {
    console.error('Erreur génération synthèse:', error);
    return Response.json({ error: 'Erreur lors de la génération' }, { status: 500 });
  }
}
