import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Clé API Gemini non configurée' }, { status: 500 });
    }

    const { image, mimeType, structured } = await request.json();
    if (!image) {
      return Response.json({ error: 'Image manquante' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Mode structuré : dispatch dans les sections (intro, partie1, partie2, conclusion)
    if (structured) {
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.1,
          maxOutputTokens: 8192,
        },
      });

      const result = await model.generateContent([
        {
          inlineData: {
            mimeType: mimeType || 'image/jpeg',
            data: image,
          },
        },
        `Tu es un système OCR spécialisé dans la lecture de copies manuscrites de notes de synthèse juridiques (CRFPA).

Lis attentivement l'image ci-jointe et retranscris FIDÈLEMENT le texte manuscrit.

Puis DISPATCHE le texte dans les 4 sections d'une note de synthèse :
- introduction : l'accroche, la présentation du sujet, la problématique et l'annonce du plan
- partie1 : tout le contenu de la première grande partie (I.) avec ses sous-parties (A. et B.)
- partie2 : tout le contenu de la deuxième grande partie (II.) avec ses sous-parties (A. et B.)
- conclusion : la conclusion si elle existe, sinon une chaîne vide

RÈGLES :
- Retranscris FIDÈLEMENT sans corriger les erreurs
- Si un mot est illisible, indique [illisible]
- Repère les marqueurs de plan (I, II, A, B, 1), 2)) pour dispatcher correctement
- Si tu ne peux pas identifier clairement les parties, mets tout dans "partie1"

Réponds UNIQUEMENT avec un objet JSON :
{"introduction":"...","partie1":"...","partie2":"...","conclusion":"..."}`,
      ]);

      const text = result.response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          data = JSON.parse(jsonMatch[0]);
        } else {
          return Response.json({ error: 'Impossible de structurer le texte' }, { status: 500 });
        }
      }
      return Response.json({ structured: true, ...data });
    }

    // Mode simple : retourne tout le texte brut
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 8192,
      },
    });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: mimeType || 'image/jpeg',
          data: image,
        },
      },
      `Tu es un système OCR spécialisé dans la lecture de copies manuscrites d'examens juridiques français.

Lis attentivement l'image ci-jointe qui contient une copie manuscrite d'un étudiant en droit préparant le CRFPA.

INSTRUCTIONS :
- Retranscris FIDÈLEMENT tout le texte manuscrit visible sur l'image
- Respecte la structure du texte (paragraphes, numérotation, titres, sous-titres)
- Conserve les références juridiques (articles de code, noms d'arrêts, dates)
- Si un mot est illisible, indique [illisible]
- Ne corrige PAS les erreurs de l'étudiant, retranscris tel quel
- Ne commente pas, ne juge pas, retranscris uniquement

Retourne UNIQUEMENT le texte retranscrit, sans aucun commentaire ni formatage markdown.`,
    ]);

    const text = result.response.text();
    return Response.json({ text });
  } catch (error) {
    console.error('Erreur OCR:', error);
    return Response.json({ error: 'Erreur lors de la lecture de l\'image' }, { status: 500 });
  }
}
