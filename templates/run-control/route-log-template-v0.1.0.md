# Route Log Template

version: 0.1.0
status: draft

## Required Root Fields

- schema_version
- artifact_type
- route_log_id
- run_id
- project
- entries
- review_state
- unresolved_items

## Required Entry Fields

- route_log_entry_id
- timestamp
- run_id
- task_class
- selected_model
- selected_environment
- selected_role
- alternate_models_considered
- overlap_required
- route_action
- route_reason
- operator_note
