export const metadata = {
  title: "Conditions Générales d'Utilisation | Prépa CRFPA",
  description: "Consultez les CGU de Prépa CRFPA.",
  alternates: { canonical: '/cgu' },
};

export default function CGUPage() {
  return (
    <>
      <section className="gradient-hero noise-overlay dot-grid pt-28 pb-10 md:pt-36 md:pb-14 relative overflow-hidden">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] mb-4">
            Conditions G&eacute;n&eacute;rales d&rsquo;<span className="bg-gradient-to-r from-primary-600 via-violet-500 to-primary-600 bg-clip-text text-transparent">Utilisation</span>
          </h1>
          <p className="text-lg text-gray-600">Derni&egrave;re mise &agrave; jour : 17 mars 2026</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10">
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 1 &ndash; Objet</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Les pr&eacute;sentes CGU d&eacute;finissent les modalit&eacute;s d&rsquo;acc&egrave;s et d&rsquo;utilisation de la plateforme <strong className="text-gray-900">prepa-crfpa.fr</strong>, &eacute;dit&eacute;e par LP Labs S.A.S.</p>
                <p>La Plateforme est un service en ligne de pr&eacute;paration au CRFPA proposant des QCM, fiches de r&eacute;vision, cours d&eacute;taill&eacute;s, un mode examen et des outils de suivi de progression.</p>
              </div>
            </article>
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 2 &ndash; Acceptation</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>L&rsquo;acc&egrave;s &agrave; la Plateforme est subordonn&eacute; &agrave; l&rsquo;acceptation des CGU. LP Labs peut les modifier &agrave; tout moment.</p>
              </div>
            </article>
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 3 &ndash; Propri&eacute;t&eacute; intellectuelle</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>L&rsquo;ensemble des contenus est la propri&eacute;t&eacute; exclusive de LP Labs et prot&eacute;g&eacute; par le Code de la propri&eacute;t&eacute; intellectuelle.</p>
              </div>
            </article>
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 4 &ndash; Contenus p&eacute;dagogiques</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Les contenus sont fournis &agrave; titre informatif. Ils ne se substituent pas &agrave; l&rsquo;enseignement des IEJ.</p>
              </div>
            </article>
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 5 &ndash; Donn&eacute;es personnelles</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>LP Labs traite les donn&eacute;es conform&eacute;ment au RGPD. Contact : <a href="mailto:support@prepa-crfpa.fr" className="text-primary-600 hover:underline">support@prepa-crfpa.fr</a></p>
              </div>
            </article>
            <article>
              <h2 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Article 6 &ndash; Droit applicable</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Les CGU sont r&eacute;gies par le droit fran&ccedil;ais. Les tribunaux comp&eacute;tents statuent en cas de litige.</p>
              </div>
            </article>
            <div className="pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400">LP Labs S.A.S. &mdash; <a href="mailto:support@prepa-crfpa.fr" className="text-primary-500 hover:underline">support@prepa-crfpa.fr</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
