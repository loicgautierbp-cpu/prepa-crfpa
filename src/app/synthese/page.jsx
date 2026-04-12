import { Suspense } from 'react';
import SyntheseClient from './SyntheseClient';

export const metadata = {
  title: 'Note de synthèse - Entraînement et méthodologie',
  description:
    "Entraînez-vous à la note de synthèse du CRFPA avec des dossiers complets, des corrections détaillées et des conseils méthodologiques.",
  alternates: { canonical: '/synthese' },
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
