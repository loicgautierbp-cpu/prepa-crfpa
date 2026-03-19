import CoursPage from './CoursClient';

export const metadata = {
  title: 'Cours d\u00e9taill\u00e9s CRFPA',
  description: 'Acc\u00e9dez \u00e0 des cours complets par mati\u00e8re pour le programme du CRFPA. Contenus structur\u00e9s et p\u00e9dagogiques.',
  alternates: { canonical: '/cours' },
};

export default function Page() {
  return <CoursPage />;
}
