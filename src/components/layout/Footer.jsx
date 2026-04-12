import Link from 'next/link';

const footerLinks = [
  {
    title: 'Épreuves',
    links: [
      { label: 'Fiches de révision', href: '/fiches' },
      { label: 'Épreuves écrites', href: '/entrainement-ecrits' },
      { label: 'Épreuves orales', href: '/entrainement-oraux' },
      { label: 'Programme', href: '/programme' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'CGU', href: '/cgu' },
      { label: 'CGV', href: '/cgv' },
      { label: 'support@prepa-crfpa.fr', href: 'mailto:support@prepa-crfpa.fr', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span style={{ fontFamily: 'var(--font-display)' }} className="text-lg text-white mb-4 block">
              Prépa <span className="text-slate-400">CRFPA</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              La plateforme de référence pour réussir le CRFPA et devenir avocat.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Prépa CRFPA &mdash; Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
