import BlogPage from './BlogClient';

export const metadata = {
  title: 'Blog CRFPA - Conseils et actualités',
  description: 'Articles, guides et conseils pour réussir le CRFPA. Stratégies de révision, retours d\'expérience et actualités juridiques.',
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <BlogPage />;
}
