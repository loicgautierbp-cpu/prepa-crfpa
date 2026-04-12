'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const TIERS = ['gratuit', 'essentiel', 'premium+'];

const PremiumContext = createContext();

export function PremiumProvider({ children }) {
  // TODO: remettre 'gratuit' après la phase de test
  const [tier, setTier] = useState('premium+');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Migration depuis l'ancien système booléen
    const oldPremium = localStorage.getItem('prepa-crfpa-premium');
    const savedTier = localStorage.getItem('prepa-crfpa-tier');

    // TODO: remettre la logique normale après les tests
    // Force premium+ pour la phase de test
    setTier('premium+');
    localStorage.setItem('prepa-crfpa-tier', 'premium+');
    localStorage.setItem('prepa-crfpa-premium', 'true');

    setIsLoaded(true);
  }, []);

  // Helpers
  const isEssentiel = tier === 'essentiel' || tier === 'premium+';
  const isPremiumPlus = tier === 'premium+';

  // Rétrocompatibilité — isPremium = true dès essentiel
  const isPremium = isEssentiel;

  const setSubscription = (newTier) => {
    if (TIERS.includes(newTier)) {
      localStorage.setItem('prepa-crfpa-tier', newTier);
      // Sync ancien flag pour rétrocompatibilité
      localStorage.setItem('prepa-crfpa-premium', newTier === 'premium+' ? 'true' : 'false');
      setTier(newTier);
    }
  };

  // Rétrocompatibilité : togglePremium pour les anciens usages
  const togglePremium = (value) => {
    const newVal = typeof value === 'boolean' ? value : !isPremium;
    setSubscription(newVal ? 'premium+' : 'gratuit');
  };

  return (
    <PremiumContext.Provider value={{ tier, isEssentiel, isPremiumPlus, isPremium, setSubscription, togglePremium, isLoaded }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
