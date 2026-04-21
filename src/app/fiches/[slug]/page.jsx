import { notFound } from 'next/navigation';
import { FICHES_DATA } from '@/data/fiches';
import { SUBJECTS } from '@/data/subjects';
import { extractFicheSummary } from '@/utils/fiche-colors';
import FicheDetailClient from './FicheDetailClient';

const BASE_URL = 'https://prepa-crfpa.fr';

/**
 * Pré-génère une page statique pour chaque fiche → meilleur SEO + TTFB.
 */
export function generateStaticParams() {
  return FICHES_DATA.map((fiche) => ({ slug: fiche.id }));
}

/**
 * SEO metadata spécifique à chaque fiche.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fiche = FICHES_DATA.find((f) => f.id === slug);
  if (!fiche) {
    return { title: 'Fiche introuvable — Prépa CRFPA' };
  }

  const subject = SUBJECTS.find((s) => s.id === fiche.subject);
  const summary = extractFicheSummary(fiche, 155);
  const title = `${fiche.title} — Fiche CRFPA ${subject?.name || ''}`.trim();
  const description = `${summary} Fiche de révision CRFPA en ${subject?.name || 'droit'}, téléchargeable en PDF.`;
  const url = `${BASE_URL}/fiches/${fiche.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Prépa CRFPA',
      type: 'article',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: [
      fiche.title,
      subject?.name,
      'CRFPA',
      'fiche de révision',
      'examen avocat',
      'droit',
    ].filter(Boolean),
  };
}

export default async function FichePage({ params }) {
  const { slug } = await params;
  const fiche = FICHES_DATA.find((f) => f.id === slug);
  if (!fiche) return notFound();

  const subject = SUBJECTS.find((s) => s.id === fiche.subject) || null;

  // Fiches suggérées : 3 autres fiches de la même matière (maillage interne SEO)
  const relatedFiches = FICHES_DATA
    .filter((f) => f.subject === fiche.subject && f.id !== fiche.id)
    .slice(0, 3);

  // Fiche suivante / précédente dans la même matière (navigation séquentielle)
  const sameSubject = FICHES_DATA.filter((f) => f.subject === fiche.subject);
  const currentIdx = sameSubject.findIndex((f) => f.id === fiche.id);
  const prevFiche = currentIdx > 0 ? sameSubject[currentIdx - 1] : null;
  const nextFiche = currentIdx < sameSubject.length - 1 ? sameSubject[currentIdx + 1] : null;

  // JSON-LD pour les moteurs de recherche
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fiche.title,
    description: extractFicheSummary(fiche, 200),
    author: { '@type': 'Organization', name: 'Prépa CRFPA' },
    publisher: {
      '@type': 'Organization',
      name: 'Prépa CRFPA',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/fiches/${fiche.id}`,
    },
    about: subject?.name,
    inLanguage: 'fr-FR',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Fiches', item: `${BASE_URL}/fiches` },
      {
        '@type': 'ListItem',
        position: 3,
        name: subject?.name || 'Matière',
        item: `${BASE_URL}/fiches?matiere=${fiche.subject}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: fiche.title,
        item: `${BASE_URL}/fiches/${fiche.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <FicheDetailClient
        fiche={fiche}
        subject={subject}
        relatedFiches={relatedFiches}
        prevFiche={prevFiche}
        nextFiche={nextFiche}
      />
    </>
  );
}
