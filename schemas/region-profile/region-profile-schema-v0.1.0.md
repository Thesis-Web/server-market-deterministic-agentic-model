# Region Profile Schema

version: 0.1.0
status: draft

## Purpose

Define a normalized regional constraint and deployment profile used to condition server recommendations (compliance, power, import/export, certifications, environment, logistics).

## Required Fields

- region_id
- region_name
- region_type (country | bloc | subregion | state-province | metro)
- effective_date
- evidence_refs (array of evidence bundle ids)
- constraints (object)
- deployment_realities (object)
- compliance_and_certifications (array)
- unresolved_items (array)

## Recommended Sections

### Constraints

- export_controls
- import_duties
- data_sovereignty
- encryption_restrictions
- radio_emissions_standards
- safety_standards
- environmental_standards

### Deployment Realities

- grid_stability
- typical_power_density
- cooling_assumptions
- ambient_temp_bands
- logistics_notes
- serviceability_notes

### Notes

- observed_facts
- derived_implications
- scenario_hypotheses
