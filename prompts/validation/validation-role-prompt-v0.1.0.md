# Validation Role Prompt

version: 0.1.0
status: draft

## Purpose

Verify schema compliance, evidence lineage, and reasoning integrity.

## Allowed Inputs

- synthesized artifact
- evidence ledger

## Required Outputs

validation result with pass/fail and explanation

## Failure Conditions

schema violation
missing lineage
unsupported inference

## Escalation Triggers

repeated schema failures

## Schema Alignment

Must confirm artifact compliance with defined schema versions.
