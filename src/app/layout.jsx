import { Sora, Young_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PremiumProvider } from '@/contexts/PremiumContext';
import { AuthProvider } from '@/contexts/AuthContext';

const sora = Sora({ subsets: ['latin'] });
const youngSerif = Young_Serif({ subsets: ['latin'], weight: '400', variable: '--font-display' });

export const metadata = {
  metadataBase: new URL('https://prepa-crfpa.fr'),
  title: {
    default: "Prépa CRFPA - Réussissez l'examen du barreau",
    template: '%s | Prépa CRFPA',
  },
  description: 'La plateforme de révision n°1 pour réussir le CRFPA. QCM illimités, fiches de cours, mode examen et suivi de progression.',
  keywords: ['CRFPA', 'barreau', 'avocat', 'examen barreau', 'QCM droit', 'fiches juridiques', 'préparation barreau', 'droit civil', 'droit pénal', 'grand oral'],
  authors: [{ name: 'LP Labs' }],
  creator: 'LP Labs',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://prepa-crfpa.fr',
    siteName: 'Prépa CRFPA',
    title: "Prépa CRFPA - Réussissez l'examen du barreau",
    description: 'La plateforme de révision n°1 pour réussir le CRFPA. QCM illimités, fiches de cours, mode examen et suivi de progression.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prépa CRFPA - Réussissez l'examen du barreau",
    description: 'La plateforme de révision n°1 pour réussir le CRFPA. QCM illimités, fiches de cours, mode examen.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://prepa-crfpa.fr',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${sora.className} ${youngSerif.variable} bg-[#fef2f2] text-slate-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Prépa CRFPA',
              url: 'https://prepa-crfpa.fr',
              logo: 'https://prepa-crfpa.fr/icon.svg',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'support@prepa-crfpa.fr',
                contactType: 'customer service',
                availableLanguage: 'French',
              },
              sameAs: [],
            }),
          }}
        />
        <AuthProvider>
          <PremiumProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </PremiumProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
