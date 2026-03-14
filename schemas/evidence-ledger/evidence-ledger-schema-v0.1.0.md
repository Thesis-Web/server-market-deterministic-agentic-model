# Evidence Ledger Schema

version: 0.1.0
status: draft

## Purpose

Track evidence lineage for acquisition, normalization, synthesis, contradiction review, and compilation.

## Required Fields

- schema_version
- artifact_type
- entries

## Entry Required Fields

Each evidence ledger entry must include:

- evidence_id
- source_title
- source_type
- source_tier
- observed_date
- retrieved_by_model
- retrieved_in_environment
- used_in_artifacts
- claim_class
- notes

## Source Tier Values

- tier1
- tier2
- tier3
- tier4
- tier5
