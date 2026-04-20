'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { usePremium } from '@/contexts/PremiumContext';
import { COURS_SYNTHESE } from '@/data/cours/synthese';
import { SYNTHESE_EXERCICES } from '@/data/synthese-exercices';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import UpgradeModal from '@/components/ui/UpgradeModal';
import GenerationLoader from '@/components/ui/GenerationLoader';
import { useTimer } from '@/hooks/useTimer';
import { useGeminiSynthese } from '@/hooks/useGeminiSynthese';
import { SYNTHESE_THEMES } from '@/utils/prompts';

const TABS = [
  { id: 'exercices', label: 'Exercices pratiques' },
  { id: 'methodologie', label: 'Méthodologie (annexe)' },
];

const DOC_TYPE_ICONS = {
  legislation: { icon: '§', label: 'Législation', color: 'bg-blue-100 text-blue-700' },
  jurisprudence: { icon: '⚖', label: 'Jurisprudence', color: 'bg-amber-100 text-amber-700' },
  doctrine: { icon: '📖', label: 'Doctrine', color: 'bg-purple-100 text-purple-700' },
  'texte-officiel': { icon: '📋', label: 'Texte officiel', color: 'bg-slate-100 text-slate-700' },
};

const DIFFICULTY_STYLES = {
  facile: 'bg-emerald-100 text-emerald-700',
  moyen: 'bg-amber-100 text-amber-700',
  difficile: 'bg-red-100 text-red-700',
};

/* ============================================================
   ThemeSelector - Custom dropdown for theme selection
   ============================================================ */
// Catégorise un thème pour lui attribuer une icône + couleur
function getThemeMeta(theme) {
  const lower = (theme || '').toLowerCase();
  if (lower.includes('données') || lower.includes('internet') || lower.includes('secret')) {
    return { emoji: '🔒', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' };
  }
  if (lower.includes('environ') || lower.includes('précaution')) {
    return { emoji: '🌱', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' };
  }
  if (lower.includes('pénal') || lower.includes('victime')) {
    return { emoji: '⚖️', color: 'bg-rose-50 text-rose-600 border-rose-200' };
  }
  if (lower.includes('constitution') || lower.includes('justice') || lower.includes('laïcité')) {
    return { emoji: '🏛️', color: 'bg-amber-50 text-amber-600 border-amber-200' };
  }
  if (lower.includes('contrat') || lower.includes('responsabilité civile') || lower.includes('produits')) {
    return { emoji: '📜', color: 'bg-violet-50 text-violet-600 border-violet-200' };
  }
  if (lower.includes('logement') || lower.includes('droit')) {
    return { emoji: '🏠', color: 'bg-sky-50 text-sky-600 border-sky-200' };
  }
  return { emoji: '📚', color: 'bg-slate-50 text-slate-600 border-slate-200' };
}

function ThemeSelector({ themes, value, onChange, placeholder = 'Thème aléatoire' }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const selectedMeta = value ? getThemeMeta(value) : null;

  const handleSelect = (theme) => {
    onChange(theme);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative flex-1">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#b91c1c]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/20 focus:border-[#b91c1c]/60"
      >
        <span className="flex items-center gap-2 min-w-0">
          {value ? (
            <>
              <span className={`w-7 h-7 flex items-center justify-center rounded-md border ${selectedMeta.color} shrink-0 text-sm`}>
                {selectedMeta.emoji}
              </span>
              <span className="truncate text-gray-900 font-medium">{value}</span>
            </>
          ) : (
            <>
              <span className="w-7 h-7 flex items-center justify-center rounded-md bg-[#b91c1c]/10 text-[#b91c1c] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </span>
              <span className="text-gray-500">{placeholder}</span>
            </>
          )}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          {/* Option aléatoire */}
          <button
            type="button"
            onClick={() => handleSelect('')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#fef2f2] transition-colors border-b border-gray-100 ${!value ? 'bg-[#fef2f2]' : ''}`}
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#b91c1c]/10 text-[#b91c1c] shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900">Thème aléatoire</div>
              <div className="text-xs text-gray-500">L'IA choisit un sujet au hasard</div>
            </div>
            {!value && (
              <svg className="w-4 h-4 text-[#b91c1c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            )}
          </button>

          {/* Thèmes */}
          <div className="max-h-72 overflow-y-auto py-1">
            {themes.map((t) => {
              const meta = getThemeMeta(t);
              const isSelected = value === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleSelect(t)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors ${isSelected ? 'bg-[#fef2f2]' : ''}`}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-md border ${meta.color} shrink-0 text-sm`}>
                    {meta.emoji}
                  </span>
                  <span className={`flex-1 text-sm ${isSelected ? 'text-[#991b1b] font-semibold' : 'text-gray-700'}`}>
                    {t}
                  </span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-[#b91c1c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Methodologie Tab
   ============================================================ */
function MethodologieTab() {
  const methodo = COURS_SYNTHESE['synthese-methodologie'];
  const [openSection, setOpenSection] = useState(0);

  if (!methodo) return null;

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#b91c1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">À propos de cette épreuve</h3>
            <p className="text-gray-600 leading-relaxed">{methodo.introduction}</p>
            <p className="text-sm text-gray-400 mt-2">Temps de lecture : {methodo.readTime} min</p>
          </div>
        </div>
      </div>

      {/* Sections accordion */}
      <div className="space-y-3">
        {methodo.sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === idx ? -1 : idx)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#b91c1c]/10 rounded-lg flex items-center justify-center text-sm font-bold text-[#991b1b]">
                  {idx + 1}
                </span>
                <span className="font-semibold text-gray-900">{section.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${openSection === idx ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openSection === idx && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div
                  className="prose prose-sm max-w-none mt-4 text-gray-700 [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-gray-900 [&_h4]:mt-5 [&_h4]:mb-2 [&_ul]:space-y-1.5 [&_li]:leading-relaxed [&_b]:text-gray-900 [&_.fiche-key-point]:bg-[#fef2f2] [&_.fiche-key-point]:border-l-4 [&_.fiche-key-point]:border-[#b91c1c] [&_.fiche-key-point]:p-4 [&_.fiche-key-point]:rounded-r-lg [&_.fiche-key-point]:mt-4 [&_.fiche-key-point]:text-sm [&_.fiche-key-point]:font-medium [&_.fiche-key-point]:text-[#7f1d1d]"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Exercice Detail View
   ============================================================ */
function ExerciceDetail({ exercice, onBack }) {
  const [openDoc, setOpenDoc] = useState(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const { seconds, formatted, start, stop, reset } = useTimer({ mode: 'down', durationMinutes: exercice.duration });
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const canAccess = !exercice.premium || isPremium;

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const isRunning = timerRunning;

  const handleShowCorrection = () => {
    if (!user) { setShowLogin(true); return; }
    if (exercice.premium && !isPremium) { setShowUpgrade(true); return; }
    setShowCorrection(true);
  };

  const handleStartTimer = () => {
    if (!timerActive) { setTimerActive(true); setTimerRunning(true); start(); }
    else if (timerRunning) { setTimerRunning(false); stop(); }
    else { setTimerRunning(true); start(); }
  };

  return (
    <div className="space-y-6">
      {/* Back + Header */}
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#b91c1c] transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Retour aux exercices
      </button>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${DIFFICULTY_STYLES[exercice.difficulty]}`}>
            {exercice.difficulty.charAt(0).toUpperCase() + exercice.difficulty.slice(1)}
          </span>
          <span className="text-sm text-gray-500">{exercice.theme}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-500">{exercice.documents.length} documents</span>
          {exercice.premium && (
            <span className="px-2 py-0.5 bg-[#b91c1c]/10 text-[#991b1b] text-xs font-semibold rounded-full">Premium</span>
          )}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-gray-900 mb-4">
          {exercice.title}
        </h2>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-1">Consigne :</p>
          <p className="text-gray-700 leading-relaxed">{exercice.consigne}</p>
        </div>
      </div>

      {/* Timer */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-lg font-mono font-bold text-gray-900">
            {timerActive ? formatTime(seconds) : '5h00:00'}
          </span>
          <span className="text-sm text-gray-500">Durée réglementaire</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleStartTimer}
            className="px-4 py-2 bg-[#b91c1c] text-white text-sm font-semibold rounded-lg hover:bg-[#991b1b] transition-colors"
          >
            {!timerActive ? 'Démarrer' : isRunning ? 'Pause' : 'Reprendre'}
          </button>
          {timerActive && (
            <button
              onClick={() => { reset(); setTimerActive(false); setTimerRunning(false); }}
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Documents */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Dossier documentaire ({exercice.documents.length} documents)</h3>
        <div className="space-y-2">
          {exercice.documents.map((doc, idx) => {
            const docType = DOC_TYPE_ICONS[doc.type] || DOC_TYPE_ICONS['texte-officiel'];
            return (
              <div key={doc.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenDoc(openDoc === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-gray-400 w-6">#{idx + 1}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${docType.color}`}>
                      {docType.label}
                    </span>
                    <span className="font-medium text-gray-900 text-sm">{doc.title}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${openDoc === idx ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openDoc === idx && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mt-3 mb-3">Source : {doc.source}</p>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{doc.content}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Correction */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {!showCorrection ? (
          <div className="p-8 text-center">
            <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="text-gray-500 mb-4">La correction est masquée pour vous permettre de travailler en conditions réelles.</p>
            <button
              onClick={handleShowCorrection}
              className="px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-lg shadow-[#b91c1c]/20"
            >
              {exercice.premium && !isPremium ? '🔒 Correction Premium' : 'Voir la correction'}
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#b91c1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Correction détaillée
            </h3>

            {/* Plan type */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Plan type</h4>
              <div
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-700 leading-relaxed [&_b]:text-gray-900"
                dangerouslySetInnerHTML={{ __html: exercice.correction.plan }}
              />
            </div>

            {/* Points clés */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Points clés attendus</h4>
              <ul className="space-y-2">
                {exercice.correction.pointsCles.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pièges */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pièges à éviter</h4>
              <ul className="space-y-2">
                {exercice.correction.piegesEviter.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commentaire */}
            <div className="bg-[#fef2f2] border-l-4 border-[#b91c1c] rounded-r-lg p-4">
              <p className="text-sm font-medium text-[#7f1d1d]">{exercice.correction.commentaire}</p>
            </div>
          </div>
        )}
      </div>

      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
}

/* ============================================================
   AI Exercise Generator Component
   ============================================================ */
function AIExerciseSection({ mode, title, description, icon }) {
  const { generate, isGenerating, error, result, reset } = useGeminiSynthese();
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [openDoc, setOpenDoc] = useState(null);
  // Analyse mode: student inputs
  const [userIdees, setUserIdees] = useState('');
  const [userContradictions, setUserContradictions] = useState('');
  const [userDocsCles, setUserDocsCles] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  // Redaction mode: student inputs
  const [userIntro, setUserIntro] = useState('');
  const [userPartie1, setUserPartie1] = useState('');
  const [userPartie2, setUserPartie2] = useState('');
  const [userConclusion, setUserConclusion] = useState('');
  const userRedaction = userIntro + ' ' + userPartie1 + ' ' + userPartie2 + ' ' + userConclusion;
  // Redaction mode choice: 'rediger' (write then correct) or 'corriger' (just correction)
  const [redactionMode, setRedactionMode] = useState(null);
  // Photo upload
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);

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
        body: JSON.stringify({ image: base64, mimeType: file.type, structured: true }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur OCR');
      // Dispatcher dans les 4 sections
      if (data.introduction) setUserIntro(data.introduction);
      if (data.partie1) setUserPartie1(data.partie1);
      if (data.partie2) setUserPartie2(data.partie2);
      if (data.conclusion) setUserConclusion(data.conclusion);
      setUploadedFileName(file.name);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleGenerate = () => {
    if (!user) { setShowLogin(true); return; }
    generate(mode, selectedTheme || null);
  };

  const handleShowCorrection = () => {
    if (!user) { setShowLogin(true); return; }
    if (!isPremium) { setShowUpgrade(true); return; }
    setShowCorrection(true);
  };

  // Strict CRFPA-level scoring for analyse mode
  const handleSubmitAnalyse = () => {
    if (!result?.analyseAttendue) return;
    const att = result.analyseAttendue;

    // Normalize: remove accents, lowercase, split into words
    const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ');
    const userIdeeNorm = normalize(userIdees);
    const userContrNorm = normalize(userContradictions);
    const userDocsNorm = normalize(userDocsCles);
    const allUserText = normalize(userIdees + ' ' + userContradictions + ' ' + userDocsCles);

    // Extract significant keywords (5+ chars) from expected answer
    const getKeywords = (text) => normalize(text).split(/\s+/).filter(w => w.length >= 5);

    // Strict match: requires 40%+ keyword overlap for full points, 20%+ for half
    const matchScore = (expected, userText, maxPts) => {
      const keywords = getKeywords(expected);
      if (keywords.length === 0) return 0;
      const matched = keywords.filter(k => userText.includes(k)).length;
      const ratio = matched / keywords.length;
      if (ratio >= 0.4) return maxPts;
      if (ratio >= 0.2) return Math.ceil(maxPts * 0.4);
      return 0;
    };

    let points = 0;
    let total = 0;

    // Idées principales: 8 pts total (scored against idées field specifically)
    const ideeMax = att.ideesPrincipales?.length || 1;
    att.ideesPrincipales?.forEach((idee) => {
      const pts = Math.round(8 / ideeMax);
      total += pts;
      points += matchScore(idee, userIdeeNorm, pts);
    });

    // Contradictions: 6 pts total (hardest - scored strictly against contradictions field)
    const contrMax = att.contradictions?.length || 1;
    att.contradictions?.forEach((c) => {
      const pts = Math.round(6 / contrMax);
      total += pts;
      points += matchScore(c, userContrNorm, pts);
    });

    // Documents clés: 4 pts total
    const docsMax = att.documentsCles?.length || 1;
    att.documentsCles?.forEach((d) => {
      const pts = Math.round(4 / docsMax);
      total += pts;
      points += matchScore(d, userDocsNorm, pts);
    });

    // Bonus: exhaustivité (2 pts) - did the student write enough?
    total += 2;
    const wordCount = allUserText.split(/\s+/).filter(w => w.length > 2).length;
    if (wordCount >= 80) points += 2;
    else if (wordCount >= 40) points += 1;

    // Scale to /20, cap at 20, apply strictness (-2 penalty to be demanding)
    const raw = total > 0 ? Math.round((points / total) * 20) : 0;
    const finalScore = Math.max(0, Math.min(20, raw - 2));
    setScore(finalScore);
    setSubmitted(true);
    setShowCorrection(true);
  };

  return (
    <div className="space-y-4">
      {/* Generate controls */}
      {!result && !isGenerating && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-11 h-11 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center shrink-0 text-lg">{icon}</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <ThemeSelector
              themes={SYNTHESE_THEMES}
              value={selectedTheme}
              onChange={setSelectedTheme}
            />
            <button
              onClick={handleGenerate}
              className="px-6 py-2.5 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-colors shrink-0"
            >
              Générer
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>
      )}

      {/* Loader IA pendant la génération */}
      {!result && isGenerating && (
        <GenerationLoader
          title={title}
          subtitle={`Note de synthèse · ${selectedTheme || 'Thème aléatoire'}`}
          accent="#b91c1c"
        />
      )}

      {/* Result display */}
      {result && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">{result.sujet || result.theme}</h3>
            <button onClick={() => { reset(); setShowCorrection(false); setOpenDoc(null); setSubmitted(false); setScore(null); setUserIdees(''); setUserContradictions(''); setUserDocsCles(''); setUserIntro(''); setUserPartie1(''); setUserPartie2(''); setUserConclusion(''); setRedactionMode(null); setUploadedFileName(null); setIsUploading(false); }} className="text-sm text-[#b91c1c] font-medium hover:underline">
              Nouvel exercice
            </button>
          </div>

          {/* Consigne (redaction mode) */}
          {result.consigne && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-1">Consigne :</p>
              <p className="text-gray-700 text-sm leading-relaxed">{result.consigne}</p>
            </div>
          )}

          {/* Documents */}
          {result.documents && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Dossier ({result.documents.length} documents)</h4>
              <div className="space-y-1.5">
                {result.documents.map((doc, idx) => {
                  const docType = DOC_TYPE_ICONS[doc.type] || DOC_TYPE_ICONS['texte-officiel'];
                  return (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => setOpenDoc(openDoc === idx ? null : idx)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono text-gray-400">#{idx + 1}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${docType.color}`}>{docType.label}</span>
                          <span className="font-medium text-gray-900 text-sm">{doc.title}</span>
                        </div>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${openDoc === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      {openDoc === idx && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <p className="text-xs text-gray-400 mt-2 mb-2">Source : {doc.source}</p>
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{doc.resume || doc.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Analyse mode: student input form */}
          {mode === 'analyse' && !submitted && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900">Votre analyse</h4>
              <p className="text-sm text-gray-500">Lisez les documents du dossier puis notez votre analyse ci-dessous. Cliquez sur &quot;Soumettre&quot; pour obtenir votre note et la correction.</p>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Idées principales identifiées</label>
                <textarea
                  value={userIdees}
                  onChange={(e) => setUserIdees(e.target.value)}
                  placeholder="Listez les idées principales que vous avez identifiées dans le dossier..."
                  className="w-full h-28 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contradictions entre les documents</label>
                <textarea
                  value={userContradictions}
                  onChange={(e) => setUserContradictions(e.target.value)}
                  placeholder="Identifiez les contradictions ou tensions entre les documents..."
                  className="w-full h-24 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Documents clés et pourquoi</label>
                <textarea
                  value={userDocsCles}
                  onChange={(e) => setUserDocsCles(e.target.value)}
                  placeholder="Quels documents sont centraux dans ce dossier et pourquoi ?..."
                  className="w-full h-24 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <button
                onClick={handleSubmitAnalyse}
                disabled={!userIdees.trim() && !userContradictions.trim() && !userDocsCles.trim()}
                className="w-full px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-lg shadow-[#b91c1c]/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Soumettre mon analyse
              </button>
            </div>
          )}

          {/* Analyse mode: score display */}
          {mode === 'analyse' && submitted && score !== null && (
            <div className={`rounded-xl border-2 p-6 text-center ${score >= 14 ? 'border-emerald-300 bg-emerald-50' : score >= 10 ? 'border-amber-300 bg-amber-50' : 'border-red-300 bg-red-50'}`}>
              <p className="text-4xl font-black mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {score}<span className="text-lg font-normal text-gray-500">/20</span>
              </p>
              <p className={`text-sm font-semibold mb-2 ${score >= 14 ? 'text-emerald-700' : score >= 10 ? 'text-amber-700' : 'text-red-700'}`}>
                {score >= 16
                  ? 'Analyse rigoureuse et complète. Niveau attendu au CRFPA.'
                  : score >= 14
                    ? 'Bonne analyse, mais quelques points pouvaient être approfondis.'
                    : score >= 10
                      ? 'Analyse partielle. Plusieurs idées clés ou contradictions n\'ont pas été identifiées. Au CRFPA, cela coûterait des points.'
                      : score >= 6
                        ? 'Insuffisant pour le CRFPA. La lecture du dossier manque de rigueur : des enjeux majeurs ont été omis.'
                        : 'Très insuffisant. L\'analyse ne reflète pas une compréhension du dossier. Relisez chaque document méthodiquement avant de répondre.'}
              </p>
              <p className="text-xs text-gray-500">
                {score < 10
                  ? 'Rappel : au CRFPA, l\'analyse du dossier représente le fondement de votre note. Sans identification exhaustive des enjeux, le plan et la rédaction seront nécessairement défaillants.'
                  : score < 14
                    ? 'Conseil : soyez plus systématique dans votre lecture. Annotez chaque document, repérez les positions divergentes et hiérarchisez les informations.'
                    : 'Continuez ainsi. Travaillez la rapidité d\'analyse pour tenir dans les 2h imparties.'}
              </p>
            </div>
          )}

          {/* Plan textarea (plan mode) */}
          {mode === 'plan' && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Votre plan</h4>
              <textarea
                placeholder="Rédigez votre plan ici (I. / A. / B. — II. / A. / B.)..."
                className="w-full h-40 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
              />
            </div>
          )}

          {/* Redaction mode choice */}
          {mode === 'redaction' && !redactionMode && !showCorrection && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Comment souhaitez-vous travailler ?</h4>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() => setRedactionMode('rediger')}
                  className="p-4 border-2 border-gray-200 rounded-xl text-left hover:border-[#b91c1c]/40 hover:bg-[#fef2f2]/30 transition-all"
                >
                  <span className="text-lg block mb-1">✍️</span>
                  <span className="font-semibold text-gray-900 block text-sm">Rédiger puis corriger</span>
                  <span className="text-xs text-gray-500">Rédigez votre note directement, puis consultez la correction pour comparer.</span>
                </button>
                <button
                  onClick={() => { setRedactionMode('corriger'); handleShowCorrection(); }}
                  className="p-4 border-2 border-gray-200 rounded-xl text-left hover:border-[#b91c1c]/40 hover:bg-[#fef2f2]/30 transition-all"
                >
                  <span className="text-lg block mb-1">📋</span>
                  <span className="font-semibold text-gray-900 block text-sm">Voir la correction directement</span>
                  <span className="text-xs text-gray-500">Consultez le plan type et la correction sans rédiger.</span>
                </button>
              </div>
            </div>
          )}

          {/* Redaction textarea (redaction mode - only if 'rediger' chosen) */}
          {mode === 'redaction' && redactionMode === 'rediger' && !showCorrection && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900">Votre note de synthèse</h4>
                <span className="text-xs text-gray-400">
                  {(userRedaction || '').split(/\s+/).filter(w => w.length > 0).length} mots
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Rédigez votre note de synthèse ci-dessous. Structurez votre réponse avec une introduction, un plan en deux parties et une conclusion. Référencez les documents du dossier.
              </p>
              {/* Upload option */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold text-amber-800 text-sm mb-1">Vous préférez rédiger sur papier ?</p>
                    <p className="text-xs text-amber-700 mb-3">Rédigez votre copie à la main, prenez une photo et glissez-la ici. L'IA lira votre écriture et répartira automatiquement le texte dans les sections (Introduction, Partie I, Partie II, Conclusion).</p>
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Introduction</label>
                <textarea
                  value={userIntro}
                  onChange={(e) => setUserIntro(e.target.value)}
                  placeholder="Accroche, présentation du sujet, problématique, annonce du plan..."
                  className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">I. Première partie</label>
                <textarea
                  value={userPartie1}
                  onChange={(e) => setUserPartie1(e.target.value)}
                  placeholder="Développement de la première partie (A. et B.) avec références aux documents..."
                  className="w-full h-48 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">II. Deuxième partie</label>
                <textarea
                  value={userPartie2}
                  onChange={(e) => setUserPartie2(e.target.value)}
                  placeholder="Développement de la deuxième partie (A. et B.) avec références aux documents..."
                  className="w-full h-48 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Conclusion (facultative)</label>
                <textarea
                  value={userConclusion}
                  onChange={(e) => setUserConclusion(e.target.value)}
                  placeholder="Synthèse des enseignements du dossier, ouverture éventuelle..."
                  className="w-full h-24 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c]/40 focus:ring-2 focus:ring-[#b91c1c]/15 resize-y"
                />
              </div>
              <button
                onClick={handleShowCorrection}
                disabled={!userIntro.trim() && !userPartie1.trim()}
                className="w-full px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-lg shadow-[#b91c1c]/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {!isPremium ? '🔒 Soumettre et voir la correction (Premium)' : 'Soumettre et voir la correction'}
              </button>
            </div>
          )}

          {/* Correction button (not for analyse or redaction modes which have their own flows) */}
          {!showCorrection && mode !== 'analyse' && !(mode === 'redaction') && (
            <div className="text-center py-4">
              <button
                onClick={handleShowCorrection}
                className="px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-lg shadow-[#b91c1c]/20"
              >
                {!isPremium ? '🔒 Correction (Premium)' : 'Voir la correction'}
              </button>
            </div>
          )}

          {/* Plan mode: correction button */}
          {!showCorrection && mode === 'plan' && (
            <div className="text-center py-4">
              <button
                onClick={handleShowCorrection}
                className="px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors shadow-lg shadow-[#b91c1c]/20"
              >
                {!isPremium ? '🔒 Correction (Premium)' : 'Voir le plan type'}
              </button>
            </div>
          )}

          {/* Correction display */}
          {showCorrection && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 shadow-sm">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#b91c1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Correction
              </h4>

              {/* Analyse mode */}
              {result.analyseAttendue && (
                <>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Idées principales</h5>
                    <ul className="space-y-1.5">
                      {result.analyseAttendue.ideesPrincipales?.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Contradictions à identifier</h5>
                    <ul className="space-y-1.5">
                      {result.analyseAttendue.contradictions?.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Documents clés</h5>
                    <ul className="space-y-1.5">
                      {result.analyseAttendue.documentsCles?.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Plan mode */}
              {result.planType && (
                <>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Plan type</h5>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-700 leading-relaxed [&_b]:text-gray-900" dangerouslySetInnerHTML={{ __html: result.planType }} />
                  </div>
                  {result.justification && (
                    <div className="bg-[#fef2f2] border-l-4 border-[#b91c1c] rounded-r-lg p-4">
                      <p className="text-sm font-medium text-[#7f1d1d]">{result.justification}</p>
                    </div>
                  )}
                  {result.erreursFrequentes && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Erreurs fréquentes</h5>
                      <ul className="space-y-1.5">
                        {result.erreursFrequentes.map((e, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* Redaction mode */}
              {result.correction && (
                <>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Plan type</h5>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-700 leading-relaxed [&_b]:text-gray-900" dangerouslySetInnerHTML={{ __html: result.correction.plan }} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Points clés</h5>
                    <ul className="space-y-1.5">
                      {result.correction.pointsCles?.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Pièges à éviter</h5>
                    <ul className="space-y-1.5">
                      {result.correction.piegesEviter?.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {result.correction.commentaire && (
                    <div className="bg-[#fef2f2] border-l-4 border-[#b91c1c] rounded-r-lg p-4">
                      <p className="text-sm font-medium text-[#7f1d1d]">{result.correction.commentaire}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}

      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
}

/* ============================================================
   Exercices Tab — 3 AI sections + static exercises
   ============================================================ */
function ExercicesTab() {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedStatic, setSelectedStatic] = useState(null);
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const handleSelectStatic = (exercice) => {
    if (!user) { setShowLogin(true); return; }
    if (exercice.premium && !isPremium) { setShowUpgrade(true); return; }
    setSelectedStatic(exercice);
  };

  if (selectedStatic) {
    return <ExerciceDetail exercice={selectedStatic} onBack={() => setSelectedStatic(null)} />;
  }

  if (activeSection) {
    const sections = {
      analyse: { mode: 'analyse', title: 'Analyse du dossier', description: "Un dossier de documents juridiques vous est soumis. Identifiez les idées principales, les contradictions et les documents clés.", icon: '🔍' },
      plan: { mode: 'plan', title: 'Élaboration du plan', description: "À partir d'un sujet et de son dossier, proposez votre plan en I/A/B - II/A/B, puis comparez avec la correction.", icon: '📐' },
      redaction: { mode: 'redaction', title: 'Rédaction complète', description: "Exercice complet avec dossier détaillé, consigne et correction. Entraînez-vous en conditions réelles.", icon: '✍️' },
    };
    const s = sections[activeSection];
    return (
      <div className="space-y-4">
        <button onClick={() => setActiveSection(null)} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#b91c1c] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          Retour
        </button>
        <AIExerciseSection {...s} />
      </div>
    );
  }

  const EXERCISES = [
    {
      id: 'analyse',
      label: 'Analyse du dossier',
      tagline: 'Première étape essentielle',
      description: 'Un dossier documentaire vous est soumis. Identifiez les idées directrices, les contradictions et les documents clés à exploiter.',
      duree: '45 min',
      difficulty: 'Guidée',
      tags: ['Idées directrices', 'Contradictions', 'Documents clés'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      color: {
        border: 'border-t-emerald-400',
        iconBg: 'bg-emerald-50',
        iconText: 'text-emerald-600',
        tagBg: 'bg-emerald-50',
        tagText: 'text-emerald-700',
        tagBorder: 'border-emerald-100',
        badgeBg: 'bg-emerald-100 text-emerald-700',
      },
    },
    {
      id: 'plan',
      label: 'Élaboration du plan',
      tagline: 'Fondation de la note',
      description: 'À partir d\u2019un sujet et de son dossier, proposez un plan I/A/B — II/A/B, puis comparez votre structure avec la correction détaillée.',
      duree: '1h15',
      difficulty: 'Structurée',
      tags: ['Plan I/A/B — II/A/B', 'Problématique', 'Annonce de plan'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      color: {
        border: 'border-t-amber-400',
        iconBg: 'bg-amber-50',
        iconText: 'text-amber-700',
        tagBg: 'bg-amber-50',
        tagText: 'text-amber-800',
        tagBorder: 'border-amber-100',
        badgeBg: 'bg-amber-100 text-amber-800',
      },
    },
    {
      id: 'redaction',
      label: 'Rédaction complète',
      tagline: 'Entraînement en conditions réelles',
      description: 'Exercice complet avec dossier détaillé, consigne et correction. Rédigez votre note de synthèse et recevez un feedback IA structuré sur 20.',
      duree: '5 heures',
      difficulty: 'Complète',
      tags: ['Dossier complet', 'Rédaction intégrale', 'Feedback IA sur 20'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      ),
      color: {
        border: 'border-t-sky-400',
        iconBg: 'bg-sky-50',
        iconText: 'text-sky-600',
        tagBg: 'bg-sky-50',
        tagText: 'text-sky-700',
        tagBorder: 'border-sky-100',
        badgeBg: 'bg-sky-100 text-sky-700',
      },
    },
  ];

  const KEY_TOPICS = [
    'Dossier documentaire',
    'Problématisation',
    'Plan dialectique',
    'Reformulation',
    'Introduction synthétique',
    'Annonce du plan',
  ];

  return (
    <div className="space-y-8">
      {/* AI Exercises */}
      <div>
        <div className="mb-5">
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-gray-900 mb-1">
            Entraînement <span className="home-gradient-text">interactif</span>
          </h3>
          <p className="text-sm text-gray-500">Trois modules progressifs. Sujets générés à chaque session pour un entraînement toujours renouvelé.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {EXERCISES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setActiveSection(ex.id)}
              className={`relative bg-white rounded-2xl border border-slate-200 border-t-4 ${ex.color.border} p-5 text-left shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group flex flex-col`}
            >
              {/* Difficulty badge */}
              <div className={`absolute top-4 right-4 ${ex.color.badgeBg} text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full`}>
                {ex.difficulty}
              </div>

              {/* Icon */}
              <div className={`w-11 h-11 ${ex.color.iconBg} ${ex.color.iconText} rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                {ex.icon}
              </div>

              {/* Tagline */}
              <div className={`${ex.color.iconText} text-[10px] font-bold uppercase tracking-wider mb-1`}>
                {ex.tagline}
              </div>

              {/* Title */}
              <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {ex.label}
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                {ex.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {ex.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-medium ${ex.color.tagBg} ${ex.color.tagText} border ${ex.color.tagBorder} px-2 py-0.5 rounded-md`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta row */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100 mt-auto">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {ex.duree}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-slate-700 group-hover:text-[#991b1b] transition-colors">
                  Commencer
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Key topics */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#fef2f2] rounded-lg flex items-center justify-center text-[#991b1b]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
          <h4 className="font-bold text-slate-900">Compétences travaillées</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {KEY_TOPICS.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <svg className="w-3 h-3 text-[#991b1b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Tip box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <div>
            <h5 className="font-bold text-amber-900 mb-1 text-sm">Conseil d&apos;entraînement</h5>
            <p className="text-sm text-amber-800 leading-relaxed">
              Commencez par le module <strong>Analyse</strong> pour maîtriser la lecture du dossier, puis passez au <strong>Plan</strong> pour structurer votre pensée, avant de vous lancer dans la <strong>Rédaction complète</strong> en conditions réelles.
            </p>
          </div>
        </div>
      </div>

      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
}

/* ============================================================
   Main Component
   ============================================================ */
export default function SyntheseClient({ embedded = false }) {
  const [activeTab, setActiveTab] = useState('exercices');

  if (embedded) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Note de <span className="home-gradient-text">synthèse</span>
          </h2>
          <p className="text-sm text-gray-500">5 heures — Coefficient 3 — Épreuve reine du CRFPA</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-xl p-1 mb-8 max-w-md mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-[#991b1b] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === 'methodologie' ? <MethodologieTab /> : <ExercicesTab />}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#fef2f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Épreuve reine d&apos;admissibilité — Coefficient 3
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Note de <span className="home-gradient-text">synthèse</span>
          </h1>
          <div className="w-12 h-1 bg-[#991b1b] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Entraînez-vous avec des dossiers complets reproduisant les conditions réelles de l&apos;examen du CRFPA. Méthodologie complète en annexe.
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="font-semibold text-slate-700">5 heures</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
              <span className="font-semibold text-slate-700">Coefficient 3</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span className="font-semibold text-slate-700">Dossier documentaire</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-xl p-1 mb-8 max-w-md mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-[#991b1b] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'methodologie' ? <MethodologieTab /> : <ExercicesTab />}
      </div>
    </section>
  );
}
