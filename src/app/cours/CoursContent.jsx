'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { loadCoursForFiche } from '@/data/cours';
import { usePremium } from '@/contexts/PremiumContext';
import { useAuth } from '@/contexts/AuthContext';
import { FICHES_DATA } from '@/data/fiches';
import { SUBJECTS } from '@/data/subjects';
import { SUBJECT_COLORS, SUBJECT_ICONS, getSubjectName } from '@/data/constants';

export default function CoursContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { isEssentiel, isLoaded } = usePremium();
  const { user } = useAuth();

  const [cours, setCours] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionsRef = useRef([]);

  const fiche = FICHES_DATA.find(f => f.id === id);
  const subjectId = fiche?.subject;
  const subjectName = subjectId ? getSubjectName(subjectId) : '';
  const subjectObj = subjectId ? SUBJECTS.find(s => s.id === subjectId) : null;
  const colors = SUBJECT_COLORS[subjectObj?.color] || SUBJECT_COLORS.indigo;
  const iconPath = subjectId ? (SUBJECT_ICONS[subjectId]?.path || '') : '';

  /* ---------- Load cours data ---------- */
  useEffect(() => {
    if (!id || !isEssentiel || !isLoaded) return;
    setLoading(true);
    loadCoursForFiche(id).then((data) => {
      setCours(data);
      setLoading(false);
    }).catch(() => {
      setCours(null);
      setLoading(false);
    });
  }, [id, isEssentiel, isLoaded]);

  /* ---------- Scroll progress bar ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- TOC IntersectionObserver ---------- */
  useEffect(() => {
    if (!cours?.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    const sectionEls = document.querySelectorAll('[data-cours-section]');
    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [cours]);

  /* ---------- GUARDS ---------- */
  if (!isLoaded) {
    return (
      <div className="pt-28 pb-16 text-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
          <div className="w-64 h-6 bg-gray-200 rounded-lg" />
          <div className="w-96 h-4 bg-gray-100 rounded-lg" />
        </div>
      </div>
    );
  }

  /* No id */
  if (!id || !fiche) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Cours introuvable</h1>
          <p className="text-gray-500 mb-8">Le cours demande n&apos;existe pas.</p>
          <Link href="/fiches" className="inline-flex px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
            Retour aux fiches
          </Link>
        </div>
      </section>
    );
  }

  /* Auth wall — non connecté → redirection */
  if (!user) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Connexion requise</h1>
          <p className="text-gray-500 mb-8">Connectez-vous pour accéder aux cours détaillés.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/connexion" className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
              Se connecter
            </Link>
            <Link href="/fiches" className="px-6 py-3 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-slate-300 transition-colors">
              Retour aux fiches
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* Essentiel wall — connecté gratuit */
  if (!isEssentiel) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Contenu réservé aux membres Essentiel</h1>
          <p className="text-gray-500 mb-8">Les cours détaillés sont accessibles à partir de la formule Essentiel. Profitez d&apos;explications approfondies pour chaque sujet.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/tarifs" className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
              Voir les offres
            </Link>
            <Link href="/fiches" className="px-6 py-3 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-slate-300 transition-colors">
              Retour aux fiches
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* Loading */
  if (loading) {
    return (
      <div className="pt-28 pb-16 text-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
          <div className="w-64 h-6 bg-gray-200 rounded-lg" />
          <div className="w-96 h-4 bg-gray-100 rounded-lg" />
        </div>
      </div>
    );
  }

  /* No cours data */
  if (!cours) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Cours bientot disponible</h1>
          <p className="text-gray-500 mb-8">Le cours detaille pour &laquo; {fiche.title} &raquo; est en cours de redaction. Revenez bientot !</p>
          <Link href="/fiches" className="inline-flex px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
            Retour aux fiches
          </Link>
        </div>
      </section>
    );
  }

  /* ====== MAIN RENDER ====== */
  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-[64px] left-0 right-0 z-40 h-1 bg-gray-100">
        <div
          className="h-full bg-[#0d6560] rounded-r-full transition-[width] duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ====== HERO ====== */}
      <section className="relative pt-4 pb-5 md:pt-6 md:pb-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #053d3a 0%, #0d6560 40%, #8f173b 70%, #ab1842 100%)' }}>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-3">
            <Link
              href="/fiches"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white bg-white/[0.08] border border-white/[0.12] backdrop-blur-lg hover:bg-white/[0.12] transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Fiches
            </Link>
            <svg className="w-3.5 h-3.5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/70 bg-white/[0.08] border border-white/[0.12] backdrop-blur-lg">
              <svg className={`w-3.5 h-3.5 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
              </svg>
              {subjectName}
            </span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/15 text-amber-300 text-xs font-bold rounded-full border border-amber-400/20">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Essentiel
                </span>
                <span className="px-3 py-1 bg-white/[0.08] text-white/60 text-xs font-semibold rounded-full border border-white/10">
                  {subjectName}
                </span>
              </div>

              {/* Title */}
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-1.5">
                {fiche.title}
              </h1>
              <p className="text-white/50 text-xs md:text-sm max-w-2xl leading-relaxed">
                {cours.introduction || fiche.summary}
              </p>
            </div>

            {/* Stats pills (desktop) */}
            <div className="hidden lg:flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-bold">~{cours.readTime || 15} min</p>
                  <p className="text-white/40 text-[10px]">Temps de lecture</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                <svg className="w-4 h-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div>
                  <p className="text-white text-sm font-bold">{cours.sections.length} sections</p>
                  <p className="text-white/40 text-[10px]">Chapitres du cours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="flex items-center gap-4 mt-5 lg:hidden">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/10">
              <svg className="w-3.5 h-3.5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-white/70 text-xs font-medium">~{cours.readTime || 15} min</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/10">
              <svg className="w-3.5 h-3.5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <span className="text-white/70 text-xs font-medium">{cours.sections.length} sections</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MOBILE TOC (horizontal scroll) ====== */}
      <div className="lg:hidden sticky top-[68px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 px-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {cours.sections.map((sec, i) => {
            const sectionId = `section-${i}`;
            const isActive = activeSection === sectionId;
            return (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors ${
                  isActive
                    ? `${colors.bg} ${colors.text} ${colors.border} border`
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className={`w-4 h-4 rounded-md ${isActive ? colors.bg : 'bg-gray-100'} flex items-center justify-center text-[9px] font-bold`}>
                  {i + 1}
                </span>
                {sec.title.length > 20 ? sec.title.substring(0, 20) + '\u2026' : sec.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* ====== CONTENT ====== */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar TOC (desktop) */}
            <aside className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <svg className={`w-4 h-4 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Sommaire</p>
                      <p className="text-[10px] text-gray-400">{cours.sections.length} chapitres</p>
                    </div>
                  </div>
                  <nav className="space-y-0.5">
                    {cours.sections.map((sec, i) => {
                      const sectionId = `section-${i}`;
                      const isActive = activeSection === sectionId;
                      return (
                        <a
                          key={sectionId}
                          href={`#${sectionId}`}
                          className={`group flex items-center gap-3 pl-4 py-2 text-sm border-l-2 rounded-r-lg transition-all hover:translate-x-1 ${
                            isActive
                              ? 'border-l-[#0d6560] text-[#0d6560] font-bold'
                              : 'border-l-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                            isActive ? 'bg-slate-100 text-[#0d6560]' : 'bg-gray-100 group-hover:bg-gray-200 text-gray-400 group-hover:text-gray-600'
                          }`}>
                            {i + 1}
                          </span>
                          <span className="truncate">{sec.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Back button */}
                <div className="mt-4">
                  <Link
                    href="/fiches"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 text-xs font-medium text-gray-500 hover:text-[#0d6560] hover:border-slate-300 transition-colors shadow-sm hover:shadow-md"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Retour aux fiches
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              {cours.sections.map((sec, i) => (
                <div
                  key={i}
                  id={`section-${i}`}
                  data-cours-section
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 mb-6 hover:shadow-md transition-shadow"
                  style={{ scrollMarginTop: '100px' }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center text-sm font-black ${colors.text} shrink-0`}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{sec.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">Section {i + 1} sur {cours.sections.length}</p>
                    </div>
                  </div>
                  <div
                    className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-[15px] pl-0 md:pl-14"
                    dangerouslySetInnerHTML={{ __html: sec.content }}
                  />
                </div>
              ))}

              {/* Bottom navigation */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-between">
                  <Link
                    href="/fiches"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-200 hover:border-slate-300 hover:text-[#0d6560] transition-all text-sm shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Toutes les fiches
                  </Link>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all text-sm shadow-lg shadow-gray-900/10"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    Revenir en haut
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
