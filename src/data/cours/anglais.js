export const COURS_ANGLAIS = {
  'anglais-common-law': {
    introduction: "The distinction between Common Law and Civil Law is one of the most fundamental topics in comparative law and a key subject for the CRFPA English examination. Understanding the historical origins, structural differences, and modern convergences between these two major legal traditions is essential for any French lawyer operating in an increasingly globalised legal environment. This course examines the core features of each system, their sources of law, court structures, and the growing trend towards harmonisation.",
    readTime: 20,
    sections: [
      {
        title: "Historical origins and philosophical foundations",
        content: `<p>The <b>Common Law</b> and <b>Civil Law</b> traditions represent two fundamentally different approaches to legal organisation, each rooted in distinct historical and philosophical foundations.</p>

<h4>A. The Common Law tradition</h4>
<p>The Common Law system originated in <b>England</b> following the Norman Conquest of 1066. Its key historical features include:</p>
<ul>
  <li><b>Royal courts and centralisation</b>: After 1066, William the Conqueror established royal courts (<i>Curia Regis</i>) that gradually developed a unified body of law "common" to the entire kingdom, replacing local customary laws.</li>
  <li><b>The writ system</b>: Access to royal justice was obtained through <i>writs</i> — formal documents issued by the royal chancery. Each writ corresponded to a specific form of action. This procedural focus shaped the development of substantive law: "remedies precede rights."</li>
  <li><b>Equity</b>: The rigidity of the Common Law led to the emergence of <b>Equity</b>, a parallel body of rules administered by the <i>Court of Chancery</i> under the Lord Chancellor. Equity provided remedies (such as injunctions and specific performance) where the Common Law was inadequate. The <b>Judicature Acts 1873-1875</b> merged the administration of law and equity into a single court system.</li>
  <li><b>Pragmatic philosophy</b>: Common Law is fundamentally <b>inductive</b> — rules are derived from individual cases rather than deduced from abstract principles. The emphasis is on practical outcomes and factual distinctions.</li>
</ul>

<h4>B. The Civil Law tradition</h4>
<p>The Civil Law system finds its roots in <b>Roman law</b>, as codified by Emperor Justinian in the 6th century (<i>Corpus Juris Civilis</i>). Its development in France was marked by:</p>
<ul>
  <li><b>Roman law influence</b>: The study of Roman law in medieval universities (particularly Bologna from the 11th century) provided the intellectual framework for Continental European legal systems.</li>
  <li><b>The codification movement</b>: The French Revolution and Enlightenment philosophy led to the great codifications, most notably the <b>Code Napoléon (Code civil, 1804)</b>. The aim was to create a comprehensive, rational, and accessible body of law.</li>
  <li><b>Deductive reasoning</b>: Civil Law is fundamentally <b>deductive</b> — judges apply general principles and codified rules to specific cases. The starting point is the abstract rule, not the individual case.</li>
  <li><b>Scholarly tradition</b>: Academic doctrine (<i>la doctrine</i>) plays a more prominent role in Civil Law than in Common Law. Legal scholars contribute to the interpretation and systematisation of the law.</li>
</ul>

<h4>C. Geographical spread</h4>
<ul>
  <li><b>Common Law</b> countries: England and Wales, the United States, Canada (except Quebec), Australia, New Zealand, India, Hong Kong, Singapore, and most former British colonies.</li>
  <li><b>Civil Law</b> countries: France, Germany, Italy, Spain, most of Continental Europe, Latin America, much of Africa, and parts of Asia (Japan, South Korea, China to some extent).</li>
  <li><b>Mixed systems</b>: Some jurisdictions combine elements of both traditions — Scotland, Louisiana, Quebec, South Africa, the Philippines.</li>
</ul>

<div class="fiche-key-point">Key point: Common Law developed inductively from judicial decisions in England, while Civil Law was built deductively from codified rules rooted in Roman law. This fundamental methodological difference — case-based reasoning versus code-based reasoning — remains the defining distinction between the two traditions.</div>`
      },
      {
        title: "Sources of law: statute, precedent, and doctrine",
        content: `<p>The hierarchy and relative importance of legal sources differ significantly between Common Law and Civil Law systems.</p>

<h4>A. Sources of law in Common Law</h4>
<p>In Common Law systems, the primary sources of law are:</p>
<ul>
  <li><b>Case law (judicial precedent)</b>: This is the hallmark of Common Law. Under the doctrine of <b><i>stare decisis</i></b> ("to stand by things decided"), courts are bound by the decisions of higher courts within the same jurisdiction. The <b>ratio decidendi</b> (the legal principle upon which the decision is based) is binding, while <b>obiter dicta</b> (incidental remarks) are merely persuasive.</li>
  <li><b>Statute law</b>: Acts of Parliament are the supreme source of law in the UK (due to parliamentary sovereignty). In the US, the Constitution is supreme, and statutes must comply with it. Legislation has grown enormously in importance in all Common Law jurisdictions.</li>
  <li><b>Custom</b>: Limited role today, but historically significant. A custom must be immemorial, reasonable, certain, and continuous to be recognised by the courts.</li>
  <li><b>Academic writing</b>: Traditionally, legal scholarship was not considered an authoritative source. However, influential treatises (such as Blackstone's <i>Commentaries on the Laws of England</i>, 1765-1769) have had significant impact.</li>
</ul>

<h4>B. Sources of law in Civil Law</h4>
<p>In Civil Law systems, the hierarchy of sources is structured differently:</p>
<ul>
  <li><b>Legislation and codes</b>: The <b>code</b> is the primary source of law. In France, the major codes include the <i>Code civil</i> (1804), <i>Code pénal</i> (1810, reformed 1994), <i>Code de commerce</i>, and <i>Code de procédure civile</i>. Codes are designed to be comprehensive and systematic.</li>
  <li><b>The Constitution</b>: In France, the Constitution of 1958 and the <i>bloc de constitutionnalité</i> sit at the top of the hierarchy of norms (<i>hiérarchie des normes</i>, as theorised by <b>Kelsen</b>).</li>
  <li><b>Case law (<i>jurisprudence</i>)</b>: Officially, Civil Law does not recognise binding precedent. Article 5 of the French <i>Code civil</i> prohibits judges from issuing general rules (<i>arrêts de règlement</i>). In practice, however, case law plays a crucial role, especially decisions of the <b>Cour de cassation</b> and the <b>Conseil d'État</b>.</li>
  <li><b>Doctrine</b>: Academic legal writing carries significant authority in Civil Law. Scholarly analysis helps interpret statutes, identify gaps, and propose reforms.</li>
</ul>

<h4>C. The practical convergence</h4>
<p>Despite theoretical differences, the two systems are converging in practice:</p>
<ul>
  <li>In Common Law countries, <b>legislation</b> has become increasingly important (especially in areas like tax, employment, and consumer protection).</li>
  <li>In Civil Law countries, <b>case law</b> effectively operates as a source of law despite the absence of formal <i>stare decisis</i>. French lawyers routinely cite <i>Cour de cassation</i> decisions as authoritative.</li>
  <li>The influence of <b>EU law</b> has created a hybrid approach in European countries, combining codified directives with case law from the <b>Court of Justice of the European Union (CJEU)</b>.</li>
</ul>

<div class="fiche-key-point">Key point: The doctrine of stare decisis is the defining feature of Common Law, making judicial precedent a binding source of law. In Civil Law, codes are formally supreme and judges theoretically cannot create binding rules, but in practice, jurisprudence plays an essential interpretive role. EU law has accelerated the convergence between the two traditions.</div>`
      },
      {
        title: "Court structures and the role of judges",
        content: `<p>The organisation of courts and the role of judges differ significantly between Common Law and Civil Law systems, reflecting their distinct philosophies.</p>

<h4>A. Court structure in England and Wales</h4>
<p>The English court system is hierarchical, with appeals flowing upwards:</p>
<ul>
  <li><b>Supreme Court of the United Kingdom</b> (since 2009, replacing the Appellate Committee of the House of Lords): the highest court, hearing appeals on points of law of general public importance.</li>
  <li><b>Court of Appeal</b>: two divisions — Civil Division and Criminal Division.</li>
  <li><b>High Court of Justice</b>: three divisions — Queen's (King's) Bench Division, Chancery Division, and Family Division. Hears complex first-instance cases and some appeals.</li>
  <li><b>Crown Court</b>: handles serious criminal cases (trial by jury).</li>
  <li><b>County Courts</b> and <b>Magistrates' Courts</b>: first-instance courts for civil and less serious criminal matters respectively.</li>
</ul>

<h4>B. Court structure in France</h4>
<p>The French system features a distinctive <b>dual court system</b> (<i>dualité des ordres de juridiction</i>):</p>
<ul>
  <li><b>Judicial order</b> (<i>ordre judiciaire</i>): headed by the <b>Cour de cassation</b>. Includes the <i>tribunaux judiciaires</i> (first instance), <i>cours d'appel</i> (appeal), and specialised courts (<i>conseil de prud'hommes</i>, <i>tribunal de commerce</i>).</li>
  <li><b>Administrative order</b> (<i>ordre administratif</i>): headed by the <b>Conseil d'État</b>. Includes the <i>tribunaux administratifs</i> (first instance) and <i>cours administratives d'appel</i>.</li>
  <li><b>Tribunal des conflits</b>: resolves jurisdictional conflicts between the two orders.</li>
  <li><b>Conseil constitutionnel</b>: reviews the constitutionality of laws (both <i>a priori</i> and <i>a posteriori</i> via the QPC procedure since 2010).</li>
</ul>

<h4>C. The role of the judge</h4>
<p>The conception of the judge's role differs fundamentally:</p>
<ul>
  <li><b>Common Law judge</b>: the judge acts as an <b>umpire or referee</b> in an <b>adversarial</b> system. The parties and their lawyers drive the proceedings, present evidence, and examine witnesses. The judge ensures fair play and rules on points of law. In jury trials, the judge directs the jury on the law, and the jury determines the facts.</li>
  <li><b>Civil Law judge</b>: the judge plays a more <b>active, inquisitorial</b> role. The judge may direct the investigation, order evidence to be produced, and question witnesses. The judge applies the law to the facts — there is generally no jury in civil matters (and a limited role in criminal matters through the <i>cour d'assises</i>).</li>
  <li><b>Judicial reasoning</b>: Common Law judgments are typically <b>lengthy and discursive</b>, with individual judges delivering separate opinions (including dissenting opinions). French judgments, particularly those of the Cour de cassation, are traditionally <b>concise and syllogistic</b>, expressed in a single sentence (<i>attendu que...</i> structure, now modernised).</li>
</ul>

<div class="fiche-key-point">Key point: The adversarial nature of Common Law proceedings contrasts with the more inquisitorial approach of Civil Law. France's dual court system (judicial and administrative orders) is a distinctive feature with no direct equivalent in the English system. The style of judicial reasoning also differs markedly — lengthy discursive judgments in Common Law versus concise, syllogistic decisions in Civil Law.</div>`
      },
      {
        title: "Criminal procedure and the trial process",
        content: `<p>The differences between Common Law and Civil Law are particularly pronounced in <b>criminal procedure</b>, where fundamental questions of due process, the role of the jury, and the conduct of the trial diverge significantly.</p>

<h4>A. The adversarial model (Common Law)</h4>
<p>In Common Law criminal procedure, the <b>adversarial system</b> governs the trial:</p>
<ul>
  <li><b>Prosecution and defence</b> are responsible for presenting their respective cases. The state prosecutes through the <b>Crown Prosecution Service</b> (CPS) in England, or the <b>District Attorney</b> in the US.</li>
  <li><b>Trial by jury</b>: for serious offences (indictable offences in England, felonies in the US), the defendant has the right to be tried by a <b>jury of 12</b> (in England; varies in the US). The jury determines guilt or innocence based on the evidence presented.</li>
  <li><b>Cross-examination</b>: each party has the right to cross-examine the other's witnesses. This is considered the primary mechanism for testing the truthfulness of evidence.</li>
  <li><b>Rules of evidence</b>: elaborate rules govern the admissibility of evidence (hearsay rule, exclusionary rule in the US for illegally obtained evidence, privilege against self-incrimination under the <b>Fifth Amendment</b>).</li>
  <li><b>Burden of proof</b>: the prosecution must prove guilt <b>"beyond reasonable doubt"</b> — this is the highest standard of proof in the legal system.</li>
  <li><b>Plea bargaining</b>: widely practised, particularly in the US, where the vast majority of criminal cases are resolved through negotiated guilty pleas rather than trials.</li>
</ul>

<h4>B. The inquisitorial model (Civil Law)</h4>
<p>In Civil Law criminal procedure (France), the <b>inquisitorial system</b> features a more active judicial role:</p>
<ul>
  <li><b>Preliminary investigation</b> (<i>instruction</i>): for serious offences, a <b><i>juge d'instruction</i></b> (investigating judge) conducts an independent investigation, gathering evidence for and against the suspect. This figure has no equivalent in Common Law.</li>
  <li><b>Prosecution</b>: the <b><i>ministère public</i></b> (public prosecutor / <i>procureur de la République</i>) decides whether to prosecute (<i>opportunité des poursuites</i>).</li>
  <li><b>Trial at the <i>cour d'assises</i></b>: for the most serious crimes (<i>crimes</i>), a mixed panel of 3 professional judges and 6 jurors (9 jurors on appeal) deliberates together on guilt and sentencing — unlike the Common Law separation between judge and jury.</li>
  <li><b>Active role of the presiding judge</b>: the president of the court directs the trial, questions the defendant and witnesses, and controls the proceedings.</li>
  <li><b><i>Intime conviction</i></b>: French jurors and judges decide according to their "innermost conviction" (<i>intime conviction</i>, art. 353 CPP), without the formal evidentiary rules of Common Law.</li>
  <li><b>Civil party action</b> (<i>constitution de partie civile</i>): the victim may join the criminal proceedings as a civil party to claim damages, a mechanism that does not exist in Common Law where civil and criminal proceedings are strictly separate.</li>
</ul>

<h4>C. Key procedural safeguards compared</h4>
<ul>
  <li><b>Right to silence</b>: protected in both systems. In England: <i>Police and Criminal Evidence Act 1984</i> (PACE). In France: article 63-1 CPP (since 2011 reform). In the US: <i>Miranda v. Arizona</i> (1966).</li>
  <li><b>Right to counsel</b>: protected in both systems. In the US: <b>Sixth Amendment</b> and <i>Gideon v. Wainwright</i> (1963). In France: articles 63-3-1 and 63-4 CPP. In England: PACE Code C.</li>
  <li><b>Presumption of innocence</b>: article 6§2 ECHR applies to both traditions. In France, it is also enshrined in the <i>Preliminary Article</i> of the CPP and in article 9 of the DDHC.</li>
  <li><b>Double jeopardy / <i>Non bis in idem</i></b>: protected in both systems (Fifth Amendment in the US; Protocol 7, art. 4 ECHR; art. 368 CPP in France).</li>
</ul>

<div class="fiche-key-point">Key point: The adversarial/inquisitorial distinction is most visible in criminal procedure. The Common Law separates the functions of judge and jury and relies on party-driven cross-examination, while Civil Law features an investigating judge and a more active trial judge. Both systems guarantee fundamental rights (silence, counsel, presumption of innocence) but implement them differently.</div>`
      },
      {
        title: "Modern convergences and the influence of European and international law",
        content: `<p>While the Common Law/Civil Law distinction remains relevant, the two traditions have been converging significantly under the influence of European integration, international standards, and globalisation.</p>

<h4>A. The influence of EU law</h4>
<p>European Union law creates a <b>hybrid legal order</b> that borrows from both traditions:</p>
<ul>
  <li><b>Legislation</b>: EU Regulations and Directives are drafted in the Civil Law codification tradition but interpreted by the <b>CJEU</b> in a manner influenced by Common Law reasoning (teleological interpretation, development of general principles through case law).</li>
  <li><b>Precedent at the CJEU</b>: while not formally bound by <i>stare decisis</i>, the CJEU consistently follows its own previous decisions and develops law incrementally through cases — a quasi-Common Law approach.</li>
  <li><b>Impact on English law</b>: before Brexit, decades of EU membership introduced Civil Law concepts into English law (proportionality, direct effect, state liability). Post-Brexit, the <b>European Union (Withdrawal) Act 2018</b> retained much EU-derived law as "retained EU law."</li>
  <li><b>Impact on French law</b>: EU law has required French courts to exercise <b>judicial review of legislation</b> against EU standards — a function traditionally foreign to Civil Law judges who were not supposed to question the will of the legislator.</li>
</ul>

<h4>B. The influence of the ECHR</h4>
<p>The <b>European Convention on Human Rights</b> has profoundly influenced both systems:</p>
<ul>
  <li>The ECHR's requirement of a <b>fair trial</b> (Article 6) has imposed common standards on both Common Law and Civil Law jurisdictions: reasonable time, independent tribunal, equality of arms, right to counsel.</li>
  <li>The <b>European Court of Human Rights</b> (Strasbourg) operates in a quasi-Common Law fashion, building its jurisprudence through landmark cases and the doctrine of the "living instrument" (<i>Tyrer v. United Kingdom</i>, 1978).</li>
  <li>France has been compelled to reform aspects of its procedure to comply with ECHR standards — notably the reform of <i>garde à vue</i> (2011) to ensure the right to counsel from the outset of police detention.</li>
</ul>

<h4>C. Convergence in legal practice</h4>
<ul>
  <li><b>Contract law</b>: the <i>Draft Common Frame of Reference</i> (DCFR) and the <i>UNIDROIT Principles of International Commercial Contracts</i> seek to harmonise contract law across traditions.</li>
  <li><b>International arbitration</b>: arbitral practice blends Common Law and Civil Law procedural techniques. The <b>IBA Rules on the Taking of Evidence</b> represent a compromise between adversarial and inquisitorial approaches.</li>
  <li><b>Codification in Common Law</b>: Common Law jurisdictions increasingly codify areas of law (the US <i>Uniform Commercial Code</i>, the English <i>Companies Act 2006</i>).</li>
  <li><b>Case law influence in Civil Law</b>: French courts increasingly reason in terms of precedent, and major decisions of the Cour de cassation are widely cited and followed.</li>
  <li><b>Legal education</b>: comparative law is now a standard part of legal education in both traditions, and law firms operate across jurisdictional boundaries.</li>
</ul>

<h4>D. Remaining fundamental differences</h4>
<p>Despite convergence, important differences persist:</p>
<ul>
  <li>The <b>jury trial</b> remains a cornerstone of Common Law criminal justice, with far broader use than in Civil Law.</li>
  <li>The <b>trust</b>, a fundamental institution of Common Law and Equity, has no direct equivalent in Civil Law (though French law introduced the <i>fiducie</i> in 2007, it differs significantly).</li>
  <li><b>Legal reasoning styles</b> remain distinct: Common Law lawyers reason by analogy from case to case, while Civil Law lawyers reason deductively from codified principles.</li>
  <li>The <b>discovery/disclosure</b> process in Common Law litigation (broad pre-trial exchange of documents) has no equivalent in Civil Law procedure.</li>
</ul>

<div class="fiche-key-point">Key point: EU law, the ECHR, and globalisation are driving a significant convergence between Common Law and Civil Law. International arbitration, in particular, operates as a hybrid system blending both traditions. However, fundamental differences persist in areas such as the role of the jury, the trust concept, and styles of legal reasoning.</div>`
      }
    ]
  },
};
