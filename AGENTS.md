# Agent Instructions — Point Numera

This repository belongs to Point Numera, a fractional CFO consultancy based in Amsterdam, NL.

## Before starting any task

**Always read the relevant KB files for your task type before writing any code or copy.** The table below tells you which files to read.

| Task type | Read these files |
|---|---|
| Visual design, colours, spacing, components, typography | `kb-build.md` |
| Tool structure, results layout, calculation patterns, lead capture | `kb-tools.md` |
| Brand voice, copy, ICP messaging, content strategy | `kb-content.md` |
| Building or editing a new tool end-to-end | `kb-build.md` + `kb-tools.md` |
| Adding or editing email capture / MailerLite forms | `kb-tools.md` + `kb-build.md` |
| Updating hub/index page cards or navigation | `kb-build.md` |
| Writing or editing any user-facing copy | `kb-content.md` |

Do not write any code or make any design decisions without reading the relevant files first.

---

## Quick reference

- Primary: `#0E4F47` · Accent: `#F4ECBD` · Cards: `#A4D6A4` · Dark: `#0a0f0e`
- Headings: Ancizar Sans · Body: PT Sans
- Sections alternate backgrounds — never two consecutive sections the same colour
- Tools: static HTML / CSS / vanilla JS only — no frameworks
- No email wall before value: show result first, capture after
- Result must interpret, not just calculate: tell the user what the number means
- Do not use `&mdash;` — use comma, colon, or plain hyphen instead

---

## MailerLite integration pattern

Do not use the MailerLite embed widget or its JS file. Extract only the form action URL from the MailerLite code and wire it into the site's own form HTML using the `data-capture` attribute. The shared `capture.js` script handles submission, success, and error states. See `tools/dish-profitability-check/index.html` as the reference implementation.

---

## File structure

```
index.html                        — Tools hub / landing page
tools/
  shared/
    base.css                      — CSS variables and reset
    ui.css                        — Shared component styles
    app.js                        — Nav, year, hamburger
    capture.js                    — Email capture form handler
  dish-profitability-check/       — Live tool (restaurant ICP)
  roast-batch-checker/            — Live tool (restaurant ICP)
  cash-flow-check/                — Coming soon
  pricing-calculator/             — Coming soon
  roi-quick-check/                — Coming soon
```
