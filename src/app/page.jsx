import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: "Prépa CRFPA - Réussissez l'examen du barreau",
  description: 'La plateforme de révision n°1 pour réussir le CRFPA. QCM illimités, fiches de cours, entraînement aux épreuves et suivi de progression.',
};

// Color mappings for programme cards
const UE_BG_COLORS = {
  indigo: 'bg-indigo-500/20', emerald: 'bg-emerald-500/20', violet: 'bg-violet-500/20',
  cyan: 'bg-cyan-500/20', amber: 'bg-amber-500/20', rose: 'bg-rose-500/20', teal: 'bg-teal-500/20',
  sky: 'bg-sky-500/20', lime: 'bg-lime-500/20', orange: 'bg-orange-500/20',
  yellow: 'bg-yellow-500/20', slate: 'bg-slate-500/20', purple: 'bg-purple-500/20', red: 'bg-red-500/20',
};

const TEMOIGNAGES = [
  { name: 'Marie L.', promo: 'Admise 2024 — Paris II', stars: 5, quote: "Les exercices d'épreuves écrites m'ont permis de m'entraîner dans les conditions réelles. La correction détaillée avec les articles de loi a fait toute la différence." },
  { name: 'Thomas B.', promo: 'Admis 2024 — Lyon III', stars: 5, quote: "J'ai utilisé la plateforme pendant 6 mois. Les QCM par matière et les fiches de cours m'ont aidé à structurer mes révisions efficacement." },
  { name: 'Camille D.', promo: 'Admise 2023 — Bordeaux', stars: 5, quote: "Le quiz de spécialité m'a aidée à choisir le droit des affaires. Les entraînements à la note de synthèse sont particulièrement bien conçus." },
];

export default function HomePage() {
  return (
    <>
      {/* ========== SECTION 1 : HERO ========== */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-[#f5ece4] via-[#fdf2f3] to-[#f5ece4] noise-overlay grid-pattern">
        {/* Decorative blobs */}
        <div className="absolute top-[-50px] right-[-50px] w-[600px] h-[600px] bg-primary-500/[0.06] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[500px] h-[500px] bg-accent-500/[0.07] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-violet-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
        {/* Geometric shapes */}
        <div className="hidden lg:block absolute top-[15%] left-[8%] w-32 h-32 border border-primary-300/15 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[10%] right-[12%] w-20 h-20 border border-accent-300/20 rotate-45 pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-[20%] right-[8%] w-40 h-40 border-2 border-dashed border-primary-200/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-[25%] left-[12%] w-14 h-14 border border-accent-400/15 rotate-12 rounded-lg pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[55%] right-[20%] w-6 h-6 bg-primary-400/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[30%] left-[18%] w-4 h-4 bg-accent-400/15 rounded-full pointer-events-none"></div>
        <div className="hidden md:block absolute top-[70%] left-[5%] w-px h-24 bg-gradient-to-b from-transparent via-primary-300/20 to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute top-[20%] right-[5%] w-px h-32 bg-gradient-to-b from-transparent via-accent-300/15 to-transparent pointer-events-none"></div>
        {/* Cross shapes */}
        <div className="hidden lg:block absolute top-[45%] left-[6%] pointer-events-none">
          <div className="w-px h-5 bg-primary-300/20 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-px bg-primary-300/20 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="hidden lg:block absolute bottom-[35%] right-[10%] pointer-events-none">
          <div className="w-px h-5 bg-accent-300/20 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-px bg-accent-300/20 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-700 border border-accent-300 rounded-full px-5 py-2 text-sm font-semibold mb-8">
            <span className="text-accent-500">✦</span>
            Examen du Barreau 2025
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Réussissez votre{' '}
            <span className="home-gradient-text">CRFPA</span>
            <br className="hidden sm:block" />
            {' '}sans stress
          </h1>

          {/* Gold line */}
          <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-8 mb-8 rounded-full"></div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            La plateforme complète pour préparer l'examen du barreau : QCM illimités,
            entraînement aux épreuves écrites et orales, fiches de cours et corrections détaillées.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/inscription" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:scale-[1.02] transition-all text-center">
              Commencer l'entraînement
            </Link>
            <Link href="/programme" className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-bold rounded-xl transition-all text-center">
              Découvrir le programme
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '150+', label: 'Cours détaillés', icon: 'M12 6.042A8.967...' },
              { value: '∞', label: 'QCM illimités', icon: '' },
              { value: '14', label: 'Matières couvertes', icon: '' },
              { value: '+1 500', label: 'Étudiants inscrits', icon: '' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p className="mt-10 text-xs text-gray-400 tracking-wide uppercase">
            Plateforme recommandée par des enseignants en droit
          </p>
        </div>
      </section>

      {/* ========== SECTION 2 : POURQUOI NOUS CHOISIR ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0e8df] to-[#faf6f2] noise-overlay relative overflow-hidden grid-pattern">
        {/* Decorative bg */}
        <div className="absolute top-[-60px] right-[-80px] w-[350px] h-[350px] bg-primary-500/[0.04] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-40px] left-[-60px] w-[300px] h-[300px] bg-accent-500/[0.05] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-20 right-16 w-24 h-24 border border-primary-200/30 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-16 left-20 w-16 h-16 border border-accent-300/20 rotate-45 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[40%] right-[5%] w-36 h-36 border-2 border-dashed border-primary-200/12 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-12 left-[30%] w-5 h-5 bg-accent-400/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-24 right-[25%] w-3 h-3 bg-primary-400/12 rounded-full pointer-events-none"></div>
        <div className="hidden md:block absolute top-[50%] right-[3%] w-px h-20 bg-gradient-to-b from-transparent via-primary-300/15 to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-[30%] left-[4%] w-px h-16 bg-gradient-to-b from-transparent via-accent-300/15 to-transparent pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-10 right-[40%] pointer-events-none">
          <div className="w-px h-4 bg-primary-300/15 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-4 h-px bg-primary-300/15 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Pourquoi choisir Prépa CRFPA ?
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm lift border-t-4 border-t-primary-500">
              <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entraînement intelligent</h3>
              <p className="text-gray-600 leading-relaxed mb-4">QCM générés par matière avec corrections détaillées, références aux articles de loi et jurisprudence pertinente.</p>
              <Link href="/qcm" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">En savoir plus →</Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm lift border-t-4 border-t-accent-500">
              <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conditions réelles</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Entraînement aux épreuves écrites et orales chronométrées avec notation stricte niveau CRFPA et correction complète.</p>
              <Link href="/entrainement-ecrits" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">En savoir plus →</Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm lift border-t-4 border-t-emerald-500">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contenu exhaustif</h3>
              <p className="text-gray-600 leading-relaxed mb-4">14 matières couvertes avec fiches synthétiques, cours approfondis et méthodologie pour chaque épreuve du CRFPA.</p>
              <Link href="/fiches" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 : STRUCTURE DU CRFPA ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#fdf2f3] via-[#faf6f2] to-[#f5ece4] relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-[30%] right-[-100px] w-[400px] h-[400px] bg-primary-500/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[-50px] left-[20%] w-[250px] h-[250px] bg-accent-500/[0.04] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-30px] w-[200px] h-[200px] bg-violet-500/[0.03] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-12 left-12 w-20 h-20 border border-accent-300/20 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-20 right-20 w-12 h-12 border border-primary-200/25 rotate-45 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[60%] left-[8%] w-28 h-28 border-2 border-dashed border-accent-300/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[15%] right-[15%] w-44 h-44 border border-primary-200/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-[40%] left-[45%] w-4 h-4 bg-primary-300/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[25%] left-[35%] w-3 h-3 bg-accent-400/12 rounded-full pointer-events-none"></div>
        <div className="hidden md:block absolute top-[40%] left-[3%] w-px h-28 bg-gradient-to-b from-transparent via-accent-300/15 to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-[20%] right-[4%] w-px h-20 bg-gradient-to-b from-transparent via-primary-300/12 to-transparent pointer-events-none"></div>
        <div className="hidden lg:block absolute top-16 right-[35%] pointer-events-none">
          <div className="w-px h-5 bg-accent-300/15 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-px bg-accent-300/15 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="hidden lg:block absolute bottom-12 left-[30%] pointer-events-none">
          <div className="w-px h-4 bg-primary-300/12 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-4 h-px bg-primary-300/12 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Comment se déroule le CRFPA ?
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">L'examen national d'accès à la profession d'avocat comprend des épreuves écrites d'admissibilité et des épreuves orales d'admission.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Écrits */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-primary-600 px-6 py-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                  Épreuves écrites — Admissibilité
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: 'Note de synthèse', duree: '5h', coeff: '3' },
                  { name: 'Droit des obligations', duree: '3h', coeff: '2' },
                  { name: 'Épreuve de spécialité', duree: '3h', coeff: '2' },
                  { name: 'Procédure', duree: '2h', coeff: '2' },
                ].map((e, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary-50 text-primary-700 rounded-lg flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span className="font-medium text-gray-900">{e.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">{e.duree}</span>
                      <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-semibold text-xs">Coeff. {e.coeff}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Oraux */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-900 px-6 py-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>
                  Épreuves orales — Admission
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: 'Grand oral — Libertés fondamentales', duree: '45 min + 1h prépa', coeff: '4' },
                  { name: 'Anglais juridique', duree: '', coeff: '1' },
                ].map((e, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span className="font-medium text-gray-900">{e.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      {e.duree && <span className="text-gray-500">{e.duree}</span>}
                      <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-semibold text-xs">Coeff. {e.coeff}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Résultat */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-700 border border-accent-300 rounded-full px-6 py-2.5 font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
              Accès à la profession d'Avocat
            </div>
          </div>

          {/* Quiz spécialité CTA */}
          <div className="max-w-xl mx-auto">
            <Link href="/specialite" className="block bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl px-7 py-5 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-base">Pas encore sûr de votre spécialité ?</p>
                  <p className="text-sm text-white/80">Quiz gratuit — Découvrez en 3 min la spécialité faite pour vous</p>
                </div>
                <svg className="w-6 h-6 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 : PROGRAMME ========== */}
      <section className="py-20 md:py-28 bg-primary-950 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-primary-800/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-60px] left-[-60px] w-[350px] h-[350px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-16 right-20 w-32 h-32 border border-white/5 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-20 left-16 w-20 h-20 border border-accent-500/10 rotate-45 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[40%] left-[8%] w-48 h-48 border-2 border-dashed border-white/[0.03] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">Programme complet</p>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-white text-shadow-sm">
              Les matières de l'examen
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-400 to-accent-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-primary-300 max-w-xl mx-auto text-sm">Maîtrisez chaque matière du CRFPA grâce à nos cours détaillés, fiches de révision et exercices ciblés.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMME_DATA.filter((ue) => !['synthese', 'grand-oral', 'anglais'].includes(ue.id)).map((ue) => (
              <Link key={ue.id} href="/programme" className="group">
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${UE_BG_COLORS[ue.color] || 'bg-white/20'} rounded-xl flex items-center justify-center shrink-0 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-white`} dangerouslySetInnerHTML={{ __html: ue.icon }}>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-[15px] mb-1.5 group-hover:text-accent-300 transition-colors">{ue.name}</h3>
                      <p className="text-primary-300 text-xs leading-relaxed line-clamp-2">{ue.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-white/30 group-hover:text-accent-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programme" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Voir le programme détaillé
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5 : MÉTHODE ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#faf6f2] to-[#f5ece4] noise-overlay relative overflow-hidden grid-pattern">
        {/* Decorative bg */}
        <div className="absolute top-[-40px] left-[-60px] w-[350px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-60px] right-[-40px] w-[300px] h-[300px] bg-primary-500/[0.04] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute top-[50%] right-[15%] w-[200px] h-[200px] bg-accent-500/[0.04] rounded-full blur-[70px] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-16 right-24 w-28 h-28 border border-primary-200/20 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-24 left-16 w-10 h-10 border border-accent-300/25 rotate-12 rounded-lg pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[30%] left-[6%] w-36 h-36 border-2 border-dashed border-emerald-300/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-[15%] right-[8%] w-20 h-20 border border-primary-200/15 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-24 left-[40%] w-5 h-5 bg-accent-400/8 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-20 right-[35%] w-3 h-3 bg-primary-300/10 rounded-full pointer-events-none"></div>
        <div className="hidden md:block absolute top-[60%] right-[3%] w-px h-24 bg-gradient-to-b from-transparent via-primary-300/12 to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute top-[20%] left-[4%] w-px h-20 bg-gradient-to-b from-transparent via-emerald-300/12 to-transparent pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[70%] left-[25%] pointer-events-none">
          <div className="w-px h-4 bg-accent-300/12 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-4 h-px bg-accent-300/12 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="hidden lg:block absolute top-10 right-[45%] pointer-events-none">
          <div className="w-px h-5 bg-primary-300/10 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-px bg-primary-300/10 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              La méthode pour réussir
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary-200 via-accent-300 to-emerald-200"></div>

            {[
              { num: '1', title: 'Choisissez votre matière', desc: 'Sélectionnez parmi les 14 matières du CRFPA et accédez à des QCM et exercices ciblés.', href: '/qcm', color: 'primary', icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z' },
              { num: '2', title: 'Révisez avec les fiches', desc: 'Cours structurés, fiches synthétiques et méthodologie pour maîtriser chaque matière.', href: '/fiches', color: 'accent', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' },
              { num: '3', title: 'Passez en conditions réelles', desc: 'Entraînement chronométré aux épreuves écrites et orales avec correction et notation.', href: '/entrainement-ecrits', color: 'emerald', icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
            ].map((step) => {
              const bgColor = step.color === 'primary' ? 'bg-primary-50' : step.color === 'accent' ? 'bg-amber-50' : 'bg-emerald-50';
              const textColor = step.color === 'primary' ? 'text-primary-600' : step.color === 'accent' ? 'text-accent-600' : 'text-emerald-600';
              const numBg = step.color === 'primary' ? 'bg-primary-600' : step.color === 'accent' ? 'bg-accent-500' : 'bg-emerald-600';
              return (
                <div key={step.num} className="text-center relative">
                  <div className={`w-12 h-12 ${numBg} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg relative z-10`}>
                    {step.num}
                  </div>
                  <div className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-7 h-7 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <Link href={step.href} className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">Découvrir →</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6 : TÉMOIGNAGES ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#f5ece4] via-[#fdf2f3] to-[#faf6f2] relative overflow-hidden noise-overlay">
        {/* Decorative bg */}
        <div className="absolute top-[-30px] right-[10%] w-[300px] h-[300px] bg-accent-500/[0.05] rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute bottom-[-50px] left-[5%] w-[250px] h-[250px] bg-primary-500/[0.04] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[40%] w-[180px] h-[180px] bg-violet-500/[0.03] rounded-full blur-[70px] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-20 left-16 w-16 h-16 border border-primary-200/25 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-16 right-24 w-20 h-20 border border-accent-300/20 rotate-45 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[50%] right-[6%] w-32 h-32 border-2 border-dashed border-primary-200/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-[30%] left-[30%] w-24 h-24 border border-accent-300/12 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-12 right-[40%] w-4 h-4 bg-accent-400/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-20 left-[15%] w-3 h-3 bg-primary-300/10 rounded-full pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[65%] right-[12%] w-5 h-5 bg-accent-400/8 rounded-full pointer-events-none"></div>
        <div className="hidden md:block absolute top-[30%] left-[3%] w-px h-24 bg-gradient-to-b from-transparent via-primary-300/15 to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-[25%] right-[4%] w-px h-20 bg-gradient-to-b from-transparent via-accent-300/12 to-transparent pointer-events-none"></div>
        <div className="hidden lg:block absolute top-[20%] left-[50%] pointer-events-none">
          <div className="w-px h-5 bg-primary-300/12 absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-px bg-primary-300/12 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Ils ont réussi avec Prépa CRFPA
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm lift">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.promo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7 : FAQ ========== */}
      <FaqSection />

      {/* ========== SECTION 8 : CTA FINAL ========== */}
      <section className="py-20 md:py-28 animated-gradient relative overflow-hidden">
        <div className="hidden lg:block geo-circle w-[150px] h-[150px] top-[40px] left-[60px]"></div>
        <div className="hidden lg:block geo-diamond w-[50px] h-[50px] bottom-[60px] right-[100px]"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold tracking-tight text-white text-shadow-sm mb-4">
            Prêt à réussir le barreau ?
          </h2>
          <p className="text-white/80 text-lg mb-10 text-shadow-sm">
            Rejoignez +1 500 étudiants en droit qui préparent le CRFPA avec nous.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/inscription" className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-center">
              Commencer gratuitement
            </Link>
            <Link href="/tarifs" className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
