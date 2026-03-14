# Handoff Note Schema

version: 0.1.0
status: draft

## Purpose

This schema defines the canonical handoff note artifact for deterministic Track A runs.

The handoff note preserves restart-safe continuity between sessions, chats, operators, and environments.

## Required Fields

- schema_version
- artifact_type
- handoff_id
- run_id
- project
- completed_work
- pending_work
- next_files_to_modify
- current_version_references
- unresolved_risks_and_questions
- repo_state
- active_execution_mode
- next_recommended_route
- review_state

## Field Semantics

### completed_work

Closed work already accepted into the current run state.

### pending_work

Open work that remains inside the current route.

### next_files_to_modify

The exact next file targets, relative to repo root.

### current_version_references

Canonical version anchors that the next session must load before making changes.

### unresolved_risks_and_questions

Explicit risk and ambiguity carry-forward list.

### repo_state

Current git and terminal state required for restart safety.

### active_execution_mode

One of the approved Track A execution modes.

### next_recommended_route

The next environment, task class, or artifact family to execute.

### review_state

- not_reviewed
- in_review
- approved
- approved_with_notes
- rejected
