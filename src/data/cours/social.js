export const COURS_SOCIAL = {
  'social-licenciement': {
    introduction: "Le licenciement est la rupture du contrat de travail à l'initiative de l'employeur. Strictement encadré par le Code du travail (art. L. 1231-1 et s.), il obéit à des règles de fond (exigence d'une cause réelle et sérieuse) et de procédure dont le non-respect est sanctionné. La maîtrise de ce régime est essentielle pour le CRFPA.",
    readTime: 25,
    sections: [
      {
        title: "Le licenciement pour motif personnel",
        content: `<p>Le licenciement pour motif personnel repose sur des motifs <b>inhérents à la personne du salarié</b> (art. L. 1232-1 C. trav.). Il doit être fondé sur une <b>cause réelle et sérieuse</b>.</p>
        <p><b>Notion de cause réelle et sérieuse :</b></p>
        <ul>
          <li><b>Réelle</b> : la cause doit être objective, existante et exacte (ni inexistante, ni inventée, ni déformée).</li>
          <li><b>Sérieuse</b> : la cause doit être suffisamment grave pour justifier le licenciement.</li>
        </ul>
        <p><b>Les motifs de licenciement pour motif personnel :</b></p>
        <p><b>1. Le licenciement pour faute :</b></p>
        <ul>
          <li><b>Faute simple (sérieuse)</b> : manquement aux obligations contractuelles justifiant le licenciement. Le salarié a droit au préavis, à l'indemnité de licenciement et à l'indemnité compensatrice de congés payés.</li>
          <li><b>Faute grave</b> : violation des obligations contractuelles rendant impossible le maintien du salarié dans l'entreprise, même pendant le préavis (Cass. soc., 26 février 1991). Le salarié est privé du préavis et de l'indemnité de licenciement, mais conserve l'indemnité de congés payés (Cass. soc., 11 janvier 2007, revirement).</li>
          <li><b>Faute lourde</b> : faute commise avec l'<b>intention de nuire</b> à l'employeur ou à l'entreprise (Cass. soc., 8 février 2017). Mêmes conséquences que la faute grave. Le Conseil constitutionnel a jugé que la faute lourde ne pouvait priver le salarié de l'indemnité compensatrice de congés payés (CC, 2 mars 2016, n°2015-523 QPC).</li>
        </ul>
        <p><b>2. Le licenciement pour insuffisance professionnelle :</b></p>
        <ul>
          <li>Inaptitude du salarié à remplir ses fonctions de manière satisfaisante. Ne constitue pas une faute (Cass. soc., 25 septembre 2012).</li>
          <li>Doit être appréciée objectivement et ne peut reposer sur la seule perte de confiance de l'employeur.</li>
        </ul>
        <p><b>3. Le licenciement pour inaptitude physique :</b></p>
        <ul>
          <li>Constatée par le <b>médecin du travail</b> après examen médical et, depuis le 1er janvier 2017, un seul examen suffit (art. L. 1226-2 et L. 1226-10).</li>
          <li>L'employeur doit rechercher un <b>reclassement</b> avant de licencier, sauf si le médecin du travail mentionne que tout maintien dans un emploi serait gravement préjudiciable à la santé ou que l'état de santé fait obstacle à tout reclassement.</li>
          <li>En cas d'inaptitude d'<b>origine professionnelle</b> : indemnité spéciale de licenciement (le double de l'indemnité légale) et indemnité compensatrice de préavis (art. L. 1226-14).</li>
        </ul>`
      },
      {
        title: "Le licenciement pour motif économique",
        content: `<p>Le licenciement pour motif économique est défini par l'<b>article L. 1233-3 du Code du travail</b> (modifié par les ordonnances Macron du 22 septembre 2017).</p>
        <p><b>Définition :</b></p>
        <p>Constitue un licenciement pour motif économique le licenciement effectué par un employeur pour un ou plusieurs motifs <b>non inhérents à la personne du salarié</b> résultant d'une suppression ou transformation d'emploi ou d'une modification, refusée par le salarié, d'un élément essentiel du contrat de travail, consécutives notamment à :</p>
        <ul>
          <li>Des <b>difficultés économiques</b> caractérisées par l'évolution significative d'au moins un indicateur économique (baisse des commandes ou du chiffre d'affaires d'un ou plusieurs trimestres selon la taille de l'entreprise, pertes d'exploitation, dégradation de la trésorerie ou de l'excédent brut d'exploitation).</li>
          <li>Des <b>mutations technologiques</b>.</li>
          <li>Une <b>réorganisation de l'entreprise nécessaire à la sauvegarde de sa compétitivité</b>.</li>
          <li>La <b>cessation d'activité</b> de l'entreprise (lorsqu'elle n'est pas due à une faute de l'employeur ou à sa légèreté blâmable).</li>
        </ul>
        <p><b>Périmètre d'appréciation :</b></p>
        <ul>
          <li>La cause économique s'apprécie au niveau de l'<b>entreprise</b> ou, pour les entreprises appartenant à un groupe, au niveau du <b>secteur d'activité commun</b> aux entreprises du groupe établies sur le territoire national (art. L. 1233-3, in fine, issu des ordonnances Macron – limitation au périmètre national controversée).</li>
        </ul>
        <p><b>L'obligation de reclassement (art. L. 1233-4) :</b></p>
        <ul>
          <li>L'employeur doit rechercher un reclassement sur les emplois disponibles dans l'entreprise et, le cas échéant, dans les entreprises du groupe situées sur le territoire national.</li>
          <li>Le reclassement est recherché sur un emploi de la même catégorie ou, à défaut, sur un emploi de catégorie inférieure, avec l'accord exprès du salarié.</li>
          <li>L'employeur doit adresser de manière personnalisée les offres de reclassement au salarié ou diffuser la liste des postes disponibles (ordonnances Macron).</li>
        </ul>
        <p><b>L'ordre des licenciements (art. L. 1233-5) :</b></p>
        <p>L'employeur définit les critères d'ordre : charges de famille, ancienneté, situation rendant la réinsertion difficile (handicap, âge), qualités professionnelles. Ces critères s'appliquent dans le cadre de la catégorie professionnelle concernée.</p>`
      },
      {
        title: "La procédure de licenciement",
        content: `<p>Le non-respect de la procédure constitue une <b>irrégularité</b> sanctionnée indépendamment du bien-fondé du licenciement.</p>
        <p><b>Procédure de licenciement pour motif personnel :</b></p>
        <ol>
          <li><b>Convocation à un entretien préalable</b> (art. L. 1232-2) : lettre recommandée ou remise en main propre, précisant l'objet, la date, l'heure et le lieu de l'entretien, ainsi que la possibilité de se faire assister par un conseiller (salarié de l'entreprise ou, en l'absence de représentants du personnel, conseiller extérieur inscrit sur la liste préfectorale). Délai de <b>5 jours ouvrables</b> entre la réception de la convocation et l'entretien.</li>
          <li><b>Entretien préalable</b> (art. L. 1232-3) : l'employeur expose les motifs de la décision envisagée et recueille les explications du salarié.</li>
          <li><b>Notification du licenciement</b> (art. L. 1232-6) : par lettre recommandée avec accusé de réception, expédiée au moins <b>2 jours ouvrables</b> après l'entretien (1 mois après l'entretien pour le licenciement disciplinaire). La lettre doit énoncer le ou les <b>motifs</b> du licenciement. Les motifs fixent les limites du litige.</li>
          <li><b>Précision des motifs</b> (art. L. 1235-2, ordonnances Macron) : le salarié peut, dans les 15 jours de la notification, demander des précisions sur les motifs. L'employeur dispose de 15 jours pour répondre. L'insuffisance de motivation ne prive plus le licenciement de cause réelle et sérieuse mais constitue une irrégularité de procédure.</li>
        </ol>
        <p><b>Procédure de licenciement pour motif économique :</b></p>
        <p>Elle varie selon le nombre de salariés licenciés :</p>
        <ul>
          <li><b>Licenciement individuel ou de 2 à 9 salariés sur 30 jours</b> : entretien préalable + notification. Information de la DREETS (ancienne DIRECCTE).</li>
          <li><b>Licenciement de 10 salariés ou plus sur 30 jours</b> dans une entreprise de 50 salariés ou plus : obligation d'établir un <b>plan de sauvegarde de l'emploi (PSE)</b> (art. L. 1233-61 et s.), soit par <b>accord collectif majoritaire</b>, soit par <b>document unilatéral</b> soumis à l'homologation de la DREETS. Consultation du CSE (2 réunions espacées d'au moins 15 jours).</li>
        </ul>
        <p><b>Le PSE</b> doit contenir des mesures de reclassement interne, des créations d'activités nouvelles, des actions de formation, des mesures d'adaptation, des actions de soutien à la recherche d'emploi. Le contrôle de la DREETS porte sur la régularité de la procédure, le contenu du PSE et sa proportionnalité aux moyens de l'entreprise et du groupe.</p>
        <p><b>Le contrat de sécurisation professionnelle (CSP)</b> : proposé obligatoirement dans les entreprises de moins de 1 000 salariés. Acceptation = rupture d'un commun accord du contrat de travail (pas de préavis mais indemnité de licenciement).</p>`
      },
      {
        title: "Les sanctions du licenciement irrégulier ou injustifié",
        content: `<p>Les ordonnances Macron du 22 septembre 2017 ont profondément réformé les sanctions du licenciement, en instaurant un <b>barème d'indemnisation</b> (dit « barème Macron »).</p>
        <p><b>Le licenciement sans cause réelle et sérieuse :</b></p>
        <ul>
          <li><b>Barème d'indemnisation</b> (art. L. 1235-3 C. trav.) : le juge octroie une indemnité comprise entre un <b>plancher</b> et un <b>plafond</b> fixés en fonction de l'ancienneté du salarié et de la taille de l'entreprise :
            <ul>
              <li>Ancienneté de 1 an : entre 1 et 2 mois de salaire brut.</li>
              <li>Ancienneté de 5 ans : entre 1,5 et 6 mois.</li>
              <li>Ancienneté de 10 ans : entre 3 et 10 mois.</li>
              <li>Ancienneté de 20 ans : entre 3 et 15,5 mois.</li>
              <li>Ancienneté de 30 ans : entre 3 et 20 mois (plafond maximum).</li>
            </ul>
          </li>
          <li>Le barème a été validé par le Conseil constitutionnel (CC, 21 mars 2018, n°2018-761 DC) et par la Cour de cassation qui a jugé qu'il était compatible avec la Convention n°158 de l'OIT et l'article 24 de la Charte sociale européenne (Cass. soc., 11 mai 2022, deux arrêts).</li>
          <li>Le Comité européen des droits sociaux a néanmoins jugé le barème contraire à l'article 24 de la Charte sociale européenne (décision du 23 mars 2022).</li>
        </ul>
        <p><b>Les cas d'exclusion du barème (art. L. 1235-3-1) :</b></p>
        <p>L'indemnité est au minimum de <b>6 mois de salaire</b> (sans plafond) en cas de licenciement nul pour :</p>
        <ul>
          <li>Violation d'une liberté fondamentale</li>
          <li>Harcèlement moral ou sexuel</li>
          <li>Discrimination</li>
          <li>Licenciement consécutif à une action en justice en matière d'égalité professionnelle</li>
          <li>Licenciement d'un salarié protégé (représentant du personnel)</li>
          <li>Licenciement en lien avec l'exercice du droit de grève</li>
          <li>Licenciement d'un salarié lanceur d'alerte</li>
        </ul>
        <p><b>L'irrégularité de procédure :</b></p>
        <p>Si le licenciement repose sur une cause réelle et sérieuse mais que la procédure est irrégulière, le juge accorde une indemnité maximale de <b>1 mois de salaire</b> (art. L. 1235-2).</p>
        <p><b>La réintégration :</b></p>
        <p>En cas de licenciement nul, le salarié peut demander sa réintégration (art. L. 1235-3-1). L'employeur ne peut s'y opposer que si la réintégration est matériellement impossible. Le salarié réintégré a droit au paiement des salaires entre le licenciement et la réintégration.</p>`
      },
      {
        title: "Les régimes protecteurs spéciaux",
        content: `<p>Certains salariés bénéficient d'une <b>protection renforcée</b> contre le licenciement.</p>
        <p><b>Les salariés protégés (représentants du personnel) :</b></p>
        <ul>
          <li>Membres du CSE, délégués syndicaux, représentants de section syndicale, conseillers prud'homaux, défenseurs syndicaux.</li>
          <li>Leur licenciement nécessite l'<b>autorisation préalable de l'inspecteur du travail</b> (art. L. 2411-1 et s. C. trav.).</li>
          <li>L'inspecteur du travail vérifie que le licenciement n'est pas en lien avec les fonctions représentatives (absence de <b>discrimination syndicale</b>).</li>
          <li>En cas de licenciement sans autorisation ou malgré un refus, le licenciement est <b>nul</b> de plein droit. Le salarié peut demander sa réintégration et les salaires perdus.</li>
          <li>La protection s'étend aux <b>candidats</b> (pendant 6 mois après la publication des candidatures) et aux <b>anciens représentants</b> (6 mois à 12 mois après la fin du mandat).</li>
        </ul>
        <p><b>Les salariées enceintes et en congé de maternité :</b></p>
        <ul>
          <li><b>Protection absolue</b> pendant le congé de maternité : aucun licenciement possible (art. L. 1225-4).</li>
          <li><b>Protection relative</b> pendant la grossesse et les 10 semaines suivant la fin du congé : le licenciement n'est possible qu'en cas de <b>faute grave non liée à la grossesse</b> ou d'<b>impossibilité de maintenir le contrat pour un motif étranger à la grossesse</b>.</li>
          <li>Le licenciement notifié pendant la grossesse est nul si la salariée envoie un certificat médical dans les 15 jours de la notification (art. L. 1225-5).</li>
        </ul>
        <p><b>Les salariés victimes d'accident du travail ou de maladie professionnelle :</b></p>
        <ul>
          <li>Pendant la période de suspension : le licenciement n'est possible qu'en cas de <b>faute grave</b> ou d'<b>impossibilité de maintenir le contrat pour un motif étranger à l'accident ou la maladie</b> (art. L. 1226-9).</li>
          <li>Le licenciement prononcé en violation de ces règles est <b>nul</b> (art. L. 1226-13).</li>
        </ul>
        <p><b>Les lanceurs d'alerte (loi Sapin 2, loi Waserman du 21 mars 2022) :</b></p>
        <p>Le licenciement d'un lanceur d'alerte en raison de son signalement est nul. La charge de la preuve est aménagée : le salarié présente des éléments laissant supposer un lien entre le licenciement et l'alerte, et l'employeur doit prouver que sa décision est étrangère à l'alerte.</p>`
      }
    ]
  },
  'social-contrat-travail': {
    introduction: "Le contrat de travail est la convention par laquelle une personne (le salarié) s'engage à fournir une prestation de travail pour le compte et sous la direction d'une autre personne (l'employeur) en contrepartie d'une rémunération. Bien que non défini par le Code du travail, il est identifié par la jurisprudence à travers le critère du lien de subordination.",
    readTime: 20,
    sections: [
      {
        title: "La qualification du contrat de travail",
        content: `<p>Le contrat de travail n'est pas défini par la loi. La jurisprudence le caractérise par trois éléments : une <b>prestation de travail</b>, une <b>rémunération</b> et un <b>lien de subordination juridique</b>.</p>
        <p><b>Le lien de subordination :</b></p>
        <ul>
          <li><b>Définition</b> (Cass. soc., 13 novembre 1996, <i>Société Générale</i>) : le lien de subordination est caractérisé par l'exécution d'un travail sous l'autorité d'un employeur qui a le pouvoir de <b>donner des ordres et des directives</b>, d'en <b>contrôler l'exécution</b> et de <b>sanctionner les manquements</b> du subordonné.</li>
          <li>L'existence d'une relation de travail salarié ne dépend ni de la volonté des parties ni de la dénomination donnée au contrat, mais des <b>conditions de fait</b> dans lesquelles est exercée l'activité (principe de réalité – Cass. soc., 17 avril 1991, <i>Bardou</i>).</li>
          <li><b>Critères de la subordination</b> : intégration dans un service organisé (indice), horaires imposés, fourniture du matériel, directives sur les méthodes, contrôle de l'activité, exclusivité, fixation de la rémunération par l'employeur.</li>
        </ul>
        <p><b>Distinction avec d'autres contrats :</b></p>
        <ul>
          <li><b>Contrat d'entreprise (prestation de service)</b> : le prestataire travaille de manière indépendante, sans subordination. Il conserve la maîtrise de l'organisation et de l'exécution de son travail.</li>
          <li><b>Mandat</b> : le mandataire agit pour le compte du mandant mais n'est pas subordonné (sauf si les conditions de fait révèlent une subordination : requalification possible).</li>
          <li><b>Bénévolat</b> : absence de rémunération et de subordination.</li>
        </ul>
        <p><b>La question des travailleurs de plateformes numériques :</b></p>
        <ul>
          <li>La Cour de cassation a requalifié en contrat de travail la relation entre un chauffeur VTC et la plateforme Uber (Cass. soc., 4 mars 2020, <i>Uber</i>) : le système de géolocalisation, le pouvoir de sanction et l'impossibilité de constituer une clientèle propre caractérisent la subordination.</li>
          <li>Le législateur a instauré une présomption de non-salariat pour les travailleurs indépendants immatriculés (art. L. 8221-6 C. trav.), mais cette présomption est <b>simple</b> et peut être renversée par la preuve de la subordination.</li>
        </ul>`
      },
      {
        title: "Le contrat de travail à durée indéterminée (CDI) et le CDD",
        content: `<p>Le CDI est la <b>forme normale et générale</b> de la relation de travail (art. L. 1221-2 C. trav.). Le CDD est un contrat d'exception, soumis à des conditions strictes.</p>
        <p><b>Le CDI :</b></p>
        <ul>
          <li>Peut être conclu sans écrit (sauf dispositions conventionnelles contraires), mais la directive européenne du 20 juin 2019 impose une information écrite du salarié sur les éléments essentiels de la relation de travail.</li>
          <li>N'est soumis à aucune condition de durée ni de motif de recours.</li>
          <li>Peut comporter des clauses spécifiques : période d'essai, clause de non-concurrence, clause de mobilité, clause d'exclusivité.</li>
        </ul>
        <p><b>Le CDD (art. L. 1242-1 et s. C. trav.) :</b></p>
        <p><b>Cas de recours limitatifs (art. L. 1242-2) :</b></p>
        <ul>
          <li>Remplacement d'un salarié absent (maladie, congé maternité, etc.) ou passé provisoirement à temps partiel.</li>
          <li>Accroissement temporaire de l'activité.</li>
          <li>Emplois saisonniers.</li>
          <li>CDD d'usage dans des secteurs définis par décret ou convention collective.</li>
          <li>Remplacement d'un chef d'entreprise.</li>
        </ul>
        <p><b>Interdictions (art. L. 1242-6) :</b></p>
        <ul>
          <li>Remplacement d'un salarié gréviste.</li>
          <li>Travaux dangereux figurant sur une liste réglementaire.</li>
          <li>Pourvoi durable d'un emploi lié à l'activité normale et permanente de l'entreprise (art. L. 1242-1).</li>
        </ul>
        <p><b>Formalisme :</b></p>
        <ul>
          <li>Écrit obligatoire à peine de requalification en CDI (art. L. 1242-12).</li>
          <li>Mentions obligatoires : motif précis, nom et qualification du salarié remplacé (le cas échéant), date de fin ou durée minimale, poste, convention collective, période d'essai, rémunération.</li>
          <li>Transmission au salarié dans les <b>2 jours ouvrables</b> suivant l'embauche.</li>
        </ul>
        <p><b>Durée et renouvellement :</b></p>
        <ul>
          <li>Durée maximale : 18 mois (renouvellements inclus), sauf exceptions (9, 24 ou 36 mois selon les cas). <b>2 renouvellements</b> maximum (art. L. 1243-13).</li>
          <li>Délai de carence entre deux CDD sur le même poste (art. L. 1244-3) : tiers de la durée du contrat initial (contrat ≥ 14 jours) ou moitié (contrat < 14 jours). Exceptions : remplacement, saisonniers, urgence.</li>
        </ul>
        <p><b>Fin du CDD :</b></p>
        <ul>
          <li><b>Indemnité de fin de contrat (précarité)</b> : 10 % de la rémunération brute totale (art. L. 1243-8). Non due en cas de saisonniers, CDD d'usage, refus de CDI par le salarié, embauche en CDI à l'issue du CDD.</li>
          <li><b>Requalification en CDI</b> (art. L. 1245-1) : en cas de non-respect des conditions de recours, de forme, de durée ou de renouvellement. La requalification ouvre droit à une <b>indemnité au moins égale à 1 mois de salaire</b>.</li>
        </ul>`
      },
      {
        title: "Les clauses essentielles du contrat de travail",
        content: `<p>Le contrat de travail peut contenir diverses clauses qui encadrent la relation de travail. Leur validité est soumise à des conditions jurisprudentielles strictes.</p>
        <p><b>La période d'essai (art. L. 1221-19 et s. C. trav.) :</b></p>
        <ul>
          <li>Permet à l'employeur d'évaluer les compétences du salarié et au salarié d'apprécier si les fonctions lui conviennent.</li>
          <li><b>Durée maximale</b> (CDI) : 2 mois (ouvriers/employés), 3 mois (agents de maîtrise/techniciens), 4 mois (cadres). Renouvelable une fois si un accord de branche étendu le prévoit et si le contrat de travail le mentionne.</li>
          <li>Doit être expressément stipulée dans le contrat ou la lettre d'engagement.</li>
          <li><b>Rupture libre</b> mais soumise à un <b>délai de prévenance</b> (24 heures à 1 mois selon la durée de présence). L'abus dans la rupture est sanctionné (motif discriminatoire, rupture vexatoire).</li>
        </ul>
        <p><b>La clause de non-concurrence :</b></p>
        <ul>
          <li><b>Conditions de validité cumulatives</b> (Cass. soc., 10 juillet 2002, arrêts du même jour) :
            <ul>
              <li>Être indispensable à la protection des <b>intérêts légitimes</b> de l'entreprise.</li>
              <li>Être limitée dans le <b>temps</b>.</li>
              <li>Être limitée dans l'<b>espace</b>.</li>
              <li>Tenir compte des spécificités de l'emploi du salarié (limitation d'activité).</li>
              <li>Comporter une <b>contrepartie financière</b> (innovation jurisprudentielle de 2002). La contrepartie dérisoire équivaut à l'absence de contrepartie.</li>
            </ul>
          </li>
          <li>La clause ne prenant effet qu'à la rupture du contrat, l'employeur peut y renoncer unilatéralement, à condition que le contrat ou la convention collective le prévoie et que la renonciation intervienne avant la cessation des fonctions (ou dans le délai contractuellement prévu).</li>
        </ul>
        <p><b>La clause de mobilité :</b></p>
        <ul>
          <li>Permet à l'employeur de modifier le lieu de travail du salarié. Doit définir de manière précise sa <b>zone géographique d'application</b> (Cass. soc., 7 juin 2006).</li>
          <li>Mise en œuvre dans l'<b>intérêt de l'entreprise</b> et avec un <b>délai de prévenance raisonnable</b>.</li>
          <li>Ne peut être imposée à un salarié protégé (modification du contrat nécessitant son accord).</li>
        </ul>
        <p><b>La clause d'exclusivité :</b></p>
        <p>Interdit au salarié d'exercer une autre activité, même non concurrente. Valable uniquement si elle est indispensable à la protection des intérêts légitimes de l'entreprise et proportionnée au but recherché (Cass. soc., 11 juillet 2000). Inopposable au salarié à temps partiel (art. L. 1222-5, sauf dérogation) et pendant la durée du congé pour création d'entreprise.</p>`
      },
      {
        title: "La modification du contrat de travail et le changement des conditions de travail",
        content: `<p>La distinction entre <b>modification du contrat de travail</b> et <b>changement des conditions de travail</b> est fondamentale car elle détermine les droits respectifs de l'employeur et du salarié.</p>
        <p><b>La modification du contrat de travail :</b></p>
        <ul>
          <li>Porte sur un <b>élément essentiel</b> du contrat (Cass. soc., 10 juillet 1996, <i>Le Berre</i>).</li>
          <li>Constituent des modifications du contrat : le changement de rémunération (montant ou structure), le changement de qualification, le changement significatif du lieu de travail (hors du même secteur géographique), le passage du temps plein au temps partiel (et inversement), le changement d'horaires de travail de jour en horaires de nuit.</li>
          <li>Nécessite l'<b>accord du salarié</b>. Le refus du salarié ne constitue pas une faute mais peut conduire à un licenciement pour motif personnel (si la modification était justifiée) ou économique.</li>
        </ul>
        <p><b>Le changement des conditions de travail :</b></p>
        <ul>
          <li>Relève du <b>pouvoir de direction</b> de l'employeur et ne nécessite pas l'accord du salarié.</li>
          <li>Constituent des changements de conditions de travail : un changement de lieu de travail dans le même secteur géographique, un réaménagement des horaires sans bouleversement, une nouvelle répartition des tâches dans la même qualification.</li>
          <li>Le refus du salarié constitue un <b>manquement à ses obligations</b> pouvant justifier un licenciement disciplinaire (Cass. soc., 10 juillet 1996).</li>
        </ul>
        <p><b>La procédure spécifique en cas de motif économique (art. L. 1222-6 C. trav.) :</b></p>
        <ul>
          <li>La proposition de modification pour motif économique doit être faite par lettre recommandée, informant le salarié qu'il dispose d'un <b>délai d'un mois</b> pour répondre (15 jours en cas de redressement ou liquidation judiciaire).</li>
          <li>Le silence du salarié à l'expiration du délai vaut <b>acceptation</b>.</li>
          <li>En cas de refus, l'employeur peut engager un licenciement pour motif économique.</li>
        </ul>
        <p><b>Le cas du salarié protégé :</b></p>
        <p>Aucune modification du contrat ni changement des conditions de travail ne peut être imposé à un salarié protégé. Le refus ne constitue pas une faute et ne peut fonder un licenciement (Cass. soc., 13 janvier 2009).</p>`
      }
    ]
  }
};
