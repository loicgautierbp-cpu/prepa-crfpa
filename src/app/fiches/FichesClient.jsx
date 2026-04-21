'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { FICHES_DATA } from '@/data/fiches';
import { SUBJECTS } from '@/data/subjects';
import { usePremium } from '@/contexts/PremiumContext';
import { useAuth } from '@/contexts/AuthContext';
import { SUBJECT_ICONS } from '@/data/constants';
import { extractFicheSummary } from '@/utils/fiche-colors';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import UpgradeModal from '@/components/ui/UpgradeModal';

/* Color map keyed by subject color name (from SUBJECTS data) */
const subjectColorMap = {
  indigo: { badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500', ring: 'ring-indigo-500/20', icon: 'text-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-100' },
  primary: { badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500', ring: 'ring-indigo-500/20', icon: 'text-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-100' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500', ring: 'ring-emerald-500/20', icon: 'text-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-100' },
  violet: { badge: 'bg-violet-100 text-violet-700', bar: 'bg-violet-500', ring: 'ring-violet-500/20', icon: 'text-violet-500', light: 'bg-violet-50', border: 'border-violet-100' },
  cyan: { badge: 'bg-cyan-100 text-cyan-700', bar: 'bg-cyan-500', ring: 'ring-cyan-500/20', icon: 'text-cyan-500', light: 'bg-cyan-50', border: 'border-cyan-100' },
  amber: { badge: 'bg-amber-100 text-amber-700', bar: 'bg-amber-500', ring: 'ring-amber-500/20', icon: 'text-amber-500', light: 'bg-amber-50', border: 'border-amber-100' },
  rose: { badge: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500', ring: 'ring-rose-500/20', icon: 'text-rose-500', light: 'bg-rose-50', border: 'border-rose-100' },
  teal: { badge: 'bg-teal-100 text-teal-700', bar: 'bg-teal-500', ring: 'ring-teal-500/20', icon: 'text-teal-500', light: 'bg-teal-50', border: 'border-teal-100' },
  sky: { badge: 'bg-sky-100 text-sky-700', bar: 'bg-sky-500', ring: 'ring-sky-500/20', icon: 'text-sky-500', light: 'bg-sky-50', border: 'border-sky-100' },
  lime: { badge: 'bg-lime-100 text-lime-700', bar: 'bg-lime-500', ring: 'ring-lime-500/20', icon: 'text-lime-500', light: 'bg-lime-50', border: 'border-lime-100' },
  orange: { badge: 'bg-orange-100 text-orange-700', bar: 'bg-orange-500', ring: 'ring-orange-500/20', icon: 'text-orange-500', light: 'bg-orange-50', border: 'border-orange-100' },
  yellow: { badge: 'bg-yellow-100 text-yellow-700', bar: 'bg-yellow-500', ring: 'ring-yellow-500/20', icon: 'text-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-100' },
  slate: { badge: 'bg-slate-100 text-slate-700', bar: 'bg-slate-500', ring: 'ring-slate-500/20', icon: 'text-slate-500', light: 'bg-slate-50', border: 'border-slate-100' },
  purple: { badge: 'bg-purple-100 text-purple-700', bar: 'bg-purple-500', ring: 'ring-purple-500/20', icon: 'text-purple-500', light: 'bg-purple-50', border: 'border-purple-100' },
  red: { badge: 'bg-red-100 text-red-700', bar: 'bg-red-500', ring: 'ring-red-500/20', icon: 'text-red-500', light: 'bg-red-50', border: 'border-red-100' },
};

function getColors(subject) {
  return subjectColorMap[subject?.color] || subjectColorMap.primary;
}

/* Floating subject cards — 4 fixed slots, 14 subjects rotating one at a time */
const CARD_STYLES = {
  indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600', label: 'text-indigo-700', border: 'border-indigo-100/50', shadow: 'shadow-indigo-500/10', barBg: 'bg-indigo-100', barLight: 'bg-indigo-50' },
  emerald: { bg: 'bg-emerald-100', icon: 'text-emerald-600', label: 'text-emerald-700', border: 'border-emerald-100/50', shadow: 'shadow-emerald-500/10', barBg: 'bg-emerald-100', barLight: 'bg-emerald-50' },
  violet: { bg: 'bg-violet-100', icon: 'text-violet-600', label: 'text-violet-700', border: 'border-violet-100/50', shadow: 'shadow-violet-500/10', barBg: 'bg-violet-100', barLight: 'bg-violet-50' },
  cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600', label: 'text-cyan-700', border: 'border-cyan-100/50', shadow: 'shadow-cyan-500/10', barBg: 'bg-cyan-100', barLight: 'bg-cyan-50' },
  amber: { bg: 'bg-amber-100', icon: 'text-amber-600', label: 'text-amber-700', border: 'border-amber-100/50', shadow: 'shadow-amber-500/10', barBg: 'bg-amber-100', barLight: 'bg-amber-50' },
  rose: { bg: 'bg-rose-100', icon: 'text-rose-600', label: 'text-rose-700', border: 'border-rose-100/50', shadow: 'shadow-rose-500/10', barBg: 'bg-rose-100', barLight: 'bg-rose-50' },
  teal: { bg: 'bg-teal-100', icon: 'text-teal-600', label: 'text-teal-700', border: 'border-teal-100/50', shadow: 'shadow-teal-500/10', barBg: 'bg-teal-100', barLight: 'bg-teal-50' },
  sky: { bg: 'bg-sky-100', icon: 'text-sky-600', label: 'text-sky-700', border: 'border-sky-100/50', shadow: 'shadow-sky-500/10', barBg: 'bg-sky-100', barLight: 'bg-sky-50' },
  lime: { bg: 'bg-lime-100', icon: 'text-lime-600', label: 'text-lime-700', border: 'border-lime-100/50', shadow: 'shadow-lime-500/10', barBg: 'bg-lime-100', barLight: 'bg-lime-50' },
  orange: { bg: 'bg-orange-100', icon: 'text-orange-600', label: 'text-orange-700', border: 'border-orange-100/50', shadow: 'shadow-orange-500/10', barBg: 'bg-orange-100', barLight: 'bg-orange-50' },
  yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600', label: 'text-yellow-700', border: 'border-yellow-100/50', shadow: 'shadow-yellow-500/10', barBg: 'bg-yellow-100', barLight: 'bg-yellow-50' },
  slate: { bg: 'bg-slate-100', icon: 'text-slate-600', label: 'text-slate-700', border: 'border-slate-100/50', shadow: 'shadow-slate-500/10', barBg: 'bg-slate-100', barLight: 'bg-slate-50' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-600', label: 'text-purple-700', border: 'border-purple-100/50', shadow: 'shadow-purple-500/10', barBg: 'bg-purple-100', barLight: 'bg-purple-50' },
  red: { bg: 'bg-red-100', icon: 'text-red-600', label: 'text-red-700', border: 'border-red-100/50', shadow: 'shadow-red-500/10', barBg: 'bg-red-100', barLight: 'bg-red-50' },
};

/* 4 positions that NEVER overlap — corners of the container */
const SLOT_POSITIONS = [
  { top: 0, left: 8 },       /* top-left */
  { top: 12, right: 0 },     /* top-right */
  { bottom: 40, left: 0 },   /* bottom-left */
  { bottom: 0, right: 16 },  /* bottom-right */
];

function FloatingSubjectCards() {
  const allSubjects = useMemo(() =>
    SUBJECTS.map(s => ({
      id: s.id,
      name: s.name,
      icon: SUBJECT_ICONS[s.id]?.path || '',
      color: s.color,
      count: FICHES_DATA.filter(f => f.subject === s.id).length,
    })),
  []);

  /* slots[i] = index into allSubjects shown in slot i */
  const [slots, setSlots] = useState(() => {
    const indices = Array.from({ length: SUBJECTS.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, 4);
  });

  /* Track which slot is currently fading out (-1 = none) */
  const [fadingSlot, setFadingSlot] = useState(-1);

  /* Cycle: pick a slot to swap, fade it out, then swap subject & fade in */
  useEffect(() => {
    let nextSlot = 0; /* round-robin through slots for predictable pacing */
    const interval = setInterval(() => {
      const slotToSwap = nextSlot % 4;
      nextSlot++;

      /* Phase 1: fade out */
      setFadingSlot(slotToSwap);

      /* Phase 2: after fade-out, swap the subject and fade in */
      setTimeout(() => {
        setSlots(prev => {
          const usedIndices = new Set(prev);
          const available = allSubjects
            .map((_, i) => i)
            .filter(i => !usedIndices.has(i));
          if (available.length === 0) return prev;
          const pick = available[Math.floor(Math.random() * available.length)];
          const next = [...prev];
          next[slotToSwap] = pick;
          return next;
        });
        setFadingSlot(-1);
      }, 500); /* matches CSS fade-out duration */
    }, 3500);

    return () => clearInterval(interval);
  }, [allSubjects]);

  return (
    <div className="hidden lg:block relative h-[340px]">
      {slots.map((subjectIdx, slotIdx) => {
        const subject = allSubjects[subjectIdx];
        if (!subject) return null;
        const style = CARD_STYLES[subject.color] || CARD_STYLES.indigo;
        const pos = SLOT_POSITIONS[slotIdx];
        const isFading = fadingSlot === slotIdx;

        return (
          <div
            key={`slot-${slotIdx}-${subject.id}`}
            className={`absolute w-52 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border p-5 ${style.border} ${style.shadow} transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100 animate-[cardFadeIn_0.5s_ease-out]'}`}
            style={{
              top: pos.top !== undefined ? pos.top : undefined,
              left: pos.left !== undefined ? pos.left : undefined,
              right: pos.right !== undefined ? pos.right : undefined,
              bottom: pos.bottom !== undefined ? pos.bottom : undefined,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 ${style.bg} rounded-lg flex items-center justify-center`}>
                <svg className={`w-4 h-4 ${style.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={subject.icon} />
                </svg>
              </div>
              <div>
                <div className={`text-xs font-bold ${style.label}`}>{subject.name}</div>
                <div className="text-[10px] text-gray-400">{subject.count} fiches</div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className={`h-2 ${style.barBg} rounded-full w-full`} />
              <div className={`h-2 ${style.barLight} rounded-full w-4/5`} />
              <div className={`h-2 ${style.barLight} rounded-full w-3/5`} />
            </div>
          </div>
        );
      })}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-100/40 rounded-2xl rotate-12 blur-[2px] pointer-events-none" />
    </div>
  );
}

/* ================================================================
   FICHE CARD — lien direct vers /fiches/[slug] (bon pour le SEO)
   ================================================================ */
function FicheCard({ fiche, index, premiumUser, user, onLoginRequired, onUpgradeRequired }) {
  const subject = SUBJECTS.find(s => s.id === fiche.subject);
  const colors = getColors(subject);
  const iconPath = SUBJECT_ICONS[fiche.subject]?.path || '';
  const summary = fiche.summary || extractFicheSummary(fiche, 140);

  return (
    <article
      className="group lift relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-gray-200/60 hover:border-gray-300 transition-all duration-300"
      style={{ animationDelay: `${Math.min(index * 0.04, 0.4)}s` }}
    >
      {/* Lien principal couvrant toute la card (sauf zones d'action) */}
      <Link
        href={`/fiches/${fiche.id}`}
        className="absolute inset-0 z-10"
        aria-label={`Lire la fiche : ${fiche.title}`}
      />

      <div className={`h-1 ${colors.bar}`} />
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-9 h-9 rounded-xl ${colors.light} ${colors.border} border flex items-center justify-center shrink-0`}>
            <svg className={`w-[18px] h-[18px] ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-[11px] font-bold uppercase tracking-wider ${colors.icon}`}>{subject?.name || ''}</span>
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug mt-0.5 group-hover:text-slate-900 transition-colors">{fiche.title}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{summary}</p>
        <div className="flex items-center justify-between relative z-20">
          <div className="flex items-center gap-1.5 text-[#991b1b] text-xs font-bold group-hover:gap-2.5 transition-all pointer-events-none">
            Lire la fiche
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          {premiumUser ? (
            <Link
              href={`/cours?id=${fiche.id}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
              Cours
            </Link>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); !user ? onLoginRequired() : onUpgradeRequired(); }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all bg-gray-50 text-gray-400 border border-gray-200 hover:bg-gray-100"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Cours
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
const EXCLUDED_SUBJECTS = ['synthese', 'grand-oral', 'anglais'];
const MATIERE_SUBJECTS = SUBJECTS.filter(s => !EXCLUDED_SUBJECTS.includes(s.id));
const MATIERE_FICHES = FICHES_DATA.filter(f => !EXCLUDED_SUBJECTS.includes(f.subject));

export default function FichesPage() {
  const { isEssentiel } = usePremium();
  const { user } = useAuth();
  const [currentSubject, setCurrentSubject] = useState('all');
  const [search, setSearch] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  /* ---------- Filtering ---------- */
  const filteredFiches = (() => {
    let fiches = currentSubject === 'all'
      ? MATIERE_FICHES
      : MATIERE_FICHES.filter(f => f.subject === currentSubject);
    if (search) {
      const q = search.toLowerCase();
      fiches = fiches.filter(f =>
        f.title.toLowerCase().includes(q) || f.summary.toLowerCase().includes(q)
      );
    }
    return fiches;
  })();

  /* ---------- Results counter text ---------- */
  const resultsText = (() => {
    if (search) {
      return filteredFiches.length === 0
        ? 'Aucune fiche trouvee'
        : `${filteredFiches.length} fiche${filteredFiches.length > 1 ? 's' : ''} trouvee${filteredFiches.length > 1 ? 's' : ''}`;
    }
    if (currentSubject === 'all') {
      return `${filteredFiches.length} fiches -- toutes les matieres`;
    }
    const sub = SUBJECTS.find(s => s.id === currentSubject);
    return `${filteredFiches.length} fiches en ${sub?.name || ''}`;
  })();

  /* ---------- Grouped vs flat rendering ---------- */
  const showGrouped = currentSubject === 'all' && !search;

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="bg-[#fef2f2] pt-14 pb-10 md:pt-20 md:pb-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent-500/10 backdrop-blur px-4 py-2 rounded-full border border-accent-300 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                </span>
                <span className="text-sm font-semibold text-accent-700">{FICHES_DATA.length} fiches disponibles</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-1">
                Fiches et{' '}
                <span className="fiches-gradient-text">
                  cours complets
                </span>{' '}
                en un clic
              </h1>
              <div className="w-12 h-1 bg-[#991b1b] mx-auto mt-4 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
                Revisez efficacement avec des <strong className="text-gray-900">fiches de revision</strong> synthetiques et des{' '}
                <strong className="text-gray-900">cours detailles</strong> couvrant le{' '}
                <strong className="text-gray-900">programme complet</strong> du CRFPA. Chaque fiche est{' '}
                <strong className="text-gray-900">telechargeable en PDF</strong>.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#991b1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">{FICHES_DATA.length}</div>
                    <div className="text-xs font-medium text-gray-500">Fiches &amp; cours</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-gray-200/60 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-violet-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">{MATIERE_SUBJECTS.length}</div>
                    <div className="text-xs font-medium text-gray-500">Mati&egrave;res couvertes</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-gray-200/60 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">PDF</div>
                    <div className="text-xs font-medium text-gray-500">Telechargeable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SEARCH + FILTERS ====== */}
      <section className="py-4 -mt-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/60 border border-gray-100 p-4 md:p-5">
            {/* Search bar */}
            <div className="relative mb-3">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une fiche par titre ou mot-cle..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-slate-300 focus:ring-[3px] focus:ring-slate-500/15 transition-all"
              />
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCurrentSubject('all')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  currentSubject === 'all'
                    ? 'bg-[#b91c1c] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                </svg>
                Toutes
                <span className={`text-xs px-2 py-0.5 rounded-full ${currentSubject === 'all' ? 'bg-white/20' : 'text-gray-400'}`}>
                  {MATIERE_FICHES.length}
                </span>
              </button>
              {MATIERE_SUBJECTS.map((sub) => {
                const count = MATIERE_FICHES.filter(f => f.subject === sub.id).length;
                const isActive = currentSubject === sub.id;
                const iconPath = SUBJECT_ICONS[sub.id]?.path || '';
                return (
                  <button
                    key={sub.id}
                    onClick={() => setCurrentSubject(sub.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#b91c1c] text-white shadow-sm'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                    {sub.name}
                    <span className={`text-xs font-normal ${isActive ? 'text-white/70' : 'text-gray-400'}`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====== RESULTS COUNTER ====== */}
      <section className="pt-1 pb-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 font-medium">{resultsText}</p>
        </div>
      </section>

      {/* ====== FICHES GRID ====== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFiches.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">Aucune fiche ne correspond a votre recherche</p>
              <p className="text-sm text-gray-400 mt-1">Essayez avec d&apos;autres mots-cles</p>
            </div>
          ) : showGrouped ? (
            /* Grouped by subject */
            SUBJECTS.map((sub) => {
              const subFiches = filteredFiches.filter(f => f.subject === sub.id);
              if (subFiches.length === 0) return null;
              const colors = getColors(sub);
              const iconPath = SUBJECT_ICONS[sub.id]?.path || '';
              return (
                <div key={sub.id} className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.light} ${colors.border} border flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-gray-900">{sub.name}</h2>
                      <p className="text-xs text-gray-500">{subFiches.length} fiches</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subFiches.map((f, i) => (
                      <FicheCard
                        key={f.id}
                        fiche={f}
                        index={i}
                        premiumUser={isEssentiel} user={user} onLoginRequired={() => setShowLoginModal(true)} onUpgradeRequired={() => setShowUpgradeModal(true)}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            /* Flat grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFiches.map((f, i) => (
                <FicheCard
                  key={f.id}
                  fiche={f}
                  index={i}
                  premiumUser={isEssentiel} user={user} onLoginRequired={() => setShowLoginModal(true)} onUpgradeRequired={() => setShowUpgradeModal(true)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Auth & Upgrade modals */}
      {showLoginModal && <LoginRequiredModal onClose={() => setShowLoginModal(false)} />}
      {showUpgradeModal && <UpgradeModal requiredTier="essentiel" onClose={() => setShowUpgradeModal(false)} />}
    </>
  );
}
