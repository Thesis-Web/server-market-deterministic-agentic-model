# Shift Signal Schema

version: 0.1.0
status: draft

## Purpose

Capture early signals of market/technology/regulatory shifts that may change server strategy assumptions.

## Required Fields

- signalSetId
- scope (object: segmentId, optional regionId, timeWindow)
- signals (array)
- evidenceRefs (array of evidence bundle ids)
- unresolvedItems (array)

## Signal Object (Required Fields)

Each signal entry must include:

- label
- category (market | regulatory | supply-chain | silicon | power | cooling | software | competitive)
- description
- directionality (tailwind | headwind | ambiguous)
- confidence (low | medium | high)
- timeHorizon (near | mid | long)
- potentialImpacts (array)
- evidenceRefs (array)
