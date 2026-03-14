# Customer Pain-Point Schema

version: 0.1.0
status: draft

## Canonical Artifact Class

- customer-pain-point

## Allowed Artifact Status Values

- draft
- in-review
- validated
- blocked
- invalidated
- published

## Purpose

Normalize customer pain points for a segment and optionally a region, connecting pain → drivers → buying criteria → design implications.

## Required Root Fields

- schema_version
- artifact_type
- status
- pain_point_set_id
- scope (object: segment_id, optional region_id, timeWindow)
- pain_points (array)
- evidence_refs (array of evidence bundle ids)
- unresolved_items (array)

## Pain Point Object (Required Fields)

Each pain point entry must include:

- label
- description
- severity (low | medium | high | critical)
- frequency (rare | occasional | common | ubiquitous)
- buying_drivers (array)
- impacted_lifecycle_phase (procure | deploy | operate | maintain | refresh)
- design_implications (array)
- evidence_refs (array)
