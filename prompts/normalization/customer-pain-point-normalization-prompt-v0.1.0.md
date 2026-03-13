# Customer Pain-Point Normalization Prompt

version: 0.1.0
status: draft

## Role

Normalization agent.

## Objective

Normalize customer pain points into the **Customer Pain-Point Schema** for a segment (and optionally region).

## Output schema (MUST)

- `schemas/customer-pain-point/customer-pain-point-schema-v0.1.0.md`

## Inputs (provided by operator)

- segmentId
- optional regionId
- timeWindow
- raw pain point notes (operator-provided)
- evidence bundle ids

## Rules

- Output must be a single JSON object.
- Populate every required field.
- `severity` must be one of: low | medium | high | critical
- `frequency` must be one of: rare | occasional | common | ubiquitous
- `impactedLifecyclePhase` must be one of: procure | deploy | operate | maintain | refresh
- Each pain point must have `designImplications` expressed as actionable statements.
- If a pain point is plausible but unsupported, keep it but add a note to `unresolvedItems` and use evidenceRefs appropriately (or leave evidenceRefs empty and mark unresolved).

## Output (JSON only)

Return exactly one JSON object matching the schema.
