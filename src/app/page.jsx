import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import FaqSection from '@/components/home/FaqSection';
import QuestionDuJour from '@/components/home/QuestionDuJour';

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
    <div className="bg-[#f5f3ff]">

      {/* ========== HERO ========== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-b from-[#ede9fe] via-[#f5f3ff] to-white">
        {/* Decorative scattered icons with animations */}
        {/* Balance de justice - haut centre */}
        <svg className="hidden md:block absolute top-10 left-[42%] w-20 h-20 text-[#5b21b6]/15 animate-[float_6s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
        {/* Personnage droit - gauche haut */}
        <svg className="hidden md:block absolute top-16 left-[4%] w-24 h-24 text-[#5b21b6]/10 animate-[float_7s_ease-in-out_infinite_0.5s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        {/* Tribunal - gauche milieu */}
        <svg className="hidden md:block absolute top-[50%] left-[3%] w-28 h-28 text-[#5b21b6]/8 animate-[float_8s_ease-in-out_infinite_1s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
        {/* Livre ouvert - bas gauche */}
        <svg className="hidden md:block absolute bottom-20 left-[10%] w-20 h-20 text-[#5b21b6]/12 animate-[float_6s_ease-in-out_infinite_2s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
        </svg>
        {/* Soleil doré - haut droite */}
        <svg className="hidden md:block absolute top-12 right-[18%] w-14 h-14 text-amber-400/25 animate-[float_5s_ease-in-out_infinite_0.3s]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"/>
        </svg>
        {/* Smiley - droite milieu */}
        <svg className="hidden lg:block absolute top-[45%] right-[4%] w-16 h-16 text-emerald-400/20 animate-[float_7s_ease-in-out_infinite_1.5s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/>
        </svg>
        {/* Étoile dorée - droite bas */}
        <svg className="hidden md:block absolute bottom-[25%] right-[5%] w-12 h-12 text-amber-400/20 animate-[float_5s_ease-in-out_infinite_2.5s]" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd"/>
        </svg>
        {/* Plante - bas centre droite */}
        <svg className="hidden md:block absolute bottom-10 right-[30%] w-14 h-14 text-[#5b21b6]/10 animate-[float_6s_ease-in-out_infinite_3s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582" />
        </svg>
        {/* Document - haut gauche secondaire */}
        <svg className="hidden lg:block absolute top-[30%] left-[18%] w-10 h-10 text-[#5b21b6]/8 animate-[float_8s_ease-in-out_infinite_4s]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#5b21b6]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#5b21b6] mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Examen du Barreau 2025
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Préparez le<br />CRFPA<br />
                <span className="text-[#5b21b6]">sereinement.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-lg mb-8">
                La première plateforme de préparation au CRFPA. Exercices corrigés par IA, fiches de cours et entraînement aux épreuves écrites et orales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/entrainement-ecrits" className="px-7 py-3.5 bg-[#5b21b6] text-white font-bold rounded-xl hover:bg-[#4c1d95] transition-colors text-center">
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
      <section className="bg-[#1e0a3c] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { icon: '📝', value: 'Illimités', label: 'Exercices corrigés par IA' },
              { icon: '📚', value: '14', label: 'Matières du programme' },
              { icon: '🎤', value: 'x2', label: 'Épreuves orales couvertes' },
              { icon: '📊', value: '~45%', label: "Taux de réussite au CRFPA" },
              { icon: '👥', value: '+1 500', label: 'Étudiants inscrits' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUTILS DE REVISION ========== */}
      <section className="py-20 md:py-24">
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
                color: 'bg-[#5b21b6]/10 text-[#5b21b6]',
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
                <span className="text-sm font-semibold text-[#5b21b6] group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STRUCTURE DU CRFPA ========== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">
              Comment se déroule le CRFPA ?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">L&apos;examen se compose de deux phases : l&apos;admissibilité (écrit) et l&apos;admission (oral).</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#f5f3ff] rounded-2xl border border-[#5b21b6]/10 p-8">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-slate-900 mb-1">Épreuves écrites</h3>
              <p className="text-sm text-[#5b21b6] font-medium mb-5">Admissibilité</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckIcon />Note de synthèse (5h, coeff. 3)</li>
                <li className="flex items-start gap-2"><CheckIcon />Droit des obligations (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Épreuve de spécialité (3h, coeff. 2)</li>
                <li className="flex items-start gap-2"><CheckIcon />Procédure (2h, coeff. 2)</li>
              </ul>
            </div>
            <div className="bg-[#f5f3ff] rounded-2xl border border-[#5b21b6]/10 p-8">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-slate-900 mb-1">Épreuves orales</h3>
              <p className="text-sm text-[#5b21b6] font-medium mb-5">Admission</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckIcon />Grand oral — Libertés fondamentales (45 min + 1h prépa, coeff. 4)</li>
                <li className="flex items-start gap-2"><CheckIcon />Anglais juridique (coeff. 1)</li>
              </ul>
            </div>
          </div>
          <Link
            href="/specialite"
            className="block bg-[#1e0a3c] rounded-2xl px-7 py-5 hover:bg-[#2d0a14] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white mb-1">Pas encore sûr de votre spécialité ?</p>
                <p className="text-sm text-white/60">Quiz gratuit — Découvrez en 3 min la spécialité faite pour vous</p>
              </div>
              <svg className="w-5 h-5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </Link>
        </div>
      </section>

      {/* ========== PROGRAMME ========== */}
      <section className="py-20 md:py-24 bg-[#1e0a3c]">
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
      <section className="py-20 md:py-24 bg-[#1e0a3c]">
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
