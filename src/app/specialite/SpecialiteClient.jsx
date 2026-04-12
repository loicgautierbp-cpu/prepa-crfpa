'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SPECIALITES, QUESTIONS } from '@/data/quiz-specialite';

const COLORS = {
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', bar: 'bg-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-200' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700', bar: 'bg-violet-500', light: 'bg-violet-50', border: 'border-violet-200' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-700', bar: 'bg-rose-500', light: 'bg-rose-50', border: 'border-rose-200' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', bar: 'bg-amber-500', light: 'bg-amber-50', border: 'border-amber-200' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700', bar: 'bg-cyan-500', light: 'bg-cyan-50', border: 'border-cyan-200' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-700', bar: 'bg-sky-500', light: 'bg-sky-50', border: 'border-sky-200' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', bar: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200' },
};

export default function SpecialiteClient() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIdx) => {
    const newAnswers = { ...answers, [currentQ]: optionIdx };
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 400);
    }
  };

  const scores = useMemo(() => {
    const s = {};
    SPECIALITES.forEach(sp => { s[sp.id] = 0; });
    Object.entries(answers).forEach(([qIdx, optIdx]) => {
      const q = QUESTIONS[parseInt(qIdx)];
      if (!q) return;
      const option = q.options[optIdx];
      if (!option?.scores) return;
      Object.entries(option.scores).forEach(([specId, pts]) => {
        s[specId] = (s[specId] || 0) + pts;
      });
    });
    return s;
  }, [answers]);

  const ranking = useMemo(() => {
    return SPECIALITES
      .map(sp => ({ ...sp, score: scores[sp.id] || 0 }))
      .sort((a, b) => b.score - a.score);
  }, [scores]);

  const maxScore = ranking[0]?.score || 1;

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
  };

  // ===== QUIZ VIEW =====
  if (!showResult) {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ) / QUESTIONS.length) * 100;

    return (
      <section className="min-h-screen bg-gradient-to-br from-[#f5ece4] via-[#fef2f2] to-[#f5ece4]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Header */}
          {currentQ === 0 && (
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Quiz gratuit — 3 min
              </span>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-3">
                Quelle <span className="home-gradient-text">spécialité</span> choisir ?
              </h1>
              <div className="w-16 h-0.5 bg-accent-500 mx-auto mt-4 mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto">
                Répondez à 15 questions pour découvrir la spécialité du CRFPA qui correspond le mieux à votre profil, vos affinités et vos ambitions professionnelles.
              </p>
            </div>
          )}

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Question {currentQ + 1}/{QUESTIONS.length}</span>
              <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                    answers[currentQ] === idx
                      ? 'border-primary-500 bg-primary-50 text-primary-800'
                      : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold mr-3">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ(currentQ - 1)}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Question précédente
            </button>
          )}
        </div>
      </section>
    );
  }

  // ===== RESULT VIEW =====
  const top3 = ranking.slice(0, 3);
  const winner = top3[0];
  const winnerColor = COLORS[winner.color] || COLORS.emerald;

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f5ece4] via-[#fef2f2] to-[#f5ece4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Votre spécialité <span className="home-gradient-text">idéale</span>
          </h1>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mt-4 mb-4"></div>
          <p className="text-gray-600">Voici vos résultats basés sur vos 15 réponses.</p>
        </div>

        {/* Winner card */}
        <div className={`${winnerColor.light} border-2 ${winnerColor.border} rounded-xl p-8 mb-8`}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${winnerColor.bg} ${winnerColor.text}`}>Recommandé pour vous</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{winner.icon}</span>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-gray-900">{winner.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{winner.description}</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-4 mt-4">
            <p className="text-sm font-medium text-gray-800">{winner.conseil}</p>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
          <h3 className="font-bold text-gray-900 mb-5">Votre profil par spécialité</h3>
          <div className="space-y-4">
            {ranking.map((sp, idx) => {
              const c = COLORS[sp.color] || COLORS.emerald;
              const pct = maxScore > 0 ? Math.round((sp.score / maxScore) * 100) : 0;
              return (
                <div key={sp.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{sp.icon}</span>
                      <span className={`text-sm font-semibold ${idx === 0 ? 'text-gray-900' : 'text-gray-700'}`}>{sp.name}</span>
                      {idx === 0 && <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>Top 1</span>}
                    </div>
                    <span className="text-sm font-bold text-gray-500">{pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.bar} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top 3 details */}
        <div className="space-y-4 mb-10">
          <h3 className="font-bold text-gray-900">Détails de vos 3 meilleures spécialités</h3>
          {top3.map((sp, idx) => {
            const c = COLORS[sp.color] || COLORS.emerald;
            return (
              <div key={sp.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full ${c.bg} ${c.text} text-sm font-bold`}>{idx + 1}</span>
                  <span className="text-lg">{sp.icon}</span>
                  <h4 className="font-bold text-gray-900">{sp.name}</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5">Programme</p>
                    <ul className="space-y-1">
                      {sp.programme.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-gray-600">
                          <span className="text-gray-300 mt-0.5">•</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5">Débouchés</p>
                    <ul className="space-y-1">
                      {sp.debouches.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-gray-600">
                          <span className="text-gray-300 mt-0.5">•</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span><strong className="text-gray-700">Candidats :</strong> {sp.taux}</span>
                  <span><strong className="text-gray-700">Difficulté :</strong> {sp.difficulte}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-primary-950 rounded-xl p-8 text-center">
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-white mb-3">
            Prêt à préparer le CRFPA ?
          </h3>
          <p className="text-primary-200 text-sm mb-6 max-w-md mx-auto">
            Entraînez-vous avec des QCM illimités, des fiches de cours et un mode examen dans les 14 matières du programme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/inscription"
              className="px-8 py-3 bg-white text-primary-950 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Créer un compte gratuit
            </Link>
            <Link
              href="/tarifs"
              className="px-8 py-3 border-2 border-primary-300 text-primary-200 font-bold rounded-xl hover:bg-primary-900 transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>

        {/* Restart */}
        <div className="text-center mt-6">
          <button onClick={handleRestart} className="text-sm text-gray-500 hover:text-primary-600 font-medium transition-colors">
            Refaire le quiz
          </button>
        </div>
      </div>
    </section>
  );
}
