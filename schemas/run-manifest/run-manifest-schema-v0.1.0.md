# Run Manifest Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical deterministic control object for a single run.

It is the restart anchor for:

- run identity
- model routing
- input scope
- artifact registration
- gate progression
- review state
- handoff continuity

## Required Fields

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

## Model Assignment Object

Each model assignment entry must include:

- platform
- plan_tier
- environment
- task_class
- role_type
- reason_for_route
- expected_outputs
- overlap_with
- status

## Artifact Output Object

Each artifact output entry must include:

- artifact_id
- artifact_type
- artifact_path
- version
- status
- producing_stage
- primary_model_origin
- secondary_model_origins
- evidence_refs
- contradiction_refs
- review_status

## Gate Result Object

Each gate result entry must include:

- gate_name
- outcome
- timestamp
- reviewer
- notes

## Allowed Values

### system_stage

- track-a-manual
- track-b-agentic

### status

- initialized
- in_progress
- blocked
- failed
- completed
- published

### execution_mode

- manual
- manual-overlap
- hybrid
- agentic

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
