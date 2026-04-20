import { Suspense } from 'react';
import SpecialiteClient from './SpecialiteClient';

export const metadata = {
  title: "Épreuve de spécialité CRFPA - Entraînement 7 matières",
  description:
    "Entraînez-vous à l'épreuve de spécialité du CRFPA (coeff. 2) : droit civil, pénal, administratif, social, des affaires, international et fiscal. Cas pratiques et dissertations corrigés.",
  keywords: [
    'spécialité CRFPA',
    'épreuve spécialité examen barreau',
    'droit civil CRFPA',
    'droit pénal CRFPA',
    'droit administratif CRFPA',
    'droit social CRFPA',
    'droit des affaires CRFPA',
    'droit international CRFPA',
    'droit fiscal CRFPA',
    'cas pratique spécialité',
  ],
  alternates: { canonical: '/entrainement-specialite' },
  openGraph: {
    title: "Épreuve de spécialité CRFPA - Entraînement 7 matières",
    description:
      "Cas pratiques et dissertations sur les 7 matières de spécialité du CRFPA avec correction IA.",
    url: 'https://prepa-crfpa.fr/entrainement-specialite',
    type: 'website',
  },
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
