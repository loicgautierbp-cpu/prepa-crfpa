'use client';
import { useState } from 'react';
import { useTimer } from '@/hooks/useTimer';
import GenerationLoader from '@/components/ui/GenerationLoader';

const EXERCISE_TYPES = [
  {
    id: 'comprehension',
    label: 'Compréhension de texte',
    tagline: 'Reading comprehension',
    description: 'Lisez un texte juridique en anglais (common law, contract law, tort law...) et répondez aux questions de compréhension.',
    duree: '30 min',
    difficulty: 'Accessible',
    tags: ['Vocabulaire', 'Compréhension', 'Legal English'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: {
      border: 'border-t-emerald-300',
      iconBg: 'bg-emerald-50',
      iconText: 'text-emerald-500',
      tagBg: 'bg-emerald-50/60',
      tagText: 'text-emerald-700',
      tagBorder: 'border-emerald-100',
      badgeBg: 'bg-emerald-100 text-emerald-700',
    },
  },
  {
    id: 'expression',
    label: 'Traduction et expression',
    tagline: 'Translation & writing',
    description: 'Traduisez un texte juridique du français vers l\'anglais et rédigez un court essai en anglais juridique.',
    duree: '45 min',
    difficulty: 'Exigeant',
    tags: ['Traduction', 'Rédaction', 'Terminologie'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
    color: {
      border: 'border-t-sky-300',
      iconBg: 'bg-sky-50',
      iconText: 'text-sky-500',
      tagBg: 'bg-sky-50/60',
      tagText: 'text-sky-700',
      tagBorder: 'border-sky-100',
      badgeBg: 'bg-sky-100 text-sky-700',
    },
  },
];

const KEY_TOPICS_ANGLAIS = [
  'Common law',
  'Contract law',
  'Tort law',
  'Criminal law',
  'Terminologie juridique',
  'Traduction FR ⇄ EN',
];

export default function AnglaisClient({ embedded = false }) {
  const { formatted, start, stop, reset } = useTimer({ mode: 'up' });

  const [step, setStep] = useState('type');
  const [selectedType, setSelectedType] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [correction, setCorrection] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [error, setError] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setStep('exercise');
  };

  const handleStartExercise = async (type) => {
    setSelectedType(type);
    setIsGenerating(true);
    setError(null);
    setStep('exercise');
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'anglais', type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur');
      setExercise(data.result);
      reset();
      start();
      setTimerStarted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBack = () => {
    if (step === 'exercise') {
      setStep('type');
      setSelectedType(null);
      setExercise(null);
      setStudentAnswer('');
      setError(null);
      if (timerStarted) { stop(); reset(); setTimerStarted(false); }
    } else if (step === 'correction') {
      setStep('type');
      setSelectedType(null);
      setExercise(null);
      setStudentAnswer('');
      setCorrection(null);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'anglais', type: selectedType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur');
      setExercise(data.result);
      reset();
      start();
      setTimerStarted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async () => {
    if (!studentAnswer.trim()) return;
    setIsCorrecting(true);
    setError(null);
    stop();
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'correct-anglais', exercise, studentAnswer }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur');
      setCorrection(data.result);
      setStep('correction');
    } catch (err) {
      setError(err.message);
      start();
    } finally {
      setIsCorrecting(false);
    }
  };

  return (
    <div className={embedded ? '' : 'min-h-screen bg-[#fef2f2]'}>
      <div className={embedded ? 'max-w-4xl mx-auto' : 'max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12'}>

        <div className="mb-10">
          {embedded && step === 'type' ? (
            <>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Anglais <span className="home-gradient-text">juridique</span>
              </h2>
              <p className="text-sm text-gray-500">Coefficient 1 — Compréhension et expression en anglais juridique</p>
            </>
          ) : step === 'type' && !embedded ? (
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Épreuve d&apos;admission — Coefficient 1
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                Anglais <span className="home-gradient-text">juridique</span>
              </h1>
              <div className="w-12 h-1 bg-[#991b1b] mx-auto mt-4 mb-6 rounded-full"></div>
              <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base mb-6">
                Entraînez-vous à l&apos;épreuve d&apos;anglais juridique du CRFPA : compréhension de textes, traduction et expression écrite.
              </p>
              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-semibold text-slate-700">30-45 min</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                  <span className="font-semibold text-slate-700">Coefficient 1</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="font-semibold text-slate-700">Legal English</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                {step === 'exercise' && (selectedType === 'comprehension' ? 'Compréhension' : 'Traduction et expression')}
                {step === 'correction' && "Correction"}
              </h1>
            </>
          )}
        </div>

        {step !== 'type' && (
          <button onClick={handleBack} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {step === 'correction' ? 'Nouvel exercice' : 'Retour'}
          </button>
        )}

        {step === 'type' && (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              {EXERCISE_TYPES.map((type) => (
                <div
                  key={type.id}
                  className={`lift group relative bg-white rounded-2xl border border-slate-200 border-t-4 ${type.color.border} p-6 flex flex-col transition-all hover:shadow-xl`}
                >
                  {/* Badge */}
                  <span className={`absolute top-5 right-5 px-2.5 py-1 ${type.color.badgeBg} text-[11px] font-bold rounded-full`}>
                    {type.difficulty}
                  </span>

                  {/* Icon */}
                  <div className={`w-14 h-14 ${type.color.iconBg} rounded-xl flex items-center justify-center ${type.color.iconText} mb-4 transition-transform group-hover:scale-105`}>
                    {type.icon}
                  </div>

                  {/* Tagline */}
                  <p className={`text-xs font-semibold uppercase tracking-wider ${type.color.iconText} mb-1`}>
                    {type.tagline}
                  </p>

                  {/* Title */}
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-slate-900 mb-2">
                    {type.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                    {type.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {type.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 ${type.color.tagBg} border ${type.color.tagBorder} text-[11px] font-medium ${type.color.tagText} rounded-md`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {type.duree}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                      </svg>
                      Correction IA détaillée
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleStartExercise(type.id)}
                    disabled={isGenerating}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-sm shadow-[#b91c1c]/20 disabled:opacity-60 disabled:cursor-wait"
                  >
                    {isGenerating && selectedType === type.id ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        Commencer l&apos;entraînement
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Thèmes couverts */}
            {!embedded && (
              <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#b91c1c]/10 text-[#b91c1c] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-slate-900">
                      Thèmes couverts par l&apos;IA
                    </h3>
                    <p className="text-xs text-slate-500">Textes et exercices issus des principales branches du droit anglo-saxon</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {KEY_TOPICS_ANGLAIS.map((topic) => (
                    <span key={topic} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 rounded-lg">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Conseil */}
            {!embedded && (
              <div className="mt-6 bg-amber-50/60 border border-amber-200/60 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">Conseil d&apos;entraînement</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      L&apos;épreuve d&apos;anglais juridique valorise la précision du vocabulaire technique. Travaillez les termes de <em>common law</em>, <em>contract</em> et <em>tort</em> en alternant compréhension et expression pour progresser sur les deux compétences.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {step === 'exercise' && (
          <div className="space-y-6">
            {!exercise && isGenerating ? (
              <GenerationLoader
                title="Génération de votre exercice d'anglais"
                subtitle={selectedType === 'comprehension'
                  ? "Anglais juridique · Compréhension"
                  : "Anglais juridique · Expression écrite"}
                accent="#b91c1c"
              />
            ) : !exercise ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{selectedType === 'comprehension' ? 'Reading Comprehension' : 'Translation & Writing'}</h3>
                <p className="text-sm text-gray-500 mb-6">An exercise will be generated on a legal English topic.</p>
                <button onClick={handleGenerate}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25">
                  Generate exercise
                </button>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-mono text-lg font-bold text-gray-900">{formatted}</span>
                  <span className="text-sm text-gray-400">Temps écoulé</span>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">{exercise.type === 'comprehension' ? 'Reading' : 'Translation'}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-gray-900 mt-3 mb-4">{exercise.titre}</h3>

                  {exercise.text && (
                    <div className="bg-gray-50 rounded-lg p-5 mb-4 border-l-4 border-red-300">
                      <p className="text-xs font-semibold text-gray-500 mb-2">{exercise.source || 'Legal text'}</p>
                      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{exercise.text}</p>
                    </div>
                  )}

                  {exercise.textFR && (
                    <div className="bg-gray-50 rounded-lg p-5 mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">Texte à traduire en anglais :</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{exercise.textFR}</p>
                    </div>
                  )}

                  {exercise.questions && (
                    <div className="mb-4">
                      <p className="font-semibold text-gray-900 text-sm mb-2">Questions:</p>
                      <ol className="list-decimal list-inside space-y-1.5">
                        {exercise.questions.map((q, i) => (
                          <li key={i} className="text-sm text-gray-700">{q.question || q}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {exercise.essayTopic && (
                    <div className="bg-amber-50 rounded-lg p-4 mb-4">
                      <p className="text-xs font-semibold text-amber-700 mb-1">Essay topic:</p>
                      <p className="text-sm text-gray-800">{exercise.essayTopic}</p>
                    </div>
                  )}

                  {exercise.vocabulaire && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">Vocabulaire utile :</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.vocabulaire.map((v, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-lg">{v}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">Your answer</h4>
                    <span className="text-xs text-gray-400">{studentAnswer.split(/\s+/).filter(Boolean).length} words</span>
                  </div>
                  <textarea value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)}
                    placeholder={selectedType === 'comprehension' ? "Answer the questions in English..." : "Write your translation and essay in English..."}
                    className="w-full h-48 p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y" />
                  <div className="flex justify-end mt-4">
                    <button onClick={handleSubmit} disabled={isCorrecting || !studentAnswer.trim()}
                      className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                      {isCorrecting ? 'Correcting...' : 'Submit'}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                </div>
              </>
            )}
          </div>
        )}

        {step === 'correction' && correction && (
          <div className="space-y-6">
            {correction.note && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">Note</p>
                <p className="text-5xl font-black text-primary-600">{correction.note}<span className="text-2xl text-gray-400">/20</span></p>
                {correction.appreciation && <p className="text-sm text-gray-600 mt-3">{correction.appreciation}</p>}
              </div>
            )}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Correction</h3>
              <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: correction.correction || '' }} />
            </div>
            {(correction.pointsForts || correction.pointsFaibles) && (
              <div className="grid sm:grid-cols-2 gap-4">
                {correction.pointsForts && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                    <h4 className="font-bold text-emerald-800 mb-3">Points forts</h4>
                    <ul className="space-y-2">
                      {(Array.isArray(correction.pointsForts) ? correction.pointsForts : [correction.pointsForts]).map((p, i) => (
                        <li key={i} className="text-sm text-emerald-700">{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {correction.pointsFaibles && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <h4 className="font-bold text-red-800 mb-3">À améliorer</h4>
                    <ul className="space-y-2">
                      {(Array.isArray(correction.pointsFaibles) ? correction.pointsFaibles : [correction.pointsFaibles]).map((p, i) => (
                        <li key={i} className="text-sm text-red-700">{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            <button onClick={handleBack} className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              Nouvel exercice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
