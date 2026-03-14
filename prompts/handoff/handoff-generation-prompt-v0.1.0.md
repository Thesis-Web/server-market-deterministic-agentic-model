# Handoff Generation Prompt

version: 0.1.0
status: draft

## Purpose

Produce restart-safe handoff notes for deterministic Track A runs.

## Required Output Contract

Every handoff output must include, at minimum:

- completed_work
- pending_work
- next_files_to_modify
- current_version_references
- unresolved_risks_and_questions
- repo_state
- active_execution_mode
- next_recommended_route

## Rules

- Do not rely on conversational memory alone.
- Preserve exact next file targets relative to repo root.
- Preserve the current execution mode.
- Preserve unresolved risks explicitly.
- Preserve current version anchors explicitly.
- Preserve git and terminal state explicitly.
- Keep the handoff restart-safe and gate-aware.

## Schema Alignment

Output must align to:

- schemas/handoff-note/handoff-note.schema.json
- templates/run-control/handoff-note-template.json
