import type { SectionTranslation } from "../types";

const fr: Record<string, SectionTranslation> = {
  "recomendacoes-essenciais": {
    title: "Recommandations essentielles",
    subtitle: "Ce que toutes les familles doivent savoir",
    blocks: [
      { type: "heading", level: 2, text: "La recommandation centrale" },
      {
        type: "paragraph",
        text: "L'Organisation mondiale de la Santé et le ministère de la Santé brésilien recommandent de débuter l'allaitement dans la première heure de vie, de donner exclusivement du lait maternel pendant les six premiers mois, puis de poursuivre l'allaitement, associé à une alimentation complémentaire adaptée, jusqu'à deux ans ou plus. « Exclusif » signifie que le bébé ne reçoit ni eau, ni tisanes, ni jus, ni autre lait, ni aliment, à l'exception de médicaments, vitamines, minéraux ou solution de réhydratation lorsqu'ils sont prescrits par un professionnel de santé.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Message clé",
        text: "Le lait maternel contient déjà suffisamment d'eau, même par temps chaud. Chez un bébé de moins de six mois allaité exclusivement, donner de l'eau ou une tisane peut réduire la succion, diminuer la production de lait et augmenter les risques de contamination.",
      },
      { type: "heading", level: 2, text: "Principes qui favorisent l'allaitement" },
      {
        type: "list",
        items: [
          "Le contact peau à peau juste après la naissance, dès que la mère et le bébé sont cliniquement stables.",
          "Le rooming-in, avec la mère et le bébé maintenus à proximité l'un de l'autre.",
          "L'allaitement à la demande : proposer le sein dès que le bébé montre des signes de faim, de jour comme de nuit.",
          "Éviter les horaires rigides et la limitation de la durée des tétées.",
          "Observer et corriger précocement la prise du sein et le positionnement.",
          "Éviter les téterelles, sucettes et biberons, en particulier pendant la mise en place de l'allaitement, sauf indication individualisée.",
          "Ne pas donner de complément sans évaluation clinique ni plan de protection de la production de lait.",
          "Garantir un accompagnement respectueux, sans culpabilisation ni contrainte.",
        ],
      },
      { type: "heading", level: 2, text: "Bienfaits" },
      {
        type: "table",
        columns: ["Pour le bébé", "Pour la femme", "Pour la famille et la société"],
        rows: [
          [
            "Protection contre les diarrhées et les infections respiratoires ; nutrition adaptée ; soutien au développement et risque futur réduit de surpoids.",
            "Favorise la contraction utérine ; associé à un risque réduit de cancer du sein et de l'ovaire ainsi que de diabète de type 2 ; renforce le lien mère-enfant et la confiance en soi.",
            "Moins de dépenses en substituts ; moins d'absences pour cause de maladie ; impact environnemental réduit ; renforcement de la santé publique.",
          ],
        ],
      },
    ],
  },
  "como-a-lactacao-funciona": {
    title: "Comment fonctionne la lactation",
    subtitle: "Production, éjection et régulation du lait",
    blocks: [
      { type: "heading", level: 2, text: "Le sein produit du lait en réponse à la vidange" },
      {
        type: "paragraph",
        text: "Pendant la grossesse, les hormones préparent le tissu mammaire. Après la délivrance du placenta, la chute de la progestérone permet l'augmentation de la production. La prolactine participe à la synthèse du lait ; l'ocytocine favorise l'éjection, faisant circuler le lait dans les canaux galactophores. Une succion fréquente et efficace, associée à une vidange adéquate, constitue le principal stimulus pour maintenir la production.",
      },
      { type: "heading", level: 2, text: "Colostrum, lait de transition et lait mature" },
      {
        type: "table",
        columns: ["Phase", "Caractéristiques", "Conseils à donner"],
        rows: [
          [
            "Colostrum",
            "Jaunâtre, épais, produit en petite quantité et riche en éléments de défense immunitaire.",
            "De petites quantités sont attendues ; l'estomac du nouveau-né est petit et des tétées fréquentes sont normales.",
          ],
          [
            "Transition",
            "Le volume augmente et l'aspect change au cours des premiers jours.",
            "La « montée de lait » peut s'accompagner de seins plus pleins, chauds et qui peuvent couler.",
          ],
          [
            "Mature",
            "La composition varie au cours de la journée et pendant la tétée.",
            "Il n'est pas nécessaire de changer de sein selon l'horloge ; laissez le bébé terminer spontanément avant de proposer l'autre sein.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Ce qui augmente réellement la production" },
      {
        type: "list",
        items: [
          "Davantage de tétées efficaces et/ou de séances d'expression du lait, y compris la nuit si nécessaire.",
          "La correction de la prise du sein.",
          "Le contact peau à peau.",
          "Le traitement de la douleur et des difficultés qui réduisent la succion.",
          "Le repos autant que possible, une hydratation selon la soif et une alimentation adaptée.",
          "Éviter les compléments inutiles qui remplacent les tétées.",
        ],
      },
    ],
  },
  "primeiras-horas-e-primeiros-dias": {
    title: "Premières heures et premiers jours",
    subtitle: "De la salle de naissance au retour à la maison",
    blocks: [
      { type: "heading", level: 2, text: "Première heure de vie" },
      {
        type: "paragraph",
        text: "En l'absence de contre-indication clinique, un contact peau à peau ininterrompu aide à stabiliser la température, la respiration et la glycémie, favorise le lien d'attachement et augmente les chances d'une mise au sein précoce. Les soins de routine peuvent être organisés de façon à ne pas séparer inutilement la mère et le bébé.",
      },
      { type: "heading", level: 2, text: "Comportements normaux" },
      {
        type: "list",
        items: [
          "Des tétées très fréquentes, parfois regroupées en « grappes » en fin de journée.",
          "Un sommeil variable et, dans certaines situations, la nécessité de réveiller le nouveau-né.",
          "Peu de colostrum visible, mais une quantité suffisante lorsque le transfert de lait est adéquat.",
          "Des selles qui passent du méconium foncé à des teintes verdâtres puis jaunâtres.",
          "Une perte de poids au cours des premiers jours, qui doit faire l'objet d'un suivi clinique.",
        ],
      },
      { type: "heading", level: 2, text: "Quand réveiller le bébé" },
      {
        type: "paragraph",
        text: "Les nouveau-nés prématurés, de petit poids, présentant un jaundice, une prise de poids insuffisante, une somnolence excessive ou d'autres conditions peuvent nécessiter des tétées programmées et une évaluation régulière. Les conseils doivent être individualisés. En général, tant que l'allaitement n'est pas bien établi, il ne faut pas laisser passer de longs intervalles sans évaluer les signes cliniques et l'évolution du poids.",
      },
    ],
  },
  "pega-e-posicionamento": {
    title: "Prise du sein et positionnement",
    subtitle: "Confort pour la femme et efficacité pour le bébé",
    blocks: [
      { type: "heading", level: 2, text: "Positionnement adéquat" },
      {
        type: "list",
        items: [
          "La mère est confortablement installée, dos et bras soutenus.",
          "Le bébé est face au sein, ventre contre le corps de la mère.",
          "La tête et le tronc sont alignés, sans torsion du cou.",
          "Le corps du bébé est rapproché et bien soutenu.",
          "Le nez est à la hauteur du mamelon avant le début de la prise du sein.",
        ],
      },
      { type: "heading", level: 2, text: "Signes d'une bonne prise du sein" },
      {
        type: "list",
        items: [
          "La bouche est grande ouverte.",
          "Le menton touche le sein.",
          "Les lèvres sont retroussées vers l'extérieur.",
          "On voit davantage d'aréole au-dessus de la bouche qu'en dessous, lorsque l'anatomie permet de l'observer.",
          "Les joues sont rondes, sans creux.",
          "La succion est lente et profonde, avec des pauses et une déglutition perceptible.",
          "Il n'y a pas de douleur persistante ; une sensibilité initiale brève est possible, mais pas de douleur intense pendant toute la tétée.",
        ],
      },
      { type: "heading", level: 2, text: "Comment aider le bébé à prendre le sein" },
      {
        type: "list",
        items: [
          "Approchez le bébé du sein, plutôt que d'amener le sein vers lui.",
          "Effleurez la lèvre supérieure avec le mamelon et attendez que la bouche s'ouvre grand.",
          "Dirigez le mamelon vers le palais et rapprochez rapidement le corps du bébé.",
          "Observez le confort et la déglutition.",
          "En cas de douleur, glissez délicatement le petit doigt dans le coin de la bouche pour rompre la succion et recommencez.",
        ],
      },
      { type: "heading", level: 2, text: "Positions utiles" },
      {
        type: "table",
        columns: ["Position", "Peut aider quand..."],
        rows: [
          [
            "Traditionnelle (berceau)",
            "La mère et le bébé sont confortablement installés et la prise du sein commence à bien se mettre en place.",
          ],
          ["Croisée (berceau inversé)", "Un meilleur contrôle de la tête est nécessaire pour corriger la prise du sein."],
          [
            "Sous le bras (« ballon de rugby »)",
            "Après une césarienne, en cas de seins volumineux, de jumeaux ou de besoin de mieux visualiser la prise du sein.",
          ],
          [
            "Allongée sur le côté",
            "La mère a besoin de se reposer ; exige un environnement sûr et une vigilance face au risque d'endormissement.",
          ],
          [
            "À califourchon",
            "Bébés présentant un reflux, une hypotonie ou des difficultés de coordination, sous supervision.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "La douleur ne doit pas être banalisée",
        text: "Une nipple fissure, un saignement, une déformation du mamelon en fin de tétée ou une douleur qui ne s'améliore pas après un ajustement de la prise du sein doivent faire l'objet d'une évaluation.",
      },
    ],
  },
  "como-saber-se-o-bebe-mama-o-suficiente": {
    title: "Comment savoir si le bébé tète suffisamment",
    subtitle: "Une évaluation qui va au-delà du temps passé au sein",
    blocks: [
      { type: "heading", level: 2, text: "Signes favorables" },
      {
        type: "list",
        items: [
          "Une tétée avec succion profonde et déglutition.",
          "Le bébé détend ses mains et son corps après la tétée.",
          "Une élimination urinaire en quantité progressive au cours des premiers jours.",
          "Des selles suivant la transition attendue.",
          "Une prise de poids suivie sur la courbe de croissance.",
          "Des seins plus souples après les tétées.",
        ],
      },
      { type: "heading", level: 2, text: "Couches et selles" },
      {
        type: "paragraph",
        text: "Le comptage des couches n'est qu'un indicateur parmi d'autres. Après la montée de lait, on s'attend en général à plusieurs couches bien mouillées par jour ; l'OMS retient comme référence au moins six couches jetables mouillées en 24 heures, associées à une croissance adéquate et à des selles compatibles. L'évaluation du poids, de l'état général et de la tétée reste indispensable.",
      },
      { type: "heading", level: 2, text: "Poids" },
      {
        type: "paragraph",
        text: "L'interprétation doit tenir compte de l'âge gestationnel, du poids de naissance, de la perte initiale, de la reprise pondérale, de la technique de pesée et de la courbe de l'OMS. Il ne faut pas conclure à un « lait insuffisant » sur la base d'une seule pesée. Une perte excessive, l'absence de reprise attendue ou un gain insuffisant exigent une évaluation de la tétée, des conditions cliniques, de la fréquence des tétées et, si nécessaire, un plan de supplémentation temporaire avec protection de la lactation.",
      },
    ],
  },
  "dificuldades-frequentes-e-manejo": {
    title: "Difficultés fréquentes et prise en charge",
    subtitle: "Que faire et quand orienter vers un spécialiste",
    blocks: [
      { type: "heading", level: 2, text: "Engorgement mammaire" },
      {
        type: "paragraph",
        text: "Le sein devient très plein, tendu et douloureux ; l'aréole peut être tendue, ce qui complique la prise du sein. Cet engorgement survient lorsque la production dépasse ce qui est retiré, en cas de tétées inefficaces ou d'intervalles trop longs.",
      },
      {
        type: "list",
        items: [
          "Allaiter fréquemment et corriger la prise du sein.",
          "Avant la tétée, masser doucement et exprimer un peu de lait pour assouplir l'aréole.",
          "Après la tétée, appliquer du froid brièvement pour le confort, en le protégeant par un tissu.",
          "Porter un soutien-gorge confortable, sans compression.",
          "Éviter les massages vigoureux, la chaleur prolongée et une vidange excessive non nécessaire, qui peuvent aggraver l'œdème et stimuler davantage la production.",
        ],
      },
      { type: "heading", level: 2, text: "Nipple fissure et traumatisme du mamelon" },
      {
        type: "paragraph",
        text: "La cause la plus fréquente est une prise du sein inadéquate. Un retrait incorrect du bébé du sein, un tire-lait mal ajusté, une dermatite, une infection ou des particularités buccales peuvent également y contribuer.",
      },
      {
        type: "list",
        items: [
          "Corriger la cause.",
          "Garder la zone propre et sèche ; ne laver les seins qu'à la douche, sans savon agressif sur le mamelon.",
          "Éviter l'alcool, les pommades maison, les écorces d'aliments et l'exposition au soleil comme traitement.",
          "Évaluer les signes d'infection et la nécessité d'un traitement spécifique.",
        ],
      },
      { type: "heading", level: 2, text: "Canaux inflammés et mastitis" },
      {
        type: "paragraph",
        text: "Une douleur localisée, une zone rougie, un œdème et un malaise général peuvent faire partie du spectre inflammatoire de la mastitis. Une fièvre persistante, une aggravation clinique ou une absence d'amélioration nécessitent une évaluation médicale. En général, poursuivre l'allaitement est sûr et aide à résoudre la stase ; un arrêt brutal peut aggraver la situation.",
      },
      {
        type: "list",
        items: [
          "Le repos, l'hydratation, une analgésie compatible avec l'allaitement et l'application de froid local peuvent aider.",
          "Éviter de presser fortement, de « défaire » une masse par la force ou d'utiliser des vibrations agressives.",
          "N'utiliser des antibiotiques que lorsqu'ils sont indiqués.",
          "Suspecter un breast abscess en cas de masse fluctuante, d'aggravation ou de persistance des symptômes ; une imagerie et un drainage peuvent être nécessaires.",
        ],
      },
      { type: "heading", level: 2, text: "Candidiasis (thrush) : attention aux diagnostics excessifs" },
      {
        type: "paragraph",
        text: "Une douleur à type de brûlure et un mamelon brillant sont souvent attribués à une candidiasis (thrush), mais peuvent avoir d'autres causes, comme un traumatisme, un vasospasm ou une dermatite. Le diagnostic doit être clinique et le traitement ciblé. Ne pas répéter l'usage d'antifongiques sans réévaluation.",
      },
      { type: "heading", level: 2, text: "Low milk supply perçue ou réelle" },
      {
        type: "paragraph",
        text: "Des seins plus souples, l'absence d'écoulement de lait et des tétées fréquentes ne prouvent pas un low milk supply. L'évaluation doit se fonder sur le transfert de lait, la diurèse, les selles, le poids et l'état clinique.",
      },
      { type: "heading", level: 2, text: "Let-down reflex puissant et excès de lait" },
      {
        type: "list",
        items: [
          "Une position semi-inclinée peut réduire le débit.",
          "Permettre des pauses et le rot.",
          "Éviter d'exprimer de grands volumes seulement pour « vider » le sein.",
          "Évaluer la prise de poids, l'inconfort, les épisodes d'étouffement et les selles.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Attention",
        text: "Les tisanes, la bière brune, la bouillie de maïs et les produits « galactogènes » ne remplacent pas une évaluation de la tétée. Certains peuvent être nocifs ou interagir avec des médicaments.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Signes d'alerte chez le nouveau-né",
        text: "Une difficulté à se réveiller, un refus persistant du sein, une diminution des urines, une bouche sèche, des pleurs faibles, de la fièvre ou une température basse, un jaundice intense, une respiration rapide ou avec effort, une coloration bleutée, des vomissements verts ou une perte de poids importante exigent une évaluation immédiate.",
      },
    ],
  },
  "ordenha-conservacao-e-oferta": {
    title: "Expression, conservation et administration du lait",
    subtitle: "Exprimer le lait en toute sécurité",
    blocks: [
      { type: "heading", level: 2, text: "Quand exprimer le lait" },
      {
        type: "list",
        items: [
          "Pour soulager une aréole tendue avant la prise du sein.",
          "Lorsque la mère et le bébé sont séparés.",
          "Pour stimuler la production en cas de prématurité ou de succion inefficace.",
          "Pour constituer une réserve avant le retour au travail.",
          "Pour un don à une banque de lait humain (human milk bank).",
        ],
      },
      { type: "heading", level: 2, text: "Expression manuelle" },
      {
        type: "list",
        items: [
          "Lavez-vous les mains et choisissez un endroit propre et calme.",
          "Massez doucement le sein par mouvements circulaires.",
          "Placez le pouce au-dessus et l'index en dessous de l'aréole, en formant un « C ».",
          "Poussez les doigts vers l'arrière, en direction du thorax, et comprimez rythmiquement sans glisser sur la peau.",
          "Changez de point d'appui tout autour de l'aréole, puis changez de sein.",
          "Recueillez le lait dans un récipient adapté et étiqueté.",
        ],
      },
      { type: "heading", level: 2, text: "Tire-lait" },
      {
        type: "paragraph",
        text: "Le tire-lait ne doit pas provoquer de douleur. La taille de la téterelle doit permettre au mamelon de bouger sans frottement excessif. Commencez avec une aspiration faible et augmentez-la jusqu'au maximum confortable. Nettoyez les pièces selon les instructions du fabricant et les recommandations sanitaires.",
      },
      { type: "heading", level: 2, text: "Conservation : distinguer usage domestique et don" },
      {
        type: "callout",
        tone: "info",
        title: "Important",
        text: "Les règles de la banque de lait pour les dons peuvent être plus strictes. Le ministère de la Santé recommande que le lait destiné au don reste congelé pendant 10 jours maximum avant d'être remis à la banque de lait. Pour la consommation du bébé lui-même, suivez le protocole du service qui accompagne la famille ainsi que les conditions de conservation.",
      },
      {
        type: "table",
        columns: ["Étape", "Bonnes pratiques"],
        rows: [
          [
            "Récipient",
            "Bocal en verre à large ouverture avec couvercle en plastique, stérilisé selon les indications de la banque de lait, ou récipient spécifique pour lait humain.",
          ],
          [
            "Étiquetage",
            "Nom, date et heure du recueil ; le cas échéant, âge gestationnel ou identification du bébé.",
          ],
          ["Réfrigération", "Ranger immédiatement à l'endroit indiqué ; éviter la porte du réfrigérateur."],
          ["Décongélation", "Au réfrigérateur ou au bain-marie avec de l'eau tiède, sans faire bouillir."],
          [
            "Réchauffage",
            "Ne jamais utiliser le four à micro-ondes : cela peut créer des points chauds et altérer les composants du lait.",
          ],
          [
            "Restes",
            "Ne pas recongeler un lait déjà décongelé ; jetez le reste ayant été en contact avec la salive, selon les indications du service.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Comment donner le lait" },
      {
        type: "paragraph",
        text: "Un petit gobelet, une cuillère ou un dispositif adapté peuvent être utilisés. Le biberon n'est pas obligatoire et peut interférer avec la dynamique orale chez certains enfants. Le choix doit tenir compte de l'âge, des capacités de l'enfant, de la sécurité et des conseils professionnels. Ne versez jamais le lait directement dans la bouche ; laissez le bébé le laper et l'aspirer, en position semi-assise.",
      },
    ],
  },
  "alimentacao-medicamentos-e-habitos-maternos": {
    title: "Alimentation, médicaments et habitudes maternelles",
    subtitle: "Des précautions sans interdictions inutiles",
    blocks: [
      { type: "heading", level: 2, text: "Alimentation de la femme" },
      {
        type: "paragraph",
        text: "Il n'existe pas de régime universel pour la femme qui allaite. La plupart des femmes peuvent conserver une alimentation variée, fondée sur des aliments non transformés ou peu transformés. Buvez de l'eau selon votre soif. Des restrictions alimentaires sans indication précise peuvent entraîner des carences, un sentiment de culpabilité et un arrêt précoce de l'allaitement.",
      },
      { type: "heading", level: 2, text: "Caféine, alcool et tabac" },
      {
        type: "list",
        items: [
          "Caféine : la modérer et surveiller l'irritabilité ou les troubles du sommeil du bébé ; prendre en compte le café, les thés, les boissons énergisantes et le chocolat.",
          "Alcool : l'option la plus sûre reste de ne pas en consommer. Les stratégies fondées sur un délai d'attente doivent être discutées avec un professionnel, car « tirer et jeter » son lait n'accélère pas l'élimination de l'alcool.",
          "Tabac et vapotage : à éviter. Si la femme ne parvient pas à arrêter immédiatement, elle doit recevoir un accompagnement au sevrage et réduire l'exposition passive du bébé ; ne pas fumer à proximité du bébé ni dans des espaces fermés.",
          "Drogues illicites : elles peuvent contre-indiquer temporairement l'allaitement et nécessitent une évaluation urgente ainsi qu'un accompagnement sans jugement.",
        ],
      },
      { type: "heading", level: 2, text: "Médicaments" },
      {
        type: "paragraph",
        text: "La grande majorité des médicaments sont compatibles avec l'allaitement. Interrompre l'allaitement sans nécessité peut comporter plus de risques que de le poursuivre. La décision doit tenir compte de l'âge et de l'état de santé du bébé, de la dose, de la voie d'administration, de la durée du traitement, du passage dans le lait et des alternatives possibles. Consultez des sources spécialisées et un professionnel de santé habilité.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Ne jamais agir seul(e)",
        text: "N'interrompez ni un traitement essentiel ni l'allaitement sans avis professionnel. Les phytothérapies, produits « naturels » et compléments peuvent eux aussi provoquer des effets indésirables et des interactions.",
      },
    ],
  },
  "situacoes-especiais-e-contraindicacoes": {
    title: "Situations particulières et contre-indications",
    subtitle: "Quand allaiter, suspendre ou substituer",
    blocks: [
      { type: "heading", level: 2, text: "Peu de situations constituent une contre-indication totale" },
      {
        type: "paragraph",
        text: "Au Brésil, les mères vivant avec le VIH et les mères porteuses du HTLV-1 ou du HTLV-2 ne doivent pas allaiter, en raison du risque de transmission. Le système de santé public (SUS) doit garantir un accompagnement, l'inhibition de la lactation lorsqu'elle est indiquée et la fourniture de lait infantile. Le cross-nursing - le fait qu'une autre femme allaite le bébé - n'est pas recommandé en raison du risque de transmission d'infections.",
      },
      { type: "heading", level: 2, text: "Situations nécessitant une évaluation individuelle" },
      {
        type: "table",
        columns: ["Condition", "Recommandation générale"],
        rows: [
          ["Hépatite B", "En général, l'allaitement est autorisé sous réserve d'une immunoprophylaxie adéquate du nouveau-né."],
          ["Hépatite C", "En général autorisé ; évaluer un éventuel saignement du mamelon et les situations particulières."],
          [
            "Tuberculose",
            "Il est souvent possible de maintenir l'allaitement avec des mesures de contrôle et un traitement adapté ; la conduite dépend du degré de contagiosité.",
          ],
          ["Herpès", "Ne pas donner le sein porteur d'une lésion active ; protéger les lésions situées ailleurs et maintenir une bonne hygiène."],
          [
            "COVID-19 / grippe",
            "En général, poursuivre l'allaitement en respectant l'hygiène des mains et les mesures respiratoires indiquées.",
          ],
          [
            "Usage de radiopharmaceutiques ou de médicaments spécifiques",
            "Peut nécessiter une suspension temporaire ou constituer une contre-indication ; consulter une source spécialisée.",
          ],
          ["Galactosemia classique chez le bébé", "Contre-indication au lait humain."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Sécurité",
        text: "Ce tableau est un résumé. La conduite à tenir dépend du diagnostic, du traitement et de l'état du bébé. Demandez une évaluation spécialisée.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Autonomie et accompagnement bienveillant",
        text: "Promouvoir l'allaitement ne signifie pas l'imposer. Les femmes qui ne peuvent pas ou ne souhaitent pas allaiter méritent elles aussi des conseils fiables, l'accès à une alimentation adaptée et un accompagnement sans jugement.",
      },
    ],
  },
  "prematuridade-internacao-e-metodo-canguru": {
    title: "Prématurité, hospitalisation et Kangaroo Mother Care",
    subtitle: "Protéger le lait et le lien d'attachement",
    blocks: [
      { type: "heading", level: 2, text: "Le lait humain est particulièrement important" },
      {
        type: "paragraph",
        text: "Les prématurés et les nouveau-nés de faible poids bénéficient du lait de leur propre mère et, lorsque celui-ci n'est pas disponible, de lait humain pasteurisé selon l'indication. La succion directe n'est souvent pas encore possible, si bien que la production doit être initiée et maintenue par l'expression du lait.",
      },
      {
        type: "list",
        items: [
          "Débuter la stimulation le plus tôt possible après l'accouchement, selon l'état de la mère.",
          "Exprimer le lait à une fréquence proche de celle des tétées d'un nouveau-né.",
          "Pratiquer le contact peau à peau et le Kangaroo Mother Care dès que cela est autorisé.",
          "Noter les volumes exprimés sans transformer l'expression du lait en source de culpabilité.",
          "Recevoir un accompagnement pour la transition de la sonde ou du gobelet vers le sein, selon la maturité du bébé.",
        ],
      },
      { type: "heading", level: 2, text: "Congé maternité en cas d'hospitalisation prolongée" },
      {
        type: "paragraph",
        text: "La loi n° 15.222/2025 permet désormais, dans certaines hospitalisations liées à l'accouchement dépassant deux semaines, une prolongation du congé maternité pouvant aller jusqu'à 120 jours après la sortie de la mère et du nouveau-né, déduction faite de la période précédant l'accouchement, selon les conditions légales prévues.",
      },
    ],
  },
  "introducao-alimentar-e-continuidade": {
    title: "Introduction alimentaire et poursuite de l'allaitement",
    subtitle: "À six mois, l'alimentation complète le lait — elle ne le remplace pas immédiatement",
    blocks: [
      { type: "heading", level: 2, text: "Quand commencer" },
      {
        type: "paragraph",
        text: "L'alimentation complémentaire doit débuter vers six mois révolus, lorsque l'enfant montre des signes de disponibilité et présente des besoins nutritionnels accrus. Le lait maternel reste important et peut être donné avant ou après les repas selon la routine et les préférences de chacun.",
      },
      {
        type: "list",
        items: [
          "Proposer de vrais aliments, variés et adaptés à la culture familiale.",
          "Faire évoluer la consistance des aliments ; éviter de systématiquement mixer ou passer au tamis.",
          "Proposer de l'eau au gobelet dès le début de la diversification alimentaire.",
          "Éviter le sucre et les aliments ultra-transformés pendant les premières années.",
          "Respecter les signes de faim et de satiété ; ne pas forcer l'enfant à manger.",
          "Poursuivre l'allaitement jusqu'à deux ans ou plus.",
        ],
      },
    ],
  },
  "retorno-ao-trabalho-e-desmame": {
    title: "Retour au travail et sevrage",
    subtitle: "Planification, droits et choix respectés",
    blocks: [
      { type: "heading", level: 2, text: "Planifier avant le retour" },
      {
        type: "list",
        items: [
          "Discutez-en avec votre entourage et votre lieu de travail.",
          "Commencez à vous entraîner à exprimer le lait quelques semaines avant, sans constituer une réserve excessive.",
          "Testez les récipients et le mode d'administration avec une autre personne qui garde le bébé.",
          "Allaitez avant de partir et dès les retrouvailles avec le bébé.",
          "Au travail, exprimez le lait à des intervalles adaptés à votre confort et à l'âge du bébé.",
          "Transportez le lait dans un sac isotherme adapté et conservez-le correctement.",
        ],
      },
      { type: "heading", level: 2, text: "Sevrage" },
      {
        type: "paragraph",
        text: "Le sevrage peut être naturel, progressif ou rendu nécessaire par les circonstances familiales. Il doit se dérouler sans culpabilité et, si possible, de façon progressive pour réduire la souffrance et le risque d'engorgement. Supprimez une tétée à la fois, remplacez-la par un moment de proximité et une alimentation adaptée à l'âge de l'enfant, et observez les réactions de l'enfant ainsi que celles des seins.",
      },
      {
        type: "table",
        columns: ["Situation", "Conduite initiale"],
        rows: [
          [
            "Le bébé tète beaucoup",
            "Observer les signes de faim, la prise du sein et la déglutition ; des tétées groupées peuvent être normales.",
          ],
          [
            "Prise de poids insuffisante",
            "Évaluation clinique complète, observation d'une tétée, plan pour augmenter le transfert de lait et réévaluation précoce.",
          ],
          ["Retour au travail", "Planifier des séances d'expression régulières et la conservation du lait."],
          [
            "Relactation",
            "Stimulation fréquente, contact peau à peau, mise au sein régulière et suivi spécialisé.",
          ],
        ],
      },
    ],
  },
  "mitos-e-verdades": {
    title: "Mythes et vérités",
    subtitle: "Des informations pour réduire la peur et la culpabilité",
    blocks: [
      {
        type: "table",
        columns: ["Affirmation", "Ce qu'il faut savoir"],
        rows: [
          [
            "« Mon lait est trop faible. »",
            "Faux. L'aspect du lait varie et un lait plus clair n'est pas un lait « faible ». Évaluez la prise alimentaire par la déglutition, les couches, le poids et l'état clinique du bébé.",
          ],
          [
            "« Un petit sein produit peu de lait. »",
            "Faux. La taille du sein dépend surtout du tissu graisseux, pas de la capacité de production de lait.",
          ],
          [
            "« Un bébé qui tète tout le temps n'est pas rassasié. »",
            "Pas toujours. Des tétées fréquentes et groupées peuvent être normales, en particulier lors des poussées de croissance.",
          ],
          [
            "« Il faut laver le mamelon avant chaque tétée. »",
            "Faux. L'hygiène habituelle de la douche suffit ; un lavage excessif assèche et abîme la peau.",
          ],
          [
            "« Une nipple fissure doit être exposée au soleil. »",
            "Ce n'est pas une recommandation de première intention. Corriger la prise du sein et la cause du problème est essentiel.",
          ],
          [
            "« Une mastitis oblige à arrêter d'allaiter. »",
            "Généralement faux. Dans la plupart des cas, poursuivre l'allaitement est sûr ; l'évaluation clinique permet d'identifier les exceptions.",
          ],
          [
            "« La bière brune augmente la production de lait. »",
            "Faux, et pratique non recommandée. L'alcool passe dans le lait et peut être nocif.",
          ],
          [
            "« Après six mois, le lait devient de l'eau. »",
            "Faux. Le lait continue d'apporter énergie, nutriments et protection immunitaire.",
          ],
          [
            "« Une femme avec des implants mammaires ne peut pas allaiter. »",
            "Pas forcément. Beaucoup de femmes allaitent malgré des implants ; le type de chirurgie, la technique utilisée et la sensibilité peuvent jouer un rôle.",
          ],
          [
            "« La sucette n'a aucune influence. »",
            "Elle peut influencer la fréquence de succion et la mise en place de l'allaitement dans certains cas ; la question doit être discutée au cas par cas.",
          ],
          [
            "« Le lait infantile fait mieux dormir le bébé. »",
            "Il ne doit pas être utilisé comme stratégie pour le sommeil. Le sommeil du nourrisson dépend de nombreux facteurs, et le lait infantile répond à des indications spécifiques.",
          ],
          [
            "« Comme j'étais stressée, mon lait s'est tari. »",
            "Le stress peut temporairement gêner le let-down reflex, mais le lait ne « se tarit » pas brutalement pour autant. Le soutien et la stimulation aident à rétablir la situation.",
          ],
          [
            "« Il faut alterner les seins toutes les dix minutes. »",
            "Faux. Le bébé peut terminer un sein avant de recevoir l'autre ; ce qui compte, c'est un transfert de lait efficace.",
          ],
          [
            "« Allaiter en public est inconvenant. »",
            "Faux. Allaiter répond à un besoin de l'enfant et doit être respecté.",
          ],
          [
            "« Le retour au travail oblige à sevrer le bébé. »",
            "Faux. L'expression du lait, sa conservation, les pauses légales et un bon accompagnement permettent de poursuivre l'allaitement.",
          ],
        ],
      },
    ],
  },
  "direitos-e-legislacao-brasileira": {
    title: "Droits et législation brésilienne",
    subtitle: "Protection de l'enfant, de la femme et de l'allaitement",
    blocks: [
      { type: "heading", level: 2, text: "Principales garanties" },
      { type: "heading", level: 3, text: "Allaitement en espace public" },
      {
        type: "paragraph",
        text: "Une femme n'a pas à se cacher pour nourrir son bébé. Les États et les municipalités peuvent disposer de normes spécifiques contre les comportements humiliants à ce sujet. Même en l'absence de loi locale spécifique, empêcher ou humilier une femme parce qu'elle allaite peut porter atteinte à sa dignité, à la protection de la maternité et aux droits de l'enfant.",
      },
      { type: "heading", level: 3, text: "Salles d'allaitement" },
      {
        type: "paragraph",
        text: "Ce sont des espaces privés, propres et sûrs, aménagés dans les entreprises ou les institutions, destinés à l'expression et à la conservation du lait pendant la journée de travail. Il ne s'agit pas de lieux servant à isoler la femme, ni de substituts au droit aux pauses.",
      },
      {
        type: "table",
        columns: ["Texte", "Protection concernée"],
        rows: [
          [
            "Constitution fédérale et Code du travail (CLT)",
            "Protection de la maternité, congé maternité et garantie de stabilité de l'emploi, selon le type de contrat et les conditions requises.",
          ],
          [
            "Code du travail (CLT), art. 396",
            "Deux pauses spéciales de trente minutes par jour pour allaiter, jusqu'aux six mois de l'enfant ; cette période peut être prolongée lorsque la santé de l'enfant l'exige. Les horaires doivent être fixés par accord individuel.",
          ],
          [
            "Loi n° 11.770/2008",
            "Programme « Empresa Cidadã » : possibilité de prolonger le congé maternité à 180 jours dans les entreprises adhérentes, avec des règles applicables également à la fonction publique.",
          ],
          [
            "Loi n° 11.265/2006 et décret n° 9.579/2018",
            "NBCAL : encadre la promotion commerciale des laits infantiles, aliments pour nourrissons, biberons, téterelles et sucettes.",
          ],
          ["Loi n° 13.435/2017", "Institue le mois d'août comme Mois de l'allaitement maternel - « Agosto Dourado »."],
          [
            "Loi n° 13.872/2019",
            "Garantit la possibilité d'allaiter pendant les concours de la fonction publique fédérale pour les enfants de moins de six mois, avec des règles de demande et de compensation du temps.",
          ],
          ["Loi n° 14.683/2023", "Institue le label « Entreprise amie de l'allaitement »."],
          [
            "Loi n° 15.222/2025",
            "Élargit la protection du congé et de l'allocation de maternité en cas d'hospitalisation prolongée liée à l'accouchement.",
          ],
          [
            "Résolution Cofen n° 741/2024",
            "Réglemente les soins infirmiers dans les banques et postes de collecte de lait humain.",
          ],
          [
            "Résolution Cofen n° 736/2024",
            "Encadre la mise en œuvre du Nursing Process dans les contextes de soins.",
          ],
        ],
      },
    ],
  },
  "atuacao-da-enfermagem-e-da-atencao-primaria": {
    title: "Rôle des soins infirmiers et des soins de santé primaires",
    subtitle: "Accueillir, évaluer, intervenir et accompagner",
    blocks: [
      { type: "heading", level: 2, text: "Consultation infirmière" },
      {
        type: "paragraph",
        text: "La consultation doit suivre le Nursing Process : évaluation, diagnostic infirmier, planification, mise en œuvre et suivi de l'évolution. Le dossier doit être clair, daté, individualisé, et inclure les conseils donnés, la réponse de la mère et du bébé, ainsi que les signes d'alerte.",
      },
      { type: "heading", level: 3, text: "Grille d'évaluation" },
      {
        type: "table",
        columns: ["Domaine", "Ce qu'il faut évaluer"],
        rows: [
          [
            "Antécédents",
            "Accouchement, âge gestationnel, poids, hospitalisations, maladies, médicaments, chirurgies mammaires, expérience antérieure et objectifs de la famille.",
          ],
          [
            "Tétée",
            "Position, prise du sein, rythme, déglutition, durée spontanée, douleur, forme du mamelon après la tétée.",
          ],
          [
            "Bébé",
            "État général, hydratation, jaundice, bouche, tonus, succion, couches, selles et courbe de poids.",
          ],
          ["Seins", "Forme, œdème, traumatisme, douleur, rougeur, masse, écoulements et signes infectieux."],
          [
            "Contexte",
            "Réseau de soutien, santé mentale, sommeil, alimentation, travail, violence, barrières culturelles et linguistiques.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Interventions possibles" },
      {
        type: "list",
        items: [
          "Conseils et démonstration pratique.",
          "Correction de la prise du sein et du positionnement.",
          "Expression manuelle et plan de stimulation.",
          "Prise en charge de l'engorgement et des traumatismes du mamelon.",
          "Surveillance du poids et de l'hydratation.",
          "Orientation vers un médecin, un dentiste, un orthophoniste, un(e) nutritionniste, un(e) psychologue ou une banque de lait, selon les besoins.",
          "Plan de supplémentation partagé lorsqu'elle est indiquée.",
          "Visite à domicile et réévaluation précoce.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Limites de l'exercice professionnel",
        text: "Les protocoles institutionnels, la législation encadrant l'exercice professionnel et l'évaluation clinique doivent orienter les prescriptions et les actes. Un avis technique du Cofen de 2025 a indiqué qu'un document du Coren-PR sur la prise en charge ne remplissait pas encore les conditions pour être reconnu comme protocole national ; il ne doit donc pas être présenté comme un protocole homologué.",
      },
    ],
  },
  "foz-do-iguacu-e-regiao-de-fronteira": {
    title: "Foz do Iguaçu et la région frontalière",
    subtitle: "Réseau local, diversité et soins interculturels",
    blocks: [
      { type: "heading", level: 2, text: "Les soins de santé primaires comme porte d'entrée" },
      {
        type: "paragraph",
        text: "À Foz do Iguaçu, les femmes enceintes, les femmes en postpartum et les enfants doivent s'adresser à l'Unidade Básica de Saúde de référence (centre de santé) pour le suivi prénatal, la consultation postnatale, le well-child care, l'évaluation du poids, les conseils sur la prise du sein, la vaccination et les orientations vers des spécialistes. Les contacts, horaires et centres de référence peuvent changer ; vérifiez-les auprès des canaux officiels de la Secretaria Municipal da Saúde (secrétariat municipal de la Santé).",
      },
      { type: "heading", level: 3, text: "Particularités de la triple frontière" },
      {
        type: "list",
        items: [
          "Des déplacements entre le Brésil, le Paraguay et l'Argentine, pouvant compliquer la continuité des soins.",
          "Une diversité linguistique et culturelle, avec des familles parlant espagnol, guarani, arabe ou d'autres langues.",
          "Des différences de documents, de couverture santé et de lieu de naissance.",
          "Des croyances familiales variées concernant le colostrum, les tisanes, les horaires, l'exposition du corps ou le rôle des grands-parents.",
          "La nécessité d'une communication simple, d'un interprète lorsque c'est possible, et du respect des choix de la famille sans jamais transiger sur la sécurité.",
        ],
      },
      { type: "heading", level: 3, text: "Comment mener un accompagnement interculturel" },
      {
        type: "list",
        items: [
          "Demandez ce que la famille sait déjà et ce en quoi elle croit.",
          "Identifiez qui participe aux décisions.",
          "Expliquez la raison de chaque recommandation, sans jamais ridiculiser les croyances.",
          "Négociez des alternatives sûres.",
          "Remettez des conseils écrits dans une langue comprise par la famille.",
          "Convenez ensemble du lieu et du moment de la réévaluation.",
        ],
      },
      { type: "heading", level: 3, text: "Projet de loi municipale n° 318/2025" },
      {
        type: "paragraph",
        text: "Ce projet proposait des lignes directrices pour encourager l'allaitement maternel, un éventuel laissez-passer gratuit pour les femmes qui allaitent et les donneuses de lait, des salles d'allaitement, des campagnes de sensibilisation et des partenariats. Toutefois, le suivi officiel de la procédure indique que la proposition a été retirée par son autrice et classée sans suite en février 2026. Ces mesures ne doivent donc pas être présentées comme une loi municipale en vigueur.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Situation juridique exacte",
        text: "Un projet de loi n'est pas une loi. Le texte peut inspirer des politiques publiques, mais ne crée aucun droit opposable tant qu'il n'a pas été approuvé, promulgué et publié.",
      },
      { type: "heading", level: 3, text: "Initiatives législatives ultérieures" },
      {
        type: "paragraph",
        text: "En 2026, une proposition municipale a été présentée pour exiger que les crèches publiques et privées disposent d'une structure adaptée pour recevoir et conserver le lait maternel. L'existence d'une proposition ne signifie pas qu'elle est en vigueur ; la situation doit être vérifiée dans le système législatif municipal avant toute diffusion.",
      },
      { type: "heading", level: 3, text: "Parcours suggéré pour l'UBS (centre de santé)" },
      {
        type: "list",
        items: [
          "Accueillir sans jugement et identifier le degré d'urgence.",
          "Observer une tétée chaque fois que possible.",
          "Évaluer la mère et le bébé, y compris le poids et l'hydratation.",
          "Effectuer la prise en charge initiale et la consigner dans le dossier.",
          "Fixer un retour de contrôle dans les 24 à 72 heures selon le niveau de risque.",
          "Orienter vers la maternité, la pédiatrie, la banque de lait ou les urgences si nécessaire.",
          "Garantir la continuité des soins pour les familles qui traversent la frontière.",
        ],
      },
    ],
  },
  "checklists-e-planos-praticos": {
    title: "Listes de vérification et plans pratiques",
    subtitle: "Des outils à utiliser au quotidien",
    blocks: [
      { type: "heading", level: 2, text: "Liste de vérification avant la sortie" },
      {
        type: "list",
        items: [
          "La mère sait positionner le bébé et reconnaître une bonne prise du sein.",
          "Elle sait identifier les signes de faim et de satiété.",
          "Elle a reçu des conseils sur l'allaitement à la demande.",
          "Elle sait quels signes nécessitent une consultation.",
          "Un rendez-vous de suivi pour la mère et le bébé est programmé.",
          "Elle sait où faire peser le bébé et où trouver du soutien.",
          "Elle a reçu des conseils sur les médicaments et l'alimentation.",
          "En cas de complément, un plan écrit prévoyant une réévaluation existe.",
        ],
      },
      { type: "heading", level: 3, text: "Plan d'allaitement" },
      {
        type: "table",
        caption: "Questions à aborder avec la famille, avec les réponses à consigner",
        columns: ["Question", "Réponse de la famille"],
        rows: [
          ["Qui pourra apporter du soutien pendant les premières semaines ?", ""],
          ["Où chercher de l'aide professionnelle ?", ""],
          ["Quels signes indiquent qu'il faut consulter ?", ""],
          ["Comment se déroulera le retour au travail ?", ""],
          ["Y a-t-il une croyance ou une préoccupation que l'équipe doit connaître ?", ""],
          ["Quels sont nos objectifs et nos limites ?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Journal de suivi simplifié" },
      {
        type: "table",
        caption: "Modèle vierge à remplir par la famille et à apporter aux consultations",
        columns: ["Date", "Tétées/expressions", "Couches mouillées", "Selles", "Douleur (0-10)", "Observations"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Signes d'urgence" },
      {
        type: "list",
        items: [
          "Bébé très somnolent ou difficile à réveiller.",
          "Peu ou pas d'urine.",
          "Fièvre, hypothermie ou difficulté à respirer.",
          "Perte de poids importante ou aggravation clinique.",
          "Jaundice intense ou évolutif.",
          "Mère présentant une forte fièvre, un évanouissement, un essoufflement, une douleur intense, un saignement important ou des signes de breast abscess.",
        ],
      },
    ],
  },
  "perguntas-frequentes": {
    title: "Questions fréquentes",
    subtitle: "Des réponses directes aux questions courantes",
    blocks: [],
    faqItems: [
      {
        question: "Combien de temps doit durer une tétée ?",
        answer:
          "Il n'y a pas de durée fixe. Observez la succion et la déglutition ; laissez le bébé terminer spontanément.",
      },
      {
        question: "Dois-je proposer les deux seins ?",
        answer:
          "Proposez le premier sein jusqu'à ce que le bébé le lâche ou réduise sa succion, puis proposez le second. À la tétée suivante, vous pouvez commencer par le dernier sein le moins vidé.",
      },
      {
        question: "Puis-je allaiter allongée ?",
        answer:
          "Oui, à condition que la mère et le bébé soient bien positionnés et que l'environnement soit sûr. Attention à ne pas vous endormir sur un canapé ou un fauteuil.",
      },
      {
        question: "Puis-je faire de l'activité physique ?",
        answer: "En général, oui, une fois autorisée et rétablie. Hydratez-vous et portez un soutien-gorge confortable.",
      },
      {
        question: "Puis-je me colorer les cheveux ?",
        answer:
          "De nombreux produits ont une faible absorption, mais il est recommandé de bien aérer la pièce, d'éviter tout contact avec le bébé et de suivre les indications du fabricant et de votre professionnel de santé.",
      },
      {
        question: "Puis-je passer un examen avec produit de contraste ?",
        answer: "De nombreux produits de contraste sont compatibles avec l'allaitement, mais vérifiez le type spécifique utilisé ; n'interrompez pas l'allaitement automatiquement.",
      },
      {
        question: "Mon bébé a dormi de longues heures. Dois-je le réveiller ?",
        answer:
          "Cela dépend de l'âge, du poids et de l'état clinique du bébé. Les nouveau-nés à risque nécessitent des conseils individualisés.",
      },
      {
        question: "Puis-je utiliser une coquille d'allaitement ou un bout de sein en silicone ?",
        answer:
          "Ils ne doivent pas être utilisés systématiquement. Ils peuvent aider dans des situations spécifiques, sous suivi, car ils peuvent aggraver un traumatisme du mamelon ou réduire le transfert de lait.",
      },
      {
        question: "Comment savoir si le tire-lait est bien réglé ?",
        answer: "Il ne doit ni faire mal, ni tirer excessivement sur l'aréole, ni blesser. Ajustez la téterelle et le niveau d'aspiration.",
      },
      {
        question: "Puis-je donner mon lait ?",
        answer:
          "Les femmes en bonne santé disposant d'une production excédentaire peuvent s'adresser à une banque de lait pour un dépistage et des conseils.",
      },
      {
        question: "Est-il possible de recommencer à produire du lait après avoir arrêté ?",
        answer:
          "Oui, la relactation est possible dans de nombreux cas, mais elle exige une stimulation fréquente et un suivi.",
      },
      {
        question: "Le lait infantile est-il interdit ?",
        answer:
          "Non. C'est un aliment indiqué dans des situations spécifiques. Il doit être préparé en toute sécurité et ne pas faire l'objet d'une promotion commerciale inappropriée.",
      },
      {
        question: "Le père ou l'accompagnant peut-il aider ?",
        answer:
          "Énormément : protéger le repos de la mère, s'occuper de la maison, apporter de l'eau et de la nourriture, aider à trouver les bonnes positions, observer les signes du bébé et éviter les remarques qui génèrent de la culpabilité.",
      },
      {
        question: "Les grands-parents peuvent-ils participer ?",
        answer:
          "Oui. Ils font partie intégrante du réseau de soutien. Des informations actualisées permettent de remplacer d'anciennes pratiques, comme donner des tisanes, par un soutien sûr.",
      },
      {
        question: "Quand s'adresser à une banque de lait ?",
        answer:
          "La douleur, une difficulté de prise du sein, un low milk supply, un excès de lait, un besoin d'expression du lait, la prématurité ou le souhait de faire un don sont des motifs fréquents.",
      },
    ],
  },
  "referencias-essenciais-e-fontes-consultadas": {
    title: "Références essentielles et sources consultées",
    blocks: [
      {
        type: "list",
        items: [
          "Organisation mondiale de la Santé. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Consultations mises à jour jusqu'en juillet 2026.",
          "Brésil. Ministère de la Santé. Guia alimentar para crianças brasileiras menores de 2 anos (guide alimentaire pour les enfants brésiliens de moins de 2 ans). Mise à jour disponible depuis 2025.",
          "Brésil. Ministère de la Santé. Aleitamento materno ; Salas de Apoio à Amamentação ; Doação de leite humano ; Linhas de Cuidado da Criança.",
          "Anvisa. Banco de leite humano: funcionamento, prevenção e controle de riscos. Brasília, 2008.",
          "Brésil. Loi n° 11.265/2006 et décret n° 9.579/2018 - Norma Brasileira de Comercialização de Alimentos para Lactentes e Crianças de Primeira Infância, bicos, chupetas e mamadeiras (norme brésilienne sur la commercialisation des aliments pour nourrissons et jeunes enfants, tétines, sucettes et biberons).",
          "Brésil. Loi n° 13.435/2017 - Mês do Aleitamento Materno (Mois de l'allaitement maternel).",
          "Brésil. Loi n° 13.872/2019 - allaitement pendant les concours de la fonction publique fédérale.",
          "Brésil. Loi n° 14.683/2023 - label Entreprise amie de l'allaitement.",
          "Brésil. Loi n° 15.222/2025 - congé maternité et allocation de maternité en cas d'hospitalisation prolongée.",
          "Conselho Federal de Enfermagem (Conseil fédéral des infirmiers). Résolution Cofen n° 736/2024 - Nursing Process.",
          "Conselho Federal de Enfermagem. Résolution Cofen n° 741/2024 - soins infirmiers dans les banques et postes de collecte de lait humain.",
          "Conselho Federal de Enfermagem. Avis n° 32/2025 des Câmaras Técnicas de Enfermagem (chambres techniques infirmières).",
          "Câmara Municipal de Foz do Iguaçu (conseil municipal). Projet de loi n° 318/2025 et son parcours législatif ; Requerimento n° 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Liens institutionnels" },
      {
        type: "list",
        items: [
          "Ministério da Saúde (ministère de la Santé) - Aleitamento Materno",
          "Rede Brasileira de Bancos de Leite Humano (réseau brésilien des banques de lait humain)",
          "Conselho Federal de Enfermagem (Conseil fédéral des infirmiers)",
          "Câmara Municipal de Foz do Iguaçu - SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mise à jour",
        text: "Les lois, les procédures municipales, les numéros de téléphone et les protocoles peuvent évoluer. Avant d'utiliser ce document comme référence institutionnelle, vérifiez la version en vigueur auprès des sources officielles et adaptez-le au protocole approuvé par votre service.",
      },
    ],
  },
};

export default fr;
