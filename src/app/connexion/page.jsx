import ConnexionPage from './ConnexionClient';

export const metadata = {
  title: 'Connexion - Prépa CRFPA',
  description: 'Connectez-vous à votre espace de révision Prépa CRFPA.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/connexion' },
};

export default function Page() {
  return <ConnexionPage />;
}
