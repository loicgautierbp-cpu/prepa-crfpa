import { Suspense } from 'react';
import ProcedureClient from './ProcedureClient';

export const metadata = {
  title: "Épreuve de procédure CRFPA - Civile, pénale, administrative",
  description:
    "Entraînez-vous à l'épreuve de procédure du CRFPA (coeff. 2) : procédure civile, pénale et administrative. Cas pratiques et consultations juridiques corrigés par IA.",
  keywords: [
    'épreuve procédure CRFPA',
    'procédure civile CRFPA',
    'procédure pénale CRFPA',
    'procédure administrative CRFPA',
    'cas pratique procédure barreau',
    'consultation juridique procédure',
    'examen CRFPA procédure',
  ],
  alternates: { canonical: '/entrainement-procedure' },
  openGraph: {
    title: "Épreuve de procédure CRFPA - Civile, pénale, administrative",
    description:
      "Cas pratiques et consultations sur les 3 procédures du CRFPA avec correction IA.",
    url: 'https://prepa-crfpa.fr/entrainement-procedure',
    type: 'website',
  },
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
