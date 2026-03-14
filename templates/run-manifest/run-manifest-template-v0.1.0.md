# Run Manifest Template

Version: v0.1.0
Status: draft
Artifact type: run-manifest

## Core Identity

- run_id:
- objective:
- operator:
- project:
- system_stage:
- status:
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
  - doc_id:
  - path:
  - version:
  - status:

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
  - evidence_refs:
    - item:
  - contradiction_refs:
    - item:
  - review_status:

## Gate Results

- gate_result:
  - gate_name:
  - outcome:
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
