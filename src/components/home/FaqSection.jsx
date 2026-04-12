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
    <section id="faq" className="py-16 md:py-24 bg-[#eceef1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                <svg
                  className={`faq-chevron w-5 h-5 text-gray-400 shrink-0 ml-4 ${
                    openIndex === index ? 'open' : ''
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
