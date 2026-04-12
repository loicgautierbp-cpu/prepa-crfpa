export const SYNTHESE_EXERCICES = [
  // ===== EXERCICE 1 : Protection des donnees personnelles (facile) =====
  {
    id: 'synthese-1',
    title: 'La protection des données personnelles',
    theme: 'Droit du numérique',
    difficulty: 'facile',
    duration: 300,
    premium: false,
    documentsCount: 6,
    consigne:
      'À partir des documents joints, vous rédigerez une note de synthèse sur la protection des données personnelles en droit français et européen. Votre note devra être structurée autour d\'un plan apparent en deux parties et deux sous-parties. Vous ne devez utiliser que les documents fournis, sans apport de connaissances personnelles. La note ne doit pas excéder 4 pages.',
    documents: [
      {
        id: 'doc-1',
        title: 'Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) - Extraits',
        type: 'legislation',
        source: 'Journal officiel de l\'Union européenne, L 119, 4 mai 2016',
        content:
          'Article 1 - Objet et objectifs. Le présent règlement établit des règles relatives à la protection des personnes physiques à l\'égard du traitement des données à caractère personnel et des règles relatives à la libre circulation de ces données. Le présent règlement protège les libertés et droits fondamentaux des personnes physiques, et en particulier leur droit à la protection des données à caractère personnel.\n\nArticle 5 - Principes relatifs au traitement des données à caractère personnel. Les données à caractère personnel doivent être traitées de manière licite, loyale et transparente au regard de la personne concernée. Elles sont collectées pour des finalités déterminées, explicites et légitimes, et ne sont pas traitées ultérieurement d\'une manière incompatible avec ces finalités. Elles doivent être adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données).\n\nArticle 6 - Licéité du traitement. Le traitement n\'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie : la personne concernée a consenti au traitement ; le traitement est nécessaire à l\'exécution d\'un contrat ; le traitement est nécessaire au respect d\'une obligation légale ; le traitement est nécessaire à la sauvegarde des intérêts vitaux ; le traitement est nécessaire à l\'exécution d\'une mission d\'intérêt public ; le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement.\n\nArticle 17 - Droit à l\'effacement (droit à l\'oubli). La personne concernée a le droit d\'obtenir du responsable du traitement l\'effacement, dans les meilleurs délais, de données à caractère personnel la concernant. Le responsable du traitement a l\'obligation d\'effacer ces données lorsque les données ne sont plus nécessaires au regard des finalités, lorsque la personne retire son consentement, ou lorsque les données ont fait l\'objet d\'un traitement illicite.',
      },
      {
        id: 'doc-2',
        title: 'Loi n° 78-17 du 6 janvier 1978 relative à l\'informatique, aux fichiers et aux libertés (modifiée)',
        type: 'legislation',
        source: 'JORF, 7 janvier 1978, modifiée par la loi du 20 juin 2018',
        content:
          'Article 1er. L\'informatique doit être au service de chaque citoyen. Son développement doit s\'opérer dans le cadre de la coopération internationale. Elle ne doit porter atteinte ni à l\'identité humaine, ni aux droits de l\'homme, ni à la vie privée, ni aux libertés individuelles ou publiques. Toute personne dispose du droit de décider et de contrôler les usages qui sont faits des données à caractère personnel la concernant.\n\nArticle 8. La Commission nationale de l\'informatique et des libertés est une autorité administrative indépendante. Elle exerce les missions suivantes : elle informe toutes les personnes concernées et tous les responsables de traitement de leurs droits et obligations ; elle veille à ce que les traitements de données soient mis en oeuvre conformément aux dispositions de la présente loi ; elle peut prononcer des sanctions à l\'encontre des responsables de traitement qui ne respectent pas leurs obligations.\n\nArticle 51. Le responsable du traitement est tenu de prendre toutes précautions utiles, au regard de la nature des données et des risques présentés par le traitement, pour préserver la sécurité des données et, notamment, empêcher qu\'elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès. Des décrets pris après avis de la CNIL précisent les prescriptions techniques auxquelles doivent se conformer les traitements.\n\nLa loi de 1978 constitue le socle historique du droit français de la protection des données. Précurseur en Europe, elle a créé la CNIL et posé les principes fondateurs qui ont ensuite inspiré la directive 95/46/CE puis le RGPD. La réforme de 2018 a adapté le droit national au règlement européen tout en conservant certaines spécificités françaises, notamment s\'agissant de l\'âge du consentement des mineurs fixé à 15 ans.',
      },
      {
        id: 'doc-3',
        title: 'CJUE, Grande chambre, 13 mai 2014, Google Spain SL c/ AEPD, aff. C-131/12',
        type: 'jurisprudence',
        source: 'Recueil de la jurisprudence de la Cour, ECLI:EU:C:2014:317',
        content:
          'Par cet arrêt fondateur, la Cour de justice de l\'Union européenne a consacré le droit au déréférencement, communément appelé droit à l\'oubli numérique. La Cour a jugé que l\'exploitant d\'un moteur de recherche est responsable du traitement qu\'il effectue des données à caractère personnel qui apparaissent sur des pages web publiées par des tiers.\n\nLa Cour a estimé que les droits fondamentaux de la personne concernée prévalent en principe sur l\'intérêt économique de l\'exploitant du moteur de recherche et sur l\'intérêt du public à accéder à l\'information. Toutefois, tel ne serait pas le cas si, pour des raisons particulières, l\'ingérence dans les droits fondamentaux de la personne était justifiée par l\'intérêt prépondérant du public à avoir accès à l\'information en question.\n\nLa Cour a précisé que la personne concernée peut adresser sa demande directement à l\'exploitant du moteur de recherche, lequel doit examiner le bien-fondé de cette demande. En cas de refus, la personne peut saisir l\'autorité de contrôle ou l\'autorité judiciaire. Cette décision a eu un retentissement considérable et a conduit les moteurs de recherche à mettre en place des procédures de déréférencement.\n\nCet arrêt pose la question essentielle de l\'articulation entre le droit à la protection des données personnelles, la liberté d\'expression et le droit à l\'information. Il impose une mise en balance des droits et intérêts en présence au cas par cas, selon des critères tels que la nature de l\'information, son caractère sensible, le rôle de la personne dans la vie publique et le temps écoulé depuis la publication.',
      },
      {
        id: 'doc-4',
        title: 'Cass. 1re civ., 12 mai 2016, n° 15-17.729',
        type: 'jurisprudence',
        source: 'Bulletin des arrêts de la Cour de cassation, chambre civile I',
        content:
          'Dans cet arrêt, la première chambre civile de la Cour de cassation s\'est prononcée sur les conditions de la responsabilité d\'un responsable de traitement en cas de violation de la réglementation relative aux données personnelles. La Cour a rappelé que le non-respect des dispositions de la loi du 6 janvier 1978 constitue une faute civile susceptible d\'engager la responsabilité de son auteur sur le fondement de l\'article 1240 du Code civil.\n\nLa Cour a jugé que la collecte de données personnelles sans le consentement éclairé de la personne concernée et sans information préalable sur les finalités du traitement caractérise un manquement aux obligations légales du responsable du traitement. Ce manquement ouvre droit à réparation du préjudice subi, qu\'il soit matériel ou moral.\n\nLa Cour de cassation a précisé que le préjudice résultant de la violation des règles de protection des données personnelles peut consister en une atteinte à la vie privée, mais également en un simple préjudice moral lié à la perte de contrôle sur ses données. Elle a ainsi admis une conception large du préjudice indemnisable, facilitant l\'accès des victimes à la réparation.\n\nCette décision illustre la complémentarité entre les sanctions administratives prononcées par la CNIL et l\'action en responsabilité civile devant les juridictions judiciaires. Le justiciable dispose ainsi de voies de recours multiples pour faire valoir son droit à la protection de ses données personnelles.',
      },
      {
        id: 'doc-5',
        title: 'La protection des données personnelles à l\'ère du numérique : entre droit fondamental et régulation économique',
        type: 'doctrine',
        source: 'Revue trimestrielle de droit civil, 2020, p. 287, par le Pr. A. Martin',
        content:
          'Le droit à la protection des données personnelles s\'est progressivement affirmé comme un droit fondamental autonome en droit européen. Consacré par l\'article 8 de la Charte des droits fondamentaux de l\'Union européenne, il se distingue du droit au respect de la vie privée garanti par l\'article 7 de la même Charte et par l\'article 8 de la Convention européenne des droits de l\'homme. Cette autonomisation traduit la spécificité des enjeux liés au traitement massif des données dans la société numérique.\n\nLe RGPD a profondément renouvelé l\'approche de la protection des données en passant d\'un système déclaratif à une logique de responsabilisation (accountability). Le responsable de traitement doit désormais être en mesure de démontrer à tout moment sa conformité aux principes du règlement. Cette approche s\'accompagne d\'un renforcement considérable des sanctions, les amendes pouvant atteindre 20 millions d\'euros ou 4 % du chiffre d\'affaires annuel mondial.\n\nLa mise en oeuvre effective du RGPD soulève néanmoins des difficultés pratiques considérables. Les petites et moyennes entreprises peinent à se conformer à des exigences conçues pour les géants du numérique. Le mécanisme de guichet unique, s\'il facilite les démarches des entreprises opérant dans plusieurs États membres, peut conduire à des situations de forum shopping réglementaire, certaines autorités de contrôle étant perçues comme plus clémentes que d\'autres.\n\nEn définitive, la protection des données personnelles se situe au carrefour de préoccupations multiples : protection des droits fondamentaux, régulation du marché numérique, souveraineté numérique et compétitivité économique. L\'enjeu est de parvenir à un équilibre entre ces impératifs parfois contradictoires, dans un contexte technologique en constante évolution.',
      },
      {
        id: 'doc-6',
        title: 'Délibération CNIL n° 2019-001 du 21 janvier 2019 - Sanction Google LLC',
        type: 'texte-officiel',
        source: 'CNIL, formation restreinte, 21 janvier 2019',
        content:
          'La formation restreinte de la CNIL a prononcé une amende de 50 millions d\'euros à l\'encontre de la société Google LLC pour manquement aux obligations de transparence, d\'information et d\'obtention d\'un consentement valable pour la personnalisation de la publicité. Cette décision constitue la première sanction majeure prononcée sur le fondement du RGPD en France.\n\nLa CNIL a constaté que les informations fournies par Google aux utilisateurs ne satisfaisaient pas aux exigences de transparence et de clarté du RGPD. Les informations essentielles relatives aux traitements de données étaient excessivement disséminées dans plusieurs documents, nécessitant parfois cinq ou six actions de la part de l\'utilisateur pour y accéder. La finalité des traitements n\'était pas présentée de manière suffisamment claire et compréhensible.\n\nS\'agissant du consentement, la CNIL a relevé que le consentement recueilli par Google pour la personnalisation de la publicité n\'était ni spécifique ni univoque. L\'option de personnalisation des annonces était pré-cochée lors de la création d\'un compte, ce qui ne permettait pas de considérer que l\'utilisateur avait manifesté un consentement par un acte positif clair. De plus, le consentement était recueilli de manière globale pour l\'ensemble des traitements de personnalisation.\n\nCette décision illustre la volonté de la CNIL d\'assurer une application effective du RGPD, y compris à l\'égard des acteurs majeurs du numérique. Elle a été confirmée par le Conseil d\'État dans sa décision du 19 juin 2020, qui a validé tant la compétence de la CNIL que le montant de la sanction prononcée.',
      },
    ],
    correction: {
      plan: '<h3>I. Le cadre juridique de la protection des données personnelles</h3><h4>A. L\'affirmation d\'un droit fondamental autonome</h4><p>Consécration par l\'article 8 de la Charte des droits fondamentaux de l\'UE, distinction avec le droit à la vie privée (art. 7 Charte, art. 8 CEDH). Socle historique français : loi Informatique et Libertés du 6 janvier 1978, création de la CNIL comme autorité administrative indépendante (doc. 2). Reconnaissance doctrinale d\'un droit fondamental spécifique lié aux enjeux du numérique (doc. 5).</p><h4>B. Un encadrement européen renforcé par le RGPD</h4><p>Principes fondamentaux du traitement : licéité, loyauté, transparence, minimisation des données (art. 5 RGPD, doc. 1). Conditions de licéité du traitement (art. 6 RGPD). Passage d\'une logique déclarative à une logique de responsabilisation (accountability). Renforcement des droits des personnes : droit à l\'effacement (art. 17 RGPD), droit au déréférencement (CJUE, Google Spain, doc. 3).</p><h3>II. La mise en oeuvre de la protection des données personnelles</h3><h4>A. Des mécanismes de contrôle et de sanction diversifiés</h4><p>Rôle central de la CNIL : missions d\'information, de contrôle et de sanction (doc. 2). Sanctions administratives renforcées : jusqu\'à 20 millions d\'euros ou 4 % du CA mondial (doc. 5). Illustration : sanction de 50 millions d\'euros contre Google pour défaut de transparence et de consentement valable (doc. 6). Complémentarité avec la responsabilité civile : action sur le fondement de l\'article 1240 C. civ. (Cass. 1re civ., 12 mai 2016, doc. 4).</p><h4>B. Les défis persistants d\'une protection effective</h4><p>Difficultés pratiques de mise en conformité pour les PME (doc. 5). Risque de forum shopping réglementaire lié au mécanisme de guichet unique. Nécessaire mise en balance avec d\'autres droits fondamentaux : liberté d\'expression, droit à l\'information (doc. 3). Enjeu d\'équilibre entre protection des droits, régulation du marché et compétitivité économique (doc. 5).</p>',
      pointsCles: [
        'Distinguer le droit à la protection des données du droit à la vie privée',
        'Identifier les principes fondamentaux du RGPD (licéité, loyauté, transparence, minimisation)',
        'Mentionner le passage d\'une logique déclarative à la responsabilisation (accountability)',
        'Citer l\'arrêt Google Spain de la CJUE sur le droit au déréférencement',
        'Évoquer la complémentarité sanctions CNIL / responsabilité civile',
        'Relever les difficultés pratiques de mise en oeuvre du RGPD',
      ],
      piegesEviter: [
        'Ne pas confondre la loi de 1978 originelle et sa version modifiée en 2018',
        'Ne pas oublier de citer les documents dans la note de synthèse',
        'Ne pas apporter de connaissances personnelles extérieures au dossier',
        'Ne pas faire de la note de synthèse une dissertation ou un commentaire personnel',
        'Ne pas négliger la mise en balance des droits fondamentaux (doc. 3)',
      ],
      commentaire:
        'Cet exercice de difficulté facile porte sur un thème classique et bien documenté. Le dossier comporte 6 documents couvrant les principales sources du droit (législation, jurisprudence, doctrine, texte officiel). La difficulté principale réside dans la capacité à organiser les informations de manière cohérente sans paraphraser les documents. Veillez à exploiter chaque document et à construire un plan équilibré qui articule le cadre normatif et sa mise en oeuvre concrète.',
    },
  },

  // ===== EXERCICE 2 : Responsabilite civile produits defectueux (moyen) =====
  {
    id: 'synthese-2',
    title: 'La responsabilité civile du fait des produits défectueux',
    theme: 'Droit civil / Droit de la consommation',
    difficulty: 'moyen',
    duration: 300,
    premium: false,
    documentsCount: 8,
    consigne:
      'À partir des documents ci-joints, rédigez une note de synthèse relative à la responsabilité civile du fait des produits défectueux en droit français et européen. Votre note devra être organisée selon un plan apparent en deux parties et deux sous-parties. Vous devez vous limiter aux seuls documents fournis, sans apport de connaissances personnelles. La note ne devra pas excéder 4 pages.',
    documents: [
      {
        id: 'doc-1',
        title: 'Articles 1245 à 1245-17 du Code civil (extraits)',
        type: 'legislation',
        source: 'Code civil, Titre IV bis, Livre III',
        content:
          'Article 1245. Le producteur est responsable du dommage causé par un défaut de son produit, qu\'il soit ou non lié par un contrat avec la victime. Cette disposition est d\'ordre public.\n\nArticle 1245-3. Un produit est défectueux au sens du présent titre lorsqu\'il n\'offre pas la sécurité à laquelle on peut légitimement s\'attendre. Dans l\'appréciation de la sécurité à laquelle on peut légitimement s\'attendre, il est tenu compte de toutes les circonstances et notamment de la présentation du produit, de l\'usage qui peut en être raisonnablement attendu et du moment de sa mise en circulation.\n\nArticle 1245-8. Le demandeur doit prouver le dommage, le défaut et le lien de causalité entre le défaut et le dommage. Il n\'a pas à prouver la faute du producteur.\n\nArticle 1245-10. Le producteur peut être responsable du défaut alors même que le produit a été fabriqué dans le respect des règles de l\'art ou de normes existantes, ou qu\'il a fait l\'objet d\'une autorisation administrative. Le producteur est exonéré de sa responsabilité s\'il prouve que l\'état des connaissances scientifiques et techniques, au moment de la mise en circulation du produit, ne permettait pas de déceler l\'existence du défaut. Cette cause d\'exonération est connue sous le nom de risque de développement.\n\nArticle 1245-14. La responsabilité du producteur envers la victime n\'est pas réduite par le fait d\'un tiers ayant concouru à la réalisation du dommage. Toutefois, la responsabilité du producteur peut être réduite ou supprimée lorsque le dommage est causé conjointement par un défaut du produit et par la faute de la victime.',
      },
      {
        id: 'doc-2',
        title: 'Directive 85/374/CEE du Conseil du 25 juillet 1985 relative à la responsabilité du fait des produits défectueux',
        type: 'legislation',
        source: 'Journal officiel des Communautés européennes, L 210, 7 août 1985',
        content:
          'La directive 85/374/CEE constitue le texte fondateur du régime européen de responsabilité du fait des produits défectueux. Elle a pour objectif d\'harmoniser les législations des États membres afin d\'assurer une protection uniforme des consommateurs et d\'éviter les distorsions de concurrence au sein du marché intérieur.\n\nLa directive instaure un régime de responsabilité sans faute du producteur. Celui-ci est responsable des dommages causés par les défauts de son produit, indépendamment de toute faute de sa part. Ce choix repose sur l\'idée que le producteur est le mieux placé pour supporter les risques inhérents à la production moderne et pour les répercuter sur l\'ensemble des consommateurs par le mécanisme des prix.\n\nLa directive prévoit plusieurs causes d\'exonération au profit du producteur : il peut s\'exonérer s\'il n\'a pas mis le produit en circulation, si le défaut n\'existait pas au moment de la mise en circulation, si le produit n\'a pas été fabriqué pour la vente, ou si le défaut est dû à la conformité du produit avec des règles impératives émanant des pouvoirs publics. L\'exonération pour risque de développement est laissée à l\'option des États membres.\n\nLa directive impose un délai de prescription de trois ans à compter de la date à laquelle la victime a eu ou aurait dû avoir connaissance du dommage, du défaut et de l\'identité du producteur. Elle fixe également un délai de forclusion de dix ans à compter de la mise en circulation du produit. Ces délais visent à assurer la sécurité juridique du producteur tout en préservant les droits de la victime.',
      },
      {
        id: 'doc-3',
        title: 'Cass. 1re civ., 9 juillet 2009, n° 08-11.073',
        type: 'jurisprudence',
        source: 'Bulletin des arrêts de la Cour de cassation, chambre civile I, n° 176',
        content:
          'En l\'espèce, une personne avait subi un dommage corporel à la suite de l\'utilisation d\'un médicament présentant des effets indésirables graves non mentionnés dans la notice. La victime a assigné le laboratoire pharmaceutique en responsabilité sur le fondement des articles 1245 et suivants du Code civil.\n\nLa Cour de cassation a confirmé la condamnation du laboratoire en jugeant que le médicament n\'offrait pas la sécurité à laquelle on pouvait légitimement s\'attendre. Elle a précisé que la présentation du produit, au sens de l\'article 1245-3, inclut les informations fournies avec le produit, notamment la notice d\'utilisation. L\'insuffisance de l\'information sur les risques d\'effets indésirables graves constitue un défaut du produit.\n\nLa Cour a rappelé que la charge de la preuve du défaut, du dommage et du lien de causalité pèse sur la victime, mais elle a admis que cette preuve pouvait être apportée par des présomptions graves, précises et concordantes. En matière de produits de santé, la preuve du lien de causalité peut résulter de la proximité temporelle entre l\'administration du produit et l\'apparition du dommage, combinée à l\'absence d\'antécédents médicaux du patient.\n\nCet arrêt illustre l\'interprétation protectrice que la Cour de cassation fait des dispositions relatives à la responsabilité du fait des produits défectueux en matière de produits de santé. Il confirme la tendance jurisprudentielle à faciliter la preuve au profit des victimes, tout en maintenant formellement l\'exigence de la triple preuve.',
      },
      {
        id: 'doc-4',
        title: 'CJUE, 21 juin 2017, N.W. e.a. c/ Sanofi Pasteur, aff. C-621/15',
        type: 'jurisprudence',
        source: 'Recueil de la jurisprudence de la Cour, ECLI:EU:C:2017:484',
        content:
          'Saisie d\'une question préjudicielle, la Cour de justice de l\'Union européenne s\'est prononcée sur les modes de preuve du défaut et du lien de causalité dans le cadre de la directive 85/374/CEE, s\'agissant d\'un vaccin prétendument à l\'origine d\'une sclérose en plaques.\n\nLa Cour a jugé que la directive ne s\'oppose pas à un mode de preuve par lequel le juge du fond peut estimer que des indices graves, précis et concordants permettent de considérer que le défaut du vaccin et le lien de causalité entre celui-ci et la maladie sont établis, alors même que la recherche médicale n\'établit pas de lien entre la vaccination et la maladie.\n\nToutefois, la Cour a posé des limites importantes. Elle a précisé que le juge national ne saurait admettre un mode de preuve reposant sur des indices insuffisants, comme la seule proximité temporelle entre la vaccination et la survenance de la maladie. Les indices doivent être suffisamment graves, précis et concordants pour fonder la conviction du juge.\n\nCet arrêt opère une conciliation entre la protection des victimes et la sécurité juridique des producteurs. Il confirme que la preuve scientifique n\'est pas l\'unique mode de preuve admissible, tout en exigeant un faisceau d\'indices suffisant pour éviter toute présomption automatique de responsabilité.',
      },
      {
        id: 'doc-5',
        title: 'Cass. 1re civ., 22 mai 2008, n° 05-20.317 et 06-10.967',
        type: 'jurisprudence',
        source: 'Bulletin des arrêts de la Cour de cassation, chambre civile I',
        content:
          'Par deux arrêts rendus le même jour, la première chambre civile de la Cour de cassation a précisé l\'articulation entre le régime spécial de responsabilité du fait des produits défectueux et le droit commun de la responsabilité civile.\n\nLa Cour a jugé que le régime de responsabilité du fait des produits défectueux issu de la transposition de la directive de 1985 exclut l\'application d\'un régime de responsabilité de droit commun fondé sur une présomption de faute ou sur une obligation de sécurité de résultat, dès lors que ce régime permettrait d\'obtenir la réparation de dommages causés par le défaut d\'un produit dans des conditions plus favorables pour la victime que celles du régime spécial.\n\nEn revanche, la Cour a admis que la victime peut toujours agir sur le fondement du droit commun de la responsabilité pour faute prouvée (article 1240 du Code civil), car la directive prévoit expressément le maintien de ce droit. La victime doit alors prouver une faute du producteur distincte du simple défaut du produit.\n\nCes arrêts ont clarifié un contentieux nourri sur la question du cumul ou de l\'option entre les différents fondements de responsabilité. Ils illustrent l\'influence du droit de l\'Union européenne sur l\'interprétation du droit interne de la responsabilité civile, la Cour de cassation s\'efforçant de respecter l\'effet d\'harmonisation maximale de la directive.',
      },
      {
        id: 'doc-6',
        title: 'CJUE, 5 mars 2015, Boston Scientific Medizintechnik, aff. jointes C-503/13 et C-504/13',
        type: 'jurisprudence',
        source: 'Recueil de la jurisprudence de la Cour, ECLI:EU:C:2015:148',
        content:
          'Dans cette affaire relative à des dispositifs médicaux implantables (stimulateurs cardiaques et défibrillateurs), la Cour de justice a apporté des précisions importantes sur la notion de produit défectueux et sur la notion de dommage.\n\nLa Cour a jugé que lorsqu\'il est constaté que des produits appartenant au même groupe ou à la même série de production présentent un défaut potentiel, un produit déterminé peut être qualifié de défectueux sans qu\'il soit nécessaire de constater le défaut de ce produit précis. Cette interprétation se fonde sur le fait qu\'un produit dont il est établi qu\'il appartient à un groupe de produits présentant un risque anormal n\'offre pas la sécurité à laquelle on peut légitimement s\'attendre.\n\nLa Cour a également jugé que les coûts liés à l\'opération chirurgicale de remplacement d\'un dispositif médical défectueux constituent un dommage causé par la mort ou par des lésions corporelles au sens de la directive 85/374/CEE. Cette interprétation large de la notion de dommage corporel vise à assurer l\'effectivité de la protection des victimes.\n\nCet arrêt illustre la tendance de la CJUE à interpréter largement les notions de défaut et de dommage pour renforcer la protection des consommateurs, tout en préservant la cohérence du régime de responsabilité institué par la directive.',
      },
      {
        id: 'doc-7',
        title: 'La responsabilité du fait des produits défectueux : entre harmonisation européenne et résistances nationales',
        type: 'doctrine',
        source: 'Recueil Dalloz, 2019, p. 1534, par le Pr. B. Dupont',
        content:
          'Le régime de responsabilité du fait des produits défectueux issu de la directive de 1985 repose sur un compromis entre la protection des consommateurs et la préservation de la compétitivité industrielle. Ce compromis se manifeste notamment dans l\'exonération pour risque de développement, que la France a choisi de transposer malgré les réticences initiales du législateur.\n\nL\'harmonisation des droits nationaux par la directive a connu des résistances, particulièrement en France où la jurisprudence avait développé des régimes protecteurs fondés sur l\'obligation de sécurité. Les arrêts de la Cour de cassation du 22 mai 2008 ont mis fin à cette résistance en reconnaissant le caractère exclusif du régime spécial, sous réserve de l\'action pour faute prouvée.\n\nLa question de la preuve du défaut et du lien de causalité reste au coeur des difficultés contentieuses. La jurisprudence tant nationale qu\'européenne a admis le recours aux présomptions, ce qui constitue un tempérament significatif à la rigueur du principe selon lequel la charge de la preuve pèse sur la victime. Toutefois, cette ouverture probatoire ne doit pas conduire à un renversement de fait de la charge de la preuve.\n\nLes perspectives d\'évolution du droit européen de la responsabilité du fait des produits sont considérables. La proposition de nouvelle directive, présentée par la Commission en septembre 2022, vise à adapter le régime aux défis posés par l\'économie numérique et l\'intelligence artificielle, en étendant notamment la notion de produit aux logiciels et en introduisant des mécanismes de divulgation de preuves.',
      },
      {
        id: 'doc-8',
        title: 'Le risque de développement : cause d\'exonération controversée du producteur',
        type: 'doctrine',
        source: 'Revue trimestrielle de droit civil, 2021, p. 589, par le Pr. C. Laurent',
        content:
          'L\'exonération pour risque de développement, prévue à l\'article 1245-10 du Code civil, permet au producteur de s\'exonérer de sa responsabilité en prouvant que l\'état des connaissances scientifiques et techniques au moment de la mise en circulation du produit ne permettait pas de déceler l\'existence du défaut. Cette exonération constitue l\'un des aspects les plus discutés du régime de responsabilité du fait des produits défectueux.\n\nD\'un point de vue théorique, cette exonération se justifie par la nécessité de ne pas entraver l\'innovation. Imposer une responsabilité pour des risques objectivement inconnaissables au moment de la mise en circulation reviendrait à faire du producteur un assureur universel, ce qui pourrait freiner la mise sur le marché de produits innovants, notamment dans le secteur pharmaceutique.\n\nLa jurisprudence a précisé les conditions d\'application de cette exonération de manière stricte. L\'état des connaissances scientifiques et techniques s\'apprécie de manière objective, en référence au niveau le plus avancé de la science au moment de la mise en circulation du produit, sans se limiter aux connaissances du producteur lui-même. Cette appréciation objective rend l\'exonération difficile à invoquer en pratique.\n\nLe débat sur le risque de développement est loin d\'être clos. Certains auteurs plaident pour sa suppression, estimant que le producteur, qui tire profit de la commercialisation du produit, devrait en assumer tous les risques. D\'autres défendent son maintien comme un élément d\'équilibre nécessaire entre la protection des consommateurs et le développement industriel.',
      },
    ],
    correction: {
      plan: '<h3>I. Un régime de responsabilité sans faute au service de la protection des victimes</h3><h4>A. Le cadre normatif : une harmonisation européenne structurante</h4><p>Directive 85/374/CEE : objectif d\'harmonisation et de protection uniforme des consommateurs (doc. 2). Transposition en droit français aux articles 1245 et s. du Code civil (doc. 1). Responsabilité sans faute du producteur fondée sur le défaut du produit. Notion de défaut : produit n\'offrant pas la sécurité légitime attendue, appréciation selon la présentation, l\'usage raisonnable et le moment de mise en circulation (art. 1245-3, doc. 1). Interprétation large de la notion de défaut par la CJUE : défaut potentiel d\'une série de produits (CJUE, Boston Scientific, doc. 6).</p><h4>B. Une preuve facilitée au profit des victimes</h4><p>Triple charge probatoire pesant sur la victime : dommage, défaut, lien de causalité (art. 1245-8, doc. 1). Admission de la preuve par présomptions graves, précises et concordantes (Cass. 1re civ., 9 juill. 2009, doc. 3). Confirmation par la CJUE : la preuve scientifique n\'est pas exclusive (CJUE, Sanofi Pasteur, doc. 4). Limites : les indices doivent être suffisants, la seule proximité temporelle ne suffit pas (doc. 4). Interprétation large de la notion de dommage corporel incluant les frais d\'opération de remplacement (doc. 6).</p><h3>II. Un régime encadré par des limites et en constante évolution</h3><h4>A. Les causes d\'exonération du producteur et l\'articulation des régimes</h4><p>Causes d\'exonération prévues par la directive : absence de mise en circulation, défaut inexistant lors de la mise en circulation, conformité à des règles impératives (doc. 2). Le risque de développement : exonération controversée, appréciation objective au niveau le plus avancé des connaissances, conditions strictes (doc. 1, doc. 8). Articulation avec le droit commun : exclusion des régimes plus favorables, maintien de l\'action pour faute prouvée (Cass. 1re civ., 22 mai 2008, doc. 5). Faute de la victime comme cause de réduction ou suppression de responsabilité (art. 1245-14, doc. 1).</p><h4>B. Les perspectives d\'évolution du régime</h4><p>Résistances historiques françaises à l\'harmonisation maximale (doc. 7). Difficultés persistantes liées à la preuve du défaut et du lien de causalité (doc. 7). Débat doctrinal sur le maintien de l\'exonération pour risque de développement (doc. 8). Adaptation nécessaire aux nouveaux défis : économie numérique, intelligence artificielle, extension de la notion de produit aux logiciels (doc. 7).</p>',
      pointsCles: [
        'Définir la notion de produit défectueux (sécurité légitime attendue)',
        'Expliquer le régime de responsabilité sans faute instauré par la directive de 1985',
        'Mentionner l\'admission de la preuve par présomptions graves, précises et concordantes',
        'Analyser l\'exonération pour risque de développement et son appréciation objective',
        'Préciser l\'articulation entre le régime spécial et le droit commun (arrêts du 22 mai 2008)',
        'Évoquer les perspectives d\'évolution liées au numérique et à l\'IA',
      ],
      piegesEviter: [
        'Ne pas confondre la responsabilité du fait des produits défectueux avec la garantie des vices cachés',
        'Ne pas oublier le caractère exclusif du régime spécial (sauf faute prouvée)',
        'Ne pas assimiler l\'exonération pour risque de développement à une immunité du producteur',
        'Ne pas négliger la dimension européenne du régime (directive et jurisprudence CJUE)',
        'Ne pas omettre les arrêts de la Cour de cassation du 22 mai 2008 sur l\'articulation des régimes',
      ],
      commentaire:
        'Cet exercice de difficulté moyenne porte sur un thème transversal entre droit civil et droit de la consommation. Le dossier de 8 documents exige de maîtriser l\'articulation entre les sources nationales et européennes. La principale difficulté réside dans la capacité à construire un plan qui évite le piège de la simple juxtaposition des documents. Il faut croiser les documents pour dégager des axes de synthèse, en veillant à l\'équilibre entre les parties.',
    },
  },

  // ===== EXERCICE 3 : Principe de precaution (moyen, premium) =====
  {
    id: 'synthese-3',
    title: 'Le principe de précaution en droit de l\'environnement',
    theme: 'Droit de l\'environnement',
    difficulty: 'moyen',
    duration: 300,
    premium: true,
    documentsCount: 8,
    consigne:
      'À partir des documents fournis, rédigez une note de synthèse sur le principe de précaution en droit de l\'environnement. Votre note devra respecter un plan apparent en deux parties et deux sous-parties. Seuls les éléments tirés des documents doivent être utilisés. La note ne devra pas excéder 4 pages.',
    documents: [
      {
        id: 'doc-1',
        title: 'Charte de l\'environnement de 2004 - Article 5',
        type: 'legislation',
        source: 'Loi constitutionnelle n° 2005-205 du 1er mars 2005',
        content:
          'Article 5 de la Charte de l\'environnement : Lorsque la réalisation d\'un dommage, bien qu\'incertaine en l\'état des connaissances scientifiques, pourrait affecter de manière grave et irréversible l\'environnement, les autorités publiques veillent, par application du principe de précaution et dans leurs domaines d\'attributions, à la mise en oeuvre de procédures d\'évaluation des risques et à l\'adoption de mesures provisoires et proportionnées afin de parer à la réalisation du dommage.\n\nLa Charte de l\'environnement, intégrée au bloc de constitutionnalité par la loi constitutionnelle du 1er mars 2005, confère au principe de précaution une valeur constitutionnelle. Cette constitutionnalisation fait de la France l\'un des rares pays à avoir élevé ce principe au sommet de la hiérarchie des normes.\n\nL\'article 5 pose plusieurs conditions cumulatives à l\'application du principe de précaution : l\'incertitude scientifique quant à la réalisation du dommage, la gravité et l\'irréversibilité potentielles du dommage, et l\'atteinte à l\'environnement. Il en précise également les conséquences : obligation pour les autorités publiques de mettre en oeuvre des procédures d\'évaluation des risques et d\'adopter des mesures provisoires et proportionnées.',
      },
      {
        id: 'doc-2',
        title: 'Article L. 110-1, II, 1° du Code de l\'environnement',
        type: 'legislation',
        source: 'Code de l\'environnement, partie législative',
        content:
          'L\'article L. 110-1, II, 1° du Code de l\'environnement définit le principe de précaution comme le principe selon lequel l\'absence de certitudes, compte tenu des connaissances scientifiques et techniques du moment, ne doit pas retarder l\'adoption de mesures effectives et proportionnées visant à prévenir un risque de dommages graves et irréversibles à l\'environnement à un coût économiquement acceptable.\n\nCette définition législative, antérieure à la constitutionnalisation du principe par la Charte de l\'environnement, s\'inscrit dans le prolongement du principe 15 de la Déclaration de Rio sur l\'environnement et le développement de 1992. Elle introduit un critère d\'acceptabilité économique des mesures, absent de la formulation constitutionnelle.\n\nLe Code de l\'environnement place le principe de précaution aux côtés d\'autres principes directeurs du droit de l\'environnement : le principe de prévention, le principe pollueur-payeur et le principe de participation. Ces principes forment ensemble le socle axiologique du droit de l\'environnement français.\n\nLa coexistence de deux définitions du principe de précaution, l\'une constitutionnelle et l\'autre législative, soulève des questions d\'articulation. La doctrine s\'accorde pour considérer que la définition constitutionnelle, plus large et dépourvue de référence au coût économique, prévaut sur la définition législative en cas de conflit.',
      },
      {
        id: 'doc-3',
        title: 'Traité sur le fonctionnement de l\'Union européenne - Article 191 (ex-article 174 TCE)',
        type: 'legislation',
        source: 'TFUE, Titre XX, Environnement',
        content:
          'L\'article 191, paragraphe 2, du TFUE dispose que la politique de l\'Union dans le domaine de l\'environnement vise un niveau de protection élevé et est fondée sur les principes de précaution et d\'action préventive, sur le principe de la correction, par priorité à la source, des atteintes à l\'environnement et sur le principe du pollueur-payeur.\n\nCette disposition inscrit le principe de précaution parmi les principes fondateurs de la politique environnementale de l\'Union européenne. Toutefois, le traité ne définit pas précisément le contenu et la portée du principe, laissant à la jurisprudence et aux institutions de l\'Union le soin de les préciser.\n\nLa Commission européenne a adopté en 2000 une communication sur le recours au principe de précaution, dans laquelle elle a posé les lignes directrices de son application. Selon cette communication, le principe de précaution peut être invoqué lorsque les données scientifiques disponibles ne permettent pas une évaluation complète du risque, mais où il existe des indications raisonnables de risques potentiellement dangereux pour la santé ou l\'environnement.\n\nLe droit de l\'Union européenne reconnaît ainsi au principe de précaution une portée qui dépasse le seul domaine de l\'environnement pour s\'étendre à la protection de la santé humaine, comme l\'a confirmé la jurisprudence de la Cour de justice.',
      },
      {
        id: 'doc-4',
        title: 'CE, Ass., 12 avril 2013, Association coordination interrégionale Stop THT, n° 342409',
        type: 'jurisprudence',
        source: 'Recueil Lebon, ECLI:FR:CEASS:2013:342409.20130412',
        content:
          'Par cet arrêt d\'assemblée, le Conseil d\'État a pour la première fois exercé un contrôle de conventionnalité sur le fondement direct de l\'article 5 de la Charte de l\'environnement, et a précisé les conditions d\'invocabilité du principe de précaution devant le juge administratif.\n\nL\'affaire concernait la construction d\'une ligne à très haute tension. Les requérants soutenaient que les champs électromagnétiques émis par la ligne étaient susceptibles de présenter des risques pour la santé humaine, en l\'état d\'incertitude scientifique. Le Conseil d\'État a admis que le principe de précaution pouvait être invoqué à l\'encontre d\'une déclaration d\'utilité publique.\n\nLe Conseil d\'État a jugé que le principe de précaution implique que, lorsque des incertitudes subsistent quant à l\'existence ou à la portée de risques pour la santé des personnes, les autorités publiques peuvent adopter des mesures de protection sans avoir à attendre que la réalité et la gravité de ces risques soient pleinement démontrées. Toutefois, il a précisé que le juge exerce un contrôle entier sur le respect du principe de précaution.\n\nEn l\'espèce, le Conseil d\'État a estimé que les mesures prises par les autorités, notamment le respect des seuils d\'exposition réglementaires et la conduite d\'études complémentaires, étaient proportionnées au risque identifié et satisfaisaient aux exigences du principe de précaution.',
      },
      {
        id: 'doc-5',
        title: 'Cons. const., décision n° 2008-564 DC du 19 juin 2008, Loi relative aux OGM',
        type: 'jurisprudence',
        source: 'Recueil des décisions du Conseil constitutionnel',
        content:
          'Dans cette décision relative à la loi sur les organismes génétiquement modifiés, le Conseil constitutionnel a apporté des précisions fondamentales sur la portée du principe de précaution consacré par l\'article 5 de la Charte de l\'environnement.\n\nLe Conseil constitutionnel a jugé que l\'ensemble des droits et devoirs définis dans la Charte de l\'environnement ont valeur constitutionnelle et s\'imposent aux pouvoirs publics et aux autorités administratives dans leurs domaines de compétence respectifs. Il a confirmé que le principe de précaution fait partie intégrante du bloc de constitutionnalité.\n\nLe Conseil a précisé que les dispositions de l\'article 5 de la Charte s\'adressent aux autorités publiques et qu\'elles doivent être respectées par le législateur. Il a exercé un contrôle effectif sur la loi déférée, vérifiant que les mesures adoptées par le législateur étaient propres à garantir le respect du principe de précaution dans le domaine des OGM.\n\nCette décision a mis fin au débat sur l\'applicabilité directe du principe de précaution constitutionnel. Elle a confirmé que le principe de précaution n\'est pas un simple objectif programmatique mais un véritable principe normatif dont le respect peut être contrôlé par le juge constitutionnel.',
      },
      {
        id: 'doc-6',
        title: 'CE, 26 octobre 2011, Commune de Saint-Denis, n° 326492',
        type: 'jurisprudence',
        source: 'Recueil Lebon, Tables',
        content:
          'Dans cette affaire, le Conseil d\'État s\'est prononcé sur la possibilité pour un maire d\'interdire l\'installation d\'antennes-relais de téléphonie mobile sur le territoire de sa commune en invoquant le principe de précaution.\n\nLe Conseil d\'État a jugé que le principe de précaution, s\'il peut justifier l\'adoption de mesures par les autorités compétentes, ne permet pas au maire d\'utiliser ses pouvoirs de police générale pour réglementer l\'implantation des antennes-relais dès lors qu\'une police spéciale a été attribuée aux autorités de l\'État. Le maire ne peut donc pas se substituer aux autorités étatiques compétentes en la matière.\n\nCette décision a clarifié la répartition des compétences en matière d\'application du principe de précaution. Elle distingue entre le principe de précaution comme fondement de l\'action des autorités compétentes et comme fondement d\'une extension illimitée des pouvoirs de police du maire. Le Conseil d\'État a ainsi posé des bornes au principe de précaution pour éviter qu\'il ne devienne un instrument de paralysie de l\'action publique.\n\nCet arrêt illustre les limites du principe de précaution et la nécessité de concilier la protection de l\'environnement et de la santé publique avec d\'autres impératifs, tels que le développement des infrastructures de télécommunications et la répartition constitutionnelle des compétences.',
      },
      {
        id: 'doc-7',
        title: 'Le principe de précaution : un principe en quête de définition',
        type: 'doctrine',
        source: 'Revue française de droit administratif, 2020, p. 745, par le Pr. D. Renard',
        content:
          'Le principe de précaution occupe une place singulière dans le paysage juridique français. Consacré à la fois par le droit international, le droit européen et le droit constitutionnel, il fait l\'objet d\'interprétations variées qui reflètent la tension entre une conception maximaliste, visant à prévenir tout risque potentiel, et une conception raisonnée, cherchant à articuler la prévention des risques avec d\'autres considérations légitimes.\n\nLa constitutionnalisation du principe par la Charte de l\'environnement a soulevé des interrogations quant à son champ d\'application. La lettre de l\'article 5 limite l\'application du principe aux atteintes à l\'environnement, mais la jurisprudence tend à l\'étendre aux risques pour la santé humaine, ce qui est cohérent avec l\'interdépendance entre l\'environnement et la santé publique.\n\nLe principe de précaution se distingue fondamentalement du principe de prévention. Le principe de prévention concerne les risques avérés, dont la probabilité de réalisation est scientifiquement établie. Le principe de précaution, en revanche, vise les risques hypothétiques, dont la réalité même est incertaine en l\'état des connaissances scientifiques. Cette distinction, claire en théorie, est parfois difficile à appliquer en pratique.\n\nLe principal défi posé par le principe de précaution est celui de sa proportionnalité. Les mesures de précaution doivent être proportionnées au risque identifié et ne doivent pas conduire à un immobilisme décisionnel. Le juge administratif exerce un contrôle entier sur la proportionnalité des mesures, comme l\'a confirmé le Conseil d\'État dans sa jurisprudence.',
      },
      {
        id: 'doc-8',
        title: 'Principe de précaution et innovation : pour un usage raisonné',
        type: 'doctrine',
        source: 'Les Cahiers du Conseil constitutionnel, n° 43, 2021, par le Pr. E. Faure',
        content:
          'Le principe de précaution est fréquemment perçu comme un obstacle à l\'innovation et au progrès technique. Cette perception, largement répandue dans les milieux économiques et scientifiques, repose sur une compréhension réductrice du principe qui l\'assimile à une injonction d\'abstention face à tout risque potentiel.\n\nEn réalité, le principe de précaution, tel qu\'il est consacré par la Charte de l\'environnement, n\'impose pas l\'abstention mais l\'action : il impose aux autorités publiques de mettre en oeuvre des procédures d\'évaluation des risques et d\'adopter des mesures provisoires et proportionnées. Le principe est donc un principe d\'action raisonnée face à l\'incertitude, non un principe d\'immobilisme.\n\nLa jurisprudence a confirmé cette lecture dynamique du principe. Le Conseil d\'État, dans sa jurisprudence constante, exige des mesures proportionnées et provisoires, susceptibles d\'être révisées en fonction de l\'évolution des connaissances scientifiques. Le Conseil constitutionnel a quant à lui validé des législations qui encadrent le recours à des technologies controversées sans les interdire, dès lors que des garanties suffisantes sont prévues.\n\nL\'enjeu contemporain est de concilier le principe de précaution avec l\'impératif d\'innovation, notamment dans les domaines de l\'intelligence artificielle, des nanotechnologies et des biotechnologies. Cette conciliation passe par un renforcement de l\'expertise scientifique indépendante et par un dialogue entre les parties prenantes pour définir collectivement le niveau de risque acceptable.',
      },
    ],
    correction: {
      plan: '<h3>I. La consécration du principe de précaution comme norme contraignante</h3><h4>A. Un ancrage juridique multi-niveaux</h4><p>En droit international : principe 15 de la Déclaration de Rio de 1992 (doc. 2). En droit européen : article 191 TFUE, fondement de la politique environnementale de l\'UE (doc. 3). En droit interne : article L. 110-1 du Code de l\'environnement (doc. 2) et constitutionnalisation par l\'article 5 de la Charte de l\'environnement de 2004 (doc. 1). Coexistence de deux définitions, constitutionnelle et législative, avec primauté de la première (doc. 2).</p><h4>B. Un principe normatif à valeur constitutionnelle</h4><p>Confirmation de la valeur constitutionnelle par le Conseil constitutionnel : décision OGM du 19 juin 2008 (doc. 5). Principe normatif et non simple objectif programmatique. Invocabilité directe devant le juge administratif (CE, Ass., 12 avr. 2013, doc. 4). Conditions d\'application : incertitude scientifique, risque de dommage grave et irréversible pour l\'environnement (doc. 1). Extension jurisprudentielle aux risques pour la santé humaine (doc. 4, doc. 7).</p><h3>II. La mise en oeuvre encadrée du principe de précaution</h3><h4>A. Un principe d\'action proportionnée sous contrôle du juge</h4><p>Le principe impose l\'action et non l\'abstention : évaluation des risques et mesures provisoires et proportionnées (doc. 1, doc. 8). Contrôle entier du juge administratif sur le respect du principe (CE, 12 avr. 2013, doc. 4). Mesures révisables en fonction de l\'évolution des connaissances (doc. 8). Distinction fondamentale avec le principe de prévention : risques hypothétiques vs. risques avérés (doc. 7).</p><h4>B. Les limites nécessaires du principe de précaution</h4><p>Limites liées à la répartition des compétences : le maire ne peut se substituer aux autorités spécialement compétentes (CE, 26 oct. 2011, doc. 6). Risque d\'instrumentalisation comme obstacle à l\'innovation et au progrès technique (doc. 8). Nécessité de concilier précaution et autres impératifs : développement des infrastructures, innovation technologique (doc. 6, doc. 8). Enjeux contemporains : IA, nanotechnologies, biotechnologies (doc. 8).</p>',
      pointsCles: [
        'Identifier les trois niveaux de consécration du principe (international, européen, constitutionnel)',
        'Distinguer le principe de précaution du principe de prévention',
        'Mentionner la valeur constitutionnelle confirmée par la décision OGM de 2008',
        'Expliquer que le principe est un principe d\'action et non d\'abstention',
        'Relever le contrôle entier exercé par le juge sur les mesures de précaution',
        'Évoquer les limites liées à la répartition des compétences (arrêt Commune de Saint-Denis)',
      ],
      piegesEviter: [
        'Ne pas confondre principe de précaution et principe de prévention',
        'Ne pas présenter le principe de précaution comme un principe d\'immobilisme',
        'Ne pas oublier la dimension européenne (art. 191 TFUE)',
        'Ne pas négliger les limites du principe (répartition des compétences, proportionnalité)',
        'Ne pas omettre la coexistence de deux définitions (constitutionnelle et législative)',
      ],
      commentaire:
        'Cet exercice de difficulté moyenne requiert une bonne compréhension de l\'articulation entre les sources constitutionnelles, européennes et législatives. Le dossier de 8 documents mêle textes normatifs, jurisprudences et doctrine. La difficulté principale est d\'éviter un plan descriptif qui se contenterait de résumer chaque document. Il faut dégager une problématique autour de la tension entre la consécration du principe et les limites de sa mise en oeuvre.',
    },
  },

  // ===== EXERCICE 4 : Limites a la liberte d'expression sur Internet (difficile, premium) =====
  {
    id: 'synthese-4',
    title: 'Les limites à la liberté d\'expression sur Internet',
    theme: 'Libertés fondamentales / Droit du numérique',
    difficulty: 'difficile',
    duration: 300,
    premium: true,
    documentsCount: 10,
    consigne:
      'À partir des documents ci-dessous, vous rédigerez une note de synthèse sur les limites à la liberté d\'expression sur Internet. Votre note devra comporter un plan apparent en deux parties et deux sous-parties. Vous ne devez utiliser aucune connaissance personnelle et vous limiter strictement aux documents du dossier. La note ne devra pas excéder 4 pages.',
    documents: [
      {
        id: 'doc-1',
        title: 'Convention européenne des droits de l\'homme - Article 10',
        type: 'legislation',
        source: 'Convention de sauvegarde des droits de l\'homme et des libertés fondamentales, 4 novembre 1950',
        content:
          'Article 10 - Liberté d\'expression. 1. Toute personne a droit à la liberté d\'expression. Ce droit comprend la liberté d\'opinion et la liberté de recevoir ou de communiquer des informations ou des idées sans qu\'il puisse y avoir ingérence d\'autorités publiques et sans considération de frontière.\n\n2. L\'exercice de ces libertés comportant des devoirs et des responsabilités peut être soumis à certaines formalités, conditions, restrictions ou sanctions prévues par la loi, qui constituent des mesures nécessaires, dans une société démocratique, à la sécurité nationale, à l\'intégrité territoriale ou à la sûreté publique, à la défense de l\'ordre et à la prévention du crime, à la protection de la santé ou de la morale, à la protection de la réputation ou des droits d\'autrui, pour empêcher la divulgation d\'informations confidentielles ou pour garantir l\'autorité et l\'impartialité du pouvoir judiciaire.\n\nL\'article 10 de la CEDH constitue le texte de référence en matière de liberté d\'expression en Europe. Il pose un principe de liberté assorti d\'un régime de restrictions limitativement énumérées. Toute ingérence dans l\'exercice de cette liberté doit satisfaire à un triple test : être prévue par la loi, poursuivre un but légitime et être nécessaire dans une société démocratique.',
      },
      {
        id: 'doc-2',
        title: 'Décision n° 2009-580 DC du 10 juin 2009 du Conseil constitutionnel, Loi HADOPI',
        type: 'jurisprudence',
        source: 'Recueil des décisions du Conseil constitutionnel',
        content:
          'Dans cette décision relative à la loi favorisant la diffusion et la protection de la création sur Internet, le Conseil constitutionnel a jugé qu\'en l\'état actuel des moyens de communication et eu égard au développement généralisé des services de communication au public en ligne, l\'exercice de la liberté de communication est une condition de l\'exercice d\'autres libertés et droits fondamentaux.\n\nLe Conseil a rattaché la liberté de communication en ligne à l\'article 11 de la Déclaration des droits de l\'homme et du citoyen de 1789, qui consacre la libre communication des pensées et des opinions comme l\'un des droits les plus précieux de l\'homme. Il a souligné l\'importance particulière d\'Internet comme vecteur d\'expression et de communication.\n\nLe Conseil constitutionnel a censuré la disposition permettant à une autorité administrative de couper l\'accès à Internet d\'un abonné, en jugeant qu\'une telle restriction à la liberté d\'expression ne pouvait être prononcée que par un juge. Cette décision consacre le rôle essentiel du juge comme garant de la liberté d\'expression en ligne.\n\nCette décision fondatrice a posé le cadre constitutionnel de la liberté d\'expression sur Internet, en affirmant que les restrictions à cette liberté doivent être nécessaires, adaptées et proportionnées à l\'objectif poursuivi, et qu\'elles requièrent l\'intervention de l\'autorité judiciaire.',
      },
      {
        id: 'doc-3',
        title: 'Loi du 29 juillet 1881 sur la liberté de la presse (extraits)',
        type: 'legislation',
        source: 'JORF du 30 juillet 1881, modifiée',
        content:
          'La loi du 29 juillet 1881 sur la liberté de la presse constitue le texte fondateur du droit français de la liberté d\'expression. Applicable aux propos tenus sur Internet par renvoi de la loi du 21 juin 2004, elle définit les principales infractions de presse.\n\nArticle 29 : la diffamation est l\'allégation ou l\'imputation d\'un fait qui porte atteinte à l\'honneur ou à la considération de la personne à laquelle le fait est imputé. La publication directe ou par voie de reproduction de cette allégation est punissable, même si elle est faite sous forme dubitative ou si elle vise une personne non expressément nommée mais identifiable.\n\nArticle 24 : seront punis les provocations à la discrimination, à la haine ou à la violence à l\'égard d\'une personne ou d\'un groupe de personnes à raison de leur origine ou de leur appartenance ou non-appartenance à une ethnie, une nation, une race ou une religion déterminée, ou à raison de leur sexe, de leur orientation sexuelle ou identité de genre, ou de leur handicap.\n\nCette loi prévoit un régime procédural spécifique et protecteur de la liberté d\'expression, notamment un délai de prescription abrégé de trois mois à compter de la publication, des formalités strictes de poursuite et l\'exigence de qualification précise des faits dans l\'acte de poursuite. Ce régime s\'applique intégralement aux contenus publiés sur Internet.',
      },
      {
        id: 'doc-4',
        title: 'Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique (LCEN) - Extraits',
        type: 'legislation',
        source: 'JORF n° 143 du 22 juin 2004',
        content:
          'Article 6, I, 2. Les hébergeurs ne peuvent pas voir leur responsabilité civile engagée du fait des activités ou des informations stockées à la demande d\'un destinataire de ces services si elles n\'avaient pas effectivement connaissance de leur caractère manifestement illicite ou de faits et circonstances faisant apparaître ce caractère, ou si, dès le moment où elles en ont eu cette connaissance, elles ont agi promptement pour retirer ces données ou en rendre l\'accès impossible.\n\nArticle 6, I, 7. Les hébergeurs ne sont pas soumis à une obligation générale de surveiller les informations qu\'ils transmettent ou stockent, ni à une obligation générale de rechercher des faits ou des circonstances révélant des activités illicites.\n\nArticle 6, I, 8. L\'autorité judiciaire peut prescrire en référé ou sur requête toute mesure propre à prévenir un dommage ou à faire cesser un dommage occasionné par le contenu d\'un service de communication au public en ligne.\n\nLa LCEN transpose la directive 2000/31/CE sur le commerce électronique et instaure le régime de responsabilité conditionnelle des hébergeurs. Ce régime constitue un pilier de la régulation des contenus en ligne, en posant un équilibre entre la protection de la liberté d\'expression et la lutte contre les contenus illicites. L\'hébergeur n\'est pas tenu de surveiller proactivement les contenus mais doit agir dès qu\'il a connaissance d\'un contenu manifestement illicite.',
      },
      {
        id: 'doc-5',
        title: 'CEDH, 16 juin 2015, Delfi AS c. Estonie, n° 64569/09 (Grande chambre)',
        type: 'jurisprudence',
        source: 'Recueil des arrêts et décisions de la Cour européenne des droits de l\'homme',
        content:
          'Dans cet arrêt de Grande chambre, la Cour européenne des droits de l\'homme a jugé que la condamnation d\'un portail d\'actualités en ligne pour des commentaires injurieux postés par des internautes ne constituait pas une violation de l\'article 10 de la Convention. Cette décision a marqué un tournant dans la jurisprudence relative à la responsabilité des intermédiaires en ligne.\n\nLa Cour a relevé que les commentaires en cause constituaient un discours de haine et des menaces directes à l\'intégrité physique d\'une personne, ce qui plaçait ces propos en dehors de la protection de l\'article 10. La Cour a considéré que le portail d\'actualités, en tant qu\'exploitant commercial, avait un intérêt économique à la publication de ces commentaires et qu\'il devait assumer une part de responsabilité dans leur diffusion.\n\nLa Cour a appliqué un critère de proportionnalité en tenant compte de plusieurs facteurs : le contexte des commentaires, les mesures prises par le portail pour prévenir ou supprimer les commentaires illicites, la possibilité de poursuivre directement les auteurs des commentaires, et les conséquences de la condamnation pour le portail.\n\nCet arrêt a suscité des réactions contrastées. Certains y ont vu un recul de la liberté d\'expression en ligne, tandis que d\'autres ont salué une réponse pragmatique à la propagation du discours de haine sur Internet. La Cour a ultérieurement nuancé sa position dans l\'arrêt MTE c. Hongrie de 2016, en distinguant le discours de haine des propos simplement offensants.',
      },
      {
        id: 'doc-6',
        title: 'CEDH, 2 février 2016, Magyar Tartalomszolgáltatók Egyesülete (MTE) c. Hongrie, n° 22947/13',
        type: 'jurisprudence',
        source: 'Recueil des arrêts et décisions de la Cour européenne des droits de l\'homme',
        content:
          'Dans cette affaire, la Cour européenne des droits de l\'homme a jugé que la condamnation d\'un portail en ligne et d\'un fournisseur de contenu pour des commentaires offensants mais ne relevant pas du discours de haine constituait une violation de l\'article 10 de la Convention.\n\nLa Cour a opéré une distinction essentielle avec l\'arrêt Delfi AS c. Estonie en soulignant que les commentaires en cause, bien qu\'offensants et vulgaires, ne constituaient pas un discours de haine ni des incitations à la violence. La Cour a estimé que la condamnation du portail pour de tels commentaires représentait une ingérence disproportionnée dans sa liberté d\'expression.\n\nLa Cour a mis en exergue l\'importance d\'Internet comme outil de communication et d\'échange d\'informations. Elle a rappelé que les commentaires anonymes sur Internet constituent une forme d\'expression protégée par l\'article 10 et que la responsabilité des intermédiaires ne saurait être engagée de manière automatique pour tout commentaire illicite publié par un tiers.\n\nCet arrêt a permis de préciser la portée de la jurisprudence Delfi en établissant une graduation de la responsabilité selon la gravité des propos en cause. Il confirme que la lutte contre les abus de la liberté d\'expression en ligne doit être proportionnée et ne peut conduire à une responsabilisation excessive des intermédiaires, sous peine de provoquer un effet dissuasif (chilling effect) sur la liberté d\'expression.',
      },
      {
        id: 'doc-7',
        title: 'Cass. 1re civ., 10 avril 2013, n° 11-19.530',
        type: 'jurisprudence',
        source: 'Bulletin des arrêts de la Cour de cassation, chambre civile I',
        content:
          'La première chambre civile de la Cour de cassation s\'est prononcée sur la question de la responsabilité d\'un hébergeur pour des propos diffamatoires publiés sur une plateforme de discussion. Elle a précisé les conditions dans lesquelles l\'hébergeur peut être tenu responsable au titre de la LCEN.\n\nLa Cour a rappelé que la responsabilité de l\'hébergeur est conditionnée par la connaissance effective du caractère illicite du contenu. La notification prévue par l\'article 6, I, 5 de la LCEN, lorsqu\'elle est complète et précise, fait présumer cette connaissance. L\'hébergeur doit alors agir promptement pour retirer le contenu ou en rendre l\'accès impossible.\n\nLa Cour a jugé que le délai de réaction de l\'hébergeur doit s\'apprécier au cas par cas, en tenant compte de la nature et de la gravité du contenu signalé, du volume de notifications reçues et des moyens techniques dont dispose l\'hébergeur. Un délai de quelques jours peut être considéré comme prompt pour un contenu diffamatoire, tandis qu\'une réaction immédiate peut être exigée pour un contenu manifestement illicite tel que la pédopornographie ou l\'apologie du terrorisme.\n\nCet arrêt illustre la manière dont la jurisprudence précise les contours du régime de responsabilité des hébergeurs, en conciliant la protection de la liberté d\'expression avec la nécessité de lutter efficacement contre les contenus illicites en ligne.',
      },
      {
        id: 'doc-8',
        title: 'Cons. const., décision n° 2020-801 DC du 18 juin 2020, Loi visant à lutter contre les contenus haineux sur Internet (Loi Avia)',
        type: 'jurisprudence',
        source: 'Recueil des décisions du Conseil constitutionnel',
        content:
          'Le Conseil constitutionnel a censuré l\'essentiel des dispositions de la loi visant à lutter contre les contenus haineux sur Internet, dite loi Avia. La disposition centrale de cette loi imposait aux plateformes en ligne de retirer les contenus manifestement illicites dans un délai de 24 heures à compter de leur signalement, sous peine de sanctions pénales.\n\nLe Conseil constitutionnel a jugé que cette obligation portait une atteinte disproportionnée à la liberté d\'expression. Il a relevé que le délai de 24 heures, combiné à la menace de lourdes sanctions pénales, inciterait les plateformes à retirer préventivement des contenus licites, par crainte de se voir sanctionnées. Cet effet de sur-retrait (overblocking) constitue une atteinte caractérisée à la liberté d\'expression.\n\nLe Conseil a souligné que la détermination du caractère manifestement illicite d\'un contenu relève de l\'appréciation juridique et ne peut être déléguée aux opérateurs privés sans garanties suffisantes. L\'absence d\'intervention de l\'autorité judiciaire dans le processus de retrait constitue une insuffisance de garantie pour la liberté d\'expression.\n\nCette décision a eu un retentissement considérable et a mis en lumière les difficultés de la régulation des contenus en ligne. Elle rappelle que la lutte contre les discours de haine, si légitime soit-elle, ne peut s\'affranchir du respect des libertés fondamentales et de la garantie judiciaire.',
      },
      {
        id: 'doc-9',
        title: 'La régulation des contenus en ligne : entre liberté d\'expression et lutte contre les discours de haine',
        type: 'doctrine',
        source: 'Revue de droit public, 2021, p. 923, par le Pr. F. Girard',
        content:
          'La régulation des contenus en ligne se situe au carrefour de deux impératifs en tension : la protection de la liberté d\'expression, fondement des sociétés démocratiques, et la lutte contre les contenus illicites, nécessaire à la préservation de l\'ordre public et des droits d\'autrui. Trouver le point d\'équilibre entre ces deux exigences constitue l\'un des défis majeurs du droit contemporain.\n\nLe modèle français de régulation repose historiquement sur la loi de 1881, conçue pour la presse écrite mais étendue à Internet par la LCEN de 2004. Ce modèle se caractérise par une définition précise des infractions, un régime procédural protecteur et un rôle central du juge. Toutefois, l\'adaptation de ce modèle au numérique se heurte à la rapidité de diffusion des contenus et à la dimension transnationale d\'Internet.\n\nLe régime de responsabilité conditionnelle des hébergeurs, issu de la directive e-commerce et de la LCEN, a longtemps constitué la pierre angulaire de la régulation. Cependant, l\'émergence des grandes plateformes et des réseaux sociaux a remis en cause l\'adéquation de ce régime. Ces acteurs, qui jouent un rôle actif dans la sélection et la diffusion des contenus, ne correspondent plus au modèle de l\'hébergeur passif imaginé par le législateur.\n\nL\'échec de la loi Avia a démontré les limites d\'une approche fondée sur la contrainte de retrait rapide. Les alternatives explorées incluent la co-régulation, le recours à l\'intelligence artificielle pour la modération des contenus et le renforcement du rôle des autorités de régulation. Le règlement européen sur les services numériques (DSA), entré en application en 2024, propose une approche plus équilibrée fondée sur la responsabilisation des plateformes et la transparence de leurs pratiques de modération.',
      },
      {
        id: 'doc-10',
        title: 'Discours de haine en ligne et liberté d\'expression : la recherche d\'un équilibre européen',
        type: 'doctrine',
        source: 'Revue trimestrielle des droits de l\'homme, 2022, p. 355, par le Pr. G. Berger',
        content:
          'La lutte contre le discours de haine en ligne illustre de manière exemplaire la difficulté de concilier la liberté d\'expression avec la protection des personnes et des groupes vulnérables. Les instances européennes sont confrontées à la nécessité de tracer une frontière claire entre l\'expression protégée, même choquante ou dérangeante, et les propos qui constituent un abus de la liberté d\'expression.\n\nLa jurisprudence de la CEDH a développé une approche nuancée en distinguant le discours de haine, qui se situe en dehors de la protection de l\'article 10, des propos simplement offensants ou provocateurs, qui bénéficient de cette protection. L\'arrêt Delfi c. Estonie a admis la responsabilité d\'un intermédiaire pour des commentaires haineux, tandis que l\'arrêt MTE c. Hongrie a censuré une telle responsabilité pour des propos offensants mais non haineux.\n\nLa responsabilité des plateformes numériques constitue un enjeu central de la régulation. Le passage d\'un modèle de responsabilité conditionnelle à un modèle de responsabilisation active pose des questions fondamentales : jusqu\'où les plateformes doivent-elles modérer les contenus sans porter atteinte à la liberté d\'expression ? Comment éviter l\'effet dissuasif (chilling effect) d\'une responsabilisation excessive ?\n\nLe règlement européen sur les services numériques (DSA) apporte des éléments de réponse en imposant aux très grandes plateformes des obligations de diligence renforcées : évaluation systématique des risques, mécanismes de signalement efficaces, transparence des algorithmes de recommandation et coopération avec les chercheurs. Cette approche systémique vise à responsabiliser les plateformes sans les ériger en censeurs privés du débat public.',
      },
    ],
    correction: {
      plan: '<h3>I. La liberté d\'expression en ligne : un droit fondamental protégé</h3><h4>A. La consécration d\'une liberté renforcée dans l\'espace numérique</h4><p>Article 10 CEDH : liberté d\'expression incluant la liberté de communiquer des informations, restrictions limitativement énumérées soumises au triple test (doc. 1). Rattachement constitutionnel à l\'article 11 DDHC de 1789 : Internet comme condition d\'exercice des libertés fondamentales (Cons. const., 10 juin 2009, HADOPI, doc. 2). Importance d\'Internet comme vecteur d\'expression protégé (doc. 2, doc. 6). Protection des commentaires anonymes en ligne comme forme d\'expression (CEDH, MTE c. Hongrie, doc. 6).</p><h4>B. Un régime de responsabilité des intermédiaires protecteur de la liberté d\'expression</h4><p>Régime de responsabilité conditionnelle des hébergeurs : LCEN de 2004 (doc. 4). Absence d\'obligation générale de surveillance (art. 6, I, 7 LCEN, doc. 4). Responsabilité subordonnée à la connaissance effective du caractère illicite (doc. 4, doc. 7). Notification comme présomption de connaissance, appréciation au cas par cas du délai de réaction (Cass. 1re civ., 10 avr. 2013, doc. 7). Inadaptation progressive du modèle face aux grandes plateformes qui jouent un rôle actif (doc. 9).</p><h3>II. Des limites nécessaires mais strictement encadrées</h3><h4>A. Les infractions de presse et la responsabilisation des plateformes</h4><p>Application de la loi de 1881 aux propos tenus en ligne : diffamation, provocation à la haine (doc. 3). Régime procédural protecteur : prescription abrégée, formalités strictes (doc. 3). Distinction entre discours de haine (exclu de la protection de l\'art. 10) et propos offensants (protégés) : CEDH, Delfi c. Estonie (doc. 5) et MTE c. Hongrie (doc. 6). Graduation de la responsabilité des intermédiaires selon la gravité des contenus (doc. 5, doc. 6). Évolution vers une responsabilisation active des plateformes : DSA et obligations de diligence renforcées (doc. 9, doc. 10).</p><h4>B. L\'exigence de proportionnalité et la garantie judiciaire</h4><p>Censure constitutionnelle de la loi Avia : obligation de retrait en 24h disproportionnée (Cons. const., 18 juin 2020, doc. 8). Risque de sur-retrait (overblocking) et effet dissuasif (chilling effect) sur la liberté d\'expression (doc. 8, doc. 10). Nécessité de l\'intervention judiciaire : la détermination du caractère illicite ne peut être déléguée aux opérateurs privés (doc. 2, doc. 8). Pouvoir du juge de prescrire des mesures de retrait en référé (art. 6, I, 8 LCEN, doc. 4). Recherche d\'un équilibre par la co-régulation, la transparence et l\'expertise indépendante (doc. 9, doc. 10).</p>',
      pointsCles: [
        'Citer la décision HADOPI du Conseil constitutionnel sur Internet comme condition d\'exercice des libertés',
        'Expliquer le régime de responsabilité conditionnelle des hébergeurs (LCEN)',
        'Distinguer discours de haine et propos offensants (arrêts Delfi et MTE)',
        'Analyser la censure de la loi Avia pour atteinte disproportionnée à la liberté d\'expression',
        'Évoquer le risque de sur-retrait (overblocking) et l\'effet dissuasif (chilling effect)',
        'Mentionner le rôle indispensable du juge comme garant de la liberté d\'expression',
        'Présenter le DSA comme nouvelle approche de régulation systémique',
      ],
      piegesEviter: [
        'Ne pas oublier la dimension européenne (CEDH et droit de l\'UE)',
        'Ne pas se limiter à une simple juxtaposition des jurisprudences sans les articuler',
        'Ne pas négliger la tension entre efficacité de la lutte contre la haine et protection de la liberté d\'expression',
        'Ne pas confondre le statut d\'hébergeur et celui d\'éditeur',
        'Ne pas omettre l\'évolution du cadre juridique (LCEN vers DSA)',
        'Ne pas faire de commentaire personnel sur le bien-fondé des décisions',
      ],
      commentaire:
        'Cet exercice de difficulté élevée comporte 10 documents de nature variée (traités, législation, jurisprudence constitutionnelle, européenne et judiciaire, doctrine). La difficulté majeure réside dans la capacité à articuler de manière cohérente des sources multiples traitant de problématiques connexes mais distinctes (responsabilité des intermédiaires, discours de haine, régulation des plateformes). Le plan doit refléter la tension fondamentale entre la protection de la liberté d\'expression et la nécessité d\'en encadrer l\'exercice, sans tomber dans un plan binaire trop simpliste (liberté / limites). Il faut montrer la recherche d\'un équilibre proportionné, qui constitue le fil directeur du dossier.',
    },
  },
];
