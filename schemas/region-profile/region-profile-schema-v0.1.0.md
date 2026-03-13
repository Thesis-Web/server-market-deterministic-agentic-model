# Region Profile Schema

version: 0.1.0
status: draft

## Purpose

Define a normalized regional constraint and deployment profile used to condition server recommendations (compliance, power, import/export, certifications, environment, logistics).

## Required Fields

- regionId
- regionName
- regionType (country | bloc | subregion | state-province | metro)
- effectiveDate
- evidenceRefs (array of evidence bundle ids)
- constraints (object)
- deploymentRealities (object)
- complianceAndCertifications (array)
- unresolvedItems (array)

## Recommended Sections

### Constraints

- exportControls
- importDuties
- dataSovereignty
- encryptionRestrictions
- radioEmissionsStandards
- safetyStandards
- environmentalStandards

### Deployment Realities

- gridStability
- typicalPowerDensity
- coolingAssumptions
- ambientTempBands
- logisticsNotes
- serviceabilityNotes

### Notes

- observedFacts
- derivedImplications
- scenarioHypotheses
