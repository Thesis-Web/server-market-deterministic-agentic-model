# Track A Mode B — Single-Model Multi-Window Operator Guide

version: 0.1.0
status: draft
date: 2026-03-16

## 1. Purpose

This guide covers the multi-window operating pattern for Track A Mode B. You
run four separate project windows inside a single model platform. Each window
is one agent. Outputs move between windows as files. This mode teaches state
isolation between agents — each window has no implicit knowledge of the other
windows' work. Transfer is explicit and file-based only.

## 2. What you learn from this mode

- How agent isolation holds across separate contexts
- Why implicit memory between agents is a reliability risk
- What a clean transfer packet looks like
- How to detect drift introduced by context switching
- How project-level instructions scope an agent's behavior

## 3. Prerequisites

- Four active projects in your chosen model environment, one per agent role
- Each project has its own project instructions and uploaded prompt pack
- Run ID and route policy ID assigned
- Run manifest initialized with `execution_mode: single-model-multi-chat`
- `chat_branch_map` populated with four branch entries (one per window)
- `merge_strategy` defined (recommended: `sequential-file-handoff`)

## 4. Project setup — one per window

| Window | Project name                    | Instructions                   | Prompt pack                                            |
| ------ | ------------------------------- | ------------------------------ | ------------------------------------------------------ |
| 1      | `[run-id]-agent1-acquisition`   | Acquisition role only          | Upload `prompts/acquisition/`                          |
| 2      | `[run-id]-agent2-normalization` | Normalization role only        | Upload `prompts/normalization/`                        |
| 3      | `[run-id]-agent3-synthesis`     | Synthesis + contradiction role | Upload `prompts/synthesis/` + `prompts/contradiction/` |
| 4      | `[run-id]-agent4-compiler`      | Compiler role only             | Upload `prompts/compiler/`                             |

Each project instructions block must state explicitly which agent role is
active and that the model must not perform any other agent role.

## 5. Project instructions template per window

```text
You are agent [N] in a deterministic multi-agent research system. Your role is
[ROLE]. You execute only this role. You do not perform normalization, synthesis,
contradiction review, or compilation unless you are explicitly assigned that
role. You produce structured output per the prompt pack in this project. You do
not summarize, shorten, or reformat unless the prompt pack instructs it.
```

## 6. Run sequence

### Step 1 — Input gate (Window 1 context)

Confirm in run manifest before opening Window 1:

- all four projects created with correct instructions and prompt packs
- run_id, route_policy_id, artifact_targets populated
- governing docs loaded

### Step 2 — Window 1: Acquisition

Activate in Window 1:

```text
Begin acquisition task. Region: [REGION]. Data scope: [SCOPE].
Sources: Tier 1 and Tier 2 preferred. Produce evidence bundle output.
```

Save full output as `output_1.txt`. This file is the only artifact that
transfers to Window 2. Do not transfer chat history, summaries, or
paraphrased versions — only the raw structured output.

### Step 3 — Window 2: Normalization

Upload `output_1.txt` to Window 2 project files. Activate:

```text
Input file: output_1.txt. Normalize into canonical artifact schemas per your
prompt pack. Produce normalized artifact output.
```

Save full output as `output_2.txt`.

### Step 4 — Evidence gate

Before opening Window 3, confirm:

- output_1.txt and output_2.txt saved to `runs/<run-id>/handoff/`
- evidence refs logged in manifest
- source tiers recorded
- gaps logged

### Step 5 — Window 3: Synthesis and contradiction

Upload `output_2.txt` to Window 3 project files. Activate:

```text
Input file: output_2.txt. Synthesize findings. Identify and log contradictions.
Produce synthesis output and contradiction log.
```

Save full output as `output_3.txt`.

### Step 6 — Schema and reasoning gates

Confirm:

- artifact fields match schemas
- contradiction entries have valid disposition values
- evidence refs are populated

### Step 7 — Window 4: Compiler

Upload `output_3.txt` to Window 4 project files. Activate:

```text
Input file: output_3.txt. Compile final recommendation brief per your prompt
pack.
```

Save full output as `output_4.txt`.

### Step 8 — Output and publish gates

Confirm all four output files present in `runs/<run-id>/handoff/`, gates
recorded as passed, handoff note written.

## 7. Merge strategy for chat_branch_map

Record in run manifest:

```json
"merge_strategy": "sequential-file-handoff",
"chat_branch_map": [
  {"branch_id": "agent1", "objective": "acquisition", "output_targets": ["output_1.txt"]},
  {"branch_id": "agent2", "objective": "normalization", "output_targets": ["output_2.txt"]},
  {"branch_id": "agent3", "objective": "synthesis-contradiction", "output_targets": ["output_3.txt"]},
  {"branch_id": "agent4", "objective": "compilation", "output_targets": ["output_4.txt"]}
]
```

## 8. Key difference from Mode A

In Mode A all agents share one project context — the model can theoretically
see all uploaded files across all agents. In Mode B each agent has its own
isolated project. The model in Window 2 cannot see Window 1's project files.
This isolation is what Track B replicates programmatically with separate API
call contexts per agent task.
