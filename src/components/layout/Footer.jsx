import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-950 border-t-2 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 – Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-800 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Prépa <span style={{ fontFamily: 'var(--font-display)' }}>CRFPA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-300">
              La plateforme de référence pour réussir le CRFPA et devenir avocat.
            </p>
          </div>

          {/* Column 2 – Matières */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Matières</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/qcm" className="text-primary-200 hover:text-white transition-colors">QCM</Link></li>
              <li><Link href="/fiches" className="text-primary-200 hover:text-white transition-colors">Fiches</Link></li>
              <li><Link href="/cours" className="text-primary-200 hover:text-white transition-colors">Cours</Link></li>
              <li><Link href="/programme" className="text-primary-200 hover:text-white transition-colors">Programme</Link></li>
            </ul>
          </div>

          {/* Column 3 – Ressources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Ressources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="text-primary-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/tarifs" className="text-primary-200 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link href="/contact" className="text-primary-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 – Légal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Légal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/cgu" className="text-primary-200 hover:text-white transition-colors">CGU</Link></li>
              <li><Link href="/cgv" className="text-primary-200 hover:text-white transition-colors">CGV</Link></li>
              <li>
                <a href="mailto:support@prepa-crfpa.fr" className="text-primary-200 hover:text-white transition-colors">
                  support@prepa-crfpa.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-xs text-primary-300">
          &copy; {new Date().getFullYear()} Prépa CRFPA. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
