import BlogPage from './BlogClient';

export const metadata = {
  title: 'Blog CRFPA - Conseils, méthodes et actualités pour réussir le barreau',
  description: 'Guides pratiques, conseils méthodologiques et actualités pour réussir le CRFPA. Note de synthèse, grand oral, planning de révision, erreurs à éviter : tout ce qu\'il faut savoir pour décrocher votre place au barreau.',
  keywords: ['blog CRFPA', 'conseils barreau', 'méthode CRFPA', 'note de synthèse', 'grand oral CRFPA', 'révisions barreau', 'réussir le CRFPA', 'actualités juridiques'],
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog CRFPA - Conseils, méthodes et actualités pour réussir le barreau',
    description: 'Guides pratiques, conseils méthodologiques et actualités pour réussir le CRFPA. Note de synthèse, grand oral, planning de révision et bien plus.',
  },
};

export default function Page() {
  return <BlogPage />;
}
