/**
 * Shared subject colors and icons for the Prépa CRFPA app.
 */

/* ========== COLOR MAPPING BY COLOR NAME ========== */
export const SUBJECT_COLORS = {
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    badge: 'bg-indigo-100 text-indigo-700',
    bar: 'bg-indigo-500',
    icon: 'text-indigo-500',
    ring: 'ring-indigo-200',
    accent: '#4f46e5',
    barHex: '#6366f1',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    bar: 'bg-emerald-500',
    icon: 'text-emerald-500',
    ring: 'ring-emerald-200',
    accent: '#059669',
    barHex: '#10b981',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    bar: 'bg-violet-500',
    icon: 'text-violet-500',
    ring: 'ring-violet-200',
    accent: '#7c3aed',
    barHex: '#8b5cf6',
    gradient: 'from-violet-500 to-violet-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    badge: 'bg-cyan-100 text-cyan-700',
    bar: 'bg-cyan-500',
    icon: 'text-cyan-500',
    ring: 'ring-cyan-200',
    accent: '#0891b2',
    barHex: '#06b6d4',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-500',
    icon: 'text-amber-500',
    ring: 'ring-amber-200',
    accent: '#d97706',
    barHex: '#f59e0b',
    gradient: 'from-amber-500 to-amber-600',
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
    bar: 'bg-rose-500',
    icon: 'text-rose-500',
    ring: 'ring-rose-200',
    accent: '#e11d48',
    barHex: '#f43f5e',
    gradient: 'from-rose-500 to-rose-600',
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700',
    bar: 'bg-teal-500',
    icon: 'text-teal-500',
    ring: 'ring-teal-200',
    accent: '#0d9488',
    barHex: '#14b8a6',
    gradient: 'from-teal-500 to-teal-600',
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    bar: 'bg-sky-500',
    icon: 'text-sky-500',
    ring: 'ring-sky-200',
    accent: '#0284c7',
    barHex: '#0ea5e9',
    gradient: 'from-sky-500 to-sky-600',
  },
  lime: {
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    text: 'text-lime-700',
    badge: 'bg-lime-100 text-lime-700',
    bar: 'bg-lime-500',
    icon: 'text-lime-500',
    ring: 'ring-lime-200',
    accent: '#65a30d',
    barHex: '#84cc16',
    gradient: 'from-lime-500 to-lime-600',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    bar: 'bg-orange-500',
    icon: 'text-orange-500',
    ring: 'ring-orange-200',
    accent: '#ea580c',
    barHex: '#f97316',
    gradient: 'from-orange-500 to-orange-600',
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
    badge: 'bg-yellow-100 text-yellow-700',
    bar: 'bg-yellow-500',
    icon: 'text-yellow-500',
    ring: 'ring-yellow-200',
    accent: '#ca8a04',
    barHex: '#eab308',
    gradient: 'from-yellow-500 to-yellow-600',
  },
  slate: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-700',
    bar: 'bg-slate-500',
    icon: 'text-slate-500',
    ring: 'ring-slate-200',
    accent: '#475569',
    barHex: '#64748b',
    gradient: 'from-slate-500 to-slate-600',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-700',
    bar: 'bg-purple-500',
    icon: 'text-purple-500',
    ring: 'ring-purple-200',
    accent: '#9333ea',
    barHex: '#a855f7',
    gradient: 'from-purple-500 to-purple-600',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
    bar: 'bg-red-500',
    icon: 'text-red-500',
    ring: 'ring-red-200',
    accent: '#dc2626',
    barHex: '#ef4444',
    gradient: 'from-red-500 to-red-600',
  },
  primary: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-700',
    badge: 'bg-primary-100 text-primary-700',
    bar: 'bg-primary-500',
    icon: 'text-primary-500',
    ring: 'ring-primary-200',
    accent: '#c92150',
    barHex: '#e43e63',
    gradient: 'from-primary-500 to-primary-600',
  },
};

/**
 * Get the color set for a subject by its color name, falling back to primary.
 */
export function getSubjectColors(colorName) {
  return SUBJECT_COLORS[colorName] || SUBJECT_COLORS.primary;
}

/* ========== SUBJECT ICONS (SVG path data) ========== */
export const SUBJECT_ICONS = {
  libertes: {
    path: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z',
  },
  civil: {
    path: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z',
  },
  affaires: {
    path: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0',
  },
  social: {
    path: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  },
  penal: {
    path: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  administratif: {
    path: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  },
  fiscal: {
    path: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
  },
  international: {
    path: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  },
  'proc-civile': {
    path: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z',
  },
  'proc-penale': {
    path: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z',
  },
  'proc-admin': {
    path: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z',
  },
  synthese: {
    path: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  },
  'grand-oral': {
    path: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z',
  },
  anglais: {
    path: 'm10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3m0 2.364a48.487 48.487 0 0 1 3.334-.114m-6.668.114c.379 5.044 3.334 8.995 6.668 8.995m-6.668-8.995a48.4 48.4 0 0 0-3.333.114M3 15.357a48.394 48.394 0 0 1 6-.31m0 0a48.394 48.394 0 0 1 6 .31M9 15.047v2.578',
  },
};

/**
 * Get the readable name for a subject ID.
 */
export function getSubjectName(subjectId) {
  const names = {
    libertes: 'Libertés et droits fondamentaux',
    civil: 'Droit civil',
    affaires: 'Droit des affaires',
    social: 'Droit social',
    penal: 'Droit pénal',
    administratif: 'Droit administratif',
    fiscal: 'Droit fiscal',
    international: 'Droit international et européen',
    'proc-civile': 'Procédure civile',
    'proc-penale': 'Procédure pénale',
    'proc-admin': 'Procédure administrative',
    synthese: 'Note de synthèse',
    'grand-oral': 'Grand oral',
    anglais: 'Anglais juridique',
  };
  return names[subjectId] || subjectId;
}
