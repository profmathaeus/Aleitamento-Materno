import type { SectionTranslation } from "../types";

const en: Record<string, SectionTranslation> = {
  "recomendacoes-essenciais": {
    title: "Essential recommendations",
    subtitle: "What every family needs to know",
    blocks: [
      { type: "heading", level: 2, text: "The core recommendation" },
      {
        type: "paragraph",
        text: "The World Health Organization and Brazil's Ministry of Health recommend starting breastfeeding within the first hour of life, offering only breast milk for the first six months, and continuing to breastfeed, alongside appropriate complementary foods, until two years of age or beyond. “Exclusive” means the baby receives no water, teas, juices, other milks, or foods, except for medications, vitamins, minerals, or oral rehydration solution when indicated by a health professional.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Key message",
        text: "Breast milk already contains enough water, even on hot days. For a baby under six months on exclusive breastfeeding, offering water or tea can reduce sucking, decrease milk production, and increase the risk of contamination.",
      },
      { type: "heading", level: 2, text: "Principles that support breastfeeding" },
      {
        type: "list",
        items: [
          "Skin-to-skin contact right after birth, once mother and baby are clinically stable.",
          "Rooming-in, keeping mother and baby close together.",
          "Feeding on demand: offer the breast whenever the baby shows signs of hunger, day or night.",
          "Avoid rigid schedules and limiting how long each feed lasts.",
          "Watch for and correct latch and positioning early.",
          "Avoid nipple shields, pacifiers, and bottles, especially while breastfeeding is being established, unless individually indicated.",
          "Do not offer supplementation without a clinical assessment and a plan to protect milk production.",
          "Ensure respectful support, free of guilt or coercion.",
        ],
      },
      { type: "heading", level: 2, text: "Benefits" },
      {
        type: "table",
        columns: ["For the baby", "For the mother", "For the family and society"],
        rows: [
          [
            "Protection against diarrhea and respiratory infections; adequate nutrition; support for development and a lower future risk of excess weight.",
            "Helps the uterus contract; associated with a lower risk of breast and ovarian cancer and type 2 diabetes; strengthens bonding and confidence.",
            "Lower spending on substitutes; fewer sick-day absences; smaller environmental impact; strengthens public health.",
          ],
        ],
      },
    ],
  },
  "como-a-lactacao-funciona": {
    title: "How lactation works",
    subtitle: "Production, ejection, and regulation of milk",
    blocks: [
      { type: "heading", level: 2, text: "The breast makes milk in response to being emptied" },
      {
        type: "paragraph",
        text: "During pregnancy, hormones prepare the breast tissue. After the placenta is delivered, the drop in progesterone allows production to increase. Prolactin drives milk synthesis, while oxytocin triggers the ejection reflex, making milk flow through the ducts. Frequent, effective sucking and adequate emptying are the main stimuli that keep production going.",
      },
      { type: "heading", level: 2, text: "Colostrum, transitional milk, and mature milk" },
      {
        type: "table",
        columns: ["Stage", "Characteristics", "What to advise"],
        rows: [
          [
            "Colostrum",
            "Yellowish, thick, produced in small volumes, and rich in protective components.",
            "Small amounts are expected; a newborn's stomach is tiny, so frequent feeds are normal.",
          ],
          [
            "Transitional",
            "Increases in volume and changes in appearance over the first few days.",
            "Milk “coming in” may bring fuller breasts, warmth, and leaking.",
          ],
          [
            "Mature",
            "Composition varies over the course of the day and within a single feed.",
            "There's no need to switch breasts by the clock; let the baby finish spontaneously and then offer the other side.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "What actually increases production" },
      {
        type: "list",
        items: [
          "More effective feeds and/or milk expression, including at night when needed.",
          "Correcting the latch.",
          "Skin-to-skin contact.",
          "Treating pain and difficulties that reduce sucking.",
          "Rest when possible, drinking to thirst, and adequate nutrition.",
          "Avoiding unnecessary supplementation that replaces feeds.",
        ],
      },
    ],
  },
  "primeiras-horas-e-primeiros-dias": {
    title: "The first hours and first days",
    subtitle: "From the delivery room to arriving home",
    blocks: [
      { type: "heading", level: 2, text: "The first hour of life" },
      {
        type: "paragraph",
        text: "When there is no clinical contraindication, uninterrupted skin-to-skin contact helps stabilize temperature, breathing, and blood sugar, supports bonding, and increases the chance of an early start to breastfeeding. Routine procedures can be organized so the pair isn't separated unnecessarily.",
      },
      { type: "heading", level: 2, text: "Normal behaviors" },
      {
        type: "list",
        items: [
          "Very frequent feeds, including “cluster feeding” in the evening.",
          "Variable sleep patterns and, in specific situations, the need to wake the newborn.",
          "Little visible colostrum, but enough when transfer is adequate.",
          "Stools changing from dark meconium to greenish and then yellowish tones.",
          "Weight loss in the first few days, which should be monitored clinically.",
        ],
      },
      { type: "heading", level: 2, text: "When to wake the baby" },
      {
        type: "paragraph",
        text: "Premature or small newborns, those with jaundice, poor weight gain, excessive sleepiness, or other conditions may need scheduled feeds and feed assessments. Guidance should be individualized. In general, while breastfeeding isn't well established yet, long stretches without checking clinical signs and weight progress should be avoided.",
      },
    ],
  },
  "pega-e-posicionamento": {
    title: "Latch and positioning",
    subtitle: "Comfort for the mother, efficiency for the baby",
    blocks: [
      { type: "heading", level: 2, text: "Good positioning" },
      {
        type: "list",
        items: [
          "Mother is comfortable, with her back and arms supported.",
          "Baby faces the breast, tummy turned toward the mother's body.",
          "Head and trunk aligned; neck not twisted.",
          "Baby's body held close and well supported.",
          "Nose level with the nipple before starting the latch.",
        ],
      },
      { type: "heading", level: 2, text: "Signs of a good latch" },
      {
        type: "list",
        items: [
          "Mouth wide open.",
          "Chin touching the breast.",
          "Lips flanged outward.",
          "More areola visible above the mouth than below, when anatomy allows this to be seen.",
          "Rounded cheeks, without dimpling.",
          "Slow, deep sucks, with pauses and audible swallowing.",
          "No persistent pain; some brief initial tenderness can occur, but not intense pain throughout the feed.",
        ],
      },
      { type: "heading", level: 2, text: "How to help the baby latch" },
      {
        type: "list",
        items: [
          "Bring the baby to the breast, rather than moving the breast to the baby.",
          "Touch the upper lip with the nipple and wait for the mouth to open wide.",
          "Aim the nipple toward the palate and bring the baby's body in quickly.",
          "Watch for comfort and swallowing.",
          "If it hurts, gently slip a little finger into the corner of the mouth to break the suction and try again.",
        ],
      },
      { type: "heading", level: 2, text: "Useful positions" },
      {
        type: "table",
        columns: ["Position", "Can help when..."],
        rows: [
          ["Cradle hold", "Mother and baby are comfortable and the latch is already becoming established."],
          ["Cross-cradle hold", "More head control is needed to correct the latch."],
          [
            "Football (clutch) hold",
            "After a cesarean, with large breasts, twins, or when a clearer view of the latch is needed.",
          ],
          [
            "Side-lying",
            "The mother needs to rest; requires a safe environment and attention to the risk of falling asleep.",
          ],
          [
            "Straddle (koala) hold",
            "Babies with reflux, low muscle tone, or coordination difficulties, under guidance.",
          ],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Pain should not be treated as normal",
        text: "Cracked or bleeding nipples, nipple deformation at the end of a feed, or pain that doesn't improve after adjustments call for an assessment.",
      },
    ],
  },
  "como-saber-se-o-bebe-mama-o-suficiente": {
    title: "How to tell if the baby is getting enough",
    subtitle: "Assessment beyond time spent at the breast",
    blocks: [
      { type: "heading", level: 2, text: "Favorable signs" },
      {
        type: "list",
        items: [
          "Feeding with deep sucking and swallowing.",
          "Baby relaxes hands and body after feeding.",
          "Progressively larger amounts of urine in the first few days.",
          "Stools following the expected transition.",
          "Weight gain tracked on the growth curve.",
          "Breasts feel softer after feeds.",
        ],
      },
      { type: "heading", level: 2, text: "Diapers and bowel movements" },
      {
        type: "paragraph",
        text: "Counting diapers is only one indicator among several. Once the milk comes in, several well-soaked diapers a day are generally expected; the WHO uses at least six wet disposable diapers in 24 hours as a reference point, together with adequate growth and appropriate stools. Assessing weight, overall condition, and the feed itself is essential.",
      },
      { type: "heading", level: 2, text: "Weight" },
      {
        type: "paragraph",
        text: "Interpretation should take into account gestational age, birth weight, initial loss, recovery, weighing technique, and the WHO growth curve. “Weak milk” should never be concluded from a single weight reading. Excessive loss, failure to recover as expected, or insufficient gain call for assessment of the feed, clinical conditions, feeding frequency, and, when necessary, a temporary supplementation plan that protects lactation.",
      },
    ],
  },
  "dificuldades-frequentes-e-manejo": {
    title: "Common difficulties and how to manage them",
    subtitle: "What to do, and when to refer",
    blocks: [
      { type: "heading", level: 2, text: "Breast engorgement" },
      {
        type: "paragraph",
        text: "The breast becomes very full, firm, and painful; the areola can become tense, making latching harder. It happens when production outpaces removal, feeds are ineffective, or intervals are too long.",
      },
      {
        type: "list",
        items: [
          "Breastfeed frequently and correct the latch.",
          "Before feeding, do gentle massage and a small amount of hand expression to soften the areola.",
          "After feeding, apply cold for a short period for comfort, protected by cloth.",
          "Wear a comfortable bra, without compression.",
          "Avoid vigorous massage, prolonged heat, and unnecessary excessive emptying, as these can increase swelling and production.",
        ],
      },
      { type: "heading", level: 2, text: "Cracks and nipple trauma" },
      {
        type: "paragraph",
        text: "The most common cause is a poor latch. Incorrectly taking the baby off the breast, poorly fitted pumps, dermatitis, infections, and oral conditions can also contribute.",
      },
      {
        type: "list",
        items: [
          "Correct the underlying cause.",
          "Keep the area clean and dry; wash the breasts only during a shower or bath, without harsh soap on the nipple.",
          "Avoid alcohol, home remedies, food peels, and sun exposure as treatments.",
          "Assess for signs of infection and the need for specific treatment.",
        ],
      },
      { type: "heading", level: 2, text: "Inflamed ducts and mastitis" },
      {
        type: "paragraph",
        text: "Localized pain, redness, swelling, and feeling unwell can all be part of the inflammatory spectrum of mastitis. Persistent fever, clinical worsening, or no improvement call for a medical assessment. In general, continuing to breastfeed is safe and helps resolve the stasis; stopping abruptly can make things worse.",
      },
      {
        type: "list",
        items: [
          "Rest, hydration, pain relief compatible with breastfeeding, and local cold can help.",
          "Avoid squeezing, forcefully “breaking up” a lump, or using aggressive vibration.",
          "Antibiotics only when indicated.",
          "Suspect an abscess if there's a fluctuant mass, worsening, or persistence; imaging and drainage may be needed.",
        ],
      },
      { type: "heading", level: 2, text: "Thrush: beware of over-diagnosis" },
      {
        type: "paragraph",
        text: "Burning pain and a shiny nipple are often attributed to thrush, but they can have other causes, such as trauma, vasospasm, or dermatitis. Diagnosis should be clinical, and treatment targeted. Don't use antifungals repeatedly without reassessment.",
      },
      { type: "heading", level: 2, text: "Perceived or real low milk supply" },
      {
        type: "paragraph",
        text: "Softer breasts, no leaking, and frequent feeds don't prove low supply. Assessment should be based on transfer, urine output, stools, weight, and clinical condition.",
      },
      { type: "heading", level: 2, text: "Strong let-down and oversupply" },
      {
        type: "list",
        items: [
          "A reclined position can reduce the flow.",
          "Allow pauses and burping.",
          "Avoid expressing large volumes just to “empty out.”",
          "Monitor weight gain, discomfort, choking, and stools.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Watch out",
        text: "Teas, dark beer, corn porridge, and “milk-boosting” products don't replace a proper feeding assessment. Some can be harmful or interact with medications.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Warning signs in the newborn",
        text: "Difficulty waking, persistent refusal to feed, less urine, dry mouth, weak cry, fever or low temperature, intense jaundice, fast or labored breathing, bluish coloring, green vomiting, or significant weight loss require immediate evaluation.",
      },
    ],
  },
  "ordenha-conservacao-e-oferta": {
    title: "Expressing, storing, and offering milk",
    subtitle: "Expressing milk safely",
    blocks: [
      { type: "heading", level: 2, text: "When to express" },
      {
        type: "list",
        items: [
          "To relieve a tense areola before latching.",
          "When mother and baby are separated.",
          "To stimulate production in premature babies or when sucking is ineffective.",
          "To build a stock before returning to work.",
          "To donate to a Human Milk Bank.",
        ],
      },
      { type: "heading", level: 2, text: "Hand expression" },
      {
        type: "list",
        items: [
          "Wash your hands and choose a clean, calm place.",
          "Gently massage the breast in circular motions.",
          "Position your thumb above and index finger below the areola, forming a “C” shape.",
          "Push your fingers back toward the chest and compress rhythmically, without sliding over the skin.",
          "Rotate the position around the areola and switch breasts.",
          "Collect the milk in a suitable, labeled container.",
        ],
      },
      { type: "heading", level: 2, text: "Breast pump" },
      {
        type: "paragraph",
        text: "A pump should never cause pain. The flange size needs to allow the nipple to move without excessive friction. Start with low suction and increase to the maximum comfortable level. Clean the parts according to the manufacturer's instructions and health recommendations.",
      },
      { type: "heading", level: 2, text: "Storage: home use vs. donation are different" },
      {
        type: "callout",
        tone: "info",
        title: "Important",
        text: "Milk Bank rules for donation can be more restrictive. Brazil's Ministry of Health advises that milk intended for donation be kept frozen for up to 10 days before being delivered to the Milk Bank. For the baby's own consumption, follow the protocol of the service supporting the family and its storage conditions.",
      },
      {
        type: "table",
        columns: ["Step", "Good practice"],
        rows: [
          [
            "Container",
            "A wide-mouth glass jar with a plastic lid, sterilized as instructed by the Milk Bank, or a container designed for human milk.",
          ],
          [
            "Labeling",
            "Name, date, and time of collection; when applicable, gestational age or the baby's identification.",
          ],
          ["Cooling", "Store immediately in the designated spot; avoid the refrigerator door."],
          ["Thawing", "In the refrigerator or in a warm-water bath, never boiling."],
          ["Warming", "Never use a microwave: it can create hot spots and alter the milk's components."],
          [
            "Leftovers",
            "Don't refreeze thawed milk; discard leftovers that touched the baby's saliva according to the service's guidance.",
          ],
        ],
      },
      { type: "heading", level: 2, text: "How to offer expressed milk" },
      {
        type: "paragraph",
        text: "A small cup, spoon, or another suitable device can be used. A bottle is not mandatory and may interfere with oral dynamics in some children. The choice should take into account age, ability, safety, and professional guidance. Never pour milk into the baby's mouth; let the baby lap and sip it, in a semi-upright position.",
      },
    ],
  },
  "alimentacao-medicamentos-e-habitos-maternos": {
    title: "Diet, medications, and maternal habits",
    subtitle: "Care without unnecessary restrictions",
    blocks: [
      { type: "heading", level: 2, text: "The mother's diet" },
      {
        type: "paragraph",
        text: "There's no universal diet for breastfeeding mothers. Most women can keep a varied diet based on fresh and minimally processed foods. Drink water according to thirst. Unwarranted dietary restrictions can cause deficiencies, guilt, and early weaning.",
      },
      { type: "heading", level: 2, text: "Caffeine, alcohol, and tobacco" },
      {
        type: "list",
        items: [
          "Caffeine: moderate intake and watch for irritability or changes in the baby's sleep; this includes coffee, teas, energy drinks, and chocolate.",
          "Alcohol: the safest choice is not to drink. Interval-based strategies should be discussed with a professional, since “pump and dump” does not speed up alcohol elimination.",
          "Tobacco and vaping: avoid them. If a mother can't stop right away, she should receive support to quit and reduce secondhand exposure; never smoke near the baby or in enclosed spaces.",
          "Illicit drugs: these can temporarily contraindicate breastfeeding and require urgent, non-judgmental evaluation and support.",
        ],
      },
      { type: "heading", level: 2, text: "Medications" },
      {
        type: "paragraph",
        text: "Most medications are compatible with breastfeeding. Stopping breastfeeding unnecessarily can carry more risk than continuing it. The decision should weigh the baby's age and health, the dose, route, and duration of the medication, its transfer into milk, and available alternatives. Consult specialized sources and a qualified professional.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Never decide this on your own",
        text: "Do not stop essential medication or breastfeeding without guidance. Herbal remedies, “natural” products, and supplements can also cause effects and interactions.",
      },
    ],
  },
  "situacoes-especiais-e-contraindicacoes": {
    title: "Special situations and contraindications",
    subtitle: "When to breastfeed, pause, or substitute",
    blocks: [
      { type: "heading", level: 2, text: "Very few situations are an absolute contraindication" },
      {
        type: "paragraph",
        text: "In Brazil, mothers living with HIV and mothers with HTLV-1 or HTLV-2 should not breastfeed, because of the risk of transmission. The public health system (SUS) must ensure guidance, lactation suppression when indicated, and infant formula. Cross-nursing — another woman breastfeeding the baby — is not recommended because of the risk of transmitting infections.",
      },
      { type: "heading", level: 2, text: "Situations that require individual assessment" },
      {
        type: "table",
        columns: ["Condition", "General guidance"],
        rows: [
          ["Hepatitis B", "Breastfeeding is generally allowed with appropriate immunoprophylaxis for the newborn."],
          ["Hepatitis C", "Generally allowed; assess nipple bleeding and other specific situations."],
          [
            "Tuberculosis",
            "It's often possible to continue breastfeeding with control measures and treatment; the approach depends on contagiousness.",
          ],
          ["Herpes", "Do not offer the breast with an active lesion on it; cover lesions elsewhere and maintain hygiene."],
          [
            "COVID-19/influenza",
            "Breastfeeding is generally continued with hand hygiene and recommended respiratory precautions.",
          ],
          [
            "Use of radiopharmaceuticals or specific medications",
            "May require a temporary pause or be contraindicated; consult a specialized source.",
          ],
          ["Classic galactosemia in the baby", "Contraindication to human milk."],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Safety",
        text: "This table is a summary. The approach depends on the diagnosis, treatment, and the baby's condition. Seek a specialized assessment.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Autonomy and acceptance",
        text: "Promoting breastfeeding doesn't mean forcing it. Women who cannot or do not wish to breastfeed also deserve safe guidance, access to appropriate feeding, and care free of judgment.",
      },
    ],
  },
  "prematuridade-internacao-e-metodo-canguru": {
    title: "Prematurity, hospitalization, and Kangaroo Care",
    subtitle: "Protecting the milk supply and the bond",
    blocks: [
      { type: "heading", level: 2, text: "Human milk is especially important" },
      {
        type: "paragraph",
        text: "Premature and low-birth-weight newborns benefit from their own mother's milk and, when that isn't available, from pasteurized human milk as indicated. Direct sucking often isn't possible yet, so production needs to be started and maintained through expression.",
      },
      {
        type: "list",
        items: [
          "Start stimulation as early as possible after birth, depending on the mother's condition.",
          "Express milk about as often as a newborn would feed.",
          "Provide skin-to-skin contact and Kangaroo Care once cleared to do so.",
          "Record volumes without turning expression into a source of guilt.",
          "Get support transitioning from tube or cup feeding to the breast, as the baby matures.",
        ],
      },
      { type: "heading", level: 2, text: "Maternity leave for prolonged hospitalization" },
      {
        type: "paragraph",
        text: "Law No. 15,222/2025 now allows, for certain birth-related hospital stays lasting more than two weeks, an extension of maternity leave of up to 120 days after the mother and newborn are discharged, with the period before delivery deducted, in line with the legal requirements.",
      },
    ],
  },
  "introducao-alimentar-e-continuidade": {
    title: "Introducing solid foods and continuing to breastfeed",
    subtitle: "At six months, food complements — it doesn't immediately replace",
    blocks: [
      { type: "heading", level: 2, text: "When to start" },
      {
        type: "paragraph",
        text: "Complementary feeding should begin around six full months, when the child shows readiness and nutritional need. Breast milk remains important and can be offered before or after meals, depending on routine and preference.",
      },
      {
        type: "list",
        items: [
          "Offer real food, varied and appropriate to the family's culture.",
          "Progress the texture over time; avoid routinely blending or straining food.",
          "Offer water in a cup from the start of solid foods.",
          "Avoid sugar and ultra-processed foods in the first years.",
          "Respect hunger and fullness cues; don't force feeding.",
          "Keep breastfeeding going until two years of age or beyond.",
        ],
      },
    ],
  },
  "retorno-ao-trabalho-e-desmame": {
    title: "Returning to work and weaning",
    subtitle: "Planning, rights, and respected choices",
    blocks: [
      { type: "heading", level: 2, text: "Plan ahead of your return" },
      {
        type: "list",
        items: [
          "Talk with your support network and your workplace.",
          "Start practicing expression a few weeks ahead, without building up an excessive stock.",
          "Test containers and feeding methods with another caregiver.",
          "Breastfeed before leaving and when reuniting with the baby.",
          "At work, express milk at intervals that suit your comfort and the baby's age.",
          "Transport milk in a proper cooler bag and store it correctly.",
        ],
      },
      { type: "heading", level: 2, text: "Weaning" },
      {
        type: "paragraph",
        text: "Weaning can be natural, gradual, or made necessary by family circumstances. It should be handled without guilt and, when possible, done gradually to reduce distress and the risk of engorgement. Drop one feed at a time, replace it with bonding and age-appropriate food, and watch how the child and the breasts respond.",
      },
      {
        type: "table",
        columns: ["Situation", "Initial approach"],
        rows: [
          [
            "Baby feeds very often",
            "Watch for hunger cues, latch, and swallowing; clustered feeds can be normal.",
          ],
          [
            "Poor weight gain",
            "Full clinical assessment, an observed feed, a plan to increase transfer, and early follow-up.",
          ],
          ["Return to work", "Plan regular expressing sessions and storage."],
          [
            "Relactation",
            "Frequent stimulation, skin-to-skin contact, offering the breast, and specialized follow-up.",
          ],
        ],
      },
    ],
  },
  "mitos-e-verdades": {
    title: "Myths and facts",
    subtitle: "Information to ease fear and guilt",
    blocks: [
      {
        type: "table",
        columns: ["Claim", "Clarification"],
        rows: [
          [
            "“My milk is weak.”",
            "Myth. Appearance varies, and paler milk isn't weaker. Judge intake by swallowing, diapers, weight, and overall condition.",
          ],
          [
            "“Small breasts produce less milk.”",
            "Myth. Breast size is related more to fat tissue than to milk-making capacity.",
          ],
          [
            "“A baby who feeds constantly isn't satisfied.”",
            "Not always. Frequent, clustered feeds can be normal, especially during growth spurts.",
          ],
          [
            "“I need to wash my nipples before every feed.”",
            "Myth. Regular washing during a shower or bath is enough; excessive washing dries out and damages the skin.",
          ],
          [
            "“A cracked nipple needs sun exposure.”",
            "Not a first-line recommendation. Correcting the latch and the underlying cause is what matters.",
          ],
          [
            "“Mastitis means you have to stop breastfeeding.”",
            "Generally false. In most cases, continuing to breastfeed is safe; a clinical assessment guides any exceptions.",
          ],
          [
            "“Dark beer boosts milk supply.”",
            "Myth, and not a recommended practice. Alcohol passes into the milk and can be harmful.",
          ],
          [
            "“After six months, breast milk turns into water.”",
            "Myth. It keeps providing energy, nutrients, and immune protection.",
          ],
          [
            "“Women with breast implants can't breastfeed.”",
            "Not always true. Many women do breastfeed; the surgery, technique, and sensitivity involved can play a role.",
          ],
          [
            "“Pacifiers don't interfere with breastfeeding.”",
            "They can affect sucking frequency and how well breastfeeding gets established in some cases; this should be discussed individually.",
          ],
          [
            "“Formula helps babies sleep better.”",
            "It shouldn't be used as a sleep strategy. Infant sleep depends on many factors, and formula has its own specific indications.",
          ],
          [
            "“I got stressed, so my milk dried up.”",
            "Stress can temporarily make let-down harder, but milk doesn't usually “dry up” suddenly. Support and continued stimulation help.",
          ],
          [
            "“You have to switch breasts every ten minutes.”",
            "Myth. The baby can finish one breast and then be offered the other; what matters is effective transfer.",
          ],
          [
            "“Breastfeeding in public is inappropriate.”",
            "Myth. Breastfeeding meets a child's need and should be respected.",
          ],
          [
            "“Going back to work means you have to wean.”",
            "Myth. Expressing, storage, legal breaks, and support can all help keep breastfeeding going.",
          ],
        ],
      },
    ],
  },
  "direitos-e-legislacao-brasileira": {
    title: "Rights and Brazilian legislation",
    subtitle: "Protecting the child, the mother, and breastfeeding",
    blocks: [
      { type: "heading", level: 2, text: "Key protections" },
      { type: "heading", level: 3, text: "Breastfeeding in public" },
      {
        type: "paragraph",
        text: "A mother doesn't need to hide to feed her baby. States and municipalities may have specific rules against harassment. Even where no specific local law exists, preventing or humiliating a woman for breastfeeding can violate her dignity, her right to maternal protection, and the child's rights.",
      },
      { type: "heading", level: 3, text: "Nursing support rooms" },
      {
        type: "paragraph",
        text: "These are private, clean, and safe spaces in companies or institutions, meant for expressing and storing milk during the workday. They are not meant to isolate a woman or to replace her right to breaks.",
      },
      {
        type: "table",
        columns: ["Rule", "Related protection"],
        rows: [
          [
            "Federal Constitution and the CLT (Labor Code)",
            "Protection of maternity, maternity leave, and job security, according to employment status and requirements.",
          ],
          [
            "CLT, Article 396",
            "Two special half-hour breaks during the workday to breastfeed, until the child turns six months old; this period can be extended when health requires it. Schedules must be set by individual agreement.",
          ],
          [
            "Law No. 11,770/2008",
            "Empresa Cidadã (Citizen Company) Program: allows maternity leave to be extended to 180 days at participating companies, with applicable rules for public service employees.",
          ],
          [
            "Law No. 11,265/2006 and Decree No. 9,579/2018",
            "NBCAL: regulates the commercial promotion of formulas, milks, infant foods, bottles, nipples, and pacifiers.",
          ],
          ["Law No. 13,435/2017", "Establishes August as National Breastfeeding Month — “Agosto Dourado” (Golden August)."],
          [
            "Law No. 13,872/2019",
            "Guarantees breastfeeding breaks during federal civil service exams for children up to six months old, with rules for requesting them and making up the time.",
          ],
          ["Law No. 14,683/2023", "Establishes the Breastfeeding-Friendly Company Seal."],
          [
            "Law No. 15,222/2025",
            "Expands protection of maternity leave and maternity pay for prolonged birth-related hospital stays.",
          ],
          [
            "Cofen Resolution No. 741/2024",
            "Regulates nursing care in Human Milk Banks and Milk Collection Posts.",
          ],
          [
            "Cofen Resolution No. 736/2024",
            "Governs the implementation of the Nursing Process across care settings.",
          ],
        ],
      },
    ],
  },
  "atuacao-da-enfermagem-e-da-atencao-primaria": {
    title: "The role of nursing and primary care",
    subtitle: "Welcome, assess, intervene, and follow up",
    blocks: [
      { type: "heading", level: 2, text: "The nursing visit" },
      {
        type: "paragraph",
        text: "The visit should follow the Nursing Process: assessment, nursing diagnosis, planning, implementation, and evaluation. Documentation must be clear, dated, individualized, and include the guidance given, the mother's and baby's response, and any warning signs.",
      },
      { type: "heading", level: 3, text: "Assessment checklist" },
      {
        type: "table",
        columns: ["Domain", "What to assess"],
        rows: [
          [
            "History",
            "Delivery, gestational age, weight, hospitalizations, illnesses, medications, breast surgeries, prior experience, and the family's goals.",
          ],
          [
            "The feed",
            "Position, latch, rhythm, swallowing, spontaneous duration, pain, and nipple shape after feeding.",
          ],
          [
            "The baby",
            "Overall condition, hydration, jaundice, mouth, muscle tone, sucking, diapers, stools, and weight curve.",
          ],
          ["The breasts", "Shape, swelling, trauma, pain, redness, lumps, discharge, and signs of infection."],
          [
            "Context",
            "Support network, mental health, sleep, diet, work, violence, and cultural or language barriers.",
          ],
        ],
      },
      { type: "heading", level: 3, text: "Possible actions" },
      {
        type: "list",
        items: [
          "Counseling and hands-on demonstration.",
          "Correcting latch and position.",
          "Hand expression and a stimulation plan.",
          "Managing engorgement and trauma.",
          "Monitoring weight and hydration.",
          "Referral to medical, dental, speech-language, nutrition, psychology, or Milk Bank services as needed.",
          "A shared supplementation plan when indicated.",
          "Home visits and early reassessment.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Scope of practice",
        text: "Institutional protocols, professional practice legislation, and clinical judgment should guide prescriptions and procedures. A 2025 Cofen technical opinion found that a Coren-PR document on breastfeeding management did not yet meet the requirements to be recognized as a national protocol; it should therefore not be presented as an approved protocol.",
      },
    ],
  },
  "foz-do-iguacu-e-regiao-de-fronteira": {
    title: "Foz do Iguaçu and the border region",
    subtitle: "Local network, diversity, and cross-cultural care",
    blocks: [
      { type: "heading", level: 2, text: "Primary care as the entry point" },
      {
        type: "paragraph",
        text: "In Foz do Iguaçu, pregnant women, postpartum mothers, and children should go to their designated Basic Health Unit (UBS) for prenatal care, postpartum visits, well-child care, weight checks, latch guidance, vaccination, and referrals. Contacts, hours, and referral units can change; confirm details through the Municipal Health Department's official channels.",
      },
      { type: "heading", level: 3, text: "Particularities of the triple border" },
      {
        type: "list",
        items: [
          "Movement between Brazil, Paraguay, and Argentina, which can create difficulties in continuity of care.",
          "Linguistic and cultural diversity, including families who speak Spanish, Guarani, Arabic, and other languages.",
          "Differences in documentation, coverage, and place of birth.",
          "Varied family beliefs about colostrum, teas, feeding schedules, exposing the body, and grandparents' role.",
          "The need for simple communication, an interpreter when possible, and respect for family choices without compromising safety.",
        ],
      },
      { type: "heading", level: 3, text: "How to provide cross-cultural counseling" },
      {
        type: "list",
        items: [
          "Ask what the family already knows and believes.",
          "Identify who takes part in decisions.",
          "Explain the reason for each recommendation, without mocking beliefs.",
          "Negotiate safe alternatives.",
          "Provide written guidance in a language the family understands.",
          "Agree on where and when the follow-up visit will happen.",
        ],
      },
      { type: "heading", level: 3, text: "Municipal Bill No. 318/2025" },
      {
        type: "paragraph",
        text: "The bill proposed guidelines to encourage breastfeeding, a possible free transit pass for breastfeeding mothers and milk donors, support rooms, educational campaigns, and partnerships. However, the official legislative record shows the proposal was withdrawn by its author and archived in February 2026. These measures should therefore not be publicized as current municipal law.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Correct legal status",
        text: "A bill is not a law. The text may inspire public policy, but it creates no enforceable right unless and until it is approved, signed, and published.",
      },
      { type: "heading", level: 3, text: "Later legislative initiatives" },
      {
        type: "paragraph",
        text: "In 2026, a municipal proposal was introduced requiring public and private daycare centers to provide proper facilities for receiving and storing breast milk. The existence of a proposal does not mean it is in force; its status should be checked in the municipal legislative system before it is shared with anyone.",
      },
      { type: "heading", level: 3, text: "Suggested workflow for the UBS" },
      {
        type: "list",
        items: [
          "Welcome the family without judgment and identify urgency.",
          "Observe a feed whenever possible.",
          "Assess mother and baby, including weight and hydration.",
          "Provide initial management and document it.",
          "Set a follow-up visit in 24–72 hours depending on risk.",
          "Refer to a maternity unit, pediatrics, a milk bank, or emergency care when necessary.",
          "Ensure continuity of care for families crossing the border.",
        ],
      },
    ],
  },
  "checklists-e-planos-praticos": {
    title: "Checklists and practical plans",
    subtitle: "Tools to use day to day",
    blocks: [
      { type: "heading", level: 2, text: "Discharge checklist" },
      {
        type: "list",
        items: [
          "The mother can position the baby and recognize a good latch.",
          "She knows how to identify hunger and fullness cues.",
          "She has received guidance on feeding on demand.",
          "She knows which signs require medical attention.",
          "A follow-up visit is scheduled for both mother and baby.",
          "She knows where to have the baby weighed and where to get support.",
          "She has received guidance on medications and diet.",
          "If supplementation is used, there is a written plan with reassessment.",
        ],
      },
      { type: "heading", level: 3, text: "Breastfeeding plan" },
      {
        type: "table",
        caption: "Questions to discuss with the family and record the answers to",
        columns: ["Question", "Family's answer"],
        rows: [
          ["Who will be able to help in the first few weeks?", ""],
          ["Where will you go for professional help?", ""],
          ["What signs mean we need to seek care?", ""],
          ["How will the return to work be handled?", ""],
          ["Is there any belief or concern the team should know about?", ""],
          ["What are our goals and limits?", ""],
        ],
      },
      { type: "heading", level: 3, text: "Brief tracking diary" },
      {
        type: "table",
        caption: "Blank template for the family to fill in and bring to appointments",
        columns: ["Date", "Feeds/expressions", "Wet diapers", "Stools", "Pain (0–10)", "Notes"],
        rows: [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ],
      },
      { type: "heading", level: 3, text: "Warning signs" },
      {
        type: "list",
        items: [
          "Baby very drowsy or hard to wake.",
          "Little or no urine.",
          "Fever, low body temperature, or trouble breathing.",
          "Significant weight loss or clinical decline.",
          "Intense or worsening jaundice.",
          "Mother with high fever, fainting, shortness of breath, intense pain, significant bleeding, or signs of an abscess.",
        ],
      },
    ],
  },
  "perguntas-frequentes": {
    title: "Frequently asked questions",
    subtitle: "Direct answers to common questions",
    blocks: [],
    faqItems: [
      {
        question: "How long should a feed last?",
        answer:
          "There's no fixed duration. Watch for sucking and swallowing, and let the baby finish on their own.",
      },
      {
        question: "Do I need to offer both breasts?",
        answer:
          "Offer the first breast until the baby lets go or sucking slows down, then offer the second. At the next feed, you can start with the one that was less emptied.",
      },
      {
        question: "Can I breastfeed lying down?",
        answer:
          "Yes, as long as mother and baby are well positioned and the environment is safe. Be careful about falling asleep on sofas or armchairs.",
      },
      {
        question: "Can I exercise?",
        answer: "In general, yes, once cleared and recovered. Stay hydrated and wear comfortable support.",
      },
      {
        question: "Can I dye my hair?",
        answer:
          "Most products have low absorption, but good ventilation, avoiding contact with the baby, and following the manufacturer's and your health provider's guidance are recommended.",
      },
      {
        question: "Can I have a contrast imaging exam?",
        answer: "Many contrast agents are compatible, but confirm the specific type; don't stop breastfeeding automatically.",
      },
      {
        question: "My baby slept for many hours. Should I wake them?",
        answer:
          "It depends on age, weight, and clinical condition. At-risk newborns need individualized guidance.",
      },
      {
        question: "Can I use a nipple shield or nipple protector?",
        answer:
          "These shouldn't be routine. They can help in specific situations, with follow-up, since they can worsen trauma or reduce milk transfer.",
      },
      {
        question: "How do I know if the pump is fitted correctly?",
        answer: "It shouldn't hurt, pull too much areola in, or cause injury. Adjust the flange and suction level.",
      },
      {
        question: "Can I donate milk?",
        answer:
          "Healthy women with a surplus of milk can contact a Human Milk Bank for screening and guidance.",
      },
      {
        question: "Is it possible to start producing milk again after stopping?",
        answer:
          "Yes, relactation is possible in many cases, but it requires frequent stimulation and follow-up.",
      },
      {
        question: "Is formula forbidden?",
        answer:
          "No. It's a food indicated in specific situations. It must be prepared safely and not promoted through inappropriate commercial practices.",
      },
      {
        question: "Can the father or partner help?",
        answer:
          "A great deal: protecting the mother's rest, handling housework, bringing water and food, helping with positioning, watching for signs, and avoiding comments that create guilt.",
      },
      {
        question: "Can grandparents take part?",
        answer:
          "Yes. They're an important part of the support network. Up-to-date information helps replace outdated practices, like offering tea, with safe support.",
      },
      {
        question: "When should you go to a Milk Bank?",
        answer:
          "Pain, latch difficulties, low supply, oversupply, needing to express milk, prematurity, or wanting to donate are common reasons.",
      },
    ],
  },
  "referencias-essenciais-e-fontes-consultadas": {
    title: "Key references and sources consulted",
    blocks: [
      {
        type: "list",
        items: [
          "World Health Organization. Breastfeeding; Exclusive breastfeeding for optimal growth, development and health; Continued breastfeeding. Accessed and updated through July 2026.",
          "Brazil. Ministry of Health. Dietary guide for Brazilian children under 2 years of age. Update released in 2025.",
          "Brazil. Ministry of Health. Breastfeeding; Breastfeeding Support Rooms; Human milk donation; Child Care Pathways.",
          "Anvisa (Brazilian Health Regulatory Agency). Human milk banks: operation, risk prevention and control. Brasília, 2008.",
          "Brazil. Law No. 11,265/2006 and Decree No. 9,579/2018 — Brazilian Standard on the Marketing of Foods for Infants and Young Children, and of nipples, pacifiers, and bottles.",
          "Brazil. Law No. 13,435/2017 — National Breastfeeding Month.",
          "Brazil. Law No. 13,872/2019 — Breastfeeding during federal civil service exams.",
          "Brazil. Law No. 14,683/2023 — Breastfeeding-Friendly Company Seal.",
          "Brazil. Law No. 15,222/2025 — Maternity leave and maternity pay for prolonged hospitalization.",
          "Brazilian Federal Nursing Council (Cofen). Resolution No. 736/2024 — Nursing Process.",
          "Brazilian Federal Nursing Council (Cofen). Resolution No. 741/2024 — Nursing care in Human Milk Banks and Milk Collection Posts.",
          "Brazilian Federal Nursing Council (Cofen). Technical Opinion No. 32/2025 of the Nursing Technical Chambers.",
          "Foz do Iguaçu City Council. Bill No. 318/2025 and its legislative record; Request No. 67/2026.",
        ],
      },
      { type: "heading", level: 2, text: "Institutional links" },
      {
        type: "list",
        items: [
          "Ministry of Health — Breastfeeding",
          "Brazilian Network of Human Milk Banks",
          "Brazilian Federal Nursing Council",
          "Foz do Iguaçu City Council — SAPL",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Keeping this current",
        text: "Laws, municipal processes, phone numbers, and protocols can change. Before using this material as an institutional standard, confirm the current version with official sources and adapt it to the protocol approved by your service.",
      },
    ],
  },
};

export default en;
