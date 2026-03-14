# Contradiction Log Schema

version: 0.1.0
status: draft

## Purpose

Track contradictions, evidence gaps, and resolution outcomes across deterministic runs.

## Required Fields

- schema_version
- artifact_type
- entries

## Entry Required Fields

Each contradiction entry must include:

- contradiction_id
- conflicting_sources
- description
- disposition
- related_artifacts
- notes

## Disposition Values

- unresolved
- source-conflict
- weak-signal-not-confirmed
- evidence-gap
- resolved-in-favor-of-primary-source
- resolved-in-favor-of-cross-validated-source
- compiler-overreach-corrected
