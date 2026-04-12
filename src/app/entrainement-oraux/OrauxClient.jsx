'use client';
import { useState, Suspense, lazy } from 'react';

const GrandOralClient = lazy(() => import('./GrandOralClient'));
const AnglaisClient = lazy(() => import('./AnglaisClient'));

const EPREUVES = [
  {
    id: 'grand-oral',
    label: 'Grand oral',
    shortLabel: 'Grand oral',
    duree: '45 min + 1h prépa',
    coeff: 4,
    description: 'Préparez un exposé structuré sur un sujet de libertés fondamentales tiré au sort, puis affrontez les questions du jury.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    tags: ['Exposé 15 min', 'Questions jury 30 min', 'Libertés fondamentales'],
  },
  {
    id: 'anglais',
    label: 'Anglais juridique',
    shortLabel: 'Anglais',
    duree: 'Variable',
    coeff: 1,
    description: 'Entraînez-vous à la compréhension de textes juridiques en anglais et à l\'expression écrite en anglais juridique.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
    tags: ['Compréhension', 'Traduction', 'Expression'],
  },
];

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm text-gray-500">Chargement...</p>
      </div>
    </div>
  );
}

export default function OrauxClient() {
  const [activeEpreuve, setActiveEpreuve] = useState(null);

  if (activeEpreuve) {
    return (
      <div className="min-h-screen bg-white">
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <button onClick={() => setActiveEpreuve(null)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7b1636] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Toutes les épreuves
            </button>
            <div className="flex items-center gap-3">
              {EPREUVES.map((ep) => (
                <button key={ep.id} onClick={() => setActiveEpreuve(ep.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeEpreuve === ep.id ? 'bg-slate-900 text-white' : 'text-gray-500 hover:bg-gray-100'
                  }`}>
                  {ep.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <Suspense fallback={<LoadingFallback />}>
            {activeEpreuve === 'grand-oral' && <GrandOralClient embedded />}
            {activeEpreuve === 'anglais' && <AnglaisClient embedded />}
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eceef1]">
      <section className="pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
            Épreuves d&apos;admission
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Entraînement aux{' '}
            <span className="home-gradient-text">épreuves orales</span>
          </h1>
          <div className="w-12 h-1 bg-[#7b1636] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Préparez les 2 épreuves orales du CRFPA. Grand oral sur les libertés fondamentales et anglais juridique.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-5">
          {EPREUVES.map((epreuve) => (
            <button key={epreuve.id} onClick={() => setActiveEpreuve(epreuve.id)}
              className="lift group relative bg-white rounded-xl border border-gray-200 p-6 sm:p-7 text-left transition-all hover:border-slate-300 hover:shadow-md">
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#7b1636] shrink-0 group-hover:bg-slate-100 transition-colors">
                  {epreuve.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-gray-900 group-hover:text-slate-900 transition-colors">{epreuve.label}</h2>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">{epreuve.duree}</span>
                      <span className="px-2.5 py-0.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-full">Coeff. {epreuve.coeff}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{epreuve.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {epreuve.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 self-center">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#7b1636] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-amber-50/60 border border-amber-200/60 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">Conseil pour le grand oral</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Le grand oral est l&apos;épreuve la plus coefficientée (coeff. 4). Entraînez-vous régulièrement à structurer un exposé en 15 minutes et à répondre aux questions déstabilisantes du jury. La maîtrise de la déontologie est indispensable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
