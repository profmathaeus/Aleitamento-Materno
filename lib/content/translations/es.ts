import type { SectionTranslation } from "../types";

const es: Record<string, SectionTranslation> = {
  "recomendacoes-essenciais": {
    title: "Recomendaciones esenciales",
    subtitle: "Lo que todas las familias necesitan saber",
    blocks: [
      { type: "heading", level: 2, text: "La recomendación central" },
      {
        type: "paragraph",
        text: "La Organización Mundial de la Salud y el Ministerio de Salud de Brasil recomiendan iniciar la lactancia en la primera hora de vida, ofrecer únicamente leche materna durante los primeros seis meses y continuar amamantando, junto con una alimentación complementaria adecuada, hasta los dos años o más. “Exclusiva” significa que el bebé no recibe agua, tés, jugos, otras leches ni alimentos, excepto medicamentos, vitaminas, minerales o solución de rehidratación cuando el profesional de salud los indique.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mensaje clave",
        text: "La leche materna ya contiene suficiente agua, incluso en días calurosos. Para un bebé menor de seis meses con lactancia materna exclusiva, ofrecer agua o té puede reducir la succión, disminuir la producción de leche y aumentar el riesgo de contaminación.",
      },
      { type: "heading", level: 2, text: "Principios que favorecen la lactancia" },
      {
        type: "list",
        items: [
          "Contacto piel con piel apenas nace el bebé, cuando la madre y el bebé estén clínicamente estables.",
          "Alojamiento conjunto y permanencia cercana entre la madre y el bebé.",
          "Libre demanda: ofrecer el pecho cuando el bebé muestre señales de hambre, de día y de noche.",
          "Evitar horarios rígidos y limitar la duración de la toma.",
          "Observar y corregir tempranamente el agarre y la posición.",
          "Evitar chupetes, tetinas y biberones, especialmente mientras se establece la lactancia, salvo indicación individualizada.",
          "No ofrecer complemento sin evaluación clínica ni un plan para proteger la producción de leche.",
          "Garantizar un apoyo respetuoso, sin culpa ni coerción.",
        ],
      },
      { type: "heading", level: 2, text: "Beneficios" },
      {
        type: "table",
        columns: ["Para el bebé", "Para la mujer", "Para la familia y la sociedad"],
        rows: [
          [
            "Protección contra diarreas e infecciones respiratorias; nutrición adecuada; apoyo al desarrollo y menor riesgo futuro de sobrepeso.",
            "Ayuda a la contracción uterina; se asocia a menor riesgo de cáncer de mama y de ovario y de diabetes tipo 2; fortalece el vínculo y la autoconfianza.",
            "Menos gastos en sustitutos; menos ausencias por enfermedad; menor impacto ambiental; fortalecimiento de la salud pública.",
          ],
        ],
      },
    ],
  },
  "como-a-lactacao-funciona": {
    title: "Cómo funciona la lactancia",
    subtitle: "Producción, eyección y regulación de la leche",
    blocks: [
      { type: "heading", level: 2, text: "El pecho produce leche en respuesta al vaciamiento" },
      {
        type: "paragraph",
        text: "Durante el embarazo, las hormonas preparan el tejido mamario. Tras la salida de la placenta, la caída de la progesterona permite que aumente la producción. La prolactina participa en la síntesis de la leche; la oxitocina favorece la eyección, haciendo que la leche fluya por los conductos. La succión frecuente y eficaz, junto con un vaciamiento adecuado, son los principales estímulos para mantener la producción.",
      },
      { type: "heading", level: 2, text: "Calostro, leche de transición y leche madura" },
      {
        type: "table",
        columns: ["Fase", "Características", "Qué orientar"],
        rows: [
          [
            "Calostro",
            "Amarillento, espeso, en poco volumen y rico en componentes de defensa.",
            "Se esperan cantidades pequeñas; el estómago del recién nacido es pequeño y las tomas frecuentes son normales.",
          ],
          [
            "Transición",
            "Aumenta en volumen y cambia de aspecto en los primeros días.",
            "La “subida de la leche” puede venir acompañada de pechos más llenos, calor y goteo.",
          ],
          [
            "Madura",
            "Su composición varía a lo largo del día y de la toma.",
            "No es necesario cambiar de pecho por reloj; deje que el bebé termine espontáneamente y ofrezca el otro.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Qué aumenta realmente la producción" },
      {
        type: "list",
        items: [
          "Más tomas eficaces y/o extracciones, incluso de noche cuando sea necesario.",
          "Corrección del agarre.",
          "Contacto piel con piel.",
          "Tratamiento del dolor y de las dificultades que reducen la succión.",
          "Descanso posible, hidratación según la sed y alimentación adecuada.",
          "Evitar complementos innecesarios que reemplacen tomas.",
        ],
      },
    ],
  },
  "primeiras-horas-e-primeiros-dias": {
    title: "Primeras horas y primeros días",
    subtitle: "De la sala de parto a la llegada a casa",
    blocks: [
      { type: "heading", level: 2, text: "Primera hora de vida" },
      {
        type: "paragraph",
        text: "Cuando no exista contraindicación clínica, el contacto piel con piel ininterrumpido ayuda a estabilizar la temperatura, la respiración y la glucemia, favorece el vínculo y aumenta la probabilidad de un inicio temprano de la lactancia. Los procedimientos de rutina pueden organizarse para no separar innecesariamente a la madre y al bebé.",
      },
      { type: "heading", level: 2, text: "Comportamientos normales" },
      {
        type: "list",
        items: [
          "Tomas muy frecuentes, incluso en “bloques” al final del día.",
          "Sueño variable y necesidad de despertar al recién nacido en situaciones específicas.",
          "Poco calostro visible, pero suficiente cuando la transferencia es adecuada.",
          "Heces que cambian de meconio oscuro a tonos verdosos y luego amarillentos.",
          "Pérdida de peso en los primeros días, que debe seguirse clínicamente.",
        ],
      },
      { type: "heading", level: 2, text: "Cuándo despertar al bebé" },
      {
        type: "paragraph",
        text: "Los recién nacidos prematuros, pequeños, con ictericia, bajo aumento de peso, somnolencia excesiva u otras condiciones pueden necesitar una oferta programada y una evaluación de las tomas. La orientación debe ser individualizada. En general, mientras la lactancia no esté bien establecida, no deben permitirse intervalos largos sin evaluar los signos clínicos y la evolución del peso.",
      },
    ],
  },
  "pega-e-posicionamento": {
    title: "Agarre y posición",
    subtitle: "Comodidad para la mujer y eficiencia para el bebé",
    blocks: [
      { type: "heading", level: 2, text: "Posición adecuada" },
      {
        type: "list",
        items: [
          "Madre cómoda, con la espalda y los brazos apoyados.",
          "Bebé de frente al pecho, con la barriga hacia el cuerpo de la madre.",
          "Cabeza y tronco alineados; cuello sin torsión.",
          "Cuerpo del bebé cerca y bien sostenido.",
          "Nariz a la altura del pezón antes de iniciar el agarre.",
        ],
      },
      { type: "heading", level: 2, text: "Señales de buen agarre" },
      {
        type: "list",
        items: [
          "Boca bien abierta.",
          "Mentón tocando el pecho.",
          "Labios evertidos (hacia afuera).",
          "Más areola visible por encima de la boca que por debajo, cuando la anatomía permite observarlo.",
          "Mejillas redondeadas, sin hoyuelos.",
          "Succiones lentas y profundas, con pausas y deglución perceptible.",
          "Ausencia de dolor persistente; puede haber una sensibilidad inicial breve, pero no dolor intenso durante toda la toma.",
        ],
      },
      { type: "heading", level: 2, text: "Cómo ayudar al bebé a agarrarse" },
      {
        type: "list",
        items: [
          "Acerque al bebé al pecho, en lugar de llevar el pecho hacia él.",
          "Roce el labio superior con el pezón y espere a que abra bien la boca.",
          "Dirija el pezón hacia el paladar y acerque rápidamente el cuerpo del bebé.",
          "Observe la comodidad y la deglución.",
          "Si duele, introduzca suavemente el dedo meñique por la comisura de la boca para romper el vacío e inténtelo de nuevo.",
        ],
      },
      { type: "heading", level: 2, text: "Posiciones útiles" },
      {
        type: "table",
        columns: ["Posición", "Puede ayudar cuando..."],
        rows: [
          ["Tradicional (de cuna)", "La madre y el bebé están cómodos y el agarre ya se está estableciendo."],
          ["Cruzada", "Se necesita mayor control de la cabeza para corregir el agarre."],
          [
            "Invertida o de “balón de rugby”",
            "Después de una cesárea, con pechos grandes, gemelos o cuando se necesita ver mejor el agarre.",
          ],
          [
            "Acostada de lado",
            "La madre necesita descansar; requiere un entorno seguro y atención al riesgo de quedarse dormida.",
          ],
          [
            "A horcajadas (“a caballito”)",
            "Bebés con reflujo, hipotonía o dificultad de coordinación, bajo orientación profesional.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "El dolor no debe normalizarse",
        text: "Grietas, sangrado, deformación del pezón al final de la toma o dolor que no mejora tras ajustar la posición indican la necesidad de una evaluación.",
      },
    ],
  },
  "como-saber-se-o-bebe-mama-o-suficiente": {
    title: "Cómo saber si el bebé mama lo suficiente",
    subtitle: "Evaluación más allá del tiempo en el pecho",
    blocks: [
      { type: "heading", level: 2, text: "Señales favorables" },
      {
        type: "list",
        items: [
          "Toma con succión profunda y deglución.",
          "El bebé relaja las manos y el cuerpo después de la toma.",
          "Eliminación de orina en cantidad progresiva en los primeros días.",
          "Heces con la transición esperada.",
          "Aumento de peso acorde con la curva de crecimiento.",
          "Pechos más blandos después de las tomas.",
        ],
      },
      { type: "heading", level: 2, text: "Pañales y deposiciones" },
      {
        type: "paragraph",
        text: "El conteo de pañales es solo uno de los indicadores. A partir de la subida de la leche, suele esperarse varios pañales bien mojados al día; la OMS toma como referencia al menos seis pañales desechables mojados en 24 horas, junto con un crecimiento adecuado y heces compatibles. La evaluación del peso, del estado general y de la toma es indispensable.",
      },
      { type: "heading", level: 2, text: "Peso" },
      {
        type: "paragraph",
        text: "La interpretación debe considerar la edad gestacional, el peso al nacer, la pérdida inicial, la recuperación, la técnica de pesaje y la curva de la OMS. No debe concluirse que la “leche es débil” a partir de un único peso. La pérdida excesiva, la ausencia de la recuperación esperada o un aumento insuficiente requieren evaluar la toma, las condiciones clínicas, la frecuencia de la oferta y, cuando sea necesario, un plan de suplementación temporal que proteja la lactancia.",
      },
    ],
  },
  "dificuldades-frequentes-e-manejo": {
    title: "Dificultades frecuentes y manejo",
    subtitle: "Qué hacer y cuándo derivar",
    blocks: [
      { type: "heading", level: 2, text: "Ingurgitamiento mamario" },
      {
        type: "paragraph",
        text: "El pecho queda muy lleno, endurecido y doloroso; la areola puede quedar tensa, dificultando el agarre. Ocurre cuando la producción es mayor que la extracción, hay tomas ineficaces o intervalos largos.",
      },
      {
        type: "list",
        items: [
          "Amamantar con frecuencia y corregir el agarre.",
          "Antes de la toma, hacer un masaje suave y una pequeña extracción para ablandar la areola.",
          "Después de la toma, aplicar frío por un breve período para aliviar, protegido por un paño.",
          "Usar un sostén cómodo, sin compresión.",
          "Evitar masajes vigorosos, calor prolongado y un vaciamiento excesivo sin necesidad, ya que pueden aumentar el edema y la producción.",
        ],
      },
      { type: "heading", level: 2, text: "Grietas y trauma del pezón" },
      {
        type: "paragraph",
        text: "La causa más común es un agarre inadecuado. También pueden contribuir la retirada incorrecta del bebé del pecho, sacaleches mal ajustados, dermatitis, infecciones y alteraciones orales.",
      },
      {
        type: "list",
        items: [
          "Corregir la causa.",
          "Mantener la zona limpia y seca; lavar los pechos solo durante el baño, sin jabones agresivos en el pezón.",
          "Evitar alcohol, pomadas caseras, cáscaras de alimentos y exposición solar como tratamiento.",
          "Evaluar signos de infección y la necesidad de un tratamiento específico.",
        ],
      },
      { type: "heading", level: 2, text: "Conductos inflamados y mastitis" },
      {
        type: "paragraph",
        text: "El dolor localizado, un área enrojecida, el edema y el malestar pueden formar parte del espectro inflamatorio de la mastitis. La fiebre persistente, el empeoramiento clínico o la ausencia de mejoría requieren evaluación médica. En general, mantener la lactancia es seguro y ayuda a resolver la estasis; la interrupción abrupta puede empeorar el cuadro.",
      },
      {
        type: "list",
        items: [
          "El reposo, la hidratación, la analgesia compatible con la lactancia y el frío local pueden ayudar.",
          "Evitar apretar, intentar “deshacer” el bulto con fuerza o usar vibración agresiva.",
          "Antibiótico solo cuando esté indicado.",
          "Sospechar de absceso si hay una masa fluctuante, empeoramiento o persistencia; puede requerir imágenes y drenaje.",
        ],
      },
      { type: "heading", level: 2, text: "Candidiasis: cuidado con el sobrediagnóstico" },
      {
        type: "paragraph",
        text: "El dolor tipo quemazón y el pezón brillante suelen atribuirse a la candidiasis, pero pueden tener otras causas, como trauma, vasoespasmo o dermatitis. El diagnóstico debe ser clínico y el tratamiento, dirigido. No usar antifúngicos de forma repetida sin reevaluación.",
      },
      { type: "heading", level: 2, text: "Baja producción percibida o real" },
      {
        type: "paragraph",
        text: "Pechos más blandos, ausencia de goteo y tomas frecuentes no demuestran baja producción. La evaluación debe basarse en la transferencia de leche, la diuresis, las heces, el peso y el estado clínico.",
      },
      { type: "heading", level: 2, text: "Reflejo de eyección fuerte y exceso de leche" },
      {
        type: "list",
        items: [
          "La posición reclinada puede reducir el flujo.",
          "Permitir pausas y eructos.",
          "Evitar extraerse grandes volúmenes solo para “vaciar”.",
          "Evaluar el aumento de peso, la incomodidad, los atragantamientos y las heces.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Atención",
        text: "Los tés, la cerveza negra, el maíz y los productos “galactagogos” no reemplazan la evaluación de la toma. Algunos pueden ser perjudiciales o interactuar con medicamentos.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Señales de alerta en el recién nacido",
        text: "Dificultad para despertar, rechazo persistente del pecho, menos orina, boca seca, llanto débil, fiebre o temperatura baja, ictericia intensa, respiración rápida o con esfuerzo, coloración azulada, vómitos verdes o pérdida de peso importante requieren evaluación inmediata.",
      },
    ],
  },
  "ordenha-conservacao-e-oferta": {
    title: "Extracción, conservación y oferta",
    subtitle: "Extraer leche con seguridad",
    blocks: [
      { type: "heading", level: 2, text: "Cuándo extraerse leche" },
      {
        type: "list",
        items: [
          "Para aliviar la areola tensa antes del agarre.",
          "Cuando la madre y el bebé están separados.",
          "Para estimular la producción en prematuros o cuando la succión es ineficaz.",
          "Para formar una reserva antes de volver al trabajo.",
          "Para donar al Banco de Leche Humano.",
        ],
      },
      { type: "heading", level: 2, text: "Extracción manual" },
      {
        type: "list",
        items: [
          "Lávese las manos y elija un lugar limpio y tranquilo.",
          "Masajee suavemente el pecho con movimientos circulares.",
          "Coloque el pulgar arriba y el índice abajo de la areola, formando una “C”.",
          "Empuje los dedos hacia atrás, en dirección al tórax, y comprima rítmicamente sin deslizar sobre la piel.",
          "Alterne los puntos alrededor de la areola y cambie de pecho.",
          "Recoja en un recipiente adecuado y rotulado.",
        ],
      },
      { type: "heading", level: 2, text: "Sacaleches" },
      {
        type: "paragraph",
        text: "El sacaleches no debe causar dolor. El tamaño del embudo debe permitir el movimiento del pezón sin fricción excesiva. Comience con succión baja y auméntela hasta el máximo que resulte cómodo. Higienice las piezas siguiendo las instrucciones del fabricante y las recomendaciones sanitarias.",
      },
      { type: "heading", level: 2, text: "Conservación: diferencie el uso doméstico de la donación" },
      {
        type: "callout",
        tone: "info",
        title: "Importante",
        text: "Las reglas del Banco de Leche para la donación pueden ser más restrictivas. El Ministerio de Salud de Brasil indica que la leche destinada a donación permanezca congelada hasta 10 días antes de entregarse al Banco de Leche. Para el consumo del propio bebé, siga el protocolo del servicio que acompaña a la familia y las condiciones de almacenamiento indicadas.",
      },
      {
        type: "table",
        columns: ["Etapa", "Buenas prácticas"],
        rows: [
          [
            "Recipiente",
            "Frasco de boca ancha con tapa plástica, esterilizado según la orientación del Banco de Leche, o un recipiente específico para leche humana.",
          ],
          [
            "Identificación",
            "Nombre, fecha y hora de la extracción; cuando corresponda, edad gestacional o identificación del bebé.",
          ],
          ["Refrigeración", "Guardar de inmediato en el lugar indicado; evitar la puerta del refrigerador."],
          ["Descongelamiento", "En el refrigerador o a baño maría con agua tibia, sin hervir."],
          ["Calentamiento", "Nunca usar microondas: puede crear puntos calientes y alterar los componentes."],
          [
            "Sobras",
            "No volver a congelar la leche descongelada; descarte la que tuvo contacto con la saliva del bebé, según la orientación del servicio.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Cómo ofrecer la leche" },
      {
        type: "paragraph",
        text: "Se puede usar un vaso pequeño, una cuchara o un dispositivo indicado. El biberón no es obligatorio y puede interferir en la dinámica oral en algunos niños. La elección debe considerar la edad, la habilidad, la seguridad y la orientación profesional. Nunca vuelque la leche directamente en la boca; permita que el bebé la lama y la sorba, en posición semisentada.",
      },
    ],
  },
  "alimentacao-medicamentos-e-habitos-maternos": {
    title: "Alimentación, medicamentos y hábitos maternos",
    subtitle: "Cuidado sin prohibiciones innecesarias",
    blocks: [
      { type: "heading", level: 2, text: "Alimentación de la mujer" },
      {
        type: "paragraph",
        text: "No existe una dieta universal para la mujer que amamanta. La mayoría puede mantener una alimentación variada, basada en alimentos naturales y mínimamente procesados. Beba agua según la sed. Las restricciones alimentarias sin indicación pueden causar deficiencias, culpa y abandono temprano de la lactancia.",
      },
      { type: "heading", level: 2, text: "Cafeína, alcohol y tabaco" },
      {
        type: "list",
        items: [
          "Cafeína: modere el consumo y observe si hay irritabilidad o alteración del sueño en el bebé; considere el café, los tés, las bebidas energizantes y el chocolate.",
          "Alcohol: la opción más segura es no consumirlo. Las estrategias basadas en intervalos deben conversarse con un profesional, ya que “extraerse y descartar” no acelera la eliminación del alcohol.",
          "Tabaco y vapeadores: evítelos. Si la mujer no puede dejarlos de inmediato, debe recibir apoyo para la cesación y reducir la exposición pasiva; no fumar cerca del bebé ni en ambientes cerrados.",
          "Drogas ilícitas: pueden contraindicar temporalmente la lactancia y requieren evaluación urgente y apoyo sin juzgar.",
        ],
      },
      { type: "heading", level: 2, text: "Medicamentos" },
      {
        type: "paragraph",
        text: "La mayoría de los medicamentos es compatible con la lactancia. Suspender la leche materna sin necesidad puede implicar más riesgo que mantenerla. La decisión debe considerar la edad y la salud del bebé, la dosis, la vía, la duración, el paso a la leche y las alternativas disponibles. Consulte fuentes especializadas y a un profesional habilitado.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Nunca lo haga por su cuenta",
        text: "No interrumpa una medicación esencial ni la lactancia sin orientación profesional. Los fitoterápicos, productos “naturales” y suplementos también pueden causar efectos e interacciones.",
      },
    ],
  },
  "situacoes-especiais-e-contraindicacoes": {
    title: "Situaciones especiales y contraindicaciones",
    subtitle: "Cuándo amamantar, pausar o sustituir",
    blocks: [
      { type: "heading", level: 2, text: "Pocas situaciones la contraindican totalmente" },
      {
        type: "paragraph",
        text: "En Brasil, las madres que viven con VIH y las madres con HTLV-1 o HTLV-2 no deben amamantar, debido al riesgo de transmisión. El sistema público de salud (SUS) debe garantizar orientación, inhibición de la lactancia cuando esté indicada y fórmula infantil. La lactancia cruzada -que otra mujer amamante al bebé- no se recomienda, por el riesgo de transmisión de infecciones.",
      },
      { type: "heading", level: 2, text: "Situaciones que requieren evaluación individual" },
      {
        type: "table",
        columns: ["Condición", "Orientación general"],
        rows: [
          ["Hepatitis B", "En general, se permite la lactancia con la inmunoprofilaxis adecuada del recién nacido."],
          ["Hepatitis C", "En general, permitida; evaluar el sangrado del pezón y situaciones específicas."],
          [
            "Tuberculosis",
            "A menudo es posible mantener la leche materna con medidas de control y tratamiento; la conducta depende del grado de contagiosidad.",
          ],
          ["Herpes", "No ofrecer el pecho con lesión activa; proteger las lesiones en otras zonas y mantener la higiene."],
          [
            "COVID-19/influenza",
            "En general, mantener la lactancia con higiene de manos y las medidas respiratorias indicadas.",
          ],
          [
            "Uso de radiofármacos o medicamentos específicos",
            "Puede requerir una pausa temporal o estar contraindicado; consultar una fuente especializada.",
          ],
          ["Galactosemia clásica en el bebé", "Contraindicación para la leche humana."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Seguridad",
        text: "Esta tabla es un resumen. La conducta depende del diagnóstico, el tratamiento y la condición del bebé. Busque una evaluación especializada.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Autonomía y acompañamiento",
        text: "Promover la lactancia no significa obligar a nadie. Las mujeres que no pueden o no desean amamantar también merecen orientación segura, acceso a una alimentación apropiada y cuidado sin juicios.",
      },
    ],
  },
  "prematuridade-internacao-e-metodo-canguru": {
    title: "Prematuridad, internación y Método Canguro",
    subtitle: "Proteger la leche y el vínculo",
    blocks: [
      { type: "heading", level: 2, text: "La leche humana es especialmente importante" },
      {
        type: "paragraph",
        text: "Los prematuros y los recién nacidos de bajo peso se benefician de la leche de su propia madre y, cuando esta no está disponible, de leche humana pasteurizada según la indicación. Muchas veces la succión directa aún no es posible, por lo que la producción debe iniciarse y mantenerse mediante extracción.",
      },
      {
        type: "list",
        items: [
          "Iniciar el estímulo lo antes posible después del parto, según la condición materna.",
          "Extraerse leche con una frecuencia similar a la de las tomas de un recién nacido.",
          "Realizar contacto piel con piel y Método Canguro cuando esté autorizado.",
          "Registrar los volúmenes sin que la extracción se convierta en fuente de culpa.",
          "Recibir apoyo para la transición de sonda o vaso al pecho, según la madurez del bebé.",
        ],
      },
      { type: "heading", level: 2, text: "Licencia de maternidad en internaciones prolongadas" },
      {
        type: "paragraph",
        text: "La Ley n.º 15.222/2025 pasó a permitir, en determinadas internaciones relacionadas con el parto que superen las dos semanas, extender la licencia de maternidad hasta 120 días después del alta de la madre y del recién nacido, descontando el período anterior al parto, conforme a los requisitos legales.",
      },
    ],
  },
  "introducao-alimentar-e-continuidade": {
    title: "Introducción alimentaria y continuidad",
    subtitle: "A los seis meses, la comida complementa - no sustituye de inmediato",
    blocks: [
      { type: "heading", level: 2, text: "Cuándo empezar" },
      {
        type: "paragraph",
        text: "La alimentación complementaria debe comenzar alrededor de los seis meses cumplidos, cuando el niño muestra señales de disposición y necesidad nutricional. La leche materna sigue siendo importante y puede ofrecerse antes o después de las comidas, según la rutina y la preferencia de la familia.",
      },
      {
        type: "list",
        items: [
          "Ofrecer comida de verdad, variada y adecuada a la cultura de la familia.",
          "Avanzar en la consistencia; evitar licuar o colar de forma rutinaria.",
          "Ofrecer agua en vaso a partir de la introducción alimentaria.",
          "Evitar el azúcar y los ultraprocesados en los primeros años.",
          "Respetar las señales de hambre y saciedad; no forzar.",
          "Mantener la lactancia hasta los dos años o más.",
        ],
      },
    ],
  },
  "retorno-ao-trabalho-e-desmame": {
    title: "Regreso al trabajo y destete",
    subtitle: "Planificación, derechos y decisiones respetadas",
    blocks: [
      { type: "heading", level: 2, text: "Planificar antes de volver al trabajo" },
      {
        type: "list",
        items: [
          "Converse con la red de apoyo y con el lugar de trabajo.",
          "Comience a practicar la extracción algunas semanas antes, sin formar una reserva excesiva.",
          "Pruebe los recipientes y la forma de ofrecer la leche con otro cuidador.",
          "Amamante antes de salir y al reencontrarse con el bebé.",
          "En el trabajo, extráigase leche en intervalos compatibles con su comodidad y la edad del bebé.",
          "Transporte la leche en una bolsa térmica adecuada y almacénela correctamente.",
        ],
      },
      { type: "heading", level: 2, text: "Destete" },
      {
        type: "paragraph",
        text: "El destete puede ser natural, gradual o necesario por circunstancias familiares. Debe llevarse a cabo sin culpa y, cuando sea posible, de forma progresiva, para reducir el malestar y el riesgo de ingurgitamiento. Retire una toma a la vez, sustitúyala por vínculo y alimento adecuado a la edad, y observe las reacciones del niño y de los pechos.",
      },
      {
        type: "table",
        columns: ["Situación", "Conducta inicial"],
        rows: [
          [
            "El bebé mama mucho",
            "Observar señales de hambre, agarre y deglución; las tomas agrupadas pueden ser normales.",
          ],
          [
            "Poco aumento de peso",
            "Evaluación clínica completa, observación de la toma, plan para aumentar la transferencia y reevaluación temprana.",
          ],
          ["Regreso al trabajo", "Planificar extracciones regulares y su almacenamiento."],
          [
            "Relactación",
            "Estimulación frecuente, contacto piel con piel, oferta del pecho y seguimiento especializado.",
          ],
        ],
      },
    ],
  },
  "mitos-e-verdades": {
    title: "Mitos y verdades",
    subtitle: "Información para reducir el miedo y la culpa",
    blocks: [
      {
        type: "table",
        columns: ["Afirmación", "Aclaración"],
        rows: [
          [
            "“Mi leche es débil.”",
            "Mito. El aspecto varía y una leche más clara no es débil. Evalúe la ingesta por la deglución, los pañales, el peso y el estado clínico.",
          ],
          [
            "“Un pecho pequeño produce poca leche.”",
            "Mito. El tamaño está más relacionado con la grasa que con la capacidad de producción.",
          ],
          [
            "“El bebé que mama todo el tiempo no está satisfecho.”",
            "No siempre. Las tomas frecuentes y agrupadas pueden ser normales, especialmente en los brotes de crecimiento.",
          ],
          [
            "“Hay que lavar el pezón antes de cada toma.”",
            "Mito. La higiene habitual del baño es suficiente; lavar en exceso reseca y lastima.",
          ],
          [
            "“Las grietas necesitan tomar sol.”",
            "No es una recomendación de primera línea. Corregir el agarre y la causa es lo esencial.",
          ],
          [
            "“La mastitis obliga a dejar de amamantar.”",
            "Generalmente falso. En la mayoría de los casos, mantener la lactancia es seguro; la evaluación clínica orienta las excepciones.",
          ],
          [
            "“La cerveza negra aumenta la leche.”",
            "Mito y práctica no recomendada. El alcohol pasa a la leche y puede ser perjudicial.",
          ],
          [
            "“Después de los seis meses, la leche se vuelve agua.”",
            "Mito. Sigue aportando energía, nutrientes y protección inmunológica.",
          ],
          [
            "“Quien tiene implantes de silicona no puede amamantar.”",
            "No siempre. Muchas mujeres amamantan; la cirugía, la técnica y la sensibilidad pueden influir.",
          ],
          [
            "“El chupete no interfiere.”",
            "Puede interferir en la frecuencia de succión y en el establecimiento de la lactancia en algunos casos; debe evaluarse individualmente.",
          ],
          [
            "“La fórmula hace que el bebé duerma mejor.”",
            "No debe usarse como estrategia de sueño. El sueño infantil depende de muchos factores, y la fórmula tiene indicaciones específicas.",
          ],
          [
            "“Como estuve nerviosa, se me secó la leche.”",
            "El estrés puede dificultar temporalmente la eyección, pero no suele “secar” la leche de repente. El apoyo y el estímulo ayudan.",
          ],
          [
            "“Hay que alternar los pechos cada diez minutos.”",
            "Mito. El bebé puede terminar un pecho y luego recibir el otro; lo importante es la transferencia efectiva.",
          ],
          [
            "“Amamantar en público es inadecuado.”",
            "Mito. Amamantar es una necesidad del niño y debe respetarse.",
          ],
          [
            "“Quien vuelve al trabajo tiene que destetar.”",
            "Mito. La extracción, el almacenamiento, los descansos legales y el apoyo pueden permitir mantener la lactancia.",
          ],
        ],
      },
    ],
  },
  "direitos-e-legislacao-brasileira": {
    title: "Derechos y legislación brasileña",
    subtitle: "Protección del niño, de la mujer y de la lactancia",
    blocks: [
      { type: "heading", level: 2, text: "Principales garantías" },
      { type: "heading", level: 3, text: "Amamantar en espacios públicos" },
      {
        type: "paragraph",
        text: "La mujer no necesita esconderse para alimentar a su bebé. Los estados y municipios pueden tener normas específicas contra este tipo de discriminación. Incluso en ausencia de una ley local específica, impedir o humillar a una mujer por amamantar puede vulnerar la dignidad, la protección a la maternidad y los derechos del niño.",
      },
      { type: "heading", level: 3, text: "Salas de apoyo" },
      {
        type: "paragraph",
        text: "Son espacios privados, limpios y seguros dentro de empresas o instituciones, destinados a la extracción y conservación de la leche durante la jornada laboral. No son lugares para aislar a la mujer ni sustituyen el derecho a los descansos.",
      },
      {
        type: "table",
        columns: ["Norma", "Protección relacionada"],
        rows: [
          [
            "Constitución Federal y CLT (Consolidación de las Leyes del Trabajo)",
            "Protección a la maternidad, licencia de maternidad y estabilidad laboral, según el vínculo y los requisitos.",
          ],
          [
            "CLT, artículo 396",
            "Dos descansos especiales de media hora durante la jornada para amamantar, hasta que el niño cumpla seis meses; el período puede ampliarse cuando la salud lo exija. Los horarios deben acordarse individualmente.",
          ],
          [
            "Ley n.º 11.770/2008",
            "Programa Empresa Ciudadana: posibilidad de prorrogar la licencia de maternidad a 180 días en las empresas adherentes, con reglas aplicables también al servicio público.",
          ],
          [
            "Ley n.º 11.265/2006 y Decreto n.º 9.579/2018",
            "NBCAL: regula la promoción comercial de fórmulas, leches, alimentos infantiles, biberones, tetinas y chupetes.",
          ],
          ["Ley n.º 13.435/2017", "Instituye agosto como el Mes de la Lactancia Materna - Agosto Dorado."],
          [
            "Ley n.º 13.872/2019",
            "Garantiza la lactancia durante concursos públicos federales para hijos de hasta seis meses, con reglas de solicitud y compensación del tiempo.",
          ],
          ["Ley n.º 14.683/2023", "Instituye el Sello Empresa Amiga de la Lactancia."],
          [
            "Ley n.º 15.222/2025",
            "Amplía la protección de la licencia y del subsidio de maternidad en internaciones prolongadas relacionadas con el parto.",
          ],
          [
            "Resolución Cofen n.º 741/2024",
            "Reglamenta la asistencia de Enfermería en los Bancos y Puestos de Recolección de Leche Humana.",
          ],
          [
            "Resolución Cofen n.º 736/2024",
            "Dispone sobre la implementación del Proceso de Enfermería en distintos contextos de cuidado.",
          ],
        ],
      },
    ],
  },
  "atuacao-da-enfermagem-e-da-atencao-primaria": {
    title: "Actuación de Enfermería y de la Atención Primaria",
    subtitle: "Acoger, evaluar, intervenir y hacer seguimiento",
    blocks: [
      { type: "heading", level: 2, text: "Consulta de Enfermería" },
      {
        type: "paragraph",
        text: "La consulta debe seguir el Proceso de Enfermería: evaluación, diagnóstico de enfermería, planificación, implementación y evolución. El registro debe ser claro, fechado, individualizado e incluir las orientaciones brindadas, la respuesta de la madre y del bebé, y las señales de alerta.",
      },
      { type: "heading", level: 3, text: "Guía de evaluación" },
      {
        type: "table",
        columns: ["Dominio", "Qué evaluar"],
        rows: [
          [
            "Historia",
            "Parto, edad gestacional, peso, internaciones, enfermedades, medicamentos, cirugías mamarias, experiencia previa y objetivo de la familia.",
          ],
          [
            "Toma",
            "Posición, agarre, ritmo, deglución, duración espontánea, dolor, forma del pezón después de la toma.",
          ],
          [
            "Bebé",
            "Estado general, hidratación, ictericia, boca, tono muscular, succión, pañales, heces y curva de peso.",
          ],
          ["Pechos", "Forma, edema, trauma, dolor, hiperemia, masas, secreciones y signos de infección."],
          [
            "Contexto",
            "Red de apoyo, salud mental, sueño, alimentación, trabajo, violencia, barreras culturales y lingüísticas.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Conductas posibles" },
      {
        type: "list",
        items: [
          "Asesoramiento y demostración práctica.",
          "Corrección del agarre y de la posición.",
          "Extracción manual y plan de estímulo.",
          "Manejo del ingurgitamiento y del trauma mamario.",
          "Monitoreo del peso y de la hidratación.",
          "Derivación médica, odontológica, fonoaudiológica, nutricional, psicológica o al Banco de Leche según la necesidad.",
          "Plan compartido de suplementación cuando esté indicada.",
          "Visita domiciliaria y reevaluación temprana.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Límite profesional",
        text: "Los protocolos institucionales, la legislación del ejercicio profesional y la evaluación clínica deben orientar las prescripciones y los procedimientos. Un dictamen técnico del Cofen de 2025 señaló que un material del Coren-PR sobre manejo de la lactancia aún no cumplía los requisitos para ser reconocido como protocolo nacional; por lo tanto, no debe presentarse como un protocolo homologado.",
      },
    ],
  },
  "foz-do-iguacu-e-regiao-de-fronteira": {
    title: "Foz do Iguaçu y la región de frontera",
    subtitle: "Red local, diversidad y cuidados interculturales",
    blocks: [
      { type: "heading", level: 2, text: "La Atención Primaria como puerta de entrada" },
      {
        type: "paragraph",
        text: "En Foz do Iguaçu, las gestantes, las puérperas y los niños deben acudir a la Unidad Básica de Salud de referencia para el control prenatal, la consulta puerperal, el control del niño sano, la evaluación de peso, la orientación sobre el agarre, la vacunación y las derivaciones. Los contactos, horarios y unidades de referencia pueden cambiar; confirme en los canales oficiales de la Secretaría Municipal de Salud.",
      },
      { type: "heading", level: 3, text: "Particularidades de la triple frontera" },
      {
        type: "list",
        items: [
          "Circulación entre Brasil, Paraguay y Argentina, con posibles dificultades para la continuidad del cuidado.",
          "Diversidad lingüística y cultural, incluyendo familias que hablan español, guaraní, árabe y otras lenguas.",
          "Diferencias en documentación, cobertura de salud y lugar de nacimiento.",
          "Creencias familiares variadas sobre el calostro, los tés, los horarios, la exposición del cuerpo y el papel de los abuelos.",
          "Necesidad de una comunicación sencilla, intérprete cuando sea posible y respeto por las decisiones, sin renunciar a la seguridad.",
        ],
      },
      { type: "heading", level: 3, text: "Cómo realizar el asesoramiento intercultural" },
      {
        type: "list",
        items: [
          "Pregunte qué sabe y qué cree la familia.",
          "Identifique quién participa en las decisiones.",
          "Explique el motivo de cada recomendación, sin ridiculizar las creencias.",
          "Negocie alternativas seguras.",
          "Entregue orientación escrita en el idioma que la familia comprenda.",
          "Acuerde dónde y cuándo será la reevaluación.",
        ],
      },
      { type: "heading", level: 3, text: "Proyecto de Ley Municipal n.º 318/2025" },
      {
        type: "paragraph",
        text: "El proyecto proponía directrices para el fomento de la lactancia materna, un posible Pase Libre para mujeres que amamantan y donantes, salas de apoyo, campañas educativas y alianzas. Sin embargo, la tramitación oficial registra que la propuesta fue retirada por su autora y archivada en febrero de 2026. Por lo tanto, estas medidas no deben difundirse como ley municipal vigente.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Situación jurídica correcta",
        text: "Un proyecto de ley no es una ley. El texto puede inspirar políticas públicas, pero no crea un derecho exigible mientras no sea aprobado, sancionado y publicado.",
      },
      { type: "heading", level: 3, text: "Iniciativas legislativas posteriores" },
      {
        type: "paragraph",
        text: "En 2026 se presentó una propuesta municipal para exigir que las guarderías públicas y privadas dispongan de una estructura adecuada para la recepción y el almacenamiento de leche materna. La existencia de una propuesta no significa que esté vigente; la situación debe consultarse en el sistema legislativo municipal antes de cualquier difusión.",
      },
      { type: "heading", level: 3, text: "Flujo sugerido para la UBS" },
      {
        type: "list",
        items: [
          "Acoger sin juzgar e identificar la urgencia.",
          "Observar la toma siempre que sea posible.",
          "Evaluar a la madre y al bebé, incluyendo peso e hidratación.",
          "Realizar el manejo inicial y registrarlo.",
          "Definir el retorno en 24-72 horas según el riesgo.",
          "Derivar a maternidad, pediatría, banco de leche o urgencias cuando sea necesario.",
          "Garantizar la continuidad del cuidado para las familias que cruzan la frontera.",
        ],
      },
    ],
  },
  "checklists-e-planos-praticos": {
    title: "Listas de verificación y planes prácticos",
    subtitle: "Herramientas para usar en el día a día",
    blocks: [
      { type: "heading", level: 2, text: "Lista de verificación para el alta" },
      {
        type: "list",
        items: [
          "La madre logra posicionar al bebé y reconocer un buen agarre.",
          "Sabe identificar las señales de hambre y de saciedad.",
          "Recibió orientación sobre la libre demanda.",
          "Sabe qué señales requieren atención médica.",
          "Tiene agendado el control de la madre y del bebé.",
          "Sabe dónde pesar al bebé y buscar apoyo.",
          "Recibió orientación sobre medicamentos y alimentación.",
          "Si hay complemento, existe un plan escrito con reevaluación.",
        ],
      },
      { type: "heading", level: 3, text: "Plan de lactancia" },
      {
        type: "table",
        caption: "Preguntas para conversar con la familia y registrar las respuestas",
        columns: ["Pregunta", "Respuesta de la familia"],
        rows: [
          ["¿Quién podrá brindar apoyo en las primeras semanas?", ""],
          ["¿Dónde buscar ayuda profesional?", ""],
          ["¿Qué señales indican que debemos buscar atención médica?", ""],
          ["¿Cómo será el regreso al trabajo?", ""],
          ["¿Hay alguna creencia o preocupación que el equipo deba conocer?", ""],
          ["¿Cuáles son nuestros objetivos y límites?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Diario breve de seguimiento" },
      {
        type: "table",
        caption: "Plantilla en blanco para que la familia complete y lleve a las consultas",
        columns: ["Fecha", "Tomas/extracciones", "Pañales mojados", "Heces", "Dolor (0-10)", "Observaciones"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Señales de urgencia" },
      {
        type: "list",
        items: [
          "Bebé muy somnoliento o difícil de despertar.",
          "Poca o ninguna orina.",
          "Fiebre, hipotermia o dificultad para respirar.",
          "Pérdida de peso importante o empeoramiento clínico.",
          "Ictericia intensa o progresiva.",
          "Madre con fiebre alta, desmayo, falta de aire, dolor intenso, sangrado importante o señales de absceso.",
        ],
      },
    ],
  },
  "perguntas-frequentes": {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas directas a dudas comunes",
    blocks: [],
    faqItems: [
      {
        question: "¿Cuánto tiempo debe durar la toma?",
        answer:
          "No hay una duración fija. Observe la succión y la deglución; deje que el bebé termine espontáneamente.",
      },
      {
        question: "¿Tengo que ofrecer los dos pechos?",
        answer:
          "Ofrezca el primero hasta que el bebé lo suelte o reduzca la succión; después ofrezca el segundo. En la siguiente toma, puede empezar por el último pecho que quedó menos vaciado.",
      },
      {
        question: "¿Puedo amamantar acostada?",
        answer:
          "Sí, siempre que la madre y el bebé estén bien posicionados y el ambiente sea seguro. Tenga cuidado de no quedarse dormida en sofás o sillones.",
      },
      {
        question: "¿Puedo hacer actividad física?",
        answer: "En general, sí, después del alta médica y la recuperación. Hidrátese y use un sostén cómodo.",
      },
      {
        question: "¿Puedo teñirme el cabello?",
        answer:
          "Muchos productos tienen baja absorción, pero se recomienda buena ventilación, evitar el contacto con el bebé y seguir las indicaciones del fabricante y del profesional de salud.",
      },
      {
        question: "¿Puedo hacerme un estudio con contraste?",
        answer: "Muchos contrastes son compatibles, pero confirme el tipo específico; no suspenda la lactancia automáticamente.",
      },
      {
        question: "Mi bebé durmió muchas horas. ¿Lo despierto?",
        answer:
          "Depende de la edad, el peso y la condición clínica. Los recién nacidos con factores de riesgo necesitan orientación individual.",
      },
      {
        question: "¿Puedo usar pezoneras o pezones de silicona?",
        answer:
          "No deben usarse de forma rutinaria. Pueden ayudar en situaciones específicas, con seguimiento, ya que pueden empeorar el trauma o reducir la transferencia de leche.",
      },
      {
        question: "¿Cómo sé si el sacaleches está bien ajustado?",
        answer: "No debe doler, ni jalar demasiado la areola, ni lastimar. Ajuste el embudo y el nivel de succión.",
      },
      {
        question: "¿Puedo donar leche?",
        answer:
          "Las mujeres sanas, con producción excedente, pueden acudir a un Banco de Leche para la evaluación y orientación correspondiente.",
      },
      {
        question: "¿Es posible volver a producir leche después de haber dejado de amamantar?",
        answer:
          "Sí, la relactación es posible en muchos casos, pero exige estímulo frecuente y seguimiento.",
      },
      {
        question: "¿La fórmula está prohibida?",
        answer:
          "No. Es un alimento indicado en situaciones específicas. Debe prepararse con seguridad y no promoverse de forma comercial inadecuada.",
      },
      {
        question: "¿El padre o el acompañante puede ayudar?",
        answer:
          "Mucho: proteger el descanso, ocuparse de la casa, llevar agua y comida, ayudar con las posiciones, observar las señales y evitar comentarios que generen culpa.",
      },
      {
        question: "¿Los abuelos pueden participar?",
        answer:
          "Sí. Son parte importante de la red de apoyo. La información actualizada ayuda a reemplazar prácticas antiguas, como ofrecer té, por un apoyo seguro.",
      },
      {
        question: "¿Cuándo acudir a un Banco de Leche?",
        answer:
          "El dolor, la dificultad de agarre, la baja producción, el exceso de leche, la necesidad de extracción, la prematuridad o el interés en donar son motivos comunes.",
      },
    ],
  },
  "referencias-essenciais-e-fontes-consultadas": {
    title: "Referencias esenciales y fuentes consultadas",
    blocks: [
      {
        type: "list",
        items: [
          "Organización Mundial de la Salud. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Consultas actualizadas hasta julio de 2026.",
          "Brasil. Ministerio de Salud. Guía alimentaria para niños brasileños menores de 2 años. Actualización publicada en 2025.",
          "Brasil. Ministerio de Salud. Lactancia materna; Salas de Apoyo a la Lactancia; Donación de leche humana; Líneas de Cuidado del Niño.",
          "Anvisa. Banco de leche humana: funcionamiento, prevención y control de riesgos. Brasilia, 2008.",
          "Brasil. Ley n.º 11.265/2006 y Decreto n.º 9.579/2018 - Norma Brasileña de Comercialización de Alimentos para Lactantes y Niños de Primera Infancia, tetinas, chupetes y biberones.",
          "Brasil. Ley n.º 13.435/2017 - Mes de la Lactancia Materna.",
          "Brasil. Ley n.º 13.872/2019 - Lactancia en concursos públicos federales.",
          "Brasil. Ley n.º 14.683/2023 - Sello Empresa Amiga de la Lactancia.",
          "Brasil. Ley n.º 15.222/2025 - licencia de maternidad y subsidio de maternidad en internación prolongada.",
          "Consejo Federal de Enfermería. Resolución Cofen n.º 736/2024 - Proceso de Enfermería.",
          "Consejo Federal de Enfermería. Resolución Cofen n.º 741/2024 - asistencia de Enfermería en Bancos y Puestos de Recolección de Leche Humana.",
          "Consejo Federal de Enfermería. Dictamen n.º 32/2025 de las Cámaras Técnicas de Enfermería.",
          "Cámara Municipal de Foz do Iguaçu. Proyecto de Ley n.º 318/2025 y su tramitación legislativa; Requerimiento n.º 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Enlaces institucionales" },
      {
        type: "list",
        items: [
          "Ministerio de Salud - Lactancia Materna",
          "Red Brasileña de Bancos de Leche Humana",
          "Consejo Federal de Enfermería",
          "Cámara Municipal de Foz do Iguaçu - SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Actualización",
        text: "Las leyes, los flujos municipales, los teléfonos y los protocolos pueden cambiar. Antes de utilizar este material como norma institucional, confirme la versión vigente en las fuentes oficiales y adáptelo al protocolo aprobado por el servicio correspondiente.",
      },
    ],
  },
};

export default es;
