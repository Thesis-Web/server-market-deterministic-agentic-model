# Shift Signal Synthesis Prompt

version: 0.1.0
status: draft

## Role

Synthesis agent.

## Objective

Capture early indicators of change using the **Shift Signal Schema** for a segment (and optionally region).

## Output schema (MUST)

- `schemas/shift-signal/shift-signal-schema-v0.1.0.md`

## Inputs (provided by operator)

- segmentId
- optional regionId
- timeWindow
- signal notes / headlines / regulatory items (operator-provided)
- evidence bundle ids

## Rules

- Output must be a single JSON object.
- Populate every required field.
- `category` must be one of: market | regulatory | supply-chain | silicon | power | cooling | software | competitive
- `directionality` must be: tailwind | headwind | ambiguous
- `confidence` must be: low | medium | high
- `timeHorizon` must be: near | mid | long
- No unsupported certainty: if not well-supported, lower confidence and add to `unresolvedItems`.

## Output (JSON only)

Return exactly one JSON object matching the schema.
