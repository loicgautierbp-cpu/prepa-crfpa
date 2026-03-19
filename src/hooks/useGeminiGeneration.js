'use client';

import { useState, useCallback } from 'react';
import { buildQCMPrompt } from '@/utils/prompts';

const GEMINI_MODEL = 'gemini-2.0-flash';

function getGeminiUrl(apiKey) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;
}

function parseAndValidateQuestions(text, count) {
  let questions;

  try {
    questions = JSON.parse(text);
  } catch {
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      questions = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Format de réponse invalide');
    }
  }

  if (!Array.isArray(questions) || questions.length < Math.min(count, 3)) {
    throw new Error(
      `Nombre insuffisant de questions (${questions?.length || 0})`
    );
  }

  const validated = questions.slice(0, count).filter((q) => {
    return (
      q.question &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      q.options.filter((o) => o.correct).length === 1 &&
      q.explanation
    );
  });

  if (validated.length < Math.min(count, 3)) {
    throw new Error(
      `Trop peu de questions valides (${validated.length}/${count})`
    );
  }

  return validated;
}

export function useGeminiGeneration(apiKey) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const generateQuestions = useCallback(
    async (topic, count) => {
      setIsGenerating(true);
      setError(null);

      try {
        const prompt = buildQCMPrompt(topic, topic, count);
        const url = getGeminiUrl(apiKey);

        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.9,
              topP: 0.95,
              maxOutputTokens: 16384,
              responseMimeType: 'application/json',
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur serveur (${response.status})`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Réponse vide du serveur');

        const questions = parseAndValidateQuestions(text, count);
        return questions;
      } catch (err) {
        setError(err.message || 'Erreur lors de la génération');
        throw err;
      } finally {
        setIsGenerating(false);
      }
    },
    [apiKey]
  );

  return { generateQuestions, isGenerating, error };
}
