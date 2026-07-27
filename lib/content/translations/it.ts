import type { SectionTranslation } from "../types";

const it: Record<string, SectionTranslation> = {
  "recomendacoes-essenciais": {
    title: "Raccomandazioni essenziali",
    subtitle: "Ciò che ogni famiglia deve sapere",
    blocks: [
      { type: "heading", level: 2, text: "La raccomandazione centrale" },
      {
        type: "paragraph",
        text: "L'Organizzazione Mondiale della Sanità e il Ministero della Salute brasiliano raccomandano di iniziare l'allattamento al seno entro la prima ora di vita, di offrire esclusivamente latte materno nei primi sei mesi e di continuare ad allattare, insieme a un'alimentazione complementare adeguata, fino ai due anni di età o oltre. “Esclusivo” significa che il bambino non riceve acqua, tisane, succhi, altri tipi di latte o alimenti, salvo farmaci, vitamine, minerali o soluzione di reidratazione quando indicati dal professionista sanitario.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Messaggio chiave",
        text: "Il latte materno contiene già acqua a sufficienza, anche nelle giornate calde. Per un bambino sotto i sei mesi in allattamento esclusivo, offrire acqua o tisane può ridurre la suzione, diminuire la produzione di latte e aumentare i rischi di contaminazione.",
      },
      { type: "heading", level: 2, text: "Principi che favoriscono l'allattamento" },
      {
        type: "list",
        items: [
          "Contatto pelle a pelle subito dopo la nascita, quando madre e bambino sono clinicamente stabili.",
          "Rooming-in e vicinanza costante tra madre e bambino.",
          "Allattamento a richiesta: offrire il seno quando il bambino mostra segni di fame, di giorno e di notte.",
          "Evitare orari rigidi e limitare la durata della poppata.",
          "Osservare e correggere precocemente l'attacco al seno e il posizionamento.",
          "Evitare tettarelle, ciucci e biberon, specialmente nella fase di avvio dell'allattamento, salvo indicazione individuale.",
          "Non offrire latte complementare senza una valutazione clinica e un piano di protezione della produzione di latte.",
          "Garantire un sostegno rispettoso, senza colpevolizzazione né coercizione.",
        ],
      },
      { type: "heading", level: 2, text: "Benefici" },
      {
        type: "table",
        columns: ["Per il bambino", "Per la donna", "Per la famiglia e la società"],
        rows: [
          [
            "Protezione da diarrea e infezioni respiratorie; nutrizione adeguata; sostegno allo sviluppo e minor rischio futuro di sovrappeso.",
            "Favorisce la contrazione uterina; è associato a un minor rischio di tumore al seno e alle ovaie e di diabete di tipo 2; rafforza il legame madre-bambino e l'autostima.",
            "Minori spese per i sostituti del latte; meno assenze per malattia; minore impatto ambientale; rafforzamento della salute pubblica.",
          ],
        ],
      },
    ],
  },
  "como-a-lactacao-funciona": {
    title: "Come funziona la lattazione",
    subtitle: "Produzione, eiezione e regolazione del latte",
    blocks: [
      { type: "heading", level: 2, text: "Il seno produce latte in risposta allo svuotamento" },
      {
        type: "paragraph",
        text: "Durante la gravidanza, gli ormoni preparano il tessuto mammario. Dopo l'espulsione della placenta, il calo del progesterone permette l'aumento della produzione. La prolattina partecipa alla sintesi del latte; l'ossitocina favorisce l'eiezione, facendo fluire il latte attraverso i dotti. Una suzione frequente ed efficace, con uno svuotamento adeguato, è il principale stimolo per mantenere la produzione.",
      },
      { type: "heading", level: 2, text: "Colostrum, latte di transizione e latte maturo" },
      {
        type: "table",
        columns: ["Fase", "Caratteristiche", "Cosa consigliare"],
        rows: [
          [
            "Colostrum",
            "Giallastro, denso, in piccolo volume e ricco di componenti di difesa.",
            "È normale che le quantità siano ridotte; lo stomaco del neonato è piccolo e le poppate frequenti sono normali.",
          ],
          [
            "Transizione",
            "Aumenta di volume e cambia aspetto nei primi giorni.",
            "La “montata lattea” può presentarsi con seno più pieno, calore e perdite di latte.",
          ],
          [
            "Maturo",
            "La composizione varia nel corso della giornata e della poppata.",
            "Non è necessario cambiare seno a orari fissi; lasciare che il bambino termini spontaneamente e offrire poi l'altro seno.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Cosa aumenta davvero la produzione" },
      {
        type: "list",
        items: [
          "Più poppate efficaci e/o spremiture, anche notturne quando necessario.",
          "Correzione dell'attacco al seno.",
          "Contatto pelle a pelle.",
          "Trattamento del dolore e delle difficoltà che riducono la suzione.",
          "Riposo per quanto possibile, idratazione in base alla sete e alimentazione adeguata.",
          "Evitare integrazioni non necessarie che sostituiscano le poppate.",
        ],
      },
    ],
  },
  "primeiras-horas-e-primeiros-dias": {
    title: "Le prime ore e i primi giorni",
    subtitle: "Dalla sala parto al rientro a casa",
    blocks: [
      { type: "heading", level: 2, text: "La prima ora di vita" },
      {
        type: "paragraph",
        text: "In assenza di controindicazioni cliniche, il contatto pelle a pelle ininterrotto aiuta a stabilizzare temperatura, respirazione e glicemia, favorisce il legame madre-bambino e aumenta le probabilità di un avvio precoce dell'allattamento. Le procedure di routine possono essere organizzate in modo da non separare inutilmente la coppia madre-bambino.",
      },
      { type: "heading", level: 2, text: "Comportamenti normali" },
      {
        type: "list",
        items: [
          "Poppate molto frequenti, anche a “grappoli” nel tardo pomeriggio o alla sera.",
          "Sonno variabile e necessità, in situazioni specifiche, di svegliare il neonato.",
          "Poco colostrum visibile, ma sufficiente quando il trasferimento al bambino è adeguato.",
          "Feci che passano dal meconio scuro a tonalità verdastre e poi giallastre.",
          "Calo di peso nei primi giorni, che deve essere monitorato clinicamente.",
        ],
      },
      { type: "heading", level: 2, text: "Quando svegliare il bambino" },
      {
        type: "paragraph",
        text: "I neonati prematuri, piccoli per l'età gestazionale, con jaundice, scarso aumento ponderale, sonnolenza eccessiva o altre condizioni possono necessitare di poppate programmate e di una valutazione specifica. L'indicazione va sempre individualizzata. In generale, finché l'allattamento non è ben avviato, non si dovrebbero consentire lunghi intervalli senza valutare i segni clinici e l'andamento del peso.",
      },
    ],
  },
  "pega-e-posicionamento": {
    title: "Attacco al seno e posizionamento",
    subtitle: "Comfort per la donna ed efficacia per il bambino",
    blocks: [
      { type: "heading", level: 2, text: "Posizionamento corretto" },
      {
        type: "list",
        items: [
          "Madre comoda, con schiena e braccia sostenute.",
          "Bambino rivolto verso il seno, con la pancia a contatto con il corpo della madre.",
          "Testa e tronco allineati; collo senza torsioni.",
          "Corpo del bambino vicino e ben sostenuto.",
          "Naso all'altezza del capezzolo prima di iniziare l'attacco.",
        ],
      },
      { type: "heading", level: 2, text: "Segni di un buon attacco" },
      {
        type: "list",
        items: [
          "Bocca ben aperta.",
          "Mento a contatto con il seno.",
          "Labbra rivolte verso l'esterno (evertite).",
          "Più areola visibile sopra la bocca che sotto, quando l'anatomia permette di osservarlo.",
          "Guance arrotondate, senza fossette.",
          "Suzioni lente e profonde, con pause e deglutizione percepibile.",
          "Assenza di dolore persistente; può esserci una breve sensibilità iniziale, ma non un dolore intenso per tutta la poppata.",
        ],
      },
      { type: "heading", level: 2, text: "Come aiutare il bambino ad attaccarsi" },
      {
        type: "list",
        items: [
          "Avvicini il bambino al seno, invece di portare il seno verso di lui.",
          "Sfiori il labbro superiore con il capezzolo e attenda che la bocca si apra bene.",
          "Diriga il capezzolo verso il palato e avvicini rapidamente il corpo del bambino.",
          "Osservi il comfort e la deglutizione.",
          "Se fa male, inserisca delicatamente il mignolo nell'angolo della bocca per rompere il vuoto e riprovi.",
        ],
      },
      { type: "heading", level: 2, text: "Posizioni utili" },
      {
        type: "table",
        columns: ["Posizione", "Può essere utile quando..."],
        rows: [
          ["Tradizionale (della culla)", "Madre e bambino sono a proprio agio e l'attacco si sta già stabilizzando."],
          ["Incrociata", "È necessario un maggiore controllo della testa per correggere l'attacco."],
          [
            "Sottobraccio o “a pallone da rugby”",
            "Dopo un parto cesareo, con seno voluminoso, gemelli o necessità di visualizzare meglio l'attacco.",
          ],
          [
            "Sdraiata su un fianco",
            "Quando la madre ha bisogno di riposare; richiede un ambiente sicuro e attenzione al rischio di addormentarsi.",
          ],
          [
            "A cavalcioni",
            "Per bambini con reflusso, ipotonia o difficoltà di coordinazione, sotto supervisione.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Il dolore non va considerato normale",
        text: "Nipple fissure, sanguinamento, deformazione del capezzolo al termine della poppata o dolore che non migliora dopo la correzione indicano la necessità di una valutazione.",
      },
    ],
  },
  "como-saber-se-o-bebe-mama-o-suficiente": {
    title: "Come sapere se il bambino si nutre a sufficienza",
    subtitle: "Una valutazione che va oltre il tempo trascorso al seno",
    blocks: [
      { type: "heading", level: 2, text: "Segni favorevoli" },
      {
        type: "list",
        items: [
          "Poppata con suzione profonda e deglutizione udibile.",
          "Il bambino rilassa mani e corpo dopo la poppata.",
          "Eliminazione di urina in quantità progressiva nei primi giorni.",
          "Feci con la transizione attesa.",
          "Aumento di peso monitorato sulla curva di crescita.",
          "Seno più morbido dopo le poppate.",
        ],
      },
      { type: "heading", level: 2, text: "Pannolini ed evacuazioni" },
      {
        type: "paragraph",
        text: "Il conteggio dei pannolini è solo uno degli indicatori. A partire dalla montata lattea, ci si aspetta generalmente diversi pannolini ben bagnati al giorno; l'OMS indica come riferimento almeno sei pannolini usa e getta bagnati in 24 ore, insieme a una crescita adeguata e feci compatibili. La valutazione del peso, dello stato generale e della poppata resta indispensabile.",
      },
      { type: "heading", level: 2, text: "Il peso" },
      {
        type: "paragraph",
        text: "L'interpretazione deve tenere conto dell'età gestazionale, del peso alla nascita, del calo iniziale, del recupero, della tecnica di pesatura e della curva dell'OMS. Non si deve concludere che il “latte è debole” sulla base di una singola pesata. Un calo eccessivo, la mancata ripresa attesa o un aumento insufficiente richiedono la valutazione della poppata, delle condizioni cliniche, della frequenza delle poppate e, quando necessario, un piano di integrazione temporanea con protezione della lattazione.",
      },
    ],
  },
  "dificuldades-frequentes-e-manejo": {
    title: "Difficoltà comuni e gestione",
    subtitle: "Cosa fare e quando inviare a uno specialista",
    blocks: [
      { type: "heading", level: 2, text: "Engorgement mammario" },
      {
        type: "paragraph",
        text: "Il seno diventa molto pieno, indurito e dolente; l'areola può risultare tesa, rendendo difficile l'attacco. Si verifica quando la produzione supera la quantità rimossa, in caso di poppate inefficaci o di intervalli troppo lunghi.",
      },
      {
        type: "list",
        items: [
          "Allattare con frequenza e correggere l'attacco.",
          "Prima della poppata, eseguire un massaggio delicato e una piccola spremitura per ammorbidire l'areola.",
          "Dopo la poppata, applicare freddo per un breve periodo per alleviare il fastidio, proteggendo la pelle con un panno.",
          "Indossare un reggiseno comodo, senza compressione.",
          "Evitare massaggi vigorosi, calore prolungato e uno svuotamento eccessivo non necessario, perché possono aumentare l'edema e la produzione.",
        ],
      },
      { type: "heading", level: 2, text: "Nipple fissure e traumi del capezzolo" },
      {
        type: "paragraph",
        text: "La causa più comune è un attacco al seno scorretto. Possono contribuire anche il distacco scorretto del bambino dal seno, tiralatte mal regolati, dermatiti, infezioni e alterazioni della cavità orale.",
      },
      {
        type: "list",
        items: [
          "Correggere la causa.",
          "Mantenere la zona pulita e asciutta; lavare il seno solo durante la doccia o il bagno, senza saponi aggressivi sul capezzolo.",
          "Evitare alcol, pomate casalinghe, bucce di alimenti ed esposizione al sole come trattamento.",
          "Valutare i segni di infezione e l'eventuale necessità di un trattamento specifico.",
        ],
      },
      { type: "heading", level: 2, text: "Dotti infiammati e mastitis" },
      {
        type: "paragraph",
        text: "Dolore localizzato, arrossamento, edema e malessere possono far parte dello spettro infiammatorio della mastitis. Febbre persistente, peggioramento clinico o assenza di miglioramento richiedono una valutazione medica. In generale, continuare ad allattare è sicuro e aiuta a risolvere la stasi del latte; un'interruzione brusca può peggiorare la situazione.",
      },
      {
        type: "list",
        items: [
          "Riposo, idratazione, analgesia compatibile con l'allattamento e freddo locale possono essere d'aiuto.",
          "Evitare di premere, di “sciogliere il nodulo” con forza o di usare vibrazioni aggressive.",
          "Antibiotico solo quando indicato.",
          "Sospettare un breast abscess in presenza di una massa fluttuante, di un peggioramento o della persistenza dei sintomi; può essere necessaria un'ecografia e il drenaggio.",
        ],
      },
      { type: "heading", level: 2, text: "Candidiasis (thrush): attenzione alle diagnosi eccessive" },
      {
        type: "paragraph",
        text: "Il dolore urente e il capezzolo lucido vengono spesso attribuiti alla candidiasis (thrush), ma possono avere altre cause, come traumi, vasospasm o dermatite. La diagnosi deve essere clinica e il trattamento mirato. Non utilizzare antimicotici ripetutamente senza una nuova valutazione.",
      },
      { type: "heading", level: 2, text: "Bassa produzione percepita o reale" },
      {
        type: "paragraph",
        text: "Un seno più morbido, l'assenza di perdite di latte e poppate frequenti non dimostrano una low milk supply. La valutazione deve basarsi sul trasferimento effettivo di latte, sulla diuresi, sulle feci, sul peso e sullo stato clinico.",
      },
      { type: "heading", level: 2, text: "Let-down reflex intenso ed eccesso di latte" },
      {
        type: "list",
        items: [
          "Una posizione reclinata può ridurre il flusso.",
          "Consentire pause e l'eruttazione.",
          "Evitare di spremere grandi volumi solo per “svuotare” il seno.",
          "Valutare l'aumento di peso, il fastidio, gli episodi di soffocamento e le feci.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Attenzione",
        text: "Tisane, birra scura, prodotti a base di mais e integratori “galattogoghi” non sostituiscono la valutazione della poppata. Alcuni possono essere dannosi o interagire con i farmaci.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Segni d'allarme nel neonato",
        text: "Difficoltà a svegliarsi, rifiuto persistente del seno, riduzione dell'urina, bocca secca, pianto debole, febbre o temperatura corporea bassa, jaundice intensa, respirazione rapida o affannosa, colorito bluastro, vomito verde o calo di peso importante richiedono una valutazione immediata.",
      },
    ],
  },
  "ordenha-conservacao-e-oferta": {
    title: "Spremitura, conservazione e somministrazione",
    subtitle: "Estrarre il latte in sicurezza",
    blocks: [
      { type: "heading", level: 2, text: "Quando spremere il latte" },
      {
        type: "list",
        items: [
          "Per alleviare la tensione dell'areola prima dell'attacco.",
          "Quando madre e bambino sono separati.",
          "Per stimolare la produzione in caso di prematurità o suzione inefficace.",
          "Per costituire una scorta prima del rientro al lavoro.",
          "Per la donazione a una banca del latte umano.",
        ],
      },
      { type: "heading", level: 2, text: "Spremitura manuale" },
      {
        type: "list",
        items: [
          "Si lavi le mani e scelga un luogo pulito e tranquillo.",
          "Massaggi delicatamente il seno con movimenti circolari.",
          "Posizioni il pollice sopra e l'indice sotto l'areola, formando una “C”.",
          "Spinga le dita indietro, verso il torace, e comprima ritmicamente senza far scivolare le dita sulla pelle.",
          "Alterni i punti intorno all'areola e cambi seno.",
          "Raccolga il latte in un recipiente adeguato ed etichettato.",
        ],
      },
      { type: "heading", level: 2, text: "Tiralatte" },
      {
        type: "paragraph",
        text: "Il tiralatte non deve causare dolore. La dimensione dell'imbuto deve consentire il movimento del capezzolo senza attrito eccessivo. Inizi con un'aspirazione bassa e la aumenti fino al livello massimo confortevole. Igienizzi le parti seguendo le istruzioni del produttore e le raccomandazioni sanitarie.",
      },
      { type: "heading", level: 2, text: "Conservazione: distinguere uso domestico e donazione" },
      {
        type: "callout",
        tone: "info",
        title: "Importante",
        text: "Le regole della banca del latte per la donazione possono essere più restrittive. Il Ministero della Salute indica che il latte destinato alla donazione resti congelato per un massimo di 10 giorni prima di essere consegnato alla banca del latte. Per il consumo del proprio bambino, segua il protocollo del servizio che segue la famiglia e le condizioni di conservazione indicate.",
      },
      {
        type: "table",
        columns: ["Fase", "Buone pratiche"],
        rows: [
          [
            "Recipiente",
            "Barattolo di vetro a bocca larga con tappo di plastica, sterilizzato secondo le indicazioni della banca del latte, oppure recipiente specifico per latte umano.",
          ],
          [
            "Etichettatura",
            "Nome, data e ora della raccolta; quando pertinente, età gestazionale o identificazione del bambino.",
          ],
          ["Refrigerazione", "Riporre immediatamente nel luogo indicato; evitare lo sportello del frigorifero."],
          ["Scongelamento", "In frigorifero oppure a bagnomaria con acqua tiepida, senza far bollire."],
          ["Riscaldamento", "Non usare mai il microonde: può creare punti troppo caldi e alterare i componenti del latte."],
          [
            "Avanzi",
            "Non ricongelare il latte scongelato; scarti l'eventuale residuo entrato in contatto con la saliva del bambino, seguendo le indicazioni del servizio.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Come somministrare il latte" },
      {
        type: "paragraph",
        text: "Si possono usare un bicchierino, un cucchiaio o un dispositivo specifico. Il biberon non è obbligatorio e in alcuni bambini può interferire con la dinamica orale. La scelta deve tenere conto dell'età, delle capacità del bambino, della sicurezza e delle indicazioni professionali. Non versi mai il latte direttamente in bocca; lasci che il bambino lo lecchi e lo sorseggi, in posizione semiseduta.",
      },
    ],
  },
  "alimentacao-medicamentos-e-habitos-maternos": {
    title: "Alimentazione, farmaci e abitudini materne",
    subtitle: "Attenzione senza divieti inutili",
    blocks: [
      { type: "heading", level: 2, text: "Alimentazione della donna" },
      {
        type: "paragraph",
        text: "Non esiste una dieta universale per la donna che allatta. La maggior parte delle donne può mantenere un'alimentazione varia, basata su alimenti freschi e minimamente lavorati. Beva acqua in base alla sete. Restrizioni alimentari senza una reale indicazione possono causare carenze nutrizionali, senso di colpa e abbandono precoce dell'allattamento.",
      },
      { type: "heading", level: 2, text: "Caffeina, alcol e tabacco" },
      {
        type: "list",
        items: [
          "Caffeina: moderarne il consumo e osservare eventuale irritabilità o alterazioni del sonno del bambino; considerare caffè, tè, bevande energetiche e cioccolato.",
          "Alcol: l'opzione più sicura è non consumarlo. Le strategie basate sull'attesa di un intervallo di tempo vanno discusse con un professionista, poiché “spremere e scartare” non accelera l'eliminazione dell'alcol.",
          "Tabacco e sigaretta elettronica: da evitare. Se la donna non riesce a smettere immediatamente, deve ricevere supporto per la cessazione e ridurre l'esposizione passiva del bambino; non fumare vicino al bambino né in ambienti chiusi.",
          "Droghe illecite: possono controindicare temporaneamente l'allattamento e richiedono una valutazione urgente e un sostegno privo di giudizio.",
        ],
      },
      { type: "heading", level: 2, text: "Farmaci" },
      {
        type: "paragraph",
        text: "Gran parte dei farmaci è compatibile con l'allattamento. Sospendere l'allattamento senza necessità può comportare più rischi che mantenerlo. La decisione deve tenere conto dell'età e della salute del bambino, del dosaggio, della via di somministrazione, della durata del trattamento, del passaggio nel latte e delle alternative disponibili. Consulti fonti specializzate e un professionista abilitato.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Non decida mai da sola",
        text: "Non interrompa una terapia essenziale né l'allattamento senza indicazione professionale. Anche i prodotti fitoterapici, “naturali” e gli integratori possono avere effetti e interazioni.",
      },
    ],
  },
  "situacoes-especiais-e-contraindicacoes": {
    title: "Situazioni particolari e controindicazioni",
    subtitle: "Quando allattare, sospendere o sostituire",
    blocks: [
      { type: "heading", level: 2, text: "Poche situazioni controindicano totalmente l'allattamento" },
      {
        type: "paragraph",
        text: "In Brasile, le madri sieropositive per HIV e le madri con HTLV-1 o HTLV-2 non devono allattare, per il rischio di trasmissione. Il Sistema Sanitario Nazionale (SUS) deve garantire counseling, l'inibizione della lattazione quando indicata e il latte formulato. Il cross-nursing - ovvero un'altra donna che allatta il bambino - non è raccomandato per il rischio di trasmissione di infezioni.",
      },
      { type: "heading", level: 2, text: "Situazioni che richiedono una valutazione individuale" },
      {
        type: "table",
        columns: ["Condizione", "Indicazione generale"],
        rows: [
          ["Epatite B", "In generale, l'allattamento è consentito con un'adeguata immunoprofilassi del neonato."],
          ["Epatite C", "In generale, consentito; valutare eventuali sanguinamenti del capezzolo e situazioni specifiche."],
          [
            "Tubercolosi",
            "Spesso è possibile mantenere l'allattamento al seno con misure di controllo e trattamento adeguato; la condotta dipende dal grado di contagiosità.",
          ],
          ["Herpes", "Non offrire il seno con lesioni attive; proteggere le lesioni presenti in altre zone e mantenere l'igiene."],
          [
            "COVID-19/influenza",
            "In generale, mantenere l'allattamento con igiene delle mani e le misure respiratorie indicate.",
          ],
          [
            "Uso di radiofarmaci o farmaci specifici",
            "Può richiedere una sospensione temporanea o rappresentare una controindicazione; consultare una fonte specializzata.",
          ],
          ["Galactosemia classica nel bambino", "Controindicazione al latte umano."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Sicurezza",
        text: "Questa tabella è una sintesi. La condotta dipende dalla diagnosi, dal trattamento e dalle condizioni del bambino. Richieda una valutazione specialistica.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Autonomia e accoglienza",
        text: "Promuovere l'allattamento non significa imporlo. Anche le donne che non possono o non desiderano allattare meritano un'informazione sicura, l'accesso a un'alimentazione appropriata e un'assistenza priva di giudizio.",
      },
    ],
  },
  "prematuridade-internacao-e-metodo-canguru": {
    title: "Prematurità, ricovero e Kangaroo Mother Care",
    subtitle: "Proteggere il latte e il legame madre-bambino",
    blocks: [
      { type: "heading", level: 2, text: "Il latte umano è particolarmente importante" },
      {
        type: "paragraph",
        text: "I neonati prematuri e quelli con basso peso alla nascita traggono beneficio dal latte della propria madre e, quando questo non è disponibile, dal latte umano pastorizzato secondo indicazione. Spesso la suzione diretta non è ancora possibile, quindi la produzione deve essere avviata e mantenuta tramite la spremitura.",
      },
      {
        type: "list",
        items: [
          "Iniziare la stimolazione il più presto possibile dopo il parto, in base alle condizioni materne.",
          "Spremere con una frequenza simile a quella delle poppate di un neonato.",
          "Effettuare il contatto pelle a pelle e la Kangaroo Mother Care non appena consentito.",
          "Registrare i volumi senza trasformare la spremitura in una fonte di senso di colpa.",
          "Ricevere supporto per la transizione da sondino/bicchierino al seno, in base alla maturità del bambino.",
        ],
      },
      { type: "heading", level: 2, text: "Congedo di maternità in caso di ricovero prolungato" },
      {
        type: "paragraph",
        text: "La Legge n. 15.222/2025 ha introdotto, per determinati ricoveri legati al parto che superano le due settimane, la possibilità di estendere il congedo di maternità fino a 120 giorni dopo la dimissione della madre e del neonato, detratto il periodo precedente al parto, secondo i requisiti previsti dalla legge.",
      },
    ],
  },
  "introducao-alimentar-e-continuidade": {
    title: "Introduzione alimentare e continuità dell'allattamento",
    subtitle: "A sei mesi, il cibo integra — non sostituisce immediatamente",
    blocks: [
      { type: "heading", level: 2, text: "Quando iniziare" },
      {
        type: "paragraph",
        text: "L'alimentazione complementare dovrebbe iniziare intorno ai sei mesi compiuti, quando il bambino mostra prontezza e necessità nutrizionale. Il latte materno continua a essere importante e può essere offerto prima o dopo i pasti, in base alla routine e alle preferenze della famiglia.",
      },
      {
        type: "list",
        items: [
          "Offrire cibo vero, variato e adeguato alla cultura della famiglia.",
          "Far progredire gradualmente la consistenza; evitare di frullare o passare gli alimenti di routine.",
          "Offrire acqua nel bicchiere a partire dall'introduzione alimentare.",
          "Evitare zucchero e alimenti ultra-processati nei primi anni di vita.",
          "Rispettare i segnali di fame e sazietà; non forzare il bambino a mangiare.",
          "Mantenere l'allattamento al seno fino ai due anni di età o oltre.",
        ],
      },
    ],
  },
  "retorno-ao-trabalho-e-desmame": {
    title: "Rientro al lavoro e svezzamento dall'allattamento",
    subtitle: "Pianificazione, diritti e scelte rispettate",
    blocks: [
      { type: "heading", level: 2, text: "Pianificare prima del rientro" },
      {
        type: "list",
        items: [
          "Parli con la propria rete di sostegno e con il luogo di lavoro.",
          "Inizi ad allenarsi con la spremitura alcune settimane prima, senza creare una scorta eccessiva.",
          "Provi i recipienti e le modalità di somministrazione con un altro caregiver.",
          "Allatti prima di uscire e al ricongiungimento con il bambino.",
          "Sul lavoro, sprema il latte a intervalli compatibili con il proprio comfort e con l'età del bambino.",
          "Trasporti il latte in una borsa termica adeguata e lo conservi correttamente.",
        ],
      },
      { type: "heading", level: 2, text: "Svezzamento dall'allattamento" },
      {
        type: "paragraph",
        text: "Lo svezzamento dall'allattamento può essere spontaneo, graduale o reso necessario da circostanze familiari. Va condotto senza sensi di colpa e, quando possibile, in modo progressivo per ridurre la sofferenza e il rischio di engorgement. Elimini una poppata alla volta, sostituendola con momenti di contatto e con un'alimentazione adeguata all'età, osservando le reazioni del bambino e del seno.",
      },
      {
        type: "table",
        columns: ["Situazione", "Condotta iniziale"],
        rows: [
          [
            "Il bambino poppa molto spesso",
            "Osservare i segni di fame, l'attacco e la deglutizione; le poppate ravvicinate possono essere normali.",
          ],
          [
            "Scarso aumento di peso",
            "Valutazione clinica completa, osservazione della poppata, piano per aumentare il trasferimento di latte e nuova valutazione precoce.",
          ],
          ["Rientro al lavoro", "Pianificare spremiture regolari e la conservazione del latte."],
          [
            "Relactation",
            "Stimolazione frequente, contatto pelle a pelle, offerta del seno e un monitoraggio specialistico.",
          ],
        ],
      },
    ],
  },
  "mitos-e-verdades": {
    title: "Miti e verità",
    subtitle: "Informazioni per ridurre paura e senso di colpa",
    blocks: [
      {
        type: "table",
        columns: ["Affermazione", "Chiarimento"],
        rows: [
          [
            "“Il mio latte è debole.”",
            "Mito. L'aspetto varia e un latte più chiaro non significa che sia debole. Valuti l'assunzione osservando la deglutizione, i pannolini, il peso e lo stato clinico del bambino.",
          ],
          [
            "“Un seno piccolo produce poco latte.”",
            "Mito. Le dimensioni sono legate più al tessuto adiposo che alla capacità di produzione.",
          ],
          [
            "“Un bambino che poppa in continuazione non è soddisfatto.”",
            "Non sempre. Poppate frequenti e ravvicinate possono essere normali, specialmente durante gli scatti di crescita.",
          ],
          [
            "“Devo lavare il capezzolo prima di ogni poppata.”",
            "Mito. L'igiene abituale durante la doccia è sufficiente; un lavaggio eccessivo secca e irrita la pelle.",
          ],
          [
            "“La nipple fissure va esposta al sole.”",
            "Non è la raccomandazione di prima scelta. Correggere l'attacco e la causa è essenziale.",
          ],
          [
            "“La mastitis obbliga a interrompere l'allattamento.”",
            "Generalmente falso. Nella maggior parte dei casi, continuare ad allattare è sicuro; è la valutazione clinica a indicare le eccezioni.",
          ],
          [
            "“La birra scura aumenta il latte.”",
            "Mito e pratica sconsigliata. L'alcol passa nel latte e può essere dannoso.",
          ],
          [
            "“Dopo i sei mesi il latte diventa acqua.”",
            "Mito. Continua a fornire energia, nutrienti e protezione immunitaria.",
          ],
          [
            "“Chi ha una protesi al seno non riesce ad allattare.”",
            "Non sempre. Molte donne allattano; il tipo di intervento, la tecnica chirurgica e la sensibilità possono influire.",
          ],
          [
            "“Il ciuccio non interferisce.”",
            "In alcuni casi può interferire con la frequenza della suzione e con l'avvio dell'allattamento; va valutato individualmente.",
          ],
          [
            "“Il latte formulato fa dormire meglio il bambino.”",
            "Non deve essere usato come strategia per il sonno. Il sonno infantile dipende da molti fattori e il latte formulato ha indicazioni specifiche.",
          ],
          [
            "“Se mi sono agitata, il mio latte si è seccato.”",
            "Lo stress può ostacolare temporaneamente il let-down reflex, ma di solito non fa “seccare” il latte all'improvviso. Sostegno e stimolazione aiutano a superarlo.",
          ],
          [
            "“Bisogna alternare i seni ogni dieci minuti.”",
            "Mito. Il bambino può terminare un seno e poi ricevere l'altro; ciò che conta è un trasferimento di latte efficace.",
          ],
          [
            "“Allattare in pubblico è inopportuno.”",
            "Mito. Allattare risponde a un bisogno del bambino e va rispettato.",
          ],
          [
            "“Chi rientra al lavoro deve svezzare il bambino dall'allattamento.”",
            "Mito. Spremitura, conservazione, le pause previste dalla legge e il sostegno possono permettere di continuare ad allattare.",
          ],
        ],
      },
    ],
  },
  "direitos-e-legislacao-brasileira": {
    title: "Diritti e legislazione brasiliana",
    subtitle: "Tutela del bambino, della donna e dell'allattamento",
    blocks: [
      { type: "heading", level: 2, text: "Principali garanzie" },
      { type: "heading", level: 3, text: "Allattamento negli spazi pubblici" },
      {
        type: "paragraph",
        text: "La donna non è tenuta a nascondersi per allattare il proprio bambino. Stati e comuni possono avere norme specifiche contro le forme di discriminazione o costrizione. Anche in assenza di una legge locale specifica, impedire o umiliare una donna che allatta può violare la dignità, la tutela della maternità e i diritti del bambino.",
      },
      { type: "heading", level: 3, text: "Sale di allattamento" },
      {
        type: "paragraph",
        text: "Sono spazi privati, puliti e sicuri all'interno di aziende o istituzioni, destinati alla spremitura e alla conservazione del latte durante l'orario di lavoro. Non sono luoghi per isolare la donna né per sostituire il diritto alle pause previste.",
      },
      {
        type: "table",
        columns: ["Norma", "Tutela prevista"],
        rows: [
          [
            "Costituzione Federale e CLT",
            "Tutela della maternità, congedo di maternità e stabilità lavorativa, secondo il tipo di contratto e i requisiti previsti.",
          ],
          [
            "CLT, art. 396",
            "Due pause speciali di mezz'ora durante la giornata lavorativa per allattare, fino al compimento dei sei mesi del bambino; il periodo può essere prolungato quando richiesto da motivi di salute. Gli orari vanno definiti tramite accordo individuale.",
          ],
          [
            "Legge n. 11.770/2008",
            "Programma Empresa Cidadã: possibilità di prorogare il congedo di maternità a 180 giorni nelle aziende aderenti, con regole applicabili anche al settore pubblico.",
          ],
          [
            "Legge n. 11.265/2006 e Decreto n. 9.579/2018",
            "NBCAL: regolamenta la promozione commerciale di latte formulato, latti, alimenti per l'infanzia, biberon, tettarelle e ciucci.",
          ],
          ["Legge n. 13.435/2017", "Istituisce agosto come Mese dell'Allattamento Materno - Agosto Dourado."],
          [
            "Legge n. 13.872/2019",
            "Garantisce la possibilità di allattare durante i concorsi pubblici federali per i figli fino a sei mesi, con regole per la richiesta e il recupero del tempo.",
          ],
          ["Legge n. 14.683/2023", "Istituisce il marchio Empresa Amiga da Amamentação (Azienda Amica dell'Allattamento)."],
          [
            "Legge n. 15.222/2025",
            "Amplia la tutela del congedo e dell'indennità di maternità in caso di ricoveri prolungati legati al parto.",
          ],
          [
            "Delibera Cofen n. 741/2024",
            "Disciplina l'assistenza infermieristica presso le banche e i punti di raccolta del latte umano.",
          ],
          [
            "Delibera Cofen n. 736/2024",
            "Disciplina l'attuazione del Nursing Process nei contesti assistenziali.",
          ],
        ],
      },
    ],
  },
  "atuacao-da-enfermagem-e-da-atencao-primaria": {
    title: "Il ruolo dell'infermieristica e dell'Assistenza Primaria",
    subtitle: "Accogliere, valutare, intervenire e monitorare",
    blocks: [
      { type: "heading", level: 2, text: "Consulenza infermieristica" },
      {
        type: "paragraph",
        text: "La consulenza deve seguire il Nursing Process: valutazione, diagnosi infermieristica, pianificazione, attuazione ed evoluzione. La documentazione deve essere chiara, datata, personalizzata e includere le indicazioni fornite, la risposta della madre e del bambino e gli eventuali segni d'allarme.",
      },
      { type: "heading", level: 3, text: "Schema di valutazione" },
      {
        type: "table",
        columns: ["Ambito", "Cosa valutare"],
        rows: [
          [
            "Anamnesi",
            "Parto, età gestazionale, peso, ricoveri, patologie, farmaci, interventi chirurgici al seno, esperienze precedenti e obiettivi della famiglia.",
          ],
          [
            "Poppata",
            "Posizione, attacco, ritmo, deglutizione, durata spontanea, dolore, forma del capezzolo dopo la poppata.",
          ],
          [
            "Bambino",
            "Stato generale, idratazione, jaundice, cavità orale, tono muscolare, suzione, pannolini, feci e curva di peso.",
          ],
          ["Seno", "Forma, edema, traumi, dolore, iperemia, masse, secrezioni e segni di infezione."],
          [
            "Contesto",
            "Rete di sostegno, salute mentale, sonno, alimentazione, lavoro, violenza, barriere culturali e linguistiche.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Possibili interventi" },
      {
        type: "list",
        items: [
          "Consulenza e dimostrazione pratica.",
          "Correzione dell'attacco e del posizionamento.",
          "Spremitura manuale e piano di stimolazione.",
          "Gestione dell'engorgement e dei traumi del capezzolo.",
          "Monitoraggio del peso e dell'idratazione.",
          "Invio a visita medica, odontoiatrica, logopedica, nutrizionale, psicologica o alla banca del latte, secondo necessità.",
          "Piano condiviso di integrazione, quando indicata.",
          "Visita domiciliare e rivalutazione precoce.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Limiti professionali",
        text: "I protocolli istituzionali, la normativa che disciplina la professione e la valutazione clinica devono guidare prescrizioni e procedure. Un parere tecnico del Cofen del 2025 ha rilevato che un documento del Coren-PR sulla gestione dell'allattamento non soddisfaceva ancora i requisiti per essere riconosciuto come protocollo nazionale; pertanto, non deve essere presentato come protocollo omologato.",
      },
    ],
  },
  "foz-do-iguacu-e-regiao-de-fronteira": {
    title: "Foz do Iguaçu e la regione di frontiera",
    subtitle: "Rete locale, diversità e assistenza interculturale",
    blocks: [
      { type: "heading", level: 2, text: "L'Assistenza Primaria come porta d'accesso" },
      {
        type: "paragraph",
        text: "A Foz do Iguaçu, le donne in gravidanza, le puerpere e i bambini devono rivolgersi all'Unità Sanitaria di Base di riferimento per il controllo prenatale, la visita del postpartum, il well-child care, la valutazione del peso, le indicazioni sull'attacco al seno, le vaccinazioni e gli invii a visite specialistiche. Contatti, orari e unità di riferimento possono cambiare; verifichi presso i canali ufficiali dell'Assessorato Comunale alla Salute.",
      },
      { type: "heading", level: 3, text: "Le peculiarità della triplice frontiera" },
      {
        type: "list",
        items: [
          "Spostamenti tra Brasile, Paraguay e Argentina, con possibili difficoltà nella continuità assistenziale.",
          "Diversità linguistica e culturale, comprese famiglie che parlano spagnolo, guaraní, arabo e altre lingue.",
          "Differenze nei documenti, nella copertura sanitaria e nel luogo di nascita.",
          "Credenze familiari diverse riguardo a colostrum, tisane, orari, esposizione del corpo e ruolo dei nonni.",
          "Necessità di una comunicazione semplice, di un interprete quando possibile e di rispetto per le scelte della famiglia, senza però rinunciare alla sicurezza.",
        ],
      },
      { type: "heading", level: 3, text: "Come condurre una consulenza interculturale" },
      {
        type: "list",
        items: [
          "Chieda cosa la famiglia già sa e in cosa crede.",
          "Identifichi chi partecipa alle decisioni.",
          "Spieghi il motivo di ogni raccomandazione, senza mai ridicolizzare le credenze della famiglia.",
          "Negozi alternative sicure.",
          "Consegni indicazioni scritte nella lingua compresa dalla famiglia.",
          "Concordi dove e quando avverrà la rivalutazione.",
        ],
      },
      { type: "heading", level: 3, text: "Disegno di Legge Comunale n. 318/2025" },
      {
        type: "paragraph",
        text: "Il disegno di legge proponeva linee guida per l'incentivazione dell'allattamento al seno, un possibile pass gratuito per le donne che allattano e le donatrici, sale di allattamento, campagne educative e collaborazioni. Tuttavia, l'iter ufficiale registra che la proposta è stata ritirata dalla proponente e archiviata nel febbraio 2026. Pertanto, queste misure non devono essere presentate come legge comunale in vigore.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Corretto inquadramento giuridico",
        text: "Un disegno di legge non è una legge. Il testo può ispirare politiche pubbliche, ma non crea un diritto esigibile finché non viene approvato, promulgato e pubblicato.",
      },
      { type: "heading", level: 3, text: "Iniziative legislative successive" },
      {
        type: "paragraph",
        text: "Nel 2026 è stata presentata una proposta comunale per obbligare gli asili nido pubblici e privati a disporre di una struttura adeguata per la raccolta e la conservazione del latte materno. L'esistenza di una proposta non significa che sia in vigore; la situazione va verificata nel sistema legislativo comunale prima di qualsiasi divulgazione.",
      },
      { type: "heading", level: 3, text: "Percorso suggerito per l'Unità Sanitaria di Base" },
      {
        type: "list",
        items: [
          "Accogliere senza giudizio e identificare l'urgenza.",
          "Osservare la poppata ogni volta che è possibile.",
          "Valutare madre e bambino, compresi peso e idratazione.",
          "Effettuare la gestione iniziale e documentarla.",
          "Stabilire un controllo entro 24-72 ore in base al rischio.",
          "Inviare alla maternità, alla pediatria, alla banca del latte o al pronto soccorso quando necessario.",
          "Garantire la continuità assistenziale per le famiglie che attraversano il confine.",
        ],
      },
    ],
  },
  "checklists-e-planos-praticos": {
    title: "Checklist e piani pratici",
    subtitle: "Strumenti da usare nella vita quotidiana",
    blocks: [
      { type: "heading", level: 2, text: "Checklist per la dimissione" },
      {
        type: "list",
        items: [
          "La madre è in grado di posizionare il bambino e di riconoscere un buon attacco.",
          "Sa identificare i segni di fame e sazietà.",
          "Ha ricevuto indicazioni sull'allattamento a richiesta.",
          "Sa quali segni richiedono un intervento medico.",
          "Ha un controllo programmato per madre e bambino.",
          "Sa dove pesare il bambino e a chi rivolgersi per un sostegno.",
          "Ha ricevuto indicazioni su farmaci e alimentazione.",
          "Se è previsto un latte complementare, esiste un piano scritto con rivalutazione.",
        ],
      },
      { type: "heading", level: 3, text: "Piano di allattamento" },
      {
        type: "table",
        caption: "Domande da discutere con la famiglia e da registrare con le relative risposte",
        columns: ["Domanda", "Risposta della famiglia"],
        rows: [
          ["Chi potrà offrire sostegno nelle prime settimane?", ""],
          ["Dove cercare aiuto professionale?", ""],
          ["Quali segni indicano che dobbiamo rivolgerci a un medico?", ""],
          ["Come sarà organizzato il rientro al lavoro?", ""],
          ["C'è qualche credenza o preoccupazione che l'équipe dovrebbe conoscere?", ""],
          ["Quali sono i nostri obiettivi e limiti?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Breve diario di monitoraggio" },
      {
        type: "table",
        caption: "Modello vuoto da compilare a cura della famiglia e da portare alle visite",
        columns: ["Data", "Poppate/spremiture", "Pannolini bagnati", "Feci", "Dolore (0-10)", "Osservazioni"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Segni di urgenza" },
      {
        type: "list",
        items: [
          "Bambino molto sonnolento o difficile da svegliare.",
          "Poca o nessuna urina.",
          "Febbre, ipotermia o difficoltà respiratorie.",
          "Calo di peso importante o peggioramento clinico.",
          "Jaundice intensa o progressiva.",
          "Madre con febbre alta, svenimento, mancanza di respiro, dolore intenso, sanguinamento importante o segni di breast abscess.",
        ],
      },
    ],
  },
  "perguntas-frequentes": {
    title: "Domande frequenti",
    subtitle: "Risposte dirette ai dubbi più comuni",
    blocks: [],
    faqItems: [
      {
        question: "Quanto deve durare la poppata?",
        answer:
          "Non esiste una durata fissa. Osservi la suzione e la deglutizione; lasci che il bambino termini spontaneamente.",
      },
      {
        question: "Devo offrire entrambi i seni?",
        answer:
          "Offra il primo finché il bambino non lo lascia o riduce la suzione; poi offra il secondo. Alla poppata successiva, può iniziare dall'ultimo seno meno svuotato.",
      },
      {
        question: "Posso allattare sdraiata?",
        answer:
          "Sì, purché madre e bambino siano ben posizionati e l'ambiente sia sicuro. Faccia attenzione a non addormentarsi su divani o poltrone.",
      },
      {
        question: "Posso fare attività fisica?",
        answer: "In generale sì, dopo il via libera medico e il recupero post-parto. Si idrati e utilizzi un reggiseno di sostegno comodo.",
      },
      {
        question: "Posso tingermi i capelli?",
        answer:
          "Molti prodotti hanno un basso assorbimento, ma si raccomanda di garantire una buona ventilazione, evitare il contatto con il bambino e seguire le indicazioni del produttore e del professionista sanitario.",
      },
      {
        question: "Posso sottopormi a un esame con mezzo di contrasto?",
        answer: "Molti mezzi di contrasto sono compatibili con l'allattamento, ma verifichi il tipo specifico; non sospenda l'allattamento automaticamente.",
      },
      {
        question: "Il mio bambino ha dormito molte ore. Devo svegliarlo?",
        answer:
          "Dipende dall'età, dal peso e dalle condizioni cliniche. I neonati a rischio necessitano di un'indicazione individualizzata.",
      },
      {
        question: "Posso usare la coppetta raccoglilatte o la paracapezzoli di silicone?",
        answer:
          "Non dovrebbero essere di uso routinario. Possono essere utili in situazioni specifiche, sotto controllo, perché possono peggiorare i traumi del capezzolo o ridurre il trasferimento di latte.",
      },
      {
        question: "Come faccio a sapere se il tiralatte è regolato correttamente?",
        answer: "Non deve far male, tirare troppa areola all'interno né causare lesioni. Regoli l'imbuto e l'intensità di aspirazione.",
      },
      {
        question: "Posso donare il latte?",
        answer:
          "Le donne in buona salute, con una produzione di latte superiore al necessario, possono rivolgersi a una banca del latte per lo screening e le indicazioni necessarie.",
      },
      {
        question: "È possibile tornare a produrre latte dopo aver interrotto l'allattamento?",
        answer:
          "Sì, la relactation è possibile in molti casi, ma richiede una stimolazione frequente e un attento monitoraggio.",
      },
      {
        question: "Il latte formulato è vietato?",
        answer:
          "No. È un alimento indicato in situazioni specifiche. Deve essere preparato in sicurezza e non deve essere promosso commercialmente in modo inappropriato.",
      },
      {
        question: "Il padre o un'altra persona di supporto può aiutare?",
        answer:
          "Moltissimo: proteggendo il riposo della madre, occupandosi della casa, portando acqua e cibo, aiutando con il posizionamento, osservando i segnali del bambino ed evitando commenti che generino sensi di colpa.",
      },
      {
        question: "I nonni possono partecipare?",
        answer:
          "Sì. Sono una parte importante della rete di sostegno. Informazioni aggiornate aiutano a sostituire pratiche antiche, come offrire tisane, con un sostegno sicuro.",
      },
      {
        question: "Quando rivolgersi a una banca del latte?",
        answer:
          "Dolore, difficoltà di attacco, low milk supply, eccesso di latte, necessità di spremitura, prematurità o interesse a donare sono motivi comuni per rivolgersi a una banca del latte.",
      },
    ],
  },
  "referencias-essenciais-e-fontes-consultadas": {
    title: "Riferimenti essenziali e fonti consultate",
    blocks: [
      {
        type: "list",
        items: [
          "Organizzazione Mondiale della Sanità. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Consultazioni aggiornate a luglio 2026.",
          "Brasile. Ministero della Salute. Guia alimentar para crianças brasileiras menores de 2 anos (Guida alimentare per i bambini brasiliani sotto i 2 anni). Aggiornamento disponibile dal 2025.",
          "Brasile. Ministero della Salute. Aleitamento materno; Salas de Apoio à Amamentação; Doação de leite humano; Linhas de Cuidado da Criança.",
          "Anvisa. Banco de leite humano: funcionamento, prevenção e controle de riscos. Brasilia, 2008.",
          "Brasile. Legge n. 11.265/2006 e Decreto n. 9.579/2018 - Norma Brasileira de Comercialização de Alimentos para Lactentes e Crianças de Primeira Infância (Norma brasiliana sulla commercializzazione di alimenti per lattanti e prima infanzia), tettarelle, ciucci e biberon.",
          "Brasile. Legge n. 13.435/2017 - Mese dell'Allattamento Materno.",
          "Brasile. Legge n. 13.872/2019 - Allattamento durante i concorsi pubblici federali.",
          "Brasile. Legge n. 14.683/2023 - Marchio Empresa Amiga da Amamentação.",
          "Brasile. Legge n. 15.222/2025 - congedo di maternità e indennità di maternità in caso di ricovero prolungato.",
          "Consiglio Federale dell'Infermieristica (Cofen). Delibera Cofen n. 736/2024 - Nursing Process.",
          "Consiglio Federale dell'Infermieristica (Cofen). Delibera Cofen n. 741/2024 - assistenza infermieristica presso banche e punti di raccolta del latte umano.",
          "Consiglio Federale dell'Infermieristica (Cofen). Parere tecnico n. 32/2025 delle Camere Tecniche di Infermieristica.",
          "Consiglio Comunale di Foz do Iguaçu. Disegno di Legge n. 318/2025 e relativo iter legislativo; Richiesta n. 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Link istituzionali" },
      {
        type: "list",
        items: [
          "Ministero della Salute - Aleitamento Materno",
          "Rete Brasiliana delle Banche del Latte Umano",
          "Consiglio Federale dell'Infermieristica",
          "Consiglio Comunale di Foz do Iguaçu - SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Aggiornamento",
        text: "Leggi, procedure comunali, recapiti telefonici e protocolli possono cambiare. Prima di utilizzare questo materiale come norma istituzionale, verifichi la versione in vigore presso le fonti ufficiali e lo adatti al protocollo approvato dal servizio.",
      },
    ],
  },
};

export default it;
