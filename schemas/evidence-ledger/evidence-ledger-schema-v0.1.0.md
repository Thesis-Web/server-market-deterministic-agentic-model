# Evidence Ledger Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical evidence ledger artifact for Track A deterministic runs.

The evidence ledger records source capture, source tier, observation date, retrieval provenance, claim classification, artifact linkage, and unresolved evidence notes.

## Required Fields

- schema_version
- artifact_type
- ledger_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each evidence ledger entry must include:

- evidence_id
- source_title
- source_type
- source_tier
- observed_date
- source_locator
- retrieved_at
- retrieved_by_model
- retrieved_in_environment
- used_in_artifacts
- claim_class
- notes

## Allowed Values

### source_tier

- tier1
- tier2
- tier3
- tier4
- tier5

### claim_class

- observed_fact
- cross_validated_fact
- derived_implication
- scenario_hypothesis

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
