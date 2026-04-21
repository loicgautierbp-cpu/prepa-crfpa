/**
 * Mapping couleur matière → classes Tailwind.
 * Utilisé à la fois par la liste /fiches et le détail /fiches/[slug].
 */
export const SUBJECT_COLOR_MAP = {
  indigo:  { badge: 'bg-indigo-100 text-indigo-700',   bar: 'bg-indigo-500',   ring: 'ring-indigo-500/20',   icon: 'text-indigo-500',   light: 'bg-indigo-50',   border: 'border-indigo-100',   hex: '#4f46e5', hexDark: '#3730a3', bgSoft: '#eef2ff' },
  primary: { badge: 'bg-indigo-100 text-indigo-700',   bar: 'bg-indigo-500',   ring: 'ring-indigo-500/20',   icon: 'text-indigo-500',   light: 'bg-indigo-50',   border: 'border-indigo-100',   hex: '#4f46e5', hexDark: '#3730a3', bgSoft: '#eef2ff' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500', ring: 'ring-emerald-500/20', icon: 'text-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-100', hex: '#059669', hexDark: '#065f46', bgSoft: '#ecfdf5' },
  violet:  { badge: 'bg-violet-100 text-violet-700',   bar: 'bg-violet-500',   ring: 'ring-violet-500/20',   icon: 'text-violet-500',   light: 'bg-violet-50',   border: 'border-violet-100',   hex: '#7c3aed', hexDark: '#5b21b6', bgSoft: '#f5f3ff' },
  cyan:    { badge: 'bg-cyan-100 text-cyan-700',       bar: 'bg-cyan-500',     ring: 'ring-cyan-500/20',     icon: 'text-cyan-500',     light: 'bg-cyan-50',     border: 'border-cyan-100',     hex: '#0891b2', hexDark: '#155e75', bgSoft: '#ecfeff' },
  amber:   { badge: 'bg-amber-100 text-amber-700',     bar: 'bg-amber-500',   ring: 'ring-amber-500/20',   icon: 'text-amber-500',   light: 'bg-amber-50',   border: 'border-amber-100',   hex: '#d97706', hexDark: '#92400e', bgSoft: '#fffbeb' },
  rose:    { badge: 'bg-rose-100 text-rose-700',       bar: 'bg-rose-500',     ring: 'ring-rose-500/20',     icon: 'text-rose-500',     light: 'bg-rose-50',     border: 'border-rose-100',     hex: '#e11d48', hexDark: '#9f1239', bgSoft: '#fff1f2' },
  teal:    { badge: 'bg-teal-100 text-teal-700',       bar: 'bg-teal-500',     ring: 'ring-teal-500/20',     icon: 'text-teal-500',     light: 'bg-teal-50',     border: 'border-teal-100',     hex: '#0d9488', hexDark: '#115e59', bgSoft: '#f0fdfa' },
  sky:     { badge: 'bg-sky-100 text-sky-700',         bar: 'bg-sky-500',       ring: 'ring-sky-500/20',       icon: 'text-sky-500',       light: 'bg-sky-50',       border: 'border-sky-100',       hex: '#0284c7', hexDark: '#075985', bgSoft: '#f0f9ff' },
  lime:    { badge: 'bg-lime-100 text-lime-700',       bar: 'bg-lime-500',     ring: 'ring-lime-500/20',     icon: 'text-lime-500',     light: 'bg-lime-50',     border: 'border-lime-100',     hex: '#65a30d', hexDark: '#3f6212', bgSoft: '#f7fee7' },
  orange:  { badge: 'bg-orange-100 text-orange-700',   bar: 'bg-orange-500',   ring: 'ring-orange-500/20',   icon: 'text-orange-500',   light: 'bg-orange-50',   border: 'border-orange-100',   hex: '#ea580c', hexDark: '#9a3412', bgSoft: '#fff7ed' },
  yellow:  { badge: 'bg-yellow-100 text-yellow-700',   bar: 'bg-yellow-500',   ring: 'ring-yellow-500/20',   icon: 'text-yellow-500',   light: 'bg-yellow-50',   border: 'border-yellow-100',   hex: '#ca8a04', hexDark: '#854d0e', bgSoft: '#fefce8' },
  slate:   { badge: 'bg-slate-100 text-slate-700',     bar: 'bg-slate-500',   ring: 'ring-slate-500/20',   icon: 'text-slate-500',   light: 'bg-slate-50',   border: 'border-slate-100',   hex: '#475569', hexDark: '#1e293b', bgSoft: '#f8fafc' },
  purple:  { badge: 'bg-purple-100 text-purple-700',   bar: 'bg-purple-500',   ring: 'ring-purple-500/20',   icon: 'text-purple-500',   light: 'bg-purple-50',   border: 'border-purple-100',   hex: '#9333ea', hexDark: '#6b21a8', bgSoft: '#faf5ff' },
  red:     { badge: 'bg-red-100 text-red-700',         bar: 'bg-red-500',       ring: 'ring-red-500/20',       icon: 'text-red-500',       light: 'bg-red-50',       border: 'border-red-100',       hex: '#dc2626', hexDark: '#991b1b', bgSoft: '#fef2f2' },
};

export function getFicheColors(subject) {
  return SUBJECT_COLOR_MAP[subject?.color] || SUBJECT_COLOR_MAP.primary;
}

/**
 * Extrait un résumé automatique à partir du contenu HTML de la fiche
 * (utile quand `fiche.summary` n'existe pas).
 */
export function extractFicheSummary(fiche, maxLength = 160) {
  if (fiche.summary) return fiche.summary;
  const text = (fiche.content || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}
