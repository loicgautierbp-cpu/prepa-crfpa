'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getAuthErrorMessage } from '@/utils/auth-errors';

export default function InscriptionPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!firstName.trim()) { setError('Veuillez entrer votre prénom.'); return; }
    if (!lastName.trim()) { setError('Veuillez entrer votre nom.'); return; }
    if (password.length < 6) { setError('Le mot de passe doit contenir au moins 6 caractères.'); return; }
    if (password !== confirmPassword) { setError('Les mots de passe ne correspondent pas.'); return; }

    setLoading(true);
    try {
      const displayName = `${firstName.trim()} ${lastName.trim()}`;
      await signUp(displayName, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  };

  return (
    <div className="min-h-screen bg-[#eceef1] flex items-center justify-center px-4 py-24 relative overflow-hidden">

      <div className="w-full max-w-[440px] bg-white rounded-xl border border-slate-200 shadow-sm p-8 sm:p-10 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
            <svg className="w-9 h-9 text-[#7b1636]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
            </svg>
          </div>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 text-center mb-1">Créez votre compte</h1>
        <div className="w-12 h-1 bg-[#7b1636] mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-sm text-gray-400 text-center mb-8">et commencez votre préparation au CRFPA.</p>

        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          </div>
        )}

        <button type="button" onClick={handleGoogleSignIn} className="w-full py-3.5 px-6 bg-white border-2 border-gray-200 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continuer avec Google
        </button>

        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
          <div className="relative flex justify-center"><span className="bg-white px-4 text-[11px] text-gray-400 font-semibold uppercase tracking-wider">ou par email</span></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom</label>
              <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoComplete="given-name" placeholder="Jean" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">Nom</label>
              <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required autoComplete="family-name" placeholder="Dupont" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Adresse email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" placeholder="votre@email.com" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5">Mot de passe</label>
            <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" placeholder="Minimum 6 caractères" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all" />
            {password.length > 0 && (
              <div className="mt-2 flex gap-1">
                <div className={`h-1 flex-1 rounded-full ${password.length >= 6 ? 'bg-emerald-400' : 'bg-red-300'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${password.length >= 8 ? 'bg-emerald-400' : 'bg-gray-200'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${password.length >= 10 ? 'bg-emerald-400' : 'bg-gray-200'}`}></div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1.5">Confirmer le mot de passe</label>
            <input id="confirmPassword" type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required autoComplete="new-password" placeholder="Retapez votre mot de passe" className={`w-full px-4 py-3.5 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent focus:bg-white transition-all ${confirmPassword && confirmPassword !== password ? 'border-red-300 bg-red-50/50' : 'bg-slate-50 border-slate-200'}`} />
            {confirmPassword && confirmPassword !== password && (
              <p className="text-xs text-red-500 mt-1">Les mots de passe ne correspondent pas.</p>
            )}
          </div>

          <button type="submit" disabled={loading} className="w-full py-3.5 px-6 bg-[#7b1636] hover:bg-[#5a0f27] hover:scale-[1.02] transition-all text-white text-sm font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2">
            {loading ? 'Création en cours...' : 'Créer mon compte'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Déjà un compte ?{' '}
          <Link href="/connexion" className="text-[#7b1636] hover:text-[#5a1028] font-bold hover:underline">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
