# Point Numera — Tools KB

> For use by Claude Code, Codex, and any coding/design session building tools and calculators.
> Last updated: \[DATE]
> Read together with kb-build.md for all visual and technical rules.

\---

## 1\. Tool Philosophy

Point Numera tools are not finance software. They are:

* fast decision-support tools for founders and operators
* practical, opinionated calculators
* lead generation assets that build trust first
* simple enough for non-financial business owners

Every tool helps a founder answer one clear question:

* "Am I pricing this correctly?"
* "How much cash runway do I have?"
* "Will this investment pay back?"
* "Is this margin healthy?"

Priority order: clarity → speed → usefulness → simplicity → visual consistency.

\---

## 2\. Core Rules

### No email wall before value

Never require email before showing a result. User gets a real output first. Email capture comes after, as an optional next step.

### Opinionated output

Don't just show a number. Tell the user what it means. Use ranges, benchmarks, and plain-language interpretation.

### Usability first

* Usable without reading instructions
* Main action obvious within 5 seconds
* Limit inputs to what is truly needed
* Mobile-friendly by default — inputs stack cleanly, buttons thumb-friendly

### Lightweight build

* Static HTML, CSS, vanilla JS
* No heavy frameworks unless clearly necessary
* No external libraries unless there is a strong reason
* Client-side calculations only — do not store user financial data

\---

## 3\. AI Build Instructions

**Always use:**

* PN colour variables (from kb-build.md)
* PT Sans for UI text, Ancizar Sans for tool title/headings
* Dark editorial visual style
* Plain-language labels and results
* Mobile-first responsive behaviour
* Interpretation below every result — never just a number

**Prefer:**

* Static HTML/CSS/vanilla JS
* Minimal or zero external libraries
* One primary CTA per tool
* Strong result card as the visual centrepiece

**Never use:**

* Generic SaaS blue/purple palettes
* White app backgrounds
* Email gating before value
* Finance jargon without explanation
* Bloated frameworks for simple calculators

A Point Numera tool should feel like a sharp founder-friendly decision aid — not enterprise finance software, not a lead-gen gimmick, not a spreadsheet in a webpage.

\---

## 4\. Input Design Rules

Labels must use plain language. Test: would a non-financial founder understand this immediately?

|Bad|Better|
|-|-|
|EBITDA uplift|Extra monthly profit|
|Working capital delta|Change in cash tied up in the business|
|Gross margin %|Profit left after direct costs (%)|
|Debtor days|Average days customers take to pay|

Always show units next to or inside the input field:

* Currency: `€` prefix
* Percentage: `%` suffix
* Time: specify clearly — days / months / hours

Prefer guided input types where they reduce errors:

* Dropdown for fixed options (business type, frequency)
* Slider for ranges where a ballpark is sufficient
* Radio buttons for binary choices
* Number input for precise values

\---

## 5\. Number Formatting Rules

**Currency:** `€12,500` — always use thousand separators. Include period where relevant: `€1,250 / month`. No decimals unless precision genuinely matters.

**Percentages:** 0–1 decimal place. `61.3%` not `61.347829%`.

**Large numbers:** Always use thousand separators. `€1,250,000` not `€1250000`.

**Avoid false precision.** A runway calculator showing `8.23 months` implies more certainty than the inputs warrant. Round to one decimal: `8.2 months`.

\---

## 6\. Tool Categories

### Quick-check calculators

Single question, immediate result, strong CTA after.
Examples: ROI quick check, gross margin check, runway calculator, pricing sanity check.

### Scenario tools

Compare multiple outcomes. Visual comparison. Decision-oriented.
Examples: hire vs outsource, price increase scenario, cash impact of delayed invoices.

### Assessment tools

Diagnose a business issue. Score or status output with guidance.
Examples: cash flow health check, pricing confidence check, finance readiness check.

\---

## 7\. Default Tool Structure

Every tool follows this section order:

1. **Hero** — eyebrow label, tool title, one-sentence description, optional "No signup required" trust line
2. **Input section** — clear labels, helper text where needed, grouped inputs, calculate button
3. **Result card** — headline result, supporting metrics, short interpretation, practical recommendation
4. **Insight section** — what this means, what would improve the result, what to watch out for
5. **CTA** — book a call, email for deeper analysis, or link to related tool. Must feel like a next step, not a gate.

Input rules: max 6–8 visible fields on first screen. Group related inputs. Use sensible defaults only if they help, not mislead.

\---

## 8\. Result Pattern

**Primary output** — the main answer

> Gross margin: 61%

**Interpretation** — what it likely means

> Strong for a service-led business, but watch labour costs as you scale.

**Sensitivity / lever** — what would change the outcome most

> A 5% price increase improves annual gross profit by €12,000.

**Next action** — one practical recommendation

> Rework pricing before increasing paid acquisition spend.

Results must answer a business question, not just return a number.

\---

## 9\. Layout Pattern

**Desktop:** Two-column where useful — inputs left, results right. Supporting insight below full width.

**Mobile:** Single column — inputs → calculate button → result card → explanation → CTA.

Avoid: tab systems, spreadsheet-style grids, dense dashboards, essential logic hidden behind accordions.

\---

## 10\. Design Rules

Follow kb-build.md for all colours, fonts, spacing, radius, and input styling.

Tool-specific rules:

* Tool title feels editorial, not app-like
* Numeric outputs: large, visually strong, `#F4ECBD` (yellow) to highlight key numbers
* Result card: `#111a18` background, `#1e2e2b` border, `--radius-md`
* No glossy SaaS aesthetics, no white backgrounds

\---

## 11\. Technical Build Rules

**Default stack:** HTML + CSS + vanilla JS. Only deviate for a specific strong reason (e.g. a chart library).

**File structure:**

```
/tool-name
  index.html
  styles.css
  script.js
  README.md
```

**Performance:** load under 1 second, under 200kb total, responsive on low-end mobile.

**Accessibility:** keyboard navigable, sufficient contrast, visible labels, don't rely on colour alone for meaning.

\---

## 12\. Completion Checklist

**Strategy**

* \[ ] Solves one clear problem
* \[ ] Target user is obvious
* \[ ] Result leads naturally to a next step

**UX**

* \[ ] Non-financial founder can use it in under 2 minutes
* \[ ] Inputs are understandable without explanation
* \[ ] Result is clear without a human walking them through it

**Design**

* \[ ] Looks and feels like Point Numera
* \[ ] Correct fonts, colours, spacing, number formatting
* \[ ] Works on mobile

**Technical**

* \[ ] Lightweight and client-side
* \[ ] Validation and formatting handled
* \[ ] Keyboard navigable

**Commercial**

* \[ ] Creates trust before asking for anything
* \[ ] Sensible CTA after value is delivered
* \[ ] Can be extended into a wider funnel later

\---

## 13\. Tool Brief Template

```
Tool name:
Purpose: (what decision or question does this help with?)
Target user:
Core inputs: (minimum required fields)
Core outputs: (main results)
Interpretation logic: (how will the result be explained?)
CTA: (what is the next logical action after results?)
Build type: standalone page / iframe embed / Framer code component
MVP scope: (what is included now?)
Future premium version: (what could be added later?)
```

\---

## 14\. Disclaimer Pattern

Where relevant, include this short disclaimer in small text below the result:

> This is a practical first check, not a substitute for a full financial model. Results depend on the assumptions you enter. Sector context, taxes, overhead structure, and timing can materially change the outcome.



## 15\. Lead Magnet Scorecard Check



Before declaring any tool, guide, template, or calculator complete, score it against the Lead Magnet Scorecard in `kb-lead-magnet-scorecard.md`.



Run through all 13 criteria. Assign a score of 0–5 to each. Report the total.



**Do not mark a tool as complete if:**

\- Total score is below 41/65

\- Criteria 1, 2, 5, or 11 score below 4 (these are non-negotiable for PN tools)

\- Criterion 11 (no email wall before value) is not fully met



**Output format when reporting the scorecard:**

Show a compact table with criterion name, score, and a one-line note on what is missing or strong. Follow with the total, the interpretation band, and a single paragraph on what the highest-priority improvements are before launch.



Example output:



| # | Criterion | Score | Note |

|---|---|---|---|

| 1 | Solves specific, urgent problem | 5 | Targets runway anxiety — highly specific |

| 2 | Quick win or immediate value | 4 | Result in under 1 min, good |

| 3 | High perceived value | 4 | Would pay for this |

| 4 | Easy to consume | 5 | One screen, clear hierarchy |

| 5 | Funnel positioning | 3 | CTA links to booking but bridge could be stronger |

| 6 | Landing page psychological triggers | 2 | Not yet built — Framer page placeholder only |

| 7 | Compelling hook / unique mechanism | 4 | "Cash runway in 60 seconds" angle is strong |

| 8 | Professional design | 5 | Consistent with PN brand |

| 9 | Strong headline + single CTA | 4 | Headline good, CTA clear |

| 10 | Plan to track results and KPIs | 2 | No tracking plan defined yet |

| 11 | No email wall before value | 5 | Value first, CTA after |

| 12 | Result interprets, not just calculates | 5 | Interpretation block in place |

| 13 | Fits PN brand and tone | 5 | Dark theme, correct tokens, PT Sans |

| | **Total** | **53/65** | |



**Band: 🟡 Good — refine before launch**

Priority improvements: build the Framer landing page with triggers (#6), define a tracking plan (#10), strengthen the funnel bridge copy (#5).

