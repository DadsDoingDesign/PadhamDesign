# v2 Critiques — Padham Design Explorations

Three lenses on the v2 pass after we moved the work to front-stage and trimmed hero copy across all 10 designs.

---

## 1) UX critique

**What got better**
- Above-the-fold is now answering the only question that matters in the first 5 seconds: *do I like this aesthetic?* Project images do that work, not paragraphs.
- One primary CTA per page (View Work / Selected Works / Browse) instead of competing "Start a Project" + "View Work" pairs. Less decision fatigue.
- The funnel order now matches buyer behavior: seduce with imagery → build trust through volume → reveal who Carol is → social proof → contact. Services no longer block the aesthetic test.
- Smaller hero type lets the image breathe and reduces the "marketing site" smell that high-end clients distrust.

**What's still weak**
- Every project tile links to "#" — there's no actual case-study page. The Vercel preview is sells the vibe but breaks the moment a user clicks. Highest-priority follow-up.
- No filter or sort on the portfolio sections (Residential vs Hospitality vs Tasting Room). A new high-net-worth client looking for a residence has to wade through hotels.
- Mobile compositions on the work-first heroes (01, 03) stack three project images vertically — that's 3 full screens of scrolling before any context. Consider a 1-up + "see 2 more" pattern on small screens.
- The press strip still appears in two places on some pages (hero + dedicated section). Pick one location per page.
- Contact pages still ask for 3 fields plus a long-form message. For inquiry intent, name + email + a single textarea would convert better.
- No clear way to email vs. start a longer brief. Some clients want a quick "what's your fee range" question, not the formal form.

**Information architecture suggestions**
- Make `/projects/{slug}` a real page (the project markdown already exists in `content/projects/`). Hero image + 6-image gallery + a short paragraph + "next project".
- Add a tiny sticky footer CTA on every page after first scroll: "Inquire →". Right now contact only lives at the bottom.
- Demote "Publications" out of the top nav — it's social proof, not a destination. Fold the press strip into the home page footer area or About.

---

## 2) Design critique

**Hits**
- 04 Kinetic now reads like Joseph Dirand / Vincent Van Duysen — the single full-bleed image with brand at the bottom corner is exactly the modern luxury vocabulary.
- 01 Echo's new caption-led three-panel composition (Carmel / WALT / L'Auberge) is more confident than the old "stock-photo interiors" panels. Names of projects in the panel captions = instant credibility.
- 03 Brutalist now opens like a newspaper masthead + three figure plates. Editorial confidence.
- 05 Refined's "Selected Works" gallery-first hero is the closest to Studio McGee's pattern.
- 10 Bento's image-tile-driven hero is a much better read than the text headline version.

**Misses / risks**
- 06 Spacious lost a little of its identity in the trim — it now leads with one image, which is fine but could be confused with 04. Consider giving 06 a *centered, smaller-scale* image with much more whitespace around it, so the differentiator (restraint) is felt, not just stated.
- 07 Heritage feels lonely without the "Interiors of quiet consequence" headline; the framed image is doing all the work. May want a small italic feature caption above it (e.g. *"I."* + a Roman numeral feels classic-magazine).
- 08 Boutique's image is now dominant — good — but the "No. 01 · Selected Works" + giant "The Portfolio" headline now reads as if the *page* is the portfolio. That's actually correct; just make sure the next section makes the rest of the work visible.
- 09 Coastal's organic blob shape is risky for a hospitality interior designer — it can feel "wellness brand" rather than "high-end interior". The single blob image works but the gold-standard would be a square or rectangular crop with the organic shape used as a *secondary* graphic element only.
- Typography sizes vary a lot between explorations — anything from clamp(28–40px) brand line. For a real consideration set, I'd narrow to 32–48px for a hero brand line and let the image carry the scale.

**Consistency**
- Some tiles still say "Start a Project" in nav (01) while CTA buttons say "View the Work". The nav CTA should match the page CTA — the goal of every hero is to drive *down* into the work, not *over* to contact. Suggest replacing nav CTA on all 10 with "Inquire" so the hero CTA can own the work-discovery action.

---

## 3) Client / stakeholder critique (imagining Carol)

**What Carol probably loves**
- The work is finally front and center. Visitors land and immediately see Carmel Beach, WALT, L'Auberge — the actual projects she's known for, not abstract "interior 1" placeholders.
- The press logos still appear but no longer dominate. Her credibility is implied, not shouted.
- The brand reads as a *practice*, not an agency. Less "marketing speak", more "studio".

**What Carol might push back on**
- *"Where am I in this?"* — her bio is now buried below 2-3 sections of project work on most variants. For a 25-year practitioner who is the brand, a small "About Carol" element above the fold (a portrait thumbnail + 1 line) might be warranted. 04 Kinetic in particular feels brand-less without her name visible.
- *"I want hospitality clients AND residential clients."* — Right now hero images skew hospitality (Carmel, WALT, L'Auberge). A residential project should appear in the hero rotation. The content has projects tagged as such, but the images currently shown are hotel/tasting-room weighted. Worth sourcing one strong residential hero image.
- *"What about my services?"* — A 25-year practitioner sells through reputation, but new residential clients still want to know "do you do material selection?" Consider a one-line services summary on the project case-study pages, not just the dedicated services section.
- *"My phone number was prominent. Now it's at the bottom."* — Hospitality clients often want to call. Putting "510 · 406 · 3621" in the nav (small, right-aligned) on classic/heritage variants (07, 08) would feel period-appropriate and useful.

**What might worry a stakeholder reviewing this**
- *"Are we losing SEO copy?"* — Yes, slightly. The hero paragraphs were SEO-friendly. To recover that, push longer descriptive copy into the About and individual project pages where it belongs editorially.
- *"Where's the conversion?"* — Conversion-rate-obsessed stakeholders will worry there's no "Get a Quote" CTA above the fold. Counter-argument: this is a high-consideration purchase. The studios Carol competes with (Roman & Williams, Pierce & Ward) all do exactly this — they trust the work to do the selling.
- *"How will this perform on mobile?"* — Several heroes (01, 03, 05) are 3-panel desktop layouts. They stack on mobile but become 3 vertical full-bleed images — that may be too heavy. Recommend a 1-up + carousel on mobile for those.

---

## Top three recommendations going into v3

1. **Real project pages.** Pick a winner from the 10, then build `/projects/[slug]` for at least 3 projects. Without case studies the home page is a beautiful trailer for a film that doesn't exist.
2. **One residential hero image.** Source or commission a residential project photo and use it in the hero rotation across all variants — currently the work shown is 80% hospitality and that's a brand-positioning miss for residential leads.
3. **Mobile hero re-design.** The desktop 3-panel and 3-tile bento heroes do not gracefully degrade. A bespoke mobile hero (single image + brand + 1 CTA) should be designed once the direction is chosen.
