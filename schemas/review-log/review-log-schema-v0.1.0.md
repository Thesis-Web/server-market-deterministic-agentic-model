# Review Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical review log artifact for Track A deterministic runs.

The review log records artifact and gate review decisions, reviewer disposition, blocking issues, follow-up actions, and review notes.

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
- artifact_id
- artifact_type_reviewed
- gate_name
- reviewer
- review_timestamp
- disposition
- blocking_issues
- follow_up_action
- notes

## Allowed Values

### gate_name

- input-gate
- evidence-gate
- schema-gate
- reasoning-gate
- output-gate
- publish-gate
- manual-review

### disposition

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
