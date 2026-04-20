import { buildQCMPrompt, buildExamenPrompt } from '@/utils/prompts';
import { generateWithFallback, parseGeminiJson } from '@/utils/gemini';

const VALID_SUBJECTS = ['libertes', 'civil', 'affaires', 'social', 'penal', 'administratif', 'fiscal', 'international', 'proc-civile', 'proc-penale', 'proc-admin', 'synthese', 'grand-oral', 'anglais'];
const VALID_MODES = ['qcm', 'examen'];

// Fisher-Yates shuffle pour mélanger les options de réponse
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Body JSON invalide' }, { status: 400 });
  }

  const { subject, subjectName, count, mode = 'qcm', ficheTopic = null } = body;

  if (subject && !VALID_SUBJECTS.includes(subject)) {
    return Response.json(
      { error: `Matière invalide. Valeurs acceptées : ${VALID_SUBJECTS.join(', ')}` },
      { status: 400 }
    );
  }
  if (!subject && !ficheTopic) {
    return Response.json({ error: 'Veuillez indiquer une matière ou un sujet précis' }, { status: 400 });
  }
  if (!VALID_MODES.includes(mode)) {
    return Response.json(
      { error: `Mode invalide. Valeurs acceptées : ${VALID_MODES.join(', ')}` },
      { status: 400 }
    );
  }

  const questionCount = Math.max(1, Math.min(50, parseInt(count) || 10));
  const resolvedSubjectName = subjectName || subject || ficheTopic;

  const prompt = mode === 'examen'
    ? buildExamenPrompt(subject, resolvedSubjectName, questionCount, ficheTopic)
    : buildQCMPrompt(subject, resolvedSubjectName, questionCount, ficheTopic);

  try {
    const { text } = await generateWithFallback(prompt);
    const questions = parseGeminiJson(text, { expectArray: true });

    if (!Array.isArray(questions)) {
      return Response.json({ error: 'La réponse n\u2019est pas un tableau' }, { status: 500 });
    }

    const validQuestions = questions
      .filter(q => {
        if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) return false;
        const correctCount = q.options.filter(o => o.correct === true).length;
        if (correctCount !== 1) return false;
        if (!q.options.every(o => typeof o.text === 'string' && o.text.length > 0)) return false;
        return true;
      })
      .map((q, index) => ({
        id: index + 1,
        subject: subject || 'custom',
        question: q.question,
        options: shuffleArray(q.options.map(o => ({
          text: o.text,
          correct: o.correct === true,
        }))),
        explanation: q.explanation || 'Pas d\u2019explication disponible.',
      }));

    if (validQuestions.length === 0) {
      return Response.json({ error: 'Aucune question valide générée' }, { status: 500 });
    }

    return Response.json({ questions: validQuestions });
  } catch (err) {
    console.error('[Gemini API Error]', err);
    const status = err.status || 500;
    const message = err.userMessage || 'Erreur lors de la génération';
    return Response.json({ error: message }, { status });
  }
}
