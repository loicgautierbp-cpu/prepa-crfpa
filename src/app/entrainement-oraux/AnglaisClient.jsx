'use client';
import { useState } from 'react';
import { useTimer } from '@/hooks/useTimer';

const EXERCISE_TYPES = [
  {
    id: 'comprehension',
    label: 'Compréhension de texte',
    description: 'Lisez un texte juridique en anglais et répondez aux questions de compréhension.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 'expression',
    label: 'Traduction et expression',
    description: 'Traduisez un texte juridique et rédigez un court essai en anglais juridique.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
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
    <div className={embedded ? '' : 'min-h-screen bg-gray-50/80'}>
      <div className={embedded ? 'max-w-4xl mx-auto' : 'max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12'}>

        <div className="mb-8">
          {embedded && step === 'type' ? (
            <>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Anglais <span className="home-gradient-text">juridique</span>
              </h2>
              <p className="text-sm text-gray-500">Coefficient 1 — Compréhension et expression en anglais juridique</p>
            </>
          ) : (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                {step === 'type' && "Anglais juridique"}
                {step === 'exercise' && (selectedType === 'comprehension' ? 'Compréhension' : 'Traduction et expression')}
                {step === 'correction' && "Correction"}
              </h1>
              <p className="text-gray-500 text-sm">{step === 'type' && "Entraînez-vous à l'épreuve d'anglais juridique du CRFPA."}</p>
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
          <div className="grid sm:grid-cols-2 gap-4">
            {EXERCISE_TYPES.map((type) => (
              <button key={type.id} onClick={() => handleSelectType(type.id)}
                className="group bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-primary-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-100 transition-colors">
                  {type.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">{type.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{type.description}</p>
              </button>
            ))}
          </div>
        )}

        {step === 'exercise' && (
          <div className="space-y-6">
            {!exercise ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{selectedType === 'comprehension' ? 'Reading Comprehension' : 'Translation & Writing'}</h3>
                <p className="text-sm text-gray-500 mb-6">An exercise will be generated on a legal English topic.</p>
                <button onClick={handleGenerate} disabled={isGenerating}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                  {isGenerating ? 'Generating...' : 'Generate exercise'}
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
