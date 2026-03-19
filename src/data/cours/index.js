export async function loadCoursForFiche(ficheId) {
  if (!ficheId) return null;

  const subject = ficheId.split('-')[0] === 'proc'
    ? ficheId.split('-').slice(0, 2).join('-')
    : ficheId.split('-')[0] === 'grand'
      ? 'grand-oral'
      : ficheId.split('-')[0];

  try {
    let coursData;
    switch (subject) {
      case 'libertes':
        coursData = (await import('./libertes')).COURS_LIBERTES;
        break;
      case 'civil':
        coursData = (await import('./civil')).COURS_CIVIL;
        break;
      case 'affaires':
        coursData = (await import('./affaires')).COURS_AFFAIRES;
        break;
      case 'social':
        coursData = (await import('./social')).COURS_SOCIAL;
        break;
      case 'penal':
        coursData = (await import('./penal')).COURS_PENAL;
        break;
      case 'administratif':
        coursData = (await import('./administratif')).COURS_ADMINISTRATIF;
        break;
      case 'fiscal':
        coursData = (await import('./fiscal')).COURS_FISCAL;
        break;
      case 'international':
        coursData = (await import('./international')).COURS_INTERNATIONAL;
        break;
      case 'proc-civile':
        coursData = (await import('./proc-civile')).COURS_PROC_CIVILE;
        break;
      case 'proc-penale':
        coursData = (await import('./proc-penale')).COURS_PROC_PENALE;
        break;
      case 'proc-admin':
        coursData = (await import('./proc-admin')).COURS_PROC_ADMIN;
        break;
      case 'synthese':
        coursData = (await import('./synthese')).COURS_SYNTHESE;
        break;
      case 'grand-oral':
        coursData = (await import('./grand-oral')).COURS_GRAND_ORAL;
        break;
      case 'anglais':
        coursData = (await import('./anglais')).COURS_ANGLAIS;
        break;
      default:
        return null;
    }
    return coursData?.[ficheId] || null;
  } catch {
    return null;
  }
}
