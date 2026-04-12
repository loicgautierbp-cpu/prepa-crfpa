'use client';

import Link from 'next/link';

const footerLinks = [
  {
    title: 'Épreuves',
    links: [
      { label: 'QCM', href: '/qcm' },
      { label: 'Fiches de révision', href: '/fiches' },
      { label: 'Entraînement écrits', href: '/entrainement-ecrits' },
      { label: 'Entraînement oraux', href: '/entrainement-oraux' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Programme', href: '/programme' },
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Spécialité', href: '/specialite' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'CGU', href: '/cgu' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Contact', href: '/contact' },
      { label: 'support@prepa-crfpa.fr', href: 'mailto:support@prepa-crfpa.fr', external: true },
    ],
  },
];

function FooterLink({ href, children, external }) {
  const className =
    'text-primary-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block';

  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary-950 border-t-2 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full ring-2 ring-primary-800 flex items-center justify-center bg-primary-900/50">
                <svg
                  className="w-5 h-5 text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Prépa{' '}
                <span style={{ fontFamily: 'var(--font-display)' }}>CRFPA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-300 max-w-xs">
              La plateforme de référence pour réussir le CRFPA et devenir avocat.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} external={link.external}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-primary-900 text-center">
          <p className="text-xs text-primary-400">
            &copy; 2025 Prépa CRFPA &mdash; Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
