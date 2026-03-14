# Track-A Multi-Model Environment Execution Guide

Version: v0.1.0
Status: draft canonical operator guide
Date: 2026-03-14

## 1. Purpose

This document defines the exact operator procedure for running the Track-A manual deterministic system across the approved commercial AI environments.

This guide operationalizes the already-approved Track-A architecture and routing model. It does not introduce new architecture. It translates existing canonical rules into environment execution procedure.

This guide defines:

- how each approved environment is used
- how work is divided across environments
- how transfer between environments is performed
- how continuity is preserved across chats and sessions
- how restart works without relying on vague chat memory
- how contradiction handling is routed
- how the operator maintains deterministic control while remaining the interface rather than the primary analytical engine

## 2. Scope

This guide applies only to Track-A manual deterministic execution.

It governs work executed through:

- ChatGPT Projects
- Claude Projects
- Perplexity Spaces or equivalent research threads
- Grok workspaces, collections, or structured prompt-pack operating pattern

It applies to all currently defined Track-A execution modes:

- Mode A — single model / single chat
- Mode B — single model / multi chat
- Mode C — multi model / multi environment

This guide does not define Track-B API orchestration behavior.

## 3. Governing Alignment

This guide must remain aligned with:

- docs/project-constitution/server-market-project-constitution-v0.1.0.md
- docs/project-constitution/server-market-project-instructions-v0.1.0.md
- docs/project-constitution/project-outline-v0.1.0.md
- docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md
- docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md
- docs/operator-guides/track-a-ai-use-cases-and-model-routing-guide-v0.1.0.md

If this guide conflicts with blueprint or engineering spec behavior, the canonical governance and implementation documents win and this guide must be updated.

## 4. Core Operating Stance

Track-A execution remains governed by these fixed principles:

- AI performs the primary analytical work
- the human acts as operator, reviewer, escalation authority, and file interface
- repository files outrank chat memory when conflicts appear
- every cross-environment transfer must be explicit
- every meaningful run must preserve restartability
- overlap between models is allowed only when it improves evidence quality, contradiction review, synthesis quality, or compiler quality
- no environment is treated as fully interchangeable with another

The operator must maintain route clarity and artifact discipline rather than prompt improvisation.

## 5. Approved Environment Roles

### 5.1 Environment Role Summary

| Environment              | Primary function                                                | Secondary function                                       | Avoid as primary                           |
| ------------------------ | --------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------ |
| Perplexity Pro           | citation-first acquisition and source mapping                   | fast contradiction support and current-source validation | final compiler                             |
| Grok Premium / SuperGrok | social, Reddit, ecosystem, and emerging-signal extraction       | weak-signal scouting and public-signal escalation        | canonical normalization or final packaging |
| Claude Pro               | deep synthesis, long-document reasoning, contradiction analysis | recommendation logic drafting and structured comparison  | primary live acquisition                   |
| ChatGPT Plus             | compiler, normalizer, repository-ready packaging                | synthesis support, schema shaping, handoff drafting      | primary social-signal monitor              |

### 5.2 Standard High-Confidence Flow

Default high-confidence route:

- Perplexity
- Claude
- ChatGPT

### 5.3 Signal Escalation Flow

Default signal-escalation route:

- Grok
- Perplexity
- Claude
- ChatGPT

### 5.4 Routing Discipline

Per environment, one environment owns one primary task class at a time.

Do not assign the same primary responsibility to multiple environments in the same run slice unless contradiction review or explicit overlap is required.

## 6. Environment Structure Requirements

Each environment must be treated as a bounded execution surface rather than an open-ended conversational scratchpad.

### 6.1 Minimum Environment Control Fields

For every meaningful execution slice, the operator must know:

- run_id
- execution_mode
- environment_name
- primary_task_class
- current_objective
- artifact_target
- route_position
- input_refs
- prior_output_refs
- unresolved_items
- next_expected_environment

### 6.2 Environment Naming Rule

Recommended naming pattern for projects, spaces, or threads:

- project-or-space name
- market focus
- run or artifact focus
- version where needed

Example:

    server-market / region-scan / run-sm-2026-03-14-001

### 6.3 Environment Containment Rule

Each environment should contain only the material required for its current task slice.

Do not overload one environment with all system duties when decomposition improves determinism, restartability, or output quality.

## 7. ChatGPT Projects Operating Pattern

### 7.1 Primary Use

Use ChatGPT Projects for:

- compiler-stage work
- normalized markdown drafting
- repository-shaped artifact generation
- handoff generation
- schema-aligned packaging
- final consolidation of upstream outputs

### 7.2 Project Structure Expectation

A ChatGPT Project should contain, when applicable:

- current artifact targets
- active canonical references
- imported upstream synthesis
- imported cited acquisition outputs
- normalized compiler prompts
- packaging constraints
- unresolved-item list

### 7.3 Recommended Thread Families

Recommended thread families:

- compiler-main
- normalization-pass
- artifact-draft
- handoff-generation
- contradiction-disposition-finalization

### 7.4 Inputs Expected from Upstream Environments

ChatGPT should usually receive:

- cited acquisition packet
- synthesis summary
- contradiction findings
- unresolved items
- target file path
- target artifact class
- required structure
- version and status expectation

### 7.5 Output Class

Expected ChatGPT outputs include:

- repository-ready markdown
- structured handoffs
- normalized artifact sections
- packaging notes
- template-aligned drafts

## 8. Claude Projects Operating Pattern

### 8.1 Primary Use

Use Claude Projects for:

- long-document synthesis
- comparative analysis
- contradiction review
- deriving stable implications from large evidence sets
- recommendation logic drafting before final compiler normalization

### 8.2 Project Structure Expectation

A Claude Project should contain, when applicable:

- upstream evidence bundle
- grouped source notes
- comparison targets
- contradiction candidates
- analysis objective
- expected output shape

### 8.3 Recommended Thread Families

Recommended Claude thread families:

- synthesis-main
- contradiction-review
- recommendation-logic-draft
- comparison-pass
- gap-analysis

### 8.4 Inputs Expected from Upstream Environments

Claude should usually receive:

- acquisition packet
- evidence grouping
- ambiguity flags
- contradiction candidates
- synthesis objective
- required output class

### 8.5 Output Class

Expected Claude outputs include:

- structured synthesis notes
- comparative matrices
- contradiction findings
- implication chains
- recommendation logic drafts

## 9. Perplexity Spaces Operating Pattern

### 9.1 Primary Use

Use Perplexity first for:

- citation-first acquisition
- source discovery
- source triangulation
- vendor and competitor fact gathering
- market or region scans
- regulation and policy retrieval
- fast validation of claims from other environments

### 9.2 Space or Thread Structure Expectation

A Perplexity Space or research thread should contain:

- tightly bounded acquisition objective
- subject boundary
- source expectations
- evidence extraction goal
- citation preservation requirement

### 9.3 Recommended Thread Families

Recommended Perplexity thread families:

- acquisition-main
- competitor-scan
- region-scan
- regulation-scan
- source-gap-closure
- contradiction-check-fast

### 9.4 Inputs Expected from Upstream Environments

Perplexity may receive:

- a target question
- region or vendor scope
- evidence gaps from Claude or ChatGPT
- claims requiring citation confirmation
- signal items from Grok requiring formal validation

### 9.5 Output Class

Expected Perplexity outputs include:

- cited evidence bundles
- source maps
- fact sets
- gap-closure notes
- source-backed contradiction checks

## 10. Grok Operating Pattern

### 10.1 Primary Use

Use Grok for:

- social-adjacent signal extraction
- Reddit and forum-adjacent signal scouting
- ecosystem chatter
- launch reaction and discourse monitoring
- operator pain-point reconnaissance
- emerging-topic watch signals

### 10.2 Workspace / Prompt-Pack Expectation

Because Grok workspace semantics remain less stable and less documented than the other environments, Grok should be treated as a bounded prompt-pack operating surface rather than the primary persistence anchor.

A Grok execution surface should include:

- bounded objective
- narrow signal target
- explicit extraction ask
- explicit note that output is provisional until validated elsewhere
- intended downstream validation route

### 10.3 Recommended Thread Families

Recommended Grok thread families:

- signal-main
- ecosystem-reaction
- operator-pain-points
- launch-reaction
- weak-signal-escalation
- field-friction-watch

### 10.4 Inputs Expected from Upstream Environments

Grok may receive:

- a market issue requiring discourse pulse
- a vendor or product issue to scan socially
- a suspected pain point to probe
- a newly surfaced issue needing signal sampling

### 10.5 Output Class

Expected Grok outputs include:

- signal notes
- anecdotal evidence candidates
- emerging-topic summaries
- early warning items
- provisional pain-point leads

Grok outputs are never treated as publication-grade conclusions on their own.

## 11. Execution by Mode

### 11.1 Mode A — Single Model / Single Chat

Use when:

- scope is narrow
- risk is low
- artifact target is limited
- overlap is not needed

Procedure:

1. define objective
2. choose one primary environment
3. load relevant governing context
4. define target artifact or output class
5. execute task in one bounded chat
6. extract output
7. record unresolved items
8. move to next gate or close run slice

### 11.2 Mode B — Single Model / Multi Chat

Use when:

- one platform remains primary
- work benefits from decomposition into branches
- token discipline or clarity requires branching
- branch outputs will later be merged

Procedure:

1. define primary model
2. define branch map
3. assign one objective per branch
4. preserve branch naming
5. collect branch outputs
6. merge them in the same environment or downstream
7. record merge logic in run notes or handoff

### 11.3 Mode C — Multi Model / Multi Environment

Use when:

- work is high value or high risk
- evidence breadth matters
- contradiction risk is material
- synthesis and compilation should be separated
- different model strengths are intentionally combined

Procedure:

1. define route policy
2. define environment assignments
3. define transfer checkpoints
4. run acquisition in the selected environment
5. package transfer bundle
6. pass explicitly to the next environment
7. continue until compiler state is reached
8. finalize output and handoff

## 12. Transfer Packet Contract

### 12.1 Rule

No environment-to-environment transfer may rely on vague chat recall.

Every transfer must be explicit and compact.

### 12.2 Minimum Transfer Fields

Every transfer packet must include:

- run_id
- execution_mode
- source_environment
- target_environment
- objective
- artifact_target
- completed_so_far
- evidence_refs
- prior_output_refs
- unresolved_items
- next_environment_ask
- expected_output_class

### 12.3 Transfer Template

Use this shape:

- run_id:
- execution_mode:
- source_environment:
- target_environment:
- objective:
- artifact_target:
- completed_so_far:
- evidence_refs:
- prior_output_refs:
- unresolved_items:
- next_environment_ask:
- expected_output_class:

### 12.4 Transfer Quality Rule

The transfer packet must be sufficient for the receiving environment to operate without guessing:

- what the task is
- what already happened
- what evidence is load-bearing
- what remains unresolved
- what the next output should look like

## 13. Environment-to-Environment Procedures

### 13.1 Perplexity to Claude

Use when cited acquisition must become reasoning.

Transfer:

- source bundle
- key citations
- grouped claims
- ambiguity flags
- synthesis objective
- required analysis form

Expected result:

- structured synthesis
- implications
- contradiction flags
- recommendation logic candidates

### 13.2 Grok to Perplexity

Use when weak signals require formal validation.

Transfer:

- signal note
- candidate pain points
- suspected issues
- named topics or vendors
- validation objective

Expected result:

- cited validation bundle
- confirmed or rejected signal
- source-backed expansion of the issue

### 13.3 Claude to ChatGPT

Use when synthesis must become canonical artifact language.

Transfer:

- synthesis summary
- structured findings
- contradiction findings
- unresolved items
- target file path
- required section structure
- artifact class

Expected result:

- normalized repository-ready markdown
- explicit version and status header
- section structure aligned with target artifact family

### 13.4 Perplexity to ChatGPT

Use when acquisition output is light enough to skip deep synthesis.

Transfer:

- source map
- cited fact summary
- target artifact type
- required normalization shape

Expected result:

- normalized evidence-led draft
- compiler-stage note or artifact section

### 13.5 ChatGPT to Claude

Use when compiler-stage material needs deeper reasoning review before finalization.

Transfer:

- normalized draft
- specific reasoning concern
- contradiction targets
- refinement ask

Expected result:

- revised reasoning notes
- contradiction disposition
- improved implication framing

## 14. Multi-Chat Branching Patterns

### 14.1 Branching Rule

Branch when the work benefits from separation by:

- region
- vendor
- market segment
- evidence class
- contradiction class
- artifact family

### 14.2 Merge Rule

Branch outputs must be merged deliberately.

The merge step must record:

- which branches were merged
- what was accepted
- what remained unresolved
- what was discarded
- which environment performed the merge

### 14.3 Preferred Merge Environments

| Merge type           | Preferred environment |
| -------------------- | --------------------- |
| evidence merge       | Perplexity or ChatGPT |
| synthesis merge      | Claude                |
| final artifact merge | ChatGPT               |
| contradiction merge  | Claude then ChatGPT   |

## 15. Session Restart Rules

### 15.1 Restart Principle

Restart from the last valid gate, not from vague memory.

### 15.2 Required Restart Inputs

Before resuming non-trivial work, the operator must reload:

- current governing docs
- current run_id
- current execution_mode
- current artifact targets
- latest transfer packet or handoff
- latest accepted upstream outputs
- unresolved items

### 15.3 Restart Decision Logic

If previous session ended before meaningful output:
restart at input gate.

If acquisition completed but synthesis did not:
restart at evidence or reasoning gate.

If synthesis completed but compiler output did not:
restart at output gate.

If compiler output exists but review is incomplete:
restart at publish-gate preparation.

### 15.4 Unsafe Restart Condition

Do not resume from memory alone when:

- last accepted artifact is unclear
- unresolved items are missing
- route position is unclear
- more than one environment was active and transfer state is ambiguous

In those cases, reconstruct state from repository artifacts and the latest written handoff.

## 16. Contradiction Loop Workflow

### 16.1 Trigger Conditions

Invoke contradiction loop when:

- environments materially disagree
- weak signal conflicts with cited evidence
- synthesis exposes ungrounded assumptions
- compiler output overstates what evidence supports

### 16.2 Preferred Contradiction Route

Default contradiction route:

1. Claude reviews contradiction
2. Perplexity cross-checks evidence if needed
3. ChatGPT normalizes final contradiction disposition

### 16.3 Contradiction Disposition Classes

Every contradiction should be marked as one of:

- unresolved
- source-conflict
- weak-signal-not-confirmed
- evidence-gap
- resolved-in-favor-of-primary-source
- resolved-in-favor-of-cross-validated-source
- compiler-overreach-corrected

### 16.4 Recording Rule

No meaningful contradiction may be silently discarded.

If a dedicated contradiction schema is not yet present, contradiction findings must be preserved in run notes or handoff notes.

## 17. Operator Responsibilities

The operator is responsible for:

- starting and ending work at repository root
- loading governing documents before meaningful work
- selecting execution mode
- selecting route policy
- preserving accepted outputs
- extracting model outputs into repository files
- recording unresolved items
- restarting from last valid gate
- maintaining git and gate discipline

The operator is not responsible for performing the system’s primary analytical labor manually.

## 18. Operator Execution Reminders

### 18.1 Repo-Root Discipline

Every work cycle begins and ends at:

    ~/repos/server-market-deterministic-agentic-model

Required posture:

- SSH into droplet
- attach tmux session
- cd to repository root
- perform writes, validation, git checks, and handoff generation from root
- finish at root

### 18.2 Extraction Discipline

When extracting model output into repo files:

- preserve version header
- preserve status line
- preserve deterministic section order
- do not silently rewrite architecture
- do not collapse evidence and inference together

### 18.3 Environment Discipline

When using multiple environments:

- one environment owns one primary task at a time
- transfer only necessary material
- do not assume hidden persistence features are stable
- record unresolved items before moving downstream

### 18.4 Git and Gate Discipline

Before commit or push:

- run formatter
- run CI gate
- inspect git diff
- confirm file path and filename
- confirm no accidental shell artifacts landed in the file

## 19. Environment Handoff Template

Use this when ending a session that will resume later or in another chat.

### 19.1 Required Handoff Fields

- completed_work
- pending_work
- next_files_to_modify
- current_version_references
- unresolved_risks_and_questions
- repo_state
- active_execution_mode
- next_recommended_route

### 19.2 Handoff Skeleton

- completed_work:
- pending_work:
- next_files_to_modify:
- current_version_references:
- unresolved_risks_and_questions:
- repo_state:
- active_execution_mode:
- next_recommended_route:

## 20. Non-Goals and Constraints

This guide does not guarantee:

- perfect persistence in any commercial UI
- equal capability across vendors
- stable vendor limits over time
- zero operator judgment

This guide intentionally avoids:

- treating Grok as the primary persistence anchor
- treating Perplexity as the root compiler
- treating ChatGPT as the primary live social monitor
- treating Claude as the primary live acquisition engine

## 21. Open Issues

The following remain open and must stay explicit:

- Grok workspace semantics and limits may continue to move
- Perplexity Space persistence and connector-sync behavior remain bounded
- Claude export and quota behavior requires continued observation
- ChatGPT connector and limit behavior may shift by region or plan
- cross-environment artifact packaging strategy is still evolving
- manual testing remains required before final capability freeze

## 22. Appendix References

This guide should remain aligned with future additions in:

- schemas/run-manifest/
- schemas/evidence-ledger/
- schemas/contradiction-log/
- prompts/acquisition/
- prompts/synthesis/
- prompts/validation/
- prompts/compiler/
