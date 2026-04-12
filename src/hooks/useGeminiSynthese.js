'use client';
import { useState, useCallback } from 'react';

export function useGeminiSynthese() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const generate = useCallback(async (mode, theme = null) => {
    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/generate-synthese', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, theme }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Erreur lors de la génération');
      }

      const data = await res.json();
      setResult(data.result);
      return data.result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { generate, isGenerating, error, result, reset };
}
