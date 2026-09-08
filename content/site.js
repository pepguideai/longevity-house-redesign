/* ============================================================
   SITE-WIDE CONTENT  ·  Longevity House
   ------------------------------------------------------------
   This file controls things that appear on EVERY page:
   the brand name, the navigation menu, the footer, and your
   booking link. Edit the text inside the quotes. Don't remove
   the quotes, commas, or brackets.
   ============================================================ */

window.SITE = {

  /* ---- BRAND ---- */
  brandName: "Longevity House",
  brandMark: "L",                 // the single letter inside the circle logo
  established: "EST. 2026",
  tagline: "A practice in presence, presence in practice.",

  /* ---- NAVIGATION MENU ----
     label = what shows in the menu, href = the page file it links to.
     The CTA button on the right is set by ctaLabel / ctaHref. */
  nav: [
    { label: "Home",           href: "#home" },
    { label: "Approach",       href: "#approach" },
    { label: "The Roundtable", href: "#roundtable" },
    { label: "Coaching",       href: "#coaching" },
    { label: "Resources",      href: "#resources" },
  ],
  ctaLabel: "Step Inside",
  ctaHref: "#begin",

  /* ---- BOOKING ----
     When you have a Calendly / Acuity / Cal.com link, paste it here.
     Until then, leave it as "" and the Begin page shows a styled
     placeholder where the calendar will appear. */
  bookingUrl: "",
  bookingHeadline: "Book your first session",
  bookingSubtitle: "Free 20-minute intro call",
  bookingDuration: "20 min",

  /* ---- CHECKOUT / PAYMENTS ----
     The cart and checkout pages work now; real payment happens
     through Stripe Payment Links. When Nicole has a Stripe account:
     1. In Stripe, create a Payment Link for each offering
     2. Paste each link between the quotes below
     The checkout button then sends people to Stripe's secure page.
     Until then, checkout shows a friendly "payments coming soon" note. */
  checkout: {
    paymentLinks: {
      single: "",   // Stripe Payment Link for Single Session
      twelve: "",   // Stripe Payment Link for The Twelve
      circle: "",   // Stripe Payment Link for Coaching Circle
    },
    pendingNote: "Online payment is almost ready. Submit your selection and Nicole will reach out to complete your booking — or step inside and book a free intro call.",
  },

  /* ---- CONTACT (shown in the footer) ---- */
  contact: {
    email: "hello@longevityhouse.com",
    location: "",   // add your city here when ready, e.g. "Austin, Texas"
    instagram: "@longevityhouse",
  },

  /* ---- FOOTER ---- */
  footerTagline: "Reimagined health coaching — a practice of presence, wherever you are.",
  footerCredit: "© 2026 Longevity House LLC",
};
