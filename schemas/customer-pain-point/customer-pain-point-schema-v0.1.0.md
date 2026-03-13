# Customer Pain-Point Schema

version: 0.1.0
status: draft

## Purpose

Normalize customer pain points for a segment and optionally a region, connecting pain → drivers → buying criteria → design implications.

## Required Fields

- painPointSetId
- scope (object: segmentId, optional regionId, timeWindow)
- painPoints (array)
- evidenceRefs (array of evidence bundle ids)
- unresolvedItems (array)

## Pain Point Object (Required Fields)

Each pain point entry must include:

- label
- description
- severity (low | medium | high | critical)
- frequency (rare | occasional | common | ubiquitous)
- buyingDrivers (array)
- impactedLifecyclePhase (procure | deploy | operate | maintain | refresh)
- designImplications (array)
- evidenceRefs (array)
