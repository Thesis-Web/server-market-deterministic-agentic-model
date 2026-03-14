# Retail/Manual Multi-Model Implementation Spec

Version: v0.1.0  
Status: draft canonical realignment  
Date: 2026-03-14  
Author: OpenAI ChatGPT with human operator James

## 1. Purpose

This engineering spec defines the deterministic implementation contract for Track A, the retail/manual multi-model execution system.

It specifies:

- supported Track A execution modes
- approved model environments
- route policy
- artifact and evidence handling
- model-origin tagging
- gate logic
- logging requirements
- restart and recovery behavior
- operator procedure from repository root on the droplet workflow

This spec implements Blueprint 1. It does not define the later API orchestrator.

## 2. Scope

### 2.1 In scope

This spec governs:

- manual operation across supported model environments
- run metadata and route metadata
- artifact taxonomy and naming
- evidence lineage handling
- overlap-for-validation policy
- operator transfer between environments
- logging and handoff continuity
- gate-based validation
- restart from last valid gate

### 2.2 Out of scope

This spec does not define:

- Track B task schedulers
- API orchestration internals
- enterprise auth and access control systems
- production service infrastructure
- dashboards or observability UIs
- model-vendor-specific automation beyond manual operator procedure

## 3. Definitions and artifact taxonomy

### 3.1 Core definitions

| Term                 | Definition                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Run                  | A bounded research execution instance with unique run ID and route metadata              |
| Execution mode       | One of the approved Track A operating modes                                              |
| Route policy         | The explicit mapping of task classes to model environments                               |
| Artifact             | A versioned output object produced during a run                                          |
| Evidence bundle      | A grouped source set supporting an artifact                                              |
| Model-origin tag     | Structured attribution showing which model materially contributed to a stage or artifact |
| Overlap review       | An intentional duplicate or parallel pass used for contradiction or drift detection      |
| Contradiction record | A structured record of conflicting claims or unresolved tension                          |
| Review decision      | Pass, retry, block, or escalate disposition on an artifact or gate                       |
| Handoff note         | Restart-safe continuation record for next session or next environment                    |

### 3.2 Canonical artifact classes

Track A recognizes these canonical artifact classes:

- market-segment-definition
- region-profile
- vendor-landscape
- customer-pain-point
- feature-opportunity
- recommendation-brief
- shift-signal-note
- evidence-ledger
- contradiction-log
- run-manifest
- handoff-note

### 3.3 Artifact status values

Allowed status values:

- draft
- in-review
- validated
- blocked
- invalidated
- published

## 4. System structure

### 4.1 Repository structure

The implementation assumes this baseline repository structure:

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

### 4.2 Run directory structure

Each run should be isolated under:

`runs/<run-id>/`

Recommended structure:

- `runs/<run-id>/manifest.json`
- `runs/<run-id>/artifacts/`
- `runs/<run-id>/evidence/`
- `runs/<run-id>/reviews/`
- `runs/<run-id>/logs/`
- `runs/<run-id>/handoff/`

### 4.3 Prompt-pack structure

Prompt families remain:

- `prompts/acquisition/`
- `prompts/normalization/`
- `prompts/synthesis/`
- `prompts/validation/`
- `prompts/contradiction/`
- `prompts/self-critique/`
- `prompts/compiler/`
- `prompts/handoff/`

### 4.4 Schema-pack structure

Schema families remain:

- `schemas/evidence-ledger/`
- `schemas/market-segment/`
- `schemas/region-profile/`
- `schemas/vendor-landscape/`
- `schemas/customer-pain-point/`
- `schemas/feature-opportunity/`
- `schemas/recommendation/`
- `schemas/shift-signal/`
- `schemas/run-manifest/`
- `schemas/contradiction-log/`

## 5. Supported Track A execution modes

### 5.1 Mode A — single-model / single-chat

Use when the task is narrow and low-risk.

Required metadata:

- `execution_mode: single-model-single-chat`
- `primary_model`
- `objective_scope`
- `artifact_targets`

### 5.2 Mode B — single-model / multi-chat

Use when one model remains primary but the work must be decomposed across separate threads or workspaces.

Required metadata:

- `execution_mode: single-model-multi-chat`
- `primary_model`
- `chat_branch_map`
- `merge_strategy`

### 5.3 Mode C — multi-model / multi-environment

Use when the task is high-value, high-risk, or requires broad evidence acquisition and deep synthesis.

Required metadata:

- `execution_mode: multi-model-multi-environment`
- `route_policy_id`
- `model_assignments`
- `overlap_plan`
- `transfer_checkpoints`

## 6. Supported environment definitions

Track A currently supports these environments:

- ChatGPT Projects
- Claude Projects
- Perplexity Spaces or equivalent research threads
- Grok project/workspace/prompt-pack operating pattern

The implementation stance is operational, not marketing-dependent. If a platform surface changes, the human operator records the effective environment behavior used in the run manifest.

## 7. Approved Track A core model set

### 7.1 Approved set

The approved Track A core set is:

- ChatGPT Plus
- Claude Pro
- Perplexity Pro
- Grok Premium

### 7.2 Current routing stance

| Task class              | Primary route  | Secondary/overlap route |
| ----------------------- | -------------- | ----------------------- |
| acquisition             | Perplexity Pro | Grok Premium            |
| live-signal acquisition | Grok Premium   | Perplexity Pro          |
| normalization           | ChatGPT Plus   | Claude Pro              |
| deep synthesis          | Claude Pro     | ChatGPT Plus            |
| contradiction review    | Claude Pro     | Perplexity Pro          |
| final compilation       | ChatGPT Plus   | Claude Pro              |

### 7.3 Route policy rule

A route decision must be explicit. No run may silently change primary model responsibility for a task class without updating route metadata.

## 8. Data contracts

### 8.1 Run manifest required fields

Each run manifest must define at minimum:

- `run_id`
- `objective`
- `operator`
- `project`
- `system_stage`
- `status`
- `execution_mode`
- `route_policy_id`
- `start_timestamp`
- `end_timestamp`
- `models_used`
- `model_assignments`
- `overlap_plan`
- `input_bundle_refs`
- `source_window`
- `prompt_pack_version`
- `schema_pack_version`
- `governing_docs_loaded`
- `artifact_outputs`
- `gate_results`
- `handoff_ref`

### 8.2 Model assignment object

Each model assignment entry should include:

- `platform`
- `plan_tier`
- `environment`
- `task_class`
- `role_type`
- `reason_for_route`
- `expected_outputs`
- `overlap_with`
- `status`

### 8.3 Artifact registration object

Each artifact registration should include:

- `artifact_id`
- `artifact_type`
- `artifact_path`
- `version`
- `status`
- `producing_stage`
- `primary_model_origin`
- `secondary_model_origins`
- `evidence_refs`
- `contradiction_refs`
- `review_status`

### 8.4 Evidence ledger object

Each evidence ledger entry should include:

- `evidence_id`
- `source_title`
- `source_type`
- `source_tier`
- `observed_date`
- `retrieved_by_model`
- `retrieved_in_environment`
- `used_in_artifacts`
- `claim_class`
- `notes`

### 8.5 Model-origin tagging contract

Every artifact that aggregates more than one model contribution must preserve:

- `primary_model_origin`
- `supporting_model_origins`
- `model_stage_contributions`

Suggested stage values:

- acquisition
- normalization
- synthesis
- contradiction-review
- compilation

## 9. Naming convention

### 9.1 Artifact filename pattern

Use:

`<scope-date>-<market-or-region>-<segment-or-topic>-<artifact-class>-<version>-<status>.md`

Example:

`2026-03-14-global-global-recommendation-brief-v0.1.0-draft.md`

### 9.2 Run ID pattern

Use:

`run-YYYYMMDD-<scope>-<sequence>`

Example:

`run-20260314-tracka-01`

### 9.3 Route policy identifier

Use:

`route-policy-<date>-<name>-v<semver>`

Example:

`route-policy-20260314-tracka-core-v0.1.0`

## 10. Run protocol

### 10.1 Stage label

All Track A runs record:

`system_stage: stage-0-manual-deterministic`

### 10.2 Run lifecycle states

Allowed run states:

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

### 10.3 Operator start sequence

From repository root, the operator must:

1. open SSH session to droplet
2. attach or create tmux session
3. return to repo root
4. confirm clean or intentional git state
5. open or continue logging
6. load governing documents
7. assign or continue run ID
8. set execution mode
9. set route policy
10. declare artifact targets
11. begin at the correct gate

### 10.4 Governing files required before meaningful work

At minimum:

- project constitution
- project instructions
- project outline
- blueprint outline
- engineering specs outline
- current blueprint
- current engineering spec

### 10.5 Transfer contract between environments

When work moves from one model environment to another, the operator must transfer:

- current objective
- current artifact target
- evidence bundle reference
- prior model output reference
- unresolved items
- explicit ask for the next environment

No transfer should rely on vague conversational recall.

## 11. Validation and controls

### 11.1 Mandatory gate sequence

1. input gate
2. evidence gate
3. schema gate
4. reasoning gate
5. output gate
6. publish gate

### 11.2 Input gate

Pass requires:

- explicit objective
- identified execution mode
- identified route policy
- identified artifact targets
- governing docs loaded
- run manifest initialized

Fail requires stop and correction.

### 11.3 Evidence gate

Pass requires:

- evidence exists for each major claim family
- source tiers are recorded
- evidence gaps are logged
- acquisition model origins are recorded

### 11.4 Schema gate

Pass requires:

- artifact conforms to expected schema family
- required fields exist
- status, version, run linkage, and model-origin tags exist

### 11.5 Reasoning gate

Pass requires:

- claims map to evidence
- inferences are marked
- contradictions are handled or logged
- overlap review occurred where route policy required it

### 11.6 Output gate

Pass requires:

- artifact is coherent
- lineage is attached
- unresolved items are visible
- review status is explicit

### 11.7 Publish gate

Pass requires:

- operator review completed
- manifest updated
- contradictions either resolved or accepted with notation
- handoff or publication note written

## 12. Overlap and duplicate-hit handling

### 12.1 Allowed overlap triggers

Invoke overlap when:

- evidence is contested
- live signals may distort conclusions
- recommendation stakes are high
- one model is likely weak on a task class
- validation confidence is insufficient

### 12.2 Duplicate-hit handling

When two models hit the same task class:

- preserve both outputs as intermediate evidence
- do not collapse differences silently
- record contradiction or divergence explicitly
- designate one as primary only after review

### 12.3 Overlap result states

Overlap outcomes:

- confirmed
- contradicted
- broadened
- unresolved

## 13. Error handling and recovery

### 13.1 Stop conditions

Stop the run when:

- governing context is missing
- route policy is ambiguous
- evidence is insufficient
- artifact structure drifts materially
- contradictions cannot be resolved or bounded

### 13.2 Retry conditions

Retry is allowed when:

- formatting failed
- schema fields are incomplete
- one model response was clearly partial
- environment transfer omitted required context

### 13.3 Escalation conditions

Escalate to human review when:

- route conflict exists
- live and durable evidence materially disagree
- recommendation risk is high
- repeated retries produce no forward progress

### 13.4 Restart rule

Restart from the last valid gate, using:

- run manifest
- registered artifacts
- evidence ledger
- contradiction log
- latest handoff note

Do not reconstruct state from memory alone.

## 14. Logging and auditability

### 14.1 Required log classes

Track A must preserve at minimum:

- run log
- route log
- evidence log
- contradiction log
- review log
- failure log
- checksum ledger

### 14.2 Route log minimum fields

Each route decision entry should include:

- timestamp
- run_id
- task_class
- selected_model
- alternate_models_considered
- overlap_required
- operator_note

### 14.3 Review log minimum fields

Each review entry should include:

- artifact_id
- gate_name
- reviewer
- disposition
- blocking_issues
- follow_up_action

### 14.4 Handoff minimum fields

Each handoff note must include:

- completed work summary
- pending work summary
- next files to modify
- current version references
- unresolved risks and questions

## 15. Security and confidentiality

The project is personal IP of the project owner.

Manual operator procedure must therefore assume:

- proprietary work products remain controlled
- no publication without review state
- no silent connector or sharing expansion without user intent
- no recommendation leaves draft state without evidence tagging

## 16. Implementation notes

### 16.1 Repo-root terminal workflow

The default operating flow is:

- SSH into droplet
- attach tmux session
- return to repo root
- run all write, validation, and git commands from repo root
- end at repo root

### 16.2 Logging pattern

Recommended logging pattern:

`mkdir -p logs/session && <command> 2>&1 | tee logs/session/<command-name>.log`

### 16.3 Current practical posture

Track A should currently be treated as:

- Perplexity-led for acquisition
- Grok-assisted for live signal capture
- Claude-led for synthesis
- ChatGPT-led for normalization and compilation

This is a working default, not an eternal rule.

## 17. Open issues

Open issues to preserve explicitly:

- Grok consumer workspace semantics may continue to move
- exact first-tier operational limits vary by vendor
- ZIP handling exists in working practice but is unevenly documented across platforms
- overlap thresholds may need refinement after empirical use

## 18. Appendices

This spec must remain aligned with:

- AI-First Human-Interface Market Research Operating System Blueprint
- project constitution
- project instructions
- project outline
- blueprint outline
- engineering specs outline
- prompts and schema outline
- agentic architecture outline
- repo bootstrap outline

## 12.1 Track-A Operator Execution Alignment

The following operator-layer artifacts are canonical dependencies of this implementation spec:

- docs/operator-guides/track-a-ai-use-cases-and-model-routing-guide-v0.1.0.md
- docs/operator-guides/track-a-multi-model-environment-execution-guide-v0.1.0.md

These guides do not override this engineering spec. They operationalize it. If drift appears between these files and this spec, this spec must be updated or the derived operator guides must be corrected so the implementation layer remains canonical.

### 12.1.1 Approved Track-A environment roles

The approved Track-A environment role assignments are:

- Perplexity Pro: citation-first acquisition and source validation
- Grok Premium / SuperGrok: social, Reddit, ecosystem, and emerging-signal extraction
- Claude Pro: deep synthesis, contradiction review, and long-document reasoning
- ChatGPT Plus: compiler, normalizer, repository packaging, and handoff generation

### 12.1.2 Approved Track-A execution modes

The approved Track-A execution modes are:

- Mode A: single model / single chat
- Mode B: single model / multi chat
- Mode C: multi model / multi environment

### 12.1.3 Minimum transfer-packet contract

Any environment-to-environment transfer must include at minimum:

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

No cross-environment continuation is valid if it depends only on implicit chat memory.

### 12.1.4 Minimum restart-state contract

A valid restart point must reload at minimum:

- current governing docs
- current run_id
- current execution_mode
- current artifact targets
- latest transfer packet or handoff
- latest accepted upstream outputs
- unresolved items
- last valid gate state

Restart must occur from the last valid gate rather than ad hoc conversational memory.

### 12.1.5 Contradiction disposition classes

Until replaced by a later schema version, contradiction records must use one of these disposition classes:

- unresolved
- source-conflict
- weak-signal-not-confirmed
- evidence-gap
- resolved-in-favor-of-primary-source
- resolved-in-favor-of-cross-validated-source
- compiler-overreach-corrected

### 12.1.6 Environment handoff minimum fields

A valid end-of-session or cross-chat handoff must include:

- completed_work
- pending_work
- next_files_to_modify
- current_version_references
- unresolved_risks_and_questions
- repo_state
- active_execution_mode
- next_recommended_route

### 12.1.7 Post-guide artifact sequence

After operator-guide completion, the next deterministic artifact families are created in this order:

1. schemas/run-manifest
2. schemas/evidence-ledger
3. schemas/contradiction-log
4. prompts/acquisition
5. prompts/synthesis
6. prompts/validation
7. prompts/compiler

This order is part of the current Track-A implementation sequence and must not be changed silently.
