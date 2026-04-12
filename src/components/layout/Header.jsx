'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const navLinks = [
  { href: '/fiches', label: 'Fiches/Cours' },
  { href: '/entrainement-ecrits', label: 'Épreuves écrites' },
  { href: '/entrainement-oraux', label: 'Épreuves orales' },
  { href: '/blog', label: 'Blog' },
  { href: '/tarifs', label: 'Tarifs' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (err) {
      console.error('Erreur de déconnexion:', err);
    }
  };

  // Initiale de l'utilisateur
  const userInitial = user?.displayName
    ? user.displayName.charAt(0).toUpperCase()
    : user?.email
      ? user.email.charAt(0).toUpperCase()
      : '?';

  return (
    <header className="sticky top-0 z-50">
      {/* ---- Main header ---- */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm border-gray-200/60'
            : 'bg-white border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* ---- Logo ---- */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center ring-2 ring-primary-100 transition-shadow group-hover:ring-primary-200">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <div>
                <span className="text-xl text-gray-900">Prépa <span className="font-display font-bold text-primary-600">CRFPA</span></span>
                <p className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase -mt-0.5">Votre réussite en droit</p>
              </div>
            </Link>

            {/* ---- Desktop nav ---- */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-primary-600 font-semibold'
                      : 'text-gray-600 font-medium hover:text-primary-600'
                  } group`}
                >
                  {link.label}
                  {/* Active gradient underline */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
                  )}
                  {/* Hover animated underline */}
                  {!isActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary-400 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ---- Right actions ---- */}
            <div className="flex items-center gap-3">
              {!loading && (
                <>
                  {user ? (
                    /* ---- Connecté ---- */
                    <div className="hidden sm:flex items-center gap-3">
                      {/* Avatar initiale */}
                      <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-700">{userInitial}</span>
                      </div>
                      {/* Dashboard */}
                      <Link
                        href="/dashboard"
                        className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:scale-[1.02]"
                      >
                        Mon tableau de bord
                      </Link>
                      {/* Déconnexion */}
                      <button
                        onClick={handleLogout}
                        className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
                        title="Se déconnecter"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    /* ---- Déconnecté ---- */
                    <div className="hidden sm:flex items-center gap-2">
                      <Link
                        href="/connexion"
                        className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        Connexion
                      </Link>
                      <Link
                        href="/inscription"
                        className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:scale-[1.02]"
                      >
                        Inscription
                      </Link>
                    </div>
                  )}
                </>
              )}
              {/* ---- Mobile hamburger ---- */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ---- Mobile menu with slide-down animation ---- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 font-semibold'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {!loading && (
              <>
                {user ? (
                  /* ---- Mobile : Connecté ---- */
                  <>
                    <div className="flex items-center gap-3 py-3 border-t border-gray-100 mt-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-700">{userInitial}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{user.displayName || user.email}</span>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="block mt-1 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl text-center shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 transition-all hover:scale-[1.02]"
                    >
                      Mon tableau de bord
                    </Link>
                    <button
                      onClick={() => { handleLogout(); setMenuOpen(false); }}
                      className="block w-full mt-2 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl text-center transition-colors"
                    >
                      Se déconnecter
                    </button>
                  </>
                ) : (
                  /* ---- Mobile : Déconnecté ---- */
                  <>
                    <Link
                      href="/connexion"
                      onClick={() => setMenuOpen(false)}
                      className="block mt-2 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary-600 text-center border border-gray-200 rounded-xl transition-colors"
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/inscription"
                      onClick={() => setMenuOpen(false)}
                      className="block mt-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl text-center shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 transition-all hover:scale-[1.02]"
                    >
                      Inscription
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
