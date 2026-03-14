# Evidence Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical evidence log artifact for deterministic research runs.

The evidence log records evidence-capture events, source-ingestion actions, evidence updates, validation state changes, and evidence-to-artifact linkage activity during a run.

## Required Fields

- schema_version
- artifact_type
- evidence_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each evidence log entry must include:

- evidence_log_entry_id
- event_timestamp
- evidence_id
- source_title
- source_type
- source_tier
- action
- fact_status
- related_artifacts
- actor
- notes

## Allowed Values

### source_tier

- tier1
- tier2
- tier3
- tier4
- tier5

### action

- evidence_captured
- evidence_updated
- evidence_validated
- evidence_contradicted
- evidence_superseded
- evidence_linked_to_artifact

### fact_status

- captured
- validated
- contradicted
- superseded
- unresolved

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
