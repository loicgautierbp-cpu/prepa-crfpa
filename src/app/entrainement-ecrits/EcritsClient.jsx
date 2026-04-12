'use client';
import { useState, Suspense, lazy } from 'react';

const SyntheseClient = lazy(() => import('@/app/synthese/SyntheseClient'));
const ObligationsClient = lazy(() => import('@/app/entrainement-ecrits/ObligationsClient'));
const SpecialiteClient = lazy(() => import('@/app/entrainement-specialite/SpecialiteClient'));
const ProcedureClient = lazy(() => import('@/app/entrainement-procedure/ProcedureClient'));

const EPREUVES = [
  {
    id: 'synthese',
    label: 'Note de synthèse',
    shortLabel: 'Synthèse',
    duree: '5 heures',
    coeff: 3,
    description: 'Analysez un dossier de documents juridiques et rédigez une note de synthèse structurée en deux parties.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    tags: ['Analyse de dossier', 'Plan détaillé', 'Rédaction complète'],
  },
  {
    id: 'obligations',
    label: 'Droit des obligations',
    shortLabel: 'Obligations',
    duree: '3 heures',
    coeff: 2,
    description: 'Épreuve de tronc commun portant sur le droit des contrats, la responsabilité civile et le régime général des obligations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    tags: ['Contrats', 'Responsabilité civile', 'Régime général'],
  },
  {
    id: 'specialite',
    label: 'Épreuve de spécialité',
    shortLabel: 'Spécialité',
    duree: '3 heures',
    coeff: 2,
    description: 'Entraînez-vous sur votre matière de spécialité : cas pratique ou dissertation juridique.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    tags: ['7 matières', 'Cas pratique', 'Dissertation'],
  },
  {
    id: 'procedure',
    label: 'Épreuve de procédure',
    shortLabel: 'Procédure',
    duree: '2 heures',
    coeff: 2,
    description: 'Pratiquez les 3 procédures : civile, pénale et administrative. Cas pratique ou consultation juridique.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    tags: ['Proc. civile', 'Proc. pénale', 'Proc. admin.'],
  },
];

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm text-gray-500">Chargement de l&apos;exercice...</p>
      </div>
    </div>
  );
}

export default function EcritsClient() {
  const [activeEpreuve, setActiveEpreuve] = useState(null);

  // ----- Vue exercice (composant intégré) -----
  if (activeEpreuve) {
    return (
      <div className="min-h-screen bg-white">
        {/* Barre supérieure avec retour */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <button
              onClick={() => setActiveEpreuve(null)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#0d6560] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Toutes les épreuves
            </button>

            <div className="flex items-center gap-3">
              {EPREUVES.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => setActiveEpreuve(ep.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeEpreuve === ep.id
                      ? 'bg-slate-900 text-white'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {ep.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenu de l'épreuve */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <Suspense fallback={<LoadingFallback />}>
            {activeEpreuve === 'synthese' && <SyntheseClient embedded />}
            {activeEpreuve === 'obligations' && <ObligationsClient embedded />}
            {activeEpreuve === 'specialite' && <SpecialiteClient embedded />}
            {activeEpreuve === 'procedure' && <ProcedureClient embedded />}
          </Suspense>
        </div>
      </div>
    );
  }

  // ----- Vue d'accueil : sélection de l'épreuve -----
  return (
    <div className="min-h-screen bg-[#eceef1]">
      {/* Hero compact */}
      <section className="pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            Épreuves d&apos;admissibilité
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Entraînement aux{' '}
            <span className="home-gradient-text">épreuves écrites</span>
          </h1>
          <div className="w-12 h-1 bg-[#0d6560] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Choisissez une épreuve pour vous entraîner dans les conditions du CRFPA. Exercices générés et corrigés.
          </p>
        </div>
      </section>

      {/* Cards de sélection */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-5">
          {EPREUVES.map((epreuve) => (
            <button
              key={epreuve.id}
              onClick={() => setActiveEpreuve(epreuve.id)}
              className="lift group relative bg-white rounded-xl border border-gray-200 p-6 sm:p-7 text-left transition-all hover:border-slate-300 hover:shadow-md"
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#0d6560] shrink-0 group-hover:bg-slate-100 transition-colors">
                  {epreuve.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-gray-900 group-hover:text-slate-900 transition-colors">
                      {epreuve.label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        {epreuve.duree}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-full">
                        Coeff. {epreuve.coeff}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                    {epreuve.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {epreuve.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 self-center">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0d6560] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info bottom */}
        <div className="mt-8 bg-amber-50/60 border border-amber-200/60 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">Conseil de préparation</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Commencez par la note de synthèse (épreuve la plus coefficientée), puis alternez entre votre spécialité et la procédure. Réservez au moins 2 entraînements complets par semaine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
