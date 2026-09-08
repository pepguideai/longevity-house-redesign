# Longevity House — Website Guide

Welcome! This is your website. It's built to be **easy to edit** — almost everything you'd want to change (words, prices, lists, your booking link) lives in a few simple files, and you don't need to know how to code to change them.

This guide explains how.

---

## The big idea

Your site has two kinds of files:

1. **Content files** (in the `content` folder) — these hold your *words, prices, and lists*. **This is what you edit.**
2. **Everything else** (the design, the layout, the code) — you can leave this alone.

If you want to change a price, rewrite a sentence, or add an essay, you open the matching content file, change the text between the quotation marks, and save. That's it.

---

## The pages

Your site has six pages. Each one has a matching content file:

| Page | What it's for | Edit this file |
|------|---------------|----------------|
| Home | The front door | `content/home.js` |
| Approach | Your philosophy + 3 principles | `content/approach.js` |
| The Roundtable | Your specialist network | `content/roundtable.js` |
| Coaching | What you offer + pricing | `content/coaching.js` |
| Resources | Essays + supplement guide | `content/resources.js` |
| Begin | Booking / contact | `content/begin.js` |

There's also one shared file — `content/site.js` — which controls things that appear on *every* page: your brand name, the menu, the footer, and your booking link.

---

## How to edit (the golden rules)

When you open a content file, you'll see lines like this:

```
price: "$110",
```

To change it, edit **only the part inside the quotation marks**:

```
price: "$125",
```

**Three rules that keep things from breaking:**

1. ✅ **Only change text inside the "quotation marks."**
2. ✅ **Keep the commas, brackets, and quotation marks** exactly where they are.
3. ✅ **Save the file, then refresh the website** to see your change.

That's genuinely all there is to it.

---

## Common things you'll want to do

### Change a price
Open `content/coaching.js`, find the tier (Single Session / The Twelve / Coaching Circle), and edit the `price` line.

### Connect your booking calendar
When you have a Calendly, Acuity, or Cal.com link:
1. Open `content/site.js`
2. Find the line `bookingUrl: "",`
3. Paste your link inside the quotes: `bookingUrl: "https://calendly.com/yourname",`
4. Save. Your real calendar now shows on the Begin page automatically.

### Add a practitioner to The Roundtable
Open `content/roundtable.js`, find the `practitioners` list, and copy one of the existing entries — change the initials, name, and meta.

### Fill in your supplement picks
Open `content/resources.js`. The categories (Gut Health, Sleep & Calm, etc.) are already set up. When you're ready to add specific products under each, let Philip know — that's a small addition we'll build when you have your list.

### Add an essay
Open `content/resources.js`, find the `essays` list, copy an existing entry, and update the title, description, and link.

---

## If something looks broken

You probably removed a quotation mark, comma, or bracket by accident. The safest fix:
- **Undo** your last change (Ctrl+Z / Cmd+Z), save, and refresh.
- If you're stuck, text Philip — it's almost always a one-character fix.

---

## Going live

This site is a set of plain files that can be hosted for free on **Netlify** or **Vercel**. Drag the whole folder in, and you're live. Philip can walk you through pointing your domain (once you buy it) at the site.

---

## What's *not* in here yet (future additions)

These were intentionally left for later so we could get you live first:
- **Real booking calendar** — add your link to `site.js` whenever you're ready (placeholder is there now).
- **Your supplement product picks** — categories are built; products get added when you have your list.
- **Real practitioner names/photos** — placeholders are there; swap them as you formalize partnerships.
- **Payments / client logins** — a future version ("V2") can add Stripe and member accounts without rebuilding what's here.

---

*Built with care. Questions → Philip.*
