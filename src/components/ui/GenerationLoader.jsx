'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * Loader sobre pour la génération d'exercices.
 * Carte blanche, anneau bordeaux, checklist progressive.
 *
 * Props :
 *  - variant : 'default' | 'correction'  (change les étapes)
 *  - title   : titre principal
 *  - subtitle: ligne de contexte
 *  - steps   : tableau d'étapes (fallback par variant)
 *  - accent  : couleur hexadécimale (défaut "#b91c1c")
 */
const DEFAULT_STEPS = [
  'Analyse du sujet',
  'Construction du raisonnement',
  'Rédaction',
  'Mise en forme finale',
];

const CORRECTION_STEPS = [
  'Lecture de votre copie',
  'Comparaison avec le corrigé type',
  'Analyse des arguments',
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
    : 'Préparation de votre sujet';

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm">
      {/* Halo bordeaux très subtil en haut */}
      <div
        className="absolute inset-x-0 top-0 h-56 pointer-events-none"
        style={{
          background: `radial-gradient(600px 180px at 50% 0%, ${accent}12, transparent 70%)`,
        }}
      />

      <div className="relative px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">

        {/* Anneau + compteur central */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
          {/* Anneau de fond */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="6"
            />
          </svg>

          {/* Anneau qui tourne */}
          <svg
            className="absolute inset-0 w-full h-full gen-spin"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke={accent}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="60 200"
              opacity="0.9"
            />
          </svg>

          {/* Compteur étape x/n */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl sm:text-2xl font-bold text-slate-900 leading-none"
              >
                {stepIdx + 1}<span className="text-slate-300">/{rotation.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Titre */}
        <h3
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-xl sm:text-2xl font-bold text-slate-900 mb-1"
        >
          {title || defaultTitle}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-500 mb-7">{subtitle}</p>
        )}

        {/* Checklist des étapes */}
        <ul className="w-full max-w-sm flex flex-col gap-2.5 mb-6 text-left">
          {rotation.map((label, idx) => {
            const isDone = idx < stepIdx;
            const isActive = idx === stepIdx;
            return (
              <li
                key={label}
                className="flex items-center gap-3 transition-opacity duration-500"
              >
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 transition-all"
                  style={{
                    background: isDone ? accent : isActive ? `${accent}18` : '#f1f5f9',
                    border: isActive ? `1.5px solid ${accent}` : 'none',
                  }}
                >
                  {isDone ? (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full gen-pulse-dot" style={{ background: accent }} />
                  ) : (
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                  )}
                </span>
                <span
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-slate-900 font-medium'
                      : isDone
                      ? 'text-slate-400'
                      : 'text-slate-400'
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Barre indéterminée */}
        <div className="w-full max-w-xs h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full gen-bar"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
        </div>

        {/* Citation latine */}
        <p className="mt-7 text-xs italic text-slate-400 max-w-sm">
          « {quote} »
        </p>
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
          En général 10 à 20 secondes
        </p>
      </div>
    </div>
  );
}
