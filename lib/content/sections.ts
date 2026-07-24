import type { Section } from "./types";

// Conteúdo-fonte em português, extraído do guia técnico da cliente
// ("Aleitamento Materno pós Unioeste"). Esta é a fonte única de dados
// para o site na Fase 1 (só PT). Na Fase 2, este mesmo conteúdo migra
// para o Supabase (ver supabase/schema.sql) e passa a alimentar o
// pipeline de tradução automática para os outros 7 idiomas.
export const sections: Section[] = [
  {
    slug: "recomendacoes-essenciais",
    title: "Recomendações essenciais",
    subtitle: "O que todas as famílias precisam saber",
    icon: "Heart",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "A recomendação central" },
      {
        type: "paragraph",
        text: "A Organização Mundial da Saúde e o Ministério da Saúde recomendam iniciar a amamentação na primeira hora de vida, oferecer somente leite materno nos primeiros seis meses e continuar amamentando, junto com alimentação complementar adequada, até dois anos ou mais. “Exclusivo” significa que o bebê não recebe água, chás, sucos, outros leites ou alimentos, exceto medicamentos, vitaminas, minerais ou solução de reidratação quando indicados pelo profissional da saúde.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mensagem-chave",
        text: "O leite materno já contém água suficiente, inclusive em dias quentes. Para um bebê menor de seis meses em aleitamento materno exclusivo, oferecer água ou chá pode reduzir a sucção, diminuir a produção de leite e aumentar riscos de contaminação.",
      },
      { type: "heading", level: 2, text: "Princípios que favorecem a amamentação" },
      {
        type: "list",
        items: [
          "Contato pele a pele logo após o nascimento, quando mãe e bebê estiverem clinicamente estáveis.",
          "Alojamento conjunto e permanência próxima da mãe e do bebê.",
          "Livre demanda: oferecer a mama quando o bebê demonstrar sinais de fome, de dia e de noite.",
          "Evitar horários rígidos e limitar a duração da mamada.",
          "Observar e corrigir precocemente pega e posicionamento.",
          "Evitar bicos, chupetas e mamadeiras, especialmente no estabelecimento da amamentação, salvo indicação individualizada.",
          "Não oferecer complemento sem avaliação clínica e sem plano de proteção da produção de leite.",
          "Garantir apoio respeitoso, sem culpa ou coerção.",
        ],
      },
      { type: "heading", level: 2, text: "Benefícios" },
      {
        type: "table",
        columns: ["Para o bebê", "Para a mulher", "Para a família e sociedade"],
        rows: [
          [
            "Proteção contra diarreias e infecções respiratórias; nutrição adequada; apoio ao desenvolvimento e menor risco futuro de excesso de peso.",
            "Auxilia a contração uterina; associa-se a menor risco de câncer de mama e ovário e diabetes tipo 2; fortalece vínculo e autoconfiança.",
            "Menos gastos com substitutos; menos faltas por doença; menor impacto ambiental; fortalecimento da saúde pública.",
          ],
        ],
      },
    ],
  },
  {
    slug: "como-a-lactacao-funciona",
    title: "Como a lactação funciona",
    subtitle: "Produção, ejeção e regulação do leite",
    icon: "Droplets",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "A mama produz leite em resposta ao esvaziamento" },
      {
        type: "paragraph",
        text: "Na gestação, os hormônios preparam o tecido mamário. Após a saída da placenta, a queda da progesterona permite aumento da produção. A prolactina participa da síntese do leite; a ocitocina promove a ejeção, fazendo o leite fluir pelos ductos. Sucção frequente, efetiva e esvaziamento adequado são os principais estímulos para manter a produção.",
      },
      { type: "heading", level: 2, text: "Colostro, leite de transição e leite maduro" },
      {
        type: "table",
        columns: ["Fase", "Características", "O que orientar"],
        rows: [
          [
            "Colostro",
            "Amarelado, espesso, em pequeno volume e rico em componentes de defesa.",
            "Pequenas quantidades são esperadas; o estômago do recém-nascido é pequeno e mamadas frequentes são normais.",
          ],
          [
            "Transição",
            "Aumenta em volume e muda de aspecto nos primeiros dias.",
            "A “descida do leite” pode vir com mamas mais cheias, calor e vazamento.",
          ],
          [
            "Maduro",
            "Composição varia ao longo do dia e da mamada.",
            "Não é necessário trocar de mama por relógio; permita que o bebê termine espontaneamente e ofereça a outra.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "O que realmente aumenta a produção" },
      {
        type: "list",
        items: [
          "Mais mamadas efetivas e/ou ordenhas, inclusive à noite quando necessário.",
          "Correção da pega.",
          "Contato pele a pele.",
          "Tratamento de dor e dificuldades que reduzem a sucção.",
          "Descanso possível, hidratação conforme sede e alimentação adequada.",
          "Evitar complementos desnecessários que substituam mamadas.",
        ],
      },
    ],
  },
  {
    slug: "primeiras-horas-e-primeiros-dias",
    title: "Primeiras horas e primeiros dias",
    subtitle: "Da sala de parto à chegada em casa",
    icon: "Sunrise",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Primeira hora de vida" },
      {
        type: "paragraph",
        text: "Quando não houver contraindicação clínica, o contato pele a pele ininterrupto ajuda a estabilizar temperatura, respiração e glicemia, favorece o vínculo e aumenta a chance de início precoce da amamentação. Procedimentos de rotina podem ser organizados para não separar a dupla desnecessariamente.",
      },
      { type: "heading", level: 2, text: "Comportamentos normais" },
      {
        type: "list",
        items: [
          "Mamadas muito frequentes, inclusive em “blocos” no fim do dia.",
          "Sono variável e necessidade de acordar recém-nascido em situações específicas.",
          "Pouco colostro visível, mas suficiente quando a transferência está adequada.",
          "Fezes mudando de mecônio escuro para tons esverdeados e depois amarelados.",
          "Perda de peso nos primeiros dias, que deve ser acompanhada clinicamente.",
        ],
      },
      { type: "heading", level: 2, text: "Quando acordar o bebê" },
      {
        type: "paragraph",
        text: "Recém-nascidos prematuros, pequenos, com icterícia, baixo ganho ponderal, sonolência excessiva ou outras condições podem precisar de oferta programada e avaliação de mamadas. A orientação deve ser individualizada. Em geral, enquanto a amamentação não está bem estabelecida, não se deve permitir longos intervalos sem avaliar sinais clínicos e evolução do peso.",
      },
    ],
  },
  {
    slug: "pega-e-posicionamento",
    title: "Pega e posicionamento",
    subtitle: "Conforto para a mulher e eficiência para o bebê",
    icon: "Baby",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Posicionamento adequado" },
      {
        type: "list",
        items: [
          "Mãe confortável, costas e braços apoiados.",
          "Bebê de frente para a mama, barriga voltada para o corpo da mãe.",
          "Cabeça e tronco alinhados; pescoço sem torção.",
          "Corpo do bebê próximo e bem sustentado.",
          "Nariz na altura do mamilo antes de iniciar a pega.",
        ],
      },
      { type: "heading", level: 2, text: "Sinais de boa pega" },
      {
        type: "list",
        items: [
          "Boca bem aberta.",
          "Queixo tocando a mama.",
          "Lábios virados para fora.",
          "Mais aréola visível acima da boca do que abaixo, quando a anatomia permite observar.",
          "Bochechas arredondadas, sem covinhas.",
          "Sucções lentas e profundas, com pausas e deglutição perceptível.",
          "Ausência de dor persistente; pode haver sensibilidade inicial breve, mas não dor intensa durante toda a mamada.",
        ],
      },
      { type: "heading", level: 2, text: "Como ajudar o bebê a pegar" },
      {
        type: "list",
        items: [
          "Aproxime o bebê da mama, em vez de levar a mama até ele.",
          "Toque o lábio superior com o mamilo e aguarde a boca abrir bem.",
          "Direcione o mamilo para o palato e aproxime rapidamente o corpo do bebê.",
          "Observe conforto e deglutição.",
          "Se doer, introduza delicadamente o dedo mínimo no canto da boca para quebrar o vácuo e tente novamente.",
        ],
      },
      { type: "heading", level: 2, text: "Posições úteis" },
      {
        type: "table",
        columns: ["Posição", "Pode ajudar quando..."],
        rows: [
          ["Tradicional", "Mãe e bebê estão confortáveis e a pega já está se estabelecendo."],
          ["Cruzada", "É necessário maior controle da cabeça para corrigir a pega."],
          [
            "Invertida ou “bola de futebol”",
            "Após cesárea, em mamas grandes, gêmeos ou necessidade de visualizar melhor a pega.",
          ],
          [
            "Deitada de lado",
            "Mãe precisa descansar; requer ambiente seguro e atenção ao risco de adormecer.",
          ],
          [
            "Cavalinho",
            "Bebês com refluxo, hipotonia ou dificuldade de coordenação, sob orientação.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Dor não deve ser normalizada",
        text: "Fissuras, sangramento, deformação do mamilo ao final da mamada ou dor que não melhora após ajuste indicam necessidade de avaliação.",
      },
    ],
  },
  {
    slug: "como-saber-se-o-bebe-mama-o-suficiente",
    title: "Como saber se o bebê mama o suficiente",
    subtitle: "Avaliação além do tempo no peito",
    icon: "Scale",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Sinais favoráveis" },
      {
        type: "list",
        items: [
          "Mamada com sucção profunda e deglutição.",
          "Bebê relaxa mãos e corpo após a mamada.",
          "Eliminação de urina em quantidade progressiva nos primeiros dias.",
          "Fezes com transição esperada.",
          "Ganho de peso acompanhado na curva de crescimento.",
          "Mamas mais macias após mamadas.",
        ],
      },
      { type: "heading", level: 2, text: "Fraldas e evacuações" },
      {
        type: "paragraph",
        text: "A contagem de fraldas é apenas um dos indicadores. A partir da subida do leite, costuma-se esperar várias fraldas bem molhadas ao dia; a OMS usa como referência pelo menos seis fraldas descartáveis molhadas em 24 horas, junto com crescimento adequado e fezes compatíveis. A avaliação do peso, do estado geral e da mamada é indispensável.",
      },
      { type: "heading", level: 2, text: "Peso" },
      {
        type: "paragraph",
        text: "A interpretação deve considerar idade gestacional, peso ao nascer, perda inicial, recuperação, técnica de pesagem e curva da OMS. Não se deve concluir “leite fraco” por um único peso. Perda excessiva, ausência de recuperação esperada ou ganho insuficiente exigem avaliação da mamada, condições clínicas, frequência de oferta e, quando necessário, plano de suplementação temporária com proteção da lactação.",
      },
    ],
  },
  {
    slug: "dificuldades-frequentes-e-manejo",
    title: "Dificuldades frequentes e manejo",
    subtitle: "O que fazer e quando encaminhar",
    icon: "TriangleAlert",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Ingurgitamento mamário" },
      {
        type: "paragraph",
        text: "A mama fica muito cheia, endurecida e dolorosa; a aréola pode ficar tensa, dificultando a pega. Ocorre quando há produção maior que a retirada, mamadas ineficazes ou intervalos longos.",
      },
      {
        type: "list",
        items: [
          "Amamentar com frequência e corrigir a pega.",
          "Antes da mamada, fazer massagem suave e pequena ordenha para amolecer a aréola.",
          "Após a mamada, aplicar frio por curto período para conforto, protegido por tecido.",
          "Usar sutiã confortável, sem compressão.",
          "Evitar massagens vigorosas, calor prolongado e esvaziamento excessivo sem necessidade, pois podem aumentar edema e produção.",
        ],
      },
      { type: "heading", level: 2, text: "Fissuras e trauma mamilar" },
      {
        type: "paragraph",
        text: "A causa mais comum é pega inadequada. Também podem contribuir retirada incorreta do bebê, bombas mal ajustadas, dermatites, infecções e alterações orais.",
      },
      {
        type: "list",
        items: [
          "Corrigir a causa.",
          "Manter a região limpa e seca; lavar as mamas apenas durante o banho, sem sabonetes agressivos no mamilo.",
          "Evitar álcool, pomadas caseiras, cascas de alimentos e exposição solar como tratamento.",
          "Avaliar sinais de infecção e necessidade de tratamento específico.",
        ],
      },
      { type: "heading", level: 2, text: "Ductos inflamados e mastite" },
      {
        type: "paragraph",
        text: "Dor localizada, área avermelhada, edema e mal-estar podem fazer parte do espectro inflamatório da mastite. Febre persistente, piora clínica ou ausência de melhora exigem avaliação médica. Em geral, manter a amamentação é seguro e ajuda a resolver a estase; interrupção abrupta pode piorar.",
      },
      {
        type: "list",
        items: [
          "Repouso, hidratação, analgesia compatível com lactação e frio local podem ajudar.",
          "Evitar apertar, “desmanchar caroço” com força ou usar vibração agressiva.",
          "Antibiótico só quando indicado.",
          "Suspeitar de abscesso se houver massa flutuante, piora ou persistência; pode necessitar imagem e drenagem.",
        ],
      },
      { type: "heading", level: 2, text: "Candidíase: cuidado com diagnósticos excessivos" },
      {
        type: "paragraph",
        text: "Dor em queimação e mamilo brilhante são frequentemente atribuídos à candidíase, mas podem ter outras causas, como trauma, vasoespasmo ou dermatite. O diagnóstico deve ser clínico e o tratamento, direcionado. Não usar antifúngicos repetidamente sem reavaliação.",
      },
      { type: "heading", level: 2, text: "Baixa produção percebida ou real" },
      {
        type: "paragraph",
        text: "Mamas mais macias, ausência de vazamento e mamadas frequentes não provam baixa produção. A avaliação deve se basear em transferência, diurese, fezes, peso e estado clínico.",
      },
      { type: "heading", level: 2, text: "Reflexo de ejeção forte e excesso de leite" },
      {
        type: "list",
        items: [
          "Posição reclinada pode reduzir o fluxo.",
          "Permitir pausas e arroto.",
          "Evitar ordenhar grandes volumes apenas para “esvaziar”.",
          "Avaliar ganho de peso, desconforto, engasgos e fezes.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Atenção",
        text: "Chás, cerveja preta, canjica e produtos “lactagogos” não substituem avaliação da mamada. Alguns podem ser prejudiciais ou interagir com medicamentos.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Sinais de alerta no recém-nascido",
        text: "Dificuldade para acordar, recusa persistente da mama, menos urina, boca seca, choro fraco, febre ou temperatura baixa, icterícia intensa, respiração rápida ou com esforço, coloração azulada, vômitos verdes ou perda de peso importante exigem avaliação imediata.",
      },
    ],
  },
  {
    slug: "ordenha-conservacao-e-oferta",
    title: "Ordenha, conservação e oferta",
    subtitle: "Retirar leite com segurança",
    icon: "Milk",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Quando ordenhar" },
      {
        type: "list",
        items: [
          "Para aliviar aréola tensa antes da pega.",
          "Quando mãe e bebê estão separados.",
          "Para estimular produção em prematuros ou sucção ineficaz.",
          "Para formar estoque antes do retorno ao trabalho.",
          "Para doação ao Banco de Leite Humano.",
        ],
      },
      { type: "heading", level: 2, text: "Ordenha manual" },
      {
        type: "list",
        items: [
          "Lave as mãos e escolha local limpo e tranquilo.",
          "Massageie suavemente a mama em movimentos circulares.",
          "Posicione polegar acima e indicador abaixo da aréola, formando um “C”.",
          "Empurre os dedos para trás, em direção ao tórax, e comprima ritmicamente sem deslizar sobre a pele.",
          "Alterne os pontos ao redor da aréola e troque de mama.",
          "Colete em recipiente adequado e identificado.",
        ],
      },
      { type: "heading", level: 2, text: "Bomba" },
      {
        type: "paragraph",
        text: "A bomba não deve causar dor. O tamanho do funil precisa permitir movimento do mamilo sem atrito excessivo. Comece com sucção baixa e aumente até o máximo confortável. Higienize as partes conforme instruções do fabricante e recomendações sanitárias.",
      },
      { type: "heading", level: 2, text: "Conservação: diferencie uso doméstico e doação" },
      {
        type: "callout",
        tone: "info",
        title: "Importante",
        text: "As regras do Banco de Leite para doação podem ser mais restritivas. O Ministério da Saúde orienta que o leite destinado à doação fique congelado por até 10 dias antes de ser entregue ao Banco de Leite. Para consumo do próprio bebê, siga o protocolo do serviço que acompanha a família e as condições de armazenamento.",
      },
      {
        type: "table",
        columns: ["Etapa", "Boas práticas"],
        rows: [
          [
            "Recipiente",
            "Vidro de boca larga com tampa plástica, esterilizado conforme orientação do Banco de Leite, ou recipiente próprio para leite humano.",
          ],
          [
            "Identificação",
            "Nome, data e hora da coleta; quando aplicável, idade gestacional ou identificação do bebê.",
          ],
          ["Resfriamento", "Guardar imediatamente no local indicado; evitar porta da geladeira."],
          ["Descongelamento", "Na geladeira ou em banho-maria com água morna, sem ferver."],
          ["Aquecimento", "Nunca usar micro-ondas: pode criar pontos quentes e alterar componentes."],
          [
            "Sobras",
            "Não recongelar leite descongelado; descarte sobra que teve contato com a saliva conforme orientação do serviço.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Como oferecer" },
      {
        type: "paragraph",
        text: "Copo pequeno, colher ou dispositivo indicado podem ser usados. Mamadeira não é obrigatória e pode interferir na dinâmica oral em algumas crianças. A escolha deve considerar idade, habilidade, segurança e orientação profissional. Nunca despeje o leite na boca; permita que o bebê lamba e sorva, em posição semissentada.",
      },
    ],
  },
  {
    slug: "alimentacao-medicamentos-e-habitos-maternos",
    title: "Alimentação, medicamentos e hábitos maternos",
    subtitle: "Cuidado sem proibições desnecessárias",
    icon: "Apple",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Alimentação da mulher" },
      {
        type: "paragraph",
        text: "Não existe dieta universal da lactante. A maioria das mulheres pode manter alimentação variada, baseada em alimentos in natura e minimamente processados. Beba água conforme sede. Restrições alimentares sem indicação podem causar deficiência, culpa e abandono precoce da amamentação.",
      },
      { type: "heading", level: 2, text: "Cafeína, álcool e tabaco" },
      {
        type: "list",
        items: [
          "Cafeína: moderar e observar irritabilidade ou alteração do sono do bebê; considerar café, chás, energéticos e chocolate.",
          "Álcool: a opção mais segura é não consumir. Estratégias baseadas em intervalo devem ser discutidas com profissional, pois “ordenhar e descartar” não acelera a eliminação do álcool.",
          "Tabaco e vape: evitar. Se a mulher não consegue parar imediatamente, deve receber apoio para cessação e reduzir exposição passiva; não fumar perto do bebê nem em ambientes fechados.",
          "Drogas ilícitas: podem contraindicar temporariamente a amamentação e exigem avaliação urgente e suporte sem julgamento.",
        ],
      },
      { type: "heading", level: 2, text: "Medicamentos" },
      {
        type: "paragraph",
        text: "Grande parte dos medicamentos é compatível com a amamentação. Suspender o leite sem necessidade pode trazer mais risco do que manter. A decisão deve considerar idade e saúde do bebê, dose, via, duração, transferência para o leite e alternativas. Consulte fontes especializadas e profissional habilitado.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Nunca faça por conta própria",
        text: "Não interrompa medicação essencial nem a amamentação sem orientação. Fitoterápicos, “naturais” e suplementos também podem causar efeitos e interações.",
      },
    ],
  },
  {
    slug: "situacoes-especiais-e-contraindicacoes",
    title: "Situações especiais e contraindicações",
    subtitle: "Quando amamentar, pausar ou substituir",
    icon: "ShieldAlert",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Poucas situações contraindicam totalmente" },
      {
        type: "paragraph",
        text: "No Brasil, mães vivendo com HIV e mães com HTLV-1 ou HTLV-2 não devem amamentar, devido ao risco de transmissão. O SUS deve garantir orientação, inibição da lactação quando indicada e fórmula infantil. Aleitamento cruzado - outra mulher amamentar o bebê - não é recomendado devido ao risco de transmissão de infecções.",
      },
      { type: "heading", level: 2, text: "Situações que exigem avaliação individual" },
      {
        type: "table",
        columns: ["Condição", "Orientação geral"],
        rows: [
          ["Hepatite B", "Em geral, amamentação permitida com imunoprofilaxia adequada do recém-nascido."],
          ["Hepatite C", "Em geral, permitida; avaliar sangramento mamilar e situações específicas."],
          [
            "Tuberculose",
            "Frequentemente é possível manter leite materno com medidas de controle e tratamento; conduta depende de contagiosidade.",
          ],
          ["Herpes", "Não oferecer a mama com lesão ativa; proteger lesões em outras áreas e manter higiene."],
          [
            "COVID-19/influenza",
            "Em geral, manter amamentação com higiene das mãos e medidas respiratórias indicadas.",
          ],
          [
            "Uso de radiofármacos ou medicamentos específicos",
            "Pode exigir pausa temporária ou contraindicação; buscar fonte especializada.",
          ],
          ["Galactosemia clássica no bebê", "Contraindicação ao leite humano."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Segurança",
        text: "Esta tabela é resumida. A conduta depende do diagnóstico, tratamento e condição do bebê. Procure avaliação especializada.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Autonomia e acolhimento",
        text: "Promover a amamentação não significa obrigar. Mulheres que não podem ou não desejam amamentar também merecem orientação segura, acesso à alimentação apropriada e cuidado sem julgamento.",
      },
    ],
  },
  {
    slug: "prematuridade-internacao-e-metodo-canguru",
    title: "Prematuridade, internação e Método Canguru",
    subtitle: "Proteger o leite e o vínculo",
    icon: "Stethoscope",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Leite humano é especialmente importante" },
      {
        type: "paragraph",
        text: "Prematuros e recém-nascidos de baixo peso se beneficiam do leite da própria mãe e, quando este não está disponível, do leite humano pasteurizado conforme indicação. Muitas vezes a sucção direta ainda não é possível, então a produção precisa ser iniciada e mantida por ordenha.",
      },
      {
        type: "list",
        items: [
          "Iniciar estímulo o mais precocemente possível após o parto, conforme condição materna.",
          "Ordenhar com frequência semelhante às mamadas de um recém-nascido.",
          "Realizar contato pele a pele e Método Canguru quando liberado.",
          "Registrar volumes sem transformar a ordenha em fonte de culpa.",
          "Receber apoio para transição de sonda/copo para o peito, conforme maturidade.",
        ],
      },
      { type: "heading", level: 2, text: "Licença-maternidade em internação prolongada" },
      {
        type: "paragraph",
        text: "A Lei nº 15.222/2025 passou a permitir, em determinadas internações relacionadas ao parto que ultrapassem duas semanas, extensão da licença-maternidade por até 120 dias após a alta da mãe e do recém-nascido, descontado o período anterior ao parto, conforme requisitos legais.",
      },
    ],
  },
  {
    slug: "introducao-alimentar-e-continuidade",
    title: "Introdução alimentar e continuidade",
    subtitle: "Aos seis meses, comida complementa — não substitui imediatamente",
    icon: "UtensilsCrossed",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Quando começar" },
      {
        type: "paragraph",
        text: "A alimentação complementar deve começar por volta de seis meses completos, quando a criança apresenta prontidão e necessidade nutricional. O leite materno continua importante e pode ser oferecido antes ou depois das refeições conforme rotina e preferência.",
      },
      {
        type: "list",
        items: [
          "Oferecer comida de verdade, variada e adequada à cultura da família.",
          "Evoluir consistência; evitar liquidificar ou peneirar rotineiramente.",
          "Oferecer água em copo a partir da introdução alimentar.",
          "Evitar açúcar e ultraprocessados nos primeiros anos.",
          "Respeitar sinais de fome e saciedade; não forçar.",
          "Manter amamentação até dois anos ou mais.",
        ],
      },
    ],
  },
  {
    slug: "retorno-ao-trabalho-e-desmame",
    title: "Retorno ao trabalho e desmame",
    subtitle: "Planejamento, direitos e escolhas respeitadas",
    icon: "Briefcase",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Planejar antes do retorno" },
      {
        type: "list",
        items: [
          "Converse com a rede de apoio e o local de trabalho.",
          "Inicie treino de ordenha algumas semanas antes, sem formar estoque excessivo.",
          "Teste recipientes e forma de oferta com outro cuidador.",
          "Amamente antes de sair e ao reencontrar o bebê.",
          "No trabalho, ordenhe em intervalos compatíveis com seu conforto e a idade do bebê.",
          "Transporte em bolsa térmica adequada e armazene corretamente.",
        ],
      },
      { type: "heading", level: 2, text: "Desmame" },
      {
        type: "paragraph",
        text: "O desmame pode ser natural, gradual ou necessário por circunstâncias da família. Deve ser conduzido sem culpa e, quando possível, de forma progressiva para reduzir sofrimento e risco de ingurgitamento. Retire uma mamada de cada vez, substitua por vínculo e alimento adequado à idade e observe as reações da criança e das mamas.",
      },
      {
        type: "table",
        columns: ["Situação", "Conduta inicial"],
        rows: [
          [
            "Bebê mama muito",
            "Observar sinais de fome, pega e deglutição; mamadas agrupadas podem ser normais.",
          ],
          [
            "Pouco ganho de peso",
            "Avaliação clínica completa, mamada observada, plano de aumento da transferência e reavaliação precoce.",
          ],
          ["Retorno ao trabalho", "Planejar ordenhas regulares e armazenamento."],
          [
            "Relactação",
            "Estimulação frequente, contato pele a pele, oferta ao peito e acompanhamento especializado.",
          ],
        ],
      },
    ],
  },
  {
    slug: "mitos-e-verdades",
    title: "Mitos e verdades",
    subtitle: "Informação para reduzir medo e culpa",
    icon: "CircleHelp",
    contentKind: "myths_facts",
    blocks: [
      {
        type: "table",
        columns: ["Afirmação", "Esclarecimento"],
        rows: [
          [
            "“Meu leite é fraco.”",
            "Mito. A aparência varia e leite mais claro não é fraco. Avalie ingestão por deglutição, fraldas, peso e estado clínico.",
          ],
          [
            "“Peito pequeno produz pouco leite.”",
            "Mito. O tamanho está mais relacionado à gordura que à capacidade de produção.",
          ],
          [
            "“Bebê que mama toda hora não está satisfeito.”",
            "Nem sempre. Mamadas frequentes e agrupadas podem ser normais, especialmente em surtos de crescimento.",
          ],
          [
            "“Preciso lavar o mamilo antes de cada mamada.”",
            "Mito. Higiene habitual no banho é suficiente; lavagem excessiva resseca e machuca.",
          ],
          [
            "“Fissura precisa tomar sol.”",
            "Não é recomendação de primeira linha. Corrigir pega e causa é essencial.",
          ],
          [
            "“Mastite obriga parar de amamentar.”",
            "Geralmente falso. Na maioria dos casos, manter a amamentação é seguro; avaliação clínica orienta exceções.",
          ],
          [
            "“Cerveja preta aumenta leite.”",
            "Mito e prática não recomendada. Álcool passa para o leite e pode prejudicar.",
          ],
          [
            "“Depois de seis meses o leite vira água.”",
            "Mito. Continua oferecendo energia, nutrientes e proteção imunológica.",
          ],
          [
            "“Quem usa silicone não consegue amamentar.”",
            "Nem sempre. Muitas mulheres amamentam; cirurgia, técnica e sensibilidade podem influenciar.",
          ],
          [
            "“Chupeta não interfere.”",
            "Pode interferir na frequência de sucção e no estabelecimento em alguns casos; deve ser discutida individualmente.",
          ],
          [
            "“Fórmula faz o bebê dormir melhor.”",
            "Não deve ser usada como estratégia de sono. O sono infantil depende de muitos fatores e fórmula tem indicações específicas.",
          ],
          [
            "“Se fiquei nervosa, meu leite secou.”",
            "Estresse pode dificultar temporariamente a ejeção, mas não costuma “secar” de repente. Apoio e estímulo ajudam.",
          ],
          [
            "“É preciso alternar as mamas a cada dez minutos.”",
            "Mito. O bebê pode terminar uma mama e depois receber a outra; o importante é transferência efetiva.",
          ],
          [
            "“Amamentar em público é inadequado.”",
            "Mito. Amamentar é uma necessidade da criança e deve ser respeitado.",
          ],
          [
            "“Quem volta ao trabalho precisa desmamar.”",
            "Mito. Ordenha, armazenamento, intervalos legais e apoio podem manter a amamentação.",
          ],
        ],
      },
    ],
  },
  {
    slug: "direitos-e-legislacao-brasileira",
    title: "Direitos e legislação brasileira",
    subtitle: "Proteção da criança, da mulher e da amamentação",
    icon: "Gavel",
    contentKind: "legislation",
    blocks: [
      { type: "heading", level: 2, text: "Principais garantias" },
      { type: "heading", level: 3, text: "Amamentação em espaço público" },
      {
        type: "paragraph",
        text: "A mulher não precisa se esconder para alimentar o bebê. Estados e municípios podem ter normas específicas contra constrangimento. Mesmo na ausência de lei local específica, impedir ou humilhar uma mulher por amamentar pode violar dignidade, proteção à maternidade e direitos da criança.",
      },
      { type: "heading", level: 3, text: "Salas de apoio" },
      {
        type: "paragraph",
        text: "São espaços privados, limpos e seguros em empresas ou instituições, destinados à ordenha e conservação do leite durante a jornada. Não são locais para isolar a mulher nem substituir o direito aos intervalos.",
      },
      {
        type: "table",
        columns: ["Norma", "Proteção relacionada"],
        rows: [
          [
            "Constituição Federal e CLT",
            "Proteção à maternidade, licença-maternidade e estabilidade, conforme vínculo e requisitos.",
          ],
          [
            "CLT, art. 396",
            "Dois descansos especiais de meia hora durante a jornada para amamentar, até a criança completar seis meses; período pode ser ampliado quando a saúde exigir. Horários devem ser definidos em acordo individual.",
          ],
          [
            "Lei nº 11.770/2008",
            "Programa Empresa Cidadã: possibilidade de prorrogação da licença-maternidade para 180 dias em empresas aderentes e regras aplicáveis ao serviço público.",
          ],
          [
            "Lei nº 11.265/2006 e Decreto nº 9.579/2018",
            "NBCAL: regula promoção comercial de fórmulas, leites, alimentos infantis, mamadeiras, bicos e chupetas.",
          ],
          ["Lei nº 13.435/2017", "Institui agosto como Mês do Aleitamento Materno - Agosto Dourado."],
          [
            "Lei nº 13.872/2019",
            "Garante amamentação durante concursos públicos federais para filhos de até seis meses, com regras de solicitação e compensação do tempo.",
          ],
          ["Lei nº 14.683/2023", "Institui o Selo Empresa Amiga da Amamentação."],
          [
            "Lei nº 15.222/2025",
            "Amplia proteção da licença e do salário-maternidade em internações prolongadas relacionadas ao parto.",
          ],
          [
            "Resolução Cofen nº 741/2024",
            "Regulamenta a assistência de Enfermagem em Bancos e Postos de Coleta de Leite Humano.",
          ],
          [
            "Resolução Cofen nº 736/2024",
            "Dispõe sobre a implementação do Processo de Enfermagem em contextos de cuidado.",
          ],
        ],
      },
    ],
  },
  {
    slug: "atuacao-da-enfermagem-e-da-atencao-primaria",
    title: "Atuação da Enfermagem e da Atenção Primária",
    subtitle: "Acolher, avaliar, intervir e acompanhar",
    icon: "ClipboardList",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Consulta de Enfermagem" },
      {
        type: "paragraph",
        text: "A consulta deve seguir o Processo de Enfermagem: avaliação, diagnóstico de enfermagem, planejamento, implementação e evolução. O registro precisa ser claro, datado, individualizado e incluir orientações, resposta da mulher e do bebê e sinais de alerta.",
      },
      { type: "heading", level: 3, text: "Roteiro de avaliação" },
      {
        type: "table",
        columns: ["Domínio", "O que avaliar"],
        rows: [
          [
            "História",
            "Parto, idade gestacional, peso, internações, doenças, medicamentos, cirurgias mamárias, experiência anterior e objetivo da família.",
          ],
          [
            "Mamada",
            "Posição, pega, ritmo, deglutição, duração espontânea, dor, forma do mamilo após mamada.",
          ],
          [
            "Bebê",
            "Estado geral, hidratação, icterícia, boca, tônus, sucção, fraldas, fezes e curva de peso.",
          ],
          ["Mamas", "Formato, edema, trauma, dor, hiperemia, massa, secreções e sinais infecciosos."],
          [
            "Contexto",
            "Rede de apoio, saúde mental, sono, alimentação, trabalho, violência, barreiras culturais e linguísticas.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Condutas possíveis" },
      {
        type: "list",
        items: [
          "Aconselhamento e demonstração prática.",
          "Correção de pega e posição.",
          "Ordenha manual e plano de estímulo.",
          "Manejo de ingurgitamento e trauma.",
          "Monitoramento de peso e hidratação.",
          "Encaminhamento médico, odontológico, fonoaudiológico, nutricional, psicológico ou ao Banco de Leite conforme necessidade.",
          "Plano compartilhado de suplementação quando indicada.",
          "Visita domiciliar e reavaliação precoce.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Limite profissional",
        text: "Protocolos institucionais, legislação do exercício profissional e avaliação clínica devem orientar prescrições e procedimentos. Parecer técnico do Cofen de 2025 apontou que um material do Coren-PR sobre manejo ainda não atendia aos requisitos para ser reconhecido como protocolo nacional; portanto, não deve ser apresentado como protocolo homologado.",
      },
    ],
  },
  {
    slug: "foz-do-iguacu-e-regiao-de-fronteira",
    title: "Foz do Iguaçu e região de fronteira",
    subtitle: "Rede local, diversidade e cuidados interculturais",
    icon: "MapPin",
    contentKind: "article",
    blocks: [
      { type: "heading", level: 2, text: "Atenção Primária como porta de entrada" },
      {
        type: "paragraph",
        text: "Em Foz do Iguaçu, gestantes, puérperas e crianças devem buscar a Unidade Básica de Saúde de referência para pré-natal, consulta puerperal, puericultura, avaliação de peso, orientação de pega, vacinação e encaminhamentos. Contatos, horários e unidades de referência podem mudar; confirme nos canais oficiais da Secretaria Municipal da Saúde.",
      },
      { type: "heading", level: 3, text: "Particularidades da tríplice fronteira" },
      {
        type: "list",
        items: [
          "Circulação entre Brasil, Paraguai e Argentina, com possíveis dificuldades de continuidade do cuidado.",
          "Diversidade linguística e cultural, incluindo famílias falantes de espanhol, guarani, árabe e outras línguas.",
          "Diferenças de documentos, cobertura e local de nascimento.",
          "Crenças familiares variadas sobre colostro, chás, horários, exposição do corpo e papel dos avós.",
          "Necessidade de comunicação simples, intérprete quando possível e respeito às escolhas sem abrir mão da segurança.",
        ],
      },
      { type: "heading", level: 3, text: "Como realizar aconselhamento intercultural" },
      {
        type: "list",
        items: [
          "Pergunte o que a família já sabe e acredita.",
          "Identifique quem participa das decisões.",
          "Explique o motivo de cada recomendação, sem ridicularizar crenças.",
          "Negocie alternativas seguras.",
          "Entregue orientação escrita no idioma compreendido.",
          "Combine onde e quando será a reavaliação.",
        ],
      },
      { type: "heading", level: 3, text: "Projeto de Lei Municipal nº 318/2025" },
      {
        type: "paragraph",
        text: "O projeto propunha diretrizes para incentivo ao aleitamento materno, possível Passe Livre para lactantes e doadoras, salas de apoio, campanhas educativas e parcerias. Entretanto, a tramitação oficial registra que a proposição foi retirada pela autora e arquivada em fevereiro de 2026. Portanto, essas medidas não devem ser divulgadas como lei municipal vigente.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Situação jurídica correta",
        text: "Projeto de lei não é lei. O texto pode inspirar políticas públicas, mas não cria direito exigível enquanto não for aprovado, sancionado e publicado.",
      },
      { type: "heading", level: 3, text: "Iniciativas legislativas posteriores" },
      {
        type: "paragraph",
        text: "Em 2026 foi apresentada proposta municipal para exigir que creches públicas e privadas disponibilizem estrutura adequada para recepção e armazenamento de leite materno. A existência de proposta não significa vigência; a situação deve ser consultada no sistema legislativo municipal antes de qualquer divulgação.",
      },
      { type: "heading", level: 3, text: "Fluxo sugerido para a UBS" },
      {
        type: "list",
        items: [
          "Acolher sem julgamento e identificar urgência.",
          "Observar mamada sempre que possível.",
          "Avaliar mãe e bebê, incluindo peso e hidratação.",
          "Realizar manejo inicial e registrar.",
          "Definir retorno em 24-72 horas conforme risco.",
          "Encaminhar para maternidade, pediatria, banco de leite ou urgência quando necessário.",
          "Garantir continuidade para famílias que atravessam a fronteira.",
        ],
      },
    ],
  },
  {
    slug: "checklists-e-planos-praticos",
    title: "Checklists e planos práticos",
    subtitle: "Ferramentas para usar no dia a dia",
    icon: "SquareCheck",
    contentKind: "checklist",
    blocks: [
      { type: "heading", level: 2, text: "Checklist da alta" },
      {
        type: "list",
        items: [
          "A mãe consegue posicionar e reconhecer boa pega.",
          "Sabe identificar sinais de fome e saciedade.",
          "Recebeu orientação sobre livre demanda.",
          "Sabe quais sinais exigem atendimento.",
          "Tem retorno da mãe e do bebê agendado.",
          "Sabe onde pesar o bebê e buscar apoio.",
          "Recebeu orientação sobre medicamentos e alimentação.",
          "Se houver complemento, existe plano escrito com reavaliação.",
        ],
      },
      { type: "heading", level: 3, text: "Plano de amamentação" },
      {
        type: "table",
        caption: "Perguntas para conversar com a família e registrar as respostas",
        columns: ["Pergunta", "Resposta da família"],
        rows: [
          ["Quem poderá apoiar nas primeiras semanas?", ""],
          ["Onde buscar ajuda profissional?", ""],
          ["Quais sinais indicam que precisamos procurar atendimento?", ""],
          ["Como será o retorno ao trabalho?", ""],
          ["Há alguma crença ou preocupação que a equipe deve conhecer?", ""],
          ["Quais são nossos objetivos e limites?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Diário breve de acompanhamento" },
      {
        type: "table",
        caption: "Modelo em branco para a família preencher e levar às consultas",
        columns: ["Data", "Mamadas/ordenhas", "Fraldas molhadas", "Fezes", "Dor (0-10)", "Observações"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Sinais de urgência" },
      {
        type: "list",
        items: [
          "Bebê muito sonolento ou difícil de acordar.",
          "Pouca ou nenhuma urina.",
          "Febre, hipotermia ou dificuldade para respirar.",
          "Perda de peso importante ou piora clínica.",
          "Icterícia intensa ou progressiva.",
          "Mãe com febre alta, desmaio, falta de ar, dor intensa, sangramento importante ou sinais de abscesso.",
        ],
      },
    ],
  },
  {
    slug: "perguntas-frequentes",
    title: "Perguntas frequentes",
    subtitle: "Respostas diretas para dúvidas comuns",
    icon: "MessageCircleQuestion",
    contentKind: "faq",
    blocks: [],
    faqItems: [
      {
        question: "Quanto tempo deve durar a mamada?",
        answer:
          "Não há duração fixa. Observe sucção e deglutição; deixe o bebê terminar espontaneamente.",
      },
      {
        question: "Preciso oferecer as duas mamas?",
        answer:
          "Ofereça a primeira até o bebê soltar ou reduzir a sucção; depois ofereça a segunda. Na próxima mamada, pode começar pela última menos esvaziada.",
      },
      {
        question: "Posso amamentar deitada?",
        answer:
          "Pode, desde que mãe e bebê estejam bem posicionados e o ambiente seja seguro. Cuidado com adormecer em sofás ou poltronas.",
      },
      {
        question: "Posso fazer atividade física?",
        answer: "Em geral, sim, após liberação e recuperação. Hidrate-se e use suporte confortável.",
      },
      {
        question: "Posso pintar o cabelo?",
        answer:
          "Muitos produtos têm baixa absorção, mas recomenda-se ventilação, evitar contato do bebê e seguir orientações do fabricante e do profissional de saúde.",
      },
      {
        question: "Posso fazer exame com contraste?",
        answer: "Muitos contrastes são compatíveis, mas confirme o tipo específico; não suspenda automaticamente.",
      },
      {
        question: "Meu bebê dormiu muitas horas. Acordo?",
        answer:
          "Depende da idade, peso e condição clínica. Recém-nascidos com risco precisam de orientação individual.",
      },
      {
        question: "Posso usar concha ou bico de silicone?",
        answer:
          "Não devem ser rotina. Podem ajudar em situações específicas, com acompanhamento, pois podem piorar trauma ou reduzir transferência.",
      },
      {
        question: "Como saber se a bomba está correta?",
        answer: "Não deve doer, puxar muita aréola nem machucar. Ajuste funil e sucção.",
      },
      {
        question: "Posso doar leite?",
        answer:
          "Mulheres saudáveis, com produção excedente, podem procurar um Banco de Leite para triagem e orientação.",
      },
      {
        question: "É possível voltar a produzir leite depois de parar?",
        answer:
          "Sim, relactação é possível em muitos casos, mas exige estímulo frequente e acompanhamento.",
      },
      {
        question: "A fórmula é proibida?",
        answer:
          "Não. É um alimento indicado em situações específicas. Deve ser preparada com segurança e não promovida de forma comercial inadequada.",
      },
      {
        question: "O pai ou acompanhante pode ajudar?",
        answer:
          "Muito: proteger o descanso, cuidar da casa, levar água e comida, apoiar posições, observar sinais e evitar palpites que gerem culpa.",
      },
      {
        question: "Avós podem participar?",
        answer:
          "Sim. São parte importante da rede. Informações atualizadas ajudam a substituir práticas antigas, como oferecer chá, por apoio seguro.",
      },
      {
        question: "Quando procurar um Banco de Leite?",
        answer:
          "Dor, dificuldade de pega, baixa produção, excesso de leite, necessidade de ordenha, prematuridade ou interesse em doar são motivos comuns.",
      },
    ],
  },
  {
    slug: "referencias-essenciais-e-fontes-consultadas",
    title: "Referências essenciais e fontes consultadas",
    icon: "BookOpen",
    contentKind: "article",
    blocks: [
      {
        type: "list",
        items: [
          "Organização Mundial da Saúde. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Consultas atualizadas até julho de 2026.",
          "Brasil. Ministério da Saúde. Guia alimentar para crianças brasileiras menores de 2 anos. Atualização disponibilizada em 2025.",
          "Brasil. Ministério da Saúde. Aleitamento materno; Salas de Apoio à Amamentação; Doação de leite humano; Linhas de Cuidado da Criança.",
          "Anvisa. Banco de leite humano: funcionamento, prevenção e controle de riscos. Brasília, 2008.",
          "Brasil. Lei nº 11.265/2006 e Decreto nº 9.579/2018 - Norma Brasileira de Comercialização de Alimentos para Lactentes e Crianças de Primeira Infância, bicos, chupetas e mamadeiras.",
          "Brasil. Lei nº 13.435/2017 - Mês do Aleitamento Materno.",
          "Brasil. Lei nº 13.872/2019 - Amamentação em concursos públicos federais.",
          "Brasil. Lei nº 14.683/2023 - Selo Empresa Amiga da Amamentação.",
          "Brasil. Lei nº 15.222/2025 - licença-maternidade e salário-maternidade em internação prolongada.",
          "Conselho Federal de Enfermagem. Resolução Cofen nº 736/2024 - Processo de Enfermagem.",
          "Conselho Federal de Enfermagem. Resolução Cofen nº 741/2024 - assistência de Enfermagem em Bancos e Postos de Coleta de Leite Humano.",
          "Conselho Federal de Enfermagem. Parecer nº 32/2025 das Câmaras Técnicas de Enfermagem.",
          "Câmara Municipal de Foz do Iguaçu. Projeto de Lei nº 318/2025 e tramitação legislativa; Requerimento nº 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Links institucionais" },
      {
        type: "list",
        items: [
          "Ministério da Saúde - Aleitamento Materno",
          "Rede Brasileira de Bancos de Leite Humano",
          "Conselho Federal de Enfermagem",
          "Câmara Municipal de Foz do Iguaçu - SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Atualização",
        text: "Leis, fluxos municipais, telefones e protocolos podem mudar. Antes de utilizar este material como norma institucional, confirme a versão vigente nas fontes oficiais e adapte ao protocolo aprovado pelo serviço.",
      },
    ],
  },
];

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}
