export const metadata = {
  title: 'Conditions Générales de Vente | Prépa CRFPA',
  description: 'Consultez les CGV de Prépa CRFPA.',
  alternates: { canonical: '/cgv' },
};

export default function CGVPage() {
  return (
    <>
      <section className="bg-[#eceef1] pt-28 pb-10 md:pt-36 md:pb-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
            Conditions G&eacute;n&eacute;rales de{' '}<span className="text-[#7b1636]">Vente</span>
          </h1>
          <div className="w-12 h-1 bg-[#7b1636] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">Derni&egrave;re mise &agrave; jour : 17 mars 2026</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10">
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 1 &ndash; Objet</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Les CGV r&eacute;gissent les relations entre LP Labs S.A.S. et toute personne acc&eacute;dant &agrave; <strong className="text-gray-900">prepa-crfpa.fr</strong>, plateforme de pr&eacute;paration au CRFPA.</p>
              </div>
            </article>
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 2 &ndash; Services</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                <p>Trois formules :</p>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">1</span><div><p className="font-bold text-gray-900">D&eacute;couverte (Gratuit)</p><p>1 QCM/jour, fiches accessibles.</p></div></div>
                  <div className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">2</span><div><p className="font-bold text-gray-900">Essentiel &ndash; 19,90 &euro;/mois</p><p>QCM illimit&eacute;s, cours, PDF, mode examen.</p></div></div>
                  <div className="flex items-start gap-3"><span className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-700 shrink-0">3</span><div><p className="font-bold text-gray-900">Premium+ &ndash; 39,90 &euro;/mois</p><p>Tout Essentiel + progression, objectifs, classement.</p></div></div>
                </div>
              </div>
            </article>
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 3 &ndash; Tarifs et paiement</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Tarifs en euros TTC, sans engagement. Paiement mensuel par carte bancaire.</p>
              </div>
            </article>
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 4 &ndash; R&eacute;tractation</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>D&eacute;lai de 14 jours (art. L221-18 Code de la consommation). Contact : <a href="mailto:support@prepa-crfpa.fr" className="text-[#7b1636] hover:underline">support@prepa-crfpa.fr</a></p>
              </div>
            </article>
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 5 &ndash; R&eacute;siliation</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Sans engagement. R&eacute;siliation effective en fin de p&eacute;riode de facturation.</p>
              </div>
            </article>
            <article>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7b1636]"></span>Article 6 &ndash; Droit applicable</h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Droit fran&ccedil;ais. M&eacute;diation de la consommation en cas de litige non r&eacute;solu.</p>
              </div>
            </article>
            <div className="pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400">LP Labs S.A.S. &mdash; <a href="mailto:support@prepa-crfpa.fr" className="text-[#7b1636] hover:underline">support@prepa-crfpa.fr</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
