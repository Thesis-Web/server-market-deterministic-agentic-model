# Track A AI Use Cases and Model Routing Guide

Version: v0.1.0  
Status: draft derived operator guide  
Date: 2026-03-14  
Author: OpenAI ChatGPT with human operator James

## 1. Purpose

This guide operationalizes the current Track A model-routing posture for the manual deterministic system.

It is a derived operator document. It does not override the project constitution, Blueprint 1, or Engineering Spec 1. Its role is to translate the canonical architecture into practical operator use cases, routing choices, overlap patterns, and transfer rules that can be executed consistently across supported commercial model environments.

This guide is specifically for the current approved Track A four-model set:

- Perplexity Pro
- Grok Premium
- Claude Pro
- ChatGPT Plus

## 2. Governing position

This guide is subordinate to:

- `docs/project-constitution/server-market-project-constitution-v0.1.0.md`
- `docs/project-constitution/server-market-project-instructions-v0.1.0.md`
- `docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md`
- `docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md`

If this guide conflicts with those files, the canonical files control.

## 3. Track A operating stance

Track A is the proving system for the server-market-deterministic-agentic-model project.

The operating stance remains fixed:

- the models do the primary analytical work
- the human is the operator, reviewer, and escalation gate
- outputs must preserve evidence lineage
- route decisions must be explicit
- overlap is allowed when it increases validation strength
- restart must happen from the last valid gate, not chat memory alone

This guide therefore focuses on:

- which model to use first for a given task
- when to invoke a second model intentionally
- how to preserve model-origin evidence and synthesis lineage
- how to hand off work between environments without drift

## 4. Approved Track A model set

### 4.1 Core platforms

The approved Track A core model set is:

- **Perplexity Pro**
- **Grok Premium**
- **Claude Pro**
- **ChatGPT Plus**

### 4.2 Role summary

| Platform       | Primary role                                                                | Secondary role                                   | Avoid as primary                        |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------- |
| Perplexity Pro | Acquisition, citation-first research, fast source mapping                   | Contradiction checking, market scan support      | Root compiler                           |
| Grok Premium   | Social, Reddit, emerging-signal extraction, live ecosystem pulse            | Rapid supplemental acquisition                   | Canonical compiler, heavy normalization |
| Claude Pro     | Deep synthesis, long-document reasoning, cross-document comparison          | Structured analysis drafts, contradiction review | Primary live acquisition                |
| ChatGPT Plus   | Compiler, normalizer, project-based packaging, structured artifact assembly | Synthesis support, schema shaping                | Primary social/live-signal monitor      |

## 5. Primary use cases by model

### 5.1 Perplexity Pro — acquisition and citation-first research

Use Perplexity Pro first when the task requires:

- live web acquisition
- citation-dense evidence gathering
- fast source triangulation
- first-pass market scans
- current vendor and competitor retrieval
- evidence-led contradiction checks
- scanning public documentation across many domains

Perplexity Pro is the preferred first hit for:

- vendor landscape evidence collection
- region/regulation source collection
- current market shift scans
- competitor update pulls
- first-pass source maps for TAM/SAM/SOM inputs
- acquisition passes that need inline citations from the start

Typical outputs from Perplexity should be treated as:

- acquisition bundles
- source maps
- cited notes
- preliminary contradiction candidates
- structured research extracts

Perplexity should usually not be the final owner of:

- canonical recommendation briefs
- final normalized schema artifacts
- final cross-model compilation packages

### 5.2 Grok Premium — social, Reddit, and emerging-signal extraction

Use Grok Premium first when the task requires:

- social-adjacent signal capture
- Reddit/community signal extraction
- emerging narrative detection
- rapid ecosystem pulse checks
- real-time or near-real-time discourse sampling
- surfacing noisy but potentially important weak signals

Grok is the preferred first hit for:

- operator/forum sentiment scans
- Reddit pain-point reconnaissance
- chatter about deployment friction
- ecosystem reaction to new launches
- discourse around vendor missteps, shortages, pricing shifts, firmware issues, service issues, or feature frustration
- social-adjacent early warning patterns that may not yet appear in formal analyst or vendor material

Typical outputs from Grok should be treated as:

- signal notes
- anecdotal evidence candidates
- pain-point leads
- early contradiction indicators
- emerging-topic watch items

Grok outputs should not be treated as sufficient alone for publication-grade conclusions. They normally require follow-up through Perplexity, Claude, or ChatGPT depending on the next stage.

### 5.3 Claude Pro — deep synthesis and long-document reasoning

Use Claude Pro first when the task requires:

- long-document digestion
- cross-document synthesis
- dense reasoning over multiple artifacts
- structured comparison across segments, vendors, or regions
- contradiction analysis over already acquired evidence
- extracting stable implications from large evidence sets

Claude is the preferred first hit for:

- vendor landscape synthesis after acquisition
- cross-region comparison
- multi-document pain-point synthesis
- long-form reasoning over uploaded research packets
- scenario framing
- recommendation logic development before compilation
- contradiction review when evidence from multiple sources is already assembled

Typical outputs from Claude should be treated as:

- synthesis notes
- comparative analyses
- structured reasoning drafts
- contradiction analyses
- implication chains
- recommendation logic drafts

Claude should usually not be the primary source for:

- live acquisition
- social pulse monitoring
- final project packaging if a compiled artifact set must be normalized across repository conventions

### 5.4 ChatGPT Plus — compiler, normalizer, project-based packaging

Use ChatGPT Plus first when the task requires:

- normalization into repository-shaped outputs
- schema-aligned artifact assembly
- markdown package construction
- transformation of cross-model material into canonical file forms
- project-based packaging and continuity
- final compilation of briefs, manifests, handoffs, and structured deliverables

ChatGPT is the preferred first hit for:

- final artifact compilation
- evidence-led packaging into repository docs
- normalizing findings into stable section structures
- assembling recommendation briefs
- producing handoffs
- producing run-safe output packs
- translating evidence and synthesis into controlled markdown or JSON artifacts

Typical outputs from ChatGPT should be treated as:

- normalized artifacts
- compiler-stage work products
- repository-ready drafts
- handoffs
- operator-ready instruction packs
- packaging passes

ChatGPT should not be treated as the sole source of current social signal or citation-first web breadth when Perplexity or Grok are the stronger first-pass route.

## 6. Use-case routing matrix

### 6.1 By task class

| Task class                              | Primary route  | Secondary/overlap route        | Expected artifact direction                 |
| --------------------------------------- | -------------- | ------------------------------ | ------------------------------------------- |
| Citation-first market acquisition       | Perplexity Pro | ChatGPT Plus or Claude Pro     | evidence ledger inputs, source map          |
| Social / Reddit / emerging-signal scan  | Grok Premium   | Perplexity Pro                 | shift-signal note, pain-point leads         |
| Long-document comparative synthesis     | Claude Pro     | ChatGPT Plus                   | analysis draft, implication set             |
| Contradiction review across evidence    | Claude Pro     | Perplexity Pro                 | contradiction log, reviewed claims          |
| Final compiler / normalization pass     | ChatGPT Plus   | Claude Pro                     | canonical markdown, schema-aligned artifact |
| Executive-ready packaging               | ChatGPT Plus   | Claude Pro                     | recommendation brief, exec summary          |
| Current-event plus source triangulation | Perplexity Pro | Grok Premium                   | evidence bundle + signal note               |
| Weak-signal escalation                  | Grok Premium   | Perplexity Pro then Claude Pro | signal note -> validated synthesis          |

### 6.2 By artifact class

| Artifact class               | Preferred route                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| Evidence ledger              | Perplexity Pro acquisition, normalized by ChatGPT Plus                                    |
| Shift signal note            | Grok Premium acquisition, cross-check by Perplexity Pro, compile by ChatGPT Plus          |
| Vendor landscape             | Perplexity Pro acquisition, Claude Pro synthesis, ChatGPT Plus compilation                |
| Region profile               | Perplexity Pro acquisition, Claude Pro comparison, ChatGPT Plus normalization             |
| Customer pain-point artifact | Grok Premium + Perplexity Pro acquisition, Claude Pro synthesis, ChatGPT Plus compilation |
| Feature opportunity artifact | Claude Pro synthesis, ChatGPT Plus normalization                                          |
| Recommendation brief         | Claude Pro reasoning draft, ChatGPT Plus compiler pass                                    |
| Contradiction log            | Claude Pro review, Perplexity Pro evidence cross-check, ChatGPT Plus final register       |
| Handoff note                 | ChatGPT Plus primary                                                                      |

## 7. Overlap policy

### 7.1 Why overlap is allowed

Overlap is intentional when it improves confidence, catches drift, or preserves signals that a single platform may underweight.

Overlap is allowed for:

- contradiction detection
- drift detection
- validation strengthening
- preservation of weak but important evidence
- current-event cross-checking
- preventing premature collapse into a single-model interpretation

### 7.2 Approved overlap patterns

#### Pattern A — Perplexity -> Claude -> ChatGPT

Use when:

- the task begins with citation-heavy acquisition
- evidence volume is large
- conclusions must be reasoned across many documents
- final outputs must be normalized into canonical repo artifacts

Flow:

1. Perplexity acquires and cites
2. Claude synthesizes and compares
3. ChatGPT compiles and normalizes

This is the default high-confidence pattern for many core research deliverables.

#### Pattern B — Grok -> Perplexity -> Claude -> ChatGPT

Use when:

- the initial signal emerges from social, Reddit, or live discourse
- the signal may be noisy or weak
- the team needs to validate whether the signal is real, directional, or irrelevant

Flow:

1. Grok surfaces the signal
2. Perplexity triangulates with broader sources
3. Claude determines implications and contradiction posture
4. ChatGPT compiles the result into a structured note or artifact

This is the preferred pattern for signal-to-artifact escalation.

#### Pattern C — Claude -> ChatGPT

Use when:

- acquisition is already complete
- the main task is comparative reasoning
- final packaging is needed without new retrieval

Flow:

1. Claude performs the deep synthesis
2. ChatGPT normalizes and packages

This is the preferred pattern for converting mature evidence bundles into canonical outputs.

#### Pattern D — Perplexity <-> Claude contradiction loop

Use when:

- source claims materially conflict
- acquisition is citation-rich but synthesis remains unstable
- one model’s interpretation may be compressing uncertainty too early

Flow:

1. Perplexity restates the source-grounded evidence split
2. Claude evaluates interpretation boundaries
3. unresolved differences are logged, not hidden
4. ChatGPT later compiles the contradiction record if needed

### 7.3 Overlap rule for the compiler

The compiler stage may cite earlier model-acquired evidence when the source lineage is preserved.

That means a ChatGPT compilation pass may include source-grounded material originating from:

- Perplexity acquisition
- Grok signal capture
- Claude synthesis summaries tied to prior evidence

However, the compiler must not silently invent or upgrade unsupported claims. It must preserve:

- source lineage
- model-origin contribution
- inference boundaries
- unresolved contradictions

## 8. Evidence tagging and model-origin handling

### 8.1 Required model-origin concept

Artifacts should preserve which model materially contributed to which stage.

Minimum stage families:

- acquisition
- signal acquisition
- normalization
- synthesis
- contradiction review
- compilation

### 8.2 Practical model-origin pattern

A common artifact lineage may look like:

- **Perplexity** — cited source acquisition
- **Grok** — anecdotal/social signal acquisition
- **Claude** — synthesis and implication reasoning
- **ChatGPT** — normalization and final compilation

### 8.3 Model-origin notation guidance

Where practical, operator records should preserve entries such as:

- `primary_model_origin`
- `supporting_model_origins`
- `model_stage_contributions`

Example conceptual shape:

- `primary_model_origin: chatgpt-plus`
- `supporting_model_origins: ["perplexity-pro", "claude-pro"]`
- `model_stage_contributions:`
  - `perplexity-pro: acquisition`
  - `claude-pro: synthesis`
  - `chatgpt-plus: compilation`

### 8.4 Claim handling rule

Model-origin tagging does not replace evidence tagging. It supplements it.

The system must still distinguish:

- observed fact
- cross-source validated fact
- derived implication
- scenario hypothesis

## 9. Use-case patterns

### 9.1 Vendor landscape build

Use this pattern when building a vendor landscape artifact.

1. Perplexity gathers cited vendor, pricing, launch, and ecosystem material
2. Grok optionally checks for emerging operator/community reaction
3. Claude synthesizes vendor positions, strengths, and tensions
4. ChatGPT compiles the canonical vendor-landscape artifact

### 9.2 Regional requirement analysis

Use this pattern when comparing regional constraints.

1. Perplexity gathers region-specific regulatory, infrastructure, and market sources
2. Claude compares across regions and identifies design implications
3. ChatGPT compiles the region-profile artifact

### 9.3 Customer pain-point extraction

Use this pattern when building a pain-point artifact.

1. Grok pulls community/operator pain signals
2. Perplexity cross-checks with published sources, support notes, vendor documentation, or technical press
3. Claude synthesizes stable pain themes versus anecdotal noise
4. ChatGPT compiles the pain-point artifact

### 9.4 Recommendation brief construction

Use this pattern when generating a recommendation brief.

1. Perplexity and/or Grok provide current evidence and signals as needed
2. Claude constructs the reasoning path from evidence to recommendation
3. ChatGPT compiles the final recommendation brief with explicit evidence lineage and unresolved-item visibility

### 9.5 Shift-signal monitoring

Use this pattern when tracking early change.

1. Grok scans discourse for emerging signals
2. Perplexity tests whether the signal is reflected in broader public evidence
3. Claude decides whether the signal should affect segment or recommendation logic
4. ChatGPT compiles a shift-signal note or updates downstream artifacts

## 10. Environment transfer contract

### 10.1 Required transfer payload

When moving work from one model environment to another, the operator should transfer at minimum:

- objective
- artifact target
- current gate state
- route purpose
- evidence bundle reference
- relevant excerpts or summaries
- unresolved questions
- explicit ask for the next model

### 10.2 Example transfer patterns

#### Perplexity -> Claude

Transfer:

- acquisition summary
- source list or source-grounded notes
- open contradictions
- synthesis ask

#### Grok -> Perplexity

Transfer:

- raw signal summary
- source or thread examples if available
- question to validate
- target evidence categories to confirm or reject

#### Claude -> ChatGPT

Transfer:

- synthesis summary
- recommendation logic
- contradiction notes
- target artifact format
- required section structure

### 10.3 Transfer anti-drift rule

Do not transfer vague requests such as:

- “clean this up”
- “make this better”
- “turn this into a final”

Instead, transfer a bounded ask such as:

- “compile this into the vendor-landscape template”
- “normalize these findings into a recommendation brief”
- “preserve contradictions and mark inferences explicitly”

## 11. When not to use each model

### 11.1 Avoid Perplexity as primary when

- the task is mainly long-form comparative reasoning over already assembled documents
- the task is mainly final packaging
- stateful project compilation is load-bearing

### 11.2 Avoid Grok as primary when

- the task requires audit-grade canonical compilation
- the task is a long static synthesis over stable corpora
- persistent project memory is essential
- the workflow depends on strong schema normalization

### 11.3 Avoid Claude as primary when

- the task is primarily live acquisition
- the task is current social pulse scanning
- the operator needs the strongest citation-first retrieval surface immediately

### 11.4 Avoid ChatGPT as primary when

- the task depends on social-first or Reddit-first weak-signal monitoring
- the task requires fastest citation-dense first-pass acquisition across current web sources
- the task is mainly an initial signal-discovery problem rather than a normalization or compiler problem

## 12. Default route recipes

### 12.1 Fast acquisition recipe

Use when speed matters more than final polish.

- Perplexity first
- ChatGPT second only if packaging is needed

### 12.2 High-confidence research recipe

Use when quality and validation matter most.

- Perplexity
- Claude
- ChatGPT

### 12.3 Signal-escalation recipe

Use when the first evidence appears in discourse.

- Grok
- Perplexity
- Claude
- ChatGPT

### 12.4 Compiler-first repair recipe

Use when evidence and reasoning already exist but outputs need cleanup.

- ChatGPT
- Claude only if reasoning clarification is still needed

## 13. Operator execution reminders

The deterministic terminal workflow for the project operator remains:

- connect to the working environment
- return to repository root
- attach to the active tmux session if one is already in use
- run write, validation, and git commands from repository root
- end each turn back at repository root

Representative operator flow:

- SSH into the working machine
- change into `~/repos/server-market-deterministic-agentic-model`
- attach or create the `server-market` tmux session
- execute the next deterministic task
- validate
- commit and push only after gates pass
- return to repository root before handoff

Recommended command logging pattern:

- create `logs/session/` when needed
- tee important command output into named log files
- preserve gate and failure output when behavior is unexpected

Repo-root discipline remains mandatory:

- begin at repo root
- run write and gate commands from repo root
- end at repo root

## 14. Change-control note

This guide reflects the current working Track A routing posture. It may evolve, but no model-role change should be treated as canonical unless the controlling blueprint and engineering spec remain aligned or are updated accordingly.

## 15. Appendix summary

Current default interpretation:

- **Perplexity Pro** = acquisition engine
- **Grok Premium** = signal engine
- **Claude Pro** = synthesis engine
- **ChatGPT Plus** = compiler and normalizer

Default high-confidence flow:

- acquire
- validate
- synthesize
- compile

Mapped to the current platform set:

- Perplexity -> Grok/Perplexity overlap where needed -> Claude -> ChatGPT
