import TarifsPage from './TarifsClient';

export const metadata = {
  title: 'Tarifs - Prépa CRFPA',
  description: 'Découvrez nos formules d\'abonnement : Découverte (gratuit), Essentiel (19,90€/mois) et Premium+ (39,90€/mois). Sans engagement.',
  alternates: { canonical: '/tarifs' },
};

export default function Page() {
  return <TarifsPage />;
}
