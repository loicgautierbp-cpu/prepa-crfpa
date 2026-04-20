'use client';
import { useState } from 'react';
import { SUBJECTS } from '@/data/subjects';
import { SUBJECT_COLORS, SUBJECT_ICONS } from '@/data/constants';
import { useAuth } from '@/contexts/AuthContext';
import { usePremium } from '@/contexts/PremiumContext';
import { useTimer } from '@/hooks/useTimer';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import UpgradeModal from '@/components/ui/UpgradeModal';

const SPECIALITES = ['civil', 'affaires', 'penal', 'administratif', 'social', 'international', 'fiscal'];
const specialites = SUBJECTS.filter(s => SPECIALITES.includes(s.id));

const EXERCISE_TYPES = [
  {
    id: 'cas-pratique',
    label: 'Cas pratique',
    description: 'Résolvez un cas concret en mobilisant vos connaissances juridiques. Qualification des faits, identification des règles applicables et raisonnement par syllogisme.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    id: 'dissertation',
    label: 'Dissertation juridique',
    description: 'Construisez une argumentation structurée autour d\'une problématique juridique. Introduction, plan en deux parties, et conclusion.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

export default function SpecialiteClient({ embedded = false }) {
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const { seconds, formatted, start, stop, reset } = useTimer({ mode: 'up' });

  // Steps: 'specialite' | 'type' | 'exercise' | 'correction'
  const [step, setStep] = useState('specialite');
  const [selectedSpecialite, setSelectedSpecialite] = useState(null);
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

  const handleSelectSpecialite = (spec) => {
    setSelectedSpecialite(spec);
    setStep('type');
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
    setStep('exercise');
  };

  const handleBack = () => {
    if (step === 'type') {
      setStep('specialite');
      setSelectedSpecialite(null);
    } else if (step === 'exercise') {
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
    setStep('specialite');
    setSelectedSpecialite(null);
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

  const handleGenerate = async () => {
    if (!user) { setShowLogin(true); return; }
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-specialite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'generate',
          specialite: selectedSpecialite.id,
          type: selectedType,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la génération');
      setSubject(data.result);
      // Start timer
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
    if (!user) { setShowLogin(true); return; }
    if (!isPremium) { setShowUpgrade(true); return; }
    if (!studentAnswer.trim()) return;
    setIsCorrecting(true);
    setError(null);
    stop();
    try {
      const res = await fetch('/api/generate-specialite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'correct',
          specialite: selectedSpecialite.id,
          type: selectedType,
          subject,
          studentAnswer,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de la correction');
      setCorrection(data.result);
      setStep('correction');
    } catch (err) {
      setError(err.message);
      start(); // Resume timer on error
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

  const specColors = selectedSpecialite ? SUBJECT_COLORS[selectedSpecialite.color] || SUBJECT_COLORS.primary : null;

  return (
    <div className={embedded ? '' : 'min-h-screen bg-[#fef2f2]'}>
      <div className={embedded ? 'max-w-4xl mx-auto' : 'max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12'}>

        {/* Header */}
        <div className="mb-8">
          {embedded && step === 'specialite' ? (
            <>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Épreuve de <span className="home-gradient-text">spécialité</span>
              </h2>
              <p className="text-sm text-gray-500">3 heures — Coefficient 2 — Choisissez parmi 7 matières</p>
            </>
          ) : (
            <>
              <h1
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-2"
              >
                {step === 'specialite' && "Épreuve de spécialité"}
                {step === 'type' && selectedSpecialite?.name}
                {step === 'exercise' && selectedSpecialite?.name}
                {step === 'correction' && "Correction"}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {step === 'specialite' && "Choisissez votre matière de spécialité parmi les 7 proposées au CRFPA."}
                {step === 'type' && "Choisissez le type d'exercice pour vous entraîner."}
                {step === 'exercise' && (
                  selectedType === 'cas-pratique'
                    ? "Cas pratique — 3 heures — Coefficient 2"
                    : "Dissertation juridique — 3 heures — Coefficient 2"
                )}
                {step === 'correction' && `${selectedSpecialite?.name} — ${selectedType === 'cas-pratique' ? 'Cas pratique' : 'Dissertation'}`}
              </p>
            </>
          )}
        </div>

        {/* Back button */}
        {step !== 'specialite' && (
          <button
            onClick={step === 'correction' ? handleRestart : handleBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {step === 'correction' ? 'Recommencer' : 'Retour'}
          </button>
        )}

        {/* ============================================================
            Step 1: Choose Specialty
            ============================================================ */}
        {step === 'specialite' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialites.map((spec) => {
              const colors = SUBJECT_COLORS[spec.color] || SUBJECT_COLORS.primary;
              const iconData = SUBJECT_ICONS[spec.id];
              return (
                <button
                  key={spec.id}
                  onClick={() => handleSelectSpecialite(spec)}
                  className={`group bg-white rounded-xl border border-gray-200 p-5 text-left hover:border-primary-300 hover:shadow-md transition-all`}
                >
                  <div className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center mb-3`}>
                    {iconData ? (
                      <svg className={`w-6 h-6 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconData.path} />
                      </svg>
                    ) : (
                      <span className={`text-lg ${colors.text}`}>{spec.icon}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{spec.description}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* ============================================================
            Step 2: Choose Exercise Type
            ============================================================ */}
        {step === 'type' && (
          <div className="grid sm:grid-cols-2 gap-4">
            {EXERCISE_TYPES.map((exType) => (
              <button
                key={exType.id}
                onClick={() => handleSelectType(exType.id)}
                className="group bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-primary-600 group-hover:bg-primary-200 transition-colors">
                  {exType.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {exType.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{exType.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* ============================================================
            Step 3: Exercise
            ============================================================ */}
        {step === 'exercise' && (
          <div className="space-y-6">
            {/* Generate button (before subject is generated) */}
            {!subject && (
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {selectedType === 'cas-pratique' ? 'Générer un cas pratique' : 'Générer un sujet de dissertation'}
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                  L'IA va générer un sujet de niveau CRFPA en {selectedSpecialite?.name}. Vous disposerez de 3 heures pour rédiger votre copie.
                </p>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/20 disabled:opacity-50 disabled:cursor-wait"
                >
                  {isGenerating ? 'Génération en cours...' : 'Générer un sujet'}
                </button>
                {isGenerating && (
                  <div className="mt-4 max-w-xs mx-auto">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full loading-progress" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Création de votre sujet en cours...</p>
                  </div>
                )}
                {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
              </div>
            )}

            {/* Subject display */}
            {subject && (
              <>
                {/* Timer bar */}
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-lg font-mono font-bold text-gray-900">{formatted}</span>
                    <span className="text-sm text-gray-500">Temps écoulé</span>
                  </div>
                  {specColors && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${specColors.badge}`}>
                      {selectedSpecialite?.name}
                    </span>
                  )}
                </div>

                {/* Subject card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                      {selectedType === 'cas-pratique' ? 'Cas pratique' : 'Dissertation'}
                    </span>
                    {subject.theme && (
                      <span className="text-sm text-gray-500">{subject.theme}</span>
                    )}
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-gray-900 mb-4">
                    {subject.titre || subject.sujet}
                  </h2>

                  {/* Cas pratique: facts + questions */}
                  {selectedType === 'cas-pratique' && (
                    <>
                      <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Faits :</p>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{subject.faits}</p>
                      </div>
                      {subject.questions && subject.questions.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Questions :</p>
                          <ol className="space-y-2">
                            {subject.questions.map((q, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <span className="w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center text-xs font-bold text-primary-700 shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <span className="leading-relaxed">{q}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </>
                  )}

                  {/* Dissertation: subject + citation */}
                  {selectedType === 'dissertation' && (
                    <>
                      {subject.sujet && subject.sujet !== subject.titre && (
                        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Sujet :</p>
                          <p className="text-sm text-gray-700 leading-relaxed italic">{subject.sujet}</p>
                        </div>
                      )}
                      {subject.citation && (
                        <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4">
                          <p className="text-sm text-primary-800 italic leading-relaxed">{subject.citation}</p>
                        </div>
                      )}
                      {subject.consigne && (
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                          <p className="text-sm text-gray-600">{subject.consigne}</p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Documents annexes (both types) */}
                  {subject.documentsAnnexes && (
                    <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <p className="text-sm font-semibold text-amber-800 mb-1">Documents annexes :</p>
                      <p className="text-sm text-amber-700 leading-relaxed whitespace-pre-line">{subject.documentsAnnexes}</p>
                    </div>
                  )}
                </div>

                {/* Student answer textarea */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-1">Votre copie</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Rédigez votre réponse ci-dessous. Structurez votre copie comme vous le feriez à l'examen.
                  </p>
                  {/* Upload option */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-semibold text-amber-800 text-sm mb-1">Vous préférez rédiger sur papier ?</p>
                        <p className="text-xs text-amber-700 mb-3">Rédigez votre copie à la main, prenez une photo et glissez-la ici. L'IA lira votre écriture automatiquement.</p>
                        <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-amber-300 rounded-xl text-sm font-semibold text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                          </svg>
                          Importer une photo
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                        </label>
                        {isUploading && (
                          <div className="mt-3">
                            <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 rounded-full loading-progress" />
                            </div>
                            <p className="text-xs text-amber-600 mt-1">Lecture de votre copie en cours...</p>
                          </div>
                        )}
                        {uploadedFileName && !isUploading && (
                          <p className="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {uploadedFileName} — texte extrait et ajouté ci-dessous
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <textarea
                    value={studentAnswer}
                    onChange={(e) => setStudentAnswer(e.target.value)}
                    placeholder={
                      selectedType === 'cas-pratique'
                        ? "Rédigez votre cas pratique ici. Pour chaque question : qualifiez juridiquement les faits, identifiez la règle de droit applicable (article, jurisprudence), appliquez-la aux faits (syllogisme) et concluez..."
                        : "Rédigez votre dissertation ici. Introduction (accroche, définitions, problématique, annonce du plan), I. A. B., II. A. B., conclusion..."
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-500/15 resize-y"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400">
                      {studentAnswer.trim().split(/\s+/).filter(Boolean).length} mots
                    </span>
                    <button
                      onClick={handleSubmit}
                      disabled={isCorrecting || !studentAnswer.trim()}
                      className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isCorrecting ? 'Correction en cours...' : 'Soumettre ma copie'}
                    </button>
                  </div>
                  {isCorrecting && (
                    <div className="mt-4">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-500 rounded-full loading-progress" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Correction en cours, veuillez patienter...</p>
                    </div>
                  )}
                  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                </div>
              </>
            )}
          </div>
        )}

        {/* ============================================================
            Step 4: Correction
            ============================================================ */}
        {step === 'correction' && correction && (
          <div className="space-y-6">

            {/* Grade */}
            <div className={`rounded-xl border-2 p-8 text-center ${
              correction.note >= 14
                ? 'border-emerald-300 bg-emerald-50'
                : correction.note >= 10
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-red-300 bg-red-50'
            }`}>
              <p className="text-5xl font-black mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {correction.note}<span className="text-xl font-normal text-gray-500">/20</span>
              </p>
              <p className={`text-sm font-semibold ${
                correction.note >= 14 ? 'text-emerald-700' : correction.note >= 10 ? 'text-amber-700' : 'text-red-700'
              }`}>
                {correction.appreciation}
              </p>
            </div>

            {/* Points forts */}
            {correction.pointsForts && correction.pointsForts.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Points forts
                </h3>
                <ul className="space-y-2">
                  {correction.pointsForts.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Points faibles */}
            {correction.pointsFaibles && correction.pointsFaibles.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  Points faibles
                </h3>
                <ul className="space-y-2">
                  {correction.pointsFaibles.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Plan attendu */}
            {correction.planAttendu && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  Plan attendu
                </h3>
                <div
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-700 leading-relaxed [&_b]:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: correction.planAttendu }}
                />
              </div>
            )}

            {/* Éléments juridiques manquants */}
            {correction.elementsManquants && correction.elementsManquants.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  Éléments juridiques manquants
                </h3>
                <ul className="space-y-2">
                  {correction.elementsManquants.map((el, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conseil pour progresser */}
            {correction.conseil && (
              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-5">
                <h4 className="font-semibold text-primary-900 mb-1">Conseil pour progresser</h4>
                <p className="text-sm text-primary-800 leading-relaxed">{correction.conseil}</p>
              </div>
            )}

            {/* Restart button */}
            <div className="text-center pt-2">
              <button
                onClick={handleRestart}
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
              >
                Recommencer un exercice
              </button>
            </div>
          </div>
        )}
      </div>

      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
}
