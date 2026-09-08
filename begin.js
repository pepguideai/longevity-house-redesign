/* ============================================================
   BEGIN PAGE CONTENT  ·  begin.html
   ------------------------------------------------------------
   Left: the invitation and what the first session involves.
   Right: the booking panel. The calendar itself is controlled
   by "bookingUrl" in content/site.js.
   ============================================================ */

window.CONTENT = window.CONTENT || {}; window.CONTENT.begin = {
  eyebrow: "The Initial Session",
  headline: "Step inside.",            // "inside." in italic terracotta
  headlineItalic: "inside.",
  lede: "Your first session is a gentle opening — a place to be heard, mapped, and witnessed before anything else begins.",

  /* The three steps of a first session */
  steps: [
    { num: "i.",   title: "Health history exploration", text: "Where you've been, what's been carried, what wants tending." },
    { num: "ii.",  title: "Circle of Life review",      text: "A guided look at every area shaping your wellbeing — not just the body." },
    { num: "iii.", title: "Your first intention",       text: "One small, true thing to begin — chosen together." },
  ],

  /* The placeholder text shown inside the booking panel until a
     real calendar link is added in content/site.js */
  embedPlaceholder: "Your booking calendar appears here once connected.",
  embedTag: "Calendar embed slot",
};
