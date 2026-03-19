import Link from 'next/link';
import { PROGRAMME_DATA } from '@/data/programme';
import UeTopics from './UeTopics';

const UE_ICON_STYLES = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  violet: 'bg-violet-50 text-violet-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  amber: 'bg-amber-50 text-amber-600',
  rose: 'bg-rose-50 text-rose-600',
  teal: 'bg-teal-50 text-teal-600',
  sky: 'bg-sky-50 text-sky-600',
  lime: 'bg-lime-50 text-lime-600',
  orange: 'bg-orange-50 text-orange-600',
  yellow: 'bg-yellow-50 text-yellow-600',
  slate: 'bg-slate-50 text-slate-600',
  purple: 'bg-purple-50 text-purple-600',
  red: 'bg-red-50 text-red-600',
};

export const metadata = {
  title: 'Programme du CRFPA 2025-2026 - Prépa CRFPA',
  description: 'Découvrez le programme détaillé du CRFPA : 6 épreuves, 14 matières. Droit des obligations, procédure civile, libertés fondamentales et bien plus.',
};

export default function ProgrammePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero noise-overlay dot-grid pt-28 pb-14 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="absolute w-[300px] h-[300px] bg-violet-300/8 rounded-full blur-[80px] top-1/3 left-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="geo-circle-light w-40 h-40 top-20 right-[8%] hidden lg:block"></div>
        <div className="geo-ring-light w-56 h-56 -bottom-12 left-[3%] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-primary-200 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
                </span>
                <span className="text-sm font-semibold text-primary-700">Programme officiel CRFPA</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] mb-5">
                Le programme <span className="programme-gradient-text">CRFPA</span> d&eacute;taill&eacute;
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                Retrouvez le d&eacute;tail des <strong className="text-gray-900">6 &eacute;preuves et 14 mati&egrave;res</strong> de l&rsquo;examen d&rsquo;acc&egrave;s au CRFPA. Chaque mati&egrave;re est d&eacute;crypt&eacute;e avec ses <strong className="text-gray-900">th&egrave;mes, coefficients</strong> et volumes horaires.
              </p>
              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <div className="prog-stat flex items-center gap-3" style={{ transition: 'transform 0.2s ease' }}>
                  <div className="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">6</div>
                    <div className="text-xs font-medium text-gray-500">&Eacute;preuves</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
                <div className="prog-stat flex items-center gap-3" style={{ transition: 'transform 0.2s ease' }}>
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">~400h</div>
                    <div className="text-xs font-medium text-gray-500">Volume total</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
                <div className="prog-stat flex items-center gap-3" style={{ transition: 'transform 0.2s ease' }}>
                  <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">14</div>
                    <div className="text-xs font-medium text-gray-500">Mati&egrave;res</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CRFPA subject mini cards grid */}
            <div className="hidden lg:block relative h-[340px]">
              {/* Row 1: 3 cards */}
              <div className="absolute top-0 left-0 w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-100/50 p-4 ue-float">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Obligations</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Droit civil</div>
              </div>

              <div className="absolute top-2 left-[175px] w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-emerald-500/10 border border-emerald-100/50 p-4 ue-float ue-float-delay-1">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Proc&eacute;dure civile</div>
                <div className="text-[10px] text-gray-400 mt-0.5">&Eacute;preuve &eacute;crite</div>
              </div>

              <div className="absolute top-0 right-0 w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-violet-500/10 border border-violet-100/50 p-4 ue-float ue-float-delay-2">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Libert&eacute;s fondamentales</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Note de synth&egrave;se</div>
              </div>

              {/* Row 2: 3 cards */}
              <div className="absolute bottom-12 left-[10px] w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100/50 p-4 ue-float ue-float-delay-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Droit p&eacute;nal</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Sp&eacute;cialit&eacute;</div>
              </div>

              <div className="absolute bottom-6 left-[185px] w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-amber-500/10 border border-amber-100/50 p-4 ue-float ue-float-delay-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Droit des affaires</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Sp&eacute;cialit&eacute;</div>
              </div>

              <div className="absolute bottom-14 right-[5px] w-[155px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-rose-500/10 border border-rose-100/50 p-4 ue-float ue-float-delay-5">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                </div>
                <div className="text-sm font-bold text-gray-900">Droit administratif</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Sp&eacute;cialit&eacute;</div>
              </div>

              {/* Decorative center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-100/30 rounded-3xl rotate-12 blur-[3px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject List */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {PROGRAMME_DATA.map((ue, i) => (
            <div key={ue.id} className={`mb-12 ${i > 0 ? 'pt-12 border-t border-gray-200' : ''}`} id={`ue-${ue.id}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-16 h-16 ${UE_ICON_STYLES[ue.color] || 'bg-primary-50 text-primary-600'} rounded-2xl flex items-center justify-center shrink-0`}
                  dangerouslySetInnerHTML={{ __html: ue.icon }}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-gray-900">{ue.name}</h2>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full">Coeff. {ue.coeff}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{ue.hours}h de cours</span>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{ue.description}</p>
                  <UeTopics topics={ue.topics} />
                  <Link href="/qcm" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors">
                    S&apos;entra&icirc;ner en {ue.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Pr&ecirc;t &agrave; pr&eacute;parer le barreau ?</h2>
          <p className="text-primary-200 text-lg mb-8">Entra&icirc;nez-vous sur chaque mati&egrave;re avec nos QCM illimit&eacute;s.</p>
          <Link href="/qcm" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-400 transition-colors shadow-xl">
            Commencer un QCM
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
