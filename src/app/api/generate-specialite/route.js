import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildSpecialiteGeneratePrompt, buildSpecialiteCorrectPrompt } from '@/utils/prompts';

const VALID_MODES = ['generate', 'correct'];
const VALID_SPECIALITES = ['civil', 'affaires', 'penal', 'administratif', 'social', 'international', 'fiscal', 'obligations'];
const VALID_TYPES = ['cas-pratique', 'dissertation', 'consultation'];

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Clé API Gemini non configurée' }, { status: 500 });
    }

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

    // Build prompt based on mode
    let prompt;
    switch (mode) {
      case 'generate':
        prompt = buildSpecialiteGeneratePrompt(specialite, type, theme || null);
        break;
      case 'correct':
        if (!studentAnswer || !subject) {
          return Response.json({ error: 'La copie de l\'étudiant et le sujet sont requis pour la correction' }, { status: 400 });
        }
        prompt = buildSpecialiteCorrectPrompt(specialite, type, subject, studentAnswer);
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
    console.error('Erreur génération spécialité:', error);
    return Response.json({ error: 'Erreur lors de la génération' }, { status: 500 });
  }
}
