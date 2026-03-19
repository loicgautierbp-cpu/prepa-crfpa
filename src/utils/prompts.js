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
