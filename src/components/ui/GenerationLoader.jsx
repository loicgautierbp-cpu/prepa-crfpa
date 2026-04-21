'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * Loader "premium" pour la génération d'exercices par l'IA.
 * Version dark : fond bordeaux/slate, checklist progressive, glow.
 *
 * Props :
 *  - variant : 'default' | 'correction'  (change les étapes)
 *  - title   : titre principal (ex. "Génération de votre cas pratique")
 *  - subtitle: ligne de contexte (ex. "Procédure civile · Cas pratique")
 *  - steps   : tableau de 3-5 étapes affichées en progression (fallback par variant)
 *  - accent  : couleur hexadécimale de l'anneau et de la barre (ex. "#b91c1c"). Optionnel.
 */
const DEFAULT_STEPS = [
  'Analyse du sujet CRFPA',
  'Identification des problématiques juridiques',
  'Construction du raisonnement',
  'Rédaction et mise en forme',
];

const CORRECTION_STEPS = [
  'Lecture de votre copie',
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
    <div
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b2e 55%, #3b0a1a 100%)',
      }}
    >
      {/* Décor — halos lumineux */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none gen-halo-1"
        style={{ background: accent }}
      />
      <div
        className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none gen-halo-2"
        style={{ background: '#6366f1' }}
      />

      {/* Grille décorative très subtile */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">

        {/* Badge "IA au travail" */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1 text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-6">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: accent }} />
            <span className="relative rounded-full w-2 h-2" style={{ background: accent }} />
          </span>
          Intelligence artificielle au travail
        </div>

        {/* Anneau SVG animé + icône glow */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6">
          {/* Glow arrière */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60 gen-pulse"
            style={{ background: accent }}
          />

          {/* Anneau de fond */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
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
                <stop offset="55%" stopColor={accent} stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fca5a5" stopOpacity="1" />
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
              strokeDasharray="90 200"
            />
          </svg>

          {/* Icône balance (droit) centrée */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, #7f1d1d 100%)`,
                boxShadow: `0 0 32px ${accent}55`,
              }}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18 7 3m-7-3L5 6m14 0-3 8a3 3 0 0 0 6 0l-3-8Zm-14 0L2 14a3 3 0 0 0 6 0L5 6Zm0 15h14" />
              </svg>
            </div>
          </div>
        </div>

        {/* Titre */}
        <h3
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-xl sm:text-2xl font-bold text-white mb-1"
        >
          {title || defaultTitle}
        </h3>
        {subtitle && (
          <p className="text-sm text-white/50 mb-7">{subtitle}</p>
        )}

        {/* Checklist des étapes */}
        <ul className="w-full max-w-sm flex flex-col gap-2.5 mb-6 text-left">
          {rotation.map((label, idx) => {
            const isDone = idx < stepIdx;
            const isActive = idx === stepIdx;
            return (
              <li
                key={label}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-x-0' : isDone ? 'opacity-60' : 'opacity-30'
                }`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 transition-all ${
                    isActive ? 'scale-110' : ''
                  }`}
                  style={{
                    background: isDone || isActive ? accent : 'rgba(255,255,255,0.08)',
                    boxShadow: isActive ? `0 0 16px ${accent}99` : 'none',
                  }}
                >
                  {isDone ? (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : isActive ? (
                    <svg className="w-3 h-3 text-white gen-spin" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  )}
                </span>
                <span
                  className={`text-sm transition-colors ${
                    isActive ? 'text-white font-semibold' : isDone ? 'text-white/60 line-through decoration-white/20' : 'text-white/40'
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Barre indéterminée */}
        <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full gen-bar"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, #fca5a5, ${accent}, transparent)` }}
          />
        </div>

        {/* Citation latine */}
        <p className="mt-7 text-xs italic text-white/50 max-w-sm">
          « {quote} »
        </p>
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/30">
          En général 10 à 20 secondes
        </p>
      </div>
    </div>
  );
}
