# Run Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical run log artifact for deterministic research runs.

The run log records run lifecycle progression, major state changes, gate transitions, restart points, and operator-visible execution notes.

## Required Fields

- schema_version
- artifact_type
- run_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each run log entry must include:

- run_log_entry_id
- event_timestamp
- lifecycle_stage
- event_type
- event_status
- actor
- related_gate
- message
- notes

## Allowed Values

### lifecycle_stage

- initialized
- acquisition
- normalization
- synthesis
- validation
- compilation
- review
- publication
- recovery
- closed

### event_type

- run_started
- stage_entered
- stage_completed
- gate_evaluated
- restart_point_recorded
- run_paused
- run_resumed
- run_completed
- run_failed
- operator_note

### event_status

- info
- passed
- failed
- blocked
- resumed
- completed

### related_gate

- input-gate
- evidence-gate
- schema-gate
- reasoning-gate
- output-gate
- publish-gate
- none

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
