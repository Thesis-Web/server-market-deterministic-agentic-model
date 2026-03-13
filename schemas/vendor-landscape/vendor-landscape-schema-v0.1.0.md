# Vendor Landscape Schema

version: 0.1.0
status: draft

## Purpose

Normalize competitive landscape for a defined scope (segment + region + time window): vendors, positions, product lines, differentiators, constraints, risks.

## Required Fields

- landscapeId
- scope (object: segmentId, regionId, timeWindow)
- vendors (array)
- evidenceRefs (array of evidence bundle ids)
- unresolvedItems (array)

## Vendor Object (Required Fields)

Each vendor entry must include:

- vendorName
- vendorType (oem | odm | cloud | integrator | component | reseller)
- offeringsSummary
- positioningSummary
- differentiators (array)
- weaknesses (array)
- riskFlags (array)
- evidenceRefs (array)
