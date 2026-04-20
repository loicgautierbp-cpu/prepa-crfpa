'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * Loader "premium" pour la génération d'exercices par l'IA.
 *
 * Props :
 *  - variant : 'default' | 'correction'  (change la palette + les étapes)
 *  - title   : titre principal (ex. "Génération de votre cas pratique")
 *  - subtitle: ligne de contexte (ex. "Procédure civile · Cas pratique")
 *  - steps   : tableau de 3-5 étapes affichées en rotation (fallback par variant)
 *  - accent  : couleur Tailwind de l'anneau et de la barre (ex. "#b91c1c"). Optionnel.
 */
const DEFAULT_STEPS = [
  'Analyse du sujet CRFPA…',
  'Identification des problématiques juridiques',
  'Construction du raisonnement',
  'Rédaction et mise en forme',
];

const CORRECTION_STEPS = [
  'Lecture de votre copie…',
  'Comparaison avec le corrigé type',
  'Analyse du plan et des arguments',
  'Rédaction des commentaires',
];

const QUOTES = [
  'Dura lex, sed lex — La loi est dure, mais c\u2019est la loi.',
  'Nul n\u2019est censé ignorer la loi.',
  'Audi alteram partem — Entends l\u2019autre partie.',
  'Pacta sunt servanda — Les conventions doivent être respectées.',
  'Ubi jus ibi remedium — Là où est le droit, il y a un recours.',
  'Error communis facit jus — L\u2019erreur commune fait le droit.',
];

export default function GenerationLoader({
  variant = 'default',
  title,
  subtitle,
  steps,
  accent = '#b91c1c',
}) {
  const rotation = steps && steps.length > 0
    ? steps
    : (variant === 'correction' ? CORRECTION_STEPS : DEFAULT_STEPS);

  const [stepIdx, setStepIdx] = useState(0);
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], []);

  useEffect(() => {
    const id = setInterval(() => {
      setStepIdx((i) => (i + 1) % rotation.length);
    }, 2400);
    return () => clearInterval(id);
  }, [rotation.length]);

  const defaultTitle = variant === 'correction'
    ? 'Correction en cours'
    : 'Génération de votre exercice';

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm">
      {/* Décor : gradient doux + halo flouté */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px 300px at 50% -10%, ${accent}15, transparent 60%)`,
        }}
      />
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="relative px-6 sm:px-10 py-10 sm:py-14 flex flex-col items-center text-center">
        {/* Anneau SVG animé */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6">
          {/* Anneau de fond */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="6"
            />
          </svg>
          {/* Anneau qui tourne */}
          <svg
            className="absolute inset-0 w-full h-full gen-spin"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="gen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accent} stopOpacity="0" />
                <stop offset="60%" stopColor={accent} stopOpacity="0.6" />
                <stop offset="100%" stopColor={accent} stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#gen-grad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="80 200"
            />
          </svg>
          {/* Icône centrale "document" qui pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="gen-pulse w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${accent}15`, color: accent }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Titre */}
        <h3
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-1"
        >
          {title || defaultTitle}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
        )}

        {/* Étape courante + dots */}
        <div className="flex items-center gap-3 mb-2 min-h-[28px]">
          <span className="flex gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full gen-dot gen-dot-1"
              style={{ background: accent }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full gen-dot gen-dot-2"
              style={{ background: accent }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full gen-dot gen-dot-3"
              style={{ background: accent }}
            />
          </span>
          <span
            key={stepIdx}
            className="gen-step-fade text-sm font-medium text-gray-700"
          >
            {rotation[stepIdx]}
          </span>
        </div>

        {/* Barre indéterminée */}
        <div className="w-full max-w-xs h-1.5 bg-gray-100 rounded-full overflow-hidden mt-4">
          <div
            className="h-full rounded-full gen-bar"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
        </div>

        {/* Citation latine */}
        <p className="mt-6 text-xs italic text-gray-400 max-w-sm">
          « {quote} »
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-widest text-gray-400">
          En général 10 à 20 secondes
        </p>
      </div>
    </div>
  );
}
