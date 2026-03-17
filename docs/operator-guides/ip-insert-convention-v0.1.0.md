# IP-INSERT Placeholder Convention

## Server Market Deterministic Agentic Model — Template Standard

version: 0.1.0
status: canonical
date: 2026-03-16
scope: all primary output artifacts

---

## PURPOSE

This document defines the deterministic placeholder syntax for internal IP
data points that must be inserted by the end-user organization at deployment
time. Every primary artifact template must include IP-INSERT blocks where
end-user proprietary data would materially improve evidence quality.

The goal: every run produces a structurally complete, citation-traceable
output even without internal data, while leaving explicit, findable hooks
for end-user data injection.

---

## SYNTAX

````text
[IP-INSERT: <field_label>
 POC-BEST-GUESS: <best available public or model-derived estimate>
 CONFIDENCE: <high | medium | low>
 SOURCE-TIER: <T1 | T2 | T3 | T4 | T5>
 OVERRIDE: Replace with <description of internal data type> before publish]
```text

### Rules

1. Every IP-INSERT block must include all five fields — no partial blocks.
2. POC-BEST-GUESS must be populated even if confidence is low.
   A T5 guess with a clear label is better than an empty field.
3. OVERRIDE must describe exactly what internal data type would replace it.
4. IP-INSERT blocks do NOT block gate passage in draft or in-review status.
5. At publish gate, operator must either confirm the POC-BEST-GUESS is
   acceptable for publication OR replace it with verified internal data.
   A blank OVERRIDE is a publish-gate blocker.

---

## STANDARD IP-INSERT FIELDS (appearing in every run by default)

These fields appear in EVERY primary output artifact. Defined here so they
are deterministic across all runs:

### For Recommendation Brief

```text
[IP-INSERT: dell_internal_market_share_by_segment
 POC-BEST-GUESS: Dell #1-2 globally, 7.2% total server revenue (IDC Q4 2024)
 CONFIDENCE: medium
 SOURCE-TIER: T2
 OVERRIDE: Replace with Dell ISG internal revenue share by segment data]

[IP-INSERT: dell_win_loss_by_competitor
 POC-BEST-GUESS: Dell competitive wins concentrated in enterprise
 manageability story and ProSupport services. Losses concentrated in ODM
 price competition on commodity AI GPU configurations. [T5 inference]
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell ISG win/loss analysis by competitor and segment]

[IP-INSERT: dell_customer_refresh_cycle_data
 POC-BEST-GUESS: 44% of organizations refreshing ≤3 years (IDC/Dell/Intel
 Apr 2025 white paper); enterprise general workload customers likely skew
 to 4-5 year cycles absent AI driver. [T2/T5]
 CONFIDENCE: medium
 SOURCE-TIER: T2
 OVERRIDE: Replace with Dell's internal customer refresh cycle data by
 vertical and segment]

[IP-INSERT: dell_near_edge_design_wins
 POC-BEST-GUESS: Rakuten Mobile nationwide (documented Grok T3 Feb 2026);
 Ericsson Cloud RAN partnership (T1 May 2024). Broader enterprise/industrial
 design win list not public. [T3/T1]
 CONFIDENCE: medium
 SOURCE-TIER: T3
 OVERRIDE: Replace with Dell's internal XR-series design win list by vertical]

[IP-INSERT: dell_customer_pain_point_survey
 POC-BEST-GUESS: Top pain points inferred from market research: remote
 management at scale, liquid cooling readiness, Windows Server 2025
 compatibility, AI server lead times, ProSupport coverage at edge sites.
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell's customer NPS / pain point survey data]
```text

### For Region Profile

```text
[IP-INSERT: dell_regional_revenue_split
 POC-BEST-GUESS: North America ~40-45% of Dell server revenue; EMEA ~25-30%;
 APAC ~20-25%; Rest ~5-10%. [T5 inference from IDC regional totals]
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell ISG internal revenue by region]

[IP-INSERT: dell_apac_enterprise_share_ex_china
 POC-BEST-GUESS: Dell competitive in Japan, India, Australia/NZ, Singapore.
 Constrained in China government/critical infra. [T5 inference]
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell APAC enterprise market share data ex-China]
```text

### For Vendor Landscape

```text
[IP-INSERT: dell_vs_hpe_win_rate
 POC-BEST-GUESS: Dell competitive win rate vs HPE likely favorable in
 managed-services accounts where ProSupport vs TechCare is the decision
 driver. HPE GreenLake wins in as-a-service preference accounts. [T5]
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell ISG competitive win/loss vs HPE by deal type]

[IP-INSERT: dell_vs_supermicro_ai_competitive_posture
 POC-BEST-GUESS: Supermicro wins on speed-to-market and ODM pricing for
 AI GPU configurations. Dell wins on enterprise compliance, lifecycle
 management, and service coverage. [T5 inference]
 CONFIDENCE: low
 SOURCE-TIER: T5
 OVERRIDE: Replace with Dell ISG win/loss vs Supermicro in AI segment]
```text

---

## END-USER CUSTOM IP INSERTS

At the bottom of every primary output artifact, include this block exactly:

```text
---
## END-USER IP NOTES
<!--
This section is reserved for end-user internal data injection.
Add internal data points below. Tag each with:
- field_label: (descriptive name)
- data_value: (your internal data)
- source: (internal system or study)
- date: (as of date)
- replaces_ip_insert: (which IP-INSERT block this supersedes, if any)
-->

[END-USER-IP-NOTE-1]: _____________________________________________
[END-USER-IP-NOTE-2]: _____________________________________________
[END-USER-IP-NOTE-3]: _____________________________________________
```text

This block is DETERMINISTIC — it appears in every run, every artifact,
every time. It must not be removed by any model at any gate.

---

## REPO PLACEMENT

This convention file: `docs/operator-guides/ip-insert-convention-v0.1.0.md`

Template files requiring IP-INSERT block updates:

- templates/output/recommendation-brief-template.md
- templates/run-control/evidence-ledger-template-v0.1.0.md
- templates/run-manifest/run-manifest-template-v0.1.0.md

Schema files: no changes required — IP-INSERT is a markdown convention,
not a JSON schema field. The schema additionalProperties: true allows
custom fields in JSON artifacts.
````
