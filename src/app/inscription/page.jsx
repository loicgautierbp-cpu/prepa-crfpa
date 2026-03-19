import InscriptionPage from './InscriptionClient';

export const metadata = {
  title: 'Inscription gratuite - Prépa CRFPA',
  description: 'Créez votre compte Prépa CRFPA gratuitement et commencez à réviser dès maintenant.',
  alternates: { canonical: '/inscription' },
};

export default function Page() {
  return <InscriptionPage />;
}
