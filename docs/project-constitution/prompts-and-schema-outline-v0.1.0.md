# Prompts and Schema Outline — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Purpose

This file outlines the prompt-pack and schema-pack structure that should be normalized early, even before full implementation.

## 2. Prompt Pack Families

The project should eventually define at least these prompt families:

- acquisition role prompt
- normalization role prompt
- synthesis role prompt
- validation role prompt
- contradiction-check prompt
- self-critique prompt
- compiler/output prompt
- handoff-generation prompt

## 3. Schema Pack Families

The project should eventually define at least these schemas:

- market segment schema
- region profile schema
- vendor landscape schema
- customer pain-point schema
- feature opportunity schema
- recommendation schema
- shift signal schema
- evidence ledger schema
- run manifest schema
- contradiction log schema

## 4. Prompt Design Rules

Prompt packs should be:

- modular
- role-specific
- task-bounded
- schema-aware
- easy to version
- easy to diff
- not monolithic

## 5. Schema Design Rules

Schemas should be:

- normalized
- explicit in required fields
- versioned
- designed for both markdown and future JSON compatibility
- suitable for validation and replay workflows

## 6. Early Priority

The first canonical schema candidates should likely be:

- evidence ledger
- market segment
- recommendation brief
- run manifest

These will anchor most of the rest of the system.
