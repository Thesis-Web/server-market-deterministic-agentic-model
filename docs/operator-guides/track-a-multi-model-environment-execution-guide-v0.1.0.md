# Track A Multi-Model Environment Execution Guide

Version: v0.1.0  
Status: draft canonical realignment  
Date: 2026-03-14  
Author: OpenAI ChatGPT with human operator James

## 1. Purpose

This operator guide defines how Track A work is executed across the approved commercial model environments used by the server-market-deterministic-agentic-model project.

This guide operationalizes the manual execution layer already defined in the canonical blueprint, implementation spec, and model-routing guide.

It defines:

- how each approved environment is used
- how work is divided across environments
- how continuity is preserved across chats and platforms
- how transfer packets are formed
- how restart is performed without relying on vague memory
- how contradiction handling is routed across environments
- how the human operator executes from repository root without becoming the primary analytical processor

This guide does not change architecture. It applies the existing Track A architecture to the actual operating surfaces.

## 2. Scope

This guide applies only to Track A manual deterministic execution.

It covers these approved environments:

- ChatGPT Projects
- Claude Projects
- Perplexity Spaces or equivalent research threads
- Grok workspace, project, or prompt-pack operating pattern

It applies to all three approved Track A execution modes:

- Mode A — single-model / single-chat
- Mode B — single-model / multi-chat
- Mode C — multi-model / multi-environment

It does not define Track B orchestration runtime behavior.

## 3. Governing alignment

This guide must remain aligned with:

- docs/project-constitution/server-market-project-constitution-v0.1.0.md
- docs/project-constitution/server-market-project-instructions-v0.1.0.md
- docs/project-constitution/project-outline-v0.1.0.md
- docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md
- docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md
- docs/operator-guides/track-a-ai-use-cases-and-model-routing-guide-v0.1.0.md

If any environment procedure in this guide conflicts with the blueprint or implementation spec, the canonical governance documents win and this guide must be updated.

## 4. Core operating stance

The operating stance remains fixed:

- the models perform the primary analytical work
- the human acts as operator, reviewer, and escalation authority
- repository files outrank chat memory when conflicts appear
- every transfer between environments must be explicit
- every meaningful run must preserve restartability
- overlap between models is allowed only when it strengthens evidence, synthesis, contradiction review, or compiler quality
- no environment is treated as universally interchangeable with another

The operator must preserve route clarity rather than prompt improvisation.

## 5. Approved environment roles

### 5.1 Environment role summary

| Environment                           | Primary function                                                           | Secondary function                        | Avoid as primary                           |
| ------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| Perplexity Spaces or research threads | citation-first acquisition, source mapping, first-pass research bundles    | contradiction support, current-event scan | final compiler                             |
| Grok workspace or prompt-pack pattern | social, Reddit, emerging-signal, discourse pulse                           | supplemental current-signal scan          | canonical normalization or final packaging |
| Claude Projects                       | long-document synthesis, comparison, contradiction review                  | reasoning drafts, recommendation logic    | primary live acquisition                   |
| ChatGPT Projects                      | normalization, compilation, packaging, repository-shaped artifact drafting | synthesis support, schema shaping         | primary live social signal monitor         |

### 5.2 Default high-confidence flow

The default high-confidence flow is:

Perplexity
downstream to Claude
downstream to ChatGPT

### 5.3 Default signal-escalation flow

The default signal-escalation flow is:

Grok
downstream to Perplexity
downstream to Claude
downstream to ChatGPT

### 5.4 Approved execution posture

The current practical posture is:

- Perplexity-led acquisition
- Grok-assisted weak-signal detection
- Claude-led synthesis and contradiction review
- ChatGPT-led compilation and normalization

## 6. Environment structure requirements

Each environment must be treated as a bounded work surface with a defined role.

### 6.1 Minimum environment control fields

For any meaningful work session, the operator must know and record:

- run_id
- execution_mode
- environment_name
- primary_task_class
- artifact_target
- route_position
- input_refs
- prior_output_refs
- unresolved_items
- next_expected_environment

### 6.2 Environment naming rule

The operator should use stable naming inside each tool wherever possible.

Recommended naming pattern:

project-or-space name
market focus
run or artifact focus
version when needed

Example pattern:

server-market / vendor-landscape / run-sm-2026-03-14-001

### 6.3 Environment containment rule

Each environment should hold only the material required for its assigned task slice.

Do not overload one environment with all tasks if decomposition improves determinism.

## 7. ChatGPT Projects operating pattern

### 7.1 Primary use

Use ChatGPT Projects for:

- compiler-stage work
- normalized markdown drafting
- repository-shaped outputs
- handoff creation
- manifest-aware artifact packaging
- cross-model material consolidation

### 7.2 Project structure expectation

A ChatGPT Project should contain, when applicable:

- governing document references
- current route policy summary
- active artifact targets
- imported upstream outputs
- normalized task prompts
- compiler-stage working notes

### 7.3 Recommended thread separation

Inside ChatGPT Projects, separate threads by function when work is large.

Recommended thread families:

- compiler-main
- normalization-pass
- handoff-generation
- contradiction-register-finalization
- artifact-specific drafting

### 7.4 Inputs expected from upstream environments

ChatGPT should usually receive:

- cited acquisition bundle
- synthesis summary
- contradiction findings
- unresolved items
- target artifact class
- target file path
- required structure

### 7.5 ChatGPT output class

Expected ChatGPT outputs include:

- canonical markdown drafts
- repository-ready sections
- normalized artifact language
- handoff notes
- operator execution packs

## 8. Claude Projects operating pattern

### 8.1 Primary use

Use Claude Projects for:

- long-document reasoning
- dense comparative analysis
- contradiction review
- extracting stable implications from large evidence sets
- recommendation logic drafting before compiler normalization

### 8.2 Project structure expectation

A Claude Project should contain, when applicable:

- upstream evidence bundle
- related supporting documents
- comparison targets
- contradiction candidates
- analysis objective
- required output shape

### 8.3 Recommended thread separation

Recommended Claude thread families:

- synthesis-main
- comparison-pass
- contradiction-review
- recommendation-logic-draft
- evidence-gap-analysis

### 8.4 Inputs expected from upstream environments

Claude should usually receive:

- acquisition packet
- grouped evidence notes
- source tier notes
- key claims requiring synthesis
- ambiguity or contradiction targets
- desired output class

### 8.5 Claude output class

Expected Claude outputs include:

- structured synthesis notes
- implication chains
- comparative tables
- contradiction review notes
- recommendation logic drafts

## 9. Perplexity Spaces operating pattern

### 9.1 Primary use

Use Perplexity first for:

- citation-first acquisition
- source discovery
- source triangulation
- first-pass market scans
- current vendor or competitor pulls
- regulation and policy retrieval
- acquisition-oriented contradiction support

### 9.2 Space or thread structure expectation

A Perplexity Space or equivalent thread should contain:

- tightly scoped acquisition objective
- search scope
- current subject boundary
- evidence extraction intent
- citation preservation expectation

### 9.3 Recommended thread separation

Recommended Perplexity thread families:

- acquisition-main
- competitor-scan
- regulation-scan
- region-scan
- source-gap-closure
- fast contradiction check

### 9.4 Inputs expected from upstream environments

Perplexity may receive:

- target segment or market question
- region or vendor boundary
- evidence gaps from Claude or ChatGPT
- claims requiring citation confirmation
- time-sensitive signal requiring formal source validation

### 9.5 Perplexity output class

Expected Perplexity outputs include:

- source maps
- cited evidence notes
- acquisition bundles
- vendor fact sets
- region or policy source bundles
- evidence-gap closure notes

## 10. Grok operating pattern

### 10.1 Primary use

Use Grok for:

- social-adjacent signal capture
- Reddit or forum-style weak-signal collection
- ecosystem chatter
- operator pain-point reconnaissance
- launch reaction and discourse monitoring
- emerging-topic watch signals

### 10.2 Workspace or prompt-pack expectation

Because Grok workspace semantics may vary, the operator should treat Grok as a controlled prompt-pack operating pattern rather than relying on undocumented persistence.

A Grok working surface should include:

- bounded objective
- narrow signal target
- explicit extraction ask
- explicit note that outputs are provisional until validated elsewhere
- intended downstream validation route

### 10.3 Recommended thread separation

Recommended Grok thread families:

- signal-main
- operator-pain-points
- ecosystem-reaction
- launch-reaction
- field-friction-watch
- weak-signal-escalation

### 10.4 Inputs expected from upstream environments

Grok may receive:

- a market topic requiring discourse pulse
- a vendor or product issue to scan socially
- a suspected pain point to probe
- a newly surfaced issue needing community-signal sampling

### 10.5 Grok output class

Expected Grok outputs include:

- signal notes
- anecdotal evidence candidates
- early warning items
- emerging-topic summaries
- provisional pain-point leads

Grok outputs are not publication-grade conclusions on their own.

## 11. Execution by mode

### 11.1 Mode A — single-model / single-chat

Use this when:

- task scope is narrow
- risk is low
- artifact scope is limited
- overlap is not yet needed

Procedure:

1. identify objective
2. choose one primary environment
3. load governing context
4. define artifact target
5. execute the task in one chat
6. extract the output
7. record unresolved items
8. move to next gate or close run slice

Typical examples:

- one acquisition thread in Perplexity
- one synthesis pass in Claude
- one compiler pass in ChatGPT

### 11.2 Mode B — single-model / multi-chat

Use this when:

- one platform remains primary
- work must be decomposed into multiple branches
- branching improves clarity or token discipline
- outputs will later be merged in the same platform or downstream

Procedure:

1. identify primary model
2. define branch map
3. assign one objective per branch
4. preserve branch naming
5. collect outputs from each branch
6. merge into a synthesis or compiler thread
7. record merge logic in run notes

Typical examples:

- multiple Perplexity acquisition threads by region
- multiple Claude analysis threads by vendor
- multiple ChatGPT drafting threads by artifact family

### 11.3 Mode C — multi-model / multi-environment

Use this when:

- the work is high-value or high-risk
- evidence breadth matters
- contradiction risk is material
- synthesis and compilation must be separated
- different model strengths are intentionally combined

Procedure:

1. define route policy
2. define model assignments
3. define transfer checkpoints
4. run acquisition in the selected environment
5. validate and package transfer bundle
6. pass to next environment
7. continue until artifact target reaches compiler state
8. finalize handoff and gate status

Typical examples:

- Perplexity to Claude to ChatGPT
- Grok to Perplexity to Claude to ChatGPT

## 12. Transfer packet contract

### 12.1 Rule

No environment-to-environment transfer may rely on vague chat recall.

A transfer packet must be explicit and compact.

### 12.2 Minimum transfer packet fields

Every transfer packet must include:

- run_id
- current objective
- execution_mode
- source environment
- target environment
- current artifact target
- summary of prior work
- evidence bundle reference
- prior output reference
- unresolved items
- specific ask for next environment
- expected output class

### 12.3 Transfer packet template

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

### 12.4 Transfer quality rule

The transfer packet must be sufficient for the next environment to operate without guessing:

- what the task is
- what already happened
- what evidence is load-bearing
- what remains unresolved
- what the next output must look like

## 13. Environment-to-environment procedures

### 13.1 Perplexity to Claude

Use when cited acquisition must become reasoning.

Transfer:

- source bundle
- key citations
- claim families
- ambiguity flags
- synthesis objective
- desired analysis form

Expected result:

- structured synthesis draft
- implications
- contradiction flags
- recommendation logic candidates

### 13.2 Grok to Perplexity

Use when weak signals require formal validation.

Transfer:

- signal note
- candidate issues
- suspected pain points
- vendors or topics mentioned
- validation objective

Expected result:

- cited validation bundle
- confirmed or rejected signals
- source-backed expansion of the signal

### 13.3 Claude to ChatGPT

Use when synthesis must become canonical artifact language.

Transfer:

- synthesis summary
- structured findings
- contradictions and unresolved items
- target file path
- required section structure
- artifact class

Expected result:

- normalized repository-ready markdown
- clear status and version headers
- structured sections aligned to the target file family

### 13.4 Perplexity to ChatGPT

Use when the acquisition output is light enough to skip deep synthesis.

Transfer:

- source map
- cited evidence summary
- target artifact type
- required normalization shape

Expected result:

- normalized evidence-led draft
- repository-shaped artifact or note

### 13.5 ChatGPT to Claude

Use when a compiler-stage artifact needs deeper reasoning review before finalization.

Transfer:

- normalized draft
- specific reasoning concern
- contradiction targets
- refinement ask

Expected result:

- revised reasoning notes
- contradiction disposition
- improved implication framing

## 14. Multi-chat branching patterns

### 14.1 Branching rule

Create branches when the work benefits from separation by:

- region
- vendor
- segment
- evidence class
- contradiction class
- artifact family

### 14.2 Merge rule

Branch outputs must be merged deliberately.

The merge step must record:

- which branches were merged
- what was accepted
- what remained unresolved
- what was discarded
- which environment performed the merge

### 14.3 Preferred merge environments

Preferred merge environment by task class:

| Merge type           | Preferred environment |
| -------------------- | --------------------- |
| evidence merge       | Perplexity or ChatGPT |
| synthesis merge      | Claude                |
| final artifact merge | ChatGPT               |
| contradiction merge  | Claude then ChatGPT   |

## 15. Session restart rules

### 15.1 Restart principle

Restart from the last valid gate, not from general memory.

### 15.2 Required restart inputs

Before resuming any non-trivial work, the operator must reload:

- current governing docs
- current run_id
- current execution_mode
- current artifact targets
- latest transfer packet or handoff
- latest accepted upstream outputs
- unresolved items

### 15.3 Restart decision tree

If the previous session ended before meaningful output:
restart at input gate.

If acquisition completed but synthesis did not:
restart at evidence gate or reasoning gate as appropriate.

If synthesis completed but compiler output did not:
restart at output gate.

If compiler output exists but review is incomplete:
restart at publish gate preparation.

### 15.4 Unsafe restart condition

Do not resume from memory alone when:

- the last accepted artifact is unclear
- unresolved items are missing
- route position is unclear
- more than one environment was active and transfer state is ambiguous

In those cases, reconstruct state from repository artifacts and the last written handoff.

## 16. Contradiction loop workflow

### 16.1 Trigger conditions

Invoke contradiction loop when:

- two environments materially disagree
- a weak signal conflicts with cited evidence
- a synthesis step exposes ungrounded assumptions
- a compiler draft appears stronger than the evidence supports

### 16.2 Preferred contradiction route

Default contradiction route:

1. Claude reviews contradiction
2. Perplexity cross-checks evidence if needed
3. ChatGPT normalizes final contradiction disposition

### 16.3 Contradiction disposition classes

Each contradiction should be marked as one of:

- unresolved
- source-conflict
- weak-signal-not-confirmed
- evidence-gap
- resolved-in-favor-of-primary-source
- resolved-in-favor-of-cross-validated-source
- compiler-overreach-corrected

### 16.4 Contradiction recording rule

No meaningful contradiction may be silently ignored.

Even if a dedicated contradiction schema is not yet present, contradiction findings must be preserved in run notes or handoff notes.

## 17. Operator responsibilities

The operator is responsible for:

- starting from repository root
- loading governing documents before meaningful work
- selecting execution mode
- selecting route policy
- creating explicit transfer packets
- preserving accepted outputs
- keeping git state intentional
- recording unresolved items
- restarting from the last valid gate
- not replacing model analysis with manual authorship

The operator is not responsible for being the primary analytical engine.

## 18. Operator execution reminders

### 18.1 Repo-root discipline

Every work cycle should begin and end at repository root.

Required posture:

- SSH into droplet
- attach tmux
- cd to ~/repos/server-market-deterministic-agentic-model
- perform file writes, validation, git checks, and handoff generation from repo root
- end at repo root

### 18.2 Extraction discipline

When extracting model output into repo files:

- preserve version header
- preserve status line
- preserve deterministic section order
- do not silently rewrite architecture
- do not collapse evidence and inference together

### 18.3 Environment discipline

When using multiple environments:

- one environment owns one primary task at a time
- transfer only the material needed
- do not assume hidden persistence features are stable
- record unresolved items before moving downstream

### 18.4 Git and gate discipline

Before commit or push:

- run formatter
- run validation gate
- confirm git diff is expected
- confirm artifact path and file name are correct

## 19. Environment handoff template

Use this when ending a session that will resume later or in another chat.

### 19.1 Required handoff fields

- completed work summary
- pending work summary
- next files to modify
- current version references
- unresolved risks and questions
- current repo state
- current execution mode if active
- next recommended route

### 19.2 Handoff skeleton

- completed_work:
- pending_work:
- next_files_to_modify:
- current_version_references:
- unresolved_risks_and_questions:
- repo_state:
- active_execution_mode:
- next_recommended_route:

## 20. Non-goals and constraints

This guide does not guarantee:

- perfect persistence inside commercial model UIs
- equal capability across all vendors
- stable vendor limits over time
- zero operator judgment

This guide intentionally avoids:

- treating Grok workspace behavior as more documented than it is
- treating Perplexity as a root compiler
- treating ChatGPT as the primary live social monitor
- treating Claude as the primary acquisition engine

## 21. Open issues

The following remain open and should be preserved explicitly:

- Grok workspace or project semantics may continue to move
- Perplexity Pro persistence and connector-sync behavior remain bounded compared with enterprise tiers
- exact first-tier limits vary by vendor
- environment-specific export behavior may change
- future prompt-pack files must align with this guide once created

## 22. Appendix references

This guide should remain aligned with future additions in:

- schemas/run-manifest/
- schemas/evidence-ledger/
- schemas/contradiction-log/
- prompts/acquisition/
- prompts/synthesis/
- prompts/validation/
- prompts/compiler/
