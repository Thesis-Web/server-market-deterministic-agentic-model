# Failure Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical failure log artifact for deterministic research runs.

The failure log records failures, blocked states, retry decisions, escalation points, invalidated outputs, and recovery actions taken during a run.

## Required Fields

- schema_version
- artifact_type
- failure_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each failure log entry must include:

- failure_entry_id
- event_timestamp
- failure_stage
- failure_type
- severity
- affected_object_id
- affected_object_type
- disposition
- retry_allowed
- escalation_required
- invalidated_artifacts
- notes

## Allowed Values

### failure_stage

- input
- acquisition
- normalization
- synthesis
- validation
- compilation
- review
- publication
- recovery

### failure_type

- input_error
- source_unavailable
- schema_validation_failure
- contradiction_unresolved
- routing_failure
- model_failure
- timeout
- gate_failure
- publication_block
- operator_stop

### severity

- low
- medium
- high
- critical

### affected_object_type

- run
- artifact
- schema
- template
- prompt-pack
- output
- source

### disposition

- logged
- retry_scheduled
- escalated
- invalidated
- recovered
- abandoned

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
