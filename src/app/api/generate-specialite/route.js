import { buildSpecialiteGeneratePrompt, buildSpecialiteCorrectPrompt } from '@/utils/prompts';
import { generateWithFallback, parseGeminiJson } from '@/utils/gemini';

const VALID_MODES = ['generate', 'correct'];
const VALID_SPECIALITES = ['civil', 'affaires', 'penal', 'administratif', 'social', 'international', 'fiscal', 'obligations'];
const VALID_TYPES = ['cas-pratique', 'dissertation', 'consultation'];

export async function POST(request) {
  try {
    const body = await request.json();
    const { mode, specialite, type, theme, subject, studentAnswer } = body;

    if (!mode || !VALID_MODES.includes(mode)) {
      return Response.json({ error: `Mode invalide. Modes valides : ${VALID_MODES.join(', ')}` }, { status: 400 });
    }
    if (!specialite || !VALID_SPECIALITES.includes(specialite)) {
      return Response.json({ error: `Spécialité invalide. Spécialités valides : ${VALID_SPECIALITES.join(', ')}` }, { status: 400 });
    }
    if (!type || !VALID_TYPES.includes(type)) {
      return Response.json({ error: `Type invalide. Types valides : ${VALID_TYPES.join(', ')}` }, { status: 400 });
    }

    let prompt;
    switch (mode) {
      case 'generate':
        prompt = buildSpecialiteGeneratePrompt(specialite, type, theme || null);
        break;
      case 'correct':
        if (!studentAnswer || !subject) {
          return Response.json({ error: 'La copie de l\u2019étudiant et le sujet sont requis pour la correction' }, { status: 400 });
        }
        prompt = buildSpecialiteCorrectPrompt(specialite, type, subject, studentAnswer);
        break;
    }

    const { text } = await generateWithFallback(prompt);
    const data = parseGeminiJson(text);
    return Response.json({ result: data, mode });
  } catch (error) {
    console.error('Erreur génération spécialité:', error);
    const status = error.status || 500;
    const message = error.userMessage || 'Erreur lors de la génération';
    return Response.json({ error: message }, { status });
  }
}
