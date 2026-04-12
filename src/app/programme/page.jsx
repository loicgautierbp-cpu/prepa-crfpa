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
      <section className="bg-[#eceef1] pt-28 pb-14 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7b1636] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7b1636]"></span>
              </span>
              <span className="text-sm font-semibold text-slate-700">Programme officiel CRFPA</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Le programme <span className="programme-gradient-text">CRFPA</span> d&eacute;taill&eacute;
            </h1>
            <div className="w-12 h-1 bg-[#7b1636] mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Retrouvez le d&eacute;tail des <strong className="text-gray-900">6 &eacute;preuves et 14 mati&egrave;res</strong> de l&rsquo;examen d&rsquo;acc&egrave;s au CRFPA. Chaque mati&egrave;re est d&eacute;crypt&eacute;e avec ses <strong className="text-gray-900">th&egrave;mes, coefficients</strong> et volumes horaires.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
              <div className="prog-stat flex items-center gap-3">
                <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7b1636]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">6</div>
                  <div className="text-xs font-medium text-gray-500">&Eacute;preuves</div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
              <div className="prog-stat flex items-center gap-3">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">~400h</div>
                  <div className="text-xs font-medium text-gray-500">Volume total</div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200/60 hidden sm:block"></div>
              <div className="prog-stat flex items-center gap-3">
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
        </div>
      </section>

      {/* Subject List */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {PROGRAMME_DATA.map((ue, i) => (
            <div key={ue.id} className={`mb-12 ${i > 0 ? 'pt-12 border-t border-gray-200' : ''}`} id={`ue-${ue.id}`}>
              <div className="lift flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-16 h-16 ${UE_ICON_STYLES[ue.color] || 'bg-slate-50 text-[#7b1636]'} rounded-2xl flex items-center justify-center shrink-0`}
                  dangerouslySetInnerHTML={{ __html: ue.icon }}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-black text-gray-900">{ue.name}</h2>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">Coeff. {ue.coeff}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{ue.hours}h de cours</span>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{ue.description}</p>
                  <UeTopics topics={ue.topics} />
                  <Link href="/qcm" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-black transition-colors">
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
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl md:text-3xl font-black mb-4">Pr&ecirc;t &agrave; pr&eacute;parer le barreau ?</h2>
          <p className="text-gray-300 text-lg mb-8">Entra&icirc;nez-vous sur chaque mati&egrave;re avec nos QCM illimit&eacute;s.</p>
          <Link href="/qcm" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-black transition-colors">
            Commencer un QCM
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
