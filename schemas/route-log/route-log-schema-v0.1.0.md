# Route Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical route log artifact for Track A deterministic runs.

The route log records explicit route decisions, selected model assignment, alternate models considered, overlap requirements, operator rationale, and route outcome notes.

## Required Fields

- schema_version
- artifact_type
- route_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each route log entry must include:

- route_log_entry_id
- timestamp
- run_id
- task_class
- selected_model
- selected_environment
- selected_role
- alternate_models_considered
- overlap_required
- route_action
- route_reason
- operator_note

## Allowed Values

### route_action

- route_assigned
- route_confirmed
- overlap_added
- overlap_removed
- rerouted
- route_blocked
- route_completed

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
