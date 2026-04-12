export const COURS_AFFAIRES = {
  'affaires-societes': {
    introduction: "Le droit des sociétés constitue une branche essentielle du droit des affaires. Les principales formes de sociétés sont régies par le Code civil (art. 1832 et s.) et le Code de commerce. La maîtrise des caractéristiques de chaque forme sociale est indispensable pour le CRFPA, tant en matière de conseil que de contentieux.",
    readTime: 25,
    sections: [
      {
        title: "Les règles communes à toutes les sociétés",
        content: `<p>L'article 1832 du Code civil définit la société : « La société est instituée par deux ou plusieurs personnes qui conviennent par un contrat d'affecter à une entreprise commune des biens ou leur industrie en vue de partager le bénéfice ou de profiter de l'économie qui pourra en résulter. Elle peut être instituée, dans les cas prévus par la loi, par l'acte de volonté d'une seule personne. »</p>
        <p><b>Les conditions de constitution :</b></p>
        <ul>
          <li><b>Les apports</b> : en numéraire (somme d'argent), en nature (biens meubles ou immeubles, corporels ou incorporels) ou en industrie (travail, savoir-faire). Les apports en industrie ne concourent pas à la formation du capital social mais donnent droit à une part des bénéfices (art. 1843-2 C. civ.).</li>
          <li><b>La participation aux bénéfices et aux pertes</b> : elle est proportionnelle aux apports, sauf clause contraire. Les <b>clauses léonines</b> sont réputées non écrites (art. 1844-1 C. civ.) : est prohibée toute clause attribuant à un associé la totalité du profit ou l'exonérant de la totalité des pertes.</li>
          <li><b>L'affectio societatis</b> : intention de collaborer sur un pied d'égalité au sein de la société. Condition jurisprudentielle non codifiée mais essentielle (notamment pour distinguer la société de fait de l'indivision).</li>
          <li><b>La personnalité morale</b> : acquise par l'immatriculation au Registre du Commerce et des Sociétés (RCS) – art. 1842 C. civ. Avant immatriculation, les rapports entre associés sont régis par le contrat de société et les principes du droit des obligations.</li>
        </ul>
        <p><b>Les droits des associés :</b></p>
        <ul>
          <li><b>Droits financiers</b> : droit aux dividendes, droit au boni de liquidation.</li>
          <li><b>Droits politiques</b> : droit de vote aux assemblées générales, droit à l'information.</li>
          <li><b>Droit de retrait</b> : dans certaines formes sociales (SCI, SNC).</li>
          <li><b>Droit de ne pas être exclu</b> sans base légale ou statutaire (Cass. com., 15 juillet 1992).</li>
        </ul>`
      },
      {
        title: "La société à responsabilité limitée (SARL) et l'EURL",
        content: `<p>La <b>SARL</b> est la forme sociale la plus répandue en France (art. L. 223-1 et s. C. com.). Elle combine la limitation de responsabilité des associés et la souplesse de fonctionnement.</p>
        <p><b>Caractéristiques principales :</b></p>
        <ul>
          <li><b>Associés</b> : de 1 (EURL) à 100 associés. La responsabilité est <b>limitée aux apports</b> (art. L. 223-1 C. com.).</li>
          <li><b>Capital social</b> : librement fixé par les statuts (depuis la loi du 1er août 2003, plus de minimum légal). Les parts sociales ne sont pas librement cessibles à des tiers étrangers : <b>agrément obligatoire</b> à la majorité des associés représentant au moins la moitié des parts sociales (art. L. 223-14).</li>
          <li><b>Gérance</b> : un ou plusieurs gérants, personnes physiques, associés ou non (art. L. 223-18). Le gérant engage la société pour tous les actes entrant dans l'objet social. Les limitations statutaires sont inopposables aux tiers.</li>
        </ul>
        <p><b>Assemblées et décisions collectives :</b></p>
        <ul>
          <li><b>Assemblées ordinaires</b> : majorité absolue des parts (première consultation), puis majorité simple (art. L. 223-29). Approbation des comptes, affectation du résultat, nomination/révocation du gérant.</li>
          <li><b>Assemblées extraordinaires</b> : modification des statuts. Majorité des 2/3 des parts détenues par les associés présents ou représentés (art. L. 223-30). Unanimité requise pour l'augmentation des engagements des associés.</li>
          <li><b>Conventions réglementées</b> (art. L. 223-19) : conventions entre la société et un gérant ou associé, soumises à approbation a posteriori par l'assemblée. Les conventions interdites (prêts, découverts) sont frappées de nullité (art. L. 223-21).</li>
        </ul>
        <p><b>L'EURL</b> : SARL unipersonnelle. L'associé unique exerce les pouvoirs dévolus à l'assemblée des associés. Si l'associé unique est le gérant, les conventions entre la société et le gérant sont simplement mentionnées au registre des décisions.</p>
        <p><b>Responsabilité du gérant :</b></p>
        <ul>
          <li>Responsabilité civile envers la société et les tiers pour violation de la loi, des statuts, ou faute de gestion (art. L. 223-22). Action sociale <i>ut universi</i> (par la société) ou <i>ut singuli</i> (par un associé au nom de la société).</li>
          <li>Responsabilité fiscale (solidarité fiscale en cas de manœuvres frauduleuses, art. L. 267 LPF).</li>
          <li>Responsabilité pénale : abus de biens sociaux (art. L. 241-3 C. com.), distribution de dividendes fictifs, etc.</li>
        </ul>`
      },
      {
        title: "La société anonyme (SA)",
        content: `<p>La <b>SA</b> est la forme sociale adaptée aux grandes entreprises (art. L. 225-1 et s. C. com.). Elle se caractérise par la séparation entre la propriété du capital et la direction.</p>
        <p><b>Caractéristiques principales :</b></p>
        <ul>
          <li><b>Associés</b> : minimum 2 (depuis la loi du 19 juillet 2019, anciennement 7). Minimum 7 pour les SA cotées.</li>
          <li><b>Capital social minimum</b> : 37 000 euros (art. L. 224-2 C. com.).</li>
          <li><b>Responsabilité</b> limitée aux apports.</li>
          <li><b>Actions</b> librement cessibles (sauf clause d'agrément ou de préemption).</li>
        </ul>
        <p><b>Modes de gouvernance :</b></p>
        <p><b>1. SA à conseil d'administration (art. L. 225-17 et s.) :</b></p>
        <ul>
          <li>Le <b>conseil d'administration</b> (CA) : 3 à 18 membres (sauf dérogation en cas de fusion). Détermine les orientations de l'activité et veille à leur mise en œuvre. Compétence pour toute question intéressant la bonne marche de la société.</li>
          <li>Le <b>président du CA</b> : organise et dirige les travaux du conseil. Représente la société dans ses rapports avec les tiers (si la dissociation PDG/Président n'est pas retenue).</li>
          <li>Le <b>directeur général (DG)</b> : investi des pouvoirs les plus étendus pour agir en toutes circonstances au nom de la société. La loi offre le choix entre le cumul (PDG) et la dissociation (président + DG).</li>
          <li>Les <b>directeurs généraux délégués</b> : jusqu'à 5, assistent le DG.</li>
        </ul>
        <p><b>2. SA à directoire et conseil de surveillance (art. L. 225-57 et s.) :</b></p>
        <ul>
          <li>Le <b>directoire</b> (1 à 5 membres) : organe de direction, investi des pouvoirs les plus étendus. Le président du directoire représente la société.</li>
          <li>Le <b>conseil de surveillance</b> (3 à 18 membres) : organe de contrôle permanent. Il nomme et révoque les membres du directoire. Autorisation préalable pour certaines opérations (cautions, avals, garanties).</li>
        </ul>
        <p><b>Les assemblées générales :</b></p>
        <ul>
          <li><b>AGO</b> : quorum 1/5 des droits de vote (1re convocation), aucun quorum (2e convocation). Majorité simple.</li>
          <li><b>AGE</b> : quorum 1/4 (1re convocation), 1/5 (2e convocation). Majorité des 2/3 des voix exprimées.</li>
        </ul>`
      },
      {
        title: "La société par actions simplifiée (SAS) et la SASU",
        content: `<p>La <b>SAS</b> (art. L. 227-1 et s. C. com.) est devenue la forme sociale préférée des praticiens en raison de sa grande <b>liberté statutaire</b>. Créée par la loi du 3 janvier 1994, elle a été ouverte à toutes les personnes par la loi du 12 juillet 1999.</p>
        <p><b>Caractéristiques principales :</b></p>
        <ul>
          <li><b>Associés</b> : 1 (SASU) ou plusieurs, personnes physiques ou morales.</li>
          <li><b>Capital social</b> : librement fixé par les statuts (pas de minimum).</li>
          <li><b>Responsabilité</b> limitée aux apports.</li>
          <li><b>Actions</b> : peuvent être de différentes catégories (actions de préférence avec droits particuliers).</li>
        </ul>
        <p><b>La liberté statutaire :</b></p>
        <ul>
          <li>Les statuts déterminent librement l'organisation de la société : organes de direction, modalités de prise de décision, conditions de cession des actions.</li>
          <li>Seule obligation impérative : la désignation d'un <b>président</b> (personne physique ou morale) qui représente la société à l'égard des tiers (art. L. 227-6).</li>
          <li>Possibilité de désigner un ou plusieurs <b>directeurs généraux</b> (ou tout autre organe) avec les pouvoirs déterminés par les statuts.</li>
          <li>Les décisions collectives des associés sont prises dans les formes et conditions prévues par les statuts (art. L. 227-9). Toutefois, certaines décisions relèvent obligatoirement de la collectivité des associés : approbation des comptes, modification du capital, fusion, dissolution, transformation, nomination des commissaires aux comptes.</li>
        </ul>
        <p><b>Clauses statutaires spécifiques :</b></p>
        <ul>
          <li><b>Clause d'agrément</b> (art. L. 227-14) : toute cession d'actions peut être soumise à agrément.</li>
          <li><b>Clause d'inaliénabilité</b> (art. L. 227-13) : les statuts peuvent prévoir l'inaliénabilité des actions pour une durée maximale de <b>10 ans</b>.</li>
          <li><b>Clause d'exclusion</b> (art. L. 227-16) : les statuts peuvent prévoir l'exclusion d'un associé dans des conditions prévues, sous réserve du respect du contradictoire et d'une juste indemnisation.</li>
          <li><b>Clause de <i>drag along</i> (sortie conjointe forcée)</b> et <b>clause de <i>tag along</i> (sortie conjointe volontaire)</b> : fréquemment utilisées dans les pactes d'actionnaires des SAS.</li>
        </ul>
        <p><b>Limites de la SAS :</b></p>
        <ul>
          <li>La SAS ne peut pas faire offre au public de titres financiers (art. L. 227-2), ni être admise aux négociations sur un marché réglementé.</li>
          <li>Le régime social du président de SAS est celui de <b>salarié</b> (assimilé salarié au titre du régime général de la sécurité sociale), à la différence du gérant majoritaire de SARL (travailleur indépendant).</li>
        </ul>`
      },
      {
        title: "Les sociétés de personnes : SNC et sociétés civiles",
        content: `<p><b>La société en nom collectif (SNC) – art. L. 221-1 et s. C. com. :</b></p>
        <ul>
          <li>Société de personnes par excellence, caractérisée par l'<b>intuitu personae</b> et la responsabilité <b>indéfinie et solidaire</b> des associés pour les dettes sociales (art. L. 221-1).</li>
          <li>Tous les associés ont la qualité de <b>commerçant</b>.</li>
          <li><b>Parts sociales</b> : cession uniquement à l'unanimité des associés (art. L. 221-13), sauf clause contraire des statuts.</li>
          <li><b>Gérance</b> : tous les associés sont gérants sauf désignation statutaire. Le gérant statutaire ne peut être révoqué que pour cause légitime, à l'unanimité des autres associés (ou judiciairement). Sa révocation entraîne la dissolution de la société, sauf clause de continuation.</li>
          <li><b>Fiscalité</b> : la SNC est en principe transparente fiscalement (imposition à l'IR des associés), sauf option pour l'IS (art. 206-3 CGI).</li>
          <li><b>Subsidiarité</b> de la responsabilité des associés : le créancier doit d'abord mettre en demeure la société (art. L. 221-1 al. 2).</li>
        </ul>
        <p><b>La société civile (art. 1845 et s. C. civ.) :</b></p>
        <ul>
          <li>Société dont l'objet est <b>civil</b> (non commercial). Formes les plus courantes : SCI (société civile immobilière), SCM (société civile de moyens), SCP (société civile professionnelle).</li>
          <li><b>Responsabilité des associés</b> : indéfinie mais <b>non solidaire</b> (sauf clause contraire), et <b>proportionnelle</b> à la part dans le capital (art. 1857 C. civ.). Subsidiaire : le créancier doit d'abord poursuivre vainement la société (art. 1858).</li>
          <li><b>Parts sociales</b> : cession à des tiers soumise à agrément unanime, sauf disposition statutaire contraire (art. 1861).</li>
          <li><b>Gérance</b> : un ou plusieurs gérants, associés ou non. Le gérant est révocable dans les conditions prévues par les statuts ou, à défaut, à l'unanimité. Responsabilité pour faute de gestion (art. 1850).</li>
        </ul>
        <p><b>Tableau comparatif des principales caractéristiques :</b></p>
        <ul>
          <li><b>SARL</b> : 1-100 associés, responsabilité limitée, parts sociales, gérant(s).</li>
          <li><b>SA</b> : min. 2 (ou 7 si cotée), responsabilité limitée, actions, CA/DG ou Directoire/CS.</li>
          <li><b>SAS</b> : 1+, responsabilité limitée, actions, président + liberté statutaire.</li>
          <li><b>SNC</b> : min. 2, responsabilité indéfinie et solidaire, parts sociales, tous gérants ou gérants désignés.</li>
          <li><b>SC</b> : min. 2, responsabilité indéfinie non solidaire, parts sociales, gérant(s).</li>
        </ul>`
      }
    ]
  },
  'affaires-procedures-collectives': {
    introduction: "Les procédures collectives, régies par le Livre VI du Code de commerce (art. L. 610-1 et s.), visent à traiter les difficultés des entreprises. Elles comprennent les procédures de prévention (mandat ad hoc, conciliation) et les procédures judiciaires (sauvegarde, redressement judiciaire, liquidation judiciaire). L'ordonnance n°2021-1193 du 15 septembre 2021 a transposé la directive européenne « Restructuration et insolvabilité » du 20 juin 2019.",
    readTime: 25,
    sections: [
      {
        title: "La prévention des difficultés : mandat ad hoc et conciliation",
        content: `<p>Le droit français privilégie la <b>détection précoce</b> et le <b>traitement amiable</b> des difficultés des entreprises.</p>
        <p><b>Le mandat ad hoc (art. L. 611-3 C. com.) :</b></p>
        <ul>
          <li>Le président du tribunal de commerce (ou judiciaire) peut, à la demande du dirigeant, désigner un <b>mandataire ad hoc</b> dont il détermine la mission.</li>
          <li>Le débiteur ne doit pas être en état de cessation des paiements.</li>
          <li>La procédure est <b>confidentielle</b> (art. L. 611-15 C. com.).</li>
          <li>Le mandataire n'a pas de pouvoir propre : il facilite la négociation avec les créanciers.</li>
          <li>Aucune durée légale n'est fixée ; la mission est déterminée par le président du tribunal.</li>
        </ul>
        <p><b>La conciliation (art. L. 611-4 et s. C. com.) :</b></p>
        <ul>
          <li><b>Conditions d'ouverture</b> : le débiteur éprouve une difficulté juridique, économique ou financière avérée ou prévisible, et ne se trouve pas en cessation des paiements depuis plus de <b>45 jours</b>.</li>
          <li><b>Procédure</b> : le président du tribunal ouvre la conciliation et désigne un conciliateur pour une durée de <b>4 mois</b> maximum, prorogeable d'un mois (5 mois au total).</li>
          <li><b>Objet</b> : favoriser la conclusion d'un <b>accord amiable</b> entre le débiteur et ses principaux créanciers.</li>
          <li><b>Effets de l'accord</b> :
            <ul>
              <li><b>Constatation</b> par le président du tribunal (art. L. 611-8 I) : l'accord est constaté et revêtu de la force exécutoire. Il reste confidentiel.</li>
              <li><b>Homologation</b> par le tribunal (art. L. 611-8 II) : l'accord est homologué si le débiteur n'est pas en cessation des paiements (ou si l'accord y met fin), si les termes de l'accord assurent la pérennité de l'activité, et si l'accord ne porte pas atteinte aux intérêts des créanciers non signataires. L'homologation est publique et confère le <b>privilège de conciliation</b> (« privilège de new money », art. L. 611-11) : les créanciers qui consentent un nouvel apport en trésorerie ou fournissent un nouveau bien ou service bénéficient d'un privilège de paiement en cas de procédure collective ultérieure.</li>
            </ul>
          </li>
        </ul>
        <p>La confidentialité de ces procédures est un avantage majeur qui les distingue des procédures collectives judiciaires.</p>`
      },
      {
        title: "La sauvegarde (art. L. 620-1 et s. C. com.)",
        content: `<p>La <b>procédure de sauvegarde</b>, créée par la loi du 26 juillet 2005, est une procédure <b>préventive</b> ouverte à la demande du débiteur qui justifie de difficultés qu'il n'est pas en mesure de surmonter, <b>sans être en cessation des paiements</b>.</p>
        <p><b>Ouverture :</b></p>
        <ul>
          <li>Seul le <b>débiteur</b> peut en demander l'ouverture (art. L. 620-1).</li>
          <li>Le tribunal vérifie que les difficultés sont réelles et que le débiteur n'est pas en cessation des paiements.</li>
          <li>Le jugement d'ouverture produit ses effets immédiatement et fait l'objet de publicité.</li>
        </ul>
        <p><b>Période d'observation :</b></p>
        <ul>
          <li>Durée maximale de <b>6 mois</b>, renouvelable une fois (12 mois au total), exceptionnellement 18 mois (art. L. 621-3).</li>
          <li>Le débiteur continue à gérer son entreprise, assisté par un <b>administrateur judiciaire</b> dont la mission est fixée par le tribunal (mission de surveillance, d'assistance ou d'administration).</li>
          <li><b>Interdiction de payer les créances antérieures</b> au jugement d'ouverture (art. L. 622-7). Exception : le juge-commissaire peut autoriser le paiement de créances antérieures pour retirer un bien donné en gage ou nécessaire à la poursuite d'activité.</li>
          <li><b>Arrêt des poursuites individuelles</b> (art. L. 622-21) : les créanciers antérieurs ne peuvent plus engager de poursuites ni d'exécution.</li>
          <li><b>Arrêt du cours des intérêts</b> (art. L. 622-28), sauf intérêts résultant de contrats de prêts d'une durée supérieure à un an.</li>
        </ul>
        <p><b>Déclaration des créances (art. L. 622-24) :</b></p>
        <ul>
          <li>Les créanciers doivent déclarer leurs créances auprès du <b>mandataire judiciaire</b> dans un délai de <b>2 mois</b> à compter de la publication du jugement d'ouverture (4 mois pour les créanciers domiciliés hors de France).</li>
          <li>Le défaut de déclaration entraîne l'<b>inopposabilité de la créance</b> à la procédure (et non plus l'extinction), sauf relevé de forclusion accordé par le juge-commissaire.</li>
        </ul>
        <p><b>Plan de sauvegarde (art. L. 626-1 et s.) :</b></p>
        <p>Le tribunal arrête un plan de sauvegarde comportant des mesures de restructuration (délais de paiement, remises de dettes consenties par les créanciers dans les comités/classes de parties affectées). Depuis la transposition de la directive de 2019, les <b>classes de parties affectées</b> remplacent les comités de créanciers pour les entreprises dépassant certains seuils.</p>`
      },
      {
        title: "Le redressement judiciaire (art. L. 631-1 et s. C. com.)",
        content: `<p>Le <b>redressement judiciaire</b> est ouvert lorsque le débiteur est en <b>cessation des paiements</b>, définie comme l'impossibilité de faire face au passif exigible avec l'actif disponible (art. L. 631-1). La procédure vise à permettre la poursuite de l'activité, le maintien de l'emploi et l'apurement du passif.</p>
        <p><b>Ouverture :</b></p>
        <ul>
          <li>Le redressement peut être demandé par le <b>débiteur</b> (dans les 45 jours de la cessation des paiements – art. L. 631-4), par un <b>créancier</b>, ou par le <b>ministère public</b>.</li>
          <li>Le tribunal peut se saisir d'office (art. L. 631-5).</li>
          <li>Le tribunal fixe la <b>date de cessation des paiements</b>, qui ne peut être antérieure de plus de <b>18 mois</b> au jugement d'ouverture (art. L. 631-8). Cette date est cruciale car elle détermine la période suspecte.</li>
        </ul>
        <p><b>La période suspecte et les nullités (art. L. 632-1 et L. 632-2) :</b></p>
        <ul>
          <li><b>Nullités de droit</b> (art. L. 632-1) : sont nuls de plein droit les actes accomplis pendant la période suspecte, tels que les actes à titre gratuit, les paiements de dettes non échues, les paiements par des moyens inhabituels, les sûretés constituées pour des dettes antérieures, les mesures conservatoires prises sans titre exécutoire.</li>
          <li><b>Nullités facultatives</b> (art. L. 632-2) : les paiements de dettes échues et les actes à titre onéreux accomplis pendant la période suspecte peuvent être annulés si le tiers avait connaissance de l'état de cessation des paiements.</li>
        </ul>
        <p><b>Déroulement :</b></p>
        <ul>
          <li>Période d'observation similaire à la sauvegarde, avec un administrateur dont la mission est au minimum l'<b>assistance</b> du débiteur (et non la simple surveillance).</li>
          <li>Les contrats en cours continuent (art. L. 622-13) : l'administrateur peut exiger l'exécution des contrats en cours. Le cocontractant ne peut pas se prévaloir de la clause de résiliation de plein droit.</li>
          <li>Le tribunal peut ordonner la <b>cession de l'entreprise</b> (plan de cession) si le redressement est manifestement impossible (art. L. 631-22).</li>
        </ul>
        <p><b>Plan de redressement :</b></p>
        <p>Il peut comporter des délais de paiement (jusqu'à 10 ans), des remises de dettes, la cession de branches d'activité, le remplacement du dirigeant. Le plan est adopté par le tribunal après consultation des créanciers (classes de parties affectées le cas échéant).</p>`
      },
      {
        title: "La liquidation judiciaire (art. L. 640-1 et s. C. com.)",
        content: `<p>La <b>liquidation judiciaire</b> est ouverte lorsque le débiteur est en cessation des paiements et que le redressement est manifestement impossible (art. L. 640-1).</p>
        <p><b>Effets du jugement de liquidation :</b></p>
        <ul>
          <li><b>Dessaisissement du débiteur</b> (art. L. 641-9) : le débiteur perd la gestion de ses biens. Le <b>liquidateur</b> exerce les droits et actions du débiteur relatifs à son patrimoine.</li>
          <li><b>Arrêt de l'activité</b>, sauf maintien temporaire autorisé par le tribunal (3 mois maximum, renouvelable une fois).</li>
          <li><b>Exigibilité de toutes les créances</b> non échues (art. L. 643-1).</li>
          <li><b>Résiliation des contrats en cours</b> dans un délai fixé par le juge-commissaire, sauf continuation pour les besoins de la liquidation.</li>
        </ul>
        <p><b>Réalisation des actifs :</b></p>
        <ul>
          <li><b>Cession globale de l'entreprise</b> (plan de cession – art. L. 642-1 et s.) : cession de l'ensemble des actifs nécessaires à l'exploitation, incluant les contrats et les salariés. Les offres sont examinées selon les critères de l'article L. 642-5 (prix, emploi, perspectives de redressement).</li>
          <li><b>Cessions isolées d'actifs</b> : vente des biens meubles et immeubles par le liquidateur, sous le contrôle du juge-commissaire.</li>
          <li><b>Répartition du prix</b> : selon l'ordre des privilèges et sûretés. Les créanciers superprivilégiés (salaires) sont payés en premier, puis les créanciers bénéficiant du privilège de conciliation, puis les créanciers hypothécaires et gagistes, et enfin les créanciers chirographaires.</li>
        </ul>
        <p><b>Clôture de la liquidation :</b></p>
        <ul>
          <li><b>Clôture pour extinction du passif</b> : tous les créanciers ont été payés.</li>
          <li><b>Clôture pour insuffisance d'actif</b> (art. L. 643-9) : le plus fréquent. Les créanciers ne recouvrent pas leur droit de poursuite individuelle, sauf cas limitativement énumérés (fraude, condamnation pénale, faillite personnelle).</li>
        </ul>
        <p><b>Liquidation judiciaire simplifiée</b> (art. L. 644-1 et s.) : procédure accélérée pour les petites entreprises (conditions de seuil). Durée maximale de 6 à 12 mois.</p>`
      },
      {
        title: "Les sanctions et la responsabilité des dirigeants",
        content: `<p>Le droit des entreprises en difficulté prévoit des sanctions civiles et pénales contre les dirigeants fautifs.</p>
        <p><b>La responsabilité pour insuffisance d'actif (art. L. 651-2 C. com.) :</b></p>
        <ul>
          <li>En cas de liquidation judiciaire, si l'insuffisance d'actif est imputable à une <b>faute de gestion</b> ayant contribué à cette insuffisance, le tribunal peut décider que le montant de cette insuffisance sera supporté, en tout ou partie, par le ou les dirigeants de droit ou de fait.</li>
          <li>Depuis la loi Sapin 2 du 9 décembre 2016, la <b>simple négligence</b> ne peut fonder une action en responsabilité pour insuffisance d'actif, sauf si elle a contribué à la cessation des paiements.</li>
          <li>Les sommes versées sont recouvertes par le liquidateur et entrent dans le patrimoine du débiteur pour être réparties entre les créanciers.</li>
        </ul>
        <p><b>L'obligation aux dettes sociales (art. L. 652-1 C. com.) :</b></p>
        <ul>
          <li>En cas de liquidation, le tribunal peut mettre à la charge du dirigeant tout ou partie des dettes de la personne morale s'il est établi que le dirigeant a exercé une activité dans son <b>intérêt personnel</b>, ou a commis des actes de commerce dans un intérêt autre que celui de la société, ou a disposé des biens sociaux comme des siens propres.</li>
        </ul>
        <p><b>La faillite personnelle (art. L. 653-1 et s. C. com.) :</b></p>
        <ul>
          <li>Sanction professionnelle interdisant de diriger, gérer, administrer ou contrôler une entreprise commerciale, artisanale ou toute personne morale.</li>
          <li>Prononcée pour des faits graves : détournement d'actifs, augmentation frauduleuse du passif, poursuite abusive d'une exploitation déficitaire, comptabilité fictive, etc.</li>
          <li>Durée maximale de <b>15 ans</b>.</li>
        </ul>
        <p><b>L'interdiction de gérer (art. L. 653-8 C. com.) :</b></p>
        <ul>
          <li>Sanction plus légère que la faillite personnelle, pouvant être prononcée pour les mêmes faits ou pour le simple non-respect de l'obligation de déclarer la cessation des paiements dans les 45 jours.</li>
          <li>Durée maximale de <b>15 ans</b>.</li>
        </ul>
        <p><b>La banqueroute (art. L. 654-2 C. com.) :</b></p>
        <p>Infraction pénale punie de <b>5 ans d'emprisonnement et 75 000 euros d'amende</b>. Faits constitutifs : achats en vue de revente au-dessous du cours pour retarder la constatation de la cessation des paiements, détournement ou dissimulation d'actifs, tenue de comptabilité fictive ou incomplète, emploi de moyens ruineux pour se procurer des fonds.</p>`
      }
    ]
  },
  'affaires-fonds-commerce': {
    introduction: "Le fonds de commerce, universalité de fait regroupant l'ensemble des éléments mobiliers corporels et incorporels affectés à l'exploitation d'une activité commerciale, constitue un bien meuble incorporel de premier plan en droit des affaires. Sa cession, son nantissement et sa location-gérance obéissent à des règles spécifiques codifiées aux articles L. 141-1 et suivants du Code de commerce.",
    readTime: 20,
    sections: [
      {
        title: "Les éléments constitutifs du fonds de commerce",
        content: `<p>Le fonds de commerce est une <b>universalité de fait</b>, c'est-à-dire un ensemble de biens affectés à une finalité commune (l'exploitation commerciale) mais qui ne constitue pas un patrimoine autonome. Il n'est pas défini par le Code de commerce mais par la pratique et la jurisprudence.</p>
        <p><b>Les éléments incorporels :</b></p>
        <ul>
          <li><b>La clientèle et l'achalandage</b> : éléments essentiels sans lesquels il n'y a pas de fonds de commerce. La clientèle est l'ensemble des personnes qui se fournissent habituellement auprès du commerçant ; l'achalandage désigne la clientèle de passage liée à l'emplacement.</li>
          <li><b>Le nom commercial</b> : appellation sous laquelle le commerçant exerce son activité. Il se distingue du nom de domaine et de la dénomination sociale.</li>
          <li><b>L'enseigne</b> : signe visible apposé sur la façade de l'établissement commercial pour le distinguer des établissements voisins.</li>
          <li><b>Le droit au bail</b> : droit du locataire commerçant au renouvellement du bail commercial (statut des baux commerciaux, art. L. 145-1 et s. C. com.). C'est souvent l'élément le plus valorisé du fonds.</li>
          <li><b>Les droits de propriété intellectuelle</b> : brevets, marques, dessins et modèles, licences exploitées dans le cadre de l'activité.</li>
          <li><b>Les autorisations administratives</b> : licences de débit de boissons, autorisations d'exploitation (sous réserve qu'elles soient cessibles).</li>
        </ul>
        <p><b>Les éléments corporels :</b></p>
        <ul>
          <li><b>Le matériel et l'outillage</b> : machines, équipements, mobilier commercial.</li>
          <li><b>Les marchandises</b> : stock destiné à la vente. Elles sont généralement exclues du nantissement du fonds de commerce.</li>
        </ul>
        <p><b>Les éléments exclus :</b></p>
        <ul>
          <li>Les <b>immeubles</b> ne font pas partie du fonds de commerce (ils relèvent du droit immobilier).</li>
          <li>Les <b>créances et dettes</b> ne sont pas transmises avec le fonds (sauf les contrats de travail en application de l'art. L. 1224-1 C. trav. et le bail commercial).</li>
          <li>Les <b>livres de commerce</b> et la <b>comptabilité</b> sont communiqués mais non cédés.</li>
        </ul>`
      },
      {
        title: "La clientèle, élément essentiel du fonds de commerce",
        content: `<p>La <b>clientèle</b> constitue l'élément <b>essentiel et irréductible</b> du fonds de commerce. Sans clientèle, il n'y a pas de fonds de commerce. La jurisprudence exige une clientèle <b>réelle, certaine et personnelle</b> au commerçant.</p>
        <p><b>Les caractères de la clientèle :</b></p>
        <ul>
          <li><b>Réelle</b> : la clientèle doit effectivement exister ; un fonds qui n'a jamais été exploité ou qui a définitivement cessé son activité n'a pas de clientèle (Cass. com., 19 octobre 1999).</li>
          <li><b>Certaine</b> : elle doit être suffisamment caractérisée et ne pas être purement hypothétique ou potentielle.</li>
          <li><b>Personnelle</b> : le commerçant doit disposer d'une clientèle qui lui est propre. Cette condition pose des difficultés dans les ensembles commerciaux (centres commerciaux, franchises, concessions).</li>
        </ul>
        <p><b>La clientèle dans les réseaux de distribution :</b></p>
        <ul>
          <li>La question s'est posée de savoir si le franchisé dispose d'une clientèle propre, distincte de celle de la marque du franchiseur. La Cour de cassation a répondu par l'affirmative dans l'arrêt <i>Trévisan</i> (Cass. 3e civ., 27 mars 2002) : la clientèle nationale attachée à la marque n'exclut pas l'existence d'une clientèle locale liée à l'implantation du franchisé.</li>
          <li>De même, le locataire-gérant d'un fonds de commerce peut développer une clientèle personnelle distincte de celle attachée au fonds donné en gérance.</li>
          <li>L'exploitant d'un stand dans un centre commercial dispose d'une clientèle propre malgré l'attractivité de l'enseigne du centre (Cass. 3e civ., 19 mars 2014).</li>
        </ul>
        <p><b>La nature juridique de la clientèle :</b></p>
        <ul>
          <li>La clientèle n'est pas un droit de propriété sur les clients (la clientèle est libre), mais un <b>droit de ralliement</b> : le commerçant a le droit de faire des actes de commerce pour attirer et retenir sa clientèle.</li>
          <li>Ce droit est protégé par l'action en <b>concurrence déloyale</b> (art. 1240 C. civ.) contre les comportements parasitaires, le détournement de clientèle, la confusion et le dénigrement.</li>
          <li>La clientèle civile peut également constituer le support d'un fonds libéral (médecin, avocat), dont le régime juridique est distinct du fonds de commerce.</li>
        </ul>`
      },
      {
        title: "La cession du fonds de commerce (art. L. 141-1 et s. C. com.)",
        content: `<p>La <b>cession du fonds de commerce</b> est une opération fréquente soumise à un formalisme protecteur, tant pour l'acquéreur que pour les créanciers du vendeur. Elle est régie par les articles L. 141-1 et suivants du Code de commerce.</p>
        <p><b>Les mentions obligatoires de l'acte de cession (art. L. 141-1) :</b></p>
        <ul>
          <li>Le <b>nom du précédent vendeur</b>, la date et la nature de son acte d'acquisition et le prix de cette acquisition.</li>
          <li>L'<b>état des privilèges et nantissements</b> grevant le fonds.</li>
          <li>Le <b>chiffre d'affaires</b> et les <b>bénéfices commerciaux</b> réalisés pendant les trois exercices comptables précédant la vente.</li>
          <li>Les <b>conditions du bail</b> (date, durée, nom et adresse du bailleur et du cédant).</li>
          <li>L'omission de ces mentions entraîne la <b>nullité relative</b> de la cession, à condition que l'acquéreur prouve un préjudice (Cass. com., 15 janvier 2002). Le délai pour agir est d'un an à compter de la cession.</li>
        </ul>
        <p><b>La publicité de la cession :</b></p>
        <ul>
          <li>La cession doit être publiée au <b>BODACC</b> (Bulletin officiel des annonces civiles et commerciales) et dans un <b>journal d'annonces légales</b> (art. L. 141-12).</li>
          <li>Cette publicité permet aux créanciers du vendeur de former <b>opposition au paiement du prix</b> dans un délai de <b>10 jours</b> (art. L. 141-14). L'opposition a pour effet de bloquer le prix entre les mains de l'acquéreur jusqu'à ce qu'un accord ou une décision judiciaire intervienne.</li>
        </ul>
        <p><b>La solidarité fiscale :</b></p>
        <ul>
          <li>L'acquéreur du fonds est <b>solidairement responsable</b> avec le vendeur du paiement de l'impôt sur le revenu et des taxes sur le chiffre d'affaires afférents à l'exploitation du fonds (art. 1684 CGI). Cette solidarité est limitée au prix de cession et à la période postérieure au 1er janvier de l'année de la cession.</li>
        </ul>
        <p><b>Le privilège du vendeur de fonds de commerce (art. L. 141-5) :</b></p>
        <p>Le vendeur bénéficie d'un <b>privilège</b> sur les éléments du fonds pour le paiement du prix. Ce privilège doit être inscrit au greffe du tribunal de commerce dans les 15 jours de la vente. Il porte séparément sur les éléments incorporels, le matériel et les marchandises.</p>`
      },
      {
        title: "Le nantissement du fonds de commerce (art. L. 142-1 et s. C. com.)",
        content: `<p>Le <b>nantissement du fonds de commerce</b> est une sûreté réelle mobilière sans dépossession, permettant au propriétaire d'un fonds de commerce de le donner en garantie à un créancier sans en perdre l'exploitation. Il est régi par les articles L. 142-1 et suivants du Code de commerce.</p>
        <p><b>Les conditions de constitution :</b></p>
        <ul>
          <li><b>Un acte écrit</b> : le nantissement est constitué par acte notarié ou sous seing privé enregistré (art. L. 142-3).</li>
          <li><b>L'inscription au greffe</b> du tribunal de commerce dans les <b>15 jours</b> de l'acte constitutif (art. L. 142-4). L'inscription prend rang à sa date et produit ses effets pendant 10 ans (renouvelable).</li>
          <li><b>L'assiette du nantissement</b> : à défaut de désignation expresse, le nantissement porte sur l'enseigne et le nom commercial, le droit au bail, la clientèle et l'achalandage (art. L. 142-2). Les parties peuvent y inclure le matériel et l'outillage, les brevets, licences et marques. Les <b>marchandises</b> sont exclues de l'assiette du nantissement.</li>
        </ul>
        <p><b>Les effets du nantissement :</b></p>
        <ul>
          <li><b>Droit de préférence</b> : le créancier nanti est payé par préférence sur le prix de vente du fonds. Il prend rang selon la date de son inscription.</li>
          <li><b>Droit de suite</b> : le créancier nanti peut exercer son droit sur le fonds même si celui-ci a été cédé à un tiers.</li>
          <li><b>Droit de faire vendre le fonds</b> : en cas de non-paiement, le créancier peut faire ordonner la vente du fonds aux enchères publiques (art. L. 143-1 et s.).</li>
        </ul>
        <p><b>La protection du créancier nanti :</b></p>
        <ul>
          <li><b>Déplacement du fonds</b> : si le propriétaire déplace le fonds sans consentement du créancier inscrit, les créanciers inscrits peuvent exiger le remboursement anticipé de leurs créances (art. L. 143-1).</li>
          <li><b>Résiliation du bail</b> : le propriétaire de l'immeuble qui poursuit la résiliation du bail doit notifier sa demande au créancier nanti inscrit (art. L. 143-2), qui peut intervenir dans l'instance en résiliation.</li>
          <li><b>Surenchère du sixième</b> (art. L. 143-7 et s.) : en cas de cession du fonds, les créanciers inscrits peuvent surenchérir du sixième du prix principal (hors marchandises) dans les 10 jours de la notification de la cession.</li>
        </ul>
        <h4>Articulation avec le gage commercial (réforme des sûretés 2021)</h4>
        <p>L'ordonnance n° 2021-1192 du 15 septembre 2021 portant réforme du droit des sûretés a modernisé le régime du gage sans dépossession. Le nantissement du fonds de commerce conserve toutefois sa spécificité par rapport au gage de droit commun des articles 2333 et suivants du Code civil, notamment en ce qui concerne son assiette et les procédures de réalisation.</p>`
      },
      {
        title: "La location-gérance du fonds de commerce (art. L. 144-1 et s. C. com.)",
        content: `<p>La <b>location-gérance</b> (ou gérance libre) est le contrat par lequel le propriétaire d'un fonds de commerce concède à un <b>locataire-gérant</b> le droit d'exploiter librement ce fonds à ses risques et périls, moyennant le paiement d'une redevance (art. L. 144-1 C. com.).</p>
        <p><b>Les conditions de la location-gérance :</b></p>
        <ul>
          <li><b>Conditions tenant au bailleur du fonds</b> : le propriétaire du fonds doit avoir exploité le fonds pendant au moins <b>2 ans</b> (art. L. 144-3), sauf dispense accordée par le président du tribunal de commerce. Cette condition d'exploitation préalable a été supprimée par la loi PACTE du 22 mai 2019 pour les personnes physiques et morales n'ayant jamais exploité de fonds.</li>
          <li><b>Publicité</b> : le contrat de location-gérance doit être publié dans un journal d'annonces légales et au RCS dans les <b>15 jours</b> de sa signature (art. L. 144-6). Jusqu'à la date de publication, le loueur du fonds est <b>solidairement responsable</b> des dettes contractées par le locataire-gérant à l'occasion de l'exploitation du fonds.</li>
          <li><b>Durée</b> : librement fixée par les parties. La location-gérance n'est pas soumise au statut des baux commerciaux (art. L. 144-2).</li>
        </ul>
        <p><b>Les effets de la location-gérance :</b></p>
        <ul>
          <li><b>Obligations du locataire-gérant</b> : exploiter le fonds en bon père de famille, maintenir la clientèle, payer la redevance, s'immatriculer au RCS avec mention de sa qualité de locataire-gérant.</li>
          <li><b>Obligations du bailleur du fonds</b> : garantie d'éviction, obligation de délivrance du fonds avec tous ses éléments, obligation de ne pas rétablir une activité concurrente (obligation de non-concurrence implicite).</li>
          <li><b>Sort des contrats de travail</b> : l'article L. 1224-1 du Code du travail s'applique lors de la mise en location-gérance et lors de la fin de celle-ci (transfert automatique des contrats de travail).</li>
        </ul>
        <p><b>La fin de la location-gérance :</b></p>
        <ul>
          <li>À l'expiration du contrat ou en cas de résiliation, les dettes contractées par le locataire-gérant à l'occasion de l'exploitation du fonds deviennent immédiatement <b>exigibles</b> (art. L. 144-7).</li>
          <li>Le bailleur du fonds est solidairement responsable des dettes du locataire-gérant contractées pendant les <b>6 mois</b> suivant la publication de la fin de la location-gérance au BODACC (art. L. 144-7 al. 2).</li>
          <li>Le locataire-gérant ne bénéficie pas du droit au renouvellement du bail commercial (art. L. 145-1 exclut la location-gérance du statut des baux commerciaux, sauf convention contraire).</li>
        </ul>`
      }
    ]
  },
  'affaires-bail-commercial': {
    introduction: "Le bail commercial, régi par les articles L. 145-1 et suivants du Code de commerce (statut des baux commerciaux), offre au preneur commerçant une protection considérable, notamment un droit au renouvellement du bail assorti, en cas de refus injustifié du bailleur, d'une indemnité d'éviction. Ce statut d'ordre public constitue un pilier du droit des affaires français.",
    readTime: 20,
    sections: [
      {
        title: "Le champ d'application du statut des baux commerciaux (art. L. 145-1 et L. 145-2)",
        content: `<p>Le <b>statut des baux commerciaux</b> s'applique aux baux des immeubles ou locaux dans lesquels un fonds de commerce est exploité (art. L. 145-1 C. com.). Son champ d'application est déterminé par des conditions cumulatives.</p>
        <p><b>Les conditions d'application :</b></p>
        <ul>
          <li><b>Un bail portant sur un immeuble ou un local</b> : le statut s'applique aux locaux principaux et, sous conditions, aux locaux accessoires (art. L. 145-1 al. 2). Les terrains nus ne sont pas soumis au statut, sauf s'ils sont affectés par le preneur à une exploitation industrielle ou commerciale avec l'accord du bailleur.</li>
          <li><b>L'exploitation d'un fonds de commerce ou artisanal</b> : le preneur doit être propriétaire d'un fonds de commerce exploité dans les lieux loués. L'existence d'une clientèle propre est nécessaire (Cass. 3e civ., 27 mars 2002).</li>
          <li><b>L'immatriculation au RCS ou au Répertoire des métiers</b> (art. L. 145-1 I, 1°) : cette condition est substantielle ; le défaut d'immatriculation au jour du renouvellement prive le preneur du droit au renouvellement (Cass. 3e civ., 7 mars 2019).</li>
        </ul>
        <p><b>Les extensions du statut (art. L. 145-2) :</b></p>
        <ul>
          <li>Établissements d'enseignement (sous conditions).</li>
          <li>Collectivités territoriales et établissements publics pour les locaux à usage de bureaux.</li>
          <li>Entreprises publiques et sociétés d'économie mixte.</li>
          <li>Communes pour les immeubles affectés à des services exploités en régie.</li>
        </ul>
        <p><b>Les exclusions :</b></p>
        <ul>
          <li>Les <b>baux dérogatoires</b> (art. L. 145-5) : d'une durée maximale de <b>3 ans</b> au total, ces baux échappent au statut. À l'issue du bail dérogatoire, si le preneur reste en possession des locaux sans opposition du bailleur, un nouveau bail soumis au statut est réputé conclu (art. L. 145-5 al. 2).</li>
          <li>Les <b>conventions d'occupation précaire</b> (art. L. 145-5-1) : caractérisées par un motif de précarité objectif (immeuble en cours de vente, zone de préemption, projet de démolition).</li>
          <li>La <b>location-gérance</b> : le locataire-gérant n'est pas titulaire du bail commercial.</li>
        </ul>`
      },
      {
        title: "La durée du bail commercial et le droit au renouvellement",
        content: `<p>La durée constitue un élément essentiel du statut des baux commerciaux. Le législateur garantit au preneur la <b>stabilité</b> de son exploitation par une durée minimale et un droit au renouvellement.</p>
        <p><b>La durée minimale de 9 ans (art. L. 145-4) :</b></p>
        <ul>
          <li>Le bail commercial ne peut être conclu pour une durée inférieure à <b>9 ans</b>. Toute clause fixant une durée moindre est réputée non écrite et le bail est réputé conclu pour 9 ans.</li>
          <li>Le preneur dispose d'une <b>faculté de résiliation triennale</b> (art. L. 145-4 al. 2) : il peut donner congé à l'expiration de chaque période triennale (3, 6 ou 9 ans), avec un préavis de <b>6 mois</b> délivré par acte extrajudiciaire.</li>
          <li>Le bailleur ne dispose pas en principe de cette faculté triennale, sauf pour construire, reconstruire, surélever, exécuter des travaux prescrits ou autorisés dans le cadre d'une opération de restauration immobilière, ou réaffecter le local d'habitation accessoire à l'habitation.</li>
          <li>Les parties peuvent convenir d'une durée <b>supérieure à 9 ans</b>. Les baux de plus de 12 ans doivent être publiés au service de la publicité foncière.</li>
        </ul>
        <p><b>Le droit au renouvellement (art. L. 145-8 à L. 145-12) :</b></p>
        <ul>
          <li>Le preneur qui remplit les conditions du statut bénéficie d'un <b>droit au renouvellement</b> de son bail. Ce droit est d'ordre public.</li>
          <li><b>Conditions</b> : être propriétaire du fonds, être immatriculé au RCS, avoir exploité le fonds pendant les <b>3 années précédant</b> la date d'expiration du bail ou de la demande de renouvellement (art. L. 145-8).</li>
          <li><b>Procédure</b> : le preneur peut demander le renouvellement par acte extrajudiciaire dans les <b>6 mois</b> précédant l'expiration du bail. Le bailleur peut aussi donner congé avec offre de renouvellement ou congé avec refus de renouvellement.</li>
          <li>À défaut de congé ou de demande de renouvellement, le bail se poursuit par <b>tacite prolongation</b> pour une durée indéterminée (art. L. 145-9).</li>
        </ul>
        <p>Le bail renouvelé est un <b>nouveau bail</b>, distinct du bail initial, d'une durée minimale de 9 ans et aux conditions du bail expiré (sauf révision du loyer).</p>`
      },
      {
        title: "Le loyer du bail commercial et sa révision",
        content: `<p>Le loyer du bail commercial obéit à des règles spécifiques de fixation initiale et de révision, encadrées par le statut dans un souci de <b>protection du preneur</b> contre les augmentations excessives.</p>
        <p><b>La fixation du loyer initial :</b></p>
        <ul>
          <li>Le loyer initial est <b>librement fixé par les parties</b> (art. L. 145-33). Le statut n'impose aucun plafonnement au stade de la conclusion du bail.</li>
          <li>Les parties peuvent convenir d'un loyer fixe, d'un loyer variable (clause-recettes), ou d'un loyer binaire (fixe + variable).</li>
          <li>Le <b>pas-de-porte</b> (droit d'entrée) versé au bailleur lors de la conclusion du bail est licite et peut être analysé comme un supplément de loyer ou comme une indemnité compensant les avantages commerciaux procurés par le bail.</li>
        </ul>
        <p><b>La révision triennale (art. L. 145-37 et L. 145-38) :</b></p>
        <ul>
          <li>Le loyer peut être révisé à la demande de l'une ou l'autre des parties, à l'expiration de chaque <b>période triennale</b> (3, 6, 9 ans).</li>
          <li>Le loyer révisé est fixé à la <b>valeur locative</b> des locaux, déterminée selon les critères de l'article L. 145-33 : caractéristiques du local, destination des lieux, obligations respectives des parties, facteurs locaux de commercialité, prix couramment pratiqués dans le voisinage.</li>
          <li>La variation du loyer ne peut excéder la <b>variation de l'indice des loyers commerciaux</b> (ILC) ou de l'indice des loyers des activités tertiaires (ILAT) intervenue depuis la dernière fixation du loyer (art. L. 145-38 al. 3) – règle du plafonnement.</li>
        </ul>
        <p><b>Le déplafonnement (art. L. 145-34) :</b></p>
        <ul>
          <li>En cas de <b>modification notable des facteurs locaux de commercialité</b> ayant entraîné par elle-même une variation de plus de 10 % de la valeur locative, le loyer peut être déplafonné et fixé à la valeur locative.</li>
          <li>Le déplafonnement s'applique également lorsque le bail a été conclu pour une <b>durée supérieure à 9 ans</b> ou s'il s'est poursuivi au-delà de <b>12 ans</b> par tacite prolongation (art. L. 145-34 al. 4).</li>
          <li>En cas de déplafonnement, la <b>loi Pinel</b> du 18 juin 2014 a instauré un mécanisme de <b>lissage</b> : la hausse de loyer ne peut excéder 10 % du loyer acquitté au cours de l'année précédente (art. L. 145-34 al. 4).</li>
        </ul>`
      },
      {
        title: "Le refus de renouvellement et l'indemnité d'éviction",
        content: `<p>Le bailleur dispose du droit de refuser le renouvellement du bail commercial, mais ce refus est en principe assorti de l'obligation de verser au preneur une <b>indemnité d'éviction</b> destinée à compenser le préjudice subi du fait de la perte du fonds (art. L. 145-14 C. com.).</p>
        <p><b>L'indemnité d'éviction (art. L. 145-14) :</b></p>
        <ul>
          <li>L'indemnité doit être « égale au préjudice causé par le défaut de renouvellement ». Elle comprend notamment la <b>valeur marchande du fonds de commerce</b> déterminée selon les usages de la profession, augmentée éventuellement des frais de déménagement, de réinstallation, des frais et droits de mutation, et de l'indemnité de licenciement du personnel.</li>
          <li><b>Indemnité de remplacement</b> : lorsque la perte du fonds entraîne sa disparition (l'éviction empêche le preneur de se réinstaller dans des conditions équivalentes), l'indemnité correspond à la valeur du fonds.</li>
          <li><b>Indemnité de transfert</b> : lorsque le preneur peut se réinstaller dans des conditions similaires, l'indemnité correspond à la différence entre le loyer du nouveau local et celui de l'ancien, augmentée des frais de déménagement et de réinstallation.</li>
          <li>Le <b>droit de repentir</b> du bailleur (art. L. 145-58) : dans les 15 jours de la date à laquelle la décision fixant l'indemnité est passée en force de chose jugée, le bailleur peut se rétracter et offrir le renouvellement du bail, sauf si le preneur a déjà quitté les lieux ou s'il a loué ou acheté un autre local.</li>
        </ul>
        <p><b>Les motifs de refus sans indemnité (art. L. 145-17) :</b></p>
        <ul>
          <li><b>Motif grave et légitime</b> à l'encontre du preneur : manquement aux clauses du bail (défaut de paiement des loyers, changement d'activité non autorisé, sous-location irrégulière, défaut d'entretien). Le bailleur doit avoir préalablement mis en demeure le preneur (sauf gravité particulière).</li>
          <li><b>Insalubrité ou dangerosité de l'immeuble</b> : lorsque l'immeuble doit être totalement ou partiellement démoli en raison de son état d'insalubrité ou de dangerosité reconnu par l'autorité administrative (art. L. 145-17, 2°).</li>
        </ul>
        <p><b>La procédure :</b></p>
        <p>Le bailleur qui refuse le renouvellement doit notifier son refus par acte extrajudiciaire, au moins <b>6 mois</b> avant l'expiration du bail, en précisant les motifs du refus et en indiquant que le preneur dispose de 2 ans pour saisir le tribunal (art. L. 145-9). Le preneur évincé a le droit de se maintenir dans les lieux jusqu'au paiement de l'indemnité d'éviction (art. L. 145-28).</p>`
      },
      {
        title: "La résiliation et la cession du bail commercial",
        content: `<p>La <b>résiliation</b> et la <b>cession</b> du bail commercial obéissent à des règles spécifiques qui protègent tant le preneur que le bailleur, dans le cadre du statut d'ordre public des baux commerciaux.</p>
        <p><b>La résiliation du bail commercial :</b></p>
        <ul>
          <li><b>Clause résolutoire</b> (art. L. 145-41) : toute clause insérée dans le bail prévoyant la résiliation de plein droit ne produit effet qu'<b>un mois après un commandement</b> de payer resté infructueux. Le juge peut accorder des <b>délais de grâce</b> et suspendre la réalisation de la clause résolutoire tant que la résiliation n'a pas été constatée par une décision ayant acquis l'autorité de la chose jugée.</li>
          <li><b>Résiliation judiciaire</b> : en l'absence de clause résolutoire, le bailleur peut demander la résiliation judiciaire du bail pour inexécution par le preneur de ses obligations (art. 1224 et 1227 C. civ.).</li>
          <li><b>Résiliation triennale par le preneur</b> (art. L. 145-4 al. 2) : congé donné par acte extrajudiciaire 6 mois avant l'expiration de la période triennale en cours.</li>
          <li><b>Résiliation pour motif de retraite ou d'invalidité</b> (art. L. 145-4 al. 6) : le preneur peut résilier le bail à tout moment, sans attendre la fin d'une période triennale.</li>
        </ul>
        <p><b>La cession du bail commercial :</b></p>
        <ul>
          <li><b>Cession avec le fonds de commerce</b> : la cession du bail en même temps que le fonds de commerce ne peut être interdite par une clause du bail (art. L. 145-16 al. 1). Toutefois, le bailleur peut stipuler une clause d'<b>agrément</b> conditionnant la cession à son accord préalable, et une clause imposant la participation du bailleur à l'acte de cession.</li>
          <li><b>Cession isolée du droit au bail</b> (sans le fonds) : elle peut être interdite par une clause du bail. En l'absence d'interdiction, elle est libre mais le bailleur peut exiger un agrément.</li>
          <li><b>Formalités</b> : la cession du bail doit être signifiée au bailleur par acte extrajudiciaire ou acceptée par lui dans un acte authentique (art. 1690 C. civ.). Le cédant reste garant solidaire du cessionnaire, sauf clause contraire ou acceptation expresse du bailleur.</li>
        </ul>
        <p><b>La déspécialisation (art. L. 145-47 et s.) :</b></p>
        <ul>
          <li><b>Déspécialisation partielle</b> (art. L. 145-47) : le preneur peut adjoindre à l'activité prévue au bail des activités connexes ou complémentaires, en notifiant son intention au bailleur. Le bailleur peut contester le caractère connexe ou complémentaire devant le tribunal.</li>
          <li><b>Déspécialisation totale</b> (art. L. 145-48 à L. 145-55) : changement total d'activité, autorisé par le tribunal lorsque l'activité nouvelle est compatible avec la destination, les caractères et la situation de l'immeuble. Le bailleur peut demander une <b>augmentation de loyer</b> ou une <b>indemnité compensatoire</b>.</li>
        </ul>`
      }
    ]
  },
  'affaires-concurrence': {
    introduction: "Le droit de la concurrence, régi en droit interne par le Livre IV du Code de commerce (art. L. 420-1 et s.) et en droit de l'Union européenne par les articles 101 et 102 du TFUE, vise à garantir le libre jeu de la concurrence sur les marchés. Il sanctionne les pratiques anticoncurrentielles (ententes et abus de position dominante), contrôle les opérations de concentration et confie à l'Autorité de la concurrence un rôle central de régulation.",
    readTime: 20,
    sections: [
      {
        title: "Les ententes anticoncurrentielles (art. L. 420-1 C. com. et art. 101 TFUE)",
        content: `<p>L'<b>article L. 420-1 du Code de commerce</b> prohibe « les actions concertées, conventions, ententes expresses ou tacites ou coalitions » lorsqu'elles ont pour objet ou peuvent avoir pour effet d'empêcher, de restreindre ou de fausser le jeu de la concurrence sur un marché.</p>
        <p><b>Les conditions de la prohibition :</b></p>
        <ul>
          <li><b>Une concertation entre entreprises</b> : notion autonome englobant les accords de volontés (contrats, conventions), les pratiques concertées (coordination consciente sans accord formel) et les décisions d'associations d'entreprises (syndicats professionnels, ordres).</li>
          <li><b>Un objet ou un effet anticoncurrentiel</b> : la distinction est essentielle. Les ententes par <b>objet</b> (fixation de prix, répartition de marchés, limitation de production) sont présumées anticoncurrentielles sans qu'il soit nécessaire de démontrer leurs effets (CJUE, 13 juillet 1966, <i>Consten et Grundig</i>). Les ententes par <b>effet</b> nécessitent la démonstration d'un impact réel ou potentiel sur la concurrence.</li>
        </ul>
        <p><b>Les pratiques les plus couramment sanctionnées :</b></p>
        <ul>
          <li><b>Ententes horizontales</b> (entre concurrents) : fixation concertée des prix, répartition des marchés ou des clients, limitation de la production, ententes sur appels d'offres (<i>bid rigging</i>). Ces pratiques constituent les infractions les plus graves (<i>hard core cartels</i>).</li>
          <li><b>Ententes verticales</b> (entre opérateurs situés à des niveaux différents de la chaîne) : prix de revente imposés (interdits par principe, sauf RPM justifiés), exclusivités territoriales, clauses de non-concurrence excessives.</li>
        </ul>
        <p><b>Les exemptions :</b></p>
        <ul>
          <li><b>Exemption individuelle</b> (art. L. 420-4 C. com., art. 101 § 3 TFUE) : quatre conditions cumulatives – progrès économique, part équitable du profit réservée aux utilisateurs, caractère indispensable des restrictions, absence d'élimination de la concurrence.</li>
          <li><b>Exemptions par catégorie</b> : règlements européens exemptant certaines catégories d'accords verticaux (règlement n° 2022/720), d'accords de spécialisation, de R&D, de transfert de technologie.</li>
          <li><b>Règle de minimis</b> : les ententes dont l'impact sur le marché est insignifiant ne tombent pas sous le coup de la prohibition (seuils de parts de marché fixés par la communication de minimis de la Commission).</li>
        </ul>`
      },
      {
        title: "L'abus de position dominante (art. L. 420-2 C. com. et art. 102 TFUE)",
        content: `<p>L'<b>article L. 420-2 du Code de commerce</b> et l'<b>article 102 TFUE</b> interdisent l'exploitation abusive d'une position dominante sur un marché. À la différence de l'entente, l'abus de position dominante est un comportement <b>unilatéral</b>.</p>
        <p><b>La notion de position dominante :</b></p>
        <ul>
          <li>La position dominante est la « situation de puissance économique détenue par une entreprise qui lui donne le pouvoir de faire obstacle au maintien d'une concurrence effective sur le marché en cause, en lui fournissant la possibilité de comportements indépendants dans une mesure appréciable vis-à-vis de ses concurrents, de ses clients et finalement des consommateurs » (CJCE, 14 février 1978, <i>United Brands</i>).</li>
          <li>La <b>définition du marché pertinent</b> est un préalable indispensable : marché de produit (substituabilité de la demande et de l'offre) et marché géographique (conditions de concurrence homogènes). La méthode du test SSNIP (<i>Small but Significant Non-transitory Increase in Price</i>) est utilisée pour délimiter le marché.</li>
          <li>La détention d'une position dominante n'est pas en soi illicite ; seul son <b>exploitation abusive</b> est sanctionnée.</li>
        </ul>
        <p><b>Les formes d'abus :</b></p>
        <ul>
          <li><b>Abus d'exploitation</b> : pratiques visant à exploiter la position dominante au détriment des partenaires commerciaux ou des consommateurs (prix excessifs, conditions de transaction inéquitables).</li>
          <li><b>Abus d'éviction</b> : pratiques visant à évincer les concurrents du marché (prix prédateurs, refus de vente discriminatoire, ventes liées, exclusivités abusives, ciseau tarifaire). L'Autorité de la concurrence a sanctionné France Télécom/Orange pour un ciseau tarifaire sur le marché du haut débit (Aut. conc., 18 mars 2013, décision n° 13-D-06).</li>
          <li><b>Abus de dépendance économique</b> (art. L. 420-2 al. 2 C. com.) : spécificité du droit français. Un partenaire commercial qui se trouve en situation de dépendance économique (absence de solution alternative) ne peut être soumis à des conditions abusives par l'entreprise dominante.</li>
        </ul>
        <p><b>Les sanctions :</b></p>
        <p>L'Autorité de la concurrence peut infliger des <b>sanctions pécuniaires</b> pouvant atteindre 10 % du chiffre d'affaires mondial de l'entreprise (art. L. 464-2 C. com.). Elle peut également prononcer des <b>injonctions</b> (cessation de la pratique, mesures structurelles) et des <b>astreintes</b>.</p>`
      },
      {
        title: "Le contrôle des concentrations",
        content: `<p>Le <b>contrôle des concentrations</b> est un mécanisme préventif (ex ante) visant à empêcher la création ou le renforcement d'une position dominante susceptible de porter atteinte à la concurrence. Il est exercé en droit français par l'Autorité de la concurrence (art. L. 430-1 et s. C. com.) et en droit européen par la Commission européenne (règlement n° 139/2004).</p>
        <p><b>La notion de concentration (art. L. 430-1) :</b></p>
        <ul>
          <li><b>Fusion</b> entre deux ou plusieurs entreprises antérieurement indépendantes.</li>
          <li><b>Prise de contrôle</b> exclusif ou conjoint par une ou plusieurs entreprises (acquisition de droits de vote majoritaires, contrats de domination, contrôle de fait).</li>
          <li><b>Création d'une entreprise commune</b> de plein exercice accomplissant de manière durable toutes les fonctions d'une entité économique autonome.</li>
        </ul>
        <p><b>Les seuils de notification (art. L. 430-2) :</b></p>
        <ul>
          <li>Seuils de droit commun : chiffre d'affaires total mondial hors taxes supérieur à <b>150 millions d'euros</b> pour l'ensemble des parties, et chiffre d'affaires total hors taxes réalisé en France supérieur à <b>50 millions d'euros</b> pour au moins deux des parties.</li>
          <li>Seuils réduits pour le commerce de détail : 75 millions d'euros en France pour l'ensemble des parties.</li>
          <li>La notification est <b>obligatoire</b> et préalable à la réalisation de l'opération (art. L. 430-3). Le non-respect de cette obligation est sanctionné (art. L. 430-8).</li>
        </ul>
        <p><b>La procédure d'examen :</b></p>
        <ul>
          <li><b>Phase I</b> (25 jours ouvrés) : examen simplifié. L'Autorité autorise l'opération si elle n'est pas de nature à porter atteinte à la concurrence. Elle peut l'autoriser sous conditions (engagements des parties).</li>
          <li><b>Phase II</b> (65 jours ouvrés, prorogeables) : examen approfondi engagé si l'opération est susceptible de porter atteinte à la concurrence. L'Autorité peut autoriser (avec ou sans engagements), interdire l'opération ou prescrire des mesures correctives.</li>
          <li><b>Évocation par le ministre</b> (art. L. 430-7-1) : le ministre de l'Économie peut évoquer l'affaire pour des motifs d'intérêt général (développement industriel, compétitivité des entreprises, création d'emplois) et statuer lui-même.</li>
        </ul>`
      },
      {
        title: "L'Autorité de la concurrence et les sanctions",
        content: `<p>L'<b>Autorité de la concurrence</b>, autorité administrative indépendante créée par la loi LME du 4 août 2008 (succédant au Conseil de la concurrence), est l'institution centrale du droit français de la concurrence. Elle dispose de pouvoirs d'enquête, de décision et de sanction étendus.</p>
        <p><b>Organisation et compétences :</b></p>
        <ul>
          <li>L'Autorité est composée d'un <b>collège</b> de 17 membres (dont le président) et de <b>services d'instruction</b> dirigés par un rapporteur général (art. L. 461-1 C. com.).</li>
          <li><b>Compétences consultatives</b> : l'Autorité rend des avis sur les questions de concurrence à la demande du Gouvernement, des commissions parlementaires, des juridictions, des collectivités territoriales ou des organisations professionnelles.</li>
          <li><b>Compétences contentieuses</b> : elle instruit et sanctionne les pratiques anticoncurrentielles (ententes, abus de position dominante) et contrôle les concentrations.</li>
        </ul>
        <p><b>La procédure devant l'Autorité :</b></p>
        <ul>
          <li><b>Saisine</b> : par le ministre de l'Économie, les entreprises, les organisations professionnelles, les associations de consommateurs, ou d'<b>office</b> par l'Autorité elle-même (art. L. 462-5).</li>
          <li><b>Instruction</b> : les services d'instruction disposent de pouvoirs d'enquête étendus (auditions, demandes de communication de documents, visites et saisies autorisées par le JLD – art. L. 450-4).</li>
          <li><b>Notification de griefs</b> : document formalisant les reproches adressés aux entreprises, ouvrant la phase contradictoire.</li>
          <li><b>Procédure de transaction</b> (art. L. 464-2 III) : l'entreprise qui ne conteste pas les griefs bénéficie d'une réduction de sanction.</li>
          <li><b>Programme de clémence</b> (art. L. 464-2 IV) : l'entreprise qui révèle une entente et coopère avec l'Autorité peut bénéficier d'une <b>immunité totale</b> (premier demandeur) ou d'une <b>réduction de sanction</b>.</li>
        </ul>
        <p><b>Les sanctions pécuniaires (art. L. 464-2) :</b></p>
        <ul>
          <li>Maximum : <b>10 % du chiffre d'affaires mondial hors taxes</b> le plus élevé réalisé au cours d'un des exercices clos depuis l'exercice précédant celui au cours duquel les pratiques ont été mises en oeuvre (3 millions d'euros si le contrevenant n'est pas une entreprise).</li>
          <li>Les critères de détermination de la sanction : gravité des faits, importance du dommage à l'économie, situation individuelle de l'entreprise, éventuelles circonstances atténuantes ou aggravantes (récidive).</li>
        </ul>`
      },
      {
        title: "L'articulation entre le droit français et le droit européen de la concurrence",
        content: `<p>Le droit de la concurrence est caractérisé par une <b>dualité normative</b> entre le droit français (art. L. 420-1 et L. 420-2 C. com.) et le droit de l'Union européenne (art. 101 et 102 TFUE). Leur articulation obéit à des règles précises fixées par le règlement n° 1/2003 du 16 décembre 2002.</p>
        <p><b>Le champ d'application respectif :</b></p>
        <ul>
          <li>Le droit européen s'applique lorsque la pratique est susceptible d'<b>affecter le commerce entre États membres</b> (critère d'applicabilité de l'art. 101 TFUE). Ce critère est interprété largement : une entente portant sur l'ensemble du territoire français est présumée affecter le commerce interétatique.</li>
          <li>Le droit français s'applique aux pratiques dont les effets sont <b>limités au marché national</b> ou infranational.</li>
          <li><b>Application parallèle</b> (art. 3 du règlement 1/2003) : les autorités nationales et les juridictions nationales qui appliquent le droit national de la concurrence à des pratiques affectant le commerce entre États membres doivent <b>également appliquer</b> les articles 101 et 102 TFUE.</li>
        </ul>
        <p><b>Le principe de primauté :</b></p>
        <ul>
          <li>En matière d'ententes, le droit national ne peut pas interdire une pratique qui serait autorisée au titre de l'article 101 TFUE (règle de convergence). Inversement, le droit national peut être <b>plus sévère</b> que le droit européen en matière d'abus de position dominante et de comportements unilatéraux.</li>
          <li>La spécificité française de l'<b>abus de dépendance économique</b> (art. L. 420-2 al. 2 C. com.) est compatible avec le droit européen qui ne connaît pas cette notion.</li>
        </ul>
        <p><b>Le réseau européen de concurrence (REC) :</b></p>
        <ul>
          <li>Le règlement 1/2003 a instauré un système de <b>compétences parallèles</b> entre la Commission européenne et les autorités nationales de concurrence (ANC).</li>
          <li>Les ANC peuvent appliquer directement les articles 101 et 102 TFUE. Un mécanisme de répartition des affaires assure la cohérence du réseau.</li>
          <li>La directive ECN+ (n° 2019/1) transposée en droit français par l'ordonnance du 26 mai 2021 renforce les pouvoirs et l'indépendance des ANC et harmonise leurs outils procéduraux.</li>
        </ul>
        <h4>Le private enforcement</h4>
        <p>La <b>directive n° 2014/104</b> relative aux actions en dommages et intérêts pour violation du droit de la concurrence, transposée par l'ordonnance du 9 mars 2017, facilite l'indemnisation des victimes de pratiques anticoncurrentielles. Elle instaure une <b>présomption de préjudice</b> en cas d'entente, facilite l'accès aux preuves et prévoit un délai de prescription de <b>5 ans</b> à compter de la connaissance de l'infraction. L'action de groupe en matière de concurrence (art. L. 623-1 C. conso.) permet aux associations de consommateurs d'agir au nom des victimes.</p>`
      }
    ]
  }
};
