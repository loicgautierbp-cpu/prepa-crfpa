import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildProcedureGeneratePrompt, buildProcedureCorrectPrompt } from '@/utils/prompts';

const VALID_MODES = ['generate', 'correct'];
const VALID_SPECIALITES = ['proc-civile', 'proc-penale', 'proc-admin'];
const VALID_TYPES = ['cas-pratique', 'consultation'];

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Cl\u00e9 API Gemini non configur\u00e9e' }, { status: 500 });
    }

    const body = await request.json();
    const { mode, specialite, type, theme, subject, studentAnswer } = body;

    if (!mode || !VALID_MODES.includes(mode)) {
      return Response.json({ error: `Mode invalide. Modes valides : ${VALID_MODES.join(', ')}` }, { status: 400 });
    }

    if (!specialite || !VALID_SPECIALITES.includes(specialite)) {
      return Response.json({ error: `Proc\u00e9dure invalide. Proc\u00e9dures valides : ${VALID_SPECIALITES.join(', ')}` }, { status: 400 });
    }

    if (!type || !VALID_TYPES.includes(type)) {
      return Response.json({ error: `Type invalide. Types valides : ${VALID_TYPES.join(', ')}` }, { status: 400 });
    }

    // Build prompt based on mode
    let prompt;
    switch (mode) {
      case 'generate':
        prompt = buildProcedureGeneratePrompt(specialite, type, theme || null);
        break;
      case 'correct':
        if (!studentAnswer || !subject) {
          return Response.json({ error: 'La copie de l\'étudiant et le sujet sont requis pour la correction' }, { status: 400 });
        }
        prompt = buildProcedureCorrectPrompt(specialite, type, subject, studentAnswer);
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
        return Response.json({ error: 'R\u00e9ponse IA invalide' }, { status: 500 });
      }
    }

    return Response.json({ result: data, mode });
  } catch (error) {
    console.error('Erreur g\u00e9n\u00e9ration proc\u00e9dure:', error);
    return Response.json({ error: 'Erreur lors de la g\u00e9n\u00e9ration' }, { status: 500 });
  }
}
