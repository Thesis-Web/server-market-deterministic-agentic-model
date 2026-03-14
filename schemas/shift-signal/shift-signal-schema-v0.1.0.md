# Shift Signal Note Schema

version: 0.1.0
status: draft

## Canonical Artifact Class

- shift-signal-note

## Allowed Artifact Status Values

- draft
- in-review
- validated
- blocked
- invalidated
- published

## Purpose

Capture early signals of market/technology/regulatory shifts that may change server strategy assumptions.

## Required Root Fields

- schema_version
- artifact_type
- status
- signal_set_id
- scope (object: segment_id, optional region_id, timeWindow)
- signals (array)
- evidence_refs (array of evidence bundle ids)
- unresolved_items (array)

## Signal Object (Required Fields)

Each signal entry must include:

- label
- category (market | regulatory | supply-chain | silicon | power | cooling | software | competitive)
- description
- directionality (tailwind | headwind | ambiguous)
- confidence (low | medium | high)
- time_horizon (near | mid | long)
- potential_impacts (array)
- evidence_refs (array)
