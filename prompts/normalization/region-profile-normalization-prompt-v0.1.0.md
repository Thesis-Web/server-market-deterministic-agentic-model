# Region Profile Normalization Prompt

version: 0.1.0
status: draft

## Role

Normalization agent.

## Objective

Normalize regional constraints and deployment realities into the **Region Profile Schema**.

## Output schema (MUST)

- `schemas/region-profile/region-profile-schema-v0.1.0.md`

## Inputs (provided by operator)

- regionName
- regionType (country | bloc | subregion | state-province | metro)
- effectiveDate (YYYY-MM-DD)
- evidence bundle ids (runs/<run-id>/evidence/<bundle-id>/)

## Rules

- Output must be a single JSON object.
- Populate every required field in the schema.
- `evidenceRefs` must be a list of evidence bundle ids only (no URLs).
- Do not invent facts. If missing, record in `unresolvedItems`.
- Keep `constraints` and `deploymentRealities` as structured objects (not freeform blobs).
- If conflicting evidence exists, include the conflict in `unresolvedItems` and label it explicitly.

## Output (JSON only)

Return exactly one JSON object matching the schema.
