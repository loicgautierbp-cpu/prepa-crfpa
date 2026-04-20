import OrauxClient from './OrauxClient';

export const metadata = {
  title: "Épreuves orales CRFPA - Grand oral et anglais juridique",
  description:
    "Préparez les 2 épreuves orales du CRFPA (admission) : grand oral sur les libertés fondamentales (coeff. 4) et anglais juridique. Sujets tirés au sort et simulateur de jury.",
  keywords: [
    'épreuves orales CRFPA',
    'admission CRFPA',
    'grand oral CRFPA',
    'libertés fondamentales',
    'anglais juridique CRFPA',
    'préparation oral barreau',
    'simulateur jury CRFPA',
  ],
  alternates: { canonical: '/entrainement-oraux' },
  openGraph: {
    title: "Épreuves orales CRFPA - Grand oral et anglais juridique",
    description:
      "Grand oral (libertés fondamentales) et anglais juridique : entraînement et corrections IA.",
    url: 'https://prepa-crfpa.fr/entrainement-oraux',
    type: 'website',
  },
};

export default function OrauxPage() {
  return <OrauxClient />;
}
