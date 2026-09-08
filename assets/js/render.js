/* ============================================================
   RENDER ENGINE  ·  Longevity House  ·  single-page edition
   ------------------------------------------------------------
   Builds the whole site as one scrolling page from the files in
   /content. You normally won't need to edit this file — to change
   words, prices, or lists, edit the /content files.
   ============================================================ */

(function () {
  "use strict";

  const S = window.SITE || {};
  const C = window.CONTENT || {};
  const $ = (sel, root = document) => root.querySelector(sel);

  /* Every clickable pop-up item across the whole page registers here */
  const ITEMS = [];
  function reg(title, sub, blurb, products, body, fallback) {
    ITEMS.push({ title, sub, blurb, products, body, fallback });
    return ITEMS.length - 1;
  }

  function emphasize(text, word, color) {
    if (!word || !text.includes(word)) return text;
    const cls = color === "brass" ? "italic brass-em" : "italic";
    return text.replace(word, `<em class="${cls}">${word}</em>`);
  }

  /* ============================================================
     CART STORE  (saved in the browser via localStorage)
     ============================================================ */
  const Cart = {
    KEY: "lh-cart",
    read() {
      try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
      catch (e) { return {}; }
    },
    write(c) {
      try { localStorage.setItem(this.KEY, JSON.stringify(c)); } catch (e) {}
      updateCartBadge();
    },
    add(id) { const c = this.read(); c[id] = (c[id] || 0) + 1; this.write(c); },
    setQty(id, qty) {
      const c = this.read();
      if (qty <= 0) delete c[id]; else c[id] = qty;
      this.write(c);
    },
    clear() { this.write({}); },
    count() { const c = this.read(); return Object.values(c).reduce((a, b) => a + b, 0); },
    tierById(id) { return (C.coaching.tiers || []).find(t => t.id === id); },
    lines() {
      const c = this.read();
      return Object.entries(c)
        .map(([id, qty]) => ({ tier: this.tierById(id), qty }))
        .filter(l => l.tier);
    },
    total() { return this.lines().reduce((sum, l) => sum + l.tier.priceNumber * l.qty, 0); },
  };
  const money = n => "$" + n.toLocaleString("en-US");
  function updateCartBadge() {
    const badge = $(".cart-link .cart-count");
    if (!badge) return;
    const n = Cart.count();
    badge.textContent = n;
    badge.style.display = n > 0 ? "" : "none";
  }

  /* ---------- SVG ICON LIBRARY ---------- */
  const ICONS = {
    mindfulness: `<circle cx="18" cy="18" r="13"/><path d="M18 11v7l4 3"/>`,
    education:   `<path d="M8 6h16a2 2 0 0 1 2 2v22l-10-5-10 5V8a2 2 0 0 1 2-2z"/><path d="M12 13h8M12 18h6"/>`,
    support:     `<path d="M6 10h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H14l-6 5v-5H6z"/><path d="M12 15h10M12 19h6"/>`,
    budget:      `<rect x="7" y="6" width="22" height="24" rx="2"/><path d="M12 13h12M12 18h12M12 23h7"/>`,
    supplement:  `<rect x="13" y="6" width="10" height="24" rx="5"/><path d="M13 18h10"/>`,
    network:     `<circle cx="18" cy="18" r="6"/><circle cx="18" cy="6.5" r="2.5"/><circle cx="29" cy="22" r="2.5"/><circle cx="7" cy="22" r="2.5"/><path d="M18 12v-3M23 20l4 1M13 20l-4 1"/>`,
    gut:          `<path d="M13 4c4 0 7 3 7 7 0 5-7 11-7 11S6 16 6 11c0-4 3-7 7-7z"/><path d="M13 9v5"/>`,
    sleep:        `<path d="M5 14a8 8 0 0 0 15 3 7 7 0 0 1-9-9 8 8 0 0 0-6 6z"/>`,
    energy:       `<path d="M14 3l-7 11h6l-1 9 7-11h-6z"/>`,
    hormone:      `<circle cx="13" cy="13" r="3"/><path d="M13 4v3M13 19v3M4 13h3M19 13h3M6.5 6.5l2 2M17.5 17.5l-2-2M6.5 19.5l2-2M17.5 8.5l-2 2"/>`,
    inflammation: `<path d="M13 5c-3 3-3 6 0 9s3 6 0 7M9 9c-2 2-2 4 0 6M17 9c2 2 2 4 0 6"/>`,
    peptide:      `<rect x="9" y="4" width="8" height="18" rx="4"/><path d="M9 13h8"/>`,
  };
  const iconSvg = (name, cls, vb = "0 0 36 36") =>
    `<svg class="${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${ICONS[name] || ""}</svg>`;

  /* ============================================================
     HEADER + FOOTER
     ============================================================ */
  function buildHeader() {
    const mount = $("#site-header");
    if (!mount) return;
    /* on cart/checkout pages, anchors must point back to the main page */
    const onSubPage = ["cart", "checkout"].includes(document.body.dataset.build);
    const prefix = onSubPage ? "index.html" : "";
    const links = S.nav.map(item =>
      `<a href="${prefix}${item.href}" data-section="${item.href.slice(1)}">${item.label}</a>`).join("");
    mount.innerHTML = `
      <nav class="nav">
        <a href="${prefix || "#home"}" class="logo"><span class="mark">${S.brandMark}</span> ${S.brandName}</a>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
        <div class="nav-links">
          ${links}
          <a href="cart.html" class="cart-link" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2l2.4 11h10.2l2-8H7"/></svg>
            <span class="cart-count" style="display:none;">0</span>
          </a>
          <a href="${prefix}${S.ctaHref}" class="nav-cta">${S.ctaLabel}</a>
        </div>
      </nav>`;
    $(".nav-toggle", mount).addEventListener("click", () =>
      document.body.classList.toggle("nav-open"));
    mount.querySelectorAll(".nav-links a").forEach(a =>
      a.addEventListener("click", () => document.body.classList.remove("nav-open")));
    updateCartBadge();
  }

  function buildFooter() {
    const mount = $("#site-footer");
    if (!mount) return;
    const navCols = S.nav.map(i => `<a href="${i.href}">${i.label}</a>`).join("");
    mount.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo"><span class="mark">${S.brandMark}</span> ${S.brandName}</div>
          <p>${S.footerTagline}</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          ${navCols}
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="mailto:${S.contact.email}">${S.contact.email}</a>
          <a href="${S.ctaHref}">${S.ctaLabel}</a>
          <a href="#">${S.contact.instagram}</a>
          <span style="display:block;font-family:var(--serif-italic);font-style:italic;color:var(--sand-deep);padding:5px 0;font-size:15px;">${S.contact.location}</span>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${S.footerCredit}</span>
        <span class="credit">${S.tagline}</span>
      </div>`;
  }

  /* ============================================================
     SECTION BUILDERS — each returns an HTML string
     ============================================================ */

  function sectionHome() {
    const P = C.home;
    return `
      <section class="hero grain page-section" id="home">
        <div class="cascade">
          <span class="line line-1 display">${P.cascade.line1}</span>
          <span class="line line-2">${P.cascade.line2}</span>
          <span class="line line-3">${P.cascade.line3}</span>
        </div>
        <div class="hero-ctas">
          <a href="${P.primaryCtaHref}" class="cta-italic"><em>${P.primaryCtaLabel}</em><span class="arrow">→</span></a>
          <a href="${P.secondaryCtaHref}" class="cta-ghost">${P.secondaryCtaLabel} →</a>
        </div>
        <div class="est-stamp" data-est="${S.established}">${S.tagline.replace(/, /, ',<br/>')}</div>
      </section>`;
  }

  function sectionApproach() {
    const P = C.approach;
    const v = P.venn;
    const pillarCards = P.pillars.map((pil, i) => `
      <button class="pillar-tab" data-pillar="${i}">
        <span class="num">0${i + 1}</span>
        <span class="ptext">
          <span class="ptitle">${pil.title}</span>
          <span class="psub">${pil.sub}</span>
        </span>
        <span class="parrow">→</span>
      </button>`).join("");
    return `
      <section class="section approach-section grain page-section" id="approach">
        <div class="inner">
          <div class="section-head">
            <span class="eyebrow center">${P.eyebrow}</span>
            <h2>${emphasize(P.headline, P.headlineItalicWord)}</h2>
            <p class="lede">${P.lede}</p>
          </div>
          <div class="venn-wrap">
            <div class="venn-col left">
              <h4>— ${v.left.kicker} —</h4>
              <h3>${v.left.title}</h3>
              <ul>${v.left.items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>
            <div class="venn">
              <div class="circle c1"></div>
              <div class="circle c2"></div>
            </div>
            <div class="venn-col right">
              <h4>— ${v.right.kicker} —</h4>
              <h3>${v.right.title}</h3>
              <ul>${v.right.items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>
          </div>
          <div class="bridge">
            <div class="small-eye">— How we practice —</div>
            <div class="bridge-text">${emphasize(P.bridgeText, "principles")}</div>
            <div class="pillar-tabs">${pillarCards}</div>
          </div>
        </div>
      </section>`;
  }

  function sectionRoundtable() {
    const P = C.roundtable;
    const seats = P.seats.map(s => `
      <div class="rt-seat ${s.position}">
        <div class="dot"></div>
        <span class="stitle">${s.title}</span>
        <span class="ssub">${s.sub}</span>
      </div>`).join("");
    const mods = P.modalities.map(m => `<li>${m.name}</li>`).join("");
    return `
      <section class="section grain roundtable-page page-section" id="roundtable">
        <div class="roundtable-grid no-pracs">
          <div class="rt-left">
            <span class="eyebrow">${P.eyebrow}</span>
            <h2>${emphasize(P.headline, P.headlineItalicWord)}</h2>
            <p class="lede">${P.lede}</p>
            <ul class="rt-modalities">
              <li class="label">— ${P.modalitiesLabel} —</li>
              ${mods}
            </ul>
          </div>
          <div class="rt-viz">
            <div class="rt-table">
              ${seats}
              <div class="rt-center"><span>${P.centerLabel}<small>${P.centerSub}</small></span></div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function sectionCoaching() {
    const P = C.coaching;
    const cards = P.values.map(v => `
      <div class="value-card static">
        <div class="ico-wrap">${iconSvg(v.icon, "ico")}</div>
        <h3>${v.title}</h3>
        <p>${v.text}</p>
      </div>`).join("");
    const tiers = P.tiers.map((t, i) => {
      const mi = reg(t.title, t.duration, t.blurb, null, null, P.comingSoon);
      return `
      <div class="tier t${i}${t.featured ? " featured" : ""}" data-modal="${mi}">
        <div class="ring">${i === 0 ? "○" : i === 1 ? "◐" : "●"}</div>
        <div class="tname">${t.name}</div>
        <h3>${t.title}</h3>
        <div class="duration">${t.duration}</div>
        <div class="price">${t.price}</div>
        <div class="price-note">${t.priceNote}</div>
        <ul>${t.includes.map(x => `<li>${x}</li>`).join("")}</ul>
        <button class="tier-select" data-add="${t.id}">Select — ${t.price}</button>
      </div>`;
    }).join("");
    return `
      <section class="section grain page-section" id="coaching">
        <div class="inner">
          <div class="section-head">
            <span class="eyebrow center">${P.valueEyebrow}</span>
            <h2>${emphasize(P.valueHeadline, P.valueHeadlineItalic)}</h2>
            <p class="lede">${P.valueLede}</p>
          </div>
          <div class="value-grid">${cards}</div>
        </div>
      </section>
      <section class="section pricing-section grain page-section" id="pricing">
        <div class="inner">
          <div class="section-head">
            <span class="eyebrow center">${P.pricingEyebrow}</span>
            <h2>${emphasize(P.pricingHeadline, P.pricingHeadlineItalic)}</h2>
            <p class="lede">${P.pricingLede}</p>
          </div>
          <div class="tiers">${tiers}</div>
          <div class="closing-cta">
            <div class="small-eye">— ${P.closingKicker} —</div>
            <h3>${emphasize(P.closingHeadline, P.closingHeadlineItalic)}</h3>
            <a href="${P.closingCtaHref}" class="cta-italic"><em>${P.closingCtaLabel}</em><span class="arrow">→</span></a>
          </div>
        </div>
      </section>`;
  }

  function sectionResources() {
    const P = C.resources;
    const essays = P.essays.map(e => {
      const hasBody = e.body && e.body.length;
      const i = reg(e.title, e.sub, e.blurb, null, e.body, P.comingSoon);
      return `
      <button class="article" data-modal="${i}">
        <span class="anum">${e.num}</span>
        <span class="atitle">${e.title}<small>${e.sub}</small></span>
        <span class="aarrow">${hasBody ? "→" : "·"}</span>
      </button>`;
    }).join("");
    const cats = P.categories.map(c => {
      const count = (c.products || []).length;
      const i = reg(c.name, c.sub, c.blurb, c.products, null, P.comingSoon);
      return `
      <div class="cat" data-modal="${i}">
        ${iconSvg(c.icon, "cat-ico", "0 0 26 26")}
        <span class="cat-name">${c.name}</span>
        <span class="cat-sub">${c.sub}</span>
        ${count ? `<span class="cat-count">${count} picks</span>` : ""}
      </div>`;
    }).join("");
    return `
      <section class="section grain page-section" id="resources">
        <div class="inner">
          <div class="section-head">
            <span class="eyebrow center">${P.eyebrow}</span>
            <h2>${emphasize(P.headline, P.headlineItalic)}</h2>
            <p class="lede">${P.lede}</p>
          </div>
          <div class="res-grid">
            <div class="essays">
              <div class="col-label">${P.essaysLabel}</div>
              ${essays}
            </div>
            <div class="supplements">
              <div class="col-label">${P.supplementLabel}</div>
              <h3>${emphasize(P.supplementHeadline, P.supplementHeadlineItalic, "brass")}</h3>
              <p class="intro">${P.supplementIntro}</p>
              <div class="cat-grid">${cats}</div>
              <div class="supp-foot">${P.supplementFootnote}</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function sectionBegin() {
    const P = C.begin;
    const steps = P.steps.map(s => `
      <div class="begin-step">
        <span class="snum">${s.num}</span>
        <div>
          <h4>${s.title}</h4>
          <p>${s.text}</p>
        </div>
      </div>`).join("");
    let bookingInner;
    if (S.bookingUrl && S.bookingUrl.trim() !== "") {
      bookingInner = `<iframe src="${S.bookingUrl}" style="width:100%;height:560px;border:none;border-radius:8px;" title="Booking calendar"></iframe>`;
    } else {
      bookingInner = `
        <div class="booking-embed">
          <div class="embed-tag">${P.embedTag}</div>
          <div class="embed-note">${P.embedPlaceholder}</div>
        </div>`;
    }
    return `
      <section class="section grain page-section" id="begin">
        <div class="begin-grid">
          <div class="begin-left">
            <span class="eyebrow">${P.eyebrow}</span>
            <h2>${emphasize(P.headline, P.headlineItalic)}</h2>
            <p class="lede">${P.lede}</p>
            <div class="begin-steps">${steps}</div>
          </div>
          <div class="booking">
            <div class="b-head">
              <div>
                <div class="b-title">${emphasize(S.bookingHeadline, "first session", "brass")}</div>
                <div class="b-sub">${S.bookingSubtitle}</div>
              </div>
              <div class="duration-pill">${S.bookingDuration}</div>
            </div>
            ${bookingInner}
          </div>
        </div>
      </section>`;
  }

  /* ============================================================
     SHARED INFO MODAL
     ============================================================ */
  function infoModalHtml() {
    return `
      <div class="modal-overlay" id="info-modal">
        <div class="modal">
          <button class="close" aria-label="Close">×</button>
          <div class="info-eyebrow"></div>
          <h3></h3>
          <p class="info-body"></p>
          <div class="essay-body"></div>
          <div class="product-list"></div>
        </div>
      </div>`;
  }
  function renderBlocks(blocks) {
    return blocks.map(b => {
      if (b.h) return `<h4>${b.h}</h4>`;
      if (b.p) return `<p>${b.p}</p>`;
      if (b.note) return `<p class="essay-note">${b.note}</p>`;
      if (b.list) return `<ul>${b.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
      return "";
    }).join("");
  }
  function wireInfoModal() {
    const overlay = $("#info-modal");
    if (!overlay) return;
    const modal = $(".modal", overlay);
    function open(i) {
      const it = ITEMS[i];
      if (!it) return;
      $(".info-eyebrow", modal).textContent = it.sub || "";
      $("h3", modal).textContent = it.title;

      const hasProducts = it.products && it.products.length;
      const hasBody = it.body && it.body.length;
      const body = $(".info-body", modal);
      const essay = $(".essay-body", modal);
      const list = $(".product-list", modal);

      essay.innerHTML = ""; essay.style.display = "none";
      list.innerHTML = "";  list.style.display = "none";
      body.style.display = "none";
      modal.classList.toggle("reading", !!hasBody);

      if (hasBody) {
        essay.innerHTML = renderBlocks(it.body);
        essay.style.display = "";
      } else if (hasProducts) {
        list.innerHTML = it.products.map(p => `
          <a class="product" href="${p.url}" target="_blank" rel="noopener noreferrer">
            <span class="ptext">
              <span class="pname">${p.name}</span>
              <span class="pnote">${p.note || ""}</span>
            </span>
            <span class="parrow">→</span>
          </a>`).join("");
        list.style.display = "";
      } else {
        body.textContent = (it.blurb && it.blurb.trim()) ? it.blurb : (it.fallback || "More coming soon.");
        body.style.display = "";
      }

      overlay.classList.add("open");
      modal.scrollTop = 0;
      document.body.style.overflow = "hidden";
    }
    function close() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
    document.querySelectorAll("[data-modal]").forEach(elm =>
      elm.addEventListener("click", () => open(parseInt(elm.dataset.modal, 10))));
    $(".close", modal).addEventListener("click", close);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }

  /* ---------- APPROACH PILLAR MODAL ---------- */
  function pillarModalHtml() {
    return `
      <div class="modal-overlay" id="pillar-modal">
        <div class="modal">
          <button class="close" aria-label="Close">×</button>
          <div class="num-large"></div>
          <div class="pillar-label"></div>
          <h3></h3>
          <p class="statement"></p>
          <p class="detail"></p>
          <div class="modal-foot">
            <div class="pos"></div>
            <div class="marrows"><button data-dir="-1">←</button><button data-dir="1">→</button></div>
          </div>
        </div>
      </div>`;
  }
  function wireApproachModal() {
    const overlay = $("#pillar-modal");
    if (!overlay) return;
    const P = C.approach;
    const modal = $(".modal", overlay);
    let idx = 0;
    function fill(i) {
      const p = P.pillars[i];
      idx = i;
      $(".num-large", modal).textContent = "0" + (i + 1);
      $(".pillar-label", modal).textContent = `Pillar ${["one", "two", "three"][i]} of three`;
      $("h3", modal).innerHTML = emphasize(p.modalTitle, p.modalTitle.split(" ").slice(-1)[0]);
      $(".statement", modal).textContent = p.modalStatement;
      $(".detail", modal).textContent = p.modalDetail;
      $(".pos", modal).innerHTML = P.pillars.map((_, k) =>
        k === i ? `<strong>0${k + 1}</strong>` : `0${k + 1}`).join(" · ");
    }
    function open(i) { fill(i); overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
    document.querySelectorAll(".pillar-tab").forEach(tab =>
      tab.addEventListener("click", () => open(parseInt(tab.dataset.pillar, 10))));
    $(".close", modal).addEventListener("click", close);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    modal.querySelectorAll(".marrows button").forEach(btn =>
      btn.addEventListener("click", () => {
        const dir = parseInt(btn.dataset.dir, 10);
        fill((idx + dir + P.pillars.length) % P.pillars.length);
      }));
  }

  /* ---------- ACTIVE NAV HIGHLIGHT ON SCROLL ---------- */
  function wireScrollSpy() {
    const links = document.querySelectorAll(".nav-links a[data-section]");
    const map = {};
    links.forEach(l => { map[l.dataset.section] = l; });
    /* pricing counts as coaching for highlighting */
    const alias = { pricing: "coaching" };
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const id = alias[en.target.id] || en.target.id;
        links.forEach(l => l.classList.remove("active"));
        if (map[id]) map[id].classList.add("active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".page-section").forEach(s => obs.observe(s));
  }

  /* ============================================================
     CART PAGE
     ============================================================ */
  function buildCartPage() {
    const mount = $("#page");
    function render() {
      const lines = Cart.lines();
      const rows = lines.map(l => `
        <div class="cart-row">
          <div class="cart-item">
            <span class="ci-title">${l.tier.title}</span>
            <span class="ci-meta">${l.tier.price} ${l.tier.unit}</span>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" data-qty="${l.tier.id}:-1" aria-label="Decrease">−</button>
            <span class="qty-num">${l.qty}</span>
            <button class="qty-btn" data-qty="${l.tier.id}:1" aria-label="Increase">+</button>
          </div>
          <div class="cart-line-total">${money(l.tier.priceNumber * l.qty)}</div>
          <button class="cart-remove" data-remove="${l.tier.id}" aria-label="Remove">×</button>
        </div>`).join("");

      mount.innerHTML = `
        <section class="section grain subpage">
          <div class="inner narrow">
            <div class="section-head">
              <span class="eyebrow center">Your Selections</span>
              <h2>Your <em class="italic">cart.</em></h2>
            </div>
            ${lines.length ? `
              <div class="cart-list">${rows}</div>
              <div class="cart-summary">
                <span class="cs-label">Total</span>
                <span class="cs-total">${money(Cart.total())}</span>
              </div>
              <div class="cart-actions">
                <a href="index.html#pricing" class="cta-ghost">← Keep browsing</a>
                <a href="checkout.html" class="btn-solid">Continue to checkout</a>
              </div>
            ` : `
              <p class="cart-empty">Your cart is empty — the coaching paths live on the main page.</p>
              <div class="cart-actions center">
                <a href="index.html#pricing" class="btn-solid">See the three ways to begin</a>
              </div>
            `}
          </div>
        </section>`;

      mount.querySelectorAll("[data-qty]").forEach(b => b.addEventListener("click", () => {
        const [id, d] = b.dataset.qty.split(":");
        const cur = Cart.read()[id] || 0;
        Cart.setQty(id, cur + parseInt(d, 10));
        render();
      }));
      mount.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => {
        Cart.setQty(b.dataset.remove, 0);
        render();
      }));
    }
    render();
  }

  /* ============================================================
     CHECKOUT PAGE
     ============================================================ */
  function buildCheckoutPage() {
    const mount = $("#page");
    const lines = Cart.lines();
    if (!lines.length) {
      mount.innerHTML = `
        <section class="section grain subpage">
          <div class="inner narrow">
            <div class="section-head">
              <span class="eyebrow center">Checkout</span>
              <h2>Nothing here <em class="italic">yet.</em></h2>
            </div>
            <p class="cart-empty">Choose a coaching path first, then come back to check out.</p>
            <div class="cart-actions center">
              <a href="index.html#pricing" class="btn-solid">See the three ways to begin</a>
            </div>
          </div>
        </section>`;
      return;
    }

    const rows = lines.map(l => `
      <div class="sum-row">
        <span>${l.tier.title} × ${l.qty}</span>
        <span>${money(l.tier.priceNumber * l.qty)}</span>
      </div>`).join("");

    /* if the cart holds exactly one kind of item AND its Stripe link
       is set, the pay button goes straight there */
    const linkMap = (S.checkout && S.checkout.paymentLinks) || {};
    const distinct = lines.length === 1 ? lines[0].tier.id : null;
    const payUrl = distinct && linkMap[distinct] && linkMap[distinct].trim() !== "" ? linkMap[distinct] : null;

    mount.innerHTML = `
      <section class="section grain subpage">
        <div class="inner narrow">
          <div class="section-head">
            <span class="eyebrow center">Checkout</span>
            <h2>Almost <em class="italic">there.</em></h2>
          </div>
          <div class="checkout-grid">
            <div class="co-form">
              <div class="col-label">Your details</div>
              <label class="field">
                <span>Name</span>
                <input type="text" id="co-name" placeholder="Your name" />
              </label>
              <label class="field">
                <span>Email</span>
                <input type="email" id="co-email" placeholder="you@somewhere.com" />
              </label>
              <label class="field">
                <span>Anything Nicole should know? <small>(optional)</small></span>
                <textarea id="co-note" rows="3" placeholder="A line or two — whatever feels honest."></textarea>
              </label>
            </div>
            <div class="co-summary">
              <div class="col-label">Order summary</div>
              <div class="sum-list">${rows}</div>
              <div class="sum-total">
                <span>Total</span>
                <span>${money(Cart.total())}</span>
              </div>
              ${payUrl ? `
                <a class="btn-solid pay-btn" href="${payUrl}">Pay securely →</a>
                <p class="pay-note">Payment is handled securely by Stripe.</p>
              ` : `
                <button class="btn-solid pay-btn" id="co-submit">Complete request</button>
                <p class="pay-note">${(S.checkout && S.checkout.pendingNote) || "Payments are coming soon."}</p>
              `}
              <div id="co-confirm" class="co-confirm" style="display:none;">
                Thank you — your selection is noted. Nicole will be in touch at the email you provided.
              </div>
            </div>
          </div>
        </div>
      </section>`;

    const submit = $("#co-submit");
    if (submit) submit.addEventListener("click", () => {
      $("#co-confirm").style.display = "";
      submit.disabled = true;
      submit.textContent = "Request received";
      Cart.clear();
    });
  }

  /* ---------- BOOT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    const build = document.body.dataset.build;
    const mount = $("#page");
    if (build === "cart") {
      buildCartPage();
    } else if (build === "checkout") {
      buildCheckoutPage();
    } else if (mount) {
      mount.innerHTML =
        sectionHome() +
        sectionApproach() +
        sectionRoundtable() +
        sectionCoaching() +
        sectionResources() +
        sectionBegin() +
        infoModalHtml() +
        pillarModalHtml();
      wireInfoModal();
      wireApproachModal();
      wireScrollSpy();
      /* Select buttons: add to cart, go to cart. stopPropagation so
         the tier's info pop-up doesn't also open */
      document.querySelectorAll("[data-add]").forEach(btn =>
        btn.addEventListener("click", e => {
          e.stopPropagation();
          Cart.add(btn.dataset.add);
          window.location.href = "cart.html";
        }));
    }
    buildFooter();
  });

})();
