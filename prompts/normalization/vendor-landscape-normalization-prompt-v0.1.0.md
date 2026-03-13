# Vendor Landscape Normalization Prompt

version: 0.1.0
status: draft

## Role

Normalization agent.

## Objective

Normalize a competitive/vendor landscape into the **Vendor Landscape Schema** for a defined scope.

## Output schema (MUST)

- `schemas/vendor-landscape/vendor-landscape-schema-v0.1.0.md`

## Inputs (provided by operator)

- segmentId
- regionId
- timeWindow (freeform string, e.g. "2026H1")
- vendor notes (operator-provided)
- evidence bundle ids

## Rules

- Output must be a single JSON object.
- Populate every required field in the schema.
- `vendors[]` must include all required vendor object fields.
- `vendorType` must be one of: oem | odm | cloud | integrator | component | reseller
- No fabricated differentiators. If uncertain, put into `unresolvedItems` and mark confidence in wording.
- Every vendor entry must include `evidenceRefs` (bundle ids only).

## Output (JSON only)

Return exactly one JSON object matching the schema.
