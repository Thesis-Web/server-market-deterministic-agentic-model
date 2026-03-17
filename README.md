# server-market-deterministic-agentic-model

Version: 0.1.0  
Status: Track A — live, POC complete  
Date: 2026-03-17  
Prepared by: Exnulla (Division of Lake Area LLC) · James Huson

---

## What This Is

A deterministic, AI-first, multi-model market research operating system for
server product strategy. Built to produce evidence-backed, audit-ready
research deliverables using commercial AI platforms — with the human as
operator and escalation authority, not primary analyst.

This is **Track A** — the manual, human-interface proving system. Track B
(agentic API orchestration) is the planned evolution, documented in
`docs/blueprints/` and `docs/project-constitution/`.

**POC status:** First live run completed 2026-03-16 targeting the Dell
Technologies PowerEdge enterprise and near-edge server market. Full
deliverable produced and committed to `runs/run-20260316-dell-tracka-01/`.

---

## How It Works

Four commercial AI platforms are routed by task class:

| Platform       | Role     | Task class                                         |
| -------------- | -------- | -------------------------------------------------- |
| Perplexity Pro | Agent 1  | Acquisition — citation-first web research          |
| Grok Premium   | Agent 1b | Live signal — Reddit, X, community intelligence    |
| Claude Pro     | Agent 3  | Synthesis — contradiction review, brief generation |
| ChatGPT Plus   | Agent 4  | Compilation — final document packaging             |

The human operator directs the run, transfers files between environments,
and reviews outputs at each validation gate. Evidence is tiered T1–T5.
Every claim in every artifact is traceable to its source.

---

## If You Are a Client

Start with: `docs/client-guides/START-HERE.md`

That file walks you through setup and your first research run in plain
language — no software development experience required.

---

## Repository Structure

```text
docs/
  blueprints/          — System architecture blueprints (Track A + Track B)
  engineering-specs/   — Implementation spec (canonical truth source)
  operator-guides/     — Operating procedures per execution mode
  client-guides/       — Client setup and workflow documentation
  project-constitution/ — Governing documents and project outline

schemas/               — 17 JSON schema families for all artifact types
prompts/               — Prompt pack (acquisition, synthesis, compilation, etc.)
templates/             — Run control templates and output examples
scripts/               — Validation, gate-checking, manifest generation
runs/                  — Live run data (evidence, artifacts, manifests)
src/                   — TypeScript scaffold (Track B foundation)
```

---

## Operating Stance

- AI-first — models do the analysis, humans direct and review
- Deterministic — versioned prompts, schemas, manifests, gates
- Restartable — every run has a manifest; restart from last valid gate
- Evidence-first — every claim carries a source tier (T1–T5)
- Auditable — contradiction logs, model-origin tags, evidence lineage
- Schema-first — all outputs conform to versioned JSON schemas

---

## Execution Modes

- **Mode A** — single model, single chat (teaching mode)
- **Mode B** — single model, multiple chats (decomposed tasks)
- **Mode C** — multi-model, multi-environment (full production mode)

See `docs/operator-guides/` for complete operating procedures per mode.

---

## Quality Gate

All commits must pass:

```bash
npm run ci:gate
```

This runs: prettier format check → markdownlint → JSON/YAML validation →
repo structure validation → schema validation → artifact filename validation →
gate logic validation → TypeScript typecheck.

---

## Non-Negotiables

- Personal IP of the project owner
- No silent architecture drift between blueprint, spec, and implementation
- No publishable artifact without manifest and review state
- No recommendation without evidence tagging
- Restart from last valid gate — never from memory alone

---

## Contact

James Huson · Exnulla (Division of Lake Area LLC)  
174 Holiday Lane, Livingston TX 77351  
Phone: 936-239-1100  
Email: <LakeAreaLLC@gmail.com>  
Website: <https://www.Exnulla.com>
