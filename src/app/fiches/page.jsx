import FichesPage from './FichesClient';

export const metadata = {
  title: 'Fiches de r\u00e9vision CRFPA',
  description: 'Fiches synth\u00e9tiques par mati\u00e8re pour r\u00e9viser efficacement le programme du CRFPA. T\u00e9l\u00e9chargeables en PDF.',
  alternates: { canonical: '/fiches' },
};

export default function Page() {
  return <FichesPage />;
}
