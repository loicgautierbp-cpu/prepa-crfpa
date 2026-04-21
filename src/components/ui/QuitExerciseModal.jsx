'use client';

/**
 * Modal de confirmation lors de la sortie d'un exercice.
 * Évite que l'utilisateur quitte par erreur et perde sa progression.
 */
export default function QuitExerciseModal({ open, onCancel, onConfirm, message }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6 max-w-sm w-full shadow-xl animate-[modalEnter_0.22s_ease-out]">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <h3
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-bold text-slate-900 text-lg mb-1"
          >
            Quitter l&apos;exercice&nbsp;?
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {message || 'Votre progression actuelle sera perdue. Êtes-vous sûr de vouloir quitter\u202f?'}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full py-3 bg-[#b91c1c] text-white font-semibold rounded-xl hover:bg-[#991b1b] transition-colors text-sm shadow-sm shadow-[#b91c1c]/20"
          >
            Oui, quitter
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-sm"
          >
            Continuer l&apos;exercice
          </button>
        </div>
      </div>
    </div>
  );
}
