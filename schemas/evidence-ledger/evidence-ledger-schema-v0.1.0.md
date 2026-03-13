# Evidence Ledger Schema

version: 0.1.0
status: draft

## Purpose

Track evidence sources and lineage.

## Required Fields

- evidence_id
- source_title
- source_type
- evidence_tier
- publication_date
- extracted_fact
- citation_reference

## Optional Fields

- region
- vendor
- notes

## Evidence Rules

Each claim must reference a ledger entry.

## Future JSON Compatibility

Structured for JSON conversion.
