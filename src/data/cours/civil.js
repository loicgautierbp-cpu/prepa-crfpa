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
  }
};
