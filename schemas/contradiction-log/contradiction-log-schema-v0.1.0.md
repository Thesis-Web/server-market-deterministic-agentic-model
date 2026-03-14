# Contradiction Log Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical contradiction log artifact for deterministic research runs.

The contradiction log records conflicting evidence, unresolved disputes, resolution status, and downstream artifact impact.

## Required Fields

- schema_version
- artifact_type
- contradiction_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each contradiction log entry must include:

- contradiction_id
- related_evidence_ids
- conflicting_claims
- contradiction_type
- severity
- disposition
- impacted_artifacts
- notes

## Allowed Values

### contradiction_type

- source_conflict
- interpretation_conflict
- timing_conflict
- model_inference_conflict
- evidence_gap

### severity

- low
- medium
- high
- critical

### disposition

- unresolved
- monitoring
- resolved_in_favor_of_primary_source
- resolved_in_favor_of_cross_validated_sources
- downgraded_to_hypothesis
- invalidated_output_corrected

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
