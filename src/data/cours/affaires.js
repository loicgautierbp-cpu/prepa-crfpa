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
  }
};
