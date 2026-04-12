import { Suspense } from 'react';
import SpecialiteClient from './SpecialiteClient';

export const metadata = {
  title: "Entraînement Spécialité",
  description: "Entraînez-vous à l'épreuve de spécialité du CRFPA avec des cas pratiques et dissertations corrigés.",
  alternates: { canonical: '/entrainement-specialite' },
};

export default function SpecialitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
      }
    >
      <SpecialiteClient />
    </Suspense>
  );
}
