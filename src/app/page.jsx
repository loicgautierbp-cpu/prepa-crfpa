import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: "Prépa CRFPA - Réussissez l'examen du barreau",
  description: 'La plateforme de révision n°1 pour réussir le CRFPA. QCM illimités, fiches de cours, entraînement aux épreuves et suivi de progression.',
};

const MATIERES = PROGRAMME_DATA.filter(
  (ue) => !['synthese', 'grand-oral', 'anglais'].includes(ue.id)
);

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#eceef1]">

      {/* ========== HERO ========== */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Decorative legal icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
          {/* Scales of justice - top right */}
          <svg className="absolute top-20 right-[10%] w-64 h-64 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>
          </svg>
          {/* Gavel - bottom left */}
          <svg className="absolute bottom-32 left-[5%] w-48 h-48 text-slate-900 rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
          </svg>
          {/* Book - center left */}
          <svg className="absolute top-1/3 left-[15%] w-40 h-40 text-slate-900 -rotate-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
          </svg>
          {/* Document - top left */}
          <svg className="absolute top-16 left-[30%] w-32 h-32 text-slate-900 rotate-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#7b1636]/10 border border-[#7b1636]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#7b1636] mb-8">
            Examen du Barreau 2025
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-7xl tracking-tight text-slate-900 mb-6">
            Préparez le CRFPA<br />sereinement.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Entraînez-vous aux épreuves écrites et orales avec des exercices corrigés par IA, des fiches de cours et un suivi de progression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/entrainement-ecrits" className="px-8 py-4 bg-[#7b1636] text-white font-bold rounded-xl hover:bg-[#5a0f27] transition-colors text-center">
              Commencer l&apos;entraînement
            </Link>
            <Link href="/programme" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 transition-colors text-center">
              Découvrir le programme
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '150+', label: 'Cours détaillés' },
              { value: '∞', label: 'Exercices illimités' },
              { value: '14', label: 'Matières couvertes' },
              { value: '+1 500', label: 'Étudiants inscrits' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== POURQUOI NOUS CHOISIR ========== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <Link key={i} href={feature.href} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#7b1636]/10 rounded-xl flex items-center justify-center mb-4 text-[#7b1636]">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{feature.description}</p>
                <span className="text-sm font-medium text-[#7b1636] group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STRUCTURE DU CRFPA ========== */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">
              Comment se déroule le CRFPA ?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">L&apos;examen se compose de deux phases : l&apos;admissibilité (écrit) et l&apos;admission (oral).</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h3 className="font-bold text-slate-900 text-lg mb-1">Épreuves écrites</h3>
              <p className="text-sm text-slate-400 mb-5">Admissibilité</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckIcon />Note de synthèse (5h, coeff. 3)</li>
                <li className="flex items-start gap-2"><CheckIcon />Droit des obligations (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Épreuve de spécialité (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Procédure (2h, coeff. 2)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h3 className="font-bold text-slate-900 text-lg mb-1">Épreuves orales</h3>
              <p className="text-sm text-slate-400 mb-5">Admission</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckIcon />Grand oral — Libertés fondamentales (45 min + 1h prépa, coeff. 4)</li>
                <li className="flex items-start gap-2"><CheckIcon />Anglais juridique (coeff. 1)</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600 mb-8">
              Résultat → Accès à la profession d&apos;Avocat
            </div>
          </div>
          <Link
            href="/specialite"
            className="block bg-slate-900 border-l-4 border-[#7b1636] rounded-xl px-7 py-5 text-center hover:bg-black transition-colors"
          >
            <p className="font-semibold text-white mb-1">Pas encore sûr de votre spécialité ?</p>
            <p className="text-sm text-slate-400">Quiz gratuit — Découvrez en 3 min la spécialité faite pour vous</p>
          </Link>
        </div>
      </section>

      {/* ========== PROGRAMME ========== */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-white mb-4">
              Les matières de l&apos;examen
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MATIERES.map((ue) => (
              <div key={ue.id} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white" dangerouslySetInnerHTML={{ __html: ue.icon }} />
                <h3 className="font-semibold text-white text-sm">{ue.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programme" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors text-sm">
              Voir le programme complet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <FaqSection />

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-24 bg-[#2d0a14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl text-white mb-4">
            Prêt à réussir le barreau ?
          </h2>
          <p className="text-slate-400 text-lg mb-8">Rejoignez +1 500 étudiants en droit</p>
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
