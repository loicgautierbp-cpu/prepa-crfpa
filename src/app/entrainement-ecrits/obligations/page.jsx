import { Suspense } from 'react';
import ObligationsClient from '../ObligationsClient';

export const metadata = {
  title: "Droit des obligations CRFPA - Entraînement et corrections",
  description:
    "Entraînez-vous à l'épreuve de droit des obligations du CRFPA : cas pratiques, dissertations et consultations juridiques corrigés par IA. Contrats, responsabilité civile et régime général.",
  keywords: [
    'droit des obligations CRFPA',
    'épreuve obligations examen barreau',
    'cas pratique obligations',
    'dissertation droit des contrats',
    'responsabilité civile',
    'régime général des obligations',
    'tronc commun CRFPA',
  ],
  alternates: { canonical: '/entrainement-ecrits/obligations' },
  openGraph: {
    title: "Droit des obligations CRFPA - Entraînement et corrections",
    description:
      "Cas pratiques, dissertations et consultations juridiques en droit des obligations pour préparer l'examen du barreau.",
    url: 'https://prepa-crfpa.fr/entrainement-ecrits/obligations',
    type: 'website',
  },
};

export default function ObligationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Droit des obligations CRFPA - Entraînement',
    description: metadata.description,
    url: 'https://prepa-crfpa.fr/entrainement-ecrits/obligations',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://prepa-crfpa.fr' },
        { '@type': 'ListItem', position: 2, name: 'Épreuves écrites', item: 'https://prepa-crfpa.fr/entrainement-ecrits' },
        { '@type': 'ListItem', position: 3, name: 'Droit des obligations', item: 'https://prepa-crfpa.fr/entrainement-ecrits/obligations' },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-[#991b1b] rounded-full animate-spin" />
          </div>
        }
      >
        <ObligationsClient />
      </Suspense>
    </>
  );
}
