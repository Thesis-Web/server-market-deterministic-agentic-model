# Run Manifest Template

Version: v0.1.0
Status: draft
Artifact type: run-manifest

## Required Root Fields

- schema_version
- artifact_type
- run_id
- objective
- operator
- project
- system_stage
- status
- execution_mode
- route_policy_id
- start_timestamp
- end_timestamp
- models_used
- model_assignments
- overlap_plan
- input_bundle_refs
- source_window
- prompt_pack_version
- schema_pack_version
- governing_docs_loaded
- artifact_outputs
- gate_results
- review_state
- handoff_ref
- unresolved_items

## Allowed Run Lifecycle States

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

## Operator Start Sequence

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

## Governing Files Required Before Meaningful Work

- docs/project-constitution/server-market-project-constitution-v0.1.0.md
- docs/project-constitution/server-market-project-instructions-v0.1.0.md
- docs/project-constitution/project-outline-v0.1.0.md
- docs/blueprints/blueprint-outline-v0.1.0.md
- docs/engineering-specs/engineering-specs-outline-v0.1.0.md
- docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md
- docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md

## Core Identity

- run_id:
- objective:
- operator:
- project:
- system_stage: stage-0-manual-deterministic
- status: initialized
- execution_mode:
- route_policy_id:

## Timing

- start_timestamp:
- end_timestamp:

## Model Routing

### models_used

- item:

### model_assignments

- assignment:
  - platform:
  - plan_tier:
  - environment:
  - task_class:
  - role_type:
  - reason_for_route:
  - expected_outputs:
    - item:
  - overlap_with:
    - item:
  - status:

## Overlap Plan

- overlap_required:
- reason:
- task_classes:
  - item:
- target_models:
  - item:
- expected_outcome:

## Input Bundle Refs

- input_bundle_ref:
  - ref_id:
  - ref_type:
  - path_or_location:
  - notes:

## Source Window

- window_label:
- start_date:
- end_date:
- notes:

## Version Anchors

- prompt_pack_version:
- schema_pack_version:

## Governing Docs Loaded

- governing_doc:
  - doc_id: project-constitution
  - path: docs/project-constitution/server-market-project-constitution-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: project-instructions
  - path: docs/project-constitution/server-market-project-instructions-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: project-outline
  - path: docs/project-constitution/project-outline-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: blueprint-outline
  - path: docs/blueprints/blueprint-outline-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: engineering-specs-outline
  - path: docs/engineering-specs/engineering-specs-outline-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: current-blueprint
  - path: docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md
  - version: v0.1.0
  - status: loaded
- governing_doc:
  - doc_id: current-engineering-spec
  - path: docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md
  - version: v0.1.0
  - status: loaded

## Artifact Outputs

- artifact_output:
  - artifact_id:
  - artifact_type:
  - artifact_path:
  - version:
  - status:
  - producing_stage:
  - primary_model_origin:
  - secondary_model_origins:
    - item:
  - supporting_model_origins:
    - item:
  - model_stage_contributions:
    - contribution:
      - stage: acquisition | normalization | synthesis | contradiction-review | compilation
      - model_origin:
      - notes:
  - evidence_refs:
    - item:
  - contradiction_refs:
    - item:
  - review_status:

## Gate Results

- gate_result:
  - gate_name: input-gate
  - outcome: pending
  - timestamp:
  - reviewer:
  - notes:

## Review State

- review_state:

## Handoff

- handoff_ref:

## Checksum Ledger Refs

- checksum_ledger_refs:
  - item:

## Notes

- notes:

## Unresolved Items

- unresolved_items:
  - item:

## Mode-Specific Fields

### Mode A

- primary_model:
- objective_scope:
- artifact_targets:
  - item:

### Mode B

- primary_model:
- chat_branch_map:
  - branch:
    - branch_id:
    - objective:
    - output_targets:
      - item:
    - notes:
- merge_strategy:
- artifact_targets:
  - item:

### Mode C

- transfer_checkpoints:
  - item:
- artifact_targets:
  - item:
