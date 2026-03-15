# Point Numera — Build KB
> For use by Claude Code, Codex, and any coding/design session.
> Last updated: [DATE]
> See kb-content.md for brand voice, ICP, and content strategy.

---

## 1. Reference Links

| Resource | URL |
|---|---|
| Live site | https://www.pointnumera.com |
| Framer template (base theme) | https://advocacy-template.framer.website |
| Blog | https://blog.pointnumera.com |
| Booking | https://cal.com/pointnumera |
| Contact | info@pointnumera.com |

---

## 2. Brand Colors

| Role | Name | Hex |
|---|---|---|
| Primary | Primary Green | `#0E4F47` |
| Accent / CTA | Contrast Yellow | `#F4ECBD` |
| Secondary / Cards | Secondary Green | `#A4D6A4` |
| Background | Near-black | `#0a0f0e` |
| Surface | Dark surface | `#111a18` |
| Border | Dark border | `#1e2e2b` |
| Text primary | Off-white | `#f0ede4` |
| Text muted | Muted teal-grey | `#8a9e9a` |

### CSS Variables (use these in all builds)
```css
:root {
  --green-primary: #0E4F47;
  --green-secondary: #A4D6A4;
  --yellow: #F4ECBD;
  --dark: #0a0f0e;
  --dark-surface: #111a18;
  --dark-border: #1e2e2b;
  --text-primary: #f0ede4;
  --text-muted: #8a9e9a;
}
```

---

## 3. Typography

| Role | Font | Weights |
|---|---|---|
| Headings | Ancizar Sans | Variable 100–900, use 600–700 for headings |
| Body | PT Sans | 400 (regular), 700 (bold), 400 italic |

- Ancizar Sans is a variable font (.ttf), hosted locally in the Framer project
- PT Sans loaded from Google Fonts: `https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap`
- Heading sizes: H1 ~52–64px, H2 ~36–42px, H3 ~24px
- Body: 16px, line-height 1.7
- Eyebrow labels: 11–12px, uppercase, letter-spacing 0.1em

---

## 4. Site Section Colour Pattern

The live site uses an **alternating section background** rhythm — this is the core visual structure. All new pages must follow it:

| Section type | Background | Text |
|---|---|---|
| Hero | `#0a0f0e` (near-black) | `#f0ede4` (off-white) |
| Feature / card sections | `#A4D6A4` (secondary green) | `#0a0f0e` (dark) |
| Pricing / CTA / contact | `#0E4F47` (primary green) | `#f0ede4` (off-white) |
| About / editorial content | White or off-white | `#0a0f0e` (dark) |
| Footer | `#0E4F47` or `#0a0f0e` | `#f0ede4` |

Never use the same background for two consecutive sections.

---

## 5. Navigation

- **Sticky nav**, dark green `#0E4F47` background when scrolled, transparent over dark hero
- Logo: wordmark "Point Numera" with a geometric bracket/page-fold icon to the left
- Nav links: Services, Process, Pricing, About, FAQ
- CTA button: "Get in touch" — outlined pill style
- Mobile: hamburger menu (three lines icon, top right)
- No dropdown menus

---

## 6. UI Patterns & Components

### Eyebrow label
Small section identifier above H2s. Pattern:
```
[logo icon] Section Name
```
- Icon: the PN bracket icon (SVG), ~16px
- Text: 13–14px, same colour as heading but lighter weight
- Used at the start of every major section

### Service / feature cards
- Full-width card on `#A4D6A4` background
- Number label top-left (01, 02, 03...) in small text
- H3 heading, 2–3 line description
- Outlined CTA button ("FIND OUT MORE") — dark border, dark text, no fill
- No image visible on standard viewport (image may be decorative/background)

### Buttons
- Primary CTA: filled `#F4ECBD` (yellow) background, dark text — used sparingly for hero CTAs
- Secondary / outlined: transparent background, border in current text colour
- All caps label, moderate letter-spacing
- Pill or slightly rounded rectangle shape

### Inner page hero (template pattern)
- Full-width dark green (`#0E4F47`) background section
- Small eyebrow label centered (e.g. "FREE RESOURCE" or "TOOLS")
- Large H1 centered, subtitle text below
- Optional decorative abstract shape in background (darker green tone)

### Content sections (inner pages)
- Near-black background (`#0a0f0e`)
- Left-aligned body text, PT Sans
- Bullet lists use `•` with generous line spacing
- Section headers ("Client support includes:", "Benefits:") in semi-bold

---

## 7. Site Architecture

| Page | Platform | URL | Notes |
|---|---|---|---|
| Main site (all sections) | Framer | pointnumera.com | Single-page with anchors |
| Blog | Framer | pointnumera.com/blog | TBD — to be added in Framer |
| Partners | Framer | pointnumera.com/partners | TBD — to be added in Framer |
| Tools / Lead magnets | Framer (embed) or separate | pointnumera.com/tools | See Section 8 |

**Previous approach (deprecated):** Jekyll + GitHub Pages + Cloudflare proxy for blog/partners/tools.
**Current approach:** Keep everything in Framer where possible for visual consistency.

---

## 8. Tools Page — Embed Strategy

Interactive tools (calculators, dashboards) can be embedded in Framer using the **Embed component**:

### Option A — Framer Embed (preferred for simple tools)
- Build tool as a self-contained HTML/CSS/JS file
- Host on GitHub Pages as a single `.html` file (no Jekyll needed)
- Embed via `<iframe>` in Framer's Embed component
- Style the iframe container to match the section background
- Set `background: transparent` on the iframe body so it blends with the PN dark theme

### Option B — Full Framer page (for very simple tools)
- Build the tool logic directly in Framer using Code Components (React)
- Suitable for simple input/output calculators with minimal state

### Iframe embed code pattern:
```html
<iframe
  src="https://YOUR_GITHUB_USERNAME.github.io/pn-tools/menu-margin-calculator.html"
  width="100%"
  height="600px"
  frameborder="0"
  style="border-radius: 8px; background: transparent;"
></iframe>
```

### Tool styling rules (for embedded tools)
- Background: `#0a0f0e` or `#111a18` — must match PN dark theme
- Text: `#f0ede4`
- Input fields: `#1e2e2b` border, `#111a18` background
- Accent/highlight: `#F4ECBD` (yellow) for results, CTAs
- Font: PT Sans (load from Google Fonts in the tool's `<head>`)
- No white backgrounds — the tool should feel like it's part of the PN site

---

## 9. Current Lead Magnets / Tools

| Tool | Target ICP | Format | Status |
|---|---|---|---|
| Menu Margin Calculator | Restaurant operators | Web (HTML/JS) | Planned |
| Forecast Dashboard | Hardware/manufacturing SMEs | Excel (.xlsx) | Built (V2) |

---

## 10. Logo & Brand Mark

- Wordmark: "Point Numera" — geometric bracket/page-fold icon to the left of text
- Icon is an SVG — white on dark backgrounds, dark on light backgrounds
- Do not recreate the icon from scratch — reference the live site asset
- Framer asset URL: `https://framerusercontent.com/images/AoPfCAxRNXza13jDgsO8Uvs.svg`
