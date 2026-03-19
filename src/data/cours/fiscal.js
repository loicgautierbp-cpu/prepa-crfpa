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
  }
};
