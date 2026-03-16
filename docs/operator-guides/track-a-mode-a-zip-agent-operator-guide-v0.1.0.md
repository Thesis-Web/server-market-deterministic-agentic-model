# Track A Mode A — Single-Model Zip-Agent Operator Guide

version: 0.1.0
status: draft
date: 2026-03-16

## 1. Purpose

This guide covers the zip-agent operating pattern for Track A Mode A. You run
all four agents inside a single model project environment. Every handoff,
output file, and transfer step is visible to you. This is what an API
orchestrator hides in Track B — here you do it by hand so you understand what
is happening at each stage.

## 2. What you learn from this mode

- How agents are isolated by prompt pack
- What the output of each agent looks like before normalization
- Why the gate sequence exists and what it catches
- What the transfer contract looks like as a plain file
- Where contradictions can enter the system and how they are logged

## 3. Prerequisites

- One active project in your chosen model environment (ChatGPT Projects
  recommended for Mode A — it supports project-level files and zip ingestion)
- Repo cloned locally so prompt packs can be zipped
- Run ID assigned per §9.2: `run-YYYYMMDD-<scope>-NN` (e.g. `run-20260316-dell-tracka-01`)
- Route policy ID per §9.3: `route-policy-YYYYMMDD-<scope>-vX.X.X`
- Run manifest initialized with `execution_mode: single-model-single-chat`

## 4. Zip-agent preparation

Before starting the run, create four zip files from the repo prompt packs.

```text
agent1-acquisition.zip  ← zip of prompts/acquisition/
agent2-normalization.zip ← zip of prompts/normalization/
agent3-synthesis.zip    ← zip of prompts/synthesis/ + prompts/contradiction/
agent4-compiler.zip     ← zip of prompts/compiler/
```

Upload all four zips to your model project before the first prompt. Do not
merge prompt packs. Each zip contains exactly one agent role.

## 5. Project instructions

Paste this into your project instructions before starting:

```text
You are a deterministic research execution engine for a server market
analysis system. You operate one agent role at a time. When the operator
activates an agent, you read the relevant zip file in the project folder,
follow its role prompt exactly, and produce structured output. You do not
improvise. You do not combine roles unless instructed. You output only what
the role prompt specifies.
```

## 6. Run sequence

### Step 1 — Input gate

Before any agent prompt, confirm these are satisfied:

- run manifest initialized with run_id, route_policy_id, artifact_targets
- all four agent zips uploaded to project
- objective and region defined
- governing docs loaded (see §10.4)

Record input gate as passed in the manifest before proceeding.

### Step 2 — Agent 1: Acquisition

Prompt:

```text
Use agent 1. Read agent1-acquisition.zip in the project folder and complete
the acquisition task. Region: [REGION]. Data scope: [SCOPE].
Sources: Tier 1 and Tier 2 preferred. Output to output_1.txt format.
```

When complete: save the full output as `output_1.txt`. Upload to project.
Record acquisition model origin in run manifest.

### Step 3 — Agent 2: Normalization

Prompt:

```text
Use agent 2. Read agent2-normalization.zip in the project folder.
Input file: output_1.txt. Normalize the acquisition output into canonical
artifact schemas. Output to output_2.txt format.
```

When complete: save as `output_2.txt`. Upload to project.

### Step 4 — Evidence gate

Before proceeding to synthesis, confirm:

- output_1.txt and output_2.txt are saved to `runs/<run-id>/handoff/`
- evidence refs are populated in the manifest for each artifact
- source tiers are recorded
- evidence gaps are logged

Record evidence gate as passed.

### Step 5 — Agent 3: Synthesis and contradiction review

Prompt:

```text
Use agent 3. Read agent3-synthesis.zip in the project folder.
Input file: output_2.txt. Synthesize findings, identify contradictions, and
produce a contradiction log and synthesis output. Output to output_3.txt format.
```

When complete: save as `output_3.txt`. Upload to project.

### Step 6 — Schema and reasoning gates

Confirm:

- artifact fields match schema definitions
- claims map to evidence refs
- contradictions are logged with valid disposition values per §12.1.5
- overlap_result populated if overlap_plan.overlap_required is true

Record schema and reasoning gates as passed.

### Step 7 — Agent 4: Compiler

Prompt:

```text
Use agent 4. Read agent4-compiler.zip in the project folder.
Input file: output_3.txt. Compile the final recommendation brief per the
compiler role prompt. Output to output_4.txt format.
```

When complete: save as `output_4.txt`. Upload to project.

### Step 8 — Output and publish gates

Confirm:

- output_4.txt is saved to `runs/<run-id>/handoff/`
- all four output_N.txt files are present in handoff directory
- artifact has evidence_refs populated
- review_status is set
- unresolved_items are visible
- operator review completed
- manifest updated
- handoff note written

Record output and publish gates as passed.

## 7. Output file registration

Register each output_N.txt in the run manifest `input_bundle_refs`:

```json
{
  "ref_id": "output-1",
  "ref_type": "agent-output-txt",
  "path_or_location": "runs/<run-id>/handoff/output_1.txt",
  "notes": "Agent 1 acquisition output. Produced by ChatGPT Plus Mode A."
}
```

## 8. What Track B automates from this guide

Every numbered step above becomes a task object in the Track B orchestrator.
Steps 2, 3, 5, and 7 become API calls. Steps 1, 4, 6, and 8 become validation
gate calls against `scripts/validate-gates.mjs`. The human operator disappears
from the loop except at escalation triggers.
