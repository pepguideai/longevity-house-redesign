/* ============================================================
   RESOURCES PAGE CONTENT  ·  resources.html
   ------------------------------------------------------------
   Left side: your essays / education library.
   Right side: supplement guidance, organized by category.
   You'll fill each category with your real product picks later —
   for now the categories show the structure.
   ============================================================ */

window.CONTENT = window.CONTENT || {}; window.CONTENT.resources = {
  eyebrow: "Resources",
  headline: "Learn, then live it.",     // "live it." in italic green
  headlineItalic: "live it.",
  lede: "A growing library of education and guidance — to help you understand the why behind the what.",

  /* ---- ESSAYS (left column) ----
     Each opens a reading pop-up. The "body" is a list of blocks:
       { h: "A heading" }        → a section heading
       { p: "A paragraph." }     → a paragraph
       { list: ["a", "b"] }      → a bulleted list
       { note: "A small note." } → small italic note (e.g. a disclaimer)
     Leave body as [] to show the friendly coming-soon message. */
  essaysLabel: "Essays & Education",
  essays: [
    {
      num: "No. 01",
      title: "Why Primary Food Affects Secondary Food",
      sub: "And why the reverse is just as true",
      body: [
        { p: "Most of us try to fix our eating by changing what's on the plate. It rarely holds — because the plate is rarely where the problem started." },
        { h: "The two kinds of food" },
        { p: "Primary food is everything that feeds you that you don't actually eat: your relationships, your work, your faith, your movement, your finances, the room you wake up in. Secondary food is what's literally on the plate." },
        { p: "Both matter. But they aren't equal partners — primary food sets the conditions that secondary food gets chosen in." },
        { h: "When one goes hungry, the other overcompensates" },
        { p: "When primary food is thin — when work is draining, or a relationship is strained, or home feels chaotic — the body still registers the lack. So we reach for the thing we can actually control. It works for an hour. It never touches the root." },
        { h: "What's really shaping your plate" },
        { list: [
          "Belief — what we were taught about food comes to every meal with us.",
          "Stress — emotion reaches for food faster than appetite does, and lifestyle keeps it within reach.",
          "Environment — you can only choose from what's actually available to you.",
          "Habit — the rhythm of your day decides what feels normal, and what feels safe.",
          "Body and mind — physiology and psychology both sit at the table.",
        ] },
        { h: "Crowding out, not cutting out" },
        { p: "There's no moral weight in a meal. Food isn't good or bad, and neither are you for eating it." },
        { p: "The work isn't restriction — it's addition. Crowd in what nourishes, a little at a time, and the rest makes room on its own. The choices get easier, and the guilt has nowhere left to sit." },
      ],
    },
    {
      num: "No. 02",
      title: "Understanding Mitochondrial Function",
      sub: "Why energy slows, and how to replenish it",
      body: [
        { h: "When does it slow down?" },
        { p: "A chemical fuel called ATP is created in the electron transport chain of the mitochondria's inner membrane. When the quantity of available electrons drops, energy production slows — and fatigue sets in, often alongside immune dysfunction and inflammation." },
        { h: "What can we do to replenish what's been lost?" },
        { p: "Grounding is one of the simplest places to start. Kick off your shoes and let the body charge naturally from the earth's negative ions." },
        { list: [
          "Seawater, dewy grass, and wet sand are especially high in mineral content.",
          "Grounding mats are available for anyone living in a city.",
          "Aim for 30 minutes a day for the full benefit.",
          "It's also wonderful for emotional regulation in children.",
        ] },
      ],
    },
    {
      num: "No. 03",
      title: "Cycling Off Peptides, Simply",
      sub: "What to attend to during, between, and after a cycle",
      body: [
        { note: "Educational only — this is not medical advice, and nothing here is a dosing recommendation. Always work with your physician." },
        { h: "Start with bloodwork" },
        { p: "The first thing anybody should do is thorough bloodwork — through a doctor or a trusted third party. From there, proper supplementation means understanding which vitamins your body is deficient in, and replenishing those specifically." },
        { h: "Don't overlook creatine" },
        { p: "Creatine is the most underrated supplement in the conversation. Beyond muscle recovery, it supports mental clarity, comprehension, and retention." },
        { h: "NAD+, NMN and TMG" },
        { p: "NMN is the precursor to NAD+. TMG supports inflammation, offers symptom relief, and contributes to general repair. These come in liquid form and are easy to take throughout the day or night." },
        { h: "Gut health changes everything" },
        { p: "Gut health is extremely important — it sends signals to the brain. A thorough stool test helps you understand how the gut is functioning and what may be depleted. Once you replenish a depleted probiotic or address an underlying issue, peptides often work better: food is broken down and digested at a higher level, and overall body function can be restored when the gut is in order." },
        { h: "Cellular repair while cycling off" },
        { p: "Mitochondrial repair supplements provide cellular support during this time. Some people cycle off peptides entirely and use mitochondrial support as a replacement during that window. Anything that provides cellular repair while cycling off can be a benefit — though it isn't always needed." },
        { p: "Above all: understanding what your body is deficient in matters most when cycling off." },
      ],
    },
    {
      num: "No. 04",
      title: "Reading Your Bloodwork",
      sub: "The numbers that matter, and what they mean",
      body: [
        { note: "Educational only — this is not medical advice, and lab results should always be reviewed with a qualified practitioner." },
        { p: "Most people get bloodwork done once a year, glance at whether anything's flagged in red, and file it away. That's a missed opportunity — your labs are one of the most honest conversations your body will ever have with you." },
        { h: "In range isn't the same as optimal" },
        { p: "Lab ranges are built from population averages — including a lot of people who don't feel well. Sitting at the low edge of \"normal\" can still mean you're running on fumes. The more useful questions: where do you sit within the range, and which direction are you moving?" },
        { h: "The panels worth knowing" },
        { list: [
          "A complete blood count — the broad first look at immune function and oxygen delivery.",
          "A metabolic panel — blood sugar, kidney and liver markers, electrolytes.",
          "Thyroid markers — the thermostat for energy, mood, and metabolism.",
          "Vitamin D, B12, and iron — the deficiencies most likely to masquerade as \"just tired.\"",
          "Inflammatory markers — quiet signals that something is asking for attention.",
        ] },
        { h: "Trends tell the truth" },
        { p: "A single test is a photograph; a series is a film. Testing consistently — and keeping your own copies — lets you see the direction of things long before a number ever gets flagged." },
        { h: "Bring your labs into the room" },
        { p: "This is exactly the kind of thing we look at together. You don't need to decode it alone — you need to know which questions to ask, and what your body has been trying to say." },
      ],
    },
    {
      num: "No. 05",
      title: "The 4-7-8 Breath, Made Simple",
      sub: "A nervous-system reset you can do anywhere",
      body: [
        { p: "Your breath is the only part of the nervous system you can steer by hand. The 4-7-8 breath is the simplest way to take the wheel — no equipment, no app, no one around you even noticing." },
        { h: "How to do it" },
        { list: [
          "Breathe in quietly through the nose for a count of four.",
          "Hold the breath for a count of seven.",
          "Exhale slowly through the mouth for a count of eight, like fogging a mirror.",
          "That's one cycle. Do four.",
        ] },
        { h: "Why it works" },
        { p: "The long exhale is the active ingredient. When the out-breath outlasts the in-breath, the body reads it as a signal of safety and shifts from fight-or-flight toward rest-and-digest. The hold slows everything down enough for that message to land." },
        { h: "When to reach for it" },
        { list: [
          "Before a meal, to shift the body toward digestion.",
          "In the car before walking into something hard.",
          "At night, when the mind won't put the day down.",
          "Any moment you notice your shoulders living up by your ears.",
        ] },
        { h: "Make it a practice, not a rescue" },
        { p: "It works in an emergency, but it works better as a rhythm. Four cycles, twice a day, and the nervous system starts to remember the way home on its own." },
      ],
    },
  ],

  /* ---- SUPPLEMENT GUIDE (right column) ----
     Each category opens a pop-up listing its products.
     To add a product: copy a line and change name, note, and url.
     To leave a category empty, use: products: []
     "icon" options: gut, sleep, energy, hormone, inflammation, peptide */
  supplementLabel: "Supplement Guide",
  supplementHeadline: "Organized by what you need.",   // "what you need." in italic brass
  supplementHeadlineItalic: "what you need.",
  supplementIntro: "Hand-picked guidance, grouped by the system it supports — curated and updated by Nicole.",
  categories: [
    {
      icon: "gut", name: "Gut Health", sub: "digestion & microbiome",
      products: [
        { name: "Amy Myers MD — Leaky Gut Revive", note: "L-glutamine, slippery elm & marshmallow root", url: "https://www.amazon.com/dp/B07FKTG2D3" },
        { name: "Microbiome Labs — Mega IgG2000", note: "immunoglobulin support, dairy-free", url: "https://www.amazon.com/dp/B09Z143WS7" },
        { name: "Ortho Molecular — Ortho Biotic", note: "100 billion CFU probiotic", url: "https://www.amazon.com/dp/B09JMR2QC2" },
      ],
    },
    {
      icon: "sleep", name: "Sleep & Calm", sub: "rest & nervous system",
      products: [
        { name: "Rho Nutrition — Liposomal Magnesium", note: "bisglycinate, for relaxation & recovery", url: "https://www.amazon.com/dp/B0CV4P4131" },
        { name: "Ethereal Gold Alchemy — Snoozy", note: "bedtime blend", url: "https://etherealgoldalchemy.com/products/snoozy-your-bedtime-buddy" },
        { name: "Sunny Within — Sleep", note: "nightly wind-down support", url: "https://sunnywithin.com/products/sleep" },
      ],
    },
    {
      icon: "energy", name: "Energy & Mito", sub: "cellular fuel",
      products: [
        { name: "Oxaloacetate CFS", note: "mitochondrial & cellular energy", url: "https://oxaloacetatecfs.com/products/oxaloacetate-cfs-90-count-bottle" },
        { name: "Sunny Within — NAD+ / NMN", note: "cellular energy & healthy aging", url: "https://sunnywithin.com/products/nad-nmn-supplement" },
        { name: "Rho Nutrition — Liposomal Creatine", note: "muscle, brain & cellular energy", url: "https://www.amazon.com/dp/B0D63NF2HH" },
      ],
    },
    {
      icon: "hormone", name: "Hormones", sub: "balance & vitality",
      products: [
        { name: "Gaia Herbs — Vitex Berry", note: "chaste tree, cycle & hormone support", url: "https://www.amazon.com/dp/B003VT3YP0" },
        { name: "Rho Nutrition — Liposomal D3K2", note: "vitamin D3 + K2", url: "https://www.amazon.com/dp/B0CRNDCLQL" },
      ],
    },
    {
      icon: "inflammation", name: "Inflammation", sub: "recovery & repair",
      products: [
        { name: "Rho Nutrition — Liposomal Glutathione", note: "antioxidant & natural detoxification", url: "https://www.amazon.com/dp/B0BQ3ZNK64" },
        { name: "Rho Nutrition — Curcumin + Resveratrol", note: "joint comfort & mobility", url: "https://www.amazon.com/dp/B0BQ4QGDKC" },
        { name: "Rho Nutrition — Liposomal Quercetin", note: "immune & allergy support", url: "https://www.amazon.com/dp/B0CRNQSJJZ" },
      ],
    },
    {
      icon: "peptide", name: "Peptide Support", sub: "on, off & between",
      products: [],
    },
  ],
  supplementFootnote: "A framework, not medical advice. Specific guidance is always personal, and lives inside your sessions.",

  /* Message shown in any pop-up that doesn't have a blurb yet. */
  comingSoon: "This piece is coming soon. Reach out any time and Nicole can walk you through it in the meantime.",
};
