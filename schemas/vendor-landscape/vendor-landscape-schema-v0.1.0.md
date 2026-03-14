# Vendor Landscape Schema

version: 0.1.0
status: draft

## Canonical Artifact Class

- vendor-landscape

## Allowed Artifact Status Values

- draft
- in-review
- validated
- blocked
- invalidated
- published

## Purpose

Normalize competitive landscape for a defined scope (segment + region + time window): vendors, positions, product lines, differentiators, constraints, risks.

## Required Root Fields

- schema_version
- artifact_type
- status
- landscape_id
- scope (object: segment_id, region_id, timeWindow)
- vendors (array)
- evidence_refs (array of evidence bundle ids)
- unresolved_items (array)

## Vendor Object (Required Fields)

Each vendor entry must include:

- vendor_name
- vendor_type (oem | odm | cloud | integrator | component | reseller)
- offerings_summary
- positioning_summary
- differentiators (array)
- weaknesses (array)
- risk_flags (array)
- evidence_refs (array)
