import { Suspense } from 'react';
import GrandOralClient from '../GrandOralClient';

export const metadata = {
  title: "Grand oral CRFPA - Entraînement libertés fondamentales",
  description:
    "Préparez le grand oral du CRFPA (coeff. 4) : exposé 15 min sur un sujet de libertés fondamentales + questions du jury 30 min. Sujets tirés au sort et corrections IA.",
  keywords: [
    'grand oral CRFPA',
    'libertés fondamentales examen barreau',
    'exposé grand oral avocat',
    'préparation grand oral CRFPA',
    'sujets grand oral libertés fondamentales',
    'coefficient 4 CRFPA',
    'questions jury CRFPA',
  ],
  alternates: { canonical: '/entrainement-oraux/grand-oral' },
  openGraph: {
    title: "Grand oral CRFPA - Entraînement libertés fondamentales",
    description:
      "Entraînez-vous au grand oral du CRFPA avec des sujets de libertés fondamentales et un simulateur d'interrogation par le jury.",
    url: 'https://prepa-crfpa.fr/entrainement-oraux/grand-oral',
    type: 'website',
  },
};

export default function GrandOralPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Grand oral CRFPA - Entraînement',
    description: metadata.description,
    url: 'https://prepa-crfpa.fr/entrainement-oraux/grand-oral',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://prepa-crfpa.fr' },
        { '@type': 'ListItem', position: 2, name: 'Épreuves orales', item: 'https://prepa-crfpa.fr/entrainement-oraux' },
        { '@type': 'ListItem', position: 3, name: 'Grand oral', item: 'https://prepa-crfpa.fr/entrainement-oraux/grand-oral' },
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
        <GrandOralClient />
      </Suspense>
    </>
  );
}
