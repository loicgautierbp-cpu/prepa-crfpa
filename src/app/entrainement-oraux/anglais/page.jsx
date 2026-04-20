import { Suspense } from 'react';
import AnglaisClient from '../AnglaisClient';

export const metadata = {
  title: "Anglais juridique CRFPA - Entraînement et traduction",
  description:
    "Entraînez-vous à l'épreuve d'anglais juridique du CRFPA : compréhension de textes, traduction et expression écrite en legal English. Corrections IA immédiates.",
  keywords: [
    'anglais juridique CRFPA',
    'legal English examen barreau',
    'traduction juridique anglais',
    'compréhension texte juridique anglais',
    'expression écrite anglais CRFPA',
    'préparation anglais CRFPA',
  ],
  alternates: { canonical: '/entrainement-oraux/anglais' },
  openGraph: {
    title: "Anglais juridique CRFPA - Entraînement et traduction",
    description:
      "Compréhension de textes juridiques, traduction et expression écrite en legal English pour l'examen du barreau.",
    url: 'https://prepa-crfpa.fr/entrainement-oraux/anglais',
    type: 'website',
  },
};

export default function AnglaisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Anglais juridique CRFPA - Entraînement',
    description: metadata.description,
    url: 'https://prepa-crfpa.fr/entrainement-oraux/anglais',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://prepa-crfpa.fr' },
        { '@type': 'ListItem', position: 2, name: 'Épreuves orales', item: 'https://prepa-crfpa.fr/entrainement-oraux' },
        { '@type': 'ListItem', position: 3, name: 'Anglais juridique', item: 'https://prepa-crfpa.fr/entrainement-oraux/anglais' },
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
        <AnglaisClient />
      </Suspense>
    </>
  );
}
