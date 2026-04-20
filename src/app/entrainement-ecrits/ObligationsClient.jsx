'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { usePremium } from '@/contexts/PremiumContext';
import { useTimer } from '@/hooks/useTimer';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import UpgradeModal from '@/components/ui/UpgradeModal';

const EXERCISE_TYPES = [
  {
    id: 'cas-pratique',
    label: 'Cas pratique',
    description: 'Résolvez un cas concret en droit des obligations : formation du contrat, responsabilité civile, régime général des obligations.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    color: { border: 'border-t-emerald-300', iconBg: 'bg-emerald-50', iconText: 'text-emerald-500' },
  },
  {
    id: 'dissertation',
    label: 'Dissertation juridique',
    description: 'Construisez une argumentation structurée sur une problématique en droit des contrats, responsabilité ou régime des obligations.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: { border: 'border-t-amber-300', iconBg: 'bg-amber-50', iconText: 'text-amber-600' },
  },
  {
    id: 'consultation',
    label: 'Consultation juridique',
    description: 'Rédigez une consultation pour un client confronté à un litige en matière contractuelle, délictuelle ou de régime des obligations.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    color: { border: 'border-t-sky-300', iconBg: 'bg-sky-50', iconText: 'text-sky-500' },
  },
];

export default function ObligationsClient({ embedded = false }) {
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const { formatted, start, stop, reset } = useTimer({ mode: 'up' });

  const [step, setStep] = useState('type');
  const [selectedType, setSelectedType] = useState(null);
  const [subject, setSubject] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [correction, setCorrection] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [error, setError] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleStartExercise = async (type) => {
    // TODO: remettre après les tests
    // if (!user) { setShowLogin(true); return; }
    setSelectedType(type);
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-specialite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'generate', specialite: 'obligations', type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la génération');
      setSubject(data.result);
      setStep('exercise');
      reset();
      start();
      setTimerStarted(true);
    } catch (err) {
      setError(err.message);
      setSelectedType(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBack = () => {
    if (step === 'exercise') {
      setStep('type');
      setSelectedType(null);
      setSubject(null);
      setStudentAnswer('');
      setError(null);
      setUploadedFileName(null);
      setIsUploading(false);
      if (timerStarted) { stop(); reset(); setTimerStarted(false); }
    } else if (step === 'correction') {
      setStep('exercise');
      setCorrection(null);
      setStudentAnswer('');
      setUploadedFileName(null);
      setIsUploading(false);
      if (timerStarted) { stop(); reset(); setTimerStarted(false); }
    }
  };

  const handleRestart = () => {
    setStep('type');
    setSelectedType(null);
    setSubject(null);
    setStudentAnswer('');
    setCorrection(null);
    setError(null);
    setIsGenerating(false);
    setIsCorrecting(false);
    setUploadedFileName(null);
    setIsUploading(false);
    if (timerStarted) { stop(); reset(); setTimerStarted(false); }
  };

  const handleSubmit = async () => {
    // TODO: remettre les vérifications auth/premium après les tests
    // if (!user) { setShowLogin(true); return; }
    // if (!isPremium) { setShowUpgrade(true); return; }
    if (!studentAnswer.trim()) return;
    setIsCorrecting(true);
    setError(null);
    stop();
    try {
      const res = await fetch('/api/generate-specialite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'correct', specialite: 'obligations', type: selectedType, subject, studentAnswer }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la correction');
      setCorrection(data.result);
      setStep('correction');
    } catch (err) {
      setError(err.message);
      start();
    } finally {
      setIsCorrecting(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    setUploadedFileName(null);
    try {
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });
      const res = await fetch('/api/ocr-copie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, mimeType: file.type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur OCR');
      setStudentAnswer(data.text);
      setUploadedFileName(file.name);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUploading(false);
      e.target.value = '';
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
                Droit des <span className="home-gradient-text">obligations</span>
              </h2>
              <p className="text-sm text-gray-500">3 heures — Coefficient 2 — Contrats, responsabilité civile, régime général</p>
            </>
          ) : (
            <>
              <h1
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-2"
              >
                {step === 'type' && "Droit des obligations"}
                {step === 'exercise' && (selectedType === 'cas-pratique' ? 'Cas pratique' : selectedType === 'consultation' ? 'Consultation juridique' : 'Dissertation')}
                {step === 'correction' && "Correction"}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {step === 'type' && "Choisissez le type d'exercice pour vous entraîner."}
                {step === 'exercise' && (
                  selectedType === 'cas-pratique'
                    ? "Cas pratique — 3 heures — Coefficient 2"
                    : selectedType === 'consultation'
                      ? "Consultation juridique — 3 heures — Coefficient 2"
                      : "Dissertation juridique — 3 heures — Coefficient 2"
                )}
                {step === 'correction' && `Droit des obligations — ${selectedType === 'cas-pratique' ? 'Cas pratique' : selectedType === 'consultation' ? 'Consultation juridique' : 'Dissertation'}`}
              </p>
            </>
          )}
        </div>

        {/* Back button */}
        {step !== 'type' && (
          <button
            onClick={step === 'correction' ? handleRestart : handleBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {step === 'correction' ? 'Nouvel exercice' : 'Retour'}
          </button>
        )}

        {/* Step: Type selection */}
        {step === 'type' && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXERCISE_TYPES.map((type) => {
                const isLoading = isGenerating && selectedType === type.id;
                const isDisabled = isGenerating && selectedType !== type.id;
                return (
                  <div
                    key={type.id}
                    className={`group bg-white rounded-2xl border border-slate-200 border-t-4 ${type.color.border} p-6 flex flex-col transition-all hover:shadow-lg ${isDisabled ? 'opacity-50' : ''}`}
                  >
                    <div className={`w-12 h-12 ${type.color.iconBg} rounded-xl flex items-center justify-center ${type.color.iconText} mb-4 transition-transform group-hover:scale-105`}>
                      {type.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{type.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{type.description}</p>
                    <button
                      onClick={() => handleStartExercise(type.id)}
                      disabled={isGenerating}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#b91c1c] text-white text-sm font-semibold rounded-xl hover:bg-[#991b1b] transition-colors disabled:opacity-60 disabled:cursor-wait"
                    >
                      {isLoading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Génération...
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
                );
              })}
            </div>
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </>
        )}

        {/* Step: Exercise */}
        {step === 'exercise' && (
          <div className="space-y-6">
            {/* Timer */}
            {timerStarted && (
              <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-mono text-lg font-bold text-gray-900">{formatted}</span>
                <span className="text-sm text-gray-400">Temps écoulé</span>
              </div>
            )}

            {subject && (
              <>
                {/* Subject display */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      {selectedType === 'cas-pratique' ? 'Cas pratique' : selectedType === 'consultation' ? 'Consultation juridique' : 'Dissertation'}
                    </span>
                    <span className="text-sm text-gray-400">Droit des obligations</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-gray-900 mb-4">
                    {subject.title || subject.titre}
                  </h3>

                  {/* Faits / énoncé */}
                  {subject.faits && (
                    <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                      <p className="font-semibold text-gray-900 mb-2">Situation :</p>
                      <p>{subject.faits}</p>
                    </div>
                  )}

                  {/* Question du client (consultation) */}
                  {subject.questionClient && (
                    <div className="bg-slate-50 border-l-4 border-slate-300 p-4 rounded-r-lg mb-4">
                      <p className="font-bold text-primary-800 text-sm mb-1">Question du client :</p>
                      <p className="text-sm text-primary-700">{subject.questionClient}</p>
                    </div>
                  )}

                  {/* Questions juridiques */}
                  {subject.questions && subject.questions.length > 0 && (
                    <div className="mb-4">
                      <p className="font-semibold text-gray-900 text-sm mb-2">{selectedType === 'consultation' ? 'Points à analyser :' : 'Questions :'}</p>
                      <ol className="list-decimal list-inside space-y-1.5">
                        {subject.questions.map((q, i) => (
                          <li key={i} className="text-sm text-gray-700">{q}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Sujet dissertation (seulement si différent du titre) */}
                  {subject.sujet && !subject.faits && subject.sujet !== (subject.title || subject.titre) && (
                    <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                      <p className="text-lg font-medium italic text-gray-800">{subject.sujet}</p>
                    </div>
                  )}

                  {/* Citation */}
                  {subject.citation && (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-sm text-gray-600 mb-4">{subject.citation}</blockquote>
                  )}

                  {/* Documents annexes */}
                  {subject.documentsAnnexes && (
                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                      <p className="font-semibold text-gray-700 mb-1">Documents annexes :</p>
                      <p>{subject.documentsAnnexes}</p>
                    </div>
                  )}

                  {/* Fallback contenu brut */}
                  {!subject.faits && !subject.sujet && (subject.content || subject.contenu || subject.enonce) && (
                    <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: subject.content || subject.contenu || subject.enonce }} />
                  )}
                </div>

                {/* Student answer */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">Votre copie</h4>
                    <span className="text-xs text-gray-400">{studentAnswer.split(/\s+/).filter(Boolean).length} mots</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Rédigez votre réponse ci-dessous. Structurez votre copie comme vous le feriez à l&apos;examen.</p>

                  {/* Photo upload */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-amber-800">Vous préférez rédiger sur papier ?</p>
                        <p className="text-xs text-amber-700 mt-0.5">Prenez une photo de votre copie et importez-la ici.</p>
                        <label className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white border border-amber-300 rounded-lg text-sm font-medium text-amber-700 hover:bg-amber-50 transition-colors cursor-pointer">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                          </svg>
                          {isUploading ? 'Lecture en cours...' : 'Importer une photo'}
                          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={isUploading} />
                        </label>
                        {uploadedFileName && <p className="text-xs text-emerald-600 mt-1.5">{uploadedFileName} — texte extrait avec succès</p>}
                      </div>
                    </div>
                  </div>

                  <textarea
                    value={studentAnswer}
                    onChange={(e) => setStudentAnswer(e.target.value)}
                    placeholder={selectedType === 'cas-pratique'
                      ? "Rédigez votre cas pratique ici. Qualifiez les faits, identifiez les problèmes juridiques, appliquez les règles..."
                      : selectedType === 'consultation'
                        ? "Rédigez votre consultation ici. Analysez la situation du client, identifiez les options, recommandez une stratégie motivée..."
                        : "Rédigez votre dissertation ici. Introduction avec accroche, définitions, problématique, annonce de plan..."
                    }
                    className="w-full h-64 sm:h-80 p-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y"
                  />

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-gray-400">Minimum 200 mots recommandés</p>
                    <button
                      onClick={handleSubmit}
                      disabled={isCorrecting || !studentAnswer.trim()}
                      className="px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors disabled:opacity-50"
                    >
                      {isCorrecting ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Correction en cours...
                        </span>
                      ) : 'Soumettre ma copie'}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                </div>
              </>
            )}
          </div>
        )}

        {/* Step: Correction */}
        {step === 'correction' && correction && (
          <div className="space-y-6">
            {/* Score */}
            {correction.note && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">Note attribuée</p>
                <p className="text-5xl font-black text-primary-600">{correction.note}<span className="text-2xl text-gray-400">/20</span></p>
                {correction.appreciation && <p className="text-sm text-gray-600 mt-3">{correction.appreciation}</p>}
              </div>
            )}

            {/* Correction detail */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Correction détaillée</h3>
              <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: correction.correction || correction.commentaire || '' }} />
            </div>

            {/* Points forts / faibles */}
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

            <button
              onClick={handleRestart}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Nouvel exercice
            </button>
          </div>
        )}
      </div>

      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
}
