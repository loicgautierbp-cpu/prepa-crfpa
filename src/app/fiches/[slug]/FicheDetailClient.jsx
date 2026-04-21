'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { usePremium } from '@/contexts/PremiumContext';
import { useAuth } from '@/contexts/AuthContext';
import { SUBJECT_ICONS } from '@/data/constants';
import { getFicheColors, extractFicheSummary } from '@/utils/fiche-colors';
import LoginRequiredModal from '@/components/ui/LoginRequiredModal';
import UpgradeModal from '@/components/ui/UpgradeModal';
import { useState } from 'react';

export default function FicheDetailClient({ fiche, subject, relatedFiches = [], prevFiche, nextFiche }) {
  const { isEssentiel } = usePremium();
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const colors = getFicheColors(subject);
  const iconPath = SUBJECT_ICONS[fiche.subject]?.path || '';
  const summary = extractFicheSummary(fiche, 240);

  const handleDownloadPDF = useCallback(async () => {
    if (!user) { setShowLogin(true); return; }
    if (!isEssentiel) { setShowUpgrade(true); return; }
    try {
      const mod = await import('html2pdf.js');
      const html2pdf = mod.default || mod;

      const pdfHexColors = {
        indigo:  { bg: '#eef2ff', accent: '#4f46e5', accentDark: '#3730a3', light: '#c7d2fe', lighter: '#e0e7ff', badgeText: '#3730a3' },
        primary: { bg: '#fef2f2', accent: '#b91c1c', accentDark: '#991b1b', light: '#fecaca', lighter: '#fee2e2', badgeText: '#991b1b' },
        emerald: { bg: '#ecfdf5', accent: '#059669', accentDark: '#065f46', light: '#a7f3d0', lighter: '#d1fae5', badgeText: '#065f46' },
        violet:  { bg: '#f5f3ff', accent: '#7c3aed', accentDark: '#5b21b6', light: '#ddd6fe', lighter: '#ede9fe', badgeText: '#5b21b6' },
        cyan:    { bg: '#ecfeff', accent: '#0891b2', accentDark: '#155e75', light: '#a5f3fc', lighter: '#cffafe', badgeText: '#155e75' },
        amber:   { bg: '#fffbeb', accent: '#d97706', accentDark: '#92400e', light: '#fde68a', lighter: '#fef3c7', badgeText: '#92400e' },
        rose:    { bg: '#fff1f2', accent: '#e11d48', accentDark: '#9f1239', light: '#fecdd3', lighter: '#ffe4e6', badgeText: '#9f1239' },
        teal:    { bg: '#f0fdfa', accent: '#0d9488', accentDark: '#115e59', light: '#99f6e4', lighter: '#ccfbf1', badgeText: '#115e59' },
        sky:     { bg: '#f0f9ff', accent: '#0284c7', accentDark: '#075985', light: '#bae6fd', lighter: '#e0f2fe', badgeText: '#075985' },
        lime:    { bg: '#f7fee7', accent: '#65a30d', accentDark: '#3f6212', light: '#d9f99d', lighter: '#ecfccb', badgeText: '#3f6212' },
        orange:  { bg: '#fff7ed', accent: '#ea580c', accentDark: '#9a3412', light: '#fed7aa', lighter: '#ffedd5', badgeText: '#9a3412' },
        yellow:  { bg: '#fefce8', accent: '#ca8a04', accentDark: '#854d0e', light: '#fef08a', lighter: '#fef9c3', badgeText: '#854d0e' },
        slate:   { bg: '#f8fafc', accent: '#475569', accentDark: '#1e293b', light: '#cbd5e1', lighter: '#e2e8f0', badgeText: '#1e293b' },
        purple:  { bg: '#faf5ff', accent: '#9333ea', accentDark: '#6b21a8', light: '#e9d5ff', lighter: '#f3e8ff', badgeText: '#6b21a8' },
        red:     { bg: '#fef2f2', accent: '#dc2626', accentDark: '#991b1b', light: '#fecaca', lighter: '#fee2e2', badgeText: '#991b1b' },
      };
      const c = pdfHexColors[subject?.color] || pdfHexColors.primary;

      const processedContent = (fiche.content || '')
        .replace(/class="[^"]*text-xl font-bold[^"]*"/g,
          `style="font-size:16px;font-weight:700;color:${c.accentDark};margin:24px 0 10px 0;padding:10px 0 8px 14px;border-left:3px solid ${c.accent};letter-spacing:-0.2px;"`)
        .replace(/class="[^"]*text-lg font-semibold[^"]*"/g,
          `style="font-size:14px;font-weight:600;color:#1f2937;margin:18px 0 8px 0;"`)
        .replace(/class="[^"]*list-disc[^"]*"/g, 'style="padding-left:20px;margin:0 0 14px 0;"')
        .replace(/class="[^"]*mb-3[^"]*"/g, 'style="margin:0 0 10px 0;line-height:1.7;"')
        .replace(/class="[^"]*mb-4[^"]*"/g, 'style="margin:0 0 14px 0;line-height:1.7;"')
        .replace(/<li>/g, '<li style="margin:0 0 4px 0;line-height:1.65;font-size:12.5px;">')
        .replace(/class="[^"]*bg-[a-z]+-50 border border-[a-z]+-200 rounded-xl p-4[^"]*"/g,
          `style="background:${c.bg};border:1.5px solid ${c.light};border-radius:10px;padding:14px 18px;margin-top:16px;margin-bottom:8px;"`)
        .replace(/class="[^"]*text-sm font-semibold text-[a-z]+-800[^"]*"/g,
          `style="font-size:11.5px;font-weight:600;color:${c.badgeText};margin:0;line-height:1.55;"`);

      const pdfHTML = `<div id="pdf-export" style="width:700px;margin:0 auto;font-family:Inter,Helvetica,Arial,sans-serif;color:#1f2937;background:#fff;">
        <div style="background:${c.accent};padding:32px 36px 28px;color:#fff;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:18px;"><tr>
            <td style="padding:0;">
              <span style="display:inline-block;padding:5px 14px;background:rgba(255,255,255,0.15);font-size:10px;font-weight:700;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;margin-right:8px;">${subject?.name || ''}</span>
              <span style="display:inline-block;padding:5px 12px;background:rgba(255,255,255,0.08);font-size:10px;font-weight:600;border-radius:999px;color:rgba(255,255,255,0.7);">Fiche de révision</span>
            </td>
            <td style="padding:0;text-align:right;">
              <span style="font-size:10px;font-weight:700;opacity:0.5;letter-spacing:1px;">PRÉPA CRFPA</span>
            </td>
          </tr></table>
          <h1 style="font-size:26px;font-weight:900;margin:0 0 8px 0;letter-spacing:-0.4px;line-height:1.2;color:#fff;">${fiche.title}</h1>
          <p style="font-size:12px;color:rgba(255,255,255,0.6);margin:0;line-height:1.5;">${summary}</p>
        </div>
        <div style="height:3px;background:${c.light};"></div>
        <div style="padding:28px 36px 20px;font-size:12.5px;line-height:1.75;color:#374151;">
          ${processedContent}
        </div>
        <table style="width:calc(100% - 72px);margin:0 36px;padding:0;border-collapse:collapse;border-top:2px solid ${c.lighter};">
          <tr>
            <td style="padding:16px 0 10px;vertical-align:middle;">
              <table style="border-collapse:collapse;"><tr>
                <td style="padding:0 8px 0 0;vertical-align:middle;">
                  <div style="width:24px;height:24px;background:${c.accent};border-radius:6px;text-align:center;line-height:24px;">
                    <span style="color:#fff;font-size:10px;font-weight:900;">P</span>
                  </div>
                </td>
                <td style="padding:0;vertical-align:middle;">
                  <span style="font-size:9px;font-weight:700;color:#374151;display:block;">Prépa CRFPA</span>
                  <span style="font-size:8px;color:#9ca3af;">Usage personnel uniquement</span>
                </td>
              </tr></table>
            </td>
            <td style="padding:16px 0 10px;text-align:right;vertical-align:middle;">
              <span style="font-size:9px;color:${c.accent};font-weight:700;display:block;">prepa-crfpa.fr</span>
              <span style="font-size:8px;color:#9ca3af;">${subject?.name || ''}</span>
            </td>
          </tr>
        </table>
      </div>`;

      document.body.innerHTML = pdfHTML;
      document.body.style.overflow = 'auto';
      document.body.style.background = '#fff';
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach((s) => s.remove());
      document.documentElement.style.background = '#fff';
      window.scrollTo(0, 0);

      const pdfEl = document.getElementById('pdf-export');
      await html2pdf().set({
        margin: [8, 12, 8, 12],
        filename: `fiche-${fiche.id}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      }).from(pdfEl).save();

      window.location.reload();
    } catch (err) {
      console.error('PDF generation error:', err);
    }
  }, [fiche, subject, isEssentiel, user, summary]);

  return (
    <>
      {/* ====== BREADCRUMBS ====== */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/fiches" className="hover:text-gray-900 transition-colors">Fiches</Link>
            </li>
            {subject && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={`/fiches?matiere=${fiche.subject}`}
                    className={`${colors.icon} hover:underline font-medium`}
                  >
                    {subject.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold truncate">{fiche.title}</li>
          </ol>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <header className={`${colors.light} border-b ${colors.border} relative overflow-hidden`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-11 h-11 rounded-xl bg-white ${colors.border} border flex items-center justify-center shadow-sm`}>
              <svg className={`w-5 h-5 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
              </svg>
            </div>
            <div>
              <span className={`inline-flex text-[11px] font-bold uppercase tracking-wider ${colors.icon}`}>
                {subject?.name || 'Fiche'}
              </span>
              <p className="text-xs text-gray-500">Fiche de révision CRFPA</p>
            </div>
          </div>
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4"
          >
            {fiche.title}
          </h1>
          {summary && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {summary}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Télécharger en PDF
            </button>
            <Link
              href="/fiches"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Toutes les fiches
            </Link>
          </div>
        </div>
      </header>

      {/* ====== CONTENT ====== */}
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <article
            className="prose prose-gray max-w-none text-gray-700 leading-relaxed
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
              prose-p:leading-relaxed
              prose-li:leading-relaxed
              prose-strong:text-gray-900
              prose-a:text-[#991b1b] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: fiche.content }}
          />

          {/* ====== COURS CTA ====== */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            {isEssentiel ? (
              <Link
                href={`/cours?id=${fiche.id}`}
                className="flex items-center justify-between w-full px-6 py-5 bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-200 rounded-2xl hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-amber-200 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-base font-bold text-amber-900">Accéder au cours complet</p>
                    <p className="text-xs text-amber-600">Version longue avec explications détaillées et exemples</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ) : (
              <button
                onClick={() => !user ? setShowLogin(true) : setShowUpgrade(true)}
                className="flex items-center justify-between w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-base font-bold text-gray-600">Cours complet disponible</p>
                    <p className="text-xs text-gray-400">Réservé aux membres Essentiel</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full shrink-0">Essentiel</span>
              </button>
            )}
          </div>

          {/* ====== PREV / NEXT NAV ====== */}
          {(prevFiche || nextFiche) && (
            <nav aria-label="Navigation entre fiches" className="mt-8 grid sm:grid-cols-2 gap-3">
              {prevFiche ? (
                <Link
                  href={`/fiches/${prevFiche.id}`}
                  className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:-translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Fiche précédente</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">{prevFiche.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextFiche ? (
                <Link
                  href={`/fiches/${nextFiche.id}`}
                  className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all text-right sm:flex-row-reverse"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Fiche suivante</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">{nextFiche.title}</p>
                  </div>
                </Link>
              ) : null}
            </nav>
          )}
        </div>
      </main>

      {/* ====== RELATED FICHES (SEO internal linking) ====== */}
      {relatedFiches.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-1 w-10 ${colors.bar} rounded-full`} />
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-gray-900">
                Autres fiches en {subject?.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedFiches.map((f) => (
                <Link
                  key={f.id}
                  href={`/fiches/${f.id}`}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden"
                >
                  <div className={`h-1 ${colors.bar}`} />
                  <div className="p-5">
                    <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-gray-900 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                      {extractFicheSummary(f, 100)}
                    </p>
                    <div className={`flex items-center gap-1.5 ${colors.icon} text-xs font-bold group-hover:gap-2.5 transition-all`}>
                      Lire la fiche
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/fiches"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
              >
                Voir toutes les fiches
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Modales auth / upgrade */}
      {showLogin && <LoginRequiredModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal requiredTier="essentiel" onClose={() => setShowUpgrade(false)} />}
    </>
  );
}
