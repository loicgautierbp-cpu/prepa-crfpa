import { Suspense } from 'react';
import ProcedureClient from './ProcedureClient';

export const metadata = {
  title: "Entraînement Procédure",
  description: "Entraînez-vous à l'épreuve de procédure du CRFPA avec des cas pratiques et consultations corrigés.",
  alternates: { canonical: '/entrainement-procedure' },
};

export default function ProcedurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
      }
    >
      <ProcedureClient />
    </Suspense>
  );
}
