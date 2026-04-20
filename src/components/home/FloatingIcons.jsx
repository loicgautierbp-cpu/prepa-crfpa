'use client';

const ICONS = [
  <path key="balance" strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />,
  <path key="tribunal" strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />,
  <path key="livre" strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />,
  <path key="bouclier" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />,
  <path key="doc" strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />,
  <path key="diplome" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />,
  <path key="cadenas" strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />,
  <path key="plume" strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />,
  <path key="marteau" strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />,
];

// Pseudo-random deterministic offset pour un look naturel
function jitter(seed, amplitude = 4) {
  const n = Math.sin(seed * 9301 + 49297) * 10000;
  return (n - Math.floor(n)) * (amplitude * 2) - amplitude;
}

// ---------- Grille DESKTOP : 6 colonnes × 5 rangées = 30 icônes ----------
const GRID_DESKTOP = [];
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 6; col++) {
    const i = row * 6 + col;
    GRID_DESKTOP.push({
      top: `${8 + row * 20 + jitter(i * 2)}%`,
      left: `${3 + col * 18 + jitter(i * 2 + 1)}%`,
    });
  }
}

// ---------- Grille MOBILE : 3 colonnes × 6 rangées = 18 icônes, bien espacées ----------
const GRID_MOBILE = [];
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 3; col++) {
    const i = row * 3 + col;
    // Offset alterné : colonnes décalées 1 ligne sur 2 (quinconce) pour une répartition plus homogène
    const stagger = row % 2 === 0 ? 0 : 16;
    GRID_MOBILE.push({
      top: `${6 + row * 16 + jitter(i * 3 + 100, 2)}%`,
      left: `${8 + col * 32 + stagger + jitter(i * 3 + 101, 2)}%`,
    });
  }
}

// Tailles
const SIZES_DESKTOP = ['w-6 h-6', 'w-7 h-7', 'w-8 h-8', 'w-9 h-9', 'w-10 h-10'];
const SIZES_MOBILE = ['w-5 h-5', 'w-6 h-6', 'w-7 h-7']; // un peu plus petites sur mobile

// Rotations variées
const ROTATIONS = ['-18deg', '-12deg', '-6deg', '-3deg', '0deg', '4deg', '8deg', '14deg', '20deg', '-25deg'];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Version MOBILE : grille 3×6 plus aérée, opacité plus faible */}
      <div className="md:hidden absolute inset-0">
        {GRID_MOBILE.map((pos, i) => {
          const icon = ICONS[i % ICONS.length];
          const size = SIZES_MOBILE[i % SIZES_MOBILE.length];
          const rotation = ROTATIONS[i % ROTATIONS.length];
          const duration = 20 + (i * 3) % 15;
          const delay = (i * 2.7) % 12;
          return (
            <svg
              key={`m-${i}`}
              className={`absolute ${size} text-[#b91c1c]/[0.09]`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${rotation})`,
                animation: `gentle ${duration}s ease-in-out infinite ${delay}s`,
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="0.6"
            >
              {icon}
            </svg>
          );
        })}
      </div>

      {/* Version DESKTOP : grille 6×5 */}
      <div className="hidden md:block absolute inset-0">
        {GRID_DESKTOP.map((pos, i) => {
          const icon = ICONS[i % ICONS.length];
          const size = SIZES_DESKTOP[i % SIZES_DESKTOP.length];
          const rotation = ROTATIONS[i % ROTATIONS.length];
          const duration = 20 + (i * 3) % 15;
          const delay = (i * 2.7) % 12;
          return (
            <svg
              key={`d-${i}`}
              className={`absolute ${size} text-[#b91c1c]/[0.14]`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${rotation})`,
                animation: `gentle ${duration}s ease-in-out infinite ${delay}s`,
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="0.6"
            >
              {icon}
            </svg>
          );
        })}
      </div>
    </div>
  );
}
