export const COURS_PENAL = {
  'penal-infraction': {
    introduction: "L'infraction est un comportement interdit par la loi pénale et sanctionné par une peine. Sa caractérisation repose sur la réunion de trois éléments constitutifs : l'élément légal, l'élément matériel et l'élément moral (ou intentionnel). L'absence de l'un de ces éléments fait obstacle à la qualification pénale.",
    readTime: 25,
    sections: [
      {
        title: "L'élément légal : le principe de légalité criminelle",
        content: `<p>Le principe de légalité des délits et des peines (<i>nullum crimen, nulla poena sine lege</i>) est le fondement du droit pénal moderne. Il est consacré par l'<b>article 111-3 du Code pénal</b> et garanti par la <b>DDHC</b> (art. 8), la <b>CEDH</b> (art. 7) et le <b>PIDCP</b> (art. 15).</p>
        <p><b>Contenu du principe :</b></p>
        <ul>
          <li><b>Légalité des incriminations</b> : seule la loi (au sens large, incluant les règlements pour les contraventions – art. 111-2 C. pén.) peut créer des infractions. En matière de crimes et délits, la compétence est exclusivement législative (art. 34 C. 1958).</li>
          <li><b>Légalité des peines</b> : la nature et le quantum des peines sont fixés par le texte d'incrimination. Le juge ne peut prononcer que les peines prévues par la loi.</li>
        </ul>
        <p><b>Corollaires du principe de légalité :</b></p>
        <ul>
          <li><b>Interprétation stricte de la loi pénale</b> (art. 111-4 C. pén.) : le juge ne peut pas étendre le champ d'application d'un texte par analogie. Toutefois, l'interprétation téléologique (selon le but de la loi) est admise, de même que l'interprétation évolutive dans certaines limites (Cass. crim., 14 juin 1990, sur l'escroquerie par manipulation informatique).</li>
          <li><b>Non-rétroactivité de la loi pénale plus sévère</b> (art. 112-1 al. 1 C. pén.) : une loi nouvelle plus sévère ne s'applique pas aux faits commis avant son entrée en vigueur.</li>
          <li><b>Rétroactivité de la loi pénale plus douce</b> (<i>rétroactivité in mitius</i>, art. 112-1 al. 3) : une loi nouvelle plus douce s'applique aux infractions commises avant son entrée en vigueur et non encore définitivement jugées. Principe reconnu par le Conseil constitutionnel (CC, 19-20 janvier 1981) et par la CEDH (<i>Scoppola c/ Italie n°2</i>, 2009).</li>
          <li><b>Application immédiate des lois de procédure et d'exécution des peines</b> (art. 112-2 C. pén.) : elles s'appliquent immédiatement aux procédures en cours, sauf si elles ont pour effet de rendre plus sévères les peines prononcées.</li>
        </ul>
        <p><b>La classification tripartite des infractions :</b></p>
        <ul>
          <li><b>Crimes</b> : infractions les plus graves, punies de réclusion ou détention criminelle (15 ans, 20 ans, 30 ans, perpétuité). Jugés par la cour d'assises (ou cour criminelle départementale depuis la loi du 22 décembre 2021 pour la généralisation).</li>
          <li><b>Délits</b> : infractions de gravité moyenne, punis d'emprisonnement (≤ 10 ans) et/ou d'amende (≥ 3 750 €). Jugés par le tribunal correctionnel.</li>
          <li><b>Contraventions</b> : infractions les moins graves, punies d'amende (≤ 1 500 €, 3 000 € en récidive). Créées par voie réglementaire. Jugées par le tribunal de police.</li>
        </ul>`
      },
      {
        title: "L'élément matériel de l'infraction",
        content: `<p>L'élément matériel est le <b>comportement</b> (acte ou omission) incriminé par la loi pénale. Il se décompose en un <b>acte</b> (ou comportement), un <b>résultat</b> (pour les infractions matérielles) et un <b>lien de causalité</b>.</p>
        <p><b>Le comportement :</b></p>
        <ul>
          <li><b>Infraction de commission</b> : suppose un acte positif (ex. : meurtre, vol, escroquerie). C'est le cas le plus fréquent.</li>
          <li><b>Infraction d'omission</b> : suppose une abstention. Exemples : non-assistance à personne en péril (art. 223-6 C. pén.), omission de porter secours, non-dénonciation de crime (art. 434-1). La <b>commission par omission</b> (commettre une infraction de résultat par abstention) n'est pas admise en droit français en vertu de l'interprétation stricte (Cass. crim., 29 septembre 2009 : refus de qualifier l'homicide involontaire par abstention pure).</li>
        </ul>
        <p><b>Le résultat :</b></p>
        <ul>
          <li><b>Infractions matérielles (de résultat)</b> : la consommation suppose la réalisation d'un résultat dommageable (meurtre = mort de la victime ; vol = soustraction de la chose).</li>
          <li><b>Infractions formelles</b> : consommées par le seul accomplissement de l'acte, indépendamment du résultat (empoisonnement = administration de substances mortifères, peu importe que la victime survive – art. 221-5 C. pén. ; mise en danger de la vie d'autrui – art. 223-1).</li>
          <li><b>Infractions-obstacles</b> : incriminent un comportement dangereux en amont d'un dommage (conduite en état d'ivresse, association de malfaiteurs).</li>
        </ul>
        <p><b>La tentative (art. 121-4 et 121-5 C. pén.) :</b></p>
        <ul>
          <li>La tentative est punissable lorsqu'elle est constituée par un <b>commencement d'exécution</b> et qu'elle n'a été suspendue ou n'a manqué son effet qu'en raison de <b>circonstances indépendantes de la volonté de son auteur</b>.</li>
          <li><b>Commencement d'exécution</b> : acte tendant directement et immédiatement à la consommation de l'infraction avec l'intention de la commettre (Cass. crim., 25 octobre 1962, <i>Lacour</i>). Distinction avec les actes préparatoires (impunis, sauf incrimination spéciale).</li>
          <li><b>Désistement involontaire</b> : si l'auteur renonce volontairement, la tentative n'est pas constituée (désistement volontaire = impunité). En revanche, le repentir actif (après la consommation) est sans effet sur la qualification.</li>
          <li><b>Infraction impossible</b> : la tentative est punissable même si l'infraction était impossible (Cass. crim., 16 janvier 1986, tentative de meurtre sur un cadavre), dès lors que le commencement d'exécution et l'intention sont établis.</li>
          <li>La tentative est <b>toujours punissable</b> en matière de crime (art. 121-4). En matière de délit, elle n'est punissable que si un texte le prévoit expressément. Elle n'est <b>jamais punissable</b> en matière de contravention.</li>
        </ul>`
      },
      {
        title: "L'élément moral : l'intention et la faute pénale",
        content: `<p>L'élément moral (ou élément psychologique) est la <b>composante subjective</b> de l'infraction. L'article 121-3 du Code pénal distingue les infractions intentionnelles et les infractions non intentionnelles.</p>
        <p><b>L'intention (dol) :</b></p>
        <ul>
          <li><b>Principe</b> (art. 121-3 al. 1er) : « Il n'y a point de crime ou de délit sans intention de le commettre. » L'intention est la règle en matière de crimes et délits.</li>
          <li><b>Dol général</b> : conscience et volonté d'accomplir un acte que l'on sait interdit par la loi pénale. Deux composantes : la <b>connaissance</b> (savoir que l'acte est interdit) et la <b>volonté</b> (vouloir accomplir l'acte).</li>
          <li><b>Dol spécial</b> : intention de parvenir à un résultat déterminé. Exigé pour certaines infractions (meurtre = intention de donner la mort ; vol = intention de soustraire frauduleusement la chose d'autrui).</li>
          <li><b>Dol aggravé (préméditation)</b> : dessein formé avant l'action (art. 132-72 C. pén.). Transforme le meurtre en assassinat (art. 221-3).</li>
          <li><b>Dol indéterminé</b> : l'auteur a voulu causer un dommage sans en connaître l'ampleur exacte (violences volontaires : l'auteur est puni selon le résultat effectivement causé).</li>
          <li><b>Dol éventuel</b> : l'auteur a conscience du risque mais accepte de le prendre. En droit français, le dol éventuel ne suffit pas à caractériser l'intention (à la différence d'autres droits). Toutefois, la mise en danger délibérée de la vie d'autrui (art. 223-1) sanctionne un comportement proche.</li>
        </ul>
        <p><b>La faute pénale non intentionnelle (art. 121-3 al. 3 et 4) :</b></p>
        <ul>
          <li><b>Faute d'imprudence simple</b> (art. 121-3 al. 3) : maladresse, imprudence, inattention, négligence ou manquement à une obligation de prudence ou de sécurité prévue par la loi ou le règlement. Applicable en cas de <b>causalité directe</b> entre la faute et le dommage.</li>
          <li><b>Faute qualifiée</b> (art. 121-3 al. 4, issu de la loi Fauchon du 10 juillet 2000) : en cas de <b>causalité indirecte</b> (l'auteur n'a pas directement causé le dommage mais a créé ou contribué à créer la situation dommageable, ou n'a pas pris les mesures nécessaires), la responsabilité pénale n'est engagée que s'il est prouvé une :
            <ul>
              <li><b>Violation manifestement délibérée</b> d'une obligation particulière de prudence ou de sécurité imposée par la loi ou le règlement, OU</li>
              <li><b>Faute caractérisée</b> qui exposait autrui à un risque d'une particulière gravité que l'auteur ne pouvait ignorer.</li>
            </ul>
          </li>
          <li>Cette distinction (loi Fauchon) vise à éviter la mise en cause systématique des décideurs publics et privés pour des infractions non intentionnelles.</li>
        </ul>
        <p><b>La faute contraventionnelle :</b></p>
        <p>En matière de contravention, la faute est présumée dès la constatation du fait matériel. La bonne foi et l'absence d'intention sont indifférentes (sauf force majeure ou erreur invincible). C'est une responsabilité quasi objective.</p>`
      },
      {
        title: "L'auteur et le complice",
        content: `<p><b>L'auteur de l'infraction :</b></p>
        <ul>
          <li><b>Auteur matériel</b> (art. 121-4) : personne qui commet les faits incriminés ou tente de les commettre dans les conditions prévues par la loi.</li>
          <li><b>Coauteur</b> : personne qui participe directement à la commission de l'infraction en réalisant tout ou partie des éléments constitutifs.</li>
          <li><b>Auteur moral (ou intellectuel)</b> : personne qui fait commettre l'infraction par autrui sans y participer matériellement. Puni comme complice par provocation (art. 121-7).</li>
        </ul>
        <p><b>La responsabilité pénale des personnes morales (art. 121-2 C. pén.) :</b></p>
        <ul>
          <li>Depuis la loi Perben II du 9 mars 2004, les personnes morales sont responsables pénalement de <b>toutes les infractions</b> (suppression du principe de spécialité), à l'exception de l'État.</li>
          <li><b>Conditions</b> : l'infraction doit avoir été commise pour le <b>compte</b> de la personne morale, par ses <b>organes ou représentants</b>.</li>
          <li>La responsabilité de la personne morale <b>n'exclut pas</b> celle des personnes physiques auteurs ou complices des mêmes faits (cumul possible – art. 121-2 al. 3).</li>
          <li>Les peines applicables sont adaptées (amende quintuplée, dissolution, interdiction d'activité, placement sous surveillance judiciaire, etc. – art. 131-37 et s.).</li>
        </ul>
        <p><b>La complicité (art. 121-6 et 121-7 C. pén.) :</b></p>
        <ul>
          <li><b>Conditions</b> :
            <ul>
              <li>Un <b>fait principal punissable</b> : le complice n'est punissable que si l'infraction principale est au moins tentée ou consommée. L'acte principal doit être qualifiable pénalement (mais l'auteur principal n'a pas besoin d'être effectivement poursuivi ou condamné).</li>
              <li>Un <b>acte de complicité</b> (art. 121-7) : aide ou assistance (fourniture de moyens), provocation (par don, promesse, menace, ordre, abus d'autorité), ou instructions données pour commettre l'infraction.</li>
              <li>Un <b>élément intentionnel</b> : la complicité suppose toujours l'intention, même pour une infraction non intentionnelle. Le complice doit avoir eu connaissance du projet criminel et y avoir participé volontairement.</li>
            </ul>
          </li>
          <li><b>Pénalité</b> : le complice est puni « comme auteur » de l'infraction (art. 121-6). Il encourt les mêmes peines que l'auteur principal, mais le juge individualise la peine. Les circonstances aggravantes personnelles à l'auteur ne s'étendent pas au complice (et inversement).</li>
        </ul>`
      },
      {
        title: "Les faits justificatifs",
        content: `<p>Les <b>faits justificatifs</b> (art. 122-4 à 122-7 C. pén.) sont des circonstances qui suppriment le caractère infractionnel du comportement. Ils effacent l'élément d'injuste de l'acte, à la différence des causes de non-imputabilité qui agissent sur l'élément moral.</p>
        <p><b>L'ordre ou l'autorisation de la loi et le commandement de l'autorité légitime (art. 122-4) :</b></p>
        <ul>
          <li><b>Premier alinéa</b> : n'est pas pénalement responsable la personne qui accomplit un acte prescrit ou autorisé par des dispositions législatives ou réglementaires (ex. : usage de la force par les forces de l'ordre dans le cadre légal, exercice du droit de correction des parents dans les limites admises – en déclin).</li>
          <li><b>Second alinéa</b> : n'est pas pénalement responsable la personne qui accomplit un acte commandé par l'autorité légitime, <b>sauf si cet acte est manifestement illégal</b> (théorie des « baïonnettes intelligentes »).</li>
        </ul>
        <p><b>La légitime défense (art. 122-5 et 122-6) :</b></p>
        <ul>
          <li><b>Légitime défense des personnes</b> (art. 122-5 al. 1er) : est justifié l'acte accompli en état de légitime défense devant une atteinte <b>injustifiée, actuelle ou imminente</b> envers soi-même ou autrui, à condition que la riposte soit <b>simultanée, nécessaire et proportionnée</b> à la gravité de l'atteinte.</li>
          <li><b>Légitime défense des biens</b> (art. 122-5 al. 2) : conditions plus restrictives : l'atteinte doit être un crime ou un délit, la riposte doit être <b>strictement nécessaire</b> au but poursuivi (et l'homicide volontaire ne peut jamais être justifié par la défense des biens).</li>
          <li><b>Présomptions de légitime défense</b> (art. 122-6) : sont présumés agir en légitime défense celui qui repousse de nuit une entrée par effraction dans un lieu habité, et celui qui se défend contre des actes de vol ou de pillage commis avec violence. Présomptions simples, pouvant être renversées par la preuve contraire.</li>
        </ul>
        <p><b>L'état de nécessité (art. 122-7) :</b></p>
        <ul>
          <li>N'est pas pénalement responsable la personne qui, face à un <b>danger actuel ou imminent</b> qui menace elle-même, autrui ou un bien, accomplit un acte nécessaire à la sauvegarde de la personne ou du bien, sauf s'il y a <b>disproportion</b> entre les moyens employés et la gravité de la menace.</li>
          <li>Le danger doit être réel, actuel et ne pas résulter de la faute de l'agent.</li>
          <li>Jurisprudence classique : le vol de nourriture par nécessité alimentaire (Trib. corr. Colmar, 27 avril 1956, affaire <i>Ménard</i>).</li>
          <li>Distinction avec la contrainte (art. 122-2) : l'état de nécessité laisse un choix à l'agent, la contrainte supprime toute liberté d'action.</li>
        </ul>
        <p><b>Le consentement de la victime :</b></p>
        <p>En principe, le consentement de la victime n'est <b>pas</b> un fait justificatif en droit pénal français (l'ordre public s'oppose à ce que la victime autorise l'atteinte à son intégrité). Exceptions ponctuelles : activités sportives (dans le respect des règles du jeu), pratiques médicales (consentement éclairé), etc.</p>`
      }
    ]
  },
  'penal-irresponsabilite': {
    introduction: "Les causes d'irresponsabilité pénale sont des circonstances qui, bien que l'infraction soit matériellement constituée, font obstacle à la condamnation de l'auteur. Le Code pénal distingue les causes objectives (faits justificatifs, qui suppriment l'infraction) et les causes subjectives (causes de non-imputabilité, qui suppriment la responsabilité de l'auteur). Cette fiche se concentre sur les causes de non-imputabilité.",
    readTime: 20,
    sections: [
      {
        title: "Le trouble mental (art. 122-1 C. pén.)",
        content: `<p>L'article 122-1 du Code pénal distingue deux situations selon l'intensité du trouble mental.</p>
        <p><b>L'abolition du discernement (art. 122-1 al. 1er) :</b></p>
        <ul>
          <li>« N'est pas pénalement responsable la personne qui était atteinte, au moment des faits, d'un trouble psychique ou neuropsychique ayant <b>aboli</b> son discernement ou le contrôle de ses actes. »</li>
          <li>L'abolition doit être <b>totale</b> au moment des faits. L'expertise psychiatrique est déterminante.</li>
          <li><b>Conséquence</b> : irresponsabilité pénale. Pas de déclaration de culpabilité. Mais possibilité de mesures de sûreté (hospitalisation d'office).</li>
          <li><b>Procédure</b> : depuis la loi du 25 février 2008, la chambre de l'instruction (ou le tribunal) rend une <b>décision d'irresponsabilité pénale pour cause de trouble mental</b> après audience publique et contradictoire. Cette décision peut être assortie de <b>mesures de sûreté</b> (hospitalisation sous contrainte, interdiction de paraître en certains lieux, interdiction d'entrer en contact avec la victime, etc.).</li>
          <li>La décision d'irresponsabilité est inscrite au casier judiciaire (bulletin n°1).</li>
        </ul>
        <p><b>L'altération du discernement (art. 122-1 al. 2) :</b></p>
        <ul>
          <li>« La personne qui était atteinte, au moment des faits, d'un trouble psychique ou neuropsychique ayant <b>altéré</b> son discernement ou entravé le contrôle de ses actes demeure punissable. »</li>
          <li>Le trouble n'a pas aboli le discernement mais l'a seulement diminué.</li>
          <li><b>Conséquence</b> : la personne reste pénalement responsable mais le trouble est pris en compte dans la détermination de la peine. Depuis la loi du 15 août 2014, la juridiction <b>doit</b> (et non plus « peut ») tenir compte de cette altération pour réduire la peine d'un tiers (ou 30 ans au lieu de la perpétuité). Toutefois, en matière criminelle, la cour d'assises peut décider de ne pas appliquer cette diminution par décision spéciale.</li>
        </ul>
        <p><b>La question de l'intoxication volontaire (loi du 24 janvier 2022) :</b></p>
        <p>Suite à l'affaire <i>Sarah Halimi</i> (Cass. crim., 14 avril 2021, qui avait confirmé l'irresponsabilité de l'auteur d'un homicide commis sous l'emprise de cannabis), la loi n°2022-52 du 24 janvier 2022 a créé de nouvelles infractions (art. 221-5-6, 222-18-4, 222-26-2 C. pén.) : le fait de consommer volontairement des substances psychoactives en ayant connaissance que cette consommation est susceptible de conduire à un état d'abolition du discernement, lorsque cette abolition conduit à la commission de violences ou d'un homicide, est puni de peines autonomes (10 ans d'emprisonnement en cas d'homicide).</p>`
      },
      {
        title: "La contrainte (art. 122-2 C. pén.)",
        content: `<p>« N'est pas pénalement responsable la personne qui a agi sous l'empire d'une force ou d'une <b>contrainte</b> à laquelle elle n'a pu résister. »</p>
        <p><b>La contrainte physique :</b></p>
        <ul>
          <li><b>Contrainte physique externe</b> : force extérieure irrésistible empêchant l'agent d'agir conformément à la loi (événement naturel, acte d'un tiers). Exemple : conducteur victime d'un malaise subit au volant (Cass. crim., 15 novembre 2005).</li>
          <li><b>Contrainte physique interne</b> : état physiologique irrésistible (maladie soudaine, perte de connaissance). Admise restrictivement : la maladie doit être imprévisible et irrésistible.</li>
          <li><b>Conditions</b> : la contrainte physique doit être <b>irrésistible</b> (impossible d'y résister) et <b>imprévisible</b> (impossible de la prévenir). Ces conditions sont proches de la force majeure en droit civil.</li>
        </ul>
        <p><b>La contrainte morale :</b></p>
        <ul>
          <li><b>Contrainte morale externe</b> : pression psychologique exercée par un tiers (menaces de mort, chantage) supprimant toute liberté de décision. Conditions très strictes : les menaces doivent être <b>irrésistibles</b> et <b>actuelles</b>. La simple crainte ou la difficulté de résister ne suffisent pas (Cass. crim., 11 mai 2006).</li>
          <li><b>Contrainte morale interne</b> : impulsions internes irrésistibles (passions, pulsions). <b>Rejetée</b> quasi systématiquement par la jurisprudence, car admettre les pulsions comme contrainte exonératoire reviendrait à nier le libre arbitre et la responsabilité pénale.</li>
        </ul>
        <p><b>Effets de la contrainte :</b></p>
        <ul>
          <li>L'infraction subsiste objectivement (fait justificatif absent), mais l'auteur est déclaré <b>irresponsable</b>.</li>
          <li>La responsabilité civile peut subsister : le déclaré irresponsable pénalement peut être tenu de réparer le dommage (art. 414-3 C. civ. pour le trouble mental ; principes généraux de la responsabilité civile).</li>
          <li>Les coauteurs et complices non soumis à la contrainte restent pénalement responsables.</li>
        </ul>`
      },
      {
        title: "L'erreur de droit (art. 122-3 C. pén.)",
        content: `<p>« N'est pas pénalement responsable la personne qui justifie avoir cru, par une <b>erreur sur le droit</b> qu'elle n'était pas en mesure d'éviter, pouvoir légitimement accomplir l'acte. »</p>
        <p><b>Principe :</b></p>
        <ul>
          <li>L'adage <i>nemo censetur ignorare legem</i> (nul n'est censé ignorer la loi) demeure le principe. L'erreur de droit est une cause d'irresponsabilité d'<b>application exceptionnelle</b>.</li>
          <li>L'erreur doit porter sur l'existence ou l'interprétation d'une règle de droit (et non sur les faits).</li>
        </ul>
        <p><b>Conditions très restrictives :</b></p>
        <ul>
          <li>L'erreur doit être <b>invincible</b> (inévitable) : le prévenu doit démontrer qu'il a accompli toutes les diligences normales pour connaître la règle de droit et qu'il lui était <b>impossible</b> de connaître l'interdiction.</li>
          <li>La jurisprudence admet très rarement l'erreur de droit. Exemples d'admission :
            <ul>
              <li>Information erronée émanant d'une <b>autorité administrative compétente</b> (Cass. crim., 24 novembre 1998 : renseignement erroné d'une préfecture).</li>
              <li>Texte particulièrement obscur ou récent, inaccessible au justiciable.</li>
            </ul>
          </li>
          <li>La jurisprudence refuse systématiquement l'erreur de droit lorsque le prévenu est un <b>professionnel</b> qui devait connaître la réglementation applicable à son activité (Cass. crim., 7 janvier 2004).</li>
          <li>Le simple fait de consulter un avocat ne suffit pas à établir l'erreur invincible si la consultation ne portait pas précisément sur l'acte litigieux.</li>
        </ul>
        <p><b>Distinction avec l'erreur de fait :</b></p>
        <p>L'erreur de fait (sur les circonstances matérielles) n'est pas visée par l'article 122-3 mais peut avoir une incidence sur l'élément moral de l'infraction : si elle exclut l'intention (erreur sur la matérialité des faits), elle empêche la qualification de l'infraction intentionnelle (mais une infraction non intentionnelle peut subsister).</p>`
      },
      {
        title: "La minorité (art. 122-8 C. pén.) et le Code de la justice pénale des mineurs",
        content: `<p>L'article 122-8 du Code pénal pose le principe : « Les mineurs capables de discernement sont pénalement responsables des crimes, délits et contraventions dont ils ont été reconnus coupables, dans des conditions fixées par une loi particulière qui détermine les mesures de protection, d'assistance, de surveillance et d'éducation dont ils peuvent faire l'objet. »</p>
        <p><b>Le Code de la justice pénale des mineurs (CJPM)</b>, entré en vigueur le 30 septembre 2021, remplace l'ordonnance du 2 février 1945 :</p>
        <p><b>Principes directeurs :</b></p>
        <ul>
          <li><b>Primauté de l'éducatif sur le répressif</b> (PFRLR reconnu par CC, 29 août 2002).</li>
          <li><b>Spécialisation de la justice des mineurs</b> : juridictions spéciales (juge des enfants, tribunal pour enfants, cour d'assises des mineurs – supprimée et remplacée par le tribunal pour enfants en formation élargie).</li>
          <li><b>Atténuation de la responsabilité pénale</b> en fonction de l'âge.</li>
        </ul>
        <p><b>Les seuils d'âge :</b></p>
        <ul>
          <li><b>Moins de 13 ans</b> : présomption simple d'absence de discernement (art. L. 11-1 CJPM). Si le discernement est retenu, seules des mesures éducatives sont possibles (aucune peine). Pas de garde à vue ni de détention provisoire.</li>
          <li><b>13 à 15 ans</b> : présomption de discernement. Mesures éducatives et peines possibles, mais avec des maxima réduits (la peine ne peut excéder la <b>moitié</b> de la peine encourue par un majeur). Détention provisoire possible en matière criminelle.</li>
          <li><b>16 à 17 ans</b> : même réduction de moitié, sauf si la juridiction décide, par décision spécialement motivée, d'écarter cette diminution en raison de la gravité des faits et de la personnalité du mineur (exclusion de l'atténuation – art. L. 121-7 CJPM).</li>
        </ul>
        <p><b>La procédure rénovée (CJPM) :</b></p>
        <ul>
          <li><b>Audience d'examen de la culpabilité</b> (dans un délai de 3 mois) : le tribunal pour enfants statue sur la culpabilité et prononce des mesures éducatives provisoires.</li>
          <li><b>Période de mise à l'épreuve éducative</b> (6 à 9 mois) : suivi éducatif, mesures de réparation.</li>
          <li><b>Audience de prononcé de la sanction</b> : au terme de la mise à l'épreuve, le tribunal prononce la mesure ou la peine définitive en tenant compte de l'évolution du mineur.</li>
        </ul>`
      },
      {
        title: "Les immunités et les causes d'exemption ou d'atténuation de peine",
        content: `<p>Outre les causes d'irresponsabilité stricto sensu, certains mécanismes aboutissent à l'impunité ou à l'atténuation de la peine.</p>
        <p><b>Les immunités :</b></p>
        <ul>
          <li><b>Immunité familiale en matière patrimoniale</b> (art. 311-12 C. pén.) : ne peut donner lieu à des poursuites pénales le vol commis entre époux, ascendants et descendants (ou leurs conjoints). La soustraction est pénalement inexistante. Ne s'applique pas aux violences.</li>
          <li><b>Immunité parlementaire</b> (art. 26 C. 1958) : les membres du Parlement bénéficient d'une <b>irresponsabilité</b> (immunité absolue) pour les opinions ou votes émis dans l'exercice de leurs fonctions, et d'une <b>inviolabilité</b> (immunité procédurale) empêchant les poursuites, l'arrestation ou la détention sans autorisation du Bureau de l'assemblée (sauf flagrant délit ou condamnation définitive).</li>
          <li><b>Immunité diplomatique</b> (Convention de Vienne de 1961) : les agents diplomatiques jouissent de l'immunité de juridiction pénale de l'État accréditaire.</li>
          <li><b>Immunité présidentielle</b> (art. 67 C. 1958) : le Président de la République ne peut être poursuivi pendant son mandat (responsabilité engageable à la fin du mandat).</li>
        </ul>
        <p><b>Les causes d'exemption de peine :</b></p>
        <ul>
          <li><b>Dispense de peine</b> (art. 132-59 C. pén.) : la juridiction peut dispenser de toute peine lorsque le reclassement du coupable est acquis, le dommage réparé et le trouble cessé.</li>
          <li><b>Exemptions spéciales</b> : le Code pénal prévoit des exemptions ou réductions de peine pour les auteurs qui dénoncent l'infraction aux autorités (<b>repentis</b> ou <b>collaborateurs de justice</b>). Exemples : art. 132-78 (principe général), art. 221-5-3 (empoisonnement), art. 222-43 (trafic de stupéfiants), art. 421-2-6 (terrorisme).</li>
        </ul>
        <p><b>Les causes d'atténuation de peine :</b></p>
        <ul>
          <li><b>Altération du discernement</b> (art. 122-1 al. 2) : réduction d'un tiers (voir supra).</li>
          <li><b>Minorité</b> : réduction de moitié (voir supra).</li>
          <li><b>Circonstances atténuantes</b> : le système des circonstances atténuantes a été supprimé par le nouveau Code pénal de 1994, remplacé par l'individualisation de la peine (art. 132-1 C. pén.) et la possibilité pour le juge de descendre en dessous du minimum (il n'y a plus de minimum pour les délits, sauf cas de récidive).</li>
        </ul>
        <p>La distinction entre ces différentes causes est essentielle car elle détermine les effets sur l'infraction, sur la responsabilité de l'auteur, sur celle des complices et coauteurs, et sur la réparation civile.</p>`
      }
    ]
  },
  'penal-peines': {
    introduction: "Les peines, sanctions prononcées par la juridiction pénale à l'encontre de l'auteur d'une infraction, obéissent à un régime complexe régi par les articles 130-1 et suivants du Code pénal et par le Code de procédure pénale pour leur exécution. Le principe de personnalisation des peines, la diversité des aménagements possibles et le régime de la récidive constituent des enjeux majeurs du droit pénal pour le CRFPA.",
    readTime: 20,
    sections: [
      {
        title: "La classification des peines",
        content: `<p>Le Code pénal distingue plusieurs catégories de peines selon la nature de l'infraction et la gravité de la sanction. La <b>loi n° 2014-896 du 15 août 2014</b> relative à l'individualisation des peines a profondément remodelé ce paysage.</p>
        <p><b>Les peines criminelles (art. 131-1 et s. C. pén.) :</b></p>
        <ul>
          <li><b>Réclusion criminelle</b> (infractions de droit commun) ou <b>détention criminelle</b> (infractions politiques) : à temps (de 10 à 30 ans) ou à perpétuité.</li>
          <li>La <b>période de sûreté</b> (art. 132-23) : période pendant laquelle le condamné ne peut bénéficier d'aucun aménagement de peine (semi-liberté, placement extérieur, permissions de sortir, libération conditionnelle). Elle est obligatoire pour les peines de réclusion criminelle supérieures ou égales à 10 ans.</li>
        </ul>
        <p><b>Les peines correctionnelles (art. 131-3 et s. C. pén.) :</b></p>
        <ul>
          <li><b>L'emprisonnement</b> : de 2 mois à 10 ans (art. 131-4). Depuis la loi du 23 mars 2019, les peines d'emprisonnement inférieures ou égales à <b>1 mois</b> ne peuvent être prononcées (art. 132-19 al. 3).</li>
          <li><b>L'amende</b> (art. 131-3, 2°).</li>
          <li><b>Le jour-amende</b> (art. 131-5) : le condamné verse au Trésor public une somme dont le montant est fixé par le juge (maximum 1 000 euros par jour) pendant un nombre de jours déterminé (maximum 360 jours). Le non-paiement entraîne l'emprisonnement.</li>
          <li><b>Le travail d'intérêt général (TIG)</b> (art. 131-8) : travail non rémunéré au profit d'une collectivité publique ou d'une association habilitée (20 à 400 heures).</li>
          <li><b>Les peines privatives ou restrictives de droits</b> (art. 131-6) : suspension du permis de conduire, interdiction de séjour, confiscation, interdiction d'exercer une activité professionnelle.</li>
          <li><b>Le stage</b> (art. 131-5-1) : stage de citoyenneté, de sensibilisation à la sécurité routière, de responsabilité parentale, ou de sensibilisation aux dangers de l'usage de produits stupéfiants.</li>
        </ul>
        <p><b>Les peines contraventionnelles (art. 131-12 et s.) :</b></p>
        <p>Principalement l'amende (jusqu'à 1 500 euros pour les contraventions de 5e classe, 3 000 euros en récidive) et les peines complémentaires ou alternatives (suspension du permis, TIG, confiscation).</p>`
      },
      {
        title: "Le principe de personnalisation des peines",
        content: `<p>Le <b>principe de personnalisation des peines</b>, consacré par l'article 132-1 du Code pénal et érigé en principe constitutionnel (CC, 22 juillet 2005, n° 2005-520 DC), impose au juge d'adapter la sanction à la personnalité de l'auteur et aux circonstances de l'infraction.</p>
        <p><b>Les fonctions de la peine (art. 130-1 C. pén.) :</b></p>
        <ul>
          <li>La peine a pour fonctions de <b>sanctionner l'auteur</b> de l'infraction et de <b>favoriser son amendement, son insertion ou sa réinsertion</b>. Cette double finalité (rétributive et utilitaire) guide le juge dans le choix de la peine.</li>
          <li>Le juge doit motiver sa décision au regard des circonstances de l'infraction, de la personnalité et de la situation de l'auteur, en tenant compte de ses intérêts et de ceux de la victime.</li>
        </ul>
        <p><b>Les modalités de personnalisation :</b></p>
        <ul>
          <li><b>Le choix de la peine</b> : le juge n'est pas tenu de prononcer la peine maximale prévue par le texte d'incrimination. Il peut prononcer une peine inférieure au maximum légal, une peine d'une nature différente (alternative), ou dispenser de peine (art. 132-59).</li>
          <li><b>La dispense de peine</b> (art. 132-59) : lorsque le reclassement de l'auteur est acquis, que le dommage est réparé et que le trouble causé a cessé. Le tribunal déclare la culpabilité mais ne prononce aucune peine.</li>
          <li><b>L'ajournement du prononcé de la peine</b> (art. 132-60 et s.) : le tribunal déclare la culpabilité mais reporte le prononcé de la peine, éventuellement sous condition (obligation de réparation, de soins, de formation). L'ajournement avec mise à l'épreuve est prévu à l'article 132-63.</li>
        </ul>
        <p><b>La motivation spéciale de l'emprisonnement ferme (art. 132-19) :</b></p>
        <ul>
          <li>En matière correctionnelle, une peine d'emprisonnement ferme ne peut être prononcée qu'en « dernier recours » si la gravité de l'infraction et la personnalité de son auteur rendent cette peine <b>indispensable</b> et si toute autre sanction est <b>manifestement inadéquate</b>.</li>
          <li>Le tribunal doit <b>spécialement motiver</b> le choix de l'emprisonnement ferme (art. 132-19 al. 2), à peine de cassation.</li>
          <li>Les peines d'emprisonnement inférieures ou égales à <b>6 mois</b> doivent, sauf impossibilité, faire l'objet d'un <b>aménagement ab initio</b> (semi-liberté, placement extérieur, détention à domicile sous surveillance électronique, travail d'intérêt général – art. 132-25).</li>
        </ul>`
      },
      {
        title: "Le sursis et ses modalités",
        content: `<p>Le <b>sursis</b> est un mécanisme de suspension de l'exécution de la peine qui constitue l'un des instruments essentiels de la personnalisation des peines. Le Code pénal prévoit trois formes de sursis.</p>
        <p><b>Le sursis simple (art. 132-29 à 132-39) :</b></p>
        <ul>
          <li><b>Conditions</b> : le condamné ne doit pas avoir été condamné dans les 5 années précédentes à une peine de réclusion ou d'emprisonnement pour crime ou délit de droit commun. Le sursis peut porter sur la totalité ou une partie de la peine d'emprisonnement (art. 132-31).</li>
          <li><b>Effets</b> : la peine n'est pas exécutée. Le <b>délai d'épreuve</b> est de 5 ans en matière correctionnelle et de 7 ans en matière criminelle. Si le condamné ne commet pas de nouvelle infraction pendant ce délai, la condamnation est <b>réputée non avenue</b> (art. 132-35).</li>
          <li><b>Révocation</b> : en cas de nouvelle condamnation à une peine d'emprisonnement ou de réclusion sans sursis pendant le délai d'épreuve, le sursis est <b>révoqué de plein droit</b> (art. 132-36), sauf décision spécialement motivée de la juridiction (art. 132-36 al. 2).</li>
        </ul>
        <p><b>Le sursis probatoire (art. 132-40 à 132-53) :</b></p>
        <ul>
          <li>Anciennement « sursis avec mise à l'épreuve », il est devenu le <b>sursis probatoire</b> depuis la loi du 23 mars 2019 (art. 132-40).</li>
          <li><b>Obligations</b> : le condamné est soumis à des <b>obligations générales</b> (répondre aux convocations du JAP, prévenir de tout changement d'emploi ou de domicile, obtenir l'autorisation du JAP pour les déplacements à l'étranger) et peut être soumis à des <b>obligations particulières</b> (exercer une activité professionnelle, s'abstenir de paraître dans certains lieux, se soumettre à une obligation de soins, réparer le dommage – art. 132-45).</li>
          <li><b>Durée du sursis probatoire</b> : de 12 mois à 3 ans (5 ans en cas de récidive légale – art. 132-42).</li>
          <li><b>Suivi</b> : le condamné est placé sous le contrôle du <b>juge de l'application des peines</b> (JAP) et du <b>service pénitentiaire d'insertion et de probation</b> (SPIP).</li>
          <li><b>Révocation</b> : en cas de non-respect des obligations ou de nouvelle condamnation, le JAP peut révoquer partiellement ou totalement le sursis probatoire (art. 132-47 et 132-48).</li>
        </ul>
        <p><b>Le sursis avec obligation d'effectuer un TIG (art. 132-54 à 132-57) :</b></p>
        <p>La juridiction peut assortir le sursis de l'obligation d'effectuer un <b>travail d'intérêt général</b> de 20 à 400 heures, dans un délai de 18 mois maximum. Le refus du TIG par le prévenu fait obstacle à son prononcé (le TIG nécessite le consentement du prévenu – art. 131-8 al. 2).</p>`
      },
      {
        title: "Les aménagements de peine",
        content: `<p>Les <b>aménagements de peine</b> visent à favoriser la réinsertion du condamné tout en assurant la protection de la société. Ils sont prononcés par le <b>juge de l'application des peines</b> (JAP) ou le <b>tribunal de l'application des peines</b> (TAP) et constituent un aspect essentiel du droit de l'exécution des peines.</p>
        <p><b>La semi-liberté (art. 132-25 C. pén., art. 723-1 CPP) :</b></p>
        <ul>
          <li>Le condamné est autorisé à quitter l'établissement pénitentiaire pour exercer une activité professionnelle, suivre un enseignement ou une formation, participer à la vie de famille ou à un traitement médical.</li>
          <li>La semi-liberté peut être prononcée <b>ab initio</b> par la juridiction de jugement pour les peines d'emprisonnement inférieures ou égales à 2 ans (1 an en récidive), ou par le JAP en cours d'exécution.</li>
        </ul>
        <p><b>Le placement sous surveillance électronique (PSE) – art. 723-7 et s. CPP :</b></p>
        <ul>
          <li>Le condamné porte un <b>bracelet électronique</b> qui permet de vérifier qu'il se trouve à son domicile ou dans un lieu déterminé aux heures fixées.</li>
          <li>Le PSE peut être accordé par le JAP lorsque le reliquat de peine à exécuter est inférieur ou égal à <b>2 ans</b> (1 an en récidive).</li>
          <li>Le <b>placement sous surveillance électronique mobile</b> (PSEM – art. 763-10 et s. CPP) : mesure de sûreté applicable aux personnes condamnées pour certaines infractions graves (agressions sexuelles, crimes violents), permettant un suivi GPS en temps réel.</li>
        </ul>
        <p><b>La libération conditionnelle (art. 729 et s. CPP) :</b></p>
        <ul>
          <li>Mesure d'aménagement de peine permettant au condamné de purger le reste de sa peine en dehors de l'établissement pénitentiaire, sous conditions.</li>
          <li><b>Conditions de délai</b> : le condamné doit avoir exécuté au moins la <b>moitié de la peine</b> (les 2/3 en cas de récidive légale). Pour les peines à perpétuité, la libération conditionnelle peut être accordée après <b>18 ans</b> d'emprisonnement (22 ans en cas de période de sûreté).</li>
          <li><b>Condition de fond</b> : présenter des « gages sérieux de réadaptation sociale » (art. 729 al. 1 CPP). Le condamné doit justifier d'un projet d'insertion (emploi, logement, formation, traitement).</li>
          <li>La libération conditionnelle est assortie de <b>mesures d'assistance et de contrôle</b> exercées par le SPIP pendant un délai d'épreuve égal à la durée de la peine restant à subir.</li>
        </ul>
        <p><b>La réduction de peine (art. 721 CPP) :</b></p>
        <p>Des <b>crédits de réduction de peine</b> sont accordés automatiquement au condamné (3 mois la première année, 2 mois les années suivantes). Le JAP peut les retirer en cas de mauvaise conduite. Des <b>réductions supplémentaires de peine</b> (RSP) peuvent être accordées pour efforts sérieux de réadaptation sociale (art. 721-1 CPP).</p>`
      },
      {
        title: "La récidive légale",
        content: `<p>La <b>récidive légale</b> (art. 132-8 à 132-16-7 C. pén.) est une circonstance aggravante personnelle qui entraîne une aggravation des peines encourues lorsqu'une personne déjà condamnée définitivement commet une nouvelle infraction dans les conditions prévues par la loi. Elle se distingue de la simple réitération (art. 132-16-7).</p>
        <p><b>La récidive de crimes et de délits (art. 132-8 à 132-10) :</b></p>
        <ul>
          <li><b>Récidive perpétuelle de crime à crime</b> (art. 132-8) : toute personne condamnée définitivement pour un crime qui commet un nouveau crime est en état de récidive légale, <b>sans condition de délai</b>. Le maximum de la peine est porté à 30 ans de réclusion (si le maximum normal est de 15 ou 20 ans) ou à la perpétuité (si le maximum normal est de 30 ans).</li>
          <li><b>Récidive temporaire de crime à délit</b> (art. 132-9) : personne condamnée pour un crime qui commet, dans un délai de <b>10 ans</b>, un délit puni de la même peine. Le maximum de la peine d'emprisonnement et d'amende est doublé.</li>
          <li><b>Récidive temporaire de délit à délit</b> (art. 132-10) : personne condamnée définitivement pour un délit qui commet, dans un délai de <b>5 ans</b>, le même délit ou un délit assimilé. Le maximum de la peine d'emprisonnement et d'amende est doublé.</li>
        </ul>
        <p><b>Les délits assimilés pour la récidive (art. 132-16 et s.) :</b></p>
        <ul>
          <li>Certains délits sont assimilés entre eux pour l'application de la récidive : vol et extorsion, violences volontaires et agressions sexuelles, infractions au Code de la route commises en état d'ivresse.</li>
          <li>Les délits d'atteinte aux personnes commis avec la circonstance aggravante de violences sont assimilés (art. 132-16-2).</li>
        </ul>
        <p><b>Récidive et aménagements de peine :</b></p>
        <ul>
          <li>La récidive réduit les possibilités d'aménagement : les seuils d'éligibilité sont abaissés (1 an au lieu de 2 ans pour le PSE et la semi-liberté ab initio).</li>
          <li>Les crédits de réduction de peine sont réduits (2 mois la première année, 1 mois les années suivantes).</li>
          <li>La libération conditionnelle est subordonnée à l'exécution des 2/3 de la peine (au lieu de la moitié).</li>
        </ul>
        <h4>La distinction avec la réitération</h4>
        <p>L'article 132-16-7 définit la <b>réitération</b> : commission d'une nouvelle infraction par une personne déjà condamnée, lorsque les conditions de la récidive légale ne sont pas réunies (infractions de nature différente, délai dépassé). La réitération n'entraîne aucune aggravation légale des peines, mais le juge peut en tenir compte dans la fixation de la peine. La réitération est mentionnée au casier judiciaire et peut influencer l'appréciation de la personnalité.</p>`
      }
    ]
  },
  'penal-complicite': {
    introduction: "La complicité, régie par les articles 121-6 et 121-7 du Code pénal, est un mode de participation criminelle par lequel une personne, sans réaliser elle-même les éléments constitutifs de l'infraction, s'y associe en aidant ou en provoquant sa commission. La distinction entre complicité et coaction, les conditions d'incrimination et le principe de l'emprunt de pénalité constituent des enjeux théoriques et pratiques fondamentaux du droit pénal.",
    readTime: 20,
    sections: [
      {
        title: "Les conditions de la complicité (art. 121-6 et 121-7 C. pén.)",
        content: `<p>La <b>complicité</b> suppose la réunion de conditions strictes, posées par les articles 121-6 et 121-7 du Code pénal. L'article 121-7 distingue deux formes de complicité : la complicité par <b>aide ou assistance</b> et la complicité par <b>provocation ou instructions</b>.</p>
        <p><b>Les conditions communes :</b></p>
        <ul>
          <li><b>Un fait principal punissable</b> : la complicité suppose l'existence d'un fait principal constitutif d'un crime ou d'un délit (la complicité de contravention n'est punissable que dans les cas prévus par le règlement). Le fait principal doit être objectivement punissable (réunion des éléments constitutifs), mais l'auteur principal n'a pas nécessairement besoin d'être identifié, poursuivi ou condamné (théorie de l'<i>emprunt de criminalité</i>).</li>
          <li><b>Un acte de complicité</b> : la participation du complice doit se matérialiser par un acte positif. La simple abstention ne suffit pas en principe à caractériser la complicité (Cass. crim., 15 janvier 1948, <i>Lacour</i>), sauf obligation légale d'agir.</li>
          <li><b>Un lien de causalité</b> : l'acte de complicité doit avoir facilité ou provoqué la commission de l'infraction. Il n'est toutefois pas nécessaire que l'aide ait été déterminante ; il suffit qu'elle ait contribué à la réalisation de l'infraction.</li>
          <li><b>L'intention de participer à l'infraction</b> : le complice doit avoir agi <b>sciemment</b>, c'est-à-dire en connaissance de cause. Il doit avoir eu la volonté de s'associer à la commission de l'infraction (élément intentionnel spécifique de la complicité). La complicité d'infraction non intentionnelle est en principe exclue, sauf construction jurisprudentielle (Cass. crim., 13 septembre 2016 : complicité de blessures involontaires retenue pour le fournisseur d'un produit dangereux).</li>
        </ul>
        <p><b>L'antériorité ou la concomitance de l'acte de complicité :</b></p>
        <p>L'acte de complicité doit être <b>antérieur ou concomitant</b> au fait principal. L'aide apportée postérieurement à la commission de l'infraction ne constitue pas une complicité mais peut être incriminée au titre du <b>recel</b> (art. 321-1 C. pén.) ou de la <b>non-dénonciation de crime</b> (art. 434-1). Exception : le complice qui avait promis son aide avant la commission de l'infraction est punissable même si l'aide effective n'a été fournie qu'après.</p>`
      },
      {
        title: "La complicité par aide ou assistance (art. 121-7 al. 1)",
        content: `<p>L'article 121-7, alinéa 1, du Code pénal vise la personne qui « sciemment, par aide ou assistance, en a facilité la préparation ou la consommation ». C'est la forme la plus courante de complicité.</p>
        <p><b>Les éléments constitutifs :</b></p>
        <ul>
          <li><b>Un acte positif</b> d'aide ou d'assistance : fourniture de moyens (armes, outils, véhicule), indication d'informations utiles (plan des lieux, horaires), surveillance des lieux pendant la commission de l'infraction (<i>guet</i>), transport de l'auteur principal.</li>
          <li><b>Le caractère antérieur ou concomitant</b> : l'aide doit être apportée avant (préparation) ou pendant (consommation) l'infraction. L'aide postérieure relève du recel ou d'autres qualifications autonomes.</li>
          <li><b>La connaissance</b> de l'infraction projetée : le complice doit savoir que son aide contribue à la commission d'une infraction déterminée. La connaissance du caractère délictueux des faits suffit ; il n'est pas nécessaire que le complice connaisse tous les détails de l'opération (Cass. crim., 10 janvier 1977).</li>
        </ul>
        <p><b>La jurisprudence sur l'aide ou l'assistance :</b></p>
        <ul>
          <li><b>La fourniture de moyens</b> : la vente d'une arme en connaissance de l'usage projeté constitue une complicité du crime commis avec cette arme (Cass. crim., 19 juin 2001).</li>
          <li><b>Le rôle de guetteur</b> : la surveillance des lieux pendant un vol ou un cambriolage caractérise la complicité par aide (Cass. crim., 2 octobre 2002).</li>
          <li><b>Le transport</b> : conduire l'auteur principal sur les lieux de l'infraction en connaissance de ses intentions constitue une complicité (Cass. crim., 25 mai 2005).</li>
          <li><b>La simple présence passive</b> : la présence sur les lieux ne suffit pas à caractériser la complicité, sauf si elle s'accompagne de circonstances établissant l'intention de s'associer à l'infraction (encouragements, intimidation de la victime). La Cour de cassation a toutefois admis que la présence passive pouvait constituer une aide morale dans des circonstances particulières (Cass. crim., 20 janvier 1992, complicité de viol retenue pour la personne présente qui renforçait la contrainte exercée sur la victime).</li>
        </ul>
        <h4>L'abstention et la complicité</h4>
        <p>Le principe est que la <b>simple abstention</b> ne peut constituer une complicité par aide ou assistance. Toutefois, ce principe connaît des tempéraments : lorsque l'abstention émane d'une personne ayant une <b>obligation légale d'agir</b> (officier de police judiciaire qui s'abstient d'intervenir), la jurisprudence peut retenir la complicité. De plus, la non-dénonciation de crime (art. 434-1) et la non-assistance à personne en danger (art. 223-6) constituent des infractions autonomes sanctionnant certaines formes d'abstention.</p>`
      },
      {
        title: "La complicité par provocation ou instructions (art. 121-7 al. 2)",
        content: `<p>L'article 121-7, alinéa 2, du Code pénal vise la personne qui « par don, promesse, menace, ordre, abus d'autorité ou de pouvoir aura provoqué à une infraction ou donné des instructions pour la commettre ». Cette forme de complicité est soumise à des conditions plus strictes.</p>
        <p><b>La provocation :</b></p>
        <ul>
          <li>La provocation doit être réalisée par des <b>moyens limitativement énumérés</b> : don, promesse, menace, ordre, abus d'autorité ou de pouvoir. La simple suggestion, le conseil ou l'encouragement verbal ne suffisent pas à caractériser la provocation au sens de l'article 121-7 al. 2 (à la différence de la complicité par aide).</li>
          <li>La provocation doit être <b>directe et individuelle</b> : elle doit viser une infraction déterminée et s'adresser à une personne identifiée. La provocation générale et impersonnelle (par exemple, un appel public à la violence) relève d'incriminations spécifiques (provocation à la commission de crimes ou délits – art. 23 de la loi du 29 juillet 1881).</li>
          <li>La provocation doit avoir été <b>suivie d'effet</b> : le fait principal doit avoir été commis ou au moins tenté. La provocation non suivie d'effet peut constituer une infraction autonome dans certains cas (provocation au suicide – art. 223-13 C. pén., provocation à l'usage de stupéfiants – art. L. 3421-4 CSP).</li>
        </ul>
        <p><b>Les instructions données pour commettre l'infraction :</b></p>
        <ul>
          <li>Les instructions doivent être <b>précises et détaillées</b>, portant sur les modalités concrètes de commission de l'infraction (plan d'action, mode opératoire, indication des moyens à employer).</li>
          <li>Elles doivent être <b>suffisamment caractérisées</b> pour que l'auteur principal puisse agir : des indications vagues ou générales ne constituent pas des instructions au sens pénal (Cass. crim., 23 mai 2007).</li>
          <li>Les instructions doivent viser une <b>infraction déterminée</b> : l'instruction de commettre un acte dont l'auteur des instructions ignore le caractère délictueux ne constitue pas une complicité par instructions.</li>
        </ul>
        <p><b>L'instigateur :</b></p>
        <p>Le provocateur ou l'instigateur est souvent le « cerveau » de l'opération criminelle. Le droit français, contrairement à certains droits étrangers, ne fait pas de l'instigation un mode autonome de responsabilité pénale : l'instigateur est poursuivi et puni comme <b>complice</b> de l'infraction commise par l'auteur principal. Sa responsabilité reste donc accessoire et dépendante de l'existence d'un fait principal punissable.</p>`
      },
      {
        title: "Le principe de l'emprunt de pénalité (art. 121-6 C. pén.)",
        content: `<p>L'article 121-6 du Code pénal dispose que « sera puni comme auteur le complice de l'infraction, au sens de l'article 121-7 ». Ce principe, dit de l'<b>emprunt de pénalité</b> (ou emprunt de criminalité), signifie que le complice encourt les mêmes peines que l'auteur principal.</p>
        <p><b>La portée du principe :</b></p>
        <ul>
          <li>Le complice est « <b>puni comme auteur</b> » : il encourt les <b>mêmes peines principales</b> et les mêmes <b>peines complémentaires</b> que l'auteur principal. La peine est empruntée à la qualification retenue pour le fait principal.</li>
          <li>Le complice encourt les mêmes peines que celles prévues pour l'infraction commise par l'auteur principal, <b>y compris les circonstances aggravantes réelles</b> (liées aux modalités de commission de l'infraction : usage d'une arme, réunion, effraction), même s'il ne les a pas personnellement réalisées, dès lors qu'il en avait connaissance.</li>
          <li>Les <b>circonstances aggravantes personnelles</b> (récidive, qualité de fonctionnaire, lien de parenté avec la victime) ne se communiquent pas au complice : elles sont strictement personnelles à l'auteur qui les réunit.</li>
        </ul>
        <p><b>Les conséquences pratiques :</b></p>
        <ul>
          <li><b>La correctionnalisation</b> : si le fait principal est qualifié de délit (par correctionnalisation judiciaire), le complice est poursuivi et jugé devant le tribunal correctionnel, même si les faits constituent en réalité un crime.</li>
          <li><b>L'indépendance des peines</b> : bien que le complice encourt les mêmes peines, la juridiction <b>personnalise</b> la sanction. Le complice peut être condamné à une peine plus lourde ou plus légère que celle prononcée contre l'auteur principal, en fonction de sa personnalité et de son rôle dans l'infraction.</li>
          <li><b>Les causes personnelles d'exemption ou d'atténuation de peine</b> (immunité familiale en matière de vol – art. 311-12, excuse de minorité – art. 122-8) ne profitent qu'à celui qui les réunit.</li>
        </ul>
        <p><b>L'emprunt de criminalité vs l'emprunt de pénalité :</b></p>
        <p>La doctrine distingue l'<b>emprunt de criminalité</b> (la complicité n'existe que si le fait principal est punissable) de l'<b>emprunt de pénalité</b> (les peines encourues par le complice sont celles du fait principal). Les deux mécanismes se cumulent : la complicité suppose un fait principal punissable (emprunt de criminalité) et les peines du complice sont celles de ce fait principal (emprunt de pénalité).</p>`
      },
      {
        title: "La distinction entre complicité et coaction",
        content: `<p>La distinction entre le <b>complice</b> et le <b>coauteur</b> est fondamentale en droit pénal. Elle détermine les conditions d'incrimination, les peines applicables et le régime procédural.</p>
        <p><b>La notion de coauteur :</b></p>
        <ul>
          <li>Le <b>coauteur</b> est celui qui réalise personnellement <b>tous les éléments constitutifs</b> de l'infraction. Il est auteur à part entière de l'infraction, au même titre que les autres coauteurs. Chaque coauteur accomplit les actes matériels constitutifs de l'infraction (ex. : les deux agresseurs qui frappent simultanément la victime sont coauteurs de violences).</li>
          <li>Le <b>complice</b>, en revanche, ne réalise pas lui-même les éléments constitutifs de l'infraction. Il s'y associe par l'aide, l'assistance, la provocation ou les instructions données.</li>
          <li>La distinction repose sur le <b>critère matériel</b> : le coauteur agit sur le terrain de l'infraction, le complice agit en dehors.</li>
        </ul>
        <p><b>Les enjeux pratiques de la distinction :</b></p>
        <ul>
          <li><b>Les conditions de punissabilité</b> : la coaction ne suppose pas la réunion des conditions spécifiques de la complicité (acte antérieur ou concomitant, moyens limitativement énumérés pour la provocation). Le coauteur est poursuivi directement sur le fondement du texte d'incrimination.</li>
          <li><b>Les infractions nécessitant une qualité</b> : pour les infractions exigeant une qualité particulière de l'auteur (abus de biens sociaux : qualité de dirigeant ; détournement de fonds publics : qualité de comptable public), l'extraneus (personne ne possédant pas la qualité requise) ne peut être poursuivi comme coauteur, mais uniquement comme <b>complice</b> (Cass. crim., 30 mai 2018).</li>
          <li><b>La complicité de contravention</b> : la complicité n'est punissable que pour les crimes et délits (art. 121-7) ; la complicité de contravention ne l'est que dans les cas prévus par le règlement. Le coauteur de contravention est quant à lui toujours punissable.</li>
        </ul>
        <p><b>La théorie de la scène unique de violences :</b></p>
        <ul>
          <li>La jurisprudence retient la qualification de <b>coauteur</b> pour les participants à une scène unique de violences, même si le rôle exact de chacun ne peut être déterminé : chaque participant est considéré comme coauteur des violences résultant de la scène globale (Cass. crim., 13 juin 2006).</li>
          <li>Cette théorie permet de surmonter la difficulté probatoire liée à l'identification du rôle précis de chaque participant dans les violences collectives.</li>
        </ul>
        <h4>L'auteur moral</h4>
        <p>Le droit français ne connaît pas la notion d'<b>auteur moral</b> (ou auteur intellectuel) comme catégorie juridique autonome. Celui qui conçoit et organise l'infraction sans la commettre matériellement est poursuivi comme <b>complice</b> (par provocation ou instructions), et non comme auteur. C'est une différence notable avec certains systèmes juridiques étrangers (droit allemand, droit espagnol) qui prévoient la responsabilité de l'auteur médiat (<i>mittelbare Täterschaft</i>).</p>`
      }
    ]
  }
};
