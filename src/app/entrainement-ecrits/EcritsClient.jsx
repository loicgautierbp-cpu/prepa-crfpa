'use client';
import Link from 'next/link';

const EPREUVES = [
  {
    id: 'synthese',
    href: '/synthese',
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
    color: { border: 'border-t-violet-300', iconBg: 'bg-violet-50', iconText: 'text-violet-500', tagBg: 'bg-slate-50', tagBorder: 'border-slate-100', tagText: 'text-slate-600', coeffBg: 'bg-violet-50 text-violet-600' },
  },
  {
    id: 'obligations',
    href: '/entrainement-ecrits/obligations',
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
    color: { border: 'border-t-emerald-300', iconBg: 'bg-emerald-50', iconText: 'text-emerald-500', tagBg: 'bg-slate-50', tagBorder: 'border-slate-100', tagText: 'text-slate-600', coeffBg: 'bg-emerald-50 text-emerald-600' },
  },
  {
    id: 'specialite',
    href: '/entrainement-specialite',
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
    color: { border: 'border-t-amber-300', iconBg: 'bg-amber-50', iconText: 'text-amber-600', tagBg: 'bg-slate-50', tagBorder: 'border-slate-100', tagText: 'text-slate-600', coeffBg: 'bg-amber-50 text-amber-600' },
  },
  {
    id: 'procedure',
    href: '/entrainement-procedure',
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
    color: { border: 'border-t-sky-300', iconBg: 'bg-sky-50', iconText: 'text-sky-500', tagBg: 'bg-slate-50', tagBorder: 'border-slate-100', tagText: 'text-slate-600', coeffBg: 'bg-sky-50 text-sky-600' },
  },
];

export default function EcritsClient() {
  return (
    <div className="min-h-screen bg-[#fef2f2]">
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
          <div className="w-12 h-1 bg-[#991b1b] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Choisissez une épreuve pour vous entraîner dans les conditions du CRFPA. Exercices générés et corrigés.
          </p>
        </div>
      </section>

      {/* Cards de sélection */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-5">
          {EPREUVES.map((epreuve) => (
            <Link
              key={epreuve.id}
              href={epreuve.href}
              className={`lift group relative bg-white rounded-2xl border border-slate-200 border-t-4 ${epreuve.color.border} p-6 sm:p-7 text-left transition-all hover:shadow-lg block`}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 ${epreuve.color.iconBg} rounded-xl flex items-center justify-center ${epreuve.color.iconText} shrink-0 transition-transform group-hover:scale-105`}>
                  {epreuve.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-bold text-slate-900">
                      {epreuve.label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                        {epreuve.duree}
                      </span>
                      <span className={`px-2.5 py-0.5 ${epreuve.color.coeffBg} text-xs font-bold rounded-full`}>
                        Coeff. {epreuve.coeff}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-3 leading-relaxed">
                    {epreuve.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {epreuve.tags.map((tag) => (
                      <span key={tag} className={`px-2.5 py-1 ${epreuve.color.tagBg} border ${epreuve.color.tagBorder} text-xs font-medium ${epreuve.color.tagText} rounded-lg`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 self-center">
                  <svg className={`w-5 h-5 text-slate-300 group-hover:${epreuve.color.iconText} group-hover:translate-x-1 transition-all`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
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
