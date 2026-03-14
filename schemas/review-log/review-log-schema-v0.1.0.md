# Review Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical review log artifact for deterministic research runs.

The review log records human review decisions, gate outcomes, approval status, rejection reasons, and required follow-up actions for artifacts and runs.

## Required Fields

- schema_version
- artifact_type
- review_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each review log entry must include:

- review_entry_id
- reviewed_object_id
- reviewed_object_type
- gate_name
- reviewer
- review_timestamp
- decision
- decision_reason
- follow_up_actions
- notes

## Allowed Values

### reviewed_object_type

- run
- artifact
- schema
- template
- prompt-pack
- output

### gate_name

- input-gate
- evidence-gate
- schema-gate
- reasoning-gate
- output-gate
- publish-gate
- manual-review

### decision

- approved
- approved_with_notes
- rejected
- needs_revision
- deferred

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
