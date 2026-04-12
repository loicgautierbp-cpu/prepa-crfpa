'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { QUESTIONS } from '@/data/questions';
import { SUBJECTS } from '@/data/subjects';

export default function QuestionDuJour() {
  const q = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000) % QUESTIONS.length;
    return QUESTIONS[dayIndex];
  }, []);

  const subjectName = useMemo(() => {
    return SUBJECTS.find((s) => s.id === q.subject)?.name || '';
  }, [q]);

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSelect = (idx) => {
    if (validated) return;
    setSelectedIdx(idx);
  };

  const handleValidate = () => {
    if (selectedIdx === null || validated) return;
    setValidated(true);
  };

  const correctIdx = q.options.findIndex((o) => o.correct);
  const isCorrect = validated && selectedIdx === correctIdx;

  const getOptionClasses = (idx) => {
    const base =
      'w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm md:text-base font-medium';

    if (!validated) {
      if (idx === selectedIdx) {
        return `${base} border-[#b91c1c] bg-[#fef2f2] text-[#b91c1c] shadow-sm`;
      }
      return `${base} border-slate-200 hover:border-[#b91c1c]/40 hover:shadow-sm text-slate-700 bg-white`;
    }

    if (idx === correctIdx) {
      return `${base} border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm`;
    }
    if (idx === selectedIdx && !isCorrect) {
      return `${base} border-red-400 bg-red-50 text-red-700`;
    }
    return `${base} border-slate-100 text-slate-400 bg-slate-50`;
  };

  return (
    <div className="bg-white rounded-2xl p-7 md:p-8 shadow-xl shadow-slate-900/[0.08] border border-slate-200/60 quiz-card relative">
      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#b91c1c]/5 via-transparent to-amber-400/5 rounded-3xl blur-sm pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-slate-400 tracking-wide">Question du jour</span>
          <span className="px-3 py-1 bg-[#b91c1c]/10 text-[#b91c1c] text-xs font-bold rounded-full border border-[#b91c1c]/15">
            {subjectName}
          </span>
        </div>
        <p className="text-base md:text-lg font-bold text-slate-900 mb-6 leading-relaxed">
          {q.question}
        </p>
        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={validated}
              className={getOptionClasses(i)}
            >
              <div className="flex items-center justify-between">
                <span>{opt.text}</span>
                {validated && i === correctIdx && (
                  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
                {validated && i === selectedIdx && !isCorrect && (
                  <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={handleValidate}
          disabled={selectedIdx === null || validated}
          className="w-full py-4 bg-[#b91c1c] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#991b1b] transition-colors disabled:opacity-40 disabled:cursor-default shadow-lg shadow-[#b91c1c]/20"
        >
          Valider ma réponse
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
        {validated && (
          <div
            className={`mt-4 p-4 rounded-xl text-sm font-medium ${
              isCorrect
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            <strong>{isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse.'}</strong>{' '}
            {q.explanation}
          </div>
        )}
        <div className="mt-5 text-center">
          <Link href="/entrainement-ecrits" className="text-sm text-[#b91c1c] font-semibold hover:underline">
            Plus de QCM &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
