export const COURS_SYNTHESE = {
  'synthese-methodologie': {
    introduction: "La note de synthèse est une épreuve emblématique du CRFPA, d'une durée de 5 heures, portant sur un dossier volumineux (40 à 80 pages) composé de documents variés (textes législatifs, décisions de justice, articles de doctrine, documents administratifs). L'objectif est de rédiger une note structurée, objective et complète, restituant les informations essentielles du dossier sans apport de connaissances personnelles. La maîtrise de la méthodologie est la clé de la réussite de cette épreuve.",
    readTime: 15,
    sections: [
      {
        title: "La lecture et l'analyse du dossier",
        content: `<p>La première étape, cruciale, consiste à <b>lire et analyser efficacement</b> le dossier dans un temps contraint. Cette phase doit occuper environ <b>2 heures à 2 heures 30</b> sur les 5 heures de l'épreuve.</p>

<h4>A. La lecture exploratoire (20-30 minutes)</h4>
<ul>
  <li><b>Lire l'énoncé du sujet</b> : le sujet précise généralement le destinataire de la note (avocat, magistrat, directeur juridique, etc.) et le thème. Il peut aussi indiquer des questions précises auxquelles la note doit répondre.</li>
  <li><b>Parcourir le sommaire du dossier</b> : identifier la nature de chaque document (loi, arrêt, article de doctrine, rapport, circulaire) et leur ordre chronologique.</li>
  <li><b>Première lecture rapide</b> : survoler l'ensemble des documents pour identifier les grandes thématiques et les enjeux du dossier. Ne pas chercher à tout comprendre à ce stade.</li>
  <li><b>Identifier les documents clés</b> : certains documents sont centraux (loi de référence, arrêt de principe), d'autres sont secondaires ou illustratifs.</li>
</ul>

<h4>B. La lecture approfondie (1h30 à 2h)</h4>
<ul>
  <li><b>Relire chaque document attentivement</b> en surlignant ou soulignant les passages importants. Annoter les marges avec des mots-clés.</li>
  <li><b>Numéroter les documents</b> et noter systématiquement le numéro du document d'origine à côté de chaque information relevée. Cela facilitera le référencement dans la note.</li>
  <li>Pour les <b>textes législatifs</b> : identifier les articles clés, les conditions, les exceptions, les sanctions.</li>
  <li>Pour les <b>décisions de justice</b> : repérer les faits essentiels, la question de droit, la solution retenue et les motifs principaux. Utiliser la technique de la fiche d'arrêt simplifiée.</li>
  <li>Pour les <b>articles de doctrine</b> : identifier la thèse défendue par l'auteur et les arguments principaux.</li>
  <li><b>Repérer les contradictions</b> entre les documents : positions divergentes de la doctrine, évolutions jurisprudentielles, opposition entre la lettre de la loi et son interprétation.</li>
</ul>

<h4>C. Les erreurs à éviter lors de la lecture</h4>
<ul>
  <li>Ne pas consacrer trop de temps à un seul document au détriment des autres.</li>
  <li>Ne pas recopier intégralement des passages : privilégier la reformulation et les mots-clés.</li>
  <li>Ne pas commencer à rédiger avant d'avoir lu l'ensemble du dossier.</li>
  <li>Ne pas ignorer les documents qui semblent marginaux : ils contiennent souvent des nuances importantes.</li>
</ul>

<div class="fiche-key-point">Point clé : La phase de lecture doit être méthodique et structurée. Annoter chaque document avec son numéro et des mots-clés permet de gagner un temps précieux lors de la rédaction. Ne jamais commencer à rédiger sans avoir lu et analysé l'intégralité du dossier.</div>`
      },
      {
        title: "L'élaboration du plan",
        content: `<p>Le <b>plan</b> est l'ossature de la note de synthèse. Il doit être logique, équilibré et couvrir l'ensemble des thématiques du dossier. Cette phase doit prendre environ <b>30 à 45 minutes</b>.</p>

<h4>A. Les principes d'un bon plan</h4>
<ul>
  <li><b>Plan en deux parties, deux sous-parties</b> (I.A/I.B - II.A/II.B) : c'est le format classique et attendu au CRFPA. Trois parties sont acceptées mais plus risquées.</li>
  <li><b>Cohérence logique</b> : les parties doivent s'enchaîner de manière logique. Le passage de la première à la seconde partie doit être naturel et justifié.</li>
  <li><b>Équilibre</b> : les deux parties et les sous-parties doivent être de longueur sensiblement égale. Un déséquilibre important est pénalisé.</li>
  <li><b>Exhaustivité</b> : le plan doit permettre d'intégrer <b>toutes les informations essentielles</b> du dossier. Aucun document ne doit être laissé de côté.</li>
  <li><b>Titres apparents</b> : les intitulés des parties et sous-parties doivent être clairs, précis et informatifs. Ils doivent refléter le contenu de la partie.</li>
</ul>

<h4>B. Les types de plans adaptés</h4>
<p>Plusieurs types de plans peuvent être utilisés selon la nature du dossier :</p>
<ul>
  <li><b>Plan thématique</b> : chaque partie traite d'un aspect différent du sujet (ex. : I. Le régime juridique / II. Le contentieux).</li>
  <li><b>Plan problème/solution</b> : la première partie expose la problématique, la seconde les réponses apportées (ex. : I. Les insuffisances du droit existant / II. Les réformes engagées).</li>
  <li><b>Plan chronologique ou évolutif</b> : adapté lorsque le dossier retrace une évolution (ex. : I. Le cadre juridique traditionnel / II. Les évolutions récentes).</li>
  <li><b>Plan principe/exception</b> : la première partie expose le principe, la seconde les dérogations et limites.</li>
</ul>

<h4>C. La méthode de construction du plan</h4>
<ul>
  <li>Regrouper les informations relevées par <b>thèmes ou idées directrices</b>. Utiliser des couleurs ou des symboles différents pour chaque thème.</li>
  <li>Identifier une <b>problématique</b> qui lie les différents aspects du dossier. La problématique est la question juridique centrale à laquelle la note répond.</li>
  <li>Vérifier que chaque sous-partie est alimentée par <b>au moins deux ou trois documents</b> différents.</li>
  <li>S'assurer qu'aucun document important n'est orphelin (non intégré dans le plan).</li>
</ul>

<div class="fiche-key-point">Point clé : Le plan doit être en deux parties et deux sous-parties, avec des titres apparents et informatifs. Il doit être équilibré et permettre d'exploiter l'ensemble des documents du dossier. Un bon plan est la condition sine qua non d'une note réussie.</div>`
      },
      {
        title: "La rédaction de la note de synthèse",
        content: `<p>La phase de rédaction doit occuper environ <b>2 heures à 2 heures 30</b>. Elle exige rigueur, clarté et objectivité.</p>

<h4>A. L'introduction</h4>
<p>L'introduction de la note de synthèse est structurée mais plus courte qu'une dissertation juridique :</p>
<ul>
  <li><b>Accroche</b> : une phrase d'entrée en matière contextualisant le sujet (actualité législative, jurisprudentielle ou sociale).</li>
  <li><b>Présentation du sujet</b> : définition des termes clés et délimitation du sujet tel qu'il ressort du dossier.</li>
  <li><b>Problématique</b> : la question juridique centrale du dossier, formulée de manière claire.</li>
  <li><b>Annonce du plan</b> : présentation synthétique des deux parties. L'annonce doit être fluide et non mécanique.</li>
  <li>L'introduction ne doit pas excéder <b>15 à 20 lignes</b>.</li>
</ul>

<h4>B. Le corps de la note</h4>
<ul>
  <li><b>Chaque sous-partie</b> doit débuter par une <b>phrase d'introduction</b> annonçant l'idée directrice, puis développer cette idée en s'appuyant sur les documents du dossier.</li>
  <li><b>Référencer les documents</b> : citer systématiquement les sources (ex. : « comme le souligne le Conseil d'État dans son arrêt du... (doc. 5) » ou « selon le rapport du Sénat (doc. 12) »). Le référencement est un critère essentiel de notation.</li>
  <li><b>Reformuler</b> : ne jamais recopier des passages entiers. Synthétiser et reformuler avec ses propres mots, tout en restant fidèle au contenu des documents.</li>
  <li><b>Transitions</b> : assurer des transitions fluides entre les sous-parties (chapeaux introductifs et phrases de transition).</li>
  <li><b>Objectivité</b> : la note de synthèse est un exercice de <b>restitution objective</b>. Ne jamais exprimer d'opinion personnelle, ne jamais prendre parti. Si le dossier présente des positions contradictoires, les exposer toutes avec neutralité.</li>
</ul>

<h4>C. La conclusion</h4>
<ul>
  <li>La conclusion est <b>facultative mais recommandée</b>. Elle doit être brève (5 à 10 lignes).</li>
  <li>Elle synthétise les principaux enseignements du dossier sans répéter le plan.</li>
  <li>Elle peut ouvrir sur une perspective (évolution législative attendue, question pendante) si le dossier le permet.</li>
  <li>Ne jamais introduire d'éléments nouveaux dans la conclusion.</li>
</ul>

<div class="fiche-key-point">Point clé : La note de synthèse exige une objectivité absolue : aucune connaissance personnelle, aucune opinion. Tout doit être puisé dans le dossier et référencé. Le style doit être clair, concis et juridique.</div>`
      },
      {
        title: "Les règles d'or et les erreurs à éviter",
        content: `<p>La réussite de la note de synthèse repose autant sur le respect de certaines règles fondamentales que sur l'évitement d'erreurs récurrentes.</p>

<h4>A. Les règles d'or</h4>
<ul>
  <li><b>Ne jamais apporter de connaissances extérieures au dossier</b> : c'est la règle absolue de la note de synthèse. Même si vous savez que le dossier est incomplet ou que la jurisprudence a évolué depuis, vous ne devez utiliser que les informations contenues dans les documents fournis.</li>
  <li><b>Exploiter tous les documents</b> : chaque document doit être utilisé au moins une fois dans la note. Un document non exploité est un manque pénalisé par les correcteurs.</li>
  <li><b>Respecter la longueur attendue</b> : entre 4 et 6 pages manuscrites (ou selon les consignes de l'épreuve). Une note trop courte est incomplète ; une note trop longue n'est pas synthétique.</li>
  <li><b>Gérer le temps rigoureusement</b> : lecture (2h-2h30), plan (30-45 min), rédaction (2h-2h30), relecture (15 min). Ne jamais sacrifier la relecture.</li>
  <li><b>Soigner la présentation</b> : écriture lisible, plan apparent (numérotation I/A/B - II/A/B), sauts de ligne entre les parties, paragraphes aérés.</li>
</ul>

<h4>B. Les erreurs les plus fréquentes</h4>
<ul>
  <li><b>La paraphrase</b> : recopier les documents au lieu de les synthétiser. La note doit démontrer une capacité d'analyse et de reformulation.</li>
  <li><b>Le hors-sujet</b> : s'éloigner de la problématique du dossier ou traiter des aspects non couverts par les documents.</li>
  <li><b>L'absence de référencement</b> : ne pas indiquer de quels documents proviennent les informations citées.</li>
  <li><b>Le plan catalogue</b> : un plan qui se contente de résumer les documents les uns après les autres, sans les croiser ni les organiser autour d'idées directrices.</li>
  <li><b>Le déséquilibre</b> : une partie beaucoup plus longue que l'autre, ou des sous-parties inégales.</li>
  <li><b>L'ajout de connaissances personnelles</b> : citer des arrêts, des textes ou des arguments qui ne figurent pas dans le dossier.</li>
  <li><b>La prise de position</b> : exprimer une opinion sur la question traitée, même subtilement.</li>
  <li><b>L'oubli de documents</b> : ne pas exploiter un ou plusieurs documents du dossier.</li>
</ul>

<h4>C. Les critères de notation</h4>
<p>Les correcteurs évaluent généralement :</p>
<ul>
  <li>La qualité du <b>plan</b> (cohérence, équilibre, pertinence des intitulés) ;</li>
  <li>L'<b>exhaustivité</b> (exploitation de tous les documents) ;</li>
  <li>La <b>fidélité</b> au contenu des documents (pas de déformation, pas d'ajout) ;</li>
  <li>La <b>qualité de la synthèse</b> (capacité à croiser les documents, à dégager les idées essentielles) ;</li>
  <li>La <b>qualité rédactionnelle</b> (style, orthographe, syntaxe, référencement) ;</li>
  <li>Le respect du <b>format</b> (longueur, présentation).</li>
</ul>

<div class="fiche-key-point">Point clé : La note de synthèse n'est ni une dissertation, ni un résumé document par document. C'est un exercice de synthèse transversale qui exige d'exploiter tous les documents, de les croiser autour d'un plan structuré, et de restituer objectivement les informations sans aucun apport personnel.</div>`
      },
      {
        title: "L'entraînement et la gestion du temps le jour J",
        content: `<p>La réussite de la note de synthèse repose en grande partie sur la <b>préparation en amont</b> et la <b>gestion rigoureuse du temps</b> le jour de l'épreuve. Les 5 heures imparties ne laissent aucune place à l'improvisation.</p>

<h4>A. Le planning détaillé des 5 heures</h4>
<p>Un découpage précis du temps est indispensable et doit être intériorisé par l'entraînement :</p>
<ul>
  <li><b>Lecture et analyse du dossier (1h30)</b> : lecture exploratoire (20 min), puis lecture approfondie avec surlignage, annotation et numérotation des informations clés (1h10). À la fin de cette phase, toutes les informations essentielles doivent être identifiées et classées par thèmes.</li>
  <li><b>Élaboration du plan (1h)</b> : regroupement des informations par idées directrices, formulation de la problématique, construction du plan en deux parties et deux sous-parties, vérification de l'équilibre et de l'exhaustivité, rédaction des intitulés. Le plan détaillé sert de feuille de route pour la rédaction.</li>
  <li><b>Rédaction (2h)</b> : rédaction de l'introduction (15 min), du corps de la note (1h30) et de la conclusion (15 min). Le rythme doit être soutenu et régulier. Ne pas revenir en arrière ni chercher à peaufiner excessivement un passage.</li>
  <li><b>Relecture (30 min)</b> : vérification de l'orthographe, de la syntaxe, de la cohérence du plan, du référencement des documents. Corriger les coquilles et améliorer les transitions si nécessaire.</li>
</ul>

<h4>B. Techniques de gestion du stress</h4>
<ul>
  <li><b>Respiration contrôlée</b> : avant le début de l'épreuve et en cas de blocage, pratiquer des respirations profondes (inspirer 4 secondes, expirer 6 secondes) pour réduire l'anxiété et retrouver sa concentration.</li>
  <li><b>Ancrage temporel</b> : noter l'heure de début de chaque phase sur le brouillon et s'y tenir. Se fixer des micro-objectifs (par exemple : « à 10h30, mon plan doit être terminé »).</li>
  <li><b>Accepter l'imperfection</b> : la note de synthèse n'exige pas la perfection. Un plan correct avec un contenu complet vaut mieux qu'un plan parfait inachevé.</li>
</ul>

<h4>C. Checklist finale avant de rendre la copie</h4>
<ul>
  <li>Tous les documents du dossier sont-ils référencés au moins une fois ?</li>
  <li>Le plan est-il apparent avec des titres clairs (I/A/B - II/A/B) ?</li>
  <li>L'introduction contient-elle une problématique et une annonce de plan ?</li>
  <li>Aucune connaissance personnelle n'a-t-elle été ajoutée ?</li>
  <li>La copie est-elle lisible et les pages numérotées ?</li>
</ul>

<h4>D. Conseils d'anciens admis</h4>
<ul>
  <li><b>S'entraîner régulièrement</b> : réaliser au minimum 5 à 10 notes de synthèse complètes en conditions d'examen avant le jour J. La vitesse et la méthode s'acquièrent par la répétition.</li>
  <li><b>Chronométrer chaque phase</b> : lors des entraînements, respecter strictement le découpage temporel pour créer des automatismes.</li>
  <li><b>Travailler à partir de dossiers réels</b> : utiliser les annales des sessions précédentes du CRFPA pour se familiariser avec la longueur et la complexité des dossiers.</li>
  <li><b>Se faire corriger</b> : soumettre ses notes à des correcteurs expérimentés ou à des groupes de travail pour identifier ses points faibles et progresser.</li>
</ul>

<div class="fiche-key-point">Point clé : La gestion du temps est déterminante. Le planning des 5 heures doit être préparé et automatisé par l'entraînement : lecture 1h30, plan 1h, rédaction 2h, relecture 30 min. Ne jamais sacrifier la relecture ni se laisser absorber par un seul document.</div>`
      }
    ]
  },
};
