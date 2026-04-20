'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { usePremium } from '@/contexts/PremiumContext';
import { useTimer } from '@/hooks/useTimer';

const THEMES = [
  'Liberté d\'expression et ses limites',
  'Droit au respect de la vie privée à l\'ère numérique',
  'Principe de laïcité',
  'Présomption d\'innocence et médiatisation',
  'Droit de propriété et intérêt général',
  'Liberté de manifestation et ordre public',
  'Secret professionnel de l\'avocat',
  'Principe d\'égalité et discriminations positives',
  'Droit à un procès équitable (art. 6 CEDH)',
  'Liberté religieuse et neutralité de l\'État',
  'Protection des données personnelles',
  'Droit au recours effectif',
  'Dignité de la personne humaine',
  'Liberté d\'entreprendre et régulation',
  'Droit à l\'environnement et libertés économiques',
];

const EXERCISE_TYPES = [
  {
    id: 'expose',
    label: 'Exposé oral (15 min)',
    description: 'Préparez un exposé structuré sur un sujet tiré au sort. 1h de préparation, 15 min d\'exposé devant le jury.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    id: 'questions',
    label: 'Questions du jury (30 min)',
    description: 'Entraînez-vous à répondre aux questions pièges du jury sur les libertés fondamentales et la déontologie.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function GrandOralClient({ embedded = false }) {
  const { user } = useAuth();
  const { formatted, start, stop, reset } = useTimer({ mode: 'down', duration: 3600 });
  const upTimer = useTimer({ mode: 'up' });

  const [step, setStep] = useState('type');
  const [selectedType, setSelectedType] = useState(null);
  const [sujet, setSujet] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [correction, setCorrection] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [error, setError] = useState(null);
  const [prepStarted, setPrepStarted] = useState(false);
  const [planNotes, setPlanNotes] = useState('');
  const [juryQuestions, setJuryQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [juryAnswers, setJuryAnswers] = useState([]);
  const [currentJuryAnswer, setCurrentJuryAnswer] = useState('');

  const handleSelectType = (type) => {
    setSelectedType(type);
    setStep('exercise');
  };

  const handleBack = () => {
    if (step === 'exercise') {
      setStep('type');
      setSelectedType(null);
      setSujet(null);
      setStudentAnswer('');
      setPlanNotes('');
      setJuryQuestions(null);
      setCurrentQuestion(0);
      setJuryAnswers([]);
      setCurrentJuryAnswer('');
      setError(null);
      if (prepStarted) { stop(); reset(); setPrepStarted(false); }
    } else if (step === 'correction') {
      setStep('type');
      setSelectedType(null);
      setSujet(null);
      setStudentAnswer('');
      setCorrection(null);
      setPlanNotes('');
      setJuryQuestions(null);
      setCurrentQuestion(0);
      setJuryAnswers([]);
      setCurrentJuryAnswer('');
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: selectedType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la génération');
      if (selectedType === 'expose') {
        setSujet(data.result);
        reset();
        start();
        setPrepStarted(true);
      } else {
        setJuryQuestions(data.result.questions || data.result);
        upTimer.start();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitExpose = async () => {
    if (!studentAnswer.trim() && !planNotes.trim()) return;
    setIsCorrecting(true);
    setError(null);
    stop();
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'correct-expose',
          sujet,
          plan: planNotes,
          expose: studentAnswer,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la correction');
      setCorrection(data.result);
      setStep('correction');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsCorrecting(false);
    }
  };

  const handleNextQuestion = () => {
    setJuryAnswers([...juryAnswers, { question: juryQuestions[currentQuestion], answer: currentJuryAnswer }]);
    setCurrentJuryAnswer('');
    if (currentQuestion < juryQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitJury();
    }
  };

  const handleSubmitJury = async () => {
    const allAnswers = [...juryAnswers, { question: juryQuestions[currentQuestion], answer: currentJuryAnswer }];
    setIsCorrecting(true);
    setError(null);
    upTimer.stop();
    try {
      const res = await fetch('/api/generate-oral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'correct-questions',
          answers: allAnswers,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la correction');
      setCorrection(data.result);
      setStep('correction');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsCorrecting(false);
    }
  };

  return (
    <div className={embedded ? '' : 'min-h-screen bg-[#fef2f2]'}>
      <div className={embedded ? 'max-w-4xl mx-auto' : 'max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12'}>

        {/* Header */}
        <div className="mb-8">
          {embedded && step === 'type' ? (
            <>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Grand <span className="home-gradient-text">oral</span>
              </h2>
              <p className="text-sm text-gray-500">45 min + 1h de préparation — Coefficient 4 — Libertés fondamentales</p>
            </>
          ) : (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                {step === 'type' && "Grand oral"}
                {step === 'exercise' && (selectedType === 'expose' ? 'Préparation de l\'exposé' : 'Questions du jury')}
                {step === 'correction' && "Correction"}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {step === 'type' && "Préparez l'épreuve reine du CRFPA : le grand oral sur les libertés fondamentales."}
                {step === 'exercise' && selectedType === 'expose' && "1 heure de préparation — Rédigez votre plan et vos arguments"}
                {step === 'exercise' && selectedType === 'questions' && "Répondez aux questions du jury comme le jour de l'examen"}
                {step === 'correction' && (selectedType === 'expose' ? 'Exposé oral' : 'Questions du jury')}
              </p>
            </>
          )}
        </div>

        {/* Back */}
        {step !== 'type' && (
          <button onClick={handleBack} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {step === 'correction' ? 'Nouvel exercice' : 'Retour'}
          </button>
        )}

        {/* Type selection */}
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

        {/* Exercise: Exposé */}
        {step === 'exercise' && selectedType === 'expose' && (
          <div className="space-y-6">
            {!sujet ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tirage au sort du sujet</h3>
                <p className="text-sm text-gray-500 mb-6">Un sujet portant sur les libertés fondamentales sera tiré au sort. Vous aurez 1 heure pour préparer votre exposé.</p>
                <button onClick={handleGenerate} disabled={isGenerating}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                  {isGenerating ? 'Tirage en cours...' : 'Tirer un sujet'}
                </button>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              </div>
            ) : (
              <>
                {/* Timer */}
                <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-mono text-lg font-bold text-gray-900">{formatted}</span>
                  <span className="text-sm text-gray-400">Temps de préparation restant</span>
                </div>

                {/* Sujet */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Sujet tiré au sort</span>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-gray-900 mt-3 mb-3">
                    {sujet.titre || sujet.title}
                  </h3>
                  {sujet.consigne && <p className="text-sm text-gray-600">{sujet.consigne}</p>}
                  {sujet.indications && (
                    <div className="mt-3 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                      <p className="font-semibold text-gray-700 mb-1">Indications :</p>
                      <p>{sujet.indications}</p>
                    </div>
                  )}
                </div>

                {/* Plan notes */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Votre plan (brouillon)</h4>
                  <p className="text-sm text-gray-500 mb-3">Structurez votre exposé : introduction, I/A/B, II/A/B, conclusion.</p>
                  <textarea value={planNotes} onChange={(e) => setPlanNotes(e.target.value)}
                    placeholder="I. Première partie&#10;  A) ...&#10;  B) ...&#10;II. Deuxième partie&#10;  A) ...&#10;  B) ..."
                    className="w-full h-40 p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y" />
                </div>

                {/* Exposé */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">Votre exposé</h4>
                    <span className="text-xs text-gray-400">{studentAnswer.split(/\s+/).filter(Boolean).length} mots</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Rédigez les grandes lignes de votre exposé oral (15 minutes).</p>
                  <textarea value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)}
                    placeholder="Mesdames et Messieurs les membres du jury, le sujet qui m'a été soumis porte sur..."
                    className="w-full h-48 p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y" />
                  <div className="flex justify-end mt-4">
                    <button onClick={handleSubmitExpose} disabled={isCorrecting || (!studentAnswer.trim() && !planNotes.trim())}
                      className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                      {isCorrecting ? 'Correction en cours...' : 'Soumettre mon exposé'}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                </div>
              </>
            )}
          </div>
        )}

        {/* Exercise: Questions du jury */}
        {step === 'exercise' && selectedType === 'questions' && (
          <div className="space-y-6">
            {!juryQuestions ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Simulation d&apos;entretien avec le jury</h3>
                <p className="text-sm text-gray-500 mb-6">Le jury vous posera 6 à 8 questions sur les libertés fondamentales, la déontologie et l&apos;actualité juridique.</p>
                <button onClick={handleGenerate} disabled={isGenerating}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                  {isGenerating ? 'Génération...' : 'Commencer l\'entretien'}
                </button>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              </div>
            ) : (
              <>
                {/* Timer */}
                <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-mono text-lg font-bold text-gray-900">{upTimer.formatted}</span>
                  <span className="text-sm text-gray-400">Temps écoulé</span>
                  <span className="ml-auto text-sm font-semibold text-primary-600">Question {currentQuestion + 1}/{juryQuestions.length}</span>
                </div>

                {/* Current question */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-700">J</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 mb-1">Le jury vous demande :</p>
                      <p className="text-gray-900 font-medium">{Array.isArray(juryQuestions) ? juryQuestions[currentQuestion] : juryQuestions[currentQuestion]?.question || juryQuestions[currentQuestion]}</p>
                    </div>
                  </div>

                  <textarea value={currentJuryAnswer} onChange={(e) => setCurrentJuryAnswer(e.target.value)}
                    placeholder="Votre réponse au jury..."
                    className="w-full h-32 p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y" />

                  <div className="flex justify-end mt-4">
                    <button onClick={handleNextQuestion} disabled={!currentJuryAnswer.trim() || isCorrecting}
                      className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 shadow-lg shadow-primary-600/25">
                      {isCorrecting ? 'Correction en cours...' : currentQuestion < juryQuestions.length - 1 ? 'Question suivante' : 'Terminer l\'entretien'}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                </div>

                {/* Previous answers */}
                {juryAnswers.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Réponses précédentes</p>
                    {juryAnswers.map((qa, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs font-semibold text-primary-600 mb-1">Q{i + 1} : {qa.question}</p>
                        <p className="text-sm text-gray-600">{qa.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Correction */}
        {step === 'correction' && correction && (
          <div className="space-y-6">
            {correction.note && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">Note attribuée</p>
                <p className="text-5xl font-black text-primary-600">{correction.note}<span className="text-2xl text-gray-400">/20</span></p>
                {correction.appreciation && <p className="text-sm text-gray-600 mt-3">{correction.appreciation}</p>}
              </div>
            )}

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Correction détaillée</h3>
              <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: correction.correction || correction.commentaire || '' }} />
            </div>

            {(correction.pointsForts || correction.pointsFaibles) && (
              <div className="grid sm:grid-cols-2 gap-4">
                {correction.pointsForts && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                    <h4 className="font-bold text-emerald-800 mb-3">Points forts</h4>
                    <ul className="space-y-2">
                      {(Array.isArray(correction.pointsForts) ? correction.pointsForts : [correction.pointsForts]).map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-emerald-700">
                          <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {correction.pointsFaibles && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <h4 className="font-bold text-red-800 mb-3">Points à améliorer</h4>
                    <ul className="space-y-2">
                      {(Array.isArray(correction.pointsFaibles) ? correction.pointsFaibles : [correction.pointsFaibles]).map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                          <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {correction.conseilsOralite && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h4 className="font-bold text-amber-800 mb-3">Conseils pour l&apos;oralité</h4>
                <div className="text-sm text-amber-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: correction.conseilsOralite }} />
              </div>
            )}

            <button onClick={handleBack}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              Nouvel exercice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
