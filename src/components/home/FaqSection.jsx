'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    question: 'Qu\u2019est-ce que le CRFPA ?',
    answer: (
      <>
        Le CRFPA (Centre R&eacute;gional de Formation Professionnelle des Avocats) d&eacute;signe
        l&apos;examen d&apos;acc&egrave;s au barreau, aussi appel&eacute; &laquo;&nbsp;pr&eacute;-CAPA&nbsp;&raquo;.
        C&apos;est un examen national que tout juriste doit r&eacute;ussir pour devenir avocat.
        Il comporte des &eacute;preuves &eacute;crites d&apos;admissibilit&eacute; (note de synth&egrave;se, droit des obligations,
        sp&eacute;cialit&eacute;, proc&eacute;dure) et un oral d&apos;admission (libert&eacute;s fondamentales, anglais juridique, expos&eacute;).{' '}
        <Link href="/blog" className="text-primary-600 font-semibold underline">
          En savoir plus
        </Link>
      </>
    ),
  },
  {
    question: 'La plateforme est-elle adapt\u00e9e \u00e0 toutes les sp\u00e9cialit\u00e9s ?',
    answer:
      'Oui, notre contenu couvre les 7 sp\u00e9cialit\u00e9s propos\u00e9es au CRFPA : droit civil, droit des affaires, droit p\u00e9nal, droit administratif, droit du travail, droit international et europ\u00e9en, et droit fiscal. Vous trouverez des QCM et des fiches pour chacune d\u2019entre elles.',
  },
  {
    question: 'Puis-je utiliser la plateforme d\u00e8s le M1 ?',
    answer:
      'Absolument ! Commencer d\u00e8s le M1 est m\u00eame recommand\u00e9. Cela vous permet de consolider vos bases en droit des obligations et en proc\u00e9dure, et de vous familiariser avec le format des \u00e9preuves bien avant l\u2019examen.',
  },
  {
    question: 'Comment fonctionne le syst\u00e8me de QCM ?',
    answer: (
      <>
        Notre syst&egrave;me g&eacute;n&egrave;re des QCM adapt&eacute;s par mati&egrave;re juridique avec corrections d&eacute;taill&eacute;es
        et r&eacute;f&eacute;rences l&eacute;gales. L&apos;algorithme identifie vos points faibles pour vous faire progresser efficacement.{' '}
        <Link href="/qcm" className="text-primary-600 font-semibold underline">
          Essayer maintenant
        </Link>
      </>
    ),
  },
  {
    question: 'Combien de temps dois-je consacrer aux r\u00e9visions ?',
    answer:
      'La pr\u00e9paration du CRFPA s\u2019\u00e9tale g\u00e9n\u00e9ralement sur 6 \u00e0 8 mois, \u00e0 raison de 4 \u00e0 6h par jour. Notre plateforme vous aide \u00e0 optimiser ce temps avec des sessions QCM cibl\u00e9es et des fiches de r\u00e9vision structur\u00e9es. La r\u00e9gularit\u00e9 et la m\u00e9thode sont les cl\u00e9s de la r\u00e9ussite.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#b91c1c]/[0.03] rounded-full -ml-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-amber-400/[0.04] rounded-full -mr-24 -mb-24 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#b91c1c]/10 border border-[#b91c1c]/15 rounded-full px-4 py-1.5 text-sm font-medium text-[#b91c1c] mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
            FAQ
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-bold text-slate-900">
            Questions fréquentes
          </h2>
        </div>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className={`bg-[#fef2f2] rounded-2xl border transition-all ${openIndex === index ? 'border-[#b91c1c]/20 shadow-md' : 'border-transparent hover:border-slate-200'}`}>
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`text-base font-semibold ${openIndex === index ? 'text-[#b91c1c]' : 'text-slate-900'}`}>{item.question}</span>
                <svg
                  className={`faq-chevron w-5 h-5 shrink-0 ml-4 ${
                    openIndex === index ? 'open text-[#b91c1c]' : 'text-slate-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer px-6 text-sm text-gray-600 leading-relaxed ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
