# Retail/Manual Multi-Model Implementation Spec

Version: v0.1.0  
Status: draft  
Date: 2026-03-13  
Author: OpenAI ChatGPT with human operator James

## Section Index

1. Purpose
2. Scope
3. Definitions and artifact taxonomy
4. System structure
5. Data contracts
6. Run protocol
7. Validation and controls
8. Error handling and recovery
9. Logging and auditability
10. Security and confidentiality
11. Implementation notes
12. Open issues
13. Appendices

## 1. Purpose

This engineering spec defines the exact deterministic procedures, repository structures, artifact types, prompt packaging rules, schema expectations, manifests, logs, gates, and operator procedures required to execute the AI-first human-interface market research operating system manually.

This is the implementation companion to Blueprint 1. It defines how the Stage 0 manual system is actually run in commercial model interfaces while preserving restartability, lineage, and future automation readiness.

## 2. Scope

### 2.1 In-scope

This spec governs:

- repository structure for manual-system operation
- deterministic artifact naming
- prompt-pack and schema-pack structure
- run manifest requirements
- event and review logging
- checksum ledger requirements
- gate definitions
- bounded retry policy
- operator workflow in retail model environments
- invalidation and restart procedures

### 2.2 Out-of-scope

This spec does not define:

- API orchestration runtime internals
- production service deployment
- enterprise auth and permissions systems
- full software agent execution engines
- final dashboard architecture

Those belong to the later agentic orchestration spec.

## 3. Definitions and artifact taxonomy

### 3.1 Core definitions

| Term                  | Definition                                                                     |
| --------------------- | ------------------------------------------------------------------------------ |
| Run                   | a bounded research execution instance with a unique run ID                     |
| Artifact              | a versioned output object produced during a run                                |
| Evidence bundle       | a grouped set of source-grounded material used by an artifact                  |
| Gate                  | a controlled validation checkpoint with pass, retry, fail, or escalate outcome |
| Review decision       | a human or model validation disposition on an artifact or gate                 |
| Contradiction record  | a structured record of conflicting claims or unresolved analytical tension     |
| Checksum ledger entry | a record pairing an artifact path or manifest object with its hash             |
| Handoff note          | a restart-safe continuation document recording state and next actions          |

### 3.2 Canonical artifact classes

The Stage 0 system recognizes the following canonical artifact classes:

- market-segment-definition
- region-profile
- vendor-landscape
- pain-point-matrix
- feature-opportunity-map
- recommendation-brief
- shift-signal-note
- evidence-ledger
- contradiction-log
- run-manifest
- handoff-note

### 3.3 Artifact intent by class

| Artifact class            | Intent                                                                           |
| ------------------------- | -------------------------------------------------------------------------------- |
| market-segment-definition | define a segment as an analytical control object                                 |
| region-profile            | record region-specific constraints, policies, and deployment realities           |
| vendor-landscape          | compare relevant competitors and vendor positioning                              |
| pain-point-matrix         | normalize customer and operator pain points                                      |
| feature-opportunity-map   | map pain points and conditions to server traits                                  |
| recommendation-brief      | record recommendation logic and evidence basis                                   |
| shift-signal-note         | capture directional market signals not yet mature enough for full recommendation |
| evidence-ledger           | preserve source lineage and evidence tiering                                     |
| contradiction-log         | preserve conflicting claims and open tensions                                    |
| run-manifest              | record run identity, configuration, outputs, and gate state                      |
| handoff-note              | preserve restart continuity and next-step precision                              |

### 3.4 Artifact status values

Canonical status values:

- draft
- in-review
- validated
- blocked
- invalidated
- published

### 3.5 Deterministic file naming

Canonical filename pattern:

`<scope-date>-<market-or-region>-<segment-or-topic>-<artifact-class>-<version>-<status>.md`

Where a field is not applicable, use `global`.

Example:

`2026-03-13-global-global-recommendation-brief-v0.1.0-draft.md`

For governing canonical documents under `docs/`, stable semantic names are allowed where the file itself is the controlled canonical object.

## 4. System structure

### 4.1 Repository structure

The Stage 0 implementation expects this baseline structure:

- `docs/`
- `docs/blueprints/`
- `docs/engineering-specs/`
- `docs/operator-guides/`
- `docs/project-constitution/`
- `prompts/`
- `schemas/`
- `templates/`
- `manifests/`
- `logs/`
- `runs/`
- `outputs/`
- `scripts/`
- `src/`

### 4.2 Directory purpose

| Path                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| docs/project-constitution | canonical governance and outline artifacts          |
| docs/blueprints           | architecture and operating blueprints               |
| docs/engineering-specs    | procedural and technical control specs              |
| docs/operator-guides      | human execution guides                              |
| prompts                   | prompt packs by role and task family                |
| schemas                   | canonical schema families                           |
| templates                 | run-control and output templates                    |
| manifests                 | normalized manifest instances and examples          |
| logs                      | session, run, review, failure, and checksum logs    |
| runs                      | run-specific state directories                      |
| outputs                   | compiled output artifacts for review or publication |
| scripts                   | deterministic validation and helper utilities       |
| src                       | future code scaffolds and typed utilities           |

### 4.3 Run directory structure

Each run should be isolated under:

`runs/<run-id>/`

Recommended contents:

- `runs/<run-id>/manifest.json`
- `runs/<run-id>/artifacts/`
- `runs/<run-id>/evidence/`
- `runs/<run-id>/reviews/`
- `runs/<run-id>/logs/`
- `runs/<run-id>/handoff/`

### 4.4 Prompt-pack structure

Recommended prompt-pack layout:

- `prompts/acquisition/`
- `prompts/normalization/`
- `prompts/synthesis/`
- `prompts/validation/`
- `prompts/contradiction/`
- `prompts/self-critique/`
- `prompts/compiler/`
- `prompts/handoff/`

Each prompt file should include:

- title
- version
- status
- intended task class
- allowed inputs
- required outputs
- failure conditions
- notes on escalation triggers

### 4.5 Schema-pack structure

Recommended schema-pack layout:

- `schemas/evidence-ledger/`
- `schemas/market-segment/`
- `schemas/region-profile/`
- `schemas/vendor-landscape/`
- `schemas/pain-point-matrix/`
- `schemas/feature-opportunity-map/`
- `schemas/recommendation/`
- `schemas/shift-signal/`
- `schemas/run-manifest/`
- `schemas/contradiction-log/`

Each schema family should expose at minimum:

- markdown field expectations
- required fields
- optional fields
- version
- validation notes
- future JSON compatibility notes

## 5. Data contracts

### 5.1 Run manifest contract

Each run manifest must define at least:

- `run_id`
- `objective`
- `operator`
- `project`
- `system_stage`
- `status`
- `start_timestamp`
- `end_timestamp`
- `models_used`
- `source_window`
- `input_bundle_refs`
- `prompt_pack_version`
- `schema_pack_version`
- `artifact_refs`
- `gate_results`
- `unresolved_items`
- `review_state`

### 5.2 Artifact contract

Each artifact must define at least:

- `artifact_id`
- `artifact_type`
- `title`
- `version`
- `status`
- `date`
- `run_id`
- `producer`
- `scope`
- `evidence_refs`
- `confidence_level`
- `unresolved_items`
- `checksum_ref`

### 5.3 Evidence ledger contract

Each evidence ledger entry must include at least:

- source identifier
- source type
- evidence tier
- capture date
- claim summary
- quote or paraphrase block reference
- relevance notes
- associated artifact refs

### 5.4 Contradiction log contract

Each contradiction record must include at least:

- contradiction ID
- implicated artifacts
- conflicting claims
- source refs
- severity
- current disposition
- required follow-up
- resolution state

### 5.5 Review record contract

Each review record must include at least:

- review ID
- target artifact or gate
- reviewer identity
- review type
- findings
- disposition
- timestamp

## 6. Run protocol

### 6.1 Run ID format

Recommended run ID format:

`run-YYYYMMDD-<scope>-<sequence>`

Example:

`run-20260313-blueprint-01`

### 6.2 Stage label

All Stage 0 manual runs should record:

`system_stage: stage-0-manual-deterministic`

### 6.3 Run life cycle

A run progresses through these states:

- initialized
- acquiring
- normalizing
- synthesizing
- validating
- packaging
- review-pending
- validated
- blocked
- published
- archived

### 6.4 Operator start sequence

1. open the droplet session
2. attach or create the `server-market` tmux session
3. confirm repo path
4. create or continue session logging
5. load governing docs
6. assign or confirm run ID
7. declare objective
8. identify affected artifact families
9. begin at the correct gate

### 6.5 Supported model environments

The manual system may operate across:

- ChatGPT Projects
- Grok workspaces
- Perplexity spaces or equivalent research threads
- Claude projects when needed
- Gemini large-context workflows when needed

All environments must still obey the same manifests, prompts, gates, and handoff requirements.

### 6.6 Input bundle requirements

Each meaningful run must declare:

- governing files loaded
- input artifacts loaded
- source window or evidence window
- selected prompt family
- selected schema family
- expected outputs

### 6.7 Output registration

Every artifact produced in a run must be registered in the run manifest before being considered for validation or publication.

## 7. Validation and controls

### 7.1 Gate sequence

The Stage 0 system uses the following mandatory gate sequence:

1. Input gate
2. Evidence gate
3. Schema gate
4. Reasoning gate
5. Output gate
6. Publish gate

### 7.2 Input gate rules

Pass conditions:

- objective is explicit
- governing docs are identified
- target artifacts are identified
- prompt/schema versions are identified
- run manifest exists or is being created

Fail conditions:

- ambiguous objective
- missing canonical governance context
- missing target artifact definition

### 7.3 Evidence gate rules

Pass conditions:

- evidence exists for each major claim family
- source-tier coverage is recorded
- gaps are explicitly logged
- evidence ledger exists

Fail conditions:

- unsupported recommendation basis
- missing or weak evidence with no unresolved-item entry
- absent lineage

### 7.4 Schema gate rules

Pass conditions:

- artifact structure conforms to expected schema family
- required fields are present
- status, version, date, and run linkage exist

Fail conditions:

- silent field drift
- missing required sections
- inconsistent artifact typing

### 7.5 Reasoning gate rules

Pass conditions:

- major claims map to evidence
- contradictions are addressed or logged
- inferences are marked
- confidence level is declared

Fail conditions:

- unsupported analytical leaps
- contradiction suppression
- overconfident synthesis without source basis

### 7.6 Output gate rules

Pass conditions:

- artifact is readable for intended audience
- evidence chain is preserved
- unresolved items are visible
- terminology is internally consistent

Fail conditions:

- audience mismatch
- hidden uncertainty
- packaging that obscures lineage

### 7.7 Publish gate rules

Pass conditions:

- review state is recorded
- manifest is current
- checksum ledger is updated
- handoff note or continuation state exists
- publication target is explicit

Fail conditions:

- incomplete lineage package
- missing review state
- untracked artifact version

### 7.8 Retry ceilings

Default retry ceiling per gate: 2 retries beyond the initial attempt.

After the ceiling is reached, the operator must either:

- escalate
- change input conditions materially
- invalidate the artifact path
- stop the run

### 7.9 No-progress detection

A retry is considered invalid if it repeats the same prompt route and produces no substantive defect reduction. Identical failure behavior triggers escalation.

## 8. Error handling and recovery

### 8.1 Failure classes

Failure classes include:

- input failure
- evidence insufficiency
- schema mismatch
- reasoning defect
- contradiction overload
- packaging defect
- governance drift

### 8.2 When to retry

Retry only when one of the following changed:

- input bundle was corrected
- evidence set expanded
- schema clarified
- task framing narrowed
- route changed
- validation feedback incorporated

### 8.3 When to stop

Stop immediately when:

- a governing contradiction is detected
- evidence is materially insufficient and cannot be expanded in-scope
- the artifact class is structurally wrong
- retry ceiling is exhausted without progress

### 8.4 When to escalate

Escalate when:

- unresolved contradictions affect recommendation direction
- confidence is too low for decision use
- artifact structure requires governance change
- output would influence strategic product decisions but evidence is weak

### 8.5 Artifact invalidation protocol

When an artifact path fails irrecoverably:

- mark status as `invalidated`
- record reason
- preserve the failed artifact for audit
- reference replacement artifact path if one exists
- update manifest and checksum ledger

### 8.6 Restart protocol

Restart from the last valid gate, not from chat memory.

Restart requires:

- current run manifest
- last validated artifacts
- current contradiction log
- unresolved-item list
- latest handoff note
- prompt and schema version references

### 8.7 Handoff protocol

Every interrupted or paused substantive run must generate a handoff note containing:

- completed work
- blocked work
- current gate state
- next required actions
- files affected
- unresolved risks

## 9. Logging and auditability

### 9.1 Log families

The Stage 0 system recognizes these log families:

- session log
- run log
- event log
- contradiction log
- review log
- failure log
- checksum ledger

### 9.2 Session logging

Operator shell activity should be logged under:

`logs/session/`

Recommended pattern:

`command 2>&1 | tee logs/session/<command-name>.log`

### 9.3 Run logging

Each run should preserve:

- run lifecycle events
- gate transitions
- artifact creation events
- validation outcomes
- escalation decisions

### 9.4 Event log structure

Each event log entry should include:

- timestamp
- run ID
- event type
- target object
- disposition
- notes

### 9.5 Checksum ledger requirements

Each publishable or validation-relevant artifact should have a checksum record containing:

- artifact path
- hash algorithm
- hash value
- generation timestamp
- associated run ID

Preferred initial algorithm: `sha256`

### 9.6 Audit package minimum

A reviewable output package is incomplete unless it includes:

- output artifact
- evidence ledger
- run manifest
- contradiction log when applicable
- checksum ledger entries
- handoff or review note

## 10. Security and confidentiality

### 10.1 Project confidentiality stance

This project and its work products are the personal IP of the project owner. Internal artifacts should be treated as controlled materials unless explicitly prepared for publication.

### 10.2 Handling stance

The manual system must avoid:

- uncontrolled copying of proprietary artifacts into uncontrolled contexts
- omission of review state on outward-facing deliverables
- publication of recommendation artifacts without lineage support

### 10.3 Model-environment caution

When using retail model environments, the operator must maintain awareness of what material is being loaded and what publication state the material holds. Sensitive internal strategy outputs should remain bounded to approved working contexts.

## 11. Implementation notes

### 11.1 Current repository alignment

The current repository bootstrap already includes the major root structures needed for this spec. Immediate next work after this spec should prioritize prompt-pack scaffolding, schema normalization, template hardening, manifest examples, and operator guides aligned to supported model environments.

### 11.2 Preferred language direction

Future implementation direction remains:

- primary orchestration language: TypeScript strict
- secondary utility language: Python
- optional later specialized workers: Go

### 11.3 Near-term implementation priorities

Immediate implementation priorities after this spec:

1. add prompt-pack scaffolds
2. add schema family canonical definitions
3. add run-manifest template
4. add checksum ledger template
5. add contradiction log template
6. add operator guides for supported model environments
7. add helper scripts for manifest and checksum generation

## 12. Open issues

Open issues for the next spec and implementation pass:

- exact markdown-plus-JSON schema dual-format design
- prompt pack file naming convention
- review-state vocabulary expansion
- manifest template examples
- checksum generation automation strategy
- model-specific routing guidance by task type
- publication-state handling for executive versus working artifacts

## 13. Appendices

### 13.1 Canonical file targets

- `docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md`
- `docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md`

### 13.2 Governing references

- `docs/project-constitution/server-market-project-constitution-v0.1.0.md`
- `docs/project-constitution/server-market-project-instructions-v0.1.0.md`
- `docs/project-constitution/project-outline-v0.1.0.md`
- `docs/project-constitution/prompts-and-schema-outline-v0.1.0.md`
- `docs/project-constitution/agentic-architecture-outline-v0.1.0.md`
- `docs/blueprints/blueprint-outline-v0.1.0.md`
- `docs/engineering-specs/engineering-specs-outline-v0.1.0.md`

### 13.3 Commit target

Recommended commit message:

`docs: add canonical blueprint and engineering spec v0.1.0`
