/* ============================================================
   COACHING PAGE CONTENT  ·  coaching.html
   ------------------------------------------------------------
   Two sections on one page: the six values up top, then the
   three pricing tiers. To change a price, edit the "price"
   line for that tier.
   ============================================================ */

window.CONTENT = window.CONTENT || {}; window.CONTENT.coaching = {

  /* ---- SECTION 1: VALUE ---- */
  valueEyebrow: "The Coaching",
  valueHeadline: "Everything you need to actually change.",  // "actually change" in italic green
  valueHeadlineItalic: "actually change.",
  valueLede: "Six ways we walk with you — between sessions, through the hard parts, all the way to lasting change.",

  /* The six value cards. "icon" picks the line drawing —
     options: mindfulness, education, support, budget, supplement, network
     Each opens a pop-up; add a "blurb" to fill it. */
  values: [
    { icon: "mindfulness", title: "Mindfulness Practices",      text: "Breathwork, meditation, and presence tools you can use anywhere.", blurb: "" },
    { icon: "education",   title: "Food Education",             text: "Understanding the why behind what you eat — not just the what.", blurb: "" },
    { icon: "support",     title: "Live Support",               text: "Real answers in real time, between sessions, when life happens.", blurb: "" },
    { icon: "budget",      title: "Budgeting & Meal Planning",  text: "Eating well on a real budget — grocery lists, plans, and structure.", blurb: "" },
    { icon: "supplement",  title: "Supplement Guidance",        text: "Medication and supplement support — including peptide cycling.", blurb: "" },
    { icon: "network",     title: "Roundtable Access",          text: "Your curated circle of vetted holistic specialists, coordinated for you.", blurb: "" },
  ],

  /* ---- SECTION 2: PRICING ---- */
  pricingEyebrow: "Ways to Begin",
  pricingHeadline: "Three ways to begin.",   // "begin" in italic green
  pricingHeadlineItalic: "begin.",
  pricingLede: "From a single session to a season of support — choose the rhythm that meets you where you are.",

  /* The three tiers. Set "featured: true" on the one you want
     highlighted (dark card, raised). To change a price, edit "price".
     Each tier opens a pop-up when clicked — add a "blurb" to fill it. */
  tiers: [
    {
      id: "single",
      name: "Begin Here",
      title: "Single Session",
      duration: "one to one",
      price: "$110",
      priceNumber: 110,
      unit: "per session",
      priceNote: "per session",
      featured: false,
      blurb: "",
      includes: [
        "90-minute private session",
        "Health history & intake",
        "Circle of Life review",
        "Curated first steps",
        "No commitment beyond the hour",
      ],
    },
    {
      id: "twelve",
      name: "Most Chosen",
      title: "The Twelve",
      duration: "twelve sessions",
      price: "$1,200",
      priceNumber: 1200,
      unit: "per package",
      priceNote: "$100 per session · save $120",
      featured: true,
      blurb: "",
      includes: [
        "Twelve private 1:1 sessions",
        "Full intake — bloodwork, saliva, stool review",
        "Roundtable sourcing & referrals",
        "Personalized food & lifestyle plan",
        "Ongoing accountability between sessions",
        "Priority response by text or email",
      ],
    },
    {
      id: "circle",
      name: "Together",
      title: "Coaching Circle",
      duration: "group of ten",
      price: "$10",
      priceNumber: 10,
      unit: "per person",
      priceNote: "per person · per circle",
      featured: false,
      blurb: "",
      includes: [
        "Small group of ten",
        "Themed coaching circle",
        "Shared learning & accountability",
        "Roundtable specialist guest",
        "Community-rate access to The Roundtable",
      ],
    },
  ],

  /* Message shown in any pop-up that doesn't have a blurb yet. */
  comingSoon: "Reach out any time to learn more, or step inside to book a first conversation.",

  /* ---- CLOSING CALL TO ACTION ---- */
  closingKicker: "Ready when you are",
  closingHeadline: "Your first session is a conversation.",  // "conversation" in italic green
  closingHeadlineItalic: "conversation.",
  closingCtaLabel: "Step inside",
  closingCtaHref: "#begin",
};
