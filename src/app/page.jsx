import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import QuestionDuJour from '@/components/home/QuestionDuJour';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Pr\u00e9pa CRFPA - R\u00e9visez l\u2019examen du barreau en ligne',
  description:
    'La premi\u00e8re plateforme de r\u00e9vision en ligne d\u00e9di\u00e9e au CRFPA. QCM illimit\u00e9s, fiches de r\u00e9vision, mode examen et cours d\u00e9taill\u00e9s pour r\u00e9ussir l\u2019examen d\u2019entr\u00e9e au barreau.',
};

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 min-w-[20px] min-h-[20px] bg-accent-400/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
      <svg
        className="w-3 h-3 text-accent-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </div>
  );
}

const UE_BG_COLORS = {
  indigo: 'bg-primary-500/30',
  emerald: 'bg-emerald-500/30',
  violet: 'bg-violet-500/30',
  cyan: 'bg-cyan-500/30',
  amber: 'bg-amber-500/30',
  rose: 'bg-rose-500/30',
  blue: 'bg-blue-500/30',
  teal: 'bg-teal-500/30',
  orange: 'bg-orange-500/30',
  pink: 'bg-pink-500/30',
  lime: 'bg-lime-500/30',
  sky: 'bg-sky-500/30',
  fuchsia: 'bg-fuchsia-500/30',
  red: 'bg-red-500/30',
};

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="accueil"
        className="relative bg-gradient-to-b from-[#faf8f5] to-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-600 border border-accent-200 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">
                Examen du Barreau 2025
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-0"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              R&eacute;ussissez votre{' '}
              <span className="home-gradient-text">CRFPA</span> sans stress.
            </h1>

            {/* Decorative gold line */}
            <div className="w-20 h-0.5 bg-accent-500 mx-auto mt-6 mb-6"></div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              La premi&egrave;re plateforme de r&eacute;vision con&ccedil;ue exclusivement pour les &eacute;tudiants en
              droit. Ma&icirc;trisez les <strong className="text-gray-900">QCM juridiques</strong>, les{' '}
              <strong className="text-gray-900">cours de droit</strong> et le{' '}
              <strong className="text-gray-900">mode examen</strong>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-0">
              <Link
                href="/qcm"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-950 text-white text-base font-bold rounded-xl hover:bg-primary-900 transition-all shadow-xl shadow-gray-900/20"
              >
                Commencer l&apos;entra&icirc;nement
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-300 hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                D&eacute;couvrir le programme
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200 w-full max-w-2xl">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">150+</p>
                <p className="text-sm text-gray-500">Cours</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">&infin;</p>
                <p className="text-sm text-gray-500">QCM illimit&eacute;s</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">14</p>
                <p className="text-sm text-gray-500">Mati&egrave;res</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAVE: Hero -> Structure examen ==================== */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#e2e8f0"
          />
          <path
            d="M0,56 C320,72 640,32 960,56 C1120,68 1320,48 1440,56 L1440,80 L0,80 Z"
            fill="#e2e8f0"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ==================== STRUCTURE DE L'EXAMEN ==================== */}
      <section className="py-16 md:py-24 bg-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-600">Structure de l&apos;examen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Comment se d&eacute;roule le CRFPA ?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            L&apos;examen d&apos;acc&egrave;s au Centre R&eacute;gional de Formation Professionnelle des Avocats
            se compose de deux phases : l&apos;admissibilit&eacute; (&eacute;crit) et l&apos;admission (oral).
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Epreuves ecrites */}
            <div className="bg-primary-600 rounded-3xl p-8 text-white text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-2">&Eacute;preuves &eacute;crites</h3>
                <p className="text-sm font-semibold text-primary-200 uppercase tracking-wider mb-4">
                  Admissibilit&eacute;
                </p>
                <ul className="space-y-2.5 text-sm text-primary-100">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Note de synth&egrave;se (5h, coeff. 3)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    &Eacute;preuve de sp&eacute;cialit&eacute; (3h, coeff. 3)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Proc&eacute;dure (2h, coeff. 2)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Libert&eacute;s fondamentales (3h, coeff. 3)
                  </li>
                </ul>
              </div>
            </div>

            {/* Epreuves orales */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-2">&Eacute;preuves orales</h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Admission
                </p>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Grand oral (45 min, coeff. 4)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Anglais juridique (coeff. 1)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom arrow + result */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
            <div className="bg-gray-900 rounded-2xl px-8 py-5 inline-flex items-center gap-3">
              <div className="w-10 h-10 min-w-[40px] min-h-[40px] bg-accent-500 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider">
                  Acc&egrave;s &agrave; la profession de
                </p>
                <p className="text-2xl font-black text-white">
                  Avocat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAVE: Structure -> Programme ==================== */}
      <div className="wave-divider" style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C480,0 960,80 1440,40 L1440,0 L0,0 Z"
            fill="#fdf2f3"
            fillOpacity="0.5"
          />
          <path
            d="M0,28 C360,56 720,8 1080,36 C1260,48 1380,32 1440,28 L1440,0 L0,0 Z"
            fill="#fdf2f3"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* ==================== PROGRAMME ==================== */}
      <section
        id="programme"
        className="py-16 md:py-24 gradient-dark noise-overlay text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        {/* Geometric shapes */}
        <div className="geo-circle w-32 h-32 top-20 left-[8%] hidden lg:block"></div>
        <div className="geo-diamond w-16 h-16 bottom-24 right-[12%] hidden lg:block"></div>
        <div className="geo-cross top-1/2 left-[3%] hidden lg:block"></div>
        <div className="geo-circle w-20 h-20 bottom-12 left-[45%] hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 mb-6">
            <svg
              className="w-4 h-4 text-primary-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="text-sm font-semibold text-primary-200">Programme</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>Les mati&egrave;res de l&apos;examen</h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-4">
            Retrouvez les mati&egrave;res au programme de l&apos;examen d&apos;acc&egrave;s au CRFPA.
          </p>
          <Link
            href="/programme"
            className="text-sm text-primary-300 hover:text-white font-semibold underline underline-offset-4 mb-12 inline-block"
          >
            Voir le programme complet &rarr;
          </Link>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PROGRAMME_DATA.map((ue) => (
              <Link
                key={ue.id}
                href={`/programme#ue-${ue.id}`}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-left hover:bg-white/15 transition-colors block"
              >
                <div
                  className={`w-12 h-12 ${UE_BG_COLORS[ue.color] || 'bg-primary-500/30'} rounded-xl flex items-center justify-center mb-4`}
                  dangerouslySetInnerHTML={{ __html: ue.icon }}
                />
                <h3 className="font-bold text-lg mb-1">{ue.name}</h3>
                <p className="text-sm text-primary-200">{ue.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== METHODE ==================== */}
      <section
        id="methode"
        className="py-16 md:py-24 bg-primary-100/70 grid-pattern relative overflow-hidden"
      >
        <div className="geo-circle-light w-48 h-48 -top-12 -right-12 hidden lg:block"></div>
        <div className="geo-ring-light w-32 h-32 bottom-8 left-[6%] hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            La m&eacute;thode pour r&eacute;ussir votre examen
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Gr&acirc;ce &agrave; notre outil d&apos;entra&icirc;nement d&eacute;velopp&eacute; sur mesure pour ma&icirc;triser chaque
            mati&egrave;re du programme du CRFPA !
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* QCM illimit&eacute;s */}
            <Link
              href="/qcm"
              className="feature-card bg-white border border-gray-200 rounded-2xl p-7 text-left block"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">QCM illimit&eacute;s</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Notre algorithme g&eacute;n&egrave;re des{' '}
                <strong>QCM par mati&egrave;re</strong> &agrave; l&apos;infini avec des corrections d&eacute;taill&eacute;es
                et des explications juridiques.
              </p>
            </Link>

            {/* Fiches de cours */}
            <Link
              href="/fiches"
              className="feature-card bg-white border border-gray-200 rounded-2xl p-7 text-left block"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fiches de cours</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Des fiches synth&eacute;tiques et des cours d&eacute;taill&eacute;s sur{' '}
                <strong>chaque mati&egrave;re</strong> du programme pour r&eacute;viser efficacement.
              </p>
            </Link>

            {/* Mode Examen */}
            <Link
              href="/examen"
              className="feature-card bg-white border border-gray-200 rounded-2xl p-7 text-left block"
            >
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mode Examen</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Entra&icirc;nez-vous en{' '}
                <strong>conditions r&eacute;elles</strong> avec une infinit&eacute; de questions uniques, un
                chronom&egrave;tre de 30 min et une correction d&eacute;taill&eacute;e.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WAVE: M&eacute;thode -> FAQ ==================== */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#fdf2f3"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* ==================== FAQ ==================== */}
      <FaqSection />

      {/* ==================== CTA SECTION ==================== */}
      <section
        id="tarifs"
        className="py-16 md:py-24 gradient-dark noise-overlay text-white relative overflow-hidden"
      >
        <div className="geo-circle w-24 h-24 top-8 left-[10%] hidden lg:block"></div>
        <div className="geo-diamond w-12 h-12 top-16 right-[15%] hidden lg:block"></div>
        <div className="geo-cross bottom-12 right-[8%] hidden lg:block"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            D&eacute;couvrez nos formules d&apos;accompagnement
          </h2>
          <p className="text-primary-200 text-lg max-w-xl mx-auto mb-8">
            Sans engagement ou jusqu&apos;au barreau, trouvez le rythme qui correspond &agrave; votre
            objectif en droit.
          </p>
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white text-base font-bold rounded-2xl hover:bg-primary-400 transition-colors shadow-xl shadow-primary-600/30"
          >
            Voir les tarifs en d&eacute;tail
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
