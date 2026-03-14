# Checksum Ledger Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical checksum ledger artifact for deterministic research runs.

The checksum ledger records artifact integrity data used for validation, replay, auditability, and restart confidence.

## Required Fields

- schema_version
- artifact_type
- checksum_ledger_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Entry Required Fields

Each checksum ledger entry must include:

- artifact_id
- artifact_path
- artifact_type
- checksum_algorithm
- checksum_value
- generated_at
- generated_by
- notes

## Allowed Values

### checksum_algorithm

- sha256

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
