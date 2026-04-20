import EcritsClient from './EcritsClient';

export const metadata = {
  title: "Épreuves écrites CRFPA - Entraînement et corrections IA",
  description:
    "Entraînez-vous aux 4 épreuves écrites du CRFPA : note de synthèse, droit des obligations, spécialité et procédure. Exercices générés, corrections IA et méthodologie.",
  keywords: [
    'épreuves écrites CRFPA',
    'entraînement écrit CRFPA',
    'admissibilité CRFPA',
    'examen barreau écrit',
    'note de synthèse CRFPA',
    'droit des obligations CRFPA',
    'spécialité CRFPA',
    'procédure CRFPA',
  ],
  alternates: { canonical: '/entrainement-ecrits' },
  openGraph: {
    title: "Épreuves écrites CRFPA - Entraînement et corrections IA",
    description:
      "Les 4 épreuves écrites du CRFPA avec exercices, corrections IA et méthodologie.",
    url: 'https://prepa-crfpa.fr/entrainement-ecrits',
    type: 'website',
  },
};

export default function EcritsPage() {
  return <EcritsClient />;
}
