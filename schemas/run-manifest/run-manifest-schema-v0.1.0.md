# Run Manifest Schema

Version: v0.1.0  
Status: draft  
Artifact type: run-manifest

## Purpose

This schema defines the canonical control object for a single deterministic Track A or Track B run.

The run manifest is the authoritative state anchor for:

- run identity
- objective and scope
- platform routing
- model assignments
- artifact registration
- gate progression
- review state
- restart-from-last-valid-gate recovery

## Required Top-Level Fields

- `schema_version`
- `artifact_type`
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
- `review_state`
- `handoff_ref`
- `unresolved_items`

## Field Notes

### `run_id`

Pattern:
`run-YYYYMMDD-<scope>-<sequence>`

Example:
`run-20260314-global-0001`

### `system_stage`

Allowed values:

- `track-a-manual`
- `track-b-agentic`

### `status`

Allowed values:

- `initialized`
- `in_progress`
- `blocked`
- `failed`
- `completed`
- `published`

### `execution_mode`

Allowed values:

- `manual`
- `manual-overlap`
- `hybrid`
- `agentic`

### `models_used`

List of platform identifiers used in the run.

Example values:

- `perplexity-pro`
- `claude-pro`
- `chatgpt-plus`
- `grok-premium`

### `model_assignments`

Each entry records one model routing decision and must include:

- `platform`
- `plan_tier`
- `environment`
- `task_class`
- `role_type`
- `reason_for_route`
- `expected_outputs`
- `overlap_with`
- `status`

### `overlap_plan`

Records whether overlap is required and, if so, for which task classes and with which target models.

### `input_bundle_refs`

References the source input set used to start the run.

Examples:

- uploaded files
- source packets
- prior manifests
- previous handoff notes
- prompt packs

### `source_window`

Defines the acquisition or evidence window for the run.

Minimum fields:

- `window_label`
- `start_date`
- `end_date`
- `notes`

### `governing_docs_loaded`

Records the canonical documents explicitly loaded before run execution.

Each entry should include:

- `doc_id`
- `path`
- `version`
- `status`

### `artifact_outputs`

Each artifact registration entry must include:

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

### `gate_results`

Each gate result entry should include:

- `gate_name`
- `outcome`
- `timestamp`
- `reviewer`
- `notes`

Allowed gate outcomes:

- `pending`
- `passed`
- `failed`
- `waived`

### `review_state`

Explicit operator review state.

Allowed values:

- `not_reviewed`
- `in_review`
- `approved`
- `approved_with_notes`
- `rejected`

### `handoff_ref`

Reference to the latest handoff note associated with the run.

### `unresolved_items`

List of explicit unresolved issues carried forward to the next gate or next session.

## Validation Rules

A run manifest passes schema validation only if:

1. all required top-level fields are present
2. `artifact_type` equals `run-manifest`
3. `run_id` matches the canonical pattern
4. gate outcomes use allowed values
5. review state uses an allowed value
6. artifact registrations include lineage and review fields
7. unresolved items are preserved explicitly, even if empty

## Restart Rule

The run manifest is the restart anchor.

A resumed run must use the latest valid manifest together with:

- registered artifacts
- evidence ledger
- contradiction log
- checksum ledger
- latest handoff note
