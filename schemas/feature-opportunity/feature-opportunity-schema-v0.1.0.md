# Feature Opportunity Schema

version: 0.1.0
status: draft

## Canonical Artifact Class

- feature-opportunity

## Allowed Artifact Status Values

- draft
- in-review
- validated
- blocked
- invalidated
- published

## Purpose

Translate pain points and market constraints into a structured feature/opportunity map that informs server design recommendations.

## Required Root Fields

- schema_version
- artifact_type
- status
- opportunity_set_id
- scope (object: segment_id, optional region_id, timeWindow)
- opportunities (array)
- evidence_refs (array of evidence bundle ids)
- unresolved_items (array)

## Opportunity Object (Required Fields)

Each opportunity entry must include:

- featureLabel
- description
- mapped_pain_points (array of pain point labels or ids)
- expected_value (low | medium | high)
- feasibility (low | medium | high)
- time_horizon (near | mid | long)
- design_traits (array)
- risks (array)
- evidence_refs (array)
