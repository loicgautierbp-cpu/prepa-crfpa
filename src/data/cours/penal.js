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
  }
};
