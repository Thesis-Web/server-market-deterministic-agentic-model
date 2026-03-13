# Feature Opportunity Synthesis Prompt

version: 0.1.0
status: draft

## Role

Synthesis agent.

## Objective

Translate normalized pain points + constraints into a structured opportunity map using the **Feature Opportunity Schema**.

## Output schema (MUST)

- `schemas/feature-opportunity/feature-opportunity-schema-v0.1.0.md`

## Inputs (provided by operator)

- segmentId
- optional regionId
- timeWindow
- customer pain-point artifact JSON (path or pasted)
- region profile artifact JSON (path or pasted, optional)
- evidence bundle ids referenced by inputs

## Rules

- Output must be a single JSON object.
- Populate every required field.
- `mappedPainPoints` must reference pain point `label` values from the input.
- `expectedValue` must be: low | medium | high
- `feasibility` must be: low | medium | high
- `timeHorizon` must be: near | mid | long
- If an opportunity is inferred (Tier 5), mark that in wording and include it in `unresolvedItems` unless backed by Tier 1–4 evidence bundles.

## Output (JSON only)

Return exactly one JSON object matching the schema.
