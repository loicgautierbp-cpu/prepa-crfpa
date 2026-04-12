import { GoogleGenerativeAI } from '@google/generative-ai';

const CRFPA_CONTEXT = "Le CRFPA est l'examen national d'accès à la profession d'avocat en France. Le grand oral porte sur les libertés et droits fondamentaux (coefficient 4). L'épreuve consiste en 1h de préparation + 15 min d'exposé + 30 min d'échange avec le jury.";

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Clé API Gemini non configurée' }, { status: 500 });
    }

    const body = await request.json();
    const { mode } = body;

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

    let prompt;

    if (mode === 'expose') {
      prompt = `Tu es un professeur de droit expert préparant des étudiants au grand oral du CRFPA.
${CRFPA_CONTEXT}

Génère un SUJET DE GRAND ORAL portant sur les libertés et droits fondamentaux.

Le sujet doit :
- Porter sur une question fondamentale en matière de libertés (CEDH, Constitution, QPC, droit de l'UE)
- Permettre une réflexion structurée en 2 parties
- Être formulé comme un vrai sujet d'examen
- Intégrer des enjeux actuels et des tensions juridiques

Réponds avec un objet JSON :
{
  "titre": "Intitulé du sujet tel qu'il serait tiré au sort",
  "theme": "Thème principal",
  "consigne": "Consigne complémentaire éventuelle",
  "indications": "Pistes de réflexion et textes/arrêts clés à mobiliser (sans donner le plan)",
  "planAttendu": "Plan type I/A/B - II/A/B avec intitulés (pour la correction uniquement)"
}

JUSTE le JSON.`;
    } else if (mode === 'questions') {
      prompt = `Tu es un jury du grand oral du CRFPA, composé de professeurs de droit et d'avocats.
${CRFPA_CONTEXT}

Génère 7 QUESTIONS que le jury poserait lors de l'entretien de 30 minutes.

Les questions doivent couvrir :
- Libertés fondamentales (CEDH, bloc de constitutionnalité, QPC) : 3 questions
- Déontologie de l'avocat (RIN, secret professionnel, conflits d'intérêts) : 2 questions
- Actualité juridique et culture générale juridique : 2 questions

Les questions doivent être :
- Précises et déstabilisantes (comme un vrai jury)
- De difficulté croissante
- Certaines avec des pièges ou des cas limites

Réponds avec un objet JSON :
{
  "questions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7"
  ]
}

JUSTE le JSON.`;
    } else if (mode === 'correct-expose') {
      const { sujet, plan, expose } = body;
      prompt = `Tu es un correcteur expert du grand oral du CRFPA, exigeant et rigoureux. Tu notes de manière ferme, comme un vrai jury.
${CRFPA_CONTEXT}

SUJET : ${JSON.stringify(sujet)}

PLAN DE L'ÉTUDIANT :
"""
${plan || '(non fourni)'}
"""

EXPOSÉ DE L'ÉTUDIANT :
"""
${expose}
"""

Corrige cet exposé de grand oral de niveau CRFPA. Sois exigeant sur :
- La structure du plan (I/II, A/B, transitions)
- La qualité juridique (références aux textes, jurisprudence, précision)
- La problématique et l'argumentation
- La capacité à prendre position tout en nuançant
- L'oralité (clarté, pédagogie, éloquence même à l'écrit)

Note sur 20 (la moyenne des candidats est autour de 10-11). Sois ferme.

Réponds avec un objet JSON :
{
  "note": 12,
  "appreciation": "Appréciation globale en 1-2 phrases",
  "correction": "Correction détaillée en HTML (plan attendu, arguments manqués, erreurs juridiques, ce qui était bien). Utilise <h4>, <p>, <ul>, <li>, <b>.",
  "pointsForts": ["Point fort 1", "Point fort 2"],
  "pointsFaibles": ["Point faible 1", "Point faible 2"],
  "conseilsOralite": "Conseils spécifiques pour l'oralité en HTML (<p>, <ul>)"
}

JUSTE le JSON.`;
    } else if (mode === 'correct-questions') {
      const { answers } = body;
      prompt = `Tu es un jury du grand oral du CRFPA. Tu évalues les réponses d'un candidat lors de l'entretien de 30 minutes. Sois exigeant.
${CRFPA_CONTEXT}

QUESTIONS ET RÉPONSES DU CANDIDAT :
${answers.map((qa, i) => `Q${i + 1}: ${qa.question}\nRéponse: ${qa.answer}`).join('\n\n')}

Évalue chaque réponse et donne une note globale. Sois ferme (la moyenne est 10-11/20).

Réponds avec un objet JSON :
{
  "note": 11,
  "appreciation": "Appréciation globale en 1-2 phrases",
  "correction": "Évaluation détaillée de chaque réponse en HTML. Pour chaque question : ce qui était attendu, ce qui manque, les erreurs. Utilise <h4>Q1: ...</h4>, <p>, <ul>, <li>, <b>.",
  "pointsForts": ["Point fort 1", "Point fort 2"],
  "pointsFaibles": ["Point faible 1", "Point faible 2"],
  "conseilsOralite": "Conseils pour améliorer la prestation orale en HTML"
}

JUSTE le JSON.`;
    } else if (mode === 'anglais') {
      const { type: exerciseType } = body;
      prompt = `Tu es un professeur d'anglais juridique préparant des étudiants au CRFPA.

L'épreuve d'anglais juridique du CRFPA (coefficient 1) évalue la compréhension et l'expression en anglais juridique.

${exerciseType === 'comprehension'
  ? `Génère un exercice de COMPRÉHENSION d'un texte juridique en anglais.

Réponds avec un objet JSON :
{
  "titre": "Titre de l'exercice",
  "type": "comprehension",
  "text": "Un texte juridique en anglais de 200-300 mots (extrait de jugement, article de doctrine, texte de loi anglais/américain)",
  "source": "Source fictive réaliste (ex: Supreme Court, Law Review)",
  "questions": [
    {"question": "Question de compréhension en anglais", "answer": "Réponse attendue"},
    {"question": "Question 2", "answer": "Réponse 2"},
    {"question": "Question 3", "answer": "Réponse 3"},
    {"question": "Question 4", "answer": "Réponse 4"},
    {"question": "Question 5", "answer": "Réponse 5"}
  ]
}`
  : `Génère un exercice de TRADUCTION et EXPRESSION juridique.

Réponds avec un objet JSON :
{
  "titre": "Titre de l'exercice",
  "type": "expression",
  "textFR": "Un court texte juridique en français (100-150 mots) à traduire en anglais",
  "theme": "Thème juridique (ex: contract law, tort law, criminal procedure)",
  "essayTopic": "Sujet de rédaction en anglais juridique (100-200 mots attendus)",
  "vocabulaire": ["terme juridique 1 = traduction", "terme 2 = traduction", "terme 3 = traduction", "terme 4 = traduction", "terme 5 = traduction"]
}`}

JUSTE le JSON.`;
    } else if (mode === 'correct-anglais') {
      const { exercise, studentAnswer: answer } = body;
      prompt = `Tu es un correcteur d'anglais juridique du CRFPA, exigeant.

EXERCICE : ${JSON.stringify(exercise)}

RÉPONSE DE L'ÉTUDIANT :
"""
${answer}
"""

Corrige de manière ferme. Note sur 20. Évalue : précision du vocabulaire juridique, grammaire, compréhension, qualité de l'expression.

Réponds avec un objet JSON :
{
  "note": 12,
  "appreciation": "Appréciation en 1-2 phrases",
  "correction": "Correction détaillée en HTML avec les bonnes réponses, erreurs, traductions correctes. <h4>, <p>, <ul>, <li>, <b>.",
  "pointsForts": ["Point fort 1"],
  "pointsFaibles": ["Point faible 1"]
}

JUSTE le JSON.`;
    } else {
      return Response.json({ error: 'Mode invalide' }, { status: 400 });
    }

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        return Response.json({ error: 'Réponse IA invalide' }, { status: 500 });
      }
    }

    return Response.json({ result: data, mode });
  } catch (error) {
    console.error('Erreur génération oral:', error);
    return Response.json({ error: 'Erreur lors de la génération' }, { status: 500 });
  }
}
