# Feature Opportunity Schema

version: 0.1.0
status: draft

## Purpose

Translate pain points and market constraints into a structured feature/opportunity map that informs server design recommendations.

## Required Fields

- opportunitySetId
- scope (object: segmentId, optional regionId, timeWindow)
- opportunities (array)
- evidenceRefs (array of evidence bundle ids)
- unresolvedItems (array)

## Opportunity Object (Required Fields)

Each opportunity entry must include:

- featureLabel
- description
- mappedPainPoints (array of pain point labels or ids)
- expectedValue (low | medium | high)
- feasibility (low | medium | high)
- timeHorizon (near | mid | long)
- designTraits (array)
- risks (array)
- evidenceRefs (array)
