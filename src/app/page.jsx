import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import FaqSection from '@/components/home/FaqSection';
import QuestionDuJour from '@/components/home/QuestionDuJour';
import FloatingIcons from '@/components/home/FloatingIcons';

export const metadata = {
  title: "Prépa CRFPA - Réussissez l'examen du barreau",
  description: 'La plateforme de révision n°1 pour réussir le CRFPA. Exercices illimités, fiches de cours, entraînement aux épreuves et suivi de progression.',
};

const MATIERES = PROGRAMME_DATA.filter(
  (ue) => !['synthese', 'grand-oral', 'anglais'].includes(ue.id)
);

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#fef2f2]">

      {/* ========== HERO ========== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-br from-white via-[#fef2f2] to-[#fee2e2]">
        {/* Floating legal icons - randomized positions */}
        <FloatingIcons />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#b91c1c]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#b91c1c] mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Examen du Barreau
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Préparez le<br />CRFPA<br />
                <span className="text-[#b91c1c]">sereinement.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-lg mb-8">
                La première plateforme de préparation au CRFPA. Exercices corrigés par IA, fiches de cours et entraînement aux épreuves écrites et orales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/entrainement-ecrits" className="px-7 py-3.5 bg-[#b91c1c] text-white font-bold rounded-xl hover:bg-[#991b1b] transition-colors text-center">
                  Commencer l&apos;entraînement
                </Link>
                <Link href="/programme" className="px-7 py-3.5 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 transition-colors text-center">
                  Découvrir le programme
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckIcon />7 jours gratuits</span>
                <span className="flex items-center gap-1.5"><CheckIcon />Sans engagement</span>
                <span className="flex items-center gap-1.5"><CheckIcon />Accès illimité</span>
              </div>
            </div>
            {/* Right: Question du jour */}
            <div className="hidden lg:block">
              <QuestionDuJour />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="bg-[#450a0a] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Complet', label: 'Épreuves écrites et orales', svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg> },
              { value: '11', label: 'Matières couvertes', svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg> },
              { value: '~45%', label: "Taux de réussite au CRFPA", svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg> },
              { value: '+1 500', label: 'Étudiants inscrits', svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-white/40 mb-3">{stat.svg}</div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUTILS DE REVISION ========== */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <FloatingIcons />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">
              Vos outils de révision
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Tout ce dont vous avez besoin pour réussir le CRFPA.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Exercices corrigés par IA',
                description: 'Cas pratiques, dissertations et consultations générés et corrigés automatiquement avec références aux articles de loi.',
                href: '/entrainement-ecrits',
                color: 'bg-[#b91c1c]/10 text-[#b91c1c]',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                ),
              },
              {
                title: 'Fiches et cours complets',
                description: 'Fiches synthétiques et cours approfondis couvrant les 14 matières du programme officiel du CRFPA.',
                href: '/fiches',
                color: 'bg-amber-100 text-amber-700',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: 'Entraînement aux oraux',
                description: 'Préparez le grand oral sur les libertés fondamentales et l&apos;anglais juridique avec des simulations réalistes.',
                href: '/entrainement-oraux',
                color: 'bg-emerald-100 text-emerald-700',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <Link key={i} href={feature.href} className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{feature.description}</p>
                <span className="text-sm font-semibold text-[#b91c1c] group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STRUCTURE DU CRFPA ========== */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#450a0a] via-[#5c1010] to-[#3a0808] relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full -ml-40 -mb-40 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b91c1c]/[0.06] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium text-white/70 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" /></svg>
              Structure de l&apos;examen
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-white mb-4">
              Comment se déroule le CRFPA ?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">L&apos;examen se compose de deux phases : l&apos;admissibilité (écrit) et l&apos;admission (oral).</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-white">Épreuves écrites</h3>
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Admissibilité</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2"><CheckIcon />Note de synthèse (5h, coeff. 3)</li>
                <li className="flex items-start gap-2"><CheckIcon />Droit des obligations (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Épreuve de spécialité (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Procédure (2h, coeff. 2)</li>
              </ul>
            </div>
            <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-white">Épreuves orales</h3>
                  <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider">Admission</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2"><CheckIcon />Grand oral — Libertés fondamentales (45 min + 1h prépa, coeff. 4)</li>
                <li className="flex items-start gap-2"><CheckIcon />Anglais juridique (coeff. 1)</li>
              </ul>
            </div>
          </div>
          <Link
            href="/specialite"
            className="block bg-white rounded-2xl px-7 py-6 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.01] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 mb-0.5">Pas encore sûr de votre spécialité ?</p>
                <p className="text-sm text-slate-500">Quiz gratuit — Découvrez en 3 min la spécialité faite pour vous</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#b91c1c] group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </Link>
        </div>
      </section>

      {/* ========== PROGRAMME ========== */}
      <section className="py-20 md:py-24 bg-[#fef2f2] relative overflow-hidden">
        <FloatingIcons />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">
              Les matières de l&apos;examen
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MATIERES.map((ue) => {
              const colorMap = {
                indigo: { top: 'border-t-indigo-500', icon: 'text-indigo-600', iconBg: 'bg-indigo-100' },
                emerald: { top: 'border-t-emerald-500', icon: 'text-emerald-600', iconBg: 'bg-emerald-100' },
                violet: { top: 'border-t-violet-500', icon: 'text-violet-600', iconBg: 'bg-violet-100' },
                cyan: { top: 'border-t-cyan-500', icon: 'text-cyan-600', iconBg: 'bg-cyan-100' },
                rose: { top: 'border-t-rose-500', icon: 'text-rose-600', iconBg: 'bg-rose-100' },
                amber: { top: 'border-t-amber-500', icon: 'text-amber-600', iconBg: 'bg-amber-100' },
                teal: { top: 'border-t-teal-500', icon: 'text-teal-600', iconBg: 'bg-teal-100' },
                sky: { top: 'border-t-sky-500', icon: 'text-sky-600', iconBg: 'bg-sky-100' },
                lime: { top: 'border-t-lime-500', icon: 'text-lime-600', iconBg: 'bg-lime-100' },
                orange: { top: 'border-t-orange-500', icon: 'text-orange-600', iconBg: 'bg-orange-100' },
                yellow: { top: 'border-t-yellow-500', icon: 'text-yellow-600', iconBg: 'bg-yellow-100' },
              };
              const c = colorMap[ue.color] || colorMap.teal;
              return (
                <div key={ue.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-sm hover:shadow-lg hover:bg-white transition-all">
                  <div className={`w-10 h-10 ${c.iconBg} rounded-lg flex items-center justify-center mb-3 [&_svg]:w-5 [&_svg]:h-5 ${c.icon}`} dangerouslySetInnerHTML={{ __html: ue.icon }} />
                  <h3 className="font-semibold text-sm text-slate-900">{ue.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/programme" className="inline-flex items-center gap-2 text-[#b91c1c] hover:text-[#991b1b] font-semibold transition-colors text-sm">
              Voir le programme complet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <FaqSection />

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#b91c1c] to-[#450a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl text-white mb-4">
            Prêt à réussir le barreau ?
          </h2>
          <p className="text-white/60 text-lg mb-8">Rejoignez +1 500 étudiants en droit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
              Commencer gratuitement
            </Link>
            <Link href="/tarifs" className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-colors">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
