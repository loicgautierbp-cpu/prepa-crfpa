import { Suspense } from 'react';
import SpecialiteClient from './SpecialiteClient';

export const metadata = {
  title: 'Quelle spécialité choisir au CRFPA ?',
  description:
    "Quiz gratuit pour trouver votre spécialité idéale au CRFPA. Évaluez vos affinités juridiques et découvrez la matière qui maximise vos chances de réussite.",
  alternates: { canonical: '/specialite' },
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
