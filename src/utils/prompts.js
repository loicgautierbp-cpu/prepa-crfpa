/* ===== PROMPT BUILDERS FOR GEMINI QCM GENERATION ===== */

const SUBJECT_CONTEXT = {
  libertes: "Libertés et droits fondamentaux au programme du CRFPA : bloc de constitutionnalité (Constitution de 1958, DDHC 1789, Préambule 1946, Charte de l'environnement 2004), Convention européenne des droits de l'homme (articles 2 à 14, protocoles additionnels, jurisprudence de la CEDH), Charte des droits fondamentaux de l'UE, libertés individuelles (liberté d'aller et venir, sûreté, vie privée), libertés collectives (liberté d'expression, liberté de réunion et d'association, liberté syndicale, droit de grève), liberté religieuse et laïcité, principe d'égalité et non-discrimination, droit de propriété, libertés économiques, droits sociaux fondamentaux, garanties juridictionnelles des libertés (QPC, contrôle de conventionnalité, référé-liberté), protection des données personnelles (RGPD).",

  civil: "Droit civil au programme du CRFPA : droit des obligations réformé par l'ordonnance du 10 février 2016 (formation du contrat : offre/acceptation, vices du consentement erreur/dol/violence, conditions de validité art. 1128 C. civ.), effets du contrat (force obligatoire, effet relatif, imprévision art. 1195), inexécution (exception d'inexécution, exécution forcée, résolution, réduction de prix, dommages-intérêts), responsabilité civile délictuelle (fait personnel art. 1240-1241, fait d'autrui art. 1242, fait des choses art. 1242 al. 1, produits défectueux art. 1245), régime général des obligations (modalités, cession de créance, prescription), droit des sûretés réformé en 2021 (cautionnement, hypothèques, gages, nantissements), droit des biens (propriété, possession, servitudes).",

  affaires: "Droit des affaires au programme du CRFPA : actes de commerce et commerçants, fonds de commerce (vente, location-gérance, nantissement), bail commercial (statut des baux commerciaux, décret de 1953), droit des sociétés (constitution, personnalité morale, SA, SAS, SARL, SNC, sociétés civiles, SCI, dissolution et liquidation, responsabilité des dirigeants), droit des procédures collectives (prévention des difficultés, mandat ad hoc, conciliation, sauvegarde, redressement judiciaire, liquidation judiciaire, cessation des paiements), droit de la concurrence (ententes, abus de position dominante, concentrations, pratiques restrictives), instruments de paiement et de crédit (lettre de change, billet à ordre, chèque, virement, affacturage).",

  social: "Droit social au programme du CRFPA : droit du travail individuel (contrat de travail CDI/CDD/intérim, période d'essai, clauses particulières, modification du contrat), exécution du contrat (durée du travail 35h, heures supplémentaires, congés payés, rémunération, SMIC), rupture du contrat (licenciement pour motif personnel et économique, barème Macron, rupture conventionnelle, démission, prise d'acte, résiliation judiciaire), droit du travail collectif (représentation du personnel CSE, syndicats, négociation collective, conventions et accords collectifs, droit de grève), santé et sécurité au travail (obligation de sécurité, harcèlement moral et sexuel, inaptitude), protection sociale (régime général de Sécurité sociale, assurance chômage).",

  penal: "Droit pénal au programme du CRFPA : droit pénal général (principe de légalité art. 111-3 C. pén., classification tripartite des infractions, éléments constitutifs de l'infraction légal/matériel/moral, tentative art. 121-4 et 121-5, complicité art. 121-6 et 121-7, causes d'irresponsabilité pénale : légitime défense art. 122-5, état de nécessité art. 122-7, trouble mental art. 122-1, contrainte art. 122-2, erreur de droit art. 122-3), peines (classification, personnalisation, sursis, récidive, aménagement), droit pénal spécial (infractions contre les personnes : homicide, violences, agressions sexuelles ; infractions contre les biens : vol, escroquerie, abus de confiance ; infractions de faux), droit pénal des affaires (abus de biens sociaux, banqueroute, blanchiment, délit d'initié).",

  administratif: "Droit administratif au programme du CRFPA : organisation administrative (État, administration déconcentrée, collectivités territoriales, établissements publics, autorités administratives indépendantes), acte administratif unilatéral (conditions de légalité externe et interne, entrée en vigueur, retrait et abrogation art. L.240-1 CRPA, règle Ternon), contrats administratifs (critères d'identification, prérogatives de l'administration, exécution, imprévision CE 1916 Bordeaux, fait du prince, sujétions imprévues), service public (lois de Rolland, SPIC/SPA, modes de gestion), police administrative (générale/spéciale, contrôle de proportionnalité), responsabilité administrative (faute de service, faute personnelle, responsabilité sans faute, travaux publics), contentieux administratif (REP CE 1950 Dame Lamotte, plein contentieux, référés L.521-1 et L.521-2 CJA).",

  fiscal: "Droit fiscal au programme du CRFPA : impôt sur le revenu (catégories de revenus : TS, BIC, BNC, revenus fonciers, RCM, plus-values, quotient familial, barème progressif, prélèvement à la source), impôt sur les sociétés (assiette, taux normal 25%, taux réduit PME 15%, régime des sociétés mères et filiales, intégration fiscale), TVA (champ d'application, fait générateur et exigibilité, base d'imposition, taux, droit à déduction, régularisations), droits d'enregistrement (mutations à titre onéreux et gratuit), impôts locaux (taxe foncière, CFE, CVAE), fiscalité patrimoniale (IFI, plus-values immobilières et mobilières, droits de succession et donation), procédures fiscales (contrôle fiscal, droit de reprise, garanties du contribuable, contentieux fiscal), conventions fiscales internationales (modèle OCDE, double imposition).",

  international: "Droit international et européen au programme du CRFPA : droit international privé (conflits de lois : méthode conflictuelle, rattachements, qualification, renvoi arrêt Forgo 1882, ordre public international, fraude à la loi arrêt Bauffremont 1878, règlements Rome I et Rome II), conflits de juridictions (compétence internationale directe, règlement Bruxelles I bis, exequatur arrêt Cornelissen 2007, immunités de juridiction), condition des étrangers et droit de la nationalité, droit institutionnel de l'UE (institutions, processus décisionnel, primauté Costa c. ENEL 1964, effet direct Van Gend en Loos 1963), droit matériel de l'UE (libertés de circulation des marchandises/personnes/services/capitaux, droit de la concurrence européen), droit international public (sources, responsabilité internationale, règlement des différends).",

  'proc-civile': "Procédure civile au programme du CRFPA : principes directeurs du procès civil (dispositif, contradictoire art. 16 CPC, loyauté), action en justice (intérêt, qualité, capacité), compétence des juridictions civiles (matérielle et territoriale, exceptions d'incompétence), instance civile (introduction, mise en état, incidents, mesures d'instruction), preuves (charge de la preuve art. 9 CPC, modes de preuve, loyauté probatoire), jugement (prononcé, motivation, autorité de la chose jugée, exécution provisoire), voies de recours ordinaires (appel : délai 1 mois, effet suspensif et dévolutif, opposition) et extraordinaires (pourvoi en cassation, tierce opposition, recours en révision), procédures d'urgence (référé art. 834-835 CPC, requête), exécution forcée (saisies, astreinte), modes alternatifs de résolution des litiges (médiation, conciliation, arbitrage).",

  'proc-penale': "Procédure pénale au programme du CRFPA : principes directeurs (présomption d'innocence art. 9 DDHC et 6§2 CEDH, droits de la défense, contradictoire), action publique et action civile, enquête de police (flagrance art. 53 CPP, préliminaire art. 75 CPP, garde à vue art. 62-2 avec droits : avocat, silence, prévenir un proche), instruction préparatoire (juge d'instruction, mise en examen, contrôle judiciaire, détention provisoire, chambre de l'instruction), poursuites (citation directe, comparution immédiate, CRPC, ordonnance pénale), jugement (tribunal de police, tribunal correctionnel, cour d'assises, cour criminelle départementale), voies de recours (appel, pourvoi en cassation), exécution des peines (JAP, aménagement, libération conditionnelle), droit des victimes.",

  'proc-admin': "Procédure administrative contentieuse au programme du CRFPA : organisation juridictionnelle administrative (tribunaux administratifs, cours administratives d'appel, Conseil d'État), recours pour excès de pouvoir (conditions de recevabilité, cas d'ouverture : légalité externe incompétence/vice de forme/vice de procédure, légalité interne violation de la loi/erreur de fait/erreur de qualification/détournement de pouvoir), recours de plein contentieux, référés administratifs (référé-suspension L.521-1 CJA, référé-liberté L.521-2 en 48h, référé-conservatoire L.521-3), procédure devant les juridictions administratives (requête, instruction, audience, conclusions du rapporteur public), exécution des décisions (injonction, astreinte), décisions implicites (rejet 2 mois L.231-4 CRPA, acceptation L.231-1), QPC devant le juge administratif.",

  synthese: "Méthodologie de la note de synthèse du CRFPA : épreuve de 5 heures coefficient 3, synthèse d'un dossier de 15 à 25 documents juridiques (textes de loi, jurisprudence, doctrine, rapports), plan en 2 parties et 2 sous-parties, restitution objective sans ajout de connaissances personnelles, gestion du temps (1h lecture/1h plan/3h rédaction), introduction avec accroche/présentation/problématique/annonce du plan, transitions, style neutre et concis, 4 à 6 pages manuscrites, références aux documents du dossier.",

  'grand-oral': "Grand oral du CRFPA : épreuve orale coefficient 4, 1 heure de préparation + 15 minutes d'exposé + 30 minutes d'échange avec le jury, sujet tiré au sort portant sur les libertés et droits fondamentaux, plan structuré en 2 parties, argumentation juridique solide, culture juridique générale et actualité, déontologie de l'avocat (RIN, serment, secret professionnel, conflits d'intérêts), éloquence et qualités oratoires.",

  obligations: "Droit des obligations au programme du CRFPA (épreuve écrite de tronc commun, 3h, coefficient 2) : droit des contrats réformé par l'ordonnance du 10 février 2016 (négociations précontractuelles, offre et acceptation, conditions de validité art. 1128 C. civ., vices du consentement erreur/dol/violence, capacité et représentation, contenu du contrat art. 1162 s., nullité), effets du contrat (force obligatoire art. 1103, effet relatif art. 1199, stipulation pour autrui, imprévision art. 1195, cession de contrat art. 1216), inexécution du contrat (exception d'inexécution art. 1219-1220, exécution forcée en nature art. 1221, réduction du prix art. 1223, résolution art. 1224 s., responsabilité contractuelle et dommages-intérêts art. 1231-1 s.), responsabilité civile extracontractuelle (fait personnel art. 1240-1241, fait d'autrui art. 1242 al. 1/4/5/6/7/8, fait des choses art. 1242 al. 1, produits défectueux art. 1245 s., troubles anormaux du voisinage), régime général des obligations (modalités : condition, terme, obligations plurales, cession de créance art. 1321 s., subrogation, novation, délégation, compensation, prescription extinctive loi du 17 juin 2008, prescription quinquennale art. 2224 C. civ.).",

  anglais: "Anglais juridique au programme du CRFPA : vocabulaire juridique anglais (contract law, tort law, criminal law, constitutional law, corporate law, property law), systèmes de Common Law (stare decisis, adversarial system, jury trial, equity), comparaison Common Law / Civil Law, système judiciaire britannique et américain (courts, barristers/solicitors, attorneys), documents juridiques en anglais (contracts, briefs, opinions, statutes), droits fondamentaux dans les pays anglophones (Bill of Rights, Human Rights Act), actualité juridique internationale.",
};

const CRFPA_CONTEXT = `
CONTEXTE ACADÉMIQUE IMPORTANT :
Tu génères des questions pour des étudiants préparant le CRFPA (examen d'accès au Centre Régional de Formation Professionnelle des Avocats), l'examen du barreau français.
Le niveau requis est celui du Master 1 ou Master 2 en droit. Les questions doivent correspondre au programme officiel du CRFPA.
Utilise la terminologie juridique française officielle et cite les références légales pertinentes (articles de code, jurisprudence).
`;

const JSON_FORMAT_INSTRUCTIONS = `
Tu dois répondre UNIQUEMENT avec un tableau JSON valide, sans aucun texte avant ou après.
Chaque élément du tableau doit respecter EXACTEMENT ce format :
{
  "question": "L'énoncé de la question",
  "options": [
    { "text": "Proposition A", "correct": false },
    { "text": "Proposition B", "correct": true },
    { "text": "Proposition C", "correct": false },
    { "text": "Proposition D", "correct": false }
  ],
  "explanation": "Explication détaillée de la bonne réponse (2-3 phrases)"
}

RÈGLES STRICTES :
- Exactement 4 options par question
- Exactement UNE option correcte (correct: true), les 3 autres à false
- La position de la bonne réponse doit varier aléatoirement
- Les explications doivent être pédagogiques et détaillées
- Pas de markdown, pas de commentaires, JUSTE le tableau JSON
`;

export function buildQCMPrompt(subject, subjectName, count, ficheTopic = null) {
  const context = SUBJECT_CONTEXT[subject] || null;
  const topicLine = ficheTopic
    ? `\nSujet spécifique : ${ficheTopic}\nTOUTES les questions doivent porter EXCLUSIVEMENT sur ce sujet précis, au niveau CRFPA. Ne génère PAS de questions sur d'autres thèmes.\n`
    : '';
  const domainLine = context ? `\nDomaine : ${context}` : '';

  return `Tu es un professeur de droit expert qui prépare des étudiants au CRFPA (examen du barreau français).

${CRFPA_CONTEXT}

Génère ${count} questions à choix multiples (QCM) d'ENTRAÎNEMENT de niveau CRFPA.

Matière : ${subjectName}${domainLine}${topicLine}

Niveau de difficulté : Questions d'entraînement de niveau CRFPA (facile à intermédiaire pour ce cursus).
- Les questions doivent correspondre à ce qu'un étudiant en M1/M2 droit prépare pour le CRFPA
- Couvrir différents aspects du ${ficheTopic ? 'sujet spécifique' : 'programme CRFPA'}
- Tester à la fois les connaissances fondamentales et la compréhension des mécanismes juridiques

Consignes pédagogiques :
- Questions claires, précises, conformes au programme officiel du CRFPA
- Citer les articles de code, la jurisprudence et les textes pertinents dans les questions et explications
- Distracteurs (mauvaises réponses) plausibles : erreurs classiques des candidats au CRFPA
- ${ficheTopic ? `Varier les aspects au sein du sujet "${ficheTopic}"` : 'Varier les thèmes au sein de la matière'}
- Utiliser la terminologie juridique française officielle
- Les explications doivent aider l'étudiant à comprendre POURQUOI c'est la bonne réponse, avec les rappels de cours pertinents

${JSON_FORMAT_INSTRUCTIONS}

Génère exactement ${count} questions.`;
}

export function buildExamenPrompt(subject, subjectName, count, ficheTopic = null) {
  const context = SUBJECT_CONTEXT[subject] || null;
  const topicLine = ficheTopic
    ? `\nSujet spécifique : ${ficheTopic}\nTOUTES les questions doivent porter EXCLUSIVEMENT sur ce sujet précis, au niveau CRFPA. Ne génère PAS de questions sur d'autres thèmes.\n`
    : '';
  const domainLine = context ? `\nDomaine : ${context}` : '';

  return `Tu es un professeur de droit expert qui prépare un EXAMEN BLANC du CRFPA (examen du barreau français).

${CRFPA_CONTEXT}

Génère ${count} questions à choix multiples (QCM) de niveau EXAMEN CRFPA.

Matière : ${subjectName}${domainLine}${topicLine}

Niveau de difficulté : Questions d'EXAMEN de niveau CRFPA (intermédiaire à difficile).
Ces questions doivent simuler un vrai examen du CRFPA :
- Questions du même niveau que celles posées aux épreuves du CRFPA
- Questions à raisonnement juridique qui testent la compréhension des mécanismes (pas uniquement du par cœur)
- Distracteurs subtils reproduisant les erreurs classiques des candidats
- ${ficheTopic ? `Approfondir différents aspects de "${ficheTopic}" au niveau CRFPA` : 'Intégration de plusieurs notions dans une même question quand c\'est pertinent'}
- Quelques questions pièges classiques (confusions jurisprudentielles, exceptions, conditions cumulatives)

Consignes :
- Questions rigoureuses et précises, identiques au style des épreuves du CRFPA
- Citer systématiquement les articles de code, arrêts de principe et textes pertinents
- Les distracteurs doivent être subtils et crédibles pour un étudiant en M1/M2 droit
- Varier les niveaux de difficulté (60% intermédiaire, 40% difficile, toujours dans le cadre CRFPA)
- Utiliser la terminologie juridique exacte du programme officiel
- Les explications doivent être complètes, pédagogiques, avec les rappels de cours utiles

${JSON_FORMAT_INSTRUCTIONS}

Génère exactement ${count} questions.`;
}

/* ===== SYNTHESE PROMPT BUILDERS ===== */

const SYNTHESE_THEMES = [
  'La protection des données personnelles',
  'La responsabilité civile du fait des produits défectueux',
  'Le principe de précaution en droit de l\'environnement',
  'Les limites à la liberté d\'expression sur Internet',
  'L\'indépendance de la justice',
  'Le droit au logement opposable',
  'La responsabilité pénale des personnes morales',
  'Le principe de laïcité',
  'La protection du secret des affaires',
  'Les droits des victimes dans le procès pénal',
  'La réforme du droit des contrats',
  'Le contrôle de constitutionnalité des lois',
];

function getRandomTheme() {
  return SYNTHESE_THEMES[Math.floor(Math.random() * SYNTHESE_THEMES.length)];
}

export { SYNTHESE_THEMES };

export function buildAnalyseDossierPrompt(theme) {
  const t = theme || getRandomTheme();
  return `Tu es un professeur de droit expert préparant des étudiants au CRFPA.
${CRFPA_CONTEXT}
Génère un DOSSIER D'ANALYSE pour une note de synthèse sur : "${t}"
Réponds UNIQUEMENT avec un objet JSON valide :
{"theme":"...","documents":[{"title":"...","type":"legislation|jurisprudence|doctrine|texte-officiel","source":"...","resume":"Résumé 3-5 phrases"}],"analyseAttendue":{"ideesPrincipales":["..."],"contradictions":["..."],"documentsCles":["..."]}}
5 documents variés, 3-4 idées principales, 2 contradictions, 2-3 documents clés. Niveau CRFPA. JUSTE le JSON.`;
}

export function buildPlanSynthesePrompt(theme) {
  const t = theme || getRandomTheme();
  return `Tu es un professeur de droit expert préparant des étudiants au CRFPA.
${CRFPA_CONTEXT}
Génère un EXERCICE D'ÉLABORATION DE PLAN pour une note de synthèse sur : "${t}"
Réponds UNIQUEMENT avec un objet JSON valide :
{"sujet":"...","documents":[{"title":"...","type":"legislation|jurisprudence|doctrine|texte-officiel","source":"...","resume":"Résumé 2-3 phrases"}],"planType":"<b>I. ...</b><br/>A. ...<br/>B. ...<br/><br/><b>II. ...</b><br/>A. ...<br/>B. ...","justification":"Pourquoi ce plan 3-4 phrases","erreursFrequentes":["...","...","..."]}
6 documents, plan 2 parties/2 sous-parties, 3 erreurs fréquentes. JUSTE le JSON.`;
}

export function buildRedactionSynthesePrompt(theme) {
  const t = theme || getRandomTheme();
  return `Tu es un professeur de droit expert préparant des étudiants au CRFPA.
${CRFPA_CONTEXT}
Génère un EXERCICE COMPLET DE RÉDACTION de note de synthèse sur : "${t}"
Réponds UNIQUEMENT avec un objet JSON valide :
{"sujet":"...","consigne":"Consigne détaillée","documents":[{"title":"...","type":"legislation|jurisprudence|doctrine|texte-officiel","source":"...","content":"Contenu détaillé 4-6 phrases"}],"correction":{"plan":"<b>I. ...</b><br/>A. ... (docs 1,3)<br/>B. ... (docs 2,5)<br/><br/><b>II. ...</b><br/>A. ... (docs 4,6)<br/>B. ... (docs 7,8)","pointsCles":["..."],"piegesEviter":["..."],"commentaire":"Commentaire méthodologique"}}
8 documents variés, plan avec docs référencés, 4 points clés, 3 pièges. JUSTE le JSON.`;
}

/* ===== SPECIALITE PROMPT BUILDERS ===== */

const SPECIALITE_NAMES = {
  civil: 'Droit civil',
  affaires: 'Droit des affaires',
  penal: 'Droit pénal',
  administratif: 'Droit administratif',
  social: 'Droit social',
  international: 'Droit international et européen',
  fiscal: 'Droit fiscal',
  obligations: 'Droit des obligations',
};

export function buildSpecialiteGeneratePrompt(specialite, type, theme) {
  const subjectName = SPECIALITE_NAMES[specialite] || specialite;
  const context = SUBJECT_CONTEXT[specialite] || '';
  const themeInstruction = theme ? `\nThème imposé : "${theme}"\n` : '\nChoisis un thème pertinent et actuel dans cette matière.\n';

  const isObligations = specialite === 'obligations';
  const coeffLabel = isObligations ? 'coefficient 2' : 'coefficient 2';
  const epreuveLabel = isObligations ? "l'épreuve de droit des obligations (tronc commun)" : `l'épreuve de spécialité du CRFPA en ${subjectName}`;

  if (type === 'consultation') {
    return `Tu es un professeur de droit expert préparant des étudiants au CRFPA (examen du barreau français).
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
${themeInstruction}
Génère un SUJET DE CONSULTATION JURIDIQUE pour ${epreuveLabel}.

L'épreuve dure 3 heures (${coeffLabel}). La consultation juridique doit être réaliste, de niveau CRFPA, avec :
- Une mise en situation détaillée : un client (personne physique ou morale) expose sa situation
- Un contexte factuel riche avec des éléments chronologiques précis (dates, montants, courriers)
- Une question du client formulée de manière concrète ("Maître, puis-je...?", "Quels sont mes recours ?")
- Des problèmes juridiques imbriqués mobilisant plusieurs notions du programme
- Des éléments stratégiques à évaluer (risques, coûts, délais, chances de succès)

L'étudiant doit rédiger une consultation structurée : analyse juridique de la situation, identification des options, recommandation d'une stratégie motivée.

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "titre": "Titre de la consultation",
  "theme": "Thème principal",
  "specialite": "${specialite}",
  "type": "consultation",
  "faits": "Exposé détaillé de la situation du client (10-15 phrases). Contexte, faits chronologiques, documents mentionnés, demande du client.",
  "questionClient": "La question posée par le client au candidat, formulée de manière concrète et directe, comme un vrai client le ferait.",
  "questions": [
    "Point juridique 1 à analyser dans la consultation",
    "Point juridique 2 à analyser",
    "Point juridique 3 à analyser"
  ],
  "documentsAnnexes": "Le cas échéant, extraits de contrats, courriers ou pièces utiles (peut être null)"
}

JUSTE le JSON, aucun texte avant ou après.`;
  }

  if (type === 'cas-pratique') {
    return `Tu es un professeur de droit expert préparant des étudiants au CRFPA (examen du barreau français).
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
${themeInstruction}
Génère un SUJET DE CAS PRATIQUE pour ${epreuveLabel}.

L'épreuve dure 3 heures (${coeffLabel}). Le cas pratique doit être réaliste, de niveau CRFPA, avec :
- Une mise en situation factuelle détaillée (contexte, personnages, faits chronologiques)
- 3 à 5 questions juridiques précises à traiter
- Des problèmes de droit qui mobilisent plusieurs notions du programme
- Des éléments factuels suffisants pour alimenter le raisonnement juridique

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "titre": "Titre du cas pratique",
  "theme": "Thème principal",
  "specialite": "${specialite}",
  "type": "cas-pratique",
  "faits": "Mise en situation factuelle détaillée (8-15 phrases). Décris le contexte, les personnages, les faits de manière chronologique et précise.",
  "questions": [
    "Question juridique 1 (précise et formulée comme à l'examen)",
    "Question juridique 2",
    "Question juridique 3"
  ],
  "documentsAnnexes": "Le cas échéant, extraits de textes, clauses contractuelles ou données chiffrées utiles (peut être null)"
}

JUSTE le JSON, aucun texte avant ou après.`;
  }

  // Dissertation
  return `Tu es un professeur de droit expert préparant des étudiants au CRFPA (examen du barreau français).
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
${themeInstruction}
Génère un SUJET DE DISSERTATION JURIDIQUE pour ${epreuveLabel}.

L'épreuve dure 3 heures (${coeffLabel}). Le sujet doit être de niveau CRFPA :
- Un intitulé clair et précis invitant à une réflexion juridique structurée
- Éventuellement accompagné d'une citation ou d'un document d'appui
- Mobilisant des connaissances approfondies du programme

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "titre": "Intitulé complet du sujet de dissertation",
  "theme": "Thème principal",
  "specialite": "${specialite}",
  "type": "dissertation",
  "sujet": "L'intitulé complet du sujet tel qu'il apparaîtrait à l'examen",
  "citation": "Citation ou document d'appui éventuel (peut être null)",
  "consigne": "Consigne complémentaire éventuelle (ex: 'Vous traiterez ce sujet à l'aide de vos connaissances et des documents ci-joints'). Peut être null.",
  "documentsAnnexes": "Extraits de textes de loi, décisions de justice ou doctrine fournis en annexe (peut être null)"
}

JUSTE le JSON, aucun texte avant ou après.`;
}

export function buildSpecialiteCorrectPrompt(specialite, type, subject, studentAnswer) {
  const subjectName = SPECIALITE_NAMES[specialite] || specialite;
  const context = SUBJECT_CONTEXT[specialite] || '';

  return `Tu es un correcteur expert du CRFPA (examen du barreau français), exigeant et rigoureux.
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}

Type d'exercice : ${type === 'cas-pratique' ? 'Cas pratique' : type === 'consultation' ? 'Consultation juridique' : 'Dissertation juridique'}

SUJET :
${JSON.stringify(subject)}

COPIE DE L'ÉTUDIANT :
"""
${studentAnswer}
"""

Corrige cette copie avec la rigueur du CRFPA. La notation doit être STRICTE et réaliste (la moyenne au CRFPA est autour de 10/20).

Critères de notation :
${type === 'cas-pratique' ? `
- Qualification juridique des faits (4 pts)
- Identification des règles de droit applicables avec références précises (5 pts)
- Raisonnement juridique et application aux faits (syllogisme) (5 pts)
- Réponse argumentée à chaque question (4 pts)
- Qualité de la rédaction et structure (2 pts)` : `
- Problématique pertinente et clairement formulée (3 pts)
- Plan structuré en 2 parties / 2 sous-parties cohérent (4 pts)
- Connaissances juridiques mobilisées (références précises, jurisprudence, textes) (5 pts)
- Qualité de l'argumentation et de la démonstration (5 pts)
- Introduction et transitions (2 pts)
- Qualité rédactionnelle (1 pt)`}

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "note": <nombre entier de 0 à 20>,
  "appreciation": "Appréciation générale en 2-3 phrases",
  "pointsForts": ["Point fort 1", "Point fort 2", "..."],
  "pointsFaibles": ["Point faible 1", "Point faible 2", "..."],
  "planAttendu": "Le plan attendu pour ce sujet : <b>I. ...</b><br/>A. ...<br/>B. ...<br/><br/><b>II. ...</b><br/>A. ...<br/>B. ...",
  "elementsManquants": ["Élément juridique manquant 1 (avec référence précise : article, arrêt...)", "..."],
  "conseil": "Conseil personnalisé pour progresser (3-4 phrases)"
}

Sois strict mais pédagogique. Note comme un vrai correcteur du CRFPA. JUSTE le JSON.`;
}

/* ===== PROCEDURE PROMPT BUILDERS ===== */

const PROCEDURE_NAMES = {
  'proc-civile': 'Procédure civile',
  'proc-penale': 'Procédure pénale',
  'proc-admin': 'Procédure administrative contentieuse',
};

const PROCEDURE_CODES = {
  'proc-civile': 'Code de procédure civile (CPC), Code de l\'organisation judiciaire (COJ)',
  'proc-penale': 'Code de procédure pénale (CPP)',
  'proc-admin': 'Code de justice administrative (CJA), Code des relations entre le public et l\'administration (CRPA)',
};

export function buildProcedureGeneratePrompt(specialite, type, theme) {
  const subjectName = PROCEDURE_NAMES[specialite] || specialite;
  const context = SUBJECT_CONTEXT[specialite] || '';
  const codes = PROCEDURE_CODES[specialite] || '';
  const themeInstruction = theme ? `\nThème imposé : "${theme}"\n` : '\nChoisis un thème pertinent et actuel dans cette matière de procédure.\n';

  if (type === 'cas-pratique') {
    return `Tu es un professeur de droit expert préparant des étudiants au CRFPA (examen du barreau français).
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
Codes de référence : ${codes}
${themeInstruction}
Génère un SUJET DE CAS PRATIQUE pour l'épreuve de procédure du CRFPA en ${subjectName}.

L'épreuve dure 2 heures (coefficient 2). Le cas pratique doit être réaliste, de niveau CRFPA, avec :
- Une mise en situation factuelle détaillée impliquant des problèmes de PROCÉDURE (pas de fond)
- 3 à 5 questions portant spécifiquement sur la procédure : compétence juridictionnelle, délais, recevabilité, voies de recours, exécution des décisions, incidents de procédure
- Des éléments factuels incluant des DATES précises (pour vérifier le respect des délais)
- Des situations impliquant des choix procéduraux (quelle juridiction saisir, quel recours exercer, quelle voie d'exécution)

Les questions doivent obliger l'étudiant à :
- Citer les articles exacts du ${codes}
- Calculer des délais procéduraux
- Identifier la juridiction compétente
- Vérifier les conditions de recevabilité
- Déterminer les voies de recours appropriées

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "titre": "Titre du cas pratique",
  "theme": "Thème principal de procédure",
  "specialite": "${specialite}",
  "type": "cas-pratique",
  "faits": "Mise en situation factuelle détaillée (8-15 phrases). Inclure des dates précises, le contexte procédural, les actes déjà accomplis, les personnages et leurs qualités.",
  "questions": [
    "Question de procédure 1 (précise, portant sur compétence/délais/recevabilité/voies de recours)",
    "Question de procédure 2",
    "Question de procédure 3"
  ],
  "documentsAnnexes": "Le cas échéant, extraits de décisions, actes de procédure ou textes utiles (peut être null)"
}

JUSTE le JSON, aucun texte avant ou après.`;
  }

  // Consultation juridique
  return `Tu es un professeur de droit expert préparant des étudiants au CRFPA (examen du barreau français).
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
Codes de référence : ${codes}
${themeInstruction}
Génère un SUJET DE CONSULTATION JURIDIQUE pour l'épreuve de procédure du CRFPA en ${subjectName}.

L'épreuve dure 2 heures (coefficient 2). La consultation doit être réaliste, de niveau CRFPA :
- Un client expose une situation concrète impliquant un problème procédural complexe
- Le client a besoin de conseils sur la STRATÉGIE PROCÉDURALE à adopter
- La situation doit impliquer : choix de juridiction, évaluation des délais, conditions de recevabilité, opportunité d'un recours, risques procéduraux
- Des éléments factuels incluant des DATES précises et des actes de procédure déjà intervenus
- La question du client doit être ouverte et appeler une analyse stratégique complète

La consultation doit obliger l'étudiant à :
- Analyser la situation procédurale globale du client
- Identifier toutes les options procédurales disponibles
- Évaluer les chances de succès de chaque option
- Recommander une stratégie motivée avec les références au ${codes}
- Alerter sur les délais et risques d'irrecevabilité

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "titre": "Titre de la consultation",
  "theme": "Thème principal de procédure",
  "specialite": "${specialite}",
  "type": "consultation",
  "situation": "Description détaillée de la situation du client (8-15 phrases). Inclure le contexte factuel, les actes procéduraux déjà accomplis, les dates précises, les décisions déjà rendues.",
  "clientQuestion": "La question précise que le client pose à son avocat sur la stratégie procédurale à adopter",
  "documentsAnnexes": "Le cas échéant, extraits de décisions rendues, actes de procédure ou textes utiles (peut être null)"
}

JUSTE le JSON, aucun texte avant ou après.`;
}

export function buildProcedureCorrectPrompt(specialite, type, subject, studentAnswer) {
  const subjectName = PROCEDURE_NAMES[specialite] || specialite;
  const context = SUBJECT_CONTEXT[specialite] || '';
  const codes = PROCEDURE_CODES[specialite] || '';

  return `Tu es un correcteur expert du CRFPA (examen du barreau français), exigeant et rigoureux, spécialisé en procédure.
${CRFPA_CONTEXT}

Matière : ${subjectName}
Domaine : ${context}
Codes de référence : ${codes}

Type d'exercice : ${type === 'cas-pratique' ? 'Cas pratique de procédure' : 'Consultation juridique en procédure'}

SUJET :
${JSON.stringify(subject)}

COPIE DE L'ÉTUDIANT :
"""
${studentAnswer}
"""

Corrige cette copie avec la rigueur du CRFPA. La notation doit être STRICTE et réaliste.
BARÈME RÉALISTE : la moyenne au CRFPA en procédure est autour de 9-10/20. La majorité des copies obtiennent entre 8 et 13/20. Les notes au-dessus de 15/20 sont exceptionnelles.

PÉNALITÉS OBLIGATOIRES :
- Absence de citation d'articles précis du ${codes} : -3 points minimum
- Erreur de calcul de délai procédural : -2 points par erreur
- Mauvaise juridiction identifiée : -2 points
- Confusion entre voies de recours : -2 points
- Omission d'une condition de recevabilité : -1 point par omission
- Absence de référence jurisprudentielle pertinente : -1 point

Critères de notation :
${type === 'cas-pratique' ? `
- Identification correcte des règles de procédure applicables avec articles EXACTS (5 pts)
- Calcul et respect des délais procéduraux (3 pts)
- Détermination de la compétence juridictionnelle (3 pts)
- Analyse de la recevabilité et des conditions de forme (3 pts)
- Identification des voies de recours appropriées (3 pts)
- Qualité de la rédaction, structure et rigueur (3 pts)` : `
- Analyse complète de la situation procédurale du client (4 pts)
- Identification de toutes les options procédurales avec articles EXACTS (4 pts)
- Évaluation des chances de succès et des risques (3 pts)
- Recommandation stratégique motivée et cohérente (4 pts)
- Alerte sur les délais et conditions de recevabilité (3 pts)
- Qualité rédactionnelle et clarté de la consultation (2 pts)`}

Réponds UNIQUEMENT avec un objet JSON valide :
{
  "note": <nombre entier de 0 à 20>,
  "appreciation": "Appréciation générale en 2-3 phrases",
  "pointsForts": ["Point fort 1", "Point fort 2", "..."],
  "pointsFaibles": ["Point faible 1", "Point faible 2", "..."],
  "planAttendu": "Le plan/structure attendu pour ce sujet : <b>I. ...</b><br/>A. ...<br/>B. ...<br/><br/><b>II. ...</b><br/>A. ...<br/>B. ...",
  "elementsManquants": ["Élément procédural manquant 1 (avec référence précise : article CPC/CPP/CJA, arrêt...)", "..."],
  "conseil": "Conseil personnalisé pour progresser en procédure (3-4 phrases)"
}

Sois strict mais pédagogique. Note comme un vrai correcteur du CRFPA. La plupart des copies doivent obtenir entre 8 et 13/20. JUSTE le JSON.`;
}
