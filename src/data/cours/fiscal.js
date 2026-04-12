export const COURS_FISCAL = {
  'fiscal-ir': {
    introduction: "L'impôt sur le revenu (IR) est un impôt direct, annuel, déclaratif et progressif, qui frappe l'ensemble des revenus des personnes physiques domiciliées en France. Régi par le Code général des impôts (CGI, art. 1 A et s.), il constitue l'un des piliers du système fiscal français et fait l'objet de questions récurrentes au CRFPA.",
    readTime: 25,
    sections: [
      {
        title: "Le champ d'application de l'IR : personnes imposables et territorialité",
        content: `<p><b>Les personnes imposables :</b></p>
        <ul>
          <li>L'IR frappe les <b>personnes physiques</b> (les personnes morales sont en principe soumises à l'IS, sauf option ou transparence fiscale).</li>
          <li>L'unité d'imposition est le <b>foyer fiscal</b> : ensemble des personnes dont les revenus font l'objet d'une imposition commune. Comprend :
            <ul>
              <li>Les époux ou partenaires de PACS (imposition commune obligatoire, sauf exception la première année du mariage/PACS ou en cas de séparation).</li>
              <li>Les personnes à charge : enfants mineurs, enfants majeurs rattachés (sur option, jusqu'à 21 ans, ou 25 ans si étudiants), personnes invalides vivant au foyer.</li>
            </ul>
          </li>
          <li>Le <b>quotient familial</b> : le revenu imposable est divisé par un nombre de parts correspondant à la composition du foyer (1 part par adulte, 0,5 part par personne à charge pour les deux premières, 1 part à partir de la troisième). Ce mécanisme est plafonné (art. 197 CGI) : l'avantage fiscal ne peut excéder un plafond par demi-part supplémentaire (environ 1 759 euros pour les revenus 2024).</li>
        </ul>
        <p><b>La territorialité (art. 4 A et 4 B CGI) :</b></p>
        <ul>
          <li><b>Personnes domiciliées en France</b> : imposées sur l'<b>ensemble de leurs revenus mondiaux</b> (obligation fiscale illimitée), sous réserve des conventions fiscales internationales.</li>
          <li><b>Critères du domicile fiscal</b> (art. 4 B CGI, critères alternatifs) :
            <ul>
              <li>Le foyer ou le lieu de séjour principal en France.</li>
              <li>L'activité professionnelle principale exercée en France (sauf preuve contraire).</li>
              <li>Le centre des intérêts économiques en France.</li>
            </ul>
          </li>
          <li><b>Personnes non domiciliées en France</b> : imposées uniquement sur leurs <b>revenus de source française</b> (obligation fiscale limitée – art. 164 B CGI), sous réserve des conventions internationales.</li>
          <li>Les <b>conventions fiscales bilatérales</b> (plus de 120 signées par la France) attribuent le droit d'imposer à l'un ou l'autre État et prévoient des mécanismes d'élimination de la double imposition (crédit d'impôt ou exemption).</li>
        </ul>`
      },
      {
        title: "Les catégories de revenus imposables",
        content: `<p>L'IR est un impôt <b>cédulaire synthétique</b> : les revenus sont classés par catégories, chacune obéissant à des règles propres de détermination, puis sont additionnés pour former le <b>revenu brut global</b>.</p>
        <p><b>Les huit catégories de revenus :</b></p>
        <ul>
          <li><b>1. Traitements, salaires, pensions et rentes viagères (TS)</b> (art. 79 et s. CGI) :
            <ul>
              <li>Rémunérations perçues dans le cadre d'un contrat de travail ou assimilé.</li>
              <li><b>Déduction forfaitaire</b> de 10 % pour frais professionnels (plafonnée), ou option pour les <b>frais réels</b> (justifiés).</li>
              <li>Inclut les avantages en nature, les indemnités de licenciement (pour la fraction imposable), les pensions de retraite (abattement de 10 %).</li>
            </ul>
          </li>
          <li><b>2. Bénéfices industriels et commerciaux (BIC)</b> (art. 34 et s. CGI) :
            <ul>
              <li>Revenus des activités commerciales, industrielles et artisanales exercées à titre individuel.</li>
              <li>Régimes : <b>micro-BIC</b> (CA < seuils, abattement forfaitaire de 50 % ou 71 %), <b>régime réel simplifié</b>, <b>régime réel normal</b>.</li>
            </ul>
          </li>
          <li><b>3. Bénéfices non commerciaux (BNC)</b> (art. 92 et s. CGI) :
            <ul>
              <li>Revenus des professions libérales, des charges et offices, et des activités non classées ailleurs.</li>
              <li>Régimes : <b>micro-BNC</b> (recettes < 77 700 euros, abattement de 34 %), <b>déclaration contrôlée</b>.</li>
            </ul>
          </li>
          <li><b>4. Bénéfices agricoles (BA)</b> (art. 63 et s. CGI) :
            <ul>
              <li>Revenus de l'exploitation agricole.</li>
              <li>Régimes : micro-BA, réel simplifié, réel normal.</li>
            </ul>
          </li>
          <li><b>5. Revenus fonciers (RF)</b> (art. 14 et s. CGI) :
            <ul>
              <li>Revenus tirés de la location d'immeubles nus (non meublés).</li>
              <li>Régimes : <b>micro-foncier</b> (revenus bruts < 15 000 euros, abattement de 30 %), <b>régime réel</b> (déduction des charges effectives : intérêts d'emprunt, travaux, assurance, taxes foncières).</li>
              <li>Possibilité de <b>déficit foncier</b> imputable sur le revenu global dans la limite de 10 700 euros par an (art. 156-I-3° CGI).</li>
            </ul>
          </li>
          <li><b>6. Rémunérations de certains dirigeants de sociétés (art. 62 CGI)</b> :
            <ul>
              <li>Gérants majoritaires de SARL, associés de SNC, gérants commandités de SCA.</li>
              <li>Régime aligné sur celui des traitements et salaires (déduction forfaitaire de 10 % ou frais réels).</li>
            </ul>
          </li>
          <li><b>7. Revenus de capitaux mobiliers (RCM)</b> (art. 108 et s. CGI) :
            <ul>
              <li>Dividendes, intérêts, produits de placement à revenu fixe.</li>
              <li>Soumis au <b>prélèvement forfaitaire unique (PFU)</b> de 30 % (12,8 % d'IR + 17,2 % de prélèvements sociaux – art. 200 A CGI), ou option globale pour le <b>barème progressif</b> (avec abattement de 40 % pour les dividendes).</li>
            </ul>
          </li>
          <li><b>8. Plus-values des particuliers</b> (art. 150-0 A et s. CGI) :
            <ul>
              <li>Plus-values de cession de valeurs mobilières : PFU de 30 %, ou option pour le barème progressif (avec abattements pour durée de détention sous l'ancien régime, pour les titres acquis avant 2018).</li>
              <li>Plus-values immobilières (art. 150 U et s. CGI) : imposition forfaitaire de 19 % + 17,2 % de prélèvements sociaux, avec abattements pour durée de détention (exonération totale après 22 ans pour l'IR et 30 ans pour les prélèvements sociaux). Exonération de la résidence principale.</li>
            </ul>
          </li>
        </ul>`
      },
      {
        title: "La détermination du revenu imposable et le calcul de l'impôt",
        content: `<p><b>Du revenu brut global au revenu net imposable :</b></p>
        <ol>
          <li><b>Revenu brut global</b> = somme algébrique des revenus nets catégoriels (positifs et négatifs).</li>
          <li><b>Revenu net global</b> = revenu brut global - charges déductibles du revenu global (art. 156 et s. CGI) : CSG déductible (6,8 % sur les revenus du patrimoine), pensions alimentaires versées, cotisations d'épargne retraite (PERP, PER), etc.</li>
          <li><b>Revenu net imposable</b> = revenu net global - abattements spéciaux (personnes âgées de plus de 65 ans ou invalides, sous conditions de revenus).</li>
        </ol>
        <p><b>Le calcul de l'impôt (art. 197 CGI) :</b></p>
        <ol>
          <li><b>Division du revenu imposable par le nombre de parts</b> (quotient familial) pour obtenir le quotient.</li>
          <li><b>Application du barème progressif</b> au quotient (tranches pour les revenus 2024, imposition 2025) :
            <ul>
              <li>Jusqu'à 11 294 euros : 0 %</li>
              <li>De 11 295 à 28 797 euros : 11 %</li>
              <li>De 28 798 à 82 341 euros : 30 %</li>
              <li>De 82 342 à 177 106 euros : 41 %</li>
              <li>Au-delà de 177 106 euros : 45 %</li>
            </ul>
          </li>
          <li><b>Multiplication du résultat par le nombre de parts</b> pour obtenir l'impôt brut.</li>
          <li><b>Application du plafonnement du quotient familial</b>.</li>
          <li><b>Application de la décote</b> (art. 197-I-4° CGI) : mécanisme de lissage pour les contribuables modestes.</li>
          <li><b>Imputation des réductions et crédits d'impôt</b>.</li>
        </ol>
        <p><b>La contribution exceptionnelle sur les hauts revenus (CEHR)</b> (art. 223 sexies CGI) :</p>
        <ul>
          <li>3 % sur la fraction du revenu fiscal de référence comprise entre 250 001 et 500 000 euros (célibataires) ou entre 500 001 et 1 000 000 euros (couples).</li>
          <li>4 % au-delà de 500 000 euros (célibataires) ou 1 000 000 euros (couples).</li>
          <li>Mécanisme de lissage pour les revenus exceptionnels.</li>
        </ul>`
      },
      {
        title: "Les réductions et crédits d'impôt, le prélèvement à la source",
        content: `<p><b>Principales réductions d'impôt :</b></p>
        <ul>
          <li><b>Dons aux organismes d'intérêt général</b> (art. 200 CGI) : réduction de 66 % des versements, dans la limite de 20 % du revenu imposable. Taux porté à 75 % pour les dons aux organismes d'aide aux personnes en difficulté (dans la limite d'un plafond, environ 1 000 euros).</li>
          <li><b>Investissements locatifs</b> : dispositifs Pinel (réduction de 12 %, 18 % ou 21 % selon la durée d'engagement – en extinction progressive), Denormandie, Malraux (22 % ou 30 % selon le secteur).</li>
          <li><b>Emploi d'un salarié à domicile</b> (art. 199 sexdecies CGI) : crédit d'impôt de 50 % des dépenses, dans la limite de 12 000 euros par an (majorations possibles).</li>
          <li><b>Frais de garde d'enfants</b> : crédit d'impôt de 50 % des dépenses, dans la limite de 3 500 euros par enfant.</li>
          <li><b>Investissement au capital de PME</b> (art. 199 terdecies-0 A CGI, dispositif « IR-PME ») : réduction de 25 % des versements, dans la limite de 50 000 euros (célibataire) ou 100 000 euros (couple).</li>
        </ul>
        <p><b>Le plafonnement global des niches fiscales</b> (art. 200-0 A CGI) :</p>
        <ul>
          <li>Le total des avantages fiscaux est plafonné à <b>10 000 euros par an</b> par foyer fiscal (majoré à 18 000 euros pour certains investissements outre-mer et le Sofica).</li>
          <li>Certains avantages échappent au plafonnement : dons, monuments historiques, emploi à domicile (crédit d'impôt).</li>
        </ul>
        <p><b>Le prélèvement à la source (PAS)</b> (art. 204 A et s. CGI) :</p>
        <ul>
          <li>En vigueur depuis le <b>1er janvier 2019</b>.</li>
          <li>L'impôt est prélevé directement sur les revenus au moment de leur perception : <b>retenue à la source</b> pour les salaires, pensions et revenus de remplacement (opérée par l'employeur ou l'organisme versant), <b>acompte</b> pour les revenus fonciers, BIC, BNC, BA (prélevé par l'administration fiscale).</li>
          <li><b>Taux</b> : taux personnalisé (calculé sur la base de la dernière déclaration), taux individualisé (entre conjoints) ou taux neutre (par défaut, pour les primo-déclarants ou en cas de choix de confidentialité vis-à-vis de l'employeur).</li>
          <li>La <b>déclaration annuelle</b> reste obligatoire pour régulariser l'impôt effectivement dû.</li>
          <li>Mécanisme de <b>modulation</b> : le contribuable peut demander la modulation de son taux en cours d'année en cas de variation significative de revenus (hausse ou baisse).</li>
        </ul>`
      },
      {
        title: "Le contrôle fiscal et les obligations déclaratives",
        content: `<p><b>Les obligations déclaratives :</b></p>
        <ul>
          <li><b>Déclaration annuelle des revenus</b> (art. 170 CGI) : chaque foyer fiscal doit souscrire une déclaration d'ensemble des revenus. Depuis 2019, la déclaration en ligne est obligatoire (sauf si le contribuable n'est pas en mesure de la souscrire en ligne).</li>
          <li><b>Déclaration automatique</b> (art. 171 CGI) : pour les foyers dont l'administration dispose de toutes les informations nécessaires, une déclaration préremplie est réputée exacte si le contribuable ne la modifie pas.</li>
          <li><b>Sanctions pour défaut ou retard de déclaration</b> :
            <ul>
              <li>Majoration de 10 % en cas de dépôt tardif spontané (art. 1728-1° CGI).</li>
              <li>Majoration de 20 % après mise en demeure.</li>
              <li>Majoration de 40 % en cas de découverte d'une activité occulte ou de défaut de déclaration après mise en demeure restée sans effet.</li>
              <li>Majoration de 80 % en cas de fraude fiscale.</li>
            </ul>
          </li>
        </ul>
        <p><b>Le contrôle fiscal :</b></p>
        <ul>
          <li><b>Contrôle sur pièces</b> (art. L. 10 LPF) : vérification des déclarations à partir des éléments dont dispose l'administration, sans déplacement.</li>
          <li><b>Examen de comptabilité</b> (art. L. 13 G LPF) : contrôle à distance de la comptabilité informatisée des entreprises.</li>
          <li><b>Examen contradictoire de la situation fiscale personnelle (ESFP)</b> (art. L. 12 LPF) : vérification approfondie de la cohérence entre les revenus déclarés et la situation patrimoniale du contribuable. Durée maximale d'un an (prorogeable). Obligation d'un débat oral et contradictoire.</li>
          <li><b>Droit de communication</b> (art. L. 81 et s. LPF) : l'administration peut obtenir des renseignements auprès de tiers (banques, employeurs, notaires, etc.).</li>
        </ul>
        <p><b>Les garanties du contribuable :</b></p>
        <ul>
          <li><b>Prescription</b> : le droit de reprise de l'administration s'exerce jusqu'à la fin de la <b>3e année</b> suivant celle au titre de laquelle l'imposition est due (art. L. 169 LPF). Délai porté à 10 ans en cas de fraude, d'activité occulte ou de comptes étrangers non déclarés.</li>
          <li><b>Procédure contradictoire</b> : l'administration doit notifier les rectifications par une <b>proposition de rectification</b> motivée (art. L. 57 LPF). Le contribuable dispose d'un délai de 30 jours (prorogé à 60 jours sur demande) pour présenter ses observations.</li>
          <li><b>Recours hiérarchique et commission départementale</b> : le contribuable peut saisir le supérieur hiérarchique du vérificateur et, en cas de désaccord persistant, la commission départementale des impôts directs et des taxes sur le chiffre d'affaires (CDI) ou la commission des impôts directs et des taxes sur le chiffre d'affaires (art. L. 59 A LPF).</li>
          <li><b>Réclamation contentieuse</b> (art. L. 190 LPF) : préalable obligatoire avant toute saisine du tribunal administratif. Délai : 31 décembre de la 2e année suivant la mise en recouvrement.</li>
        </ul>`
      }
    ]
  },

  'fiscal-is': {
    introduction: "L'impôt sur les sociétés (IS) est un impôt direct qui frappe les bénéfices réalisés par les sociétés de capitaux et certaines personnes morales. Régi par les articles 205 et suivants du Code général des impôts (CGI), il constitue avec l'IR l'un des deux grands impôts sur les revenus du système fiscal français. Sa maîtrise est essentielle au CRFPA, tant pour l'épreuve de droit fiscal que pour la pratique du droit des affaires.",
    readTime: 22,
    sections: [
      {
        title: "Le champ d'application et la territorialité de l'IS",
        content: `<p>L'IS s'applique obligatoirement ou sur option à certaines personnes morales et obéit à des règles de territorialité spécifiques.</p>

<h4>A. Les personnes morales soumises obligatoirement à l'IS</h4>
<ul>
  <li><b>Sociétés de capitaux</b> (art. 206-1 CGI) : SA, SAS, SASU, SCA sont soumises de plein droit à l'IS, quelle que soit leur activité.</li>
  <li><b>SARL</b> : soumises de plein droit à l'IS (art. 206-1 CGI), sauf l'EURL dont l'associé unique est une personne physique (soumise à l'IR, sauf option pour l'IS).</li>
  <li><b>Autres entités</b> : les établissements publics à caractère industriel et commercial, les associations réalisant des activités lucratives (art. 206-1 bis CGI), les sociétés civiles ayant une activité commerciale ou industrielle.</li>
</ul>

<h4>B. Les personnes morales soumises sur option à l'IS</h4>
<ul>
  <li>Les <b>sociétés de personnes</b> (SNC, sociétés civiles, EURL) peuvent opter pour l'IS (art. 206-3 CGI). L'option est en principe irrévocable, sauf pour les sociétés créées depuis moins de cinq ans qui peuvent renoncer dans les cinq premières années (art. 239-1, al. 4 CGI, issu de la loi de finances pour 2019).</li>
  <li>L'<b>entrepreneur individuel</b> peut opter pour l'assimilation à une EURL et donc pour l'IS (art. 1655 sexies CGI).</li>
</ul>

<h4>C. La territorialité de l'IS (art. 209-I CGI)</h4>
<p>L'IS français ne frappe que les <b>bénéfices réalisés dans les entreprises exploitées en France</b> :</p>
<ul>
  <li>Principe de <b>territorialité</b> : seuls les bénéfices provenant d'opérations effectuées dans des <b>établissements situés en France</b> sont imposables en France (art. 209-I, al. 1 CGI).</li>
  <li>Une société française qui exploite un établissement stable à l'étranger n'est pas imposée en France sur les bénéfices de cet établissement (sous réserve des conventions fiscales).</li>
  <li>Inversement, une société étrangère disposant d'un <b>établissement stable</b> en France est soumise à l'IS français sur les bénéfices de cet établissement.</li>
  <li>Les <b>conventions fiscales bilatérales</b> attribuent le droit d'imposer les bénéfices d'entreprise à l'État de l'établissement stable (art. 7 du modèle OCDE).</li>
</ul>

<div class="fiche-key-point">Point clé : L'IS obéit au principe de territorialité (art. 209-I CGI) : seuls les bénéfices des entreprises exploitées en France sont imposables, contrairement à l'IR qui suit le principe de mondialité pour les résidents. Les conventions fiscales attribuent le droit d'imposer à l'État de l'établissement stable.</div>`
      },
      {
        title: "La détermination du résultat fiscal",
        content: `<p>Le résultat fiscal soumis à l'IS est déterminé à partir du <b>résultat comptable</b>, corrigé par des retraitements fiscaux (réintégrations et déductions).</p>

<h4>A. Le principe de connexion comptabilité-fiscalité</h4>
<p>Le résultat fiscal est calculé à partir du résultat comptable (art. 38-1 CGI). Le bénéfice imposable est le bénéfice net, déterminé d'après les résultats d'ensemble des opérations de toute nature effectuées par l'entreprise.</p>

<h4>B. Les produits imposables</h4>
<ul>
  <li><b>Produits d'exploitation</b> : chiffre d'affaires, prestations de services, production stockée et immobilisée.</li>
  <li><b>Produits financiers</b> : intérêts, dividendes (sous réserve du régime mère-fille), gains de change.</li>
  <li><b>Produits exceptionnels</b> : plus-values de cession d'actifs, subventions, indemnités d'assurance.</li>
  <li><b>Règle de l'engagement</b> : les produits sont imposables à la date de leur <b>acquisition définitive</b> (créances acquises), indépendamment de leur encaissement effectif (comptabilité d'engagement, art. 38-2 bis CGI).</li>
</ul>

<h4>C. Les charges déductibles (art. 39 CGI)</h4>
<p>Les charges sont déductibles si elles remplissent les conditions suivantes :</p>
<ul>
  <li><b>Engagement dans l'intérêt de l'entreprise</b> : la charge doit correspondre à un acte de gestion normale. L'acte anormal de gestion est un acte contraire à l'intérêt de l'entreprise (CE, 27 juillet 1984, <i>SA Renfort Service</i>).</li>
  <li><b>Correspondre à une charge effective</b> : la dépense doit être réelle et justifiée par des pièces probantes.</li>
  <li><b>Être rattachée à l'exercice</b> : les charges sont déductibles de l'exercice au cours duquel elles sont engagées (principe d'indépendance des exercices).</li>
  <li><b>Ne pas être exclue par une disposition légale</b> : sont notamment non déductibles les amendes et pénalités (art. 39-2 CGI), les dépenses somptuaires (chasse, pêche, résidences de plaisance, art. 39-4 CGI), la fraction excessive des rémunérations.</li>
</ul>

<h4>D. Les amortissements et provisions</h4>
<ul>
  <li><b>Amortissements</b> (art. 39-1-2° CGI) : constatation comptable de la dépréciation des immobilisations. Amortissement linéaire (principe) ou dégressif (sur option pour certains biens, art. 39 A CGI). Le suramortissement (art. 39 decies CGI) permet une déduction supplémentaire pour certains investissements productifs.</li>
  <li><b>Provisions</b> (art. 39-1-5° CGI) : déductibles si elles sont constituées en vue de faire face à des pertes ou charges <b>nettement précisées</b>, <b>probables</b> et résultant d'événements en cours à la clôture de l'exercice. Conditions jurisprudentielles strictes.</li>
</ul>

<div class="fiche-key-point">Point clé : Le résultat fiscal part du résultat comptable, corrigé par des retraitements. L'acte anormal de gestion rend la charge non déductible. Les provisions ne sont déductibles que si elles correspondent à des pertes ou charges nettement précisées et probables à la clôture de l'exercice.</div>`
      },
      {
        title: "Les taux et le calcul de l'IS",
        content: `<p>Le calcul de l'IS repose sur l'application d'un taux au résultat fiscal, après imputation éventuelle des déficits antérieurs.</p>

<h4>A. Le taux normal de l'IS</h4>
<ul>
  <li>Le taux normal est fixé à <b>25 %</b> depuis les exercices ouverts à compter du 1er janvier 2022 (art. 219-I CGI), achevant la trajectoire de baisse initiée par la loi de finances pour 2018 (33,1/3 % historiquement).</li>
  <li>Le taux réduit de <b>15 %</b> s'applique aux PME (art. 219-I-b CGI) : sociétés dont le chiffre d'affaires est inférieur à <b>10 millions d'euros</b> et dont le capital est entièrement libéré et détenu à 75 % au moins par des personnes physiques. Ce taux réduit s'applique sur la fraction du bénéfice inférieure à <b>42 500 euros</b>.</li>
</ul>

<h4>B. La contribution sociale sur les bénéfices (CSB)</h4>
<ul>
  <li>Les sociétés dont le chiffre d'affaires excède <b>7 630 000 euros</b> sont redevables d'une <b>contribution sociale de 3,3 %</b> de l'IS (art. 235 ter ZC CGI), après un abattement de 763 000 euros.</li>
</ul>

<h4>C. Le report des déficits</h4>
<p>Les déficits fiscaux peuvent être reportés de deux manières :</p>
<ul>
  <li><b>Report en avant</b> (art. 209-I, al. 3 CGI) : les déficits sont reportables sur les bénéfices des exercices suivants <b>sans limitation de durée</b>. Toutefois, le déficit imputable sur le bénéfice d'un exercice est plafonné à <b>1 million d'euros + 50 %</b> du bénéfice excédant ce seuil.</li>
  <li><b>Report en arrière</b> (carry-back, art. 220 quinquies CGI) : sur option, le déficit d'un exercice peut être reporté sur le bénéfice du <b>seul exercice précédent</b>, dans la limite de <b>1 million d'euros</b>. Il naît une créance sur le Trésor (remboursable au bout de 5 ans ou imputable sur l'IS des exercices suivants).</li>
</ul>

<h4>D. Le paiement de l'IS : acomptes et liquidation</h4>
<ul>
  <li>L'IS est payé par <b>quatre acomptes trimestriels</b> (15 mars, 15 juin, 15 septembre, 15 décembre) calculés sur la base du résultat de l'exercice précédent (art. 1668 CGI).</li>
  <li>Le <b>solde</b> est versé lors du dépôt du relevé de solde (imprimé 2572), au plus tard le 15 du 4e mois suivant la clôture de l'exercice (15 mai pour un exercice clos au 31 décembre).</li>
  <li>Les sociétés dont le chiffre d'affaires excède <b>250 millions d'euros</b> sont soumises à un acompte majoré (dernier acompte).</li>
  <li>Les PME dont le chiffre d'affaires est inférieur à 10 millions d'euros sont dispensées d'acomptes la première année d'exercice.</li>
</ul>

<div class="fiche-key-point">Point clé : Le taux normal de l'IS est de 25 % depuis 2022, avec un taux réduit de 15 % pour les PME (jusqu'à 42 500 euros de bénéfice). Les déficits se reportent en avant sans limitation de durée mais avec un plafond annuel (1 M euros + 50 % de l'excédent). Le carry-back est limité à 1 million d'euros sur le seul exercice précédent.</div>`
      },
      {
        title: "Les régimes spéciaux : mère-fille et intégration fiscale",
        content: `<p>Le droit fiscal des sociétés prévoit des régimes spéciaux permettant d'atténuer les effets de la double imposition au sein des groupes de sociétés.</p>

<h4>A. Le régime mère-fille (art. 145 et 216 CGI)</h4>
<p>Le régime mère-fille permet d'éviter la <b>double imposition économique</b> des dividendes au sein d'un groupe. Les dividendes perçus par la société mère sont exonérés d'IS, sous réserve d'une quote-part de frais et charges.</p>
<ul>
  <li><b>Conditions d'application</b> (art. 145 CGI) :
    <ul>
      <li>La société mère doit détenir au moins <b>5 % du capital</b> de la filiale (ou 2,5 % dans certains cas).</li>
      <li>Les titres doivent être conservés pendant au moins <b>2 ans</b> (ou engagement de conservation).</li>
      <li>Les titres doivent être inscrits en compte nominatif ou déposés dans un établissement agréé.</li>
      <li>La société mère et la filiale doivent être soumises à l'IS (ou à un impôt équivalent pour les filiales étrangères).</li>
    </ul>
  </li>
  <li><b>Effets</b> (art. 216 CGI) : les dividendes reçus sont exonérés d'IS, mais une <b>quote-part de frais et charges de 5 %</b> du montant des dividendes (produits nets) est réintégrée dans le résultat imposable de la société mère. En pratique, seuls 5 % des dividendes sont effectivement taxés.</li>
  <li>Pour les <b>sociétés membres d'un groupe intégré</b>, la quote-part est réduite à <b>1 %</b> (art. 216-I, al. 2 CGI).</li>
</ul>

<h4>B. Le régime de l'intégration fiscale (art. 223 A et s. CGI)</h4>
<p>L'intégration fiscale permet à un groupe de sociétés de consolider ses résultats et de ne payer l'IS que sur le <b>résultat d'ensemble</b> du groupe.</p>
<ul>
  <li><b>Conditions</b> :
    <ul>
      <li>La société mère (tête de groupe) doit détenir directement ou indirectement au moins <b>95 % du capital</b> des filiales intégrées.</li>
      <li>La société mère ne doit pas être détenue à 95 % ou plus par une autre société soumise à l'IS en France.</li>
      <li>Les exercices de toutes les sociétés du groupe doivent avoir la même durée et la même date de clôture.</li>
      <li>Toutes les sociétés doivent être soumises à l'IS au taux normal.</li>
    </ul>
  </li>
  <li><b>Effets</b> : le résultat d'ensemble est calculé par la somme algébrique des résultats individuels de chaque société du groupe. Les <b>déficits</b> des unes compensent les bénéfices des autres. Les <b>opérations intra-groupe</b> font l'objet de neutralisations (provisions intra-groupe, plus-values de cession intra-groupe, abandons de créances).</li>
  <li>L'option est formulée pour <b>5 exercices</b> et est renouvelable tacitement.</li>
</ul>

<h4>C. Le régime des plus-values à long terme sur titres de participation</h4>
<ul>
  <li>Les plus-values de cession de <b>titres de participation</b> détenus depuis au moins 2 ans sont exonérées d'IS (art. 219-I-a quinquies CGI), sous réserve d'une quote-part de frais et charges de <b>12 %</b> du montant brut de la plus-value.</li>
  <li>Ce régime favorise la restructuration des groupes et la cession de participations stratégiques.</li>
</ul>

<div class="fiche-key-point">Point clé : Le régime mère-fille (art. 145-216 CGI) exonère les dividendes perçus par la société mère moyennant une quote-part de 5 % (1 % en intégration). L'intégration fiscale (art. 223 A CGI) permet la compensation des résultats au sein d'un groupe détenu à 95 % au moins.</div>`
      },
      {
        title: "Les obligations déclaratives et le contrôle de l'IS",
        content: `<p>Les sociétés soumises à l'IS sont tenues à des obligations déclaratives précises et sont soumises au contrôle de l'administration fiscale.</p>

<h4>A. Les obligations déclaratives</h4>
<ul>
  <li><b>Déclaration de résultat</b> (art. 223-1 CGI) : chaque société doit souscrire une déclaration de résultat dans les <b>3 mois</b> suivant la clôture de l'exercice (ou le 2e jour ouvré suivant le 1er mai pour les exercices clos au 31 décembre). La déclaration comprend le formulaire 2065 (déclaration de résultat) et les tableaux annexes (bilan, compte de résultat, tableau des amortissements, des provisions, etc.).</li>
  <li><b>Télédéclaration obligatoire</b> : depuis 2013, toutes les entreprises soumises à l'IS doivent souscrire leurs déclarations par voie électronique (procédure EDI ou EFI).</li>
  <li><b>Relevé de solde</b> (imprimé 2572) : la liquidation de l'IS est opérée sur le relevé de solde, qui doit être déposé au plus tard le 15 du 4e mois suivant la clôture de l'exercice.</li>
  <li><b>Déclarations spécifiques</b> : déclaration de TVA (CA3), déclaration des honoraires (DAS2), état des abandons de créances, sous-traitance, etc.</li>
</ul>

<h4>B. Le contrôle fiscal des sociétés</h4>
<p>Les sociétés soumises à l'IS font l'objet de contrôles spécifiques :</p>
<ul>
  <li><b>Vérification de comptabilité</b> (art. L. 13 LPF) : contrôle sur place de la comptabilité de l'entreprise. L'administration vérifie l'exactitude des déclarations en les confrontant aux écritures comptables et aux documents justificatifs. La vérification ne peut excéder <b>3 mois</b> pour les petites entreprises (CA < seuils), et n'est pas limitée dans le temps pour les autres.</li>
  <li><b>Examen de comptabilité</b> (art. L. 13 G LPF) : contrôle à distance de la comptabilité informatisée. L'entreprise transmet ses fichiers des écritures comptables (FEC) sous format dématérialisé.</li>
  <li><b>Procédure de rectification contradictoire</b> (art. L. 55 LPF) : l'administration notifie les rectifications par une proposition de rectification motivée. La société dispose d'un délai de <b>30 jours</b> (extensible à 60) pour répondre.</li>
</ul>

<h4>C. Les sanctions spécifiques</h4>
<ul>
  <li><b>Intérêts de retard</b> (art. 1727 CGI) : 0,20 % par mois de retard (2,4 % par an) sur les insuffisances de déclaration.</li>
  <li><b>Majorations</b> : 10 % pour retard de déclaration (art. 1728 CGI), 40 % pour manquement délibéré (art. 1729-a CGI), 80 % pour manoeuvres frauduleuses (art. 1729-b CGI) ou abus de droit (art. 1729-b CGI).</li>
  <li><b>Amende pour défaut de FEC</b> (art. 1729 D CGI) : 5 000 euros en cas de non-présentation de la comptabilité sous forme dématérialisée ou de fichier non conforme.</li>
</ul>

<h4>D. Les prix de transfert (art. 57 CGI)</h4>
<ul>
  <li>Les transactions entre entreprises liées (sociétés d'un même groupe international) doivent être réalisées à des conditions de <b>pleine concurrence</b> (arm's length principle).</li>
  <li>L'article 57 du CGI permet à l'administration de <b>réintégrer</b> dans le résultat imposable les bénéfices indirectement transférés à des entreprises étrangères liées, par voie de majoration de prix d'achat ou de minoration de prix de vente.</li>
  <li>Les entreprises dont le chiffre d'affaires excède <b>400 millions d'euros</b> doivent souscrire une <b>déclaration de politique de prix de transfert</b> (formulaire 2257) et tenir une <b>documentation</b> justifiant leur politique (art. L. 13 AA et L. 13 AB LPF).</li>
</ul>

<div class="fiche-key-point">Point clé : La déclaration de résultat IS doit être souscrite dans les 3 mois de la clôture. La vérification de comptabilité est le principal mode de contrôle. Les prix de transfert (art. 57 CGI) permettent de réintégrer les bénéfices transférés à des entreprises liées étrangères en violation du principe de pleine concurrence.</div>`
      }
    ]
  },

  'fiscal-tva': {
    introduction: "La taxe sur la valeur ajoutée (TVA) est un impôt indirect, général sur la consommation, perçu à chaque stade de la production et de la distribution. Inventée en France en 1954, elle est aujourd'hui harmonisée au niveau européen par la directive 2006/112/CE. Régie par les articles 256 et suivants du CGI, la TVA est l'impôt qui rapporte le plus au budget de l'État et constitue un sujet incontournable au CRFPA.",
    readTime: 24,
    sections: [
      {
        title: "Le champ d'application de la TVA et les opérations imposables",
        content: `<p>Le champ d'application de la TVA est défini par l'article 256 du CGI, qui transpose les dispositions de la directive 2006/112/CE.</p>

<h4>A. Les opérations imposables par nature (art. 256-I CGI)</h4>
<p>Sont soumises à la TVA les <b>livraisons de biens</b> et les <b>prestations de services</b> effectuées à titre onéreux par un <b>assujetti agissant en tant que tel</b>.</p>
<ul>
  <li><b>Livraison de biens</b> (art. 256-II-1° CGI) : transfert du pouvoir de disposer d'un bien corporel comme un propriétaire. Inclut la fourniture d'électricité, de gaz, de chaleur et de froid.</li>
  <li><b>Prestation de services</b> (art. 256-IV CGI) : toute opération qui ne constitue pas une livraison de biens. Définition résiduelle englobant les travaux, les locations, les transports, les cessions de biens incorporels, etc.</li>
  <li><b>Assujetti</b> (art. 256 A CGI) : toute personne (physique ou morale, publique ou privée) qui réalise de manière <b>indépendante</b> une activité économique. Les salariés ne sont pas assujettis (lien de subordination). Les personnes publiques ne sont assujetties que pour leurs activités susceptibles de créer des distorsions de concurrence (art. 256 B CGI).</li>
  <li><b>À titre onéreux</b> : il doit exister un <b>lien direct</b> entre le bien livré ou le service rendu et la contrepartie reçue (CJCE, 8 mars 1988, <i>Apple and Pear Development Council</i>).</li>
</ul>

<h4>B. Les opérations imposables par disposition légale</h4>
<ul>
  <li><b>Importations</b> (art. 291-I CGI) : toute entrée en France d'un bien en provenance d'un État tiers à l'UE est soumise à la TVA, quel que soit le statut de l'importateur.</li>
  <li><b>Acquisitions intracommunautaires</b> (art. 256 bis CGI) : l'acquisition d'un bien expédié depuis un autre État membre est soumise à la TVA dans l'État de destination.</li>
  <li><b>Livraisons à soi-même</b> (art. 257 CGI) : dans certains cas, une entreprise doit soumettre à la TVA les biens qu'elle produit pour ses propres besoins.</li>
</ul>

<h4>C. Les opérations exonérées (art. 261 et s. CGI)</h4>
<ul>
  <li>Activités médicales et paramédicales (art. 261-4-1° CGI)</li>
  <li>Enseignement (art. 261-4-4° CGI)</li>
  <li>Opérations bancaires et financières (art. 261 C CGI)</li>
  <li>Opérations d'assurance (art. 261 C-2° CGI)</li>
  <li>Locations d'immeubles nus à usage d'habitation (art. 261 D-2° CGI)</li>
</ul>

<div class="fiche-key-point">Point clé : La TVA s'applique aux livraisons de biens et prestations de services à titre onéreux par un assujetti agissant en tant que tel (art. 256-I CGI). L'existence d'un lien direct entre la prestation et la contrepartie est une condition essentielle (CJCE, 1988, Apple and Pear).</div>`
      },
      {
        title: "Le fait générateur et l'exigibilité de la TVA",
        content: `<p>Le <b>fait générateur</b> et l'<b>exigibilité</b> de la TVA sont deux notions distinctes qui déterminent respectivement la naissance de l'obligation fiscale et le moment où le Trésor peut en réclamer le paiement.</p>

<h4>A. Le fait générateur (art. 269-1 CGI)</h4>
<p>Le fait générateur est l'événement par lequel sont réalisées les conditions légales nécessaires pour l'exigibilité de la taxe :</p>
<ul>
  <li><b>Livraisons de biens</b> : le fait générateur intervient au moment de la <b>livraison</b> du bien, c'est-à-dire au transfert du pouvoir de disposer du bien comme un propriétaire (art. 269-1-a CGI).</li>
  <li><b>Prestations de services</b> : le fait générateur intervient au moment de la <b>réalisation</b> (achèvement) de la prestation (art. 269-1-a CGI).</li>
  <li><b>Acquisitions intracommunautaires</b> : le fait générateur intervient au moment de l'acquisition, c'est-à-dire lors de la livraison du bien dans l'État membre de destination (art. 269-1-d CGI).</li>
  <li><b>Importations</b> : le fait générateur intervient au moment de l'entrée du bien sur le territoire (dédouanement).</li>
</ul>

<h4>B. L'exigibilité (art. 269-2 CGI)</h4>
<p>L'exigibilité détermine le moment à partir duquel le Trésor peut réclamer le paiement de la taxe. Elle conditionne également le droit à déduction du client :</p>
<ul>
  <li><b>Livraisons de biens</b> : l'exigibilité intervient au moment de la livraison (coïncidence avec le fait générateur).</li>
  <li><b>Prestations de services</b> : l'exigibilité intervient lors de l'<b>encaissement</b> du prix ou des acomptes (art. 269-2-c CGI). Toutefois, le prestataire peut opter pour l'exigibilité d'après les <b>débits</b> (facturation), ce qui est fréquent en pratique (art. 269-2-c, al. 2 CGI).</li>
  <li><b>Acomptes</b> : l'encaissement d'un acompte rend la TVA exigible à concurrence du montant encaissé (pour les services). Depuis le 1er janvier 2023, les acomptes versés pour les livraisons de biens rendent également la TVA exigible (transposition de la directive).</li>
</ul>

<h4>C. Les règles de territorialité (lieu des opérations)</h4>
<p>La TVA est due dans l'État où l'opération est réputée se situer :</p>
<ul>
  <li><b>Livraisons de biens sans transport</b> : lieu de situation du bien au moment de la livraison (art. 258 CGI).</li>
  <li><b>Livraisons de biens avec transport</b> : lieu de départ du transport (art. 258-I-a CGI).</li>
  <li><b>Prestations de services B2B</b> (entre assujettis) : lieu d'établissement du <b>preneur</b> (art. 259-1° CGI), avec mécanisme d'autoliquidation.</li>
  <li><b>Prestations de services B2C</b> (à des non-assujettis) : lieu d'établissement du <b>prestataire</b> (art. 259-2 CGI), sauf exceptions (services électroniques : lieu du consommateur).</li>
</ul>

<div class="fiche-key-point">Point clé : Pour les prestations de services, l'exigibilité intervient en principe à l'encaissement (sauf option pour les débits). En B2B, les prestations de services sont taxées au lieu du preneur (autoliquidation), tandis qu'en B2C, elles sont taxées au lieu du prestataire (règle générale).</div>`
      },
      {
        title: "La base d'imposition et les taux de TVA",
        content: `<p>La base d'imposition de la TVA est constituée par la <b>contrepartie</b> obtenue par le fournisseur ou le prestataire. Les taux applicables varient selon la nature des biens et services.</p>

<h4>A. La base d'imposition (art. 266 et 267 CGI)</h4>
<ul>
  <li><b>Principe</b> : la base d'imposition est constituée par tout ce qui constitue la <b>contrepartie</b> obtenue ou à obtenir par le fournisseur ou le prestataire de la part de l'acquéreur ou du preneur (art. 266-1-a CGI). Elle comprend le prix principal et tous les <b>compléments de prix</b> (frais accessoires, commissions, emballages, transport).</li>
  <li><b>Éléments inclus</b> (art. 267-I CGI) : impôts, taxes, droits et prélèvements de toute nature (sauf la TVA elle-même), frais accessoires (commissions, frais d'emballage, de transport et d'assurance demandés au client).</li>
  <li><b>Éléments exclus</b> (art. 267-II CGI) : escomptes de règlement, rabais, remises et ristournes acquis au moment de l'opération.</li>
  <li><b>Subventions directement liées au prix</b> (art. 267-I-2° CGI) : les subventions constituant la contrepartie d'une opération sont incluses dans la base d'imposition (CJCE, 22 novembre 2001, <i>Office des produits wallons</i>).</li>
</ul>

<h4>B. Les taux de TVA</h4>
<p>La France applique quatre taux de TVA (art. 278 et s. CGI) :</p>
<ul>
  <li><b>Taux normal : 20 %</b> (art. 278 CGI) — s'applique à la majorité des biens et services.</li>
  <li><b>Taux intermédiaire : 10 %</b> (art. 279 CGI) — restauration, transports de voyageurs, travaux de rénovation dans les logements de plus de 2 ans, hébergement hôtelier, entrées dans certains lieux culturels.</li>
  <li><b>Taux réduit : 5,5 %</b> (art. 278-0 bis CGI) — produits alimentaires de première nécessité, livres, abonnements énergie (gaz, électricité), équipements pour personnes handicapées, logements sociaux.</li>
  <li><b>Taux particulier : 2,1 %</b> (art. 281 quater et s. CGI) — médicaments remboursables par la sécurité sociale, publications de presse inscrites à la CPPAP, redevance audiovisuelle (supprimée en 2022), spectacles vivants (premières représentations).</li>
</ul>

<h4>C. Les opérations immobilières</h4>
<ul>
  <li>Les <b>livraisons d'immeubles neufs</b> (achevés depuis moins de 5 ans) sont soumises à la TVA au taux normal (art. 257-I-2° CGI).</li>
  <li>Les <b>livraisons de terrains à bâtir</b> sont soumises à la TVA (art. 257-I-1° CGI).</li>
  <li>Les <b>locations d'immeubles nus</b> à usage professionnel peuvent être soumises à la TVA <b>sur option</b> du bailleur (art. 260-2° CGI), ce qui lui permet d'exercer son droit à déduction.</li>
</ul>

<div class="fiche-key-point">Point clé : La France applique 4 taux de TVA : 20 % (normal), 10 % (intermédiaire), 5,5 % (réduit) et 2,1 % (particulier). La base d'imposition comprend le prix et tous les compléments de prix, y compris les subventions directement liées au prix. Les remises et escomptes sont exclus.</div>`
      },
      {
        title: "Le droit à déduction et les régularisations",
        content: `<p>Le mécanisme de la <b>déduction</b> est l'essence même de la TVA : chaque assujetti déduit la TVA acquittée en amont (sur ses achats) de la TVA collectée en aval (sur ses ventes), ne versant au Trésor que la <b>différence</b>.</p>

<h4>A. Les conditions du droit à déduction</h4>
<p>Le droit à déduction est soumis à des conditions de fond et de forme (art. 271 CGI) :</p>
<ul>
  <li><b>Conditions de fond</b> :
    <ul>
      <li>La TVA doit avoir grevé un bien ou un service utilisé pour les besoins d'<b>opérations ouvrant droit à déduction</b> (opérations taxées ou assimilées, exportations, livraisons intracommunautaires).</li>
      <li>Le bien ou service doit être utilisé pour les besoins de l'<b>activité économique</b> de l'assujetti.</li>
      <li>Certaines dépenses sont exclues du droit à déduction (art. 206-IV de l'annexe II CGI) : véhicules de tourisme, dépenses de logement au profit des dirigeants et du personnel, cadeaux d'une valeur unitaire supérieure à 73 euros TTC.</li>
    </ul>
  </li>
  <li><b>Conditions de forme</b> :
    <ul>
      <li>L'assujetti doit être en possession d'une <b>facture</b> mentionnant la TVA de manière distincte (art. 289 CGI).</li>
      <li>La TVA ne peut être déduite que si elle a été régulièrement facturée : la TVA facturée à tort est due mais non déductible (art. 283-3 CGI).</li>
    </ul>
  </li>
  <li><b>Naissance du droit à déduction</b> : le droit à déduction prend naissance lorsque la taxe est devenue <b>exigible</b> chez le fournisseur (art. 271-I-2 CGI).</li>
</ul>

<h4>B. Le coefficient de déduction</h4>
<p>Pour les assujettis qui réalisent à la fois des opérations taxées et des opérations exonérées (<b>assujettis partiels</b> ou <b>redevables partiels</b>), le droit à déduction est limité par un coefficient de déduction :</p>
<ul>
  <li><b>Coefficient de déduction</b> = coefficient d'assujettissement x coefficient de taxation x coefficient d'admission.</li>
  <li>Le <b>coefficient de taxation</b> (prorata de déduction) correspond à la proportion des opérations ouvrant droit à déduction par rapport au total des opérations (art. 206-III de l'annexe II CGI).</li>
  <li>Si le coefficient est de 1, la TVA est intégralement déductible ; s'il est de 0, aucune déduction n'est possible.</li>
</ul>

<h4>C. Les régularisations</h4>
<ul>
  <li><b>Régularisation annuelle</b> : le coefficient de taxation provisoire est ajusté chaque année en fonction du prorata définitif. Si la variation excède 5 points, une régularisation est opérée.</li>
  <li><b>Régularisation sur immobilisations</b> (art. 207 de l'annexe II CGI) : les immobilisations sont soumises à une période de régularisation de <b>5 ans</b> (biens meubles) ou <b>20 ans</b> (immeubles). Tout changement d'affectation ou de coefficient de déduction pendant cette période entraîne une régularisation (restitution ou complément de déduction).</li>
  <li><b>Crédit de TVA</b> : lorsque la TVA déductible excède la TVA collectée, l'assujetti dispose d'un <b>crédit de TVA</b> imputable sur les déclarations suivantes ou remboursable sur demande (art. 271-IV CGI).</li>
</ul>

<div class="fiche-key-point">Point clé : Le droit à déduction est conditionné par l'utilisation du bien pour des opérations taxées et la détention d'une facture régulière. Les immobilisations sont soumises à une période de régularisation de 5 ans (meubles) ou 20 ans (immeubles). Le crédit de TVA est reportable ou remboursable.</div>`
      },
      {
        title: "Les régimes déclaratifs de la TVA",
        content: `<p>Les modalités de déclaration et de paiement de la TVA varient selon le chiffre d'affaires de l'entreprise et la nature de son activité.</p>

<h4>A. Le régime réel normal (art. 287-2 CGI)</h4>
<ul>
  <li>S'applique aux entreprises dont le chiffre d'affaires excède les seuils du régime simplifié, ou sur option.</li>
  <li><b>Déclaration mensuelle</b> (CA3) : l'entreprise dépose chaque mois une déclaration faisant apparaître la TVA collectée, la TVA déductible et le solde (TVA nette à payer ou crédit de TVA).</li>
  <li>L'entreprise peut opter pour une <b>déclaration trimestrielle</b> si la TVA nette annuelle n'excède pas 4 000 euros.</li>
  <li>Le paiement accompagne la déclaration et s'effectue obligatoirement par voie <b>dématérialisée</b> (télérèglement).</li>
</ul>

<h4>B. Le régime réel simplifié (art. 287-3 CGI)</h4>
<ul>
  <li>S'applique aux entreprises dont le chiffre d'affaires est compris entre les seuils de la franchise et les seuils du régime réel normal : <b>840 000 euros HT</b> pour les activités de vente, <b>254 000 euros HT</b> pour les prestations de services (seuils 2024).</li>
  <li><b>Déclaration annuelle</b> (CA12) déposée au plus tard le 2e jour ouvré suivant le 1er mai (exercice calé sur l'année civile).</li>
  <li><b>Deux acomptes semestriels</b> : un acompte en juillet (55 % de la TVA de l'exercice précédent) et un acompte en décembre (40 %).</li>
  <li>Si la TVA nette annuelle n'excède pas <b>1 000 euros</b>, l'entreprise est dispensée du versement d'acomptes.</li>
</ul>

<h4>C. La franchise en base de TVA (art. 293 B CGI)</h4>
<ul>
  <li>Les entreprises dont le chiffre d'affaires n'excède pas certains seuils bénéficient d'une <b>franchise de TVA</b> : elles ne facturent pas la TVA mais ne peuvent pas la déduire.</li>
  <li>Seuils (2024) : <b>91 900 euros</b> pour les activités de vente de marchandises, <b>36 800 euros</b> pour les prestations de services. Des seuils majorés (101 000 et 39 100 euros) s'appliquent pour le maintien de la franchise en cas de dépassement.</li>
  <li>La mention « TVA non applicable, art. 293 B du CGI » doit figurer sur les factures.</li>
  <li>L'entreprise peut <b>opter pour l'assujettissement</b> à la TVA si elle souhaite exercer son droit à déduction (art. 293 F CGI). Cette option est utile lorsque l'entreprise a des investissements importants.</li>
</ul>

<h4>D. La facturation et les obligations formelles</h4>
<ul>
  <li><b>Obligation de facturation</b> (art. 289 CGI) : tout assujetti doit délivrer une facture pour les livraisons de biens et les prestations de services effectuées au profit d'un autre assujetti ou d'une personne morale non assujettie.</li>
  <li><b>Mentions obligatoires</b> (art. 242 nonies A de l'annexe II CGI) : identité du vendeur et de l'acheteur, date, numéro, désignation des biens/services, quantité, prix unitaire HT, taux et montant de la TVA, montant total HT et TTC.</li>
  <li><b>Facturation électronique obligatoire</b> : la loi de finances pour 2024 a fixé un calendrier de généralisation de la facturation électronique entre assujettis (e-invoicing) et du e-reporting, avec une mise en oeuvre progressive à compter de 2026.</li>
  <li><b>Délai de conservation</b> : les factures doivent être conservées pendant <b>6 ans</b> (art. L. 102 B LPF).</li>
</ul>

<div class="fiche-key-point">Point clé : Le régime déclaratif dépend du chiffre d'affaires : franchise en base (pas de TVA), régime simplifié (déclaration annuelle + acomptes) ou régime réel normal (déclaration mensuelle). La facturation électronique devient progressivement obligatoire entre assujettis à partir de 2026.</div>`
      }
    ]
  }
};
