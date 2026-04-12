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
      },
      {
        title: "La rupture du contrat de travail hors licenciement",
        content: `<p>Le contrat de travail peut être rompu par d'autres modes que le licenciement. Ces modes de rupture obéissent chacun à un régime juridique spécifique, dont la maîtrise est indispensable en droit social.</p>
        <p><b>1. La démission :</b></p>
        <ul>
          <li>Acte unilatéral par lequel le salarié manifeste de façon <b>claire et non équivoque</b> sa volonté de rompre le contrat (Cass. soc., 9 mai 2007). Aucun formalisme n'est imposé par la loi, sauf dispositions conventionnelles.</li>
          <li>Le salarié doit respecter un <b>délai de préavis</b> fixé par la loi, la convention collective ou les usages.</li>
          <li>La démission ne donne pas droit aux allocations chômage, sauf cas de démission légitime (violences conjugales, non-paiement des salaires, etc.).</li>
        </ul>
        <p><b>2. La rupture conventionnelle individuelle (art. L. 1237-11 à L. 1237-16 C. trav.) :</b></p>
        <ul>
          <li>Mode de rupture amiable du CDI introduit par la loi du 25 juin 2008, permettant à l'employeur et au salarié de convenir d'un commun accord des conditions de la rupture.</li>
          <li><b>Procédure</b> : un ou plusieurs entretiens, signature d'une convention fixant la date de rupture et le montant de l'indemnité spécifique (au moins égale à l'indemnité légale de licenciement), <b>délai de rétractation de 15 jours calendaires</b>, puis <b>homologation par la DREETS</b> (délai d'instruction de 15 jours ouvrables, le silence valant homologation).</li>
          <li>La rupture conventionnelle ouvre droit aux <b>allocations chômage</b>.</li>
          <li>Le consentement doit être libre : la convention est nulle en cas de vice du consentement (Cass. soc., 23 mai 2013) ou de harcèlement moral (Cass. soc., 30 janvier 2013).</li>
        </ul>
        <p><b>3. La prise d'acte de la rupture :</b></p>
        <ul>
          <li>Le salarié prend acte de la rupture en raison de faits qu'il reproche à l'employeur. Le juge prud'homal apprécie si les manquements invoqués sont <b>suffisamment graves</b> pour empêcher la poursuite du contrat (Cass. soc., 26 mars 2014).</li>
          <li>Si les faits sont établis et suffisamment graves : la prise d'acte produit les effets d'un <b>licenciement sans cause réelle et sérieuse</b> (ou nul si les faits le justifient).</li>
          <li>Si les faits ne sont pas établis ou insuffisamment graves : elle produit les effets d'une <b>démission</b>.</li>
        </ul>
        <p><b>4. La résiliation judiciaire :</b></p>
        <ul>
          <li>Le salarié saisit le conseil de prud'hommes pour demander la résiliation du contrat aux torts de l'employeur en raison de manquements graves à ses obligations (non-paiement des salaires, modification unilatérale du contrat, harcèlement).</li>
          <li>Pendant la procédure, le contrat <b>continue de s'exécuter</b>. Si la résiliation est prononcée, elle produit les effets d'un licenciement sans cause réelle et sérieuse à la date du jugement.</li>
        </ul>
        <p><b>5. La force majeure (art. L. 1234-12 C. trav.) :</b></p>
        <ul>
          <li>Événement <b>extérieur, imprévisible et irrésistible</b> rendant impossible la poursuite du contrat. Application très restrictive par la jurisprudence (Cass. soc., 12 février 2003 : la liquidation judiciaire ne constitue pas un cas de force majeure).</li>
          <li>La rupture est immédiate, sans préavis ni procédure. Le salarié perçoit une indemnité compensatrice si la force majeure est d'origine professionnelle (art. L. 1234-13).</li>
        </ul>
        <p><b>6. La mise à la retraite et le départ volontaire à la retraite :</b></p>
        <ul>
          <li><b>Mise à la retraite</b> (art. L. 1237-5 C. trav.) : décision de l'employeur, possible à partir de <b>70 ans</b> ou, entre 67 et 69 ans, avec l'accord du salarié (procédure d'interrogation annuelle). Indemnité au moins égale à l'indemnité de licenciement.</li>
          <li><b>Départ volontaire</b> (art. L. 1237-9) : initiative du salarié ayant atteint l'âge d'ouverture du droit à pension. Indemnité de départ à la retraite (inférieure à l'indemnité de licenciement).</li>
        </ul>`
      }
    ]
  },
  'social-representation': {
    introduction: "La représentation du personnel, profondément réformée par les ordonnances Macron du 22 septembre 2017, est désormais unifiée au sein du Comité social et économique (CSE). Instance unique de représentation, le CSE se substitue aux anciennes institutions (délégués du personnel, comité d'entreprise, CHSCT) et constitue l'interlocuteur central des salariés dans l'entreprise. Sa maîtrise est essentielle pour le CRFPA en droit social.",
    readTime: 20,
    sections: [
      {
        title: "Le Comité social et économique (CSE) : mise en place et composition",
        content: `<p>Le <b>Comité social et économique</b> (CSE), institué par l'ordonnance n° 2017-1386 du 22 septembre 2017, est l'instance unique de représentation du personnel dans les entreprises d'au moins <b>11 salariés</b> (art. L. 2311-2 C. trav.). Il fusionne les anciennes instances représentatives du personnel.</p>
        <p><b>Les conditions de mise en place :</b></p>
        <ul>
          <li><b>Seuil d'effectif</b> : le CSE est obligatoire dans les entreprises d'au moins 11 salariés pendant <b>12 mois consécutifs</b> (art. L. 2311-2). Le calcul de l'effectif obéit aux règles des articles L. 1111-2 et L. 1111-3.</li>
          <li><b>Obligation de l'employeur</b> : l'employeur doit organiser les élections. À défaut, il commet un délit d'entrave (art. L. 2317-1) puni d'un an d'emprisonnement et 7 500 euros d'amende.</li>
          <li><b>Carence</b> : si aucun candidat ne se présente ou si le quorum n'est pas atteint, un procès-verbal de carence est dressé et transmis à l'inspection du travail (art. L. 2314-9).</li>
        </ul>
        <p><b>La composition du CSE :</b></p>
        <ul>
          <li><b>Présidence</b> : l'employeur ou son représentant, assisté éventuellement de 3 collaborateurs (art. L. 2315-23).</li>
          <li><b>Délégation élue du personnel</b> : nombre de titulaires et de suppléants fixé par le décret n° 2017-1819 en fonction de l'effectif (ex. : 1 titulaire et 1 suppléant pour 11 à 24 salariés, 4 pour 50 à 74 salariés, etc.).</li>
          <li><b>Représentant syndical au CSE</b> : chaque organisation syndicale représentative peut désigner un représentant syndical au CSE (art. L. 2314-2).</li>
          <li><b>Secrétaire et trésorier</b> : désignés parmi les membres titulaires dans les entreprises d'au moins 50 salariés (art. L. 2315-23 al. 2).</li>
        </ul>
        <p><b>Le mandat :</b></p>
        <ul>
          <li>La durée du mandat est de <b>4 ans</b> (art. L. 2314-33), réduite à 2 ou 3 ans par accord collectif.</li>
          <li>Le nombre de mandats successifs est limité à <b>3</b>, sauf dans les entreprises de moins de 50 salariés ou disposition contraire d'un accord collectif (art. L. 2314-33).</li>
        </ul>`
      },
      {
        title: "Les élections professionnelles",
        content: `<p>Les <b>élections professionnelles</b> du CSE obéissent à des règles précises qui garantissent la sincérité du scrutin et la représentativité des élus. Elles constituent par ailleurs le principal critère de mesure de la <b>représentativité syndicale</b> dans l'entreprise.</p>
        <p><b>L'initiative des élections :</b></p>
        <ul>
          <li>L'employeur doit engager le processus électoral en <b>informant le personnel</b> de l'organisation des élections, puis en <b>invitant les organisations syndicales</b> intéressées à négocier le protocole d'accord préélectoral (PAP) et à établir leurs listes de candidats (art. L. 2314-5).</li>
          <li>Un salarié ou une organisation syndicale peut demander l'organisation des élections en l'absence d'initiative de l'employeur (art. L. 2314-8).</li>
        </ul>
        <p><b>Le protocole d'accord préélectoral (PAP) :</b></p>
        <ul>
          <li>Le PAP fixe les <b>modalités d'organisation</b> des élections : répartition du personnel et des sièges entre les collèges électoraux, horaires et lieu du scrutin.</li>
          <li><b>Double condition de majorité</b> (art. L. 2314-6) : le PAP doit être signé par la majorité des organisations syndicales ayant participé à la négociation, dont les organisations syndicales représentatives ayant recueilli la majorité des suffrages exprimés aux dernières élections.</li>
          <li>Le PAP peut modifier le nombre et la composition des collèges électoraux (sous réserve de respecter l'article L. 2314-11 imposant un collège spécifique pour les cadres dans les entreprises de plus de 25 cadres).</li>
        </ul>
        <p><b>Le scrutin :</b></p>
        <ul>
          <li><b>Mode de scrutin</b> : scrutin de liste à <b>deux tours</b> avec représentation proportionnelle à la plus forte moyenne (art. L. 2314-29).</li>
          <li><b>Premier tour</b> : réservé aux listes présentées par les organisations syndicales. Le quorum doit être atteint (nombre de votants au moins égal à la moitié des électeurs inscrits).</li>
          <li><b>Second tour</b> : organisé dans les 15 jours si le quorum n'est pas atteint au premier tour ou si tous les sièges n'ont pas été pourvus. Les candidatures libres sont possibles.</li>
          <li><b>Représentation équilibrée femmes-hommes</b> (art. L. 2314-30) : les listes doivent être composées d'un nombre de femmes et d'hommes correspondant à leur proportion dans le collège, sous peine d'annulation de l'élection des candidats du sexe surreprésenté.</li>
        </ul>`
      },
      {
        title: "Les attributions du CSE",
        content: `<p>Les <b>attributions du CSE</b> varient selon l'effectif de l'entreprise. La distinction fondamentale oppose les entreprises de <b>11 à 49 salariés</b> et les entreprises d'<b>au moins 50 salariés</b>.</p>
        <p><b>Dans les entreprises de 11 à 49 salariés (art. L. 2312-5 et s.) :</b></p>
        <ul>
          <li>La délégation du personnel au CSE a pour mission de <b>présenter à l'employeur les réclamations</b> individuelles ou collectives relatives aux salaires, à l'application du Code du travail et des accords collectifs.</li>
          <li>Elle contribue à promouvoir la <b>santé, la sécurité et les conditions de travail</b> et peut exercer le droit d'alerte en cas d'atteinte aux droits des personnes (art. L. 2312-5 al. 2).</li>
          <li>Elle peut saisir l'<b>inspection du travail</b> de toute plainte et observation relatives à l'application des dispositions légales et conventionnelles.</li>
        </ul>
        <p><b>Dans les entreprises d'au moins 50 salariés (art. L. 2312-8 et s.) :</b></p>
        <ul>
          <li><b>Attributions économiques</b> : le CSE est <b>informé et consulté</b> sur les questions intéressant l'organisation, la gestion et la marche générale de l'entreprise, notamment sur les mesures affectant le volume ou la structure des effectifs, la durée du travail, les conditions d'emploi et de formation.</li>
          <li><b>Trois consultations récurrentes obligatoires</b> (art. L. 2312-17) : les orientations stratégiques de l'entreprise, la situation économique et financière, la politique sociale, les conditions de travail et l'emploi.</li>
          <li><b>Consultations ponctuelles</b> (art. L. 2312-8 et L. 2312-37) : restructurations, licenciements collectifs, introduction de nouvelles technologies, modifications importantes de l'organisation du travail.</li>
          <li><b>Attributions en matière de santé et sécurité</b> : le CSE reprend les anciennes missions du CHSCT. Il peut constituer une <b>Commission santé, sécurité et conditions de travail</b> (CSSCT), obligatoire dans les entreprises d'au moins 300 salariés (art. L. 2315-36).</li>
          <li><b>Activités sociales et culturelles</b> (art. L. 2312-78) : gestion des œuvres sociales au bénéfice des salariés (chèques vacances, billetterie, activités sportives et culturelles).</li>
        </ul>
        <p><b>Le droit d'alerte :</b></p>
        <ul>
          <li><b>Alerte économique</b> (art. L. 2312-63) : lorsque le CSE a connaissance de faits de nature à affecter de manière préoccupante la situation économique de l'entreprise.</li>
          <li><b>Alerte en cas d'atteinte aux droits des personnes</b> (art. L. 2312-59) : si un membre du CSE constate une atteinte aux droits des personnes, à leur santé physique ou mentale ou aux libertés individuelles (harcèlement, discrimination).</li>
        </ul>`
      },
      {
        title: "Les moyens d'action du CSE",
        content: `<p>Pour exercer ses missions, le CSE dispose de <b>moyens matériels et humains</b> dont l'étendue varie selon la taille de l'entreprise. La protection des membres du CSE est assurée par le statut protecteur des représentants du personnel.</p>
        <p><b>Les heures de délégation :</b></p>
        <ul>
          <li>Chaque membre titulaire du CSE dispose d'un <b>crédit d'heures</b> mensuel fixé par le décret n° 2017-1819 (ex. : 10 heures pour les entreprises de 11 à 49 salariés, 18 heures pour 50 à 74 salariés, 24 heures pour 500 à 1499, etc.).</li>
          <li>Les heures de délégation sont assimilées à du <b>temps de travail effectif</b> et rémunérées comme telles (art. L. 2315-10). Le temps passé aux réunions du CSE convoquées par l'employeur n'est pas décompté des heures de délégation (art. L. 2315-11).</li>
          <li>Les heures sont <b>mutualisables</b> entre titulaires et suppléants et <b>reportables</b> d'un mois sur l'autre dans la limite de 12 mois (art. R. 2315-5 et R. 2315-6).</li>
        </ul>
        <p><b>Les moyens matériels et financiers :</b></p>
        <ul>
          <li><b>Local</b> : l'employeur met à disposition un local aménagé et le matériel nécessaire (art. L. 2315-25).</li>
          <li><b>Budget de fonctionnement</b> : subvention de <b>0,20 %</b> de la masse salariale brute dans les entreprises de 50 à 1999 salariés, <b>0,22 %</b> dans les entreprises de 2000 salariés et plus (art. L. 2315-61).</li>
          <li><b>Budget des activités sociales et culturelles</b> : fixé par accord d'entreprise ou, à défaut, maintien au niveau de la contribution patronale de l'année précédente (art. L. 2312-81 et L. 2312-82).</li>
          <li><b>Recours à un expert</b> : le CSE peut recourir à un expert-comptable (consultations récurrentes, licenciement collectif) ou à un expert habilité en matière de santé et sécurité (art. L. 2315-78 et s.). Le financement de l'expertise est partagé (80 % employeur, 20 % CSE) ou intégralement à la charge de l'employeur selon les cas.</li>
        </ul>
        <p><b>La protection des membres du CSE :</b></p>
        <ul>
          <li>Les membres titulaires et suppléants du CSE bénéficient du <b>statut de salarié protégé</b> (art. L. 2411-1 et s.) : leur licenciement est subordonné à l'<b>autorisation préalable de l'inspecteur du travail</b>.</li>
          <li>La protection s'étend aux <b>candidats</b> aux élections (pendant 6 mois après la publication des candidatures), aux anciens membres du CSE (pendant 6 mois après la fin du mandat) et aux salariés ayant demandé l'organisation des élections.</li>
          <li>Le <b>délit d'entrave</b> au fonctionnement du CSE est puni d'un an d'emprisonnement et 7 500 euros d'amende (art. L. 2317-1).</li>
        </ul>`
      },
      {
        title: "L'unité économique et sociale (UES)",
        content: `<p>L'<b>unité économique et sociale</b> (UES), construction jurisprudentielle consacrée par le législateur (art. L. 2313-8 C. trav.), permet de regrouper plusieurs entités juridiquement distinctes en une seule unité pour la mise en place d'un CSE commun. Elle joue un rôle essentiel dans les groupes de sociétés.</p>
        <p><b>Les critères de reconnaissance de l'UES :</b></p>
        <ul>
          <li><b>Unité économique</b> : caractérisée par la similarité ou la complémentarité des activités, la concentration du pouvoir de direction et de gestion, l'existence d'une communauté d'intérêts économiques. L'unité économique se manifeste par la direction commune, l'intégration des activités, la dépendance économique entre les entités (Cass. soc., 18 juillet 2000).</li>
          <li><b>Unité sociale</b> : caractérisée par l'existence d'une communauté de travailleurs liés par des conditions de travail similaires (statut social comparable, permutabilité du personnel, gestion commune des ressources humaines, convention collective identique).</li>
          <li>Les deux critères sont <b>cumulatifs</b> mais s'apprécient de manière <b>globale</b> : la jurisprudence n'exige pas que chaque élément soit parfaitement réuni, mais que l'ensemble des indices caractérise une unité économique et sociale (Cass. soc., 31 janvier 2012).</li>
        </ul>
        <p><b>Les modes de reconnaissance :</b></p>
        <ul>
          <li><b>Par accord collectif</b> entre les employeurs et les organisations syndicales représentatives (art. L. 2313-8 al. 1).</li>
          <li><b>Par décision de justice</b> : le tribunal judiciaire peut reconnaître l'existence d'une UES à la demande d'une organisation syndicale ou de salariés (art. L. 2313-8 al. 2).</li>
          <li>La reconnaissance de l'UES peut être <b>remise en cause</b> si les conditions ne sont plus réunies (évolution de la structure du groupe, autonomisation d'une entité).</li>
        </ul>
        <p><b>Les effets de la reconnaissance :</b></p>
        <ul>
          <li><b>Mise en place d'un CSE commun</b> : l'ensemble des salariés des entités composant l'UES élisent un CSE unique (art. L. 2313-8).</li>
          <li><b>Appréciation des seuils d'effectif</b> : les effectifs sont calculés en additionnant les salariés de toutes les entités composant l'UES, ce qui peut entraîner le franchissement de seuils (50 salariés, 300 salariés) et l'application de règles plus protectrices.</li>
          <li><b>Négociation collective</b> : la négociation obligatoire s'exerce au niveau de l'UES. Les accords collectifs sont conclus au niveau de l'UES et s'appliquent à l'ensemble des salariés des entités qui la composent.</li>
          <li><b>Licenciement économique</b> : le périmètre d'appréciation du motif économique et des obligations de reclassement s'étend à l'ensemble de l'UES (Cass. soc., 16 novembre 2010).</li>
        </ul>
        <h4>Les autres niveaux de représentation</h4>
        <p>Au-delà du CSE d'entreprise, le droit du travail prévoit des <b>CSE d'établissement</b> dans les entreprises comportant au moins deux établissements distincts (art. L. 2313-1) et un <b>CSE central</b> (art. L. 2313-1 al. 2). Un <b>comité de groupe</b> peut être mis en place dans les groupes de sociétés (art. L. 2331-1). Au niveau européen, un <b>comité d'entreprise européen</b> peut être constitué dans les entreprises de dimension communautaire (directive 2009/38/CE, art. L. 2341-1 et s. C. trav.).</p>`
      }
    ]
  },
  'social-temps-travail': {
    introduction: "Le temps de travail constitue un domaine central du droit social, à la croisée de l'ordre public de protection des salariés et de la négociation collective. Depuis les lois Aubry de 1998 et 2000, la durée légale est fixée à 35 heures hebdomadaires, mais de nombreux dispositifs (heures supplémentaires, forfaits, temps partiel) permettent d'adapter le temps de travail aux besoins des entreprises et des salariés.",
    readTime: 20,
    sections: [
      {
        title: "La durée légale du travail et ses dérogations",
        content: `<p>La <b>durée légale du travail</b> est fixée à <b>35 heures par semaine</b> (art. L. 3121-27 C. trav.) pour toutes les entreprises, quel que soit leur effectif. Cette durée n'est ni un minimum (le temps partiel est possible) ni un maximum (les heures supplémentaires sont possibles), mais constitue le <b>seuil de déclenchement</b> des heures supplémentaires.</p>
        <p><b>La notion de temps de travail effectif (art. L. 3121-1) :</b></p>
        <ul>
          <li>Le temps de travail effectif est « le temps pendant lequel le salarié est à la disposition de l'employeur et se conforme à ses directives sans pouvoir vaquer librement à des occupations personnelles ».</li>
          <li><b>Temps assimilés</b> : les heures de formation obligatoire (art. L. 6321-2), les visites médicales obligatoires, les temps de délégation des représentants du personnel.</li>
          <li><b>Temps exclus</b> : les temps de trajet domicile-travail (sauf s'il dépasse le temps normal et constitue un temps de travail effectif – Cass. soc., 31 octobre 2007), les temps de pause, les temps de restauration (sauf si le salarié reste à la disposition de l'employeur).</li>
          <li><b>Les astreintes</b> (art. L. 3121-9) : période pendant laquelle le salarié, sans être sur son lieu de travail, doit être en mesure d'intervenir. L'astreinte n'est pas du temps de travail effectif, mais le temps d'intervention est du temps de travail effectif.</li>
        </ul>
        <p><b>Les durées maximales de travail :</b></p>
        <ul>
          <li><b>Durée quotidienne maximale</b> : 10 heures (art. L. 3121-18), sauf dérogation conventionnelle portant à 12 heures (art. L. 3121-19) ou autorisation de l'inspecteur du travail.</li>
          <li><b>Durée hebdomadaire maximale absolue</b> : 48 heures au cours d'une même semaine (art. L. 3121-20).</li>
          <li><b>Durée hebdomadaire maximale moyenne</b> : 44 heures sur une période de 12 semaines consécutives (art. L. 3121-22), portée à 46 heures par accord collectif (art. L. 3121-23).</li>
        </ul>`
      },
      {
        title: "Les heures supplémentaires",
        content: `<p>Les <b>heures supplémentaires</b> sont les heures de travail effectuées au-delà de la durée légale de 35 heures hebdomadaires (art. L. 3121-28 C. trav.) ou de la durée considérée comme équivalente dans certains secteurs. Leur régime a été profondément modifié par les lois Travail de 2016 et les ordonnances de 2017.</p>
        <p><b>Le contingent annuel d'heures supplémentaires :</b></p>
        <ul>
          <li>Le contingent est fixé par <b>accord collectif</b> (d'entreprise ou de branche). À défaut d'accord, le contingent réglementaire est de <b>220 heures</b> par an et par salarié (art. D. 3121-24).</li>
          <li>Les heures effectuées <b>au-delà du contingent</b> ouvrent droit à une <b>contrepartie obligatoire en repos</b> (COR) : 50 % dans les entreprises de 20 salariés au plus, 100 % dans les entreprises de plus de 20 salariés (art. L. 3121-33).</li>
          <li>L'employeur doit informer et consulter le CSE préalablement à l'accomplissement d'heures supplémentaires au-delà du contingent (art. L. 3121-33).</li>
        </ul>
        <p><b>La majoration des heures supplémentaires :</b></p>
        <ul>
          <li>La <b>loi du 20 août 2008</b> a donné la priorité à l'accord d'entreprise sur l'accord de branche pour fixer le taux de majoration, avec un plancher de <b>10 %</b> (art. L. 3121-33).</li>
          <li>À défaut d'accord, les taux légaux s'appliquent : <b>25 %</b> pour les 8 premières heures supplémentaires (de la 36e à la 43e heure), <b>50 %</b> au-delà (art. L. 3121-36).</li>
          <li>Le paiement de la majoration peut être remplacé par un <b>repos compensateur de remplacement</b> (RCR) prévu par accord collectif (art. L. 3121-33). Les heures compensées en repos ne s'imputent pas sur le contingent annuel.</li>
        </ul>
        <p><b>Le régime fiscal et social :</b></p>
        <ul>
          <li>Depuis la loi du 24 décembre 2018 (mesures d'urgence économiques et sociales), les heures supplémentaires bénéficient d'une <b>exonération de cotisations salariales</b> et d'une <b>exonération d'impôt sur le revenu</b> dans la limite de 7 500 euros par an (portée à 7 500 euros nets par la loi de finances pour 2022).</li>
          <li>La <b>déduction forfaitaire de cotisations patronales</b> s'applique dans les entreprises de moins de 250 salariés (art. L. 241-18 CSS).</li>
        </ul>`
      },
      {
        title: "Les conventions de forfait",
        content: `<p>Les <b>conventions de forfait</b> permettent de déroger au décompte horaire du temps de travail en rémunérant le salarié sur la base d'un volume global de travail. Le Code du travail distingue le forfait en heures et le forfait en jours.</p>
        <p><b>Le forfait en heures (art. L. 3121-56 et s.) :</b></p>
        <ul>
          <li><b>Forfait en heures sur la semaine ou le mois</b> : peut être conclu par tout salarié. La convention individuelle de forfait intègre un nombre déterminé d'heures supplémentaires, rémunérées avec leur majoration. Pas de nécessité d'un accord collectif préalable.</li>
          <li><b>Forfait en heures sur l'année</b> : réservé aux cadres dont la nature des fonctions ne les conduit pas à suivre l'horaire collectif et aux salariés disposant d'une réelle autonomie dans l'organisation de leur emploi du temps (art. L. 3121-56). Un <b>accord collectif</b> est nécessaire.</li>
        </ul>
        <p><b>Le forfait en jours sur l'année (art. L. 3121-58 et s.) :</b></p>
        <ul>
          <li><b>Bénéficiaires</b> : les cadres disposant d'une autonomie dans l'organisation de leur emploi du temps et dont la nature des fonctions ne les conduit pas à suivre l'horaire collectif ; les salariés dont la durée du temps de travail ne peut être prédéterminée et qui disposent d'une réelle autonomie (art. L. 3121-58).</li>
          <li><b>Plafond légal</b> : 218 jours par an (art. L. 3121-64), incluant la journée de solidarité. Ce plafond peut être réduit par accord collectif ou convention individuelle.</li>
          <li><b>Accord collectif préalable obligatoire</b> (art. L. 3121-63) : l'accord doit déterminer les catégories de salariés concernées, la période de référence, le nombre de jours compris dans le forfait, les conditions de prise en compte des absences et des arrivées/départs en cours de période, et les <b>modalités de suivi de la charge de travail</b>.</li>
        </ul>
        <p><b>Le contrôle jurisprudentiel du forfait en jours :</b></p>
        <ul>
          <li>La Cour de cassation exerce un contrôle strict des garanties prévues par l'accord collectif : l'accord doit assurer la <b>protection de la santé et de la sécurité</b> du salarié (Cass. soc., 29 juin 2011, <i>Association APEI d'Avignon</i>). À défaut de garanties suffisantes, le forfait est <b>nul</b> et le salarié peut réclamer le paiement des heures supplémentaires.</li>
          <li>L'employeur doit organiser un <b>entretien annuel</b> portant sur la charge de travail, l'organisation du travail et l'articulation vie professionnelle/vie privée (art. L. 3121-65).</li>
          <li>Le salarié en forfait jours n'est pas soumis à la durée maximale quotidienne de 10 heures ni à la durée maximale hebdomadaire de 48 heures, mais bénéficie du repos quotidien de 11 heures et du repos hebdomadaire de 35 heures consécutives.</li>
        </ul>`
      },
      {
        title: "Le travail à temps partiel",
        content: `<p>Le <b>travail à temps partiel</b> correspond à un temps de travail inférieur à la durée légale de 35 heures hebdomadaires ou à la durée conventionnelle si elle est inférieure (art. L. 3123-1 C. trav.). Son régime, protecteur du salarié, est prévu aux articles L. 3123-1 et suivants.</p>
        <p><b>Les conditions de mise en place :</b></p>
        <ul>
          <li><b>Contrat de travail écrit</b> obligatoire (art. L. 3123-6) mentionnant : la qualification du salarié, la durée hebdomadaire ou mensuelle prévue, la répartition de la durée du travail entre les jours de la semaine ou les semaines du mois, les conditions de modification de cette répartition, les limites des heures complémentaires.</li>
          <li><b>Durée minimale</b> : 24 heures par semaine (art. L. 3123-27), sauf dérogation conventionnelle (minimum de 16 heures par accord de branche étendu), demande écrite et motivée du salarié pour raisons personnelles, ou contrat d'une durée maximale de 7 jours.</li>
          <li>L'absence d'écrit fait <b>présumer</b> que le contrat est à temps plein (Cass. soc., 10 octobre 2018) : l'employeur supporte la charge de prouver la durée exacte convenue.</li>
        </ul>
        <p><b>Les heures complémentaires :</b></p>
        <ul>
          <li>Les heures effectuées au-delà de la durée contractuelle et dans la limite du <b>1/10e</b> de cette durée sont majorées de <b>10 %</b> (art. L. 3123-29).</li>
          <li>Un accord collectif peut porter cette limite au <b>1/3</b> de la durée contractuelle (art. L. 3123-20). Les heures complémentaires effectuées entre le 1/10e et le 1/3 sont majorées de <b>25 %</b> (art. L. 3123-29).</li>
          <li>Les heures complémentaires ne peuvent avoir pour effet de porter la durée du travail au niveau de la durée légale ou conventionnelle (art. L. 3123-9).</li>
          <li>Si le salarié effectue régulièrement des heures complémentaires, la durée contractuelle doit être <b>réévaluée</b> (art. L. 3123-13).</li>
        </ul>
        <p><b>Droits du salarié à temps partiel :</b></p>
        <ul>
          <li><b>Égalité de traitement</b> avec les salariés à temps plein (art. L. 3123-5) : droits proportionnels (rémunération, congés payés, ancienneté) et droits identiques (formation, promotion, protection sociale).</li>
          <li><b>Priorité de passage à temps plein</b> : le salarié qui souhaite occuper un emploi à temps plein est prioritaire pour l'attribution d'un emploi correspondant à sa qualification (art. L. 3123-3).</li>
        </ul>`
      },
      {
        title: "Le repos et les congés",
        content: `<p>Le droit au repos constitue un <b>droit fondamental</b> du salarié, consacré tant par le droit interne que par le droit européen (directive 2003/88/CE). Le Code du travail organise plusieurs types de repos et de congés.</p>
        <p><b>Le repos quotidien et hebdomadaire :</b></p>
        <ul>
          <li><b>Repos quotidien</b> : tout salarié bénéficie d'un repos quotidien d'une durée minimale de <b>11 heures consécutives</b> (art. L. 3131-1). Des dérogations sont possibles par accord collectif, dans la limite de 9 heures (art. L. 3131-2), ou par décision unilatérale en cas de surcroît exceptionnel d'activité.</li>
          <li><b>Repos hebdomadaire</b> : d'une durée minimale de <b>24 heures consécutives</b>, auxquelles s'ajoutent les 11 heures de repos quotidien, soit <b>35 heures consécutives</b> (art. L. 3132-2). Le repos hebdomadaire est donné le <b>dimanche</b> (art. L. 3132-3), sous réserve des dérogations prévues par la loi (commerces de détail, zones touristiques, etc.).</li>
        </ul>
        <p><b>Les congés payés (art. L. 3141-1 et s.) :</b></p>
        <ul>
          <li>Tout salarié a droit à un congé de <b>2,5 jours ouvrables par mois de travail effectif</b>, soit <b>30 jours ouvrables</b> (5 semaines) pour une année complète (art. L. 3141-3).</li>
          <li><b>Période d'acquisition</b> : du 1er juin au 31 mai de l'année suivante (art. R. 3141-3), sauf convention ou accord collectif fixant une autre période.</li>
          <li><b>Période de prise</b> : fixée par accord collectif ou, à défaut, par l'employeur après consultation du CSE. Le congé principal (4 semaines minimum) doit être pris entre le 1er mai et le 31 octobre (art. L. 3141-13).</li>
          <li><b>Indemnité de congés payés</b> : calculée selon la règle la plus favorable entre le <b>maintien du salaire</b> et la <b>règle du 1/10e</b> de la rémunération brute perçue au cours de la période de référence (art. L. 3141-24).</li>
          <li><b>Jurisprudence européenne récente</b> : la CJUE et la Cour de cassation (Cass. soc., 13 septembre 2023, revirement) ont imposé l'acquisition de congés payés pendant les périodes d'arrêt maladie, mettant fin à la position contraire du droit français. La loi du 22 avril 2024 a intégré cette solution.</li>
        </ul>
        <p><b>Les jours fériés (art. L. 3133-1 et s.) :</b></p>
        <ul>
          <li>Le Code du travail prévoit <b>11 jours fériés</b> (art. L. 3133-1). Seul le <b>1er Mai</b> est obligatoirement chômé et payé (art. L. 3133-4). Les autres jours fériés sont chômés ou travaillés selon les usages, accords collectifs ou décisions de l'employeur.</li>
          <li>La <b>journée de solidarité</b> (art. L. 3133-7) : journée supplémentaire de travail non rémunérée au bénéfice de l'autonomie des personnes âgées et handicapées, fixée par accord collectif ou, à défaut, par l'employeur (le lundi de Pentecôte par défaut).</li>
        </ul>`
      }
    ]
  }
};
