import { Suspense } from 'react';
import SyntheseClient from './SyntheseClient';

export const metadata = {
  title: 'Note de synthèse CRFPA - Entraînement et méthodologie',
  description:
    "Entraînez-vous à la note de synthèse du CRFPA (coeff. 3) avec des dossiers complets de 5h, des corrections détaillées et la méthodologie officielle.",
  keywords: [
    'note de synthèse CRFPA',
    'méthodologie note de synthèse',
    'exercice note synthèse barreau',
    'dossier note de synthèse CRFPA',
    'plan note de synthèse',
    'épreuve coefficient 3 CRFPA',
  ],
  alternates: { canonical: '/synthese' },
  openGraph: {
    title: 'Note de synthèse CRFPA - Entraînement et méthodologie',
    description:
      "Dossiers complets, corrections IA et méthodologie pour la note de synthèse du CRFPA.",
    url: 'https://prepa-crfpa.fr/synthese',
    type: 'website',
  },
};

export default function SynthesePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
      }
    >
      <SyntheseClient />
    </Suspense>
  );
}
