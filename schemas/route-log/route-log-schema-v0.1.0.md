# Route Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical route log artifact for deterministic research runs.

The route log records model-routing decisions, environment assignments, overlap decisions, route changes, and rationale for task placement during a run.

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
- event_timestamp
- task_class
- assigned_platform
- assigned_environment
- assigned_role
- route_action
- route_reason
- overlap_targets
- notes

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
