export const COURS_CIVIL = {
  'civil-contrats': {
    introduction: "La formation du contrat est régie par les articles 1101 et suivants du Code civil, profondément réformés par l'ordonnance n°2016-131 du 10 février 2016, ratifiée par la loi n°2018-287 du 20 avril 2018. Cette réforme a codifié de nombreuses solutions jurisprudentielles et modernisé le droit français des obligations.",
    readTime: 25,
    sections: [
      {
        title: "Les négociations précontractuelles",
        content: `<p>Le Code civil consacre désormais un régime des <b>négociations précontractuelles</b> aux articles 1112 à 1112-2.</p>
        <p><b>La liberté des négociations (art. 1112 C. civ.) :</b></p>
        <ul>
          <li>L'initiative, le déroulement et la rupture des négociations précontractuelles sont libres.</li>
          <li>Toutefois, cette liberté est encadrée par l'exigence de <b>bonne foi</b>.</li>
          <li>La faute commise dans les négociations (rupture brutale et abusive, violation du devoir de bonne foi) engage la <b>responsabilité extracontractuelle</b> de son auteur (art. 1240 C. civ.).</li>
          <li>La réparation du préjudice ne peut avoir pour objet de compenser la <b>perte des avantages attendus du contrat non conclu</b> ni la <b>perte de chance</b> d'obtenir ces avantages (codification de la jurisprudence <i>Manoukian</i>, Cass. com., 26 novembre 2003).</li>
        </ul>
        <p><b>Le devoir d'information précontractuel (art. 1112-1 C. civ.) :</b></p>
        <ul>
          <li>Celle des parties qui connaît une information dont l'importance est <b>déterminante pour le consentement</b> de l'autre doit l'en informer dès lors que cette dernière l'ignore légitimement ou fait confiance à son cocontractant.</li>
          <li>Ce devoir ne porte pas sur l'estimation de la valeur de la prestation (exclusion de l'obligation d'informer sur le prix, conformément à <i>Baldus</i>, Cass. 1re civ., 3 mai 2000).</li>
          <li>La charge de la preuve du manquement pèse sur celui qui l'invoque, mais celle de l'exécution du devoir d'information pèse sur le débiteur de l'obligation.</li>
          <li>Sanction : responsabilité extracontractuelle et, le cas échéant, nullité du contrat pour vice du consentement (dol par réticence).</li>
        </ul>
        <p><b>Le devoir de confidentialité (art. 1112-2 C. civ.) :</b></p>
        <p>Celui qui utilise ou divulgue sans autorisation une information confidentielle obtenue lors des négociations engage sa responsabilité extracontractuelle.</p>`
      },
      {
        title: "L'offre et l'acceptation",
        content: `<p>Le contrat est formé par la <b>rencontre d'une offre et d'une acceptation</b> (art. 1113 C. civ.).</p>
        <p><b>L'offre (art. 1114 à 1117 C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> (art. 1114) : manifestation de volonté unilatérale exprimant les éléments essentiels du contrat envisagé, exprimant la volonté de son auteur d'être lié en cas d'acceptation. Doit être <b>ferme</b> (sans réserve) et <b>précise</b> (contenir les éléments essentiels).</li>
          <li><b>Distinction avec l'invitation à entrer en négociation</b> : une proposition qui ne contient pas les éléments essentiels ou qui comporte des réserves n'est pas une offre.</li>
          <li><b>Rétractation</b> (art. 1115-1116) : l'offre peut être librement rétractée tant qu'elle n'est pas parvenue à son destinataire. Passé ce moment, elle ne peut être rétractée avant l'expiration du délai fixé ou, à défaut, d'un délai raisonnable. La rétractation en violation de ces règles <b>empêche la formation du contrat</b> mais engage la responsabilité extracontractuelle de l'offrant (revirement par rapport à la jurisprudence antérieure).</li>
          <li><b>Caducité</b> (art. 1117) : l'offre est caduque à l'expiration du délai, en cas de décès ou d'incapacité de l'offrant, ou en cas de refus du destinataire.</li>
        </ul>
        <p><b>L'acceptation (art. 1118 à 1122 C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> (art. 1118) : manifestation de volonté de son auteur d'être lié dans les termes de l'offre. Doit être <b>pure et simple</b> ; une acceptation avec modifications constitue une contre-offre.</li>
          <li><b>Le silence</b> (art. 1120) : ne vaut pas acceptation, sauf exceptions (relations d'affaires, usages, loi). Codification de la jurisprudence classique (Cass. civ., 25 mai 1870).</li>
          <li><b>Moment de formation</b> : le contrat est conclu dès que l'acceptation parvient à l'offrant, consacrant la <b>théorie de la réception</b> (art. 1121).</li>
          <li><b>Contrats conclus par voie électronique</b> : régime spécial (art. 1125 à 1127-6 C. civ.) prévoyant un double clic et un accusé de réception.</li>
        </ul>
        <p><b>Le pacte de préférence</b> (art. 1123 C. civ.) : engagement de proposer prioritairement la conclusion d'un contrat. En cas de violation, le bénéficiaire peut obtenir la <b>substitution dans le contrat</b> conclu avec le tiers de mauvaise foi (qui connaissait l'existence du pacte et l'intention du bénéficiaire de s'en prévaloir). Grande innovation de la réforme.</p>
        <p><b>La promesse unilatérale</b> (art. 1124 C. civ.) : la révocation de la promesse pendant le temps laissé pour opter <b>n'empêche pas la formation du contrat</b> promis. Revirement de la jurisprudence <i>Cruz</i> (Cass. 3e civ., 15 décembre 1993) qui permettait à la rétractation de rendre la levée d'option inefficace.</p>`
      },
      {
        title: "Les conditions de validité : le consentement",
        content: `<p>Aux termes de l'article 1128 du Code civil, trois conditions sont nécessaires à la validité d'un contrat : le <b>consentement des parties</b>, leur <b>capacité de contracter</b>, et un <b>contenu licite et certain</b>. La cause et l'objet, qui figuraient dans l'ancien article 1108, ont été abandonnés en tant que conditions autonomes, mais leurs fonctions sont reprises sous d'autres qualifications.</p>
        <p><b>L'existence du consentement :</b></p>
        <p>Le consentement suppose une volonté réelle de contracter. En son absence, le contrat est nul (cas de l'insanité d'esprit – art. 414-1 C. civ.).</p>
        <p><b>Les vices du consentement (art. 1130 à 1144 C. civ.) :</b></p>
        <p>Un vice du consentement entraîne la <b>nullité relative</b> du contrat lorsqu'il a été déterminant et, en cas de dol ou de violence, lorsqu'il émane du cocontractant ou d'un tiers complice.</p>
        <p><b>1. L'erreur (art. 1132 à 1136) :</b></p>
        <ul>
          <li>L'erreur de droit ou de fait est une cause de nullité si elle porte sur les <b>qualités essentielles de la prestation</b> (celles convenues expressément ou tacitement et en considération desquelles les parties ont contracté) ou sur les <b>qualités essentielles du cocontractant</b> (contrats conclus intuitu personae).</li>
          <li>L'erreur doit être <b>excusable</b> : celui qui a commis une erreur grossière ne peut s'en prévaloir (art. 1132).</li>
          <li><b>L'erreur sur la valeur</b> (simple erreur d'appréciation économique) n'est pas une cause de nullité (art. 1136). Mais l'erreur sur une qualité essentielle ayant conduit à une erreur sur la valeur reste sanctionnable.</li>
          <li><b>L'erreur sur les motifs</b> n'est pas une cause de nullité, sauf convention expresse faisant du motif une condition du contrat (art. 1135).</li>
        </ul>
        <p><b>2. Le dol (art. 1137 à 1139) :</b></p>
        <ul>
          <li><b>Définition</b> : manœuvres, mensonges, ou dissimulation intentionnelle d'une information déterminante pour l'autre partie (dol par réticence, consacrant <i>Baldus</i>).</li>
          <li>Le dol émane nécessairement du cocontractant ou de son représentant. Le dol d'un tiers est sans incidence sauf complicité.</li>
          <li>Le dol rend toujours excusable l'erreur provoquée (art. 1139).</li>
          <li>L'erreur provoquée par le dol peut porter sur la valeur ou sur les motifs (art. 1139), ce qui élargit considérablement le champ par rapport à l'erreur spontanée.</li>
        </ul>
        <p><b>3. La violence (art. 1140 à 1143) :</b></p>
        <ul>
          <li>Violence physique, morale ou économique. La menace doit être illégitime et déterminante.</li>
          <li>L'<b>abus de l'état de dépendance</b> (art. 1143) constitue un cas de violence : il y a violence lorsqu'une partie, abusant de l'état de dépendance dans lequel se trouve son cocontractant à son égard, obtient un engagement que celui-ci n'aurait pas souscrit en l'absence d'une telle contrainte et en tire un <b>avantage manifestement excessif</b>. Innovation majeure de la réforme (codification partielle de Cass. 1re civ., 3 avril 2002, <i>Kannas</i>).</li>
        </ul>`
      },
      {
        title: "Le contenu du contrat",
        content: `<p>La réforme de 2016 a remplacé les notions d'objet et de cause par celle de <b>contenu du contrat</b> (art. 1162 à 1171 C. civ.), tout en conservant leurs fonctions essentielles.</p>
        <p><b>Le contenu licite et certain (art. 1162 à 1163) :</b></p>
        <ul>
          <li>Le contrat ne peut déroger à l'<b>ordre public</b> ni par ses stipulations, ni par son but (art. 1162). Le « but » reprend la fonction de la cause subjective (les motifs déterminants illicites).</li>
          <li>La prestation doit être <b>possible, déterminée ou déterminable</b> (art. 1163). L'impossibilité initiale de la prestation entraîne la nullité du contrat.</li>
        </ul>
        <p><b>La détermination du prix :</b></p>
        <ul>
          <li><b>Contrats-cadre</b> (art. 1164) : le prix peut être fixé unilatéralement par l'une des parties, à charge pour elle d'en motiver le montant en cas de contestation. En cas d'abus dans la fixation du prix, le juge peut accorder des dommages et intérêts et, le cas échéant, prononcer la résolution du contrat.</li>
          <li><b>Contrats de prestation de services</b> (art. 1165) : à défaut d'accord avant exécution, le prix peut être fixé par le créancier, à charge pour lui d'en motiver le montant. Le débiteur peut saisir le juge en cas d'abus.</li>
        </ul>
        <p><b>Les clauses abusives (art. 1171) :</b></p>
        <ul>
          <li>Dans un <b>contrat d'adhésion</b> (art. 1110 : celui dont les conditions générales, soustraites à la négociation, sont déterminées à l'avance par l'une des parties), toute clause non négociable qui crée un <b>déséquilibre significatif</b> entre les droits et obligations des parties est réputée non écrite.</li>
          <li>L'appréciation du déséquilibre significatif ne porte ni sur l'objet principal du contrat ni sur l'adéquation du prix à la prestation.</li>
          <li>Ce contrôle se distingue de celui du Code de la consommation (art. L. 212-1) par son champ d'application (tous les contrats d'adhésion, y compris entre professionnels) et son critère limité aux clauses non négociables.</li>
        </ul>
        <p><b>La disparition de la cause et ses substituts :</b></p>
        <p>La cause comme condition de validité disparaît formellement, mais ses fonctions perdurent :</p>
        <ul>
          <li>La fonction de <b>contrôle de licéité</b> est reprise par l'article 1162 (but du contrat).</li>
          <li>La fonction de <b>contrôle de l'existence de la contrepartie</b> est reprise par l'article 1169 : un contrat à titre onéreux est nul lorsque la contrepartie convenue est <b>illusoire ou dérisoire</b> au moment de la formation du contrat.</li>
        </ul>`
      },
      {
        title: "Les sanctions : la nullité du contrat",
        content: `<p>La nullité est la sanction de l'inobservation des conditions de formation du contrat (art. 1178 à 1185 C. civ.).</p>
        <p><b>Nullité relative et nullité absolue (art. 1179-1181) :</b></p>
        <ul>
          <li><b>Nullité absolue</b> : sanctionne la violation d'une règle d'<b>intérêt général</b> (ordre public de direction, illicéité du contenu ou du but). Peut être invoquée par toute personne justifiant d'un intérêt, ainsi que par le ministère public (art. 1180).</li>
          <li><b>Nullité relative</b> : sanctionne la violation d'une règle protégeant un <b>intérêt privé</b> (vices du consentement, incapacité, lésion). Ne peut être invoquée que par la partie protégée ou son représentant (art. 1181).</li>
        </ul>
        <p><b>La confirmation (art. 1182) :</b></p>
        <p>Le contractant qui peut invoquer la nullité relative peut y renoncer par la confirmation. La confirmation comporte la connaissance du vice et l'intention de le couvrir. Elle emporte renonciation aux moyens et exceptions que le confirmant aurait pu opposer.</p>
        <p><b>La prescription :</b></p>
        <ul>
          <li>Nullité relative : <b>5 ans</b> à compter de la découverte du vice (art. 1144, 2224 C. civ.).</li>
          <li>Nullité absolue : <b>5 ans</b> à compter du jour de la conclusion du contrat (art. 2224 C. civ.).</li>
          <li>L'exception de nullité est perpétuelle si le contrat n'a pas été exécuté (<i>quae temporalia sunt ad agendum, perpetua sunt ad excipiendum</i>).</li>
        </ul>
        <p><b>Les effets de la nullité (art. 1178) :</b></p>
        <ul>
          <li>Le contrat annulé est censé n'avoir <b>jamais existé</b> (effet rétroactif).</li>
          <li>Les prestations déjà exécutées donnent lieu à <b>restitution</b> (art. 1352 à 1352-9 C. civ.).</li>
          <li>Les restitutions en nature sont prioritaires ; à défaut, restitution en valeur estimée au jour de la restitution.</li>
          <li>Les fruits et la valeur de la jouissance doivent être restitués à compter du jour du paiement (sauf bonne foi du possesseur, art. 1352-7).</li>
          <li>La <b>nullité partielle</b> (art. 1184) : la nullité d'une clause n'emporte nullité du contrat entier que si cette clause était déterminante pour les parties.</li>
        </ul>
        <p>La responsabilité du cocontractant fautif peut être engagée en sus de la nullité, sur le fondement de la <b>responsabilité extracontractuelle</b> (la nullité anéantissant le contrat, c'est le régime délictuel qui s'applique, conformément à Cass. 1re civ., 25 juin 2014).</p>`
      }
    ]
  },
  'civil-responsabilite': {
    introduction: "La responsabilité civile délictuelle, régie par les articles 1240 à 1244 du Code civil (anciens articles 1382 à 1386), oblige celui qui cause un dommage à autrui à le réparer. Ce régime, largement d'origine jurisprudentielle, connaît un mouvement de réforme initié par le projet de réforme de la responsabilité civile.",
    readTime: 25,
    sections: [
      {
        title: "La responsabilité pour faute (art. 1240-1241 C. civ.)",
        content: `<p>L'article 1240 du Code civil (ancien art. 1382) pose le principe général : « Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer. » L'article 1241 (ancien art. 1383) étend cette responsabilité à la négligence et à l'imprudence.</p>
        <p><b>La faute :</b></p>
        <ul>
          <li><b>Définition</b> : la faute civile est un comportement qui s'écarte de celui qu'aurait eu une personne raisonnable placée dans les mêmes circonstances (<i>bonus pater familias</i>). Elle s'apprécie <b>in abstracto</b>.</li>
          <li><b>Types de faute</b> : faute par commission (acte positif) ou par omission (abstention fautive, admise depuis Cass. civ. 2e, 2 décembre 1997), faute intentionnelle ou non intentionnelle, faute de commission et faute d'abstention.</li>
          <li><b>Faute des personnes vulnérables</b> : depuis l'arrêt <i>Lemaire</i> et les arrêts de l'Assemblée plénière du 9 mai 1984 (<i>Fullenwarth, Derguini, Gabillet</i>), la faute civile est détachée de la notion d'imputabilité. Les personnes privées de discernement (enfants en bas âge, malades mentaux) peuvent commettre une faute civile.</li>
          <li><b>Faute et illicéité</b> : la violation d'une règle légale ou réglementaire constitue en principe une faute civile. Réciproquement, un comportement non interdit par la loi peut constituer une faute s'il s'écarte du standard du bon père de famille.</li>
          <li><b>Abus de droit</b> : l'exercice d'un droit devient fautif lorsqu'il est exercé dans l'intention de nuire, sans intérêt légitime, ou de manière disproportionnée (théorie issue de Cass. req., 3 août 1915, <i>Clément-Bayard</i>).</li>
        </ul>
        <p><b>La charge de la preuve :</b></p>
        <p>Il incombe à la victime de prouver la faute, le dommage et le lien de causalité (art. 1353 C. civ.). Toutefois, des présomptions de faute peuvent alléger cette charge (obligation de sécurité, etc.).</p>`
      },
      {
        title: "La responsabilité du fait d'autrui (art. 1242 C. civ.)",
        content: `<p>L'article 1242 du Code civil (ancien art. 1384) énonce au premier alinéa un principe général de responsabilité du fait d'autrui et prévoit des cas particuliers.</p>
        <p><b>Le principe général de responsabilité du fait d'autrui (art. 1242 al. 1er) :</b></p>
        <ul>
          <li>Consacré par l'arrêt <i>Blieck</i> (Cass. Ass. plén., 29 mars 1991) : une association gérant un centre d'aide par le travail est responsable du fait de la personne handicapée qu'elle a en charge.</li>
          <li><b>Conditions</b> : il faut un pouvoir d'organisation, de direction et de contrôle de l'activité ou du mode de vie d'autrui. La Cour de cassation applique cette responsabilité aux associations sportives pour le fait de leurs membres (<i>Commission des Communautés européennes</i>, Cass. 2e civ., 22 mai 1995 ; Ass. plén., 29 juin 2007), aux associations encadrant des mineurs, etc.</li>
          <li>C'est une responsabilité de <b>plein droit</b> (sans faute à prouver du répondant), fondée sur un fait de nature à engager la responsabilité de l'auteur direct.</li>
        </ul>
        <p><b>La responsabilité des parents du fait de leurs enfants mineurs (art. 1242 al. 4) :</b></p>
        <ul>
          <li>Le père et la mère, en tant qu'ils exercent l'<b>autorité parentale</b>, sont solidairement responsables du dommage causé par leurs enfants mineurs habitant avec eux.</li>
          <li>Responsabilité de <b>plein droit</b> depuis l'arrêt <i>Bertrand</i> (Cass. 2e civ., 19 février 1997) : il n'est plus nécessaire de prouver une faute de surveillance ou d'éducation.</li>
          <li>L'arrêt <i>Fullenwarth</i> (Ass. plén., 9 mai 1984) avait amorcé cette évolution en admettant qu'un simple fait causal de l'enfant (sans faute) suffisait.</li>
          <li>La seule cause d'exonération est la <b>force majeure</b> ou la <b>faute de la victime</b>. Le fait que le mineur n'ait pas commis de faute ne libère pas les parents.</li>
          <li>La condition de cohabitation s'apprécie de manière abstraite : le mineur est réputé habiter avec ses parents même s'il est temporairement confié à un tiers (revirement : Cass. 2e civ., 20 janvier 2000).</li>
        </ul>
        <p><b>La responsabilité des commettants du fait de leurs préposés (art. 1242 al. 5) :</b></p>
        <ul>
          <li>Le commettant est responsable du dommage causé par son préposé agissant dans les <b>fonctions</b> auxquelles il l'a employé.</li>
          <li><b>L'abus de fonctions</b> : le commettant s'exonère si le préposé a agi hors de ses fonctions, sans autorisation et à des fins étrangères à ses attributions (<i>trois conditions cumulatives</i> – Ass. plén., 19 mai 1988, <i>La Poste</i>).</li>
          <li><b>L'immunité du préposé</b> : le préposé qui agit sans excéder les limites de sa mission n'engage pas sa responsabilité personnelle envers les tiers (Ass. plén., 25 février 2000, <i>Costedoat</i>). Cette immunité tombe en cas de faute pénale intentionnelle (Ass. plén., 14 décembre 2001, <i>Cousin</i>).</li>
        </ul>`
      },
      {
        title: "La responsabilité du fait des choses (art. 1242 al. 1er et art. 1243-1244 C. civ.)",
        content: `<p>Le principe général de responsabilité du fait des choses a été dégagé à partir de l'alinéa 1er de l'article 1384 ancien (devenu 1242) par la jurisprudence, à partir de l'arrêt <i>Teffaine</i> (Cass. civ., 16 juin 1896) et surtout de l'arrêt <i>Jand'heur</i> (Cass. ch. réunies, 13 février 1930).</p>
        <p><b>Les conditions :</b></p>
        <ul>
          <li><b>Une chose</b> : toute chose matérielle, mobilière ou immobilière, dangereuse ou non, animée d'un mouvement ou inerte. Exclusion : les choses faisant l'objet d'un régime spécial (animaux – art. 1243, bâtiments en ruine – art. 1244, véhicules terrestres à moteur – loi Badinter).</li>
          <li><b>Le fait de la chose</b> : la chose doit avoir été l'<b>instrument du dommage</b>. Si la chose était en mouvement et est entrée en contact avec la victime, le fait de la chose est <b>présumé</b> (présomption de rôle actif). Si la chose était inerte, la victime doit prouver le rôle actif (position anormale, état défectueux – Cass. 2e civ., 24 février 2005).</li>
          <li><b>La garde</b> : est gardien celui qui a l'<b>usage, la direction et le contrôle</b> de la chose (Cass. ch. réunies, 2 décembre 1941, <i>Franck</i>). Le propriétaire est présumé gardien. Le transfert de garde est possible (vol, location, prêt). La garde de la structure peut être dissociée de la garde du comportement en cas de choses dotées d'un dynamisme propre (<i>Oxygène liquide</i>, Cass. 2e civ., 5 janvier 1956).</li>
        </ul>
        <p><b>Le régime :</b></p>
        <ul>
          <li>Responsabilité de <b>plein droit</b> : le gardien ne peut s'exonérer qu'en prouvant la <b>force majeure</b>, le <b>fait d'un tiers</b> ou la <b>faute de la victime</b> présentant les caractères de la force majeure (pour une exonération totale) ou simplement une faute contribuant au dommage (pour une exonération partielle).</li>
          <li>La preuve d'absence de faute ne suffit pas à exonérer le gardien.</li>
        </ul>
        <p><b>Cas spéciaux :</b></p>
        <ul>
          <li><b>Responsabilité du fait des animaux</b> (art. 1243) : le propriétaire ou celui qui s'en sert est responsable. Mêmes causes d'exonération.</li>
          <li><b>Responsabilité du fait des bâtiments en ruine</b> (art. 1244) : le propriétaire est responsable lorsque la ruine est due à un défaut d'entretien ou à un vice de construction. Responsabilité moins favorable à la victime (elle doit prouver la ruine et le défaut d'entretien ou le vice).</li>
        </ul>`
      },
      {
        title: "Le dommage réparable",
        content: `<p>Le dommage est une condition nécessaire de toute action en responsabilité civile. Il doit présenter certains caractères pour être réparable.</p>
        <p><b>Les caractères du dommage réparable :</b></p>
        <ul>
          <li><b>Certain</b> : le dommage doit être avéré et non simplement éventuel. Le <b>préjudice futur</b> est réparable s'il est certain (suite inéluctable d'un fait actuel). La <b>perte de chance</b> est un préjudice réparable si la chance perdue était sérieuse et non simplement hypothétique (Cass. 1re civ., 21 novembre 2006).</li>
          <li><b>Direct</b> : le dommage doit être une conséquence directe du fait générateur.</li>
          <li><b>Personnel</b> : seule la personne qui a subi le dommage peut agir (sauf action des proches pour préjudice par ricochet).</li>
          <li><b>Légitime</b> : le préjudice doit être juridiquement protégé. Cette condition a perdu de son importance (la concubine peut agir : Cass. ch. mixte, 27 février 1970).</li>
        </ul>
        <p><b>Les catégories de dommages :</b></p>
        <ul>
          <li><b>Dommage matériel</b> : perte subie (<i>damnum emergens</i>) et gain manqué (<i>lucrum cessans</i>).</li>
          <li><b>Dommage corporel</b> : la nomenclature <b>Dintilhac</b> (2005) distingue les préjudices patrimoniaux (temporaires et permanents) et extrapatrimoniaux : déficit fonctionnel (temporaire et permanent), souffrances endurées, préjudice esthétique, préjudice d'agrément, préjudice sexuel, préjudice d'établissement, etc.</li>
          <li><b>Dommage moral</b> : atteinte à l'honneur, à la réputation, préjudice d'affection (pour les proches d'une victime décédée ou gravement blessée), préjudice d'anxiété (Cass. soc., 11 mai 2010, amiante ; étendu par Ass. plén., 5 avril 2019).</li>
          <li><b>Dommage écologique</b> (art. 1246 à 1252 C. civ., issus de la loi du 8 août 2016) : préjudice écologique pur, réparable en nature (prioritairement) ou par équivalent. Codification de l'arrêt <i>Erika</i> (Cass. crim., 25 septembre 2012).</li>
        </ul>
        <p><b>Principe de réparation intégrale :</b></p>
        <p>Le propre de la responsabilité civile est de rétablir aussi exactement que possible l'équilibre détruit par le dommage et de replacer la victime dans la situation où elle se serait trouvée si le fait dommageable n'avait pas eu lieu (<i>Cass. 2e civ., 28 octobre 1954</i>). La réparation ne peut être ni inférieure ni supérieure au préjudice subi.</p>`
      },
      {
        title: "Le lien de causalité et les causes d'exonération",
        content: `<p><b>Le lien de causalité :</b></p>
        <p>La victime doit prouver que le fait générateur (faute, fait de la chose, fait d'autrui) est la cause du dommage.</p>
        <ul>
          <li><b>Théorie de l'équivalence des conditions</b> : est cause du dommage tout événement sans lequel le dommage ne se serait pas produit (<i>conditio sine qua non</i>). Théorie dominante en droit positif.</li>
          <li><b>Théorie de la causalité adéquate</b> : est cause du dommage l'événement qui, selon le cours normal des choses, était de nature à le produire. Parfois utilisée pour limiter les conséquences de l'équivalence des conditions.</li>
          <li><b>Preuve</b> : la charge de la preuve pèse sur la victime. En cas de causalité scientifiquement incertaine, la jurisprudence admet des présomptions de fait (Cass. 1re civ., 22 mai 2008, vaccin hépatite B et sclérose en plaques : présomptions graves, précises et concordantes).</li>
        </ul>
        <p><b>Les causes d'exonération :</b></p>
        <ul>
          <li><b>La force majeure</b> : événement présentant les caractères d'<b>extériorité, d'imprévisibilité et d'irrésistibilité</b> (les deux derniers critères étant prédominants depuis Ass. plén., 14 avril 2006). L'irrésistibilité s'apprécie au moment du fait dommageable, l'imprévisibilité au moment de la conclusion du contrat (en matière contractuelle) ou au moment des faits (en matière délictuelle).</li>
          <li><b>Le fait de la victime</b> :
            <ul>
              <li>Si le fait de la victime présente les caractères de la force majeure : <b>exonération totale</b>.</li>
              <li>Si le fait de la victime est fautif mais ne présente pas les caractères de la force majeure : <b>exonération partielle</b> (partage de responsabilité). L'étendue du partage est appréciée souverainement par les juges du fond.</li>
              <li>En matière de responsabilité du fait des choses, la faute de la victime n'est une cause d'exonération que si elle est la cause exclusive du dommage (exonération totale) ou si elle a contribué au dommage (exonération partielle).</li>
              <li><b>Cas des victimes privées de discernement</b> : la faute de la victime est opposable même si elle est privée de discernement (Cass. 2e civ., 28 février 1996).</li>
            </ul>
          </li>
          <li><b>Le fait d'un tiers</b> : n'est une cause d'exonération totale que s'il présente les caractères de la force majeure. À défaut, il peut y avoir responsabilité in solidum du défendeur et du tiers.</li>
        </ul>
        <p><b>Les clauses limitatives ou exonératoires de responsabilité :</b></p>
        <p>En matière délictuelle, elles sont en principe <b>nulles</b> car contraires à l'ordre public (on ne peut renoncer par avance à l'indemnisation d'un dommage corporel : art. 1166 C. civ.). En matière contractuelle, elles sont valables sous certaines conditions (art. 1170-1171 C. civ.).</p>`
      }
    ]
  },
  'civil-suretes': {
    introduction: "Les sûretés sont des garanties accordées au créancier pour le prémunir contre le risque d'insolvabilité du débiteur. Réformées en profondeur par l'ordonnance n°2021-1192 du 15 septembre 2021, entrée en vigueur le 1er janvier 2022, elles se divisent en sûretés personnelles et sûretés réelles, régies par le Livre IV du Code civil.",
    readTime: 20,
    sections: [
      {
        title: "Le cautionnement",
        content: `<p>Le <b>cautionnement</b> est la sûreté personnelle par excellence, définie à l'article 2288 du Code civil : « Celui qui se rend caution d'une obligation se soumet envers le créancier à satisfaire à cette obligation, si le débiteur n'y satisfait pas lui-même. »</p>
        <p><b>Formation du cautionnement :</b></p>
        <ul>
          <li><b>Caractère accessoire</b> : le cautionnement suppose une obligation principale valable (art. 2293). La nullité de l'obligation principale entraîne celle du cautionnement (sauf obligation naturelle).</li>
          <li><b>Consentement</b> : le cautionnement ne se présume pas et doit être exprès (art. 2294). La réforme de 2021 a supprimé la mention manuscrite (ancien art. L. 331-1 C. consom.) au profit d'un formalisme allégé.</li>
          <li><b>Formalisme</b> (art. 2297 C. civ., nouveau) : la caution personne physique doit apposer une mention par laquelle elle s'engage en qualité de caution à payer le créancier en cas de défaillance du débiteur, dans la limite d'un montant en principal et accessoires exprimé en lettres et en chiffres. En cas de différence, c'est la somme écrite en lettres qui prévaut.</li>
          <li><b>Proportionnalité</b> (art. 2300 C. civ.) : le cautionnement souscrit par une personne physique envers un créancier professionnel est réductible s'il est manifestement disproportionné aux revenus et patrimoine de la caution au moment de la conclusion. La sanction n'est plus la déchéance totale (ancienne solution de Cass. com., 1er octobre 2013, <i>Macron</i>) mais la <b>réduction à hauteur de ce que la caution pouvait raisonnablement supporter</b>.</li>
        </ul>
        <p><b>Effets du cautionnement :</b></p>
        <ul>
          <li><b>Bénéfice de discussion</b> (art. 2305) : la caution simple peut exiger que le créancier poursuive d'abord le débiteur principal. Ce bénéfice n'existe pas en cas de cautionnement solidaire.</li>
          <li><b>Bénéfice de division</b> (art. 2306) : en cas de pluralité de cautions simples, chacune peut demander la division de la dette.</li>
          <li><b>Obligation d'information annuelle</b> (art. 2302) : le créancier professionnel doit informer annuellement la caution personne physique du montant restant dû, sous peine de déchéance des intérêts échus.</li>
          <li><b>Recours de la caution</b> : recours personnel (art. 2308, sur le fondement du mandat ou de la gestion d'affaires) et recours subrogatoire (art. 2309, subrogation dans les droits du créancier).</li>
        </ul>`
      },
      {
        title: "Les sûretés réelles mobilières",
        content: `<p>Les sûretés réelles confèrent au créancier un droit sur un bien du débiteur ou d'un tiers, lui offrant un <b>droit de préférence</b> et, souvent, un <b>droit de suite</b>.</p>
        <p><b>Le gage (art. 2333 et s. C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> : convention par laquelle le constituant accorde à un créancier le droit de se faire payer par préférence sur un bien meuble corporel ou un ensemble de biens meubles corporels, présents ou futurs.</li>
          <li><b>Constitution</b> : acte écrit à peine de nullité, désignant la dette garantie et les biens gagés (art. 2336). La dépossession n'est plus nécessaire : le gage sans dépossession est opposable aux tiers par inscription sur un registre (art. 2337).</li>
          <li><b>Effets</b> : droit de préférence, droit de rétention (en cas de gage avec dépossession), <b>pacte commissoire</b> autorisé (art. 2348 : clause permettant au créancier de devenir propriétaire du bien gagé en cas de défaillance), et <b>attribution judiciaire</b> du bien.</li>
        </ul>
        <p><b>Le nantissement (art. 2355 et s. C. civ.) :</b></p>
        <ul>
          <li>Porte sur des biens meubles <b>incorporels</b> : créances, parts sociales, fonds de commerce, valeurs mobilières.</li>
          <li><b>Nantissement de créance</b> (art. 2356 et s.) : particulièrement renforcé par la réforme de 2021. Le créancier nanti peut se faire payer directement par le débiteur de la créance nantie (art. 2363). En cas de défaillance, il peut obtenir l'attribution de la créance en paiement.</li>
          <li><b>Nantissement de fonds de commerce</b> : soumis à publicité au greffe du tribunal de commerce. Confère un droit de préférence mais pas de droit de suite (sauf inscription).</li>
        </ul>
        <p><b>La réserve de propriété (art. 2367 et s. C. civ.) :</b></p>
        <ul>
          <li>Clause par laquelle le vendeur conserve la propriété du bien vendu jusqu'au <b>paiement intégral du prix</b>.</li>
          <li>Le transfert de propriété est suspendu, ce qui constitue une garantie très efficace, notamment en cas de procédure collective (la réserve de propriété est opposable à la procédure si elle a été convenue par écrit au plus tard au moment de la livraison).</li>
          <li>Droit de revendication de l'article L. 624-16 du Code de commerce.</li>
        </ul>`
      },
      {
        title: "Les sûretés réelles immobilières : l'hypothèque",
        content: `<p>L'<b>hypothèque</b> est une sûreté réelle immobilière conférant au créancier un droit de préférence et un droit de suite sur un immeuble, sans dépossession du constituant.</p>
        <p><b>Les différentes formes d'hypothèque :</b></p>
        <ul>
          <li><b>Hypothèque conventionnelle</b> (art. 2385 et s. C. civ.) : constituée par acte notarié à peine de nullité. Elle doit désigner l'immeuble grevé et la dette garantie. Elle peut porter sur un immeuble présent ou futur (art. 2389). La réforme de 2021 admet l'<b>hypothèque rechargeable</b> (art. 2393) permettant de réutiliser l'inscription pour garantir de nouvelles créances.</li>
          <li><b>Hypothèque légale</b> (art. 2395 et s.) : attachée de plein droit à certaines créances (Trésor public, copropriété, etc.).</li>
          <li><b>Hypothèque judiciaire</b> (art. 2400 et s.) : résulte d'une décision de justice ou d'une autorisation judiciaire (hypothèque conservatoire).</li>
        </ul>
        <p><b>Publicité :</b></p>
        <ul>
          <li>L'hypothèque doit être <b>inscrite</b> au service de la publicité foncière pour être opposable aux tiers (art. 2383).</li>
          <li>Le rang des créanciers hypothécaires est déterminé par la <b>date d'inscription</b> (art. 2418 : <i>prior tempore, potior jure</i>).</li>
          <li>L'inscription conserve l'hypothèque pendant toute la durée de l'inscription, renouvelable (art. 2414).</li>
        </ul>
        <p><b>Effets de l'hypothèque :</b></p>
        <ul>
          <li><b>Droit de préférence</b> : le créancier hypothécaire est payé par préférence sur le prix de l'immeuble vendu (art. 2417). Son rang dépend de la date d'inscription.</li>
          <li><b>Droit de suite</b> (art. 2419) : le créancier peut saisir l'immeuble en quelques mains qu'il se trouve. Le tiers détenteur peut purger l'hypothèque en payant les créanciers inscrits.</li>
          <li><b>Réalisation</b> : vente forcée de l'immeuble par voie de saisie immobilière. Le <b>pacte commissoire</b> est désormais autorisé (art. 2387), sauf pour la résidence principale du constituant.</li>
          <li><b>Attribution judiciaire</b> : le créancier peut demander en justice que l'immeuble lui soit attribué en paiement (art. 2387).</li>
        </ul>
        <p><b>Extinction :</b></p>
        <p>L'hypothèque s'éteint par voie accessoire (extinction de la créance garantie) ou par voie principale (renonciation, purge, prescription). La <b>mainlevée</b> d'inscription peut être conventionnelle ou judiciaire.</p>`
      },
      {
        title: "Les garanties autonomes et les privilèges",
        content: `<p><b>La garantie autonome (art. 2321 C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> : engagement par lequel le garant s'oblige, en considération d'une obligation souscrite par un tiers, à verser une somme soit à première demande, soit suivant des modalités convenues.</li>
          <li><b>Caractère autonome</b> : à la différence du cautionnement, le garant ne peut opposer aucune exception tirée de l'obligation garantie. L'engagement du garant est <b>indépendant</b> du contrat de base.</li>
          <li><b>Limite</b> : le garant peut opposer l'<b>abus manifeste</b> ou la <b>fraude</b> du bénéficiaire (art. 2321 al. 2). La jurisprudence sanctionne l'appel manifestement abusif (Cass. com., 20 décembre 1982).</li>
          <li><b>Interdiction dans les rapports entre le créancier professionnel et le débiteur personne physique</b> (art. 2321 al. 4, nouveau) pour les dettes contractées par un entrepreneur individuel, sauf si le garant est lui-même un professionnel.</li>
        </ul>
        <p><b>Les privilèges :</b></p>
        <ul>
          <li><b>Définition</b> (art. 2324 C. civ.) : droit que la qualité de la créance donne à un créancier d'être préféré aux autres créanciers, même hypothécaires.</li>
          <li><b>Privilèges généraux</b> : portent sur l'ensemble du patrimoine du débiteur (frais de justice, salaires – superprivilège des salariés, art. L. 3253-2 C. trav., créances du Trésor public).</li>
          <li><b>Privilèges spéciaux mobiliers</b> : portent sur un meuble déterminé (privilège du bailleur d'immeuble sur les meubles garnissant les lieux, privilège du vendeur de meuble).</li>
          <li><b>Privilèges spéciaux immobiliers</b> : portent sur un immeuble déterminé et doivent être inscrits pour être opposables (privilège du vendeur d'immeuble, privilège du prêteur de deniers – supprimé par la réforme de 2021 et remplacé par l'hypothèque légale du prêteur de deniers).</li>
        </ul>
        <p><b>Le classement des sûretés :</b></p>
        <p>L'ordre de paiement des créanciers est régi par des règles complexes : les créanciers superprivilégiés (salaires) priment les créanciers privilégiés, qui priment les créanciers hypothécaires, qui priment les créanciers chirographaires. Entre créanciers de même rang, la date de publicité départage.</p>`
      }
    ]
  },
  'civil-regime-obligations': {
    introduction: "Le régime général des obligations, régi par les articles 1321 et suivants du Code civil issus de l'ordonnance n° 2016-131 du 10 février 2016, regroupe l'ensemble des règles applicables aux obligations indépendamment de leur source. Il traite de la circulation des obligations (cession de créance, subrogation), de leur extinction, des restitutions et de la prescription extinctive.",
    readTime: 20,
    sections: [
      {
        title: "La cession de créance (art. 1321 à 1326 C. civ.)",
        content: `<p>La <b>cession de créance</b> est le contrat par lequel le créancier (cédant) transmet, à titre onéreux ou gratuit, tout ou partie de sa créance contre le débiteur (débiteur cédé) à un tiers (cessionnaire). La réforme de 2016 a profondément simplifié ce mécanisme.</p>
        <p><b>Conditions de la cession :</b></p>
        <ul>
          <li><b>Un écrit</b> est exigé à peine de nullité (art. 1322 C. civ.), sauf pour les cessions de créances professionnelles (bordereau Dailly, art. L. 313-23 CMF).</li>
          <li>La créance doit être <b>identifiable</b> : créances présentes ou futures, déterminées ou déterminables (art. 1321 al. 2).</li>
          <li>Les <b>clauses d'incessibilité</b> ne sont pas opposables au cessionnaire sauf s'il en avait connaissance au moment de la cession (art. 1321 al. 4).</li>
          <li>Le <b>consentement du débiteur cédé n'est pas requis</b> (art. 1321 al. 3), sauf si la créance a été stipulée incessible avec l'accord du débiteur initial.</li>
        </ul>
        <p><b>Effets entre les parties :</b></p>
        <ul>
          <li>Le transfert de la créance s'opère à la date de l'acte, entre les parties (art. 1323 al. 1).</li>
          <li>La créance est transmise avec ses <b>accessoires</b> : sûretés, exceptions inhérentes à la dette (art. 1321 al. 3). Le cessionnaire peut opposer au débiteur cédé toutes les exceptions que le cédant aurait pu invoquer.</li>
        </ul>
        <p><b>Opposabilité aux tiers et au débiteur cédé :</b></p>
        <ul>
          <li>La cession est opposable aux tiers dès la <b>date de l'acte</b> (art. 1323 al. 2) – simplification majeure par rapport à l'ancien article 1690 qui exigeait une signification par huissier ou une acceptation dans un acte authentique.</li>
          <li>Elle n'est opposable au <b>débiteur cédé</b> qu'à compter de sa <b>notification</b> ou de sa prise d'acte (art. 1324). Avant notification, le débiteur cédé peut valablement payer entre les mains du cédant.</li>
          <li>Le débiteur cédé peut opposer au cessionnaire les exceptions <b>inhérentes à la dette</b> (nullité, exception d'inexécution, résolution, compensation des dettes connexes) et les exceptions <b>personnelles</b> nées avant la notification (compensation de dettes non connexes, remise de dette consentie par le cédant).</li>
        </ul>`
      },
      {
        title: "La subrogation personnelle (art. 1346 à 1346-5 C. civ.)",
        content: `<p>La <b>subrogation personnelle</b> est le mécanisme par lequel un tiers (le subrogé) qui paie la dette d'autrui est substitué dans les droits du créancier qu'il a désintéressé. Elle se distingue de la cession de créance en ce qu'elle suppose un <b>paiement</b> et non un simple transfert conventionnel.</p>
        <p><b>La subrogation légale (art. 1346 C. civ.) :</b></p>
        <ul>
          <li>Elle joue de plein droit au profit de celui qui, <b>étant lui-même créancier</b>, paie un créancier qui lui est préférable (subrogation du créancier chirographaire qui paie le créancier hypothécaire).</li>
          <li>Au profit de celui qui, <b>acquéreur d'un bien</b>, emploie le prix de son acquisition au paiement des créanciers auxquels ce bien était hypothéqué.</li>
          <li>Au profit de celui qui, <b>tenu avec d'autres ou pour d'autres</b> au paiement de la dette, a intérêt à l'acquitter (caution, codébiteur solidaire, assureur sur le fondement de l'art. L. 121-12 C. assur.).</li>
          <li>Au profit de l'héritier acceptant qui paie de ses deniers les dettes de la succession.</li>
        </ul>
        <p><b>La subrogation conventionnelle :</b></p>
        <ul>
          <li><b>Consentie par le créancier</b> (art. 1346-1) : le créancier, recevant paiement d'un tiers, peut le subroger dans ses droits. Elle doit être <b>expresse</b> et <b>concomitante au paiement</b>.</li>
          <li><b>Consentie par le débiteur</b> (art. 1346-2) : le débiteur qui emprunte une somme pour payer sa dette peut subroger le prêteur dans les droits du créancier, sans le consentement de celui-ci. L'acte d'emprunt et la quittance doivent être authentiques ou la date du paiement doit être certaine.</li>
        </ul>
        <p><b>Effets de la subrogation :</b></p>
        <ul>
          <li>Le subrogé dispose de <b>deux actions</b> : l'action subrogatoire (exercice des droits du créancier initial avec ses sûretés et accessoires) et l'action personnelle (fondée sur le mandat, la gestion d'affaires ou l'enrichissement injustifié).</li>
          <li>La subrogation <b>ne peut nuire au créancier</b> lorsqu'il n'a été que partiellement payé : il exerce ses droits pour le solde par préférence au subrogé (art. 1346-3), sauf convention contraire.</li>
          <li>Le débiteur peut opposer au subrogé les <b>mêmes exceptions</b> qu'au créancier initial (art. 1346-5).</li>
        </ul>`
      },
      {
        title: "L'extinction des obligations (art. 1342 à 1352-9 C. civ.)",
        content: `<p>Les obligations s'éteignent par plusieurs modes prévus aux articles 1342 et suivants du Code civil. Le <b>paiement</b> constitue le mode normal d'extinction, mais le Code civil en prévoit d'autres.</p>
        <p><b>Le paiement (art. 1342 à 1346-5) :</b></p>
        <ul>
          <li>Le paiement est l'<b>exécution volontaire de la prestation due</b> (art. 1342). Il doit être fait au créancier ou à la personne désignée pour le recevoir.</li>
          <li><b>Le paiement de l'indu</b> (art. 1302 à 1302-3) : celui qui reçoit par erreur ce qui ne lui est pas dû doit le restituer. L'action en répétition de l'indu suppose un paiement indu (objectif ou subjectif) et se prescrit par 5 ans.</li>
          <li><b>La mise en demeure</b> (art. 1344) : le débiteur est mis en demeure par une sommation, un acte portant interpellation suffisante, ou si le contrat le prévoit, par la seule exigibilité de l'obligation. Elle fait courir les dommages-intérêts moratoires et transfère les risques.</li>
        </ul>
        <p><b>La compensation (art. 1347 à 1348-2) :</b></p>
        <ul>
          <li>La compensation est l'extinction simultanée d'obligations réciproques entre deux personnes (art. 1347). Elle suppose des obligations <b>réciproques, fongibles, certaines, liquides et exigibles</b>.</li>
          <li>La compensation <b>légale</b> s'opère de plein droit dès que les conditions sont réunies (art. 1347 al. 2), mais doit être <b>invoquée</b> par la partie qui s'en prévaut (innovation de la réforme – abandon de l'automaticité de l'ancien art. 1290).</li>
          <li>La compensation <b>judiciaire</b> : le juge peut prononcer la compensation si la dette invoquée en compensation n'est pas liquide ou pas exigible mais peut être évaluée (art. 1348).</li>
          <li>Les <b>dettes connexes</b> se compensent même si les conditions ne sont pas toutes réunies (art. 1348-1) : jurisprudence constante en matière de contrats synallagmatiques.</li>
        </ul>
        <p><b>Autres modes d'extinction :</b></p>
        <ul>
          <li><b>La confusion</b> (art. 1349) : réunion des qualités de créancier et de débiteur sur la même personne (ex. : héritier unique du créancier).</li>
          <li><b>La remise de dette</b> (art. 1350 à 1350-2) : convention par laquelle le créancier libère le débiteur. Elle peut être expresse ou tacite (remise du titre original au débiteur). La remise consentie à l'un des codébiteurs solidaires ne libère les autres qu'à concurrence de la part du débiteur remis.</li>
          <li><b>L'impossibilité d'exécuter</b> (art. 1351 et 1351-1) : la force majeure libère le débiteur à due concurrence.</li>
        </ul>`
      },
      {
        title: "Les restitutions (art. 1352 à 1352-9 C. civ.)",
        content: `<p>La réforme de 2016 a créé un <b>régime général des restitutions</b> applicable à toutes les hypothèses d'anéantissement rétroactif du contrat (nullité, résolution, caducité). Ce régime unifié est codifié aux articles 1352 à 1352-9 du Code civil.</p>
        <p><b>Le principe de la restitution en nature :</b></p>
        <ul>
          <li>La restitution d'une chose autre que d'une somme d'argent a lieu <b>en nature</b> (art. 1352). Si la restitution en nature est impossible, elle se fait <b>en valeur</b> estimée au jour de la restitution.</li>
          <li>En cas de <b>dégradation</b>, le débiteur de la restitution répond de la perte de valeur, sauf s'il est de bonne foi et que la dégradation ne résulte pas de sa faute (art. 1352-1).</li>
          <li>En cas de <b>plus-value</b> résultant de travaux ou d'améliorations, le débiteur de la restitution a droit à une indemnité égale à la plus faible des sommes entre la dépense engagée et la plus-value procurée (art. 1352-5).</li>
        </ul>
        <p><b>La restitution des fruits et de la valeur de jouissance :</b></p>
        <ul>
          <li>Celui qui restitue la chose répond des <b>fruits</b> qu'il a perçus ou qu'il a négligé de percevoir (art. 1352-3). Le possesseur de bonne foi ne doit pas les fruits perçus avant la demande de restitution (application de l'art. 549 C. civ.).</li>
          <li>La <b>valeur de jouissance</b> est également restituable : la Cour de cassation admet la restitution de la jouissance d'une chose dont l'acquéreur a profité (Cass. 1re civ., 11 mars 2003, <i>Société Les Grandes Brasseries</i>), ce que confirme l'article 1352-3.</li>
        </ul>
        <p><b>La restitution d'une somme d'argent :</b></p>
        <ul>
          <li>La restitution d'une somme d'argent inclut les <b>intérêts au taux légal</b> et les <b>taxes acquittées</b> (art. 1352-6).</li>
          <li>Les intérêts courent à compter du <b>paiement</b> si le débiteur de la restitution est de mauvaise foi, à compter de la <b>mise en demeure</b> dans le cas contraire.</li>
        </ul>
        <h4>La protection des incapables</h4>
        <p>L'article 1352-4 protège les <b>personnes protégées</b> (mineurs, majeurs sous tutelle ou curatelle) : la restitution de ce qui a été payé en exécution d'un contrat annulé pour incapacité est limitée à la mesure du profit que l'incapable a retiré de l'acte. Cette disposition codifie la jurisprudence classique relative à la théorie de l'enrichissement (<i>in quantum locupletior factus est</i>).</p>`
      },
      {
        title: "La prescription extinctive (art. 2219 à 2254 C. civ.)",
        content: `<p>La <b>prescription extinctive</b>, réformée par la loi n° 2008-561 du 17 juin 2008, est un mode d'extinction d'un droit résultant de l'inaction de son titulaire pendant un certain temps (art. 2219 C. civ.). Elle concourt à la <b>sécurité juridique</b> et à la <b>paix sociale</b>.</p>
        <p><b>Le délai de droit commun :</b></p>
        <ul>
          <li>Le délai de prescription de droit commun est de <b>5 ans</b> (art. 2224), réduction considérable par rapport à l'ancien délai de 30 ans de l'article 2262 ancien.</li>
          <li>Ce délai s'applique aux actions personnelles et mobilières, qu'elles soient contractuelles ou extracontractuelles.</li>
        </ul>
        <p><b>Le point de départ :</b></p>
        <ul>
          <li>La prescription court « à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer » (art. 2224) – consécration du principe <i>actio non nata non praescribitur</i>.</li>
          <li>Le report du point de départ intervient en cas d'<b>impossibilité d'agir</b> (art. 2234) : la prescription ne court pas ou est suspendue contre celui qui est dans l'impossibilité d'agir par suite d'un empêchement résultant de la loi, de la convention ou de la force majeure.</li>
        </ul>
        <p><b>Suspension et interruption :</b></p>
        <ul>
          <li><b>Suspension</b> (art. 2230 et s.) : arrête temporairement le cours de la prescription sans effacer le délai déjà couru. Causes : minorité ou tutelle du créancier (art. 2235), négociation entre les parties (art. 2238), demande de mesure d'instruction avant tout procès (art. 2239), MARD – médiation conventionnelle (art. 2238).</li>
          <li><b>Interruption</b> (art. 2240 et s.) : efface le délai écoulé et fait courir un nouveau délai. Causes : reconnaissance par le débiteur (art. 2240), demande en justice même en référé (art. 2241), acte d'exécution forcée (art. 2244), mesure conservatoire prise en application du Code des procédures civiles d'exécution.</li>
        </ul>
        <p><b>Aménagements conventionnels (art. 2254) :</b></p>
        <ul>
          <li>Les parties peuvent <b>allonger ou réduire</b> la durée de la prescription dans la limite de 1 an minimum et 10 ans maximum.</li>
          <li>Les clauses relatives à la prescription dans les contrats d'adhésion sont soumises au contrôle des clauses abusives (art. 1171).</li>
          <li>La prescription est d'<b>ordre public</b> en ce que le juge ne peut pas la soulever d'office (art. 2247) et le débiteur ne peut pas y renoncer par avance (art. 2250).</li>
        </ul>`
      }
    ]
  },
  'civil-biens': {
    introduction: "Le droit des biens, régi principalement par le Livre II du Code civil (art. 516 et s.), organise les rapports juridiques entre les personnes et les choses. Il constitue un pilier du droit privé, articulé autour de la classification des biens, du droit de propriété consacré à l'article 544, de ses démembrements (usufruit, servitudes), de la possession et de la prescription acquisitive.",
    readTime: 20,
    sections: [
      {
        title: "La classification des biens",
        content: `<p>Le Code civil opère une <b>summa divisio</b> entre les meubles et les immeubles (art. 516 : « Tous les biens sont meubles ou immeubles »). Cette distinction emporte des conséquences majeures en matière de régime juridique, de publicité et de sûretés.</p>
        <p><b>Les immeubles (art. 517 à 526) :</b></p>
        <ul>
          <li><b>Immeubles par nature</b> (art. 518) : le sol, les bâtiments, les végétaux tant qu'ils sont attachés au sol. Les éoliennes et panneaux solaires fixés au sol sont des immeubles par nature (Cass. 3e civ., 7 mars 2019).</li>
          <li><b>Immeubles par destination</b> (art. 524) : meubles affectés par le propriétaire au service et à l'exploitation d'un immeuble (matériel agricole, chaudière, statues scellées). Conditions cumulatives : même propriétaire pour le meuble et l'immeuble, et affectation au service de l'immeuble ou attache à perpétuelle demeure.</li>
          <li><b>Immeubles par l'objet auquel ils s'appliquent</b> (art. 526) : droits réels immobiliers (usufruit, servitudes, hypothèques) et actions tendant à revendiquer un immeuble.</li>
        </ul>
        <p><b>Les meubles (art. 527 à 536) :</b></p>
        <ul>
          <li><b>Meubles par nature</b> (art. 528) : les corps qui peuvent se transporter d'un lieu à un autre (animaux, véhicules, marchandises, mobilier).</li>
          <li><b>Meubles par détermination de la loi</b> (art. 529) : les droits incorporels mobiliers (parts sociales, actions, brevets, marques, droits d'auteur, créances). Les fonds de commerce sont des meubles incorporels (Cass. com., 6 février 1996).</li>
          <li><b>Meubles par anticipation</b> : catégorie jurisprudentielle désignant les immeubles considérés par avance comme meubles en vue de leur détachement futur (récoltes sur pied vendues, matériaux d'une maison à démolir).</li>
        </ul>
        <h4>Autres classifications doctrinales</h4>
        <p>La doctrine distingue également les <b>biens corporels</b> (ayant une existence matérielle) des <b>biens incorporels</b> (droits, créances, propriété intellectuelle), les biens <b>fongibles</b> (interchangeables) des biens <b>non fongibles</b> (corps certains), et les biens <b>consomptibles</b> (détruits par le premier usage) des biens <b>non consomptibles</b>. Ces classifications influencent le régime des obligations de restitution, du prêt et du dépôt.</p>`
      },
      {
        title: "Le droit de propriété (art. 544 C. civ.)",
        content: `<p>L'<b>article 544 du Code civil</b> définit la propriété comme « le droit de jouir et disposer des choses de la manière la plus absolue, pourvu qu'on n'en fasse pas un usage prohibé par les lois ou par les règlements ». Ce droit fondamental bénéficie d'une protection constitutionnelle (art. 17 DDHC) et conventionnelle (art. 1er du Protocole n° 1 CEDH).</p>
        <p><b>Les attributs du droit de propriété :</b></p>
        <ul>
          <li><b>L'usus</b> : le droit d'user de la chose, d'en jouir personnellement ou de la laisser vacante.</li>
          <li><b>Le fructus</b> : le droit de percevoir les fruits de la chose (fruits naturels, industriels et civils – art. 547 C. civ.).</li>
          <li><b>L'abusus</b> : le droit de disposer de la chose (la vendre, la donner, la détruire, l'hypothéquer).</li>
        </ul>
        <p><b>Les caractères du droit de propriété :</b></p>
        <ul>
          <li><b>Absolu</b> : le propriétaire exerce les prérogatives les plus étendues sur la chose, sous réserve des limites légales et réglementaires.</li>
          <li><b>Exclusif</b> : le propriétaire peut s'opposer à toute immixtion de tiers. L'action en revendication permet de récupérer un bien entre les mains d'un tiers détenteur. L'action est imprescriptible en matière immobilière (Cass. 3e civ., 2 juin 1993).</li>
          <li><b>Perpétuel</b> : le droit de propriété ne s'éteint pas par le non-usage (art. 2227 C. civ.). Il se transmet aux héritiers et ne peut être perdu que par l'effet de la prescription acquisitive au profit d'un tiers possesseur.</li>
        </ul>
        <p><b>Les limites du droit de propriété :</b></p>
        <ul>
          <li><b>L'expropriation pour cause d'utilité publique</b> (art. 17 DDHC, art. L. 1 C. expropriations) : moyennant une juste et préalable indemnité.</li>
          <li><b>La théorie des troubles anormaux du voisinage</b> : responsabilité sans faute du propriétaire causant un trouble excédant les inconvénients normaux du voisinage (Cass. 3e civ., 4 février 1971, consacrée par l'art. 1253 C. civ. depuis la loi du 15 avril 2024).</li>
          <li><b>L'abus du droit de propriété</b> : le propriétaire ne peut exercer son droit dans la seule intention de nuire à autrui (Cass. req., 3 août 1915, <i>Clément-Bayard</i>).</li>
        </ul>`
      },
      {
        title: "Les démembrements de la propriété",
        content: `<p>Le droit de propriété peut être <b>démembré</b>, c'est-à-dire que ses attributs sont répartis entre plusieurs titulaires. Les principaux démembrements sont l'<b>usufruit</b> et les <b>servitudes</b>.</p>
        <p><b>L'usufruit (art. 578 à 624 C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> (art. 578) : « L'usufruit est le droit de jouir des choses dont un autre a la propriété, comme le propriétaire lui-même, mais à la charge d'en conserver la substance. »</li>
          <li><b>Droits de l'usufruitier</b> : usage de la chose (usus) et perception des fruits (fructus). Il peut donner le bien à bail, céder son droit d'usufruit (art. 595 al. 1), percevoir les fruits naturels par la perception et les fruits civils jour par jour (art. 586).</li>
          <li><b>Obligations de l'usufruitier</b> : dresser un inventaire (art. 600), jouir en bon père de famille (art. 601), supporter les réparations d'entretien (art. 605) tandis que les grosses réparations incombent au nu-propriétaire (art. 606), payer les charges usufructuaires (impôts et charges des revenus).</li>
          <li><b>Quasi-usufruit</b> (art. 587) : lorsque l'usufruit porte sur des choses consomptibles, l'usufruitier en devient propriétaire à charge de restituer l'équivalent en quantité, qualité et valeur.</li>
          <li><b>Extinction</b> : mort de l'usufruitier (si personne physique) ou expiration du terme de 30 ans maximum (si personne morale – art. 619), consolidation, renonciation, non-usage pendant 30 ans, abus de jouissance (art. 618).</li>
        </ul>
        <p><b>Les servitudes (art. 637 à 710 C. civ.) :</b></p>
        <ul>
          <li><b>Définition</b> (art. 637) : charge imposée sur un héritage (fonds servant) pour l'usage et l'utilité d'un héritage appartenant à un autre propriétaire (fonds dominant).</li>
          <li><b>Classification</b> : servitudes naturelles (écoulement des eaux – art. 640), servitudes légales (droit de passage en cas d'enclave – art. 682, servitudes de vue – art. 678-680, servitudes de distance pour les plantations – art. 671-672), servitudes conventionnelles (du fait de l'homme – art. 686).</li>
          <li><b>Servitudes continues et discontinues</b> (art. 688) : les servitudes continues (vue, non aedificandi) s'exercent sans fait actuel de l'homme ; les servitudes discontinues (passage) nécessitent le fait actuel de l'homme. Cette distinction est fondamentale pour la prescription acquisitive des servitudes.</li>
        </ul>`
      },
      {
        title: "La possession (art. 2255 à 2279 C. civ.)",
        content: `<p>La <b>possession</b> est définie par l'article 2255 du Code civil comme « la détention ou la jouissance d'une chose ou d'un droit que nous tenons ou que nous exerçons par nous-mêmes, ou par un autre qui la tient ou qui l'exerce en notre nom ». Elle constitue un fait juridique producteur d'effets de droit considérables.</p>
        <p><b>Les éléments constitutifs de la possession :</b></p>
        <ul>
          <li><b>Le corpus</b> : élément matériel, consistant dans l'exercice effectif d'actes matériels correspondant à l'exercice du droit possédé (occupation, usage, perception des fruits, travaux d'entretien).</li>
          <li><b>L'animus domini</b> : élément intentionnel, consistant dans la volonté de se comporter comme le véritable titulaire du droit. C'est cet élément qui distingue la possession de la <b>détention précaire</b> (locataire, dépositaire, emprunteur), où le détenteur reconnaît le droit d'autrui.</li>
        </ul>
        <p><b>Les qualités de la possession (art. 2261) :</b></p>
        <ul>
          <li>Pour produire ses effets (notamment la prescription acquisitive), la possession doit être <b>continue, paisible, publique et non équivoque</b>.</li>
          <li><b>Continue</b> : exercée sans interruption anormale, avec régularité.</li>
          <li><b>Paisible</b> : non entachée de violence (la violence initiale n'empêche pas la possession une fois qu'elle a cessé – art. 2263).</li>
          <li><b>Publique</b> : exercée de manière ostensible, sans dissimulation.</li>
          <li><b>Non équivoque</b> : les actes de possession ne doivent pas pouvoir s'expliquer autrement que par la volonté de se comporter en propriétaire.</li>
        </ul>
        <p><b>Les effets de la possession :</b></p>
        <ul>
          <li><b>Présomption de propriété</b> : le possesseur est présumé propriétaire et n'a pas à prouver son titre. La charge de la preuve pèse sur le revendiquant.</li>
          <li><b>En fait de meubles, la possession vaut titre</b> (art. 2276) : règle fondamentale selon laquelle le possesseur de bonne foi d'un meuble corporel en devient propriétaire instantanément, sans besoin de prescription. La mauvaise foi du possesseur fait tomber cette présomption.</li>
          <li><b>Protection possessoire</b> : avant la réforme de la procédure civile, les actions possessoires (complainte, dénonciation de nouvel oeuvre, réintégrande) protégeaient le possesseur. Depuis le décret du 12 décembre 2019, seul le <b>référé</b> assure la protection possessoire.</li>
        </ul>`
      },
      {
        title: "La prescription acquisitive (art. 2258 à 2275 C. civ.)",
        content: `<p>La <b>prescription acquisitive</b> (ou usucapion) est un mode d'acquisition de la propriété et des autres droits réels par l'effet de la possession prolongée pendant un certain temps (art. 2258 C. civ.). Elle se distingue de la prescription extinctive en ce qu'elle a un effet <b>acquisitif</b> et non simplement libératoire.</p>
        <p><b>La prescription trentenaire (art. 2272 al. 1) :</b></p>
        <ul>
          <li>Le délai de droit commun pour prescrire la propriété immobilière est de <b>30 ans</b>.</li>
          <li>Le possesseur n'a pas besoin de justifier d'un titre ni d'être de bonne foi ; il lui suffit de prouver une possession réunissant les qualités requises par l'article 2261 pendant 30 ans.</li>
          <li>La prescription acquisitive court même contre les incapables (sauf suspension).</li>
        </ul>
        <p><b>La prescription abrégée de 10 ans (art. 2272 al. 2) :</b></p>
        <ul>
          <li>Le délai est réduit à <b>10 ans</b> lorsque le possesseur justifie d'un <b>juste titre</b> et est de <b>bonne foi</b>.</li>
          <li><b>Le juste titre</b> : acte juridique qui aurait transféré la propriété s'il avait émané du véritable propriétaire (<i>a non domino</i>). Il doit être un acte translatif (vente, donation, échange), réel et valable en la forme. Le titre putatif (que le possesseur croit exister mais qui n'existe pas) ne constitue pas un juste titre.</li>
          <li><b>La bonne foi</b> : croyance du possesseur dans le droit de celui dont il tient la chose (art. 550 C. civ.). Elle s'apprécie au <b>jour de l'acquisition</b> (et non de manière continue). La bonne foi est présumée (art. 2274).</li>
        </ul>
        <p><b>La jonction des possessions (art. 2265) :</b></p>
        <ul>
          <li>Le possesseur actuel peut joindre à sa possession celle de son auteur (ayant cause à titre particulier ou universel) pour compléter le délai de prescription.</li>
          <li>La jonction ne peut se faire qu'entre possessions de <b>même nature</b> : un possesseur de bonne foi avec juste titre peut joindre la possession de son auteur si celle-ci réunissait les mêmes qualités.</li>
        </ul>
        <h4>Effets de la prescription acquisitive</h4>
        <p>La prescription acquisitive produit un effet <b>rétroactif</b> : le possesseur est réputé propriétaire depuis le jour de l'entrée en possession (et non depuis l'expiration du délai). Cet effet rétroactif consolide tous les actes accomplis par le possesseur pendant la période de prescription. La prescription acquisitive doit être <b>invoquée</b> par le possesseur ; le juge ne peut pas la soulever d'office (art. 2247). Elle peut être invoquée en défense (contre une action en revendication) ou par voie d'action (action déclaratoire de propriété).</p>`
      }
    ]
  },
  'civil-prescription': {
    introduction: "La prescription civile, profondément réformée par la loi n° 2008-561 du 17 juin 2008, constitue un mécanisme essentiel de sécurité juridique. Elle comprend la prescription extinctive (art. 2219 et s. C. civ.), qui éteint un droit par l'inaction de son titulaire, et la prescription acquisitive (art. 2258 et s.), qui permet d'acquérir la propriété par la possession prolongée. La maîtrise des délais, de leur point de départ, des causes de suspension et d'interruption est indispensable pour le CRFPA.",
    readTime: 20,
    sections: [
      {
        title: "Le délai de prescription de droit commun de 5 ans",
        content: `<p>La <b>loi n° 2008-561 du 17 juin 2008</b> a opéré une réforme majeure en réduisant le délai de prescription extinctive de droit commun de <b>30 ans à 5 ans</b> (art. 2224 C. civ.). Cette réduction considérable traduit la volonté du législateur de favoriser la sécurité juridique et de contraindre les créanciers à la diligence.</p>
        <p><b>Le champ d'application de l'article 2224 :</b></p>
        <ul>
          <li>« Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer. »</li>
          <li>Ce délai s'applique aux actions en <b>responsabilité contractuelle</b> (sauf délais spéciaux), aux actions en <b>responsabilité extracontractuelle</b>, aux actions en <b>recouvrement de créances</b>, aux actions en <b>nullité</b> (relative : 5 ans à compter de la découverte du vice, art. 1144 ; absolue : 5 ans à compter du contrat, art. 2224).</li>
          <li>Le délai de 5 ans constitue un <b>délai butoir</b> supplétif pour les actions dont le point de départ est reporté.</li>
        </ul>
        <p><b>Le délai butoir de 20 ans (art. 2232) :</b></p>
        <ul>
          <li>Le report du point de départ, la suspension ou l'interruption de la prescription ne peuvent avoir pour effet de porter le délai total de prescription au-delà de <b>20 ans</b> à compter du jour de la naissance du droit (sauf exceptions : actions en matière d'état des personnes, actions fondées sur la torture, le terrorisme, les crimes contre l'humanité).</li>
          <li>Ce délai butoir constitue une innovation majeure de la réforme de 2008, limitant les incertitudes nées du report indéfini du point de départ.</li>
        </ul>
        <p><b>Articulation avec les autres branches du droit :</b></p>
        <ul>
          <li>En droit commercial, la prescription de droit commun est de 5 ans (art. L. 110-4 C. com., aligné par la réforme de 2008).</li>
          <li>En droit du travail, le délai de prescription des actions en paiement des salaires est de 3 ans (art. L. 3245-1 C. trav.) ; les actions relatives à l'exécution ou la rupture du contrat se prescrivent par 2 ans (art. L. 1471-1 al. 1).</li>
          <li>En droit de la consommation, l'action des professionnels pour les biens ou services fournis aux consommateurs se prescrit par 2 ans (art. L. 218-2 C. conso.).</li>
        </ul>`
      },
      {
        title: "Les délais spéciaux de prescription",
        content: `<p>Au-delà du délai de droit commun de 5 ans, de nombreux <b>délais spéciaux</b> de prescription sont prévus par le Code civil et les lois particulières. Leur connaissance est essentielle pour le CRFPA.</p>
        <p><b>Les délais de prescription plus courts :</b></p>
        <ul>
          <li><b>2 ans</b> : action des professionnels contre les consommateurs (art. L. 218-2 C. conso.) ; action en garantie des vices cachés à compter de la découverte du vice (art. 1648 al. 1 C. civ.) ; actions en responsabilité des constructeurs pour dommages non couverts par la garantie décennale (art. 1792-4-3 C. civ.).</li>
          <li><b>1 an</b> : action en rescision pour lésion en matière de vente d'immeuble (art. 1676 C. civ.) ; certaines actions en matière de transport.</li>
          <li><b>6 mois</b> : action en garantie de conformité dans le cadre de la vente mobilière (ancien régime, étendu à 2 ans par la directive européenne transposée).</li>
        </ul>
        <p><b>Les délais de prescription plus longs :</b></p>
        <ul>
          <li><b>10 ans</b> : action en responsabilité pour dommage corporel (art. 2226 al. 1 C. civ.) à compter de la date de consolidation du dommage ; action en responsabilité décennale des constructeurs (art. 1792 et 2270 C. civ.).</li>
          <li><b>20 ans</b> : action en responsabilité pour dommage causé par des tortures ou des actes de barbarie, ou des violences ou agressions sexuelles commises contre un mineur (art. 2226 al. 2 C. civ.).</li>
          <li><b>30 ans</b> : prescription acquisitive de droit commun pour les immeubles (art. 2272 al. 1 C. civ.) ; actions réelles immobilières (art. 2227 : « Le droit de propriété est imprescriptible »).</li>
        </ul>
        <p><b>Les délais préfix et les forclusions :</b></p>
        <ul>
          <li>Les <b>délais de forclusion</b> (ou délais préfix) ne sont pas des délais de prescription : ils ne sont pas susceptibles de suspension ni d'interruption (sauf exceptions légales). La forclusion éteint le droit d'agir lui-même et non seulement l'action.</li>
          <li>Exemples : délai de 2 mois pour contester un licenciement (art. R. 1452-1 C. trav.), délai de 5 ans de la garantie légale de conformité (art. L. 217-3 C. conso.).</li>
          <li>La qualification de délai de prescription ou de forclusion n'est pas toujours aisée et relève de l'interprétation jurisprudentielle (Cass. 2e civ., 21 décembre 2006).</li>
        </ul>`
      },
      {
        title: "Le point de départ de la prescription",
        content: `<p>La détermination du <b>point de départ</b> de la prescription est un enjeu contentieux majeur, la réforme de 2008 ayant consacré un système fondé sur la <b>connaissance des faits</b> plutôt que sur la naissance objective du droit.</p>
        <p><b>Le principe : la connaissance des faits (art. 2224) :</b></p>
        <ul>
          <li>La prescription court « à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer ». Ce critère subjectif consacre l'adage <i>actio non nata non praescribitur</i>.</li>
          <li>L'appréciation de la connaissance relève du pouvoir souverain des juges du fond, sous le contrôle de la Cour de cassation qui vérifie que les juges ont recherché le moment où le titulaire du droit a effectivement eu connaissance des faits.</li>
          <li>Le « titulaire d'un droit » est celui qui peut agir : le mineur ou le majeur protégé doit avoir connaissance par l'intermédiaire de son représentant légal.</li>
        </ul>
        <p><b>Les points de départ spéciaux :</b></p>
        <ul>
          <li><b>Actions en nullité relative</b> (art. 1144) : le délai court du jour où le vice du consentement a été découvert (erreur, dol) ou du jour où la violence a cessé.</li>
          <li><b>Actions en responsabilité pour dommage corporel</b> (art. 2226) : le délai court à compter de la date de <b>consolidation</b> du dommage initial ou aggravé.</li>
          <li><b>Action en garantie des vices cachés</b> (art. 1648) : le délai court à compter de la <b>découverte du vice</b>. La Cour de cassation a précisé que ce délai de 2 ans doit s'inscrire dans le délai de 5 ans de l'article 2224 (Cass. 3e civ., 8 décembre 2021).</li>
          <li><b>Actions en matière d'assurance</b> (art. L. 114-1 C. assur.) : le délai de 2 ans court de l'événement qui y donne naissance.</li>
        </ul>
        <h4>Le point de départ glissant</h4>
        <p>En matière d'<b>obligations à exécution successive</b>, la prescription court à compter de chaque échéance impayée (et non à compter de la première). Ainsi, pour un contrat de bail, chaque loyer impayé fait courir un délai de prescription distinct. La Cour de cassation applique cette solution de manière constante (Cass. 1re civ., 10 juillet 2014). En matière de crédit, la déchéance du terme rend exigible l'intégralité de la dette et fait courir un délai unique de prescription (Cass. 1re civ., 11 février 2016).</p>`
      },
      {
        title: "La suspension et l'interruption de la prescription",
        content: `<p>La <b>suspension</b> et l'<b>interruption</b> constituent les deux mécanismes affectant le cours de la prescription. Leurs effets sont fondamentalement différents et leur distinction est essentielle pour le praticien.</p>
        <p><b>La suspension (art. 2230 à 2239) :</b></p>
        <ul>
          <li>La suspension <b>arrête temporairement le cours de la prescription</b> sans effacer le délai déjà couru. À la cessation de la cause de suspension, le délai reprend là où il s'était arrêté (art. 2230).</li>
          <li><b>Causes légales de suspension :</b>
            <ul>
              <li>Impossibilité d'agir résultant de la loi, de la convention ou de la force majeure (art. 2234) – application de l'adage <i>contra non valentem agere non currit praescriptio</i>.</li>
              <li>Minorité ou protection juridique du titulaire du droit (art. 2235).</li>
              <li>Qualité d'époux ou de partenaire pacsé entre les parties (art. 2236).</li>
              <li>Qualité d'héritier de l'un des coobligés (art. 2237).</li>
            </ul>
          </li>
          <li><b>Causes conventionnelles de suspension :</b>
            <ul>
              <li>Négociation entre les parties en vue d'un règlement amiable : la prescription est suspendue à compter du jour où une partie invite l'autre à participer à une négociation et recommence à courir à compter de la rupture des négociations (art. 2238).</li>
              <li>Demande de mesure d'instruction avant tout procès (art. 2239) : la prescription est suspendue jusqu'à l'issue de la mesure, innovation majeure de la réforme consacrant la jurisprudence.</li>
              <li>La médiation et la conciliation suspendent la prescription (art. 2238 al. 2).</li>
            </ul>
          </li>
        </ul>
        <p><b>L'interruption (art. 2240 à 2246) :</b></p>
        <ul>
          <li>L'interruption <b>efface le délai écoulé</b> et fait courir un <b>nouveau délai de même durée</b> (art. 2231).</li>
          <li><b>Causes d'interruption :</b> la reconnaissance par le débiteur du droit de son créancier (art. 2240), la demande en justice même en référé (art. 2241), un acte d'exécution forcée (art. 2244), une mesure conservatoire prise en application du CPCE.</li>
          <li>La demande en justice interrompt la prescription même si elle est portée devant une juridiction incompétente (art. 2241 al. 2), innovation de la réforme de 2008.</li>
        </ul>`
      },
      {
        title: "Les aménagements conventionnels de la prescription",
        content: `<p>La <b>loi du 17 juin 2008</b> a ouvert la possibilité pour les parties d'<b>aménager conventionnellement</b> les règles de la prescription, dans des limites fixées par l'article 2254 du Code civil. Cette liberté contractuelle constitue une innovation majeure du droit français.</p>
        <p><b>Les aménagements autorisés (art. 2254) :</b></p>
        <ul>
          <li>Les parties peuvent <b>allonger</b> le délai de prescription dans la limite de <b>10 ans</b> maximum.</li>
          <li>Les parties peuvent <b>réduire</b> le délai de prescription dans la limite de <b>1 an</b> minimum.</li>
          <li>Les parties peuvent convenir d'<b>ajouter des causes de suspension ou d'interruption</b> non prévues par la loi.</li>
          <li>Ces aménagements doivent résulter d'un <b>accord exprès</b> des parties et ne peuvent être insérés dans des conditions générales sans avoir été spécifiquement acceptés.</li>
        </ul>
        <p><b>Les limites aux aménagements :</b></p>
        <ul>
          <li><b>Actions en paiement ou en répétition de salaires</b> : aucun aménagement conventionnel n'est possible pour les créances salariales dont la prescription est d'ordre public (art. L. 3245-1 C. trav.).</li>
          <li><b>Droit de la consommation</b> : les clauses abrégeant la prescription en matière de contrats de consommation sont présumées abusives et peuvent être écartées (art. R. 212-2, 10° C. conso., devenu L. 241-1).</li>
          <li><b>Droit des assurances</b> : la prescription biennale de l'article L. 114-1 du Code des assurances ne peut être aménagée par les parties (art. L. 114-3).</li>
          <li><b>Contrats d'adhésion</b> : les clauses relatives à la prescription dans les contrats d'adhésion sont soumises au contrôle des <b>clauses abusives</b> de l'article 1171 du Code civil (créant un déséquilibre significatif entre les droits et obligations des parties).</li>
        </ul>
        <h4>La renonciation à la prescription</h4>
        <p>L'article 2250 du Code civil interdit la <b>renonciation par avance</b> à la prescription. En revanche, une fois la prescription acquise, le débiteur peut y renoncer (art. 2250 al. 2). La renonciation peut être expresse ou tacite (notamment par un paiement partiel ou une reconnaissance de dette après l'expiration du délai). La renonciation à la prescription acquise ne vaut que pour le renonçant et ne peut nuire aux codébiteurs solidaires ni aux cautions (art. 2251).</p>
        <p><b>Le régime procédural :</b></p>
        <ul>
          <li>La prescription ne peut être <b>relevée d'office</b> par le juge (art. 2247). Elle doit être invoquée par le débiteur, en première instance ou en appel, mais pas pour la première fois en cassation.</li>
          <li>Elle peut être opposée en tout état de la cause, même après une défense au fond (art. 2248), ce qui constitue une dérogation à l'article 74 du CPC qui exige que les fins de non-recevoir soient soulevées avant toute défense au fond.</li>
        </ul>`
      }
    ]
  }
};
