# Track A Mode C — Multi-Model Multi-Environment Operator Guide

version: 0.1.0
status: draft
date: 2026-03-16

## 1. Purpose

This guide covers the full multi-model operating pattern for Track A Mode C.
You run four browser windows simultaneously, each with a different model
platform. Each model is assigned based on its documented functional strength
per the §7.2 route policy. This is the highest-fidelity Track A mode and
the direct precursor to Track B API orchestration.

## 2. What you learn from this mode

- Why different models are routed to different task classes
- What model-origin tagging means in practice
- How contradiction between models differs from contradiction between sources
- What the minimum transfer packet must contain for cross-platform handoffs
- How the operator functions as the orchestration layer

## 3. Prerequisites

- Active subscriptions: Perplexity Pro, ChatGPT Plus, Claude Pro,
  Grok Premium / SuperGrok
- Each platform has a project or space prepared with correct agent instructions
- Run ID and route policy ID assigned
- Run manifest initialized with `execution_mode: multi-model-multi-environment`
- `model_assignments` populated for all four agents
- `overlap_plan` defined

## 4. Window and model assignments

| Window | Platform       | Agent role                         | Rationale                                             |
| ------ | -------------- | ---------------------------------- | ----------------------------------------------------- |
| 1      | Perplexity Pro | Agent 1: acquisition               | Citation-first web acquisition, strong source tiering |
| 1b     | Grok Premium   | Agent 1 overlap: live signals      | Native X/social integration, emerging signal capture  |
| 2      | ChatGPT Plus   | Agent 2: normalization             | Strong structured compilation, schema adherence       |
| 3      | Claude Pro     | Agent 3: synthesis + contradiction | Long-document reasoning, contradiction detection      |
| 4      | ChatGPT Plus   | Agent 4: compiler                  | Structured output packaging, handoff generation       |

Window 1b (Grok) is a parallel acquisition thread, not a sequential step. Run
it concurrently with Window 1. Reconcile both outputs before passing to Agent 2.

## 5. Project and space setup per platform

### Perplexity Pro (Window 1)

Create a Space. Upload acquisition role prompt. Set research mode to Pro Search.
No persistent project files needed — Perplexity's strength is live retrieval.

### Grok Premium (Window 1b)

Grok does not support project-level files at first paid tier. Deliver the
acquisition role prompt directly in the chat instruction. Focus prompting on
X-native signals, Reddit ecosystem signals, and emerging vendor moves.

### ChatGPT Plus (Window 2 and Window 4)

Create two separate Projects — one for Agent 2, one for Agent 4. Upload the
relevant prompt pack to each project. Use project-level instructions to scope
each agent role.

### Claude Pro (Window 3)

Create a Project. Upload `prompts/synthesis/` and `prompts/contradiction/`
files. Set project instructions to synthesis and contradiction agent role.

## 6. Run sequence

### Step 1 — Input gate

Confirm in run manifest:

- all platforms set up with correct agent instructions
- route_policy_id populated
- model_assignments populated
- overlap_plan defined
- governing docs loaded

### Step 2 — Agent 1: Acquisition (Windows 1 and 1b parallel)

Window 1 — Perplexity:

```text
Begin acquisition task. Region: [REGION]. Data scope: [SCOPE].
Tier 1 and Tier 2 sources only. Produce evidence bundle with source citations.
```

Window 1b — Grok (concurrent):

```text
You are an acquisition agent. Capture live signals, social signals, and
ecosystem signals for [SCOPE] in [REGION]. Focus on X posts, Reddit threads,
vendor announcements, and emerging market moves from the past 90 days.
Produce a structured signal list with source references.
```

Reconcile both outputs. Flag any conflict between Perplexity evidence and
Grok signals as a contradiction entry with `contradiction_type: timing_conflict`
or `source_conflict` as applicable. Save reconciled output as `output_1.txt`.

### Step 3 — Transfer to Window 2

Transfer packet to ChatGPT Plus Agent 2 must include all §12.1.3 fields:

```text
run_id: [run-id]
execution_mode: multi-model-multi-environment
source_environment: perplexity-pro + grok-premium
target_environment: chatgpt-plus
objective: [objective]
artifact_target: normalized artifacts
completed_so_far: acquisition evidence bundle (output_1.txt attached)
evidence_refs: [list]
prior_output_refs: output_1.txt
unresolved_items: [any flagged items]
next_environment_ask: normalize output_1.txt into canonical artifact schemas
expected_output_class: normalization artifacts
```

Upload `output_1.txt` to ChatGPT Plus Window 2 project.

### Step 4 — Evidence gate

Confirm before activating Agent 2:

- output_1.txt saved to `runs/<run-id>/handoff/`
- evidence refs populated
- contradiction entries for any Perplexity/Grok conflicts logged

### Step 5 — Agent 2: Normalization (Window 2 — ChatGPT Plus)

```text
[Paste transfer packet]. Input file: output_1.txt. Normalize into canonical
artifact schemas per your agent role prompt.
```

Save output as `output_2.txt`. Note model origin: `chatgpt-plus` in manifest.

### Step 6 — Transfer to Window 3

Build transfer packet for Claude Pro. Upload `output_2.txt` to Claude Pro
Window 3 project.

### Step 7 — Agent 3: Synthesis and contradiction (Window 3 — Claude Pro)

```text
[Paste transfer packet]. Input file: output_2.txt. Synthesize findings.
Identify contradictions. Produce synthesis output and contradiction log.
```

Save output as `output_3.txt`. Note model origin: `claude-pro`.

### Step 8 — Schema and reasoning gates

Confirm:

- all contradiction entries have canonical disposition values per §12.1.5
- overlap_result populated where overlap_plan.overlap_required is true
- evidence refs map to claims
- inferences are marked

### Step 9 — Transfer to Window 4

Build transfer packet for ChatGPT Plus Agent 4. Upload `output_3.txt`.

### Step 10 — Agent 4: Compiler (Window 4 — ChatGPT Plus)

```text
[Paste transfer packet]. Input file: output_3.txt. Compile final recommendation
brief. Include evidence lineage and unresolved item visibility.
```

Save output as `output_4.txt`. Note model origin: `chatgpt-plus`.

### Step 11 — Output and publish gates

Confirm all four output files in handoff directory, all gates passed, manifest
updated, contradiction log reviewed, handoff note written.

## 7. Model-origin tagging

Every artifact produced in Mode C must carry `primary_model_origin` and
`model_stage_contributions`. Minimum entries:

```json
"model_stage_contributions": [
  {"stage": "acquisition", "model_origin": "perplexity-pro"},
  {"stage": "acquisition", "model_origin": "grok-premium", "notes": "live signal overlap"},
  {"stage": "normalization", "model_origin": "chatgpt-plus"},
  {"stage": "synthesis", "model_origin": "claude-pro"},
  {"stage": "contradiction-review", "model_origin": "claude-pro"},
  {"stage": "compilation", "model_origin": "chatgpt-plus"}
]
```

## 8. What Track B automates from this guide

Each transfer packet in steps 3, 6, and 9 becomes a typed task envelope passed
between API calls. The operator clipboard becomes the message bus. Windows 1–4
become concurrent or sequential API calls routed by the §7.2 route policy. The
contradiction reconciliation in step 2 becomes an automated overlap task with
`overlap_required: true` in the run manifest.
