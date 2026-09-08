/* ============================================================
   APPROACH PAGE CONTENT  ·  approach.html
   ------------------------------------------------------------
   Two parts: the Primary/Secondary food diagram, and the three
   "principles" that open a pop-up when clicked.
   ============================================================ */

window.CONTENT = window.CONTENT || {}; window.CONTENT.approach = {
  eyebrow: "Our Approach",
  headline: "Everything is connected.",     // the word before "is" shows in italic green
  headlineItalicWord: "Everything",
  lede: "A practice built on the truth that what you eat is downstream of how you're living.",

  /* The Venn diagram — two overlapping circles */
  venn: {
    left: {
      kicker: "Primary",
      title: "What truly nourishes you",
      items: ["spiritual", "emotional", "physical", "financial", "home environment"],
    },
    right: {
      kicker: "Secondary",
      title: "What we eat & do",
      items: ["food & nutrition", "movement", "sleep rituals", "daily habits", "supplementation"],
    },
  },

  /* The bridge line between the diagram and the principles */
  bridgeText: "Three principles shape every session.",   // "principles" shows in italic green

  /* The three principles. Each opens a pop-up (modal) when clicked.
     - title / sub show on the clickable card
     - modalStatement / modalDetail show inside the pop-up */
  pillars: [
    {
      title: "Presence as practice",
      sub: "slowing down so the body can listen",
      modalTitle: "Presence as practice.",
      modalStatement: "Presence takes practice — but over time, it strengthens healing.",
      modalDetail: "We slow down so the body can listen. Most of what we coach toward isn't doing more; it's noticing more. Breath, body, environment, signal. The work begins by simply showing up to your own life on purpose.",
    },
    {
      title: "Intention & alignment",
      sub: "deep reflection over rigid prescription",
      modalTitle: "Intention & alignment.",
      modalStatement: "We create intention, alignment of self, and a foundation for effective goals.",
      modalDetail: "Through deep reflection, not rigid prescription. Goals that come from alignment hold; goals imposed from outside tend to slip. We build yours from the inside out.",
    },
    {
      title: "Abundance & affirmation",
      sub: "expansion, not restriction",
      modalTitle: "Abundance & affirmation.",
      modalStatement: "Live life in abundance and affirmation.",
      modalDetail: "The work isn't restriction — it's expansion into who you already are. We trade the language of denial for the language of enough, and let healing follow from a fuller life rather than a smaller one.",
    },
  ],
};
