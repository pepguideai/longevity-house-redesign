/* ============================================================
   THE ROUNDTABLE PAGE CONTENT  ·  roundtable.html
   ------------------------------------------------------------
   The four featured specialties sit around the circle visual.
   The list below holds supporting modalities. The practitioner
   cards preview the real people in your network — edit names
   and locations as you formalize partnerships.
   ============================================================ */

window.CONTENT = window.CONTENT || {}; window.CONTENT.roundtable = {
  eyebrow: "Your Curated Network",
  headline: "The Roundtable.",            // "Roundtable" shows in italic brass
  headlineItalicWord: "Roundtable",
  lede: "Healing happens in community. The Roundtable is your circle of vetted holistic practitioners — every member personally sourced, used, and coordinated by Nicole, with you at the center.",

  /* Every clickable item can have a "blurb" — the text shown in its
     pop-up. Leave blurb as "" to show a friendly "coming soon" note.
     Fill it in whenever you're ready; no code changes needed. */

  /* The four seats around the circle (north, east, south, west).
     Keep to four for the layout to stay balanced. */
  seats: [
    { position: "n", title: "Holistic MD",       sub: "primary & alternative care",    blurb: "" },
    { position: "e", title: "Chiropractic Care", sub: "structural & nervous-system",    blurb: "" },
    { position: "s", title: "Hyperbaric Chamber", sub: "oxygen & recovery",             blurb: "" },
    { position: "w", title: "Red Light / Salt",  sub: "light & mineral medicine",       blurb: "" },
  ],

  centerLabel: "You",
  centerSub: "at the center",

  /* Supporting modalities — the read-only list on the left. */
  modalitiesLabel: "Also in the Roundtable",
  modalities: [
    { name: "Pediatric MDs" },
    { name: "Comprehensive Lab Testing" },
    { name: "Massage Therapy" },
    { name: "IV Therapy" },
  ],
};
