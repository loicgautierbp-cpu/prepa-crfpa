'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

/**
 * Normalise l'objet user Supabase pour garder la même API que Firebase
 * → user.displayName, user.email restent accessibles partout
 */
function normalizeUser(supabaseUser) {
  if (!supabaseUser) return null;
  return {
    ...supabaseUser,
    displayName: supabaseUser.user_metadata?.full_name || null,
    email: supabaseUser.email,
  };
}

export function AuthProvider({ children }) {
  // TODO: remettre null après la phase de test
  const [user, setUser] = useState({ displayName: 'Testeur', email: 'test@prepa-crfpa.fr' });
  const [loading, setLoading] = useState(false);

  // TODO: remettre le useEffect Supabase après la phase de test
  // useEffect(() => {
  //   if (!supabase) { setLoading(false); return; }
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(normalizeUser(session?.user ?? null));
  //     setLoading(false);
  //   });
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       setUser(normalizeUser(session?.user ?? null));
  //       setLoading(false);
  //     }
  //   );
  //   return () => subscription.unsubscribe();
  // }, []);

  const signUp = async (name, email, password) => {
    if (!supabase) throw new Error('Supabase non configuré');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });
    if (error) throw error;
    // Mettre à jour immédiatement avec le displayName
    if (data.user) {
      setUser(normalizeUser(data.user));
    }
  };

  const signIn = async (email, password) => {
    if (!supabase) throw new Error('Supabase non configuré');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signInWithGoogle = async () => {
    if (!supabase) throw new Error('Supabase non configuré');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : undefined,
      },
    });
    if (error) throw error;
  };

  const logOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
