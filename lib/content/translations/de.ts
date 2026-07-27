import type { SectionTranslation } from "../types";

const de: Record<string, SectionTranslation> = {
  "recomendacoes-essenciais": {
    title: "Wesentliche Empfehlungen",
    subtitle: "Was alle Familien wissen sollten",
    blocks: [
      { type: "heading", level: 2, text: "Die zentrale Empfehlung" },
      {
        type: "paragraph",
        text: "Die Weltgesundheitsorganisation und das brasilianische Gesundheitsministerium empfehlen, das Stillen in der ersten Lebensstunde zu beginnen, dem Baby in den ersten sechs Lebensmonaten ausschließlich Muttermilch zu geben und danach, zusammen mit einer angemessenen Beikost, mindestens bis zum zweiten Lebensjahr weiterzustillen. „Ausschließlich“ bedeutet, dass das Baby weder Wasser, Tees, Säfte noch andere Milch oder Nahrung erhält – mit Ausnahme von Medikamenten, Vitaminen, Mineralstoffen oder einer Rehydrierungslösung, wenn diese von einer Fachkraft für Gesundheit angeordnet werden.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kernbotschaft",
        text: "Muttermilch enthält bereits ausreichend Wasser, auch an heißen Tagen. Bietet man einem unter sechs Monate alten, ausschließlich gestillten Baby Wasser oder Tee an, kann dies das Saugen verringern, die Milchproduktion senken und das Risiko einer Kontamination erhöhen.",
      },
      { type: "heading", level: 2, text: "Grundsätze, die das Stillen begünstigen" },
      {
        type: "list",
        items: [
          "Haut-zu-Haut-Kontakt unmittelbar nach der Geburt, sobald Mutter und Kind klinisch stabil sind.",
          "Rooming-in und die durchgehende Nähe von Mutter und Kind.",
          "Stillen nach Bedarf: die Brust anbieten, sobald das Baby Hungerzeichen zeigt – Tag und Nacht.",
          "Starre Zeitpläne und eine Begrenzung der Stilldauer vermeiden.",
          "Anlegen und Positionierung frühzeitig beobachten und korrigieren.",
          "Sauger, Schnuller und Flaschen vermeiden, besonders während der Stillanfangsphase, sofern nicht im Einzelfall anders angezeigt.",
          "Keine Zufütterung ohne klinische Beurteilung und ohne Plan zum Schutz der Milchproduktion geben.",
          "Respektvolle Unterstützung ohne Schuldzuweisung oder Zwang sicherstellen.",
        ],
      },
      { type: "heading", level: 2, text: "Vorteile" },
      {
        type: "table",
        columns: ["Für das Baby", "Für die Frau", "Für Familie und Gesellschaft"],
        rows: [
          [
            "Schutz vor Durchfallerkrankungen und Atemwegsinfektionen; angemessene Ernährung; Unterstützung der Entwicklung und ein geringeres späteres Risiko für Übergewicht.",
            "Unterstützt die Rückbildung der Gebärmutter; ist mit einem geringeren Risiko für Brust- und Eierstockkrebs sowie Typ-2-Diabetes verbunden; stärkt Bindung und Selbstvertrauen.",
            "Geringere Ausgaben für Ersatzprodukte; weniger krankheitsbedingte Fehlzeiten; geringere Umweltbelastung; Stärkung der öffentlichen Gesundheit.",
          ],
        ],
      },
    ],
  },
  "como-a-lactacao-funciona": {
    title: "Wie die Laktation funktioniert",
    subtitle: "Milchbildung, Milchspendereflex und Regulation",
    blocks: [
      { type: "heading", level: 2, text: "Die Brust bildet Milch als Reaktion auf die Entleerung" },
      {
        type: "paragraph",
        text: "Während der Schwangerschaft bereiten Hormone das Brustgewebe vor. Nach der Ausstoßung der Plazenta ermöglicht der Abfall des Progesterons eine gesteigerte Milchbildung. Prolaktin ist an der Synthese der Milch beteiligt; Oxytocin löst den Let-down reflex aus und lässt die Milch durch die Milchgänge fließen. Häufiges, wirksames Saugen und eine ausreichende Entleerung sind die wichtigsten Reize, um die Produktion aufrechtzuerhalten.",
      },
      { type: "heading", level: 2, text: "Colostrum, Übergangsmilch und reife Milch" },
      {
        type: "table",
        columns: ["Phase", "Merkmale", "Worauf hinzuweisen ist"],
        rows: [
          [
            "Colostrum",
            "Gelblich, dickflüssig, in geringer Menge und reich an Abwehrstoffen.",
            "Geringe Mengen sind zu erwarten; der Magen des Neugeborenen ist klein, und häufiges Stillen ist normal.",
          ],
          [
            "Übergang",
            "Nimmt in den ersten Tagen an Menge zu und verändert ihr Aussehen.",
            "Der „Milcheinschuss“ kann mit volleren, warmen Brüsten und Milchaustritt einhergehen.",
          ],
          [
            "Reife Milch",
            "Die Zusammensetzung verändert sich im Laufe des Tages und während einer Stillmahlzeit.",
            "Es ist nicht nötig, die Brust nach der Uhr zu wechseln; lassen Sie das Baby von selbst aufhören und bieten Sie danach die andere Brust an.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Was die Milchproduktion wirklich steigert" },
      {
        type: "list",
        items: [
          "Mehr wirksame Stillmahlzeiten und/oder Milchgewinnung, bei Bedarf auch nachts.",
          "Korrektur des Anlegens.",
          "Haut-zu-Haut-Kontakt.",
          "Behandlung von Schmerzen und Schwierigkeiten, die das Saugen beeinträchtigen.",
          "Möglichst viel Ruhe, Flüssigkeitszufuhr nach Durstgefühl und eine angemessene Ernährung.",
          "Unnötige Zufütterung vermeiden, die Stillmahlzeiten ersetzt.",
        ],
      },
    ],
  },
  "primeiras-horas-e-primeiros-dias": {
    title: "Die ersten Stunden und Tage",
    subtitle: "Vom Kreißsaal bis zur Ankunft zu Hause",
    blocks: [
      { type: "heading", level: 2, text: "Die erste Lebensstunde" },
      {
        type: "paragraph",
        text: "Besteht keine klinische Kontraindikation, hilft ununterbrochener Haut-zu-Haut-Kontakt dabei, Temperatur, Atmung und Blutzucker zu stabilisieren, fördert die Bindung und erhöht die Wahrscheinlichkeit eines frühen Stillbeginns. Routinemaßnahmen können so organisiert werden, dass Mutter und Kind nicht unnötig getrennt werden.",
      },
      { type: "heading", level: 2, text: "Normales Verhalten" },
      {
        type: "list",
        items: [
          "Sehr häufiges Stillen, teils gehäuft in „Clustern“ am Ende des Tages.",
          "Unterschiedlich langer Schlaf und die Notwendigkeit, das Neugeborene in bestimmten Situationen zu wecken.",
          "Wenig sichtbares Colostrum, das aber ausreicht, wenn die Milchübertragung angemessen ist.",
          "Der Stuhl verändert sich von dunklem Mekonium über grünliche zu gelblichen Tönen.",
          "Gewichtsverlust in den ersten Tagen, der klinisch begleitet werden muss.",
        ],
      },
      { type: "heading", level: 2, text: "Wann das Baby geweckt werden sollte" },
      {
        type: "paragraph",
        text: "Frühgeborene, kleine Neugeborene sowie Babys mit Jaundice, geringer Gewichtszunahme, übermäßiger Schläfrigkeit oder anderen Besonderheiten benötigen unter Umständen ein geplantes Stillangebot und eine Beurteilung der Stillmahlzeiten. Die Beratung muss individuell erfolgen. Solange das Stillen noch nicht gut etabliert ist, sollten grundsätzlich keine langen Abstände ohne Beurteilung klinischer Zeichen und der Gewichtsentwicklung zugelassen werden.",
      },
    ],
  },
  "pega-e-posicionamento": {
    title: "Anlegen und Positionierung",
    subtitle: "Komfort für die Mutter und Effizienz für das Baby",
    blocks: [
      { type: "heading", level: 2, text: "Richtige Positionierung" },
      {
        type: "list",
        items: [
          "Die Mutter sitzt bequem, Rücken und Arme sind abgestützt.",
          "Das Baby liegt der Brust zugewandt, mit dem Bauch zum Körper der Mutter.",
          "Kopf und Rumpf sind in einer Linie ausgerichtet; der Hals ist nicht verdreht.",
          "Der Körper des Babys liegt nah am Körper der Mutter und wird gut gestützt.",
          "Die Nase befindet sich auf Höhe der Brustwarze, bevor das Anlegen beginnt.",
        ],
      },
      { type: "heading", level: 2, text: "Zeichen für ein gutes Anlegen" },
      {
        type: "list",
        items: [
          "Der Mund ist weit geöffnet.",
          "Das Kinn berührt die Brust.",
          "Die Lippen sind nach außen gestülpt.",
          "Mehr Warzenhof ist oberhalb als unterhalb des Mundes sichtbar, sofern die Anatomie dies erkennen lässt.",
          "Die Wangen sind rund, ohne Grübchen.",
          "Langsames, tiefes Saugen mit Pausen und hörbarem Schlucken.",
          "Keine anhaltenden Schmerzen; zu Beginn kann kurz eine leichte Empfindlichkeit bestehen, aber kein starker Schmerz während der gesamten Stillmahlzeit.",
        ],
      },
      { type: "heading", level: 2, text: "Wie man dem Baby beim Anlegen helfen kann" },
      {
        type: "list",
        items: [
          "Führen Sie das Baby zur Brust, statt die Brust zum Baby zu führen.",
          "Berühren Sie die Oberlippe mit der Brustwarze und warten Sie, bis der Mund weit geöffnet ist.",
          "Richten Sie die Brustwarze zum Gaumen und ziehen Sie den Körper des Babys zügig heran.",
          "Achten Sie auf Wohlbefinden und Schlucken.",
          "Bei Schmerzen führen Sie behutsam den kleinen Finger in den Mundwinkel ein, um das Vakuum zu lösen, und versuchen Sie es erneut.",
        ],
      },
      { type: "heading", level: 2, text: "Hilfreiche Stillpositionen" },
      {
        type: "table",
        columns: ["Position", "Kann hilfreich sein, wenn ..."],
        rows: [
          ["Wiegehaltung", "Mutter und Baby bequem positioniert sind und das Anlegen bereits gut funktioniert."],
          ["Abgewandelte Wiegehaltung (Cross-Cradle-Hold)", "Eine bessere Kontrolle des Kopfes nötig ist, um das Anlegen zu korrigieren."],
          [
            "Rückenhaltung (Football-Hold)",
            "Nach einem Kaiserschnitt, bei großen Brüsten, Zwillingen oder wenn das Anlegen besser sichtbar sein muss.",
          ],
          [
            "Seitenlage",
            "Die Mutter Ruhe braucht; erfordert eine sichere Umgebung und Aufmerksamkeit hinsichtlich der Gefahr des Einschlafens.",
          ],
          [
            "Reitsitz",
            "Babys mit Reflux, Hypotonie oder Koordinationsschwierigkeiten betroffen sind, unter fachlicher Anleitung.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Schmerzen dürfen nicht als normal gelten",
        text: "Nipple fissures, Blutungen, eine Verformung der Brustwarze am Ende der Stillmahlzeit oder Schmerzen, die sich nach einer Anpassung nicht bessern, weisen auf die Notwendigkeit einer Beurteilung hin.",
      },
    ],
  },
  "como-saber-se-o-bebe-mama-o-suficiente": {
    title: "Wie erkennt man, ob das Baby genug trinkt",
    subtitle: "Beurteilung jenseits der reinen Stillzeit",
    blocks: [
      { type: "heading", level: 2, text: "Positive Anzeichen" },
      {
        type: "list",
        items: [
          "Stillmahlzeit mit tiefem Saugen und hörbarem Schlucken.",
          "Das Baby entspannt Hände und Körper nach der Mahlzeit.",
          "In den ersten Tagen zunehmende Urinmenge.",
          "Der Stuhl zeigt die erwartete Übergangsentwicklung.",
          "Gewichtszunahme, die anhand der Wachstumskurve verfolgt wird.",
          "Die Brüste fühlen sich nach dem Stillen weicher an.",
        ],
      },
      { type: "heading", level: 2, text: "Windeln und Stuhlgang" },
      {
        type: "paragraph",
        text: "Das Zählen der Windeln ist nur einer der Indikatoren. Nach dem Milcheinschuss sind in der Regel mehrere gut nasse Windeln pro Tag zu erwarten; die WHO nennt als Richtwert mindestens sechs nasse Wegwerfwindeln in 24 Stunden, zusammen mit angemessenem Wachstum und passendem Stuhlgang. Die Beurteilung von Gewicht, Allgemeinzustand und Stillmahlzeit ist unerlässlich.",
      },
      { type: "heading", level: 2, text: "Gewicht" },
      {
        type: "paragraph",
        text: "Die Beurteilung muss Gestationsalter, Geburtsgewicht, den anfänglichen Gewichtsverlust, die Erholung, die Wiegetechnik und die WHO-Wachstumskurve berücksichtigen. Aus einer einzelnen Gewichtsmessung darf nicht auf „zu schwache Milch“ geschlossen werden. Ein übermäßiger Gewichtsverlust, eine ausbleibende erwartete Erholung oder eine unzureichende Gewichtszunahme erfordern eine Beurteilung der Stillmahlzeit, der klinischen Bedingungen und der Stillhäufigkeit sowie, falls nötig, einen Plan für eine vorübergehende Zufütterung mit Schutz der Laktation.",
      },
    ],
  },
  "dificuldades-frequentes-e-manejo": {
    title: "Häufige Schwierigkeiten und ihr Management",
    subtitle: "Was zu tun ist und wann überwiesen werden sollte",
    blocks: [
      { type: "heading", level: 2, text: "Engorgement der Brust" },
      {
        type: "paragraph",
        text: "Die Brust wird sehr voll, hart und schmerzhaft; der Warzenhof kann gespannt sein, was das Anlegen erschwert. Dies tritt auf, wenn mehr Milch gebildet als entnommen wird, wenn Stillmahlzeiten unwirksam sind oder wenn die Abstände zwischen den Mahlzeiten zu lang sind.",
      },
      {
        type: "list",
        items: [
          "Häufig stillen und das Anlegen korrigieren.",
          "Vor der Stillmahlzeit sanft massieren und etwas Milch von Hand ausstreichen, um den Warzenhof weicher zu machen.",
          "Nach der Stillmahlzeit kurzzeitig Kälte zur Linderung auflegen, durch ein Tuch geschützt.",
          "Einen bequemen BH ohne einschnürenden Druck tragen.",
          "Kräftige Massagen, lang anhaltende Wärme und ein unnötig starkes Entleeren vermeiden, da diese das Ödem und die Milchproduktion noch verstärken können.",
        ],
      },
      { type: "heading", level: 2, text: "Nipple fissures und Verletzungen der Brustwarze" },
      {
        type: "paragraph",
        text: "Die häufigste Ursache ist ein unzureichendes Anlegen. Auch ein falsches Lösen des Babys von der Brust, schlecht eingestellte Milchpumpen, Dermatitis, Infektionen und Besonderheiten im Mundbereich können dazu beitragen.",
      },
      {
        type: "list",
        items: [
          "Die Ursache korrigieren.",
          "Den Bereich sauber und trocken halten; die Brüste nur beim Duschen waschen, ohne aggressive Seifen an der Brustwarze.",
          "Alkohol, selbstgemachte Salben, Lebensmittelschalen und Sonnenexposition als Behandlung vermeiden.",
          "Auf Infektionszeichen achten und die Notwendigkeit einer gezielten Behandlung prüfen.",
        ],
      },
      { type: "heading", level: 2, text: "Entzündete Milchgänge und Mastitis" },
      {
        type: "paragraph",
        text: "Lokalisierte Schmerzen, eine gerötete Stelle, ein Ödem und allgemeines Unwohlsein können Teil des Entzündungsspektrums einer Mastitis sein. Anhaltendes Fieber, eine klinische Verschlechterung oder ausbleibende Besserung erfordern eine ärztliche Beurteilung. Im Allgemeinen ist das Weiterstillen sicher und hilft, den Milchstau zu lösen; ein abruptes Abstillen kann die Situation verschlimmern.",
      },
      {
        type: "list",
        items: [
          "Ruhe, ausreichende Flüssigkeitszufuhr, eine mit dem Stillen vereinbare Schmerzbehandlung und lokale Kühlung können helfen.",
          "Vermeiden Sie starkes Drücken, das gewaltsame „Auflösen“ von Knoten oder eine aggressive Vibrationsmassage.",
          "Antibiotika nur bei entsprechender Indikation.",
          "Bei einer fluktuierenden Verhärtung, einer Verschlechterung oder anhaltenden Beschwerden an einen Breast abscess denken; dieser kann Bildgebung und Drainage erfordern.",
        ],
      },
      { type: "heading", level: 2, text: "Candidiasis (thrush): Vorsicht vor Überdiagnostik" },
      {
        type: "paragraph",
        text: "Brennende Schmerzen und eine glänzende Brustwarze werden häufig einer Candidiasis (thrush) zugeschrieben, können aber auch andere Ursachen haben, etwa ein Trauma, einen Vasospasm oder eine Dermatitis. Die Diagnose muss klinisch gestellt und die Behandlung gezielt eingesetzt werden. Antimykotika sollten nicht wiederholt ohne erneute Beurteilung angewendet werden.",
      },
      { type: "heading", level: 2, text: "Wahrgenommene oder tatsächliche Low milk supply" },
      {
        type: "paragraph",
        text: "Weichere Brüste, ausbleibendes Auslaufen von Milch und häufiges Stillen sind kein Beweis für eine Low milk supply. Die Beurteilung muss sich auf die Milchübertragung, die Urinausscheidung, den Stuhlgang, das Gewicht und den klinischen Zustand stützen.",
      },
      { type: "heading", level: 2, text: "Starker Let-down reflex und Milchüberschuss" },
      {
        type: "list",
        items: [
          "Eine zurückgelehnte Position kann den Milchfluss verringern.",
          "Pausen und Aufstoßen zulassen.",
          "Vermeiden Sie es, große Mengen nur zum „Entleeren“ abzupumpen.",
          "Gewichtszunahme, Unwohlsein, Verschlucken und Stuhlgang beobachten.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Achtung",
        text: "Tees, Malzbier, Maisbrei und sogenannte „Milchbildner“ ersetzen keine Beurteilung der Stillmahlzeit. Manche können schädlich sein oder mit Medikamenten interagieren.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Warnzeichen beim Neugeborenen",
        text: "Schwierigkeiten beim Aufwachen, anhaltende Verweigerung der Brust, verringerte Urinmenge, trockener Mund, schwaches Schreien, Fieber oder niedrige Körpertemperatur, ausgeprägte Jaundice, schnelle oder angestrengte Atmung, bläuliche Hautfarbe, grünes Erbrechen oder ein deutlicher Gewichtsverlust erfordern eine sofortige Beurteilung.",
      },
    ],
  },
  "ordenha-conservacao-e-oferta": {
    title: "Milchgewinnung, Aufbewahrung und Verabreichung",
    subtitle: "Milch sicher gewinnen",
    blocks: [
      { type: "heading", level: 2, text: "Wann Milch gewonnen werden sollte" },
      {
        type: "list",
        items: [
          "Um einen gespannten Warzenhof vor dem Anlegen zu entlasten.",
          "Wenn Mutter und Baby getrennt sind.",
          "Um die Produktion bei Frühgeborenen oder unwirksamem Saugen anzuregen.",
          "Um vor der Rückkehr zur Arbeit einen Vorrat anzulegen.",
          "Um Milch an eine Human milk bank zu spenden.",
        ],
      },
      { type: "heading", level: 2, text: "Manuelles Ausstreichen" },
      {
        type: "list",
        items: [
          "Waschen Sie sich die Hände und wählen Sie einen sauberen, ruhigen Ort.",
          "Massieren Sie die Brust sanft mit kreisenden Bewegungen.",
          "Setzen Sie den Daumen oberhalb und den Zeigefinger unterhalb des Warzenhofs an, sodass ein „C“ entsteht.",
          "Schieben Sie die Finger nach hinten in Richtung Brustkorb und drücken Sie rhythmisch zusammen, ohne über die Haut zu gleiten.",
          "Wechseln Sie die Ansatzpunkte rund um den Warzenhof und wechseln Sie die Brust.",
          "Sammeln Sie die Milch in einem geeigneten, beschrifteten Behälter.",
        ],
      },
      { type: "heading", level: 2, text: "Milchpumpe" },
      {
        type: "paragraph",
        text: "Die Milchpumpe darf keine Schmerzen verursachen. Die Trichtergröße muss der Brustwarze Bewegung ohne übermäßige Reibung ermöglichen. Beginnen Sie mit niedriger Saugstärke und steigern Sie sie bis zum maximal angenehmen Wert. Reinigen Sie die Teile gemäß den Herstellerangaben und den hygienischen Empfehlungen.",
      },
      { type: "heading", level: 2, text: "Aufbewahrung: Unterscheiden Sie zwischen Eigenbedarf und Spende" },
      {
        type: "callout",
        tone: "info",
        title: "Wichtig",
        text: "Die Regeln der Human milk bank für Spenden können strenger sein. Das Gesundheitsministerium empfiehlt, dass zur Spende bestimmte Milch bis zu 10 Tage eingefroren wird, bevor sie an die Human milk bank übergeben wird. Für den Eigenbedarf des Babys richten Sie sich nach dem Protokoll der betreuenden Einrichtung und den jeweiligen Lagerbedingungen.",
      },
      {
        type: "table",
        columns: ["Schritt", "Gute Praxis"],
        rows: [
          [
            "Behälter",
            "Weithalsglas mit Kunststoffdeckel, sterilisiert nach den Vorgaben der Human milk bank, oder ein spezieller Behälter für Muttermilch.",
          ],
          [
            "Beschriftung",
            "Name, Datum und Uhrzeit der Gewinnung; sofern zutreffend, Gestationsalter oder Identifikation des Babys.",
          ],
          ["Kühlung", "Sofort am dafür vorgesehenen Ort lagern; das Kühlschrankfach in der Tür vermeiden."],
          ["Auftauen", "Im Kühlschrank oder im Wasserbad mit lauwarmem Wasser, ohne zu kochen."],
          ["Erwärmen", "Niemals die Mikrowelle verwenden: Sie kann heiße Stellen erzeugen und die Bestandteile verändern."],
          [
            "Reste",
            "Aufgetaute Milch nicht erneut einfrieren; Reste, die mit Speichel in Kontakt kamen, gemäß den Vorgaben der Einrichtung entsorgen.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Wie die Milch verabreicht wird" },
      {
        type: "paragraph",
        text: "Es können ein kleiner Becher, ein Löffel oder ein dafür geeignetes Hilfsmittel verwendet werden. Eine Flasche ist nicht zwingend erforderlich und kann bei manchen Kindern die orale Dynamik beeinträchtigen. Die Wahl sollte Alter, Fähigkeiten, Sicherheit und fachliche Beratung berücksichtigen. Gießen Sie die Milch niemals in den Mund; lassen Sie das Baby in halb aufrechter Position lecken und schlürfen.",
      },
    ],
  },
  "alimentacao-medicamentos-e-habitos-maternos": {
    title: "Ernährung, Medikamente und mütterliche Gewohnheiten",
    subtitle: "Fürsorge ohne unnötige Verbote",
    blocks: [
      { type: "heading", level: 2, text: "Ernährung der Frau" },
      {
        type: "paragraph",
        text: "Es gibt keine allgemeingültige Diät für stillende Frauen. Die meisten Frauen können eine abwechslungsreiche Ernährung beibehalten, die auf naturbelassenen und minimal verarbeiteten Lebensmitteln basiert. Trinken Sie Wasser nach Durstgefühl. Ernährungseinschränkungen ohne medizinische Indikation können zu Mangelerscheinungen, Schuldgefühlen und einem vorzeitigen Abstillen führen.",
      },
      { type: "heading", level: 2, text: "Koffein, Alkohol und Tabak" },
      {
        type: "list",
        items: [
          "Koffein: in Maßen konsumieren und auf Reizbarkeit oder Schlafveränderungen beim Baby achten; dabei auch Kaffee, Tee, Energydrinks und Schokolade berücksichtigen.",
          "Alkohol: Die sicherste Option ist der Verzicht. Strategien, die auf Wartezeiten beruhen, sollten mit einer Fachkraft besprochen werden, denn „abpumpen und wegschütten“ beschleunigt den Alkoholabbau nicht.",
          "Tabak und E-Zigaretten: vermeiden. Kann die Frau nicht sofort aufhören, sollte sie Unterstützung zur Entwöhnung erhalten und die Passivrauch-Exposition verringern; nicht in der Nähe des Babys oder in geschlossenen Räumen rauchen.",
          "Illegale Drogen: können das Stillen vorübergehend kontraindizieren und erfordern eine dringende Beurteilung sowie Unterstützung ohne Verurteilung.",
        ],
      },
      { type: "heading", level: 2, text: "Medikamente" },
      {
        type: "paragraph",
        text: "Ein Großteil der Medikamente ist mit dem Stillen vereinbar. Das Abstillen ohne Notwendigkeit kann ein größeres Risiko bergen als die Fortsetzung des Stillens. Die Entscheidung muss Alter und Gesundheitszustand des Babys, Dosis, Verabreichungsweg, Dauer, den Übergang in die Milch sowie mögliche Alternativen berücksichtigen. Konsultieren Sie Fachquellen und eine qualifizierte Fachkraft.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Niemals eigenmächtig handeln",
        text: "Setzen Sie weder eine notwendige Medikation noch das Stillen ohne fachliche Beratung ab. Auch Phytotherapeutika, „natürliche“ Mittel und Nahrungsergänzungsmittel können Wirkungen und Wechselwirkungen haben.",
      },
    ],
  },
  "situacoes-especiais-e-contraindicacoes": {
    title: "Besondere Situationen und Kontraindikationen",
    subtitle: "Wann gestillt, pausiert oder ersetzt werden sollte",
    blocks: [
      { type: "heading", level: 2, text: "Nur wenige Situationen sind eine vollständige Kontraindikation" },
      {
        type: "paragraph",
        text: "In Brasilien sollten Mütter, die mit HIV leben, sowie Mütter mit HTLV-1 oder HTLV-2 aufgrund des Übertragungsrisikos nicht stillen. Das öffentliche Gesundheitssystem SUS muss Beratung, bei Bedarf eine Laktationshemmung und Säuglingsanfangsnahrung gewährleisten. Cross-nursing – das Stillen des Babys durch eine andere Frau – wird wegen des Risikos der Übertragung von Infektionen nicht empfohlen.",
      },
      { type: "heading", level: 2, text: "Situationen, die eine individuelle Beurteilung erfordern" },
      {
        type: "table",
        columns: ["Zustand", "Allgemeine Empfehlung"],
        rows: [
          ["Hepatitis B", "Im Allgemeinen ist Stillen erlaubt, wenn das Neugeborene eine angemessene Immunprophylaxe erhält."],
          ["Hepatitis C", "Im Allgemeinen erlaubt; Blutungen an der Brustwarze und besondere Situationen sind gesondert zu beurteilen."],
          [
            "Tuberkulose",
            "Häufig kann bei entsprechenden Kontroll- und Behandlungsmaßnahmen weiter Muttermilch gegeben werden; das Vorgehen hängt von der Ansteckungsfähigkeit ab.",
          ],
          ["Herpes", "Keine Brust mit aktiver Läsion anbieten; Läsionen an anderen Körperstellen abdecken und Hygiene einhalten."],
          [
            "COVID-19/Influenza",
            "Im Allgemeinen weiterstillen, mit Handhygiene und den angezeigten Atemschutzmaßnahmen.",
          ],
          [
            "Einsatz von Radiopharmaka oder bestimmten Medikamenten",
            "Kann eine vorübergehende Pause oder eine Kontraindikation erfordern; fachkundige Quellen konsultieren.",
          ],
          ["Klassische Galactosemia beim Baby", "Kontraindikation für Muttermilch."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Sicherheit",
        text: "Diese Tabelle ist eine Zusammenfassung. Das Vorgehen hängt von der Diagnose, der Behandlung und dem Zustand des Babys ab. Suchen Sie eine fachärztliche Beurteilung auf.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Selbstbestimmung und Fürsorge",
        text: "Stillen zu fördern bedeutet nicht, es zu erzwingen. Auch Frauen, die nicht stillen können oder möchten, verdienen eine sichere Beratung, Zugang zu geeigneter Ernährung und eine wertungsfreie Betreuung.",
      },
    ],
  },
  "prematuridade-internacao-e-metodo-canguru": {
    title: "Frühgeburtlichkeit, Krankenhausaufenthalt und Kangaroo Mother Care",
    subtitle: "Die Milch und die Bindung schützen",
    blocks: [
      { type: "heading", level: 2, text: "Muttermilch ist besonders wichtig" },
      {
        type: "paragraph",
        text: "Frühgeborene und Neugeborene mit niedrigem Geburtsgewicht profitieren von der Milch der eigenen Mutter und, wenn diese nicht verfügbar ist, von pasteurisierter Spendermilch gemäß Indikation. Häufig ist direktes Saugen zunächst noch nicht möglich, sodass die Milchproduktion durch Abpumpen begonnen und aufrechterhalten werden muss.",
      },
      {
        type: "list",
        items: [
          "So früh wie möglich nach der Geburt mit der Stimulation beginnen, entsprechend dem Zustand der Mutter.",
          "So häufig abpumpen wie ein Neugeborenes stillen würde.",
          "Haut-zu-Haut-Kontakt und Kangaroo Mother Care durchführen, sobald freigegeben.",
          "Mengen dokumentieren, ohne das Abpumpen zu einer Quelle von Schuldgefühlen werden zu lassen.",
          "Unterstützung beim Übergang von Sonde oder Becher zur Brust erhalten, entsprechend dem Reifegrad.",
        ],
      },
      { type: "heading", level: 2, text: "Mutterschaftsurlaub bei längerem Krankenhausaufenthalt" },
      {
        type: "paragraph",
        text: "Das Gesetz Nr. 15.222/2025 ermöglicht es nun, bei bestimmten geburtsbedingten Krankenhausaufenthalten von mehr als zwei Wochen den Mutterschaftsurlaub um bis zu 120 Tage nach der Entlassung von Mutter und Neugeborenem zu verlängern, abzüglich des Zeitraums vor der Geburt, gemäß den gesetzlichen Voraussetzungen.",
      },
    ],
  },
  "introducao-alimentar-e-continuidade": {
    title: "Beikosteinführung und fortgesetztes Stillen",
    subtitle: "Mit sechs Monaten ergänzt Nahrung – sie ersetzt nicht sofort",
    blocks: [
      { type: "heading", level: 2, text: "Wann begonnen werden sollte" },
      {
        type: "paragraph",
        text: "Die Beikost sollte etwa mit dem vollendeten sechsten Lebensmonat beginnen, wenn das Kind die entsprechende Reife und den ernährungsphysiologischen Bedarf zeigt. Die Muttermilch bleibt weiterhin wichtig und kann je nach Tagesablauf und Vorliebe vor oder nach den Mahlzeiten angeboten werden.",
      },
      {
        type: "list",
        items: [
          "Echte, abwechslungsreiche Nahrung anbieten, die zur Kultur der Familie passt.",
          "Die Konsistenz schrittweise steigern; das routinemäßige Pürieren oder Passieren vermeiden.",
          "Ab Beginn der Beikost Wasser im Becher anbieten.",
          "Zucker und stark verarbeitete Lebensmittel in den ersten Jahren vermeiden.",
          "Hunger- und Sättigungszeichen respektieren; nicht zum Essen zwingen.",
          "Bis zum zweiten Lebensjahr oder länger weiterstillen.",
        ],
      },
    ],
  },
  "retorno-ao-trabalho-e-desmame": {
    title: "Rückkehr zur Arbeit und Abstillen",
    subtitle: "Planung, Rechte und respektierte Entscheidungen",
    blocks: [
      { type: "heading", level: 2, text: "Vor der Rückkehr planen" },
      {
        type: "list",
        items: [
          "Sprechen Sie mit Ihrem Unterstützungsnetzwerk und Ihrem Arbeitsplatz.",
          "Beginnen Sie einige Wochen vorher mit dem Abpumpen, ohne einen übermäßigen Vorrat anzulegen.",
          "Testen Sie Behälter und die Art der Verabreichung mit einer anderen Betreuungsperson.",
          "Stillen Sie vor dem Weggehen und beim Wiedersehen mit dem Baby.",
          "Pumpen Sie bei der Arbeit in Abständen ab, die zu Ihrem Komfort und dem Alter des Babys passen.",
          "Transportieren Sie die Milch in einer geeigneten Kühltasche und lagern Sie sie korrekt.",
        ],
      },
      { type: "heading", level: 2, text: "Abstillen" },
      {
        type: "paragraph",
        text: "Das Abstillen kann natürlich, allmählich oder aufgrund familiärer Umstände notwendig sein. Es sollte ohne Schuldgefühle und, wenn möglich, schrittweise erfolgen, um Leid und das Risiko eines Engorgement zu verringern. Lassen Sie jeweils eine Stillmahlzeit nach der anderen weg, ersetzen Sie sie durch Nähe und altersgerechte Nahrung und beobachten Sie die Reaktionen des Kindes sowie der Brüste.",
      },
      {
        type: "table",
        columns: ["Situation", "Erstes Vorgehen"],
        rows: [
          [
            "Baby stillt sehr häufig",
            "Hunger-, Anlege- und Schluckzeichen beobachten; gehäufte Stillmahlzeiten können normal sein.",
          ],
          [
            "Geringe Gewichtszunahme",
            "Vollständige klinische Beurteilung, beobachtete Stillmahlzeit, Plan zur Verbesserung der Milchübertragung und frühzeitige Nachkontrolle.",
          ],
          ["Rückkehr zur Arbeit", "Regelmäßiges Abpumpen und die Lagerung planen."],
          [
            "Relactation",
            "Häufige Stimulation, Haut-zu-Haut-Kontakt, Anlegen an die Brust und fachkundige Begleitung.",
          ],
        ],
      },
    ],
  },
  "mitos-e-verdades": {
    title: "Mythen und Fakten",
    subtitle: "Informationen, um Angst und Schuldgefühle zu verringern",
    blocks: [
      {
        type: "table",
        columns: ["Aussage", "Richtigstellung"],
        rows: [
          [
            "„Meine Milch ist zu schwach.“",
            "Mythos. Das Aussehen variiert, und hellere Milch ist nicht schwächer. Beurteilen Sie die Nahrungsaufnahme anhand von Schlucken, Windeln, Gewicht und klinischem Zustand.",
          ],
          [
            "„Kleine Brüste produzieren wenig Milch.“",
            "Mythos. Die Größe hängt eher mit dem Fettanteil zusammen als mit der Produktionskapazität.",
          ],
          [
            "„Ein Baby, das ständig stillt, ist nicht satt.“",
            "Nicht immer. Häufige und gehäufte Stillmahlzeiten können normal sein, besonders in Wachstumsschüben.",
          ],
          [
            "„Ich muss die Brustwarze vor jeder Stillmahlzeit waschen.“",
            "Mythos. Die übliche Hygiene beim Duschen reicht aus; übermäßiges Waschen trocknet aus und verursacht Verletzungen.",
          ],
          [
            "„Eine Nipple fissure muss der Sonne ausgesetzt werden.“",
            "Das ist keine Empfehlung erster Wahl. Entscheidend ist, das Anlegen und die Ursache zu korrigieren.",
          ],
          [
            "„Bei Mastitis muss man abstillen.“",
            "Meist falsch. In den meisten Fällen ist das Weiterstillen sicher; die klinische Beurteilung zeigt mögliche Ausnahmen auf.",
          ],
          [
            "„Malzbier steigert die Milchmenge.“",
            "Mythos und keine empfohlene Praxis. Alkohol geht in die Milch über und kann schaden.",
          ],
          [
            "„Nach sechs Monaten wird die Milch zu Wasser.“",
            "Mythos. Sie liefert weiterhin Energie, Nährstoffe und immunologischen Schutz.",
          ],
          [
            "„Mit Silikonimplantaten kann man nicht stillen.“",
            "Nicht immer. Viele Frauen stillen erfolgreich; Operationstechnik und Empfindsamkeit können eine Rolle spielen.",
          ],
          [
            "„Der Schnuller hat keinen Einfluss.“",
            "Er kann in manchen Fällen die Saughäufigkeit und die Etablierung des Stillens beeinflussen; dies sollte individuell besprochen werden.",
          ],
          [
            "„Säuglingsanfangsnahrung lässt das Baby besser schlafen.“",
            "Sie sollte nicht als Schlafstrategie eingesetzt werden. Der kindliche Schlaf hängt von vielen Faktoren ab, und Säuglingsanfangsnahrung hat spezifische Indikationen.",
          ],
          [
            "„Weil ich nervös war, ist meine Milch versiegt.“",
            "Stress kann den Let-down reflex vorübergehend erschweren, lässt die Milch aber normalerweise nicht plötzlich „versiegen“. Unterstützung und Stimulation helfen.",
          ],
          [
            "„Man muss die Brust alle zehn Minuten wechseln.“",
            "Mythos. Das Baby kann eine Brust beenden und danach die andere erhalten; entscheidend ist eine wirksame Milchübertragung.",
          ],
          [
            "„Stillen in der Öffentlichkeit ist unangemessen.“",
            "Mythos. Stillen ist ein Bedürfnis des Kindes und muss respektiert werden.",
          ],
          [
            "„Wer zur Arbeit zurückkehrt, muss abstillen.“",
            "Mythos. Abpumpen, Lagerung, gesetzliche Stillpausen und Unterstützung können das Stillen aufrechterhalten.",
          ],
        ],
      },
    ],
  },
  "direitos-e-legislacao-brasileira": {
    title: "Rechte und brasilianische Gesetzgebung",
    subtitle: "Schutz des Kindes, der Frau und des Stillens",
    blocks: [
      { type: "heading", level: 2, text: "Wichtigste Garantien" },
      { type: "heading", level: 3, text: "Stillen im öffentlichen Raum" },
      {
        type: "paragraph",
        text: "Eine Frau muss sich nicht verstecken, um ihr Baby zu füttern. Bundesstaaten und Gemeinden können eigene Vorschriften gegen Diskriminierung haben. Auch ohne ein spezifisches örtliches Gesetz kann es die Würde, den Mutterschutz und die Rechte des Kindes verletzen, eine Frau am Stillen zu hindern oder sie deswegen zu demütigen.",
      },
      { type: "heading", level: 3, text: "Stillräume" },
      {
        type: "paragraph",
        text: "Es handelt sich um private, saubere und sichere Räume in Unternehmen oder Institutionen, die zum Abpumpen und Aufbewahren der Milch während der Arbeitszeit dienen. Sie sind nicht dazu gedacht, die Frau zu isolieren oder das Recht auf Stillpausen zu ersetzen.",
      },
      {
        type: "table",
        columns: ["Regelung", "Zugehöriger Schutz"],
        rows: [
          [
            "Bundesverfassung und Arbeitsgesetzbuch (CLT)",
            "Mutterschutz, Mutterschaftsurlaub und Kündigungsschutz, je nach Beschäftigungsverhältnis und Voraussetzungen.",
          ],
          [
            "CLT, Art. 396",
            "Zwei besondere halbstündige Pausen während der Arbeitszeit zum Stillen, bis das Kind sechs Monate alt ist; der Zeitraum kann verlängert werden, wenn es die Gesundheit erfordert. Die Zeiten sind individuell zu vereinbaren.",
          ],
          [
            "Gesetz Nr. 11.770/2008",
            "Programm „Empresa Cidadã“: Möglichkeit der Verlängerung des Mutterschaftsurlaubs auf 180 Tage in teilnehmenden Unternehmen sowie entsprechende Regeln für den öffentlichen Dienst.",
          ],
          [
            "Gesetz Nr. 11.265/2006 und Dekret Nr. 9.579/2018",
            "NBCAL: regelt die kommerzielle Vermarktung von Säuglingsanfangsnahrung, Milchprodukten, Säuglingsnahrung, Flaschen, Saugern und Schnullern.",
          ],
          ["Gesetz Nr. 13.435/2017", "Erklärt den August zum Monat des Stillens – „Goldener August“."],
          [
            "Gesetz Nr. 13.872/2019",
            "Gewährleistet das Stillen während föderaler öffentlicher Auswahlverfahren für Kinder bis zu sechs Monaten, mit Regeln zur Beantragung und zum Zeitausgleich.",
          ],
          ["Gesetz Nr. 14.683/2023", "Führt das Gütesiegel „Stillfreundliches Unternehmen“ ein."],
          [
            "Gesetz Nr. 15.222/2025",
            "Erweitert den Schutz von Mutterschaftsurlaub und Mutterschaftsgeld bei längeren geburtsbedingten Krankenhausaufenthalten.",
          ],
          [
            "Cofen-Beschluss Nr. 741/2024",
            "Regelt die pflegerische Versorgung in Human milk banks und Milchsammelstellen.",
          ],
          [
            "Cofen-Beschluss Nr. 736/2024",
            "Regelt die Umsetzung des Nursing Process in der Versorgungspraxis.",
          ],
        ],
      },
    ],
  },
  "atuacao-da-enfermagem-e-da-atencao-primaria": {
    title: "Die Rolle der Pflege und der Primärversorgung",
    subtitle: "Aufnehmen, beurteilen, eingreifen und begleiten",
    blocks: [
      { type: "heading", level: 2, text: "Pflegekonsultation" },
      {
        type: "paragraph",
        text: "Die Konsultation muss dem Nursing Process folgen: Beurteilung, Pflegediagnose, Planung, Umsetzung und Verlaufsbeobachtung. Die Dokumentation muss klar, datiert und individuell sein und Anleitungen, die Reaktion von Mutter und Baby sowie Warnzeichen enthalten.",
      },
      { type: "heading", level: 3, text: "Beurteilungsleitfaden" },
      {
        type: "table",
        columns: ["Bereich", "Was zu beurteilen ist"],
        rows: [
          [
            "Anamnese",
            "Geburt, Gestationsalter, Gewicht, Krankenhausaufenthalte, Erkrankungen, Medikamente, Brustoperationen, frühere Erfahrungen und Ziele der Familie.",
          ],
          [
            "Stillmahlzeit",
            "Position, Anlegen, Rhythmus, Schlucken, spontane Dauer, Schmerzen, Form der Brustwarze nach dem Stillen.",
          ],
          [
            "Baby",
            "Allgemeinzustand, Flüssigkeitshaushalt, Jaundice, Mund, Muskeltonus, Saugen, Windeln, Stuhlgang und Gewichtskurve.",
          ],
          ["Brüste", "Form, Ödem, Verletzungen, Schmerzen, Rötung, Verhärtungen, Sekrete und Infektionszeichen."],
          [
            "Kontext",
            "Unterstützungsnetzwerk, psychische Gesundheit, Schlaf, Ernährung, Arbeit, Gewalt, kulturelle und sprachliche Barrieren.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Mögliche Maßnahmen" },
      {
        type: "list",
        items: [
          "Beratung und praktische Demonstration.",
          "Korrektur von Anlegen und Position.",
          "Manuelles Ausstreichen und ein Stimulationsplan.",
          "Management von Engorgement und Verletzungen.",
          "Überwachung von Gewicht und Flüssigkeitshaushalt.",
          "Überweisung an Ärztin/Arzt, Zahnmedizin, Logopädie, Ernährungsberatung, Psychologie oder eine Human milk bank je nach Bedarf.",
          "Gemeinsam abgestimmter Zufütterungsplan, wenn indiziert.",
          "Hausbesuch und frühzeitige Nachkontrolle.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Grenzen der fachlichen Zuständigkeit",
        text: "Institutionelle Protokolle, die berufsrechtlichen Vorschriften und die klinische Beurteilung müssen Verordnungen und Maßnahmen leiten. Eine fachliche Stellungnahme des Cofen aus dem Jahr 2025 stellte fest, dass ein Material des Coren-PR zum Stillmanagement noch nicht die Anforderungen erfüllte, um als nationales Protokoll anerkannt zu werden; es darf daher nicht als offiziell zugelassenes Protokoll dargestellt werden.",
      },
    ],
  },
  "foz-do-iguacu-e-regiao-de-fronteira": {
    title: "Foz do Iguaçu und die Grenzregion",
    subtitle: "Lokales Netzwerk, Vielfalt und interkulturelle Versorgung",
    blocks: [
      { type: "heading", level: 2, text: "Primärversorgung als erste Anlaufstelle" },
      {
        type: "paragraph",
        text: "In Foz do Iguaçu sollten schwangere Frauen, Postpartum women und Kinder die zuständige Basisgesundheitseinheit (UBS) für die Schwangerenvorsorge, die Nachsorgeuntersuchung im Wochenbett, die Well-child care, die Gewichtsbeurteilung, die Anlegeberatung, Impfungen und Überweisungen aufsuchen. Kontaktdaten, Öffnungszeiten und zuständige Einheiten können sich ändern; bestätigen Sie diese über die offiziellen Kanäle der städtischen Gesundheitsbehörde.",
      },
      { type: "heading", level: 3, text: "Besonderheiten des Dreiländerecks" },
      {
        type: "list",
        items: [
          "Bewegung zwischen Brasilien, Paraguay und Argentinien, mit möglichen Schwierigkeiten bei der Kontinuität der Versorgung.",
          "Sprachliche und kulturelle Vielfalt, einschließlich Familien, die Spanisch, Guaraní, Arabisch und andere Sprachen sprechen.",
          "Unterschiede bei Dokumenten, Versicherungsschutz und Geburtsort.",
          "Unterschiedliche familiäre Überzeugungen zu Colostrum, Tees, Zeitplänen, Körperexposition und der Rolle der Großeltern.",
          "Notwendigkeit einer einfachen Kommunikation, eines Dolmetschers wenn möglich, und der Achtung von Entscheidungen, ohne die Sicherheit zu vernachlässigen.",
        ],
      },
      { type: "heading", level: 3, text: "Wie interkulturelle Beratung durchgeführt wird" },
      {
        type: "list",
        items: [
          "Fragen Sie, was die Familie bereits weiß und glaubt.",
          "Ermitteln Sie, wer an den Entscheidungen beteiligt ist.",
          "Erklären Sie den Grund für jede Empfehlung, ohne Überzeugungen lächerlich zu machen.",
          "Verhandeln Sie sichere Alternativen.",
          "Geben Sie schriftliche Informationen in der verstandenen Sprache.",
          "Vereinbaren Sie, wo und wann die Nachkontrolle stattfindet.",
        ],
      },
      { type: "heading", level: 3, text: "Kommunaler Gesetzentwurf Nr. 318/2025" },
      {
        type: "paragraph",
        text: "Der Entwurf schlug Richtlinien zur Förderung des Stillens vor, darunter eine mögliche kostenlose Beförderung für stillende Frauen und Spenderinnen, Stillräume, Aufklärungskampagnen und Partnerschaften. Der offizielle Verfahrensstand zeigt jedoch, dass der Entwurf von der Urheberin zurückgezogen und im Februar 2026 zu den Akten gelegt wurde. Diese Maßnahmen dürfen daher nicht als geltendes kommunales Gesetz dargestellt werden.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Korrekter rechtlicher Status",
        text: "Ein Gesetzentwurf ist kein Gesetz. Der Text kann öffentliche Politik inspirieren, begründet aber keinen einklagbaren Anspruch, solange er nicht verabschiedet, sanktioniert und veröffentlicht wurde.",
      },
      { type: "heading", level: 3, text: "Spätere gesetzgeberische Initiativen" },
      {
        type: "paragraph",
        text: "Im Jahr 2026 wurde ein kommunaler Vorschlag eingebracht, wonach öffentliche und private Kindertagesstätten geeignete Strukturen für die Annahme und Lagerung von Muttermilch bereitstellen müssten. Das Vorliegen eines Vorschlags bedeutet nicht, dass er in Kraft ist; der aktuelle Stand muss vor jeder Veröffentlichung im kommunalen Gesetzgebungssystem geprüft werden.",
      },
      { type: "heading", level: 3, text: "Vorgeschlagener Ablauf für die UBS" },
      {
        type: "list",
        items: [
          "Wertungsfrei aufnehmen und Dringlichkeit erkennen.",
          "Die Stillmahlzeit möglichst beobachten.",
          "Mutter und Baby beurteilen, einschließlich Gewicht und Flüssigkeitshaushalt.",
          "Erste Maßnahmen durchführen und dokumentieren.",
          "Je nach Risiko eine Nachkontrolle innerhalb von 24 bis 72 Stunden festlegen.",
          "Bei Bedarf an die Entbindungsstation, die Pädiatrie, eine Human milk bank oder die Notaufnahme überweisen.",
          "Die Versorgungskontinuität für Familien sicherstellen, die die Grenze überqueren.",
        ],
      },
    ],
  },
  "checklists-e-planos-praticos": {
    title: "Checklisten und praktische Pläne",
    subtitle: "Werkzeuge für den Alltag",
    blocks: [
      { type: "heading", level: 2, text: "Checkliste zur Entlassung" },
      {
        type: "list",
        items: [
          "Die Mutter kann das Baby positionieren und ein gutes Anlegen erkennen.",
          "Sie kann Hunger- und Sättigungszeichen erkennen.",
          "Sie wurde über das Stillen nach Bedarf informiert.",
          "Sie weiß, welche Anzeichen ärztliche Hilfe erfordern.",
          "Ein Nachsorgetermin für Mutter und Baby ist vereinbart.",
          "Sie weiß, wo das Baby gewogen werden kann und wo sie Unterstützung findet.",
          "Sie wurde zu Medikamenten und Ernährung beraten.",
          "Falls zugefüttert wird, liegt ein schriftlicher Plan mit Nachkontrolle vor.",
        ],
      },
      { type: "heading", level: 3, text: "Stillplan" },
      {
        type: "table",
        caption: "Fragen für das Gespräch mit der Familie und zur Dokumentation der Antworten",
        columns: ["Frage", "Antwort der Familie"],
        rows: [
          ["Wer kann in den ersten Wochen unterstützen?", ""],
          ["Wo kann fachliche Hilfe gefunden werden?", ""],
          ["Welche Anzeichen bedeuten, dass wir Hilfe suchen müssen?", ""],
          ["Wie wird die Rückkehr zur Arbeit gestaltet?", ""],
          ["Gibt es Überzeugungen oder Sorgen, die das Team kennen sollte?", ""],
          ["Was sind unsere Ziele und Grenzen?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Kurzes Beobachtungstagebuch" },
      {
        type: "table",
        caption: "Leere Vorlage, die die Familie ausfüllen und zu den Terminen mitbringen kann",
        columns: ["Datum", "Stillmahlzeiten/Abpumpen", "Nasse Windeln", "Stuhlgang", "Schmerzen (0-10)", "Anmerkungen"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Alarmzeichen" },
      {
        type: "list",
        items: [
          "Baby ist sehr schläfrig oder schwer zu wecken.",
          "Wenig oder kein Urin.",
          "Fieber, Unterkühlung oder Atembeschwerden.",
          "Deutlicher Gewichtsverlust oder klinische Verschlechterung.",
          "Ausgeprägte oder fortschreitende Jaundice.",
          "Mutter mit hohem Fieber, Ohnmacht, Atemnot, starken Schmerzen, erheblicher Blutung oder Anzeichen eines Breast abscess.",
        ],
      },
    ],
  },
  "perguntas-frequentes": {
    title: "Häufig gestellte Fragen",
    subtitle: "Klare Antworten auf häufige Fragen",
    blocks: [],
    faqItems: [
      {
        question: "Wie lange sollte eine Stillmahlzeit dauern?",
        answer:
          "Es gibt keine feste Dauer. Achten Sie auf Saugen und Schlucken; lassen Sie das Baby von selbst aufhören.",
      },
      {
        question: "Muss ich beide Brüste anbieten?",
        answer:
          "Bieten Sie zunächst die erste Brust an, bis das Baby loslässt oder das Saugen nachlässt; danach bieten Sie die zweite an. Bei der nächsten Mahlzeit können Sie mit der zuletzt weniger entleerten Brust beginnen.",
      },
      {
        question: "Kann ich im Liegen stillen?",
        answer:
          "Ja, sofern Mutter und Baby gut positioniert sind und die Umgebung sicher ist. Achten Sie darauf, nicht auf Sofas oder Sesseln einzuschlafen.",
      },
      {
        question: "Darf ich körperlich aktiv sein?",
        answer: "Im Allgemeinen ja, nach ärztlicher Freigabe und Erholung. Trinken Sie ausreichend und tragen Sie einen bequemen Stütz-BH.",
      },
      {
        question: "Darf ich meine Haare färben?",
        answer:
          "Viele Produkte werden nur gering aufgenommen, dennoch werden gute Belüftung, das Vermeiden von Kontakt mit dem Baby sowie das Befolgen der Hersteller- und Fachkräfteempfehlungen empfohlen.",
      },
      {
        question: "Darf ich eine Untersuchung mit Kontrastmittel durchführen lassen?",
        answer: "Viele Kontrastmittel sind mit dem Stillen vereinbar, aber lassen Sie das jeweilige Mittel bestätigen; stillen Sie nicht automatisch ab.",
      },
      {
        question: "Mein Baby hat viele Stunden geschlafen. Soll ich es wecken?",
        answer:
          "Das hängt von Alter, Gewicht und klinischem Zustand ab. Neugeborene mit Risikofaktoren benötigen eine individuelle Beratung.",
      },
      {
        question: "Darf ich eine Brustschale oder ein Silikon-Stillhütchen verwenden?",
        answer:
          "Sie sollten nicht routinemäßig verwendet werden. In bestimmten Situationen können sie mit fachlicher Begleitung hilfreich sein, da sie Verletzungen verschlimmern oder die Milchübertragung verringern können.",
      },
      {
        question: "Woran erkenne ich, ob die Milchpumpe richtig eingestellt ist?",
        answer: "Sie darf nicht schmerzen, nicht zu viel Warzenhof einziehen und keine Verletzungen verursachen. Passen Sie Trichter und Saugstärke an.",
      },
      {
        question: "Kann ich Milch spenden?",
        answer:
          "Gesunde Frauen mit einem Milchüberschuss können sich an eine Human milk bank wenden, um sich untersuchen und beraten zu lassen.",
      },
      {
        question: "Ist es möglich, nach dem Abstillen wieder Milch zu produzieren?",
        answer:
          "Ja, Relactation ist in vielen Fällen möglich, erfordert aber häufige Stimulation und fachliche Begleitung.",
      },
      {
        question: "Ist Säuglingsanfangsnahrung verboten?",
        answer:
          "Nein. Sie ist eine Nahrung, die in bestimmten Situationen angezeigt ist. Sie muss sicher zubereitet und darf nicht unangemessen kommerziell beworben werden.",
      },
      {
        question: "Kann der Vater oder eine Begleitperson helfen?",
        answer:
          "Sehr viel: die Ruhezeiten schützen, sich um den Haushalt kümmern, Wasser und Essen bringen, bei der Positionierung unterstützen, auf Anzeichen achten und gut gemeinte, aber schuldauslösende Ratschläge vermeiden.",
      },
      {
        question: "Können Großeltern mithelfen?",
        answer:
          "Ja. Sie sind ein wichtiger Teil des Unterstützungsnetzwerks. Aktuelle Informationen helfen dabei, alte Gewohnheiten wie das Anbieten von Tee durch sichere Unterstützung zu ersetzen.",
      },
      {
        question: "Wann sollte man eine Human milk bank aufsuchen?",
        answer:
          "Schmerzen, Schwierigkeiten beim Anlegen, Low milk supply, Milchüberschuss, die Notwendigkeit abzupumpen, Frühgeburtlichkeit oder Interesse an einer Spende sind häufige Gründe.",
      },
    ],
  },
  "referencias-essenciais-e-fontes-consultadas": {
    title: "Wesentliche Referenzen und konsultierte Quellen",
    blocks: [
      {
        type: "list",
        items: [
          "Weltgesundheitsorganisation. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Zuletzt abgerufen im Juli 2026.",
          "Brasilien. Gesundheitsministerium. Guia alimentar para crianças brasileiras menores de 2 anos (Ernährungsleitfaden für brasilianische Kinder unter 2 Jahren). Aktualisierung veröffentlicht 2025.",
          "Brasilien. Gesundheitsministerium. Aleitamento materno (Stillen); Salas de Apoio à Amamentação (Stillräume); Doação de leite humano (Muttermilchspende); Linhas de Cuidado da Criança (Versorgungslinien für Kinder).",
          "Anvisa. Banco de leite humano: funcionamento, prevenção e controle de riscos (Muttermilchbank: Betrieb, Risikoprävention und -kontrolle). Brasília, 2008.",
          "Brasilien. Gesetz Nr. 11.265/2006 und Dekret Nr. 9.579/2018 – Brasilianische Norm zur Vermarktung von Säuglings- und Kleinkindernahrung, Saugern, Schnullern und Flaschen.",
          "Brasilien. Gesetz Nr. 13.435/2017 – Monat des Stillens.",
          "Brasilien. Gesetz Nr. 13.872/2019 – Stillen bei föderalen öffentlichen Auswahlverfahren.",
          "Brasilien. Gesetz Nr. 14.683/2023 – Gütesiegel „Stillfreundliches Unternehmen“.",
          "Brasilien. Gesetz Nr. 15.222/2025 – Mutterschaftsurlaub und Mutterschaftsgeld bei längerem Krankenhausaufenthalt.",
          "Bundespflegerat (Cofen). Beschluss Nr. 736/2024 – Nursing Process.",
          "Bundespflegerat (Cofen). Beschluss Nr. 741/2024 – Pflegerische Versorgung in Human milk banks und Milchsammelstellen.",
          "Bundespflegerat (Cofen). Fachliche Stellungnahme Nr. 32/2025 der Technischen Pflegekammern.",
          "Stadtrat von Foz do Iguaçu. Gesetzentwurf Nr. 318/2025 und dessen Gesetzgebungsverfahren; Antrag Nr. 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Institutionelle Links" },
      {
        type: "list",
        items: [
          "Gesundheitsministerium – Stillen",
          "Brasilianisches Netzwerk der Muttermilchbanken",
          "Bundespflegerat (Cofen)",
          "Stadtrat von Foz do Iguaçu – SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Aktualisierung",
        text: "Gesetze, kommunale Abläufe, Telefonnummern und Protokolle können sich ändern. Bevor Sie dieses Material als institutionelle Norm verwenden, bestätigen Sie die aktuell geltende Version anhand offizieller Quellen und passen Sie es an das von Ihrer Einrichtung genehmigte Protokoll an.",
      },
    ],
  },
};

export default de;
