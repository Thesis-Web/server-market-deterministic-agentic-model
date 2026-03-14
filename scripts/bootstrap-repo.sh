#!/usr/bin/env bash
set -euo pipefail

mkdir -p \
  .github/workflows \
  docs/blueprints \
  docs/engineering-specs \
  docs/operator-guides \
  docs/project-constitution \
  prompts/acquisition \
  prompts/normalization \
  prompts/synthesis \
  prompts/validation \
  prompts/contradiction \
  prompts/compiler \
  prompts/handoff \
  schemas/evidence-ledger \
  schemas/market-segment \
  schemas/recommendation \
  schemas/run-manifest \
  templates/run-control \
  templates/output \
  manifests \
  logs \
  runs \
  outputs \
  scripts \
  src

cat > README.md <<'EOT'
# server-market-deterministic-agentic-model

Version: 0.1.0  
Status: bootstrap baseline  
Date: 2026-03-13

## Purpose

This repository is the deterministic build anchor for an AI-first, multi-model market-research operating system for server product strategy.

The system is designed to produce evidence-backed outputs for server systems product management, market intelligence, technical marketing, engineering liaison, and executive review.

## Operating stance

- AI-first
- human-supervised
- deterministic
- restartable
- schema-first
- evidence-first
- auditable
- replay-oriented

## Repository scope

This repository will hold:

- project constitution
- blueprint pack
- engineering spec pack
- prompts
- schemas
- templates
- manifests
- logs
- runs
- outputs
- validation scripts
- later orchestration/runtime code

## Initial bootstrap gates

Phase 1 CI enforces:

- markdown formatting check
- markdown lint
- JSON/YAML validation
- TypeScript typecheck
- repository structure validation

## Non-negotiables

- personal IP of the project owner
- no silent architecture drift
- no uncontrolled prompt improvisation in live runs
- no publishable artifact without manifest and review state
- restart from last valid gate
EOT

cat > .editorconfig <<'EOT'
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
EOT

cat > .gitignore <<'EOT'
node_modules/
dist/
coverage/
*.log
.DS_Store
.env
.env.*
!.env.example
.npm/
outputs/**
!outputs/.gitkeep
logs/**
!logs/.gitkeep
runs/**
!runs/.gitkeep
.manifests-cache/
EOT

cat > .prettierrc.json <<'EOT'
{
  "printWidth": 100,
  "proseWrap": "preserve",
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}
EOT

cat > .prettierignore <<'EOT'
node_modules
dist
coverage
EOT

cat > .markdownlint.json <<'EOT'
{
  "default": true,
  "MD013": false,
  "MD024": false,
  "MD033": false,
  "MD041": false
}
EOT

cat > .nvmrc <<'EOT'
20
EOT

cat > package.json <<'EOT'
{
  "name": "server-market-deterministic-agentic-model",
  "version": "0.1.0",
  "private": true,
  "description": "Deterministic AI-first market research operating system for server product strategy.",
  "license": "UNLICENSED",
  "packageManager": "npm@10.8.2",
  "engines": {
    "node": ">=20 <21"
  },
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint:md": "markdownlint-cli2 \"**/*.md\"",
    "typecheck": "tsc --noEmit",
    "validate:json-yaml": "node ./scripts/validate-json-yaml.mjs",
    "validate:structure": "node ./scripts/validate-repo-structure.mjs",
    "ci:gate": "npm run format:check && npm run lint:md && npm run validate:json-yaml && npm run validate:structure && npm run typecheck"
  },
  "devDependencies": {
    "markdownlint-cli2": "^0.18.0",
    "prettier": "^3.5.3",
    "typescript": "^5.8.2",
    "yaml": "^2.7.0"
  }
}
EOT

cat > tsconfig.json <<'EOT'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noEmit": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts", "scripts/**/*.mts", "scripts/**/*.ts"]
}
EOT

cat > src/index.ts <<'EOT'
export const projectIdentity = {
  name: 'server-market-deterministic-agentic-model',
  version: '0.1.0',
  status: 'bootstrap-baseline',
} as const;
EOT

cat > scripts/validate-repo-structure.mjs <<'EOT'
import fs from 'node:fs';
import path from 'node:path';

const requiredPaths = [
  'README.md',
  '.editorconfig',
  '.gitignore',
  '.prettierrc.json',
  '.prettierignore',
  '.markdownlint.json',
  '.nvmrc',
  'package.json',
  'tsconfig.json',
  '.github/workflows/ci.yml',
  'docs',
  'docs/blueprints',
  'docs/engineering-specs',
  'docs/operator-guides',
  'docs/project-constitution',
  'prompts',
  'schemas',
  'templates',
  'manifests',
  'logs',
  'runs',
  'outputs',
  'scripts',
  'src'
];

const missing = requiredPaths.filter((p) => !fs.existsSync(path.resolve(p)));

if (missing.length > 0) {
  console.error('Missing required repository paths:');
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log('Repository structure validation passed.');
EOT

cat > scripts/validate-json-yaml.mjs <<'EOT'
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const exts = new Set(['.json', '.yml', '.yaml']);
const ignoredDirs = new Set(['node_modules', '.git', 'dist', 'coverage']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else {
      const ext = path.extname(entry.name);
      if (exts.has(ext)) out.push(full);
    }
  }
  return out;
}

const files = walk(process.cwd());
const failures = [];

for (const file of files) {
  const ext = path.extname(file);
  const raw = fs.readFileSync(file, 'utf8');
  try {
    if (ext === '.json') {
      JSON.parse(raw);
    } else {
      YAML.parse(raw);
    }
  } catch (error) {
    failures.push({ file, error: error instanceof Error ? error.message : String(error) });
  }
}

if (failures.length > 0) {
  console.error('JSON/YAML validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure.file}: ${failure.error}`);
  }
  process.exit(1);
}

console.log('JSON/YAML validation passed.');
EOT

cat > .github/workflows/ci.yml <<'EOT'
name: CI

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
  workflow_dispatch: {}

jobs:
  quality-gate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run deterministic quality gate
        run: npm run ci:gate
EOT

cat > docs/project-constitution/server-market-project-constitution-v0.1.0.md <<'EOT'
# Project Constitution — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: draft canonical baseline  
Date: 2026-03-13

## 1. Mission

Build a deterministic AI-first market-research operating system for server product strategy.

## 2. Control stance

The system is governed by:

- deterministic file structures
- versioned prompts, schemas, and templates
- explicit manifests
- explicit gates
- checksum-oriented auditability
- contradiction logging
- restartability from last valid gate

## 3. Human role

The human is the operator, reviewer, and escalation authority, not the primary analytical processor.

## 4. Evidence stance

Outputs must distinguish:

- observed fact
- cross-source validated fact
- derived implication
- scenario hypothesis

Evidence tiers must be preserved.

## 5. Change control

No silent changes to:

- artifact classes
- schema shapes
- naming systems
- run protocol
- controls/gates
- architecture logic

Any structural change must be reflected across blueprint, engineering spec, prompts, schemas, and relevant templates.

## 6. Non-negotiables

- personal IP of the project owner
- no uncontrolled prompt improvisation in live runs
- no publishable artifact without manifest and review state
- no final recommendation without evidence tagging
- restart from last valid gate
- no silent drift across governing documents

## 7. Baseline artifact families

- constitution
- blueprint pack
- engineering spec pack
- prompt pack
- schema pack
- templates
- manifests
- logs
- runs
- outputs
EOT

cat > docs/project-constitution/server-market-project-instructions-v0.1.0.md <<'EOT'
# Project Instructions — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: draft canonical baseline  
Date: 2026-03-13

## 1. Behavioral contract

The system must prioritize:

- precision over speed
- determinism over improvisation
- evidence over unsupported inference
- restartability over convenience
- cross-file consistency over local optimization

## 2. Required operating behavior

Every meaningful work phase must preserve:

- version metadata
- normalized naming
- explicit section structure
- unresolved-item visibility
- gate status visibility
- handoff continuity

## 3. Required output classes

The repository will support production of:

- market segment dossiers
- regional requirement briefs
- vendor landscapes
- pain-point matrices
- recommendation briefs
- evidence ledgers
- contradiction logs
- run manifests
- executive-ready outputs

## 4. File-governance rule

Governing docs in docs/project-constitution, docs/blueprints, and docs/engineering-specs override conversational drift.

## 5. Failure rule

On failure, stop, log, preserve state, and resume from last valid gate rather than rebuilding from memory.
EOT

cat > docs/project-constitution/project-outline-v0.1.0.md <<'EOT'
# Project Outline — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Project Identity

Project name: server-market-deterministic-agentic-model

Working purpose: build an AI-first, deterministic, multi-model market-research operating system for server product strategy. The initial customer persona is a server systems product manager operating between executive leadership, engineering, product, sales, marketing, operations, and market intelligence.

This project exists to answer, with evidence and traceability:
- what server classes should be built or revised
- for which markets and geographies
- with which hardware, serviceability, thermal, power, density, manageability, compliance, and lifecycle traits
- against which competitors and regional constraints
- with what TAM, SAM, SOM, and strategic rationale

## 2. Strategic Objective

Design and prove a system that produces board-level and product-manager-level outputs from deterministic AI workflows rather than ad hoc human-led research.

The system must be:
- AI-first
- human-supervised
- deterministic
- restartable
- source-traceable
- auditable
- scalable from retail UI use into agentic API orchestration

## 3. Core Design Thesis

The human is not the primary processor. The human is the operator, reviewer, and escalation layer.

The models are the primary processing fabric.

All instructions, file structures, task sequencing, schemas, and gates are therefore designed for model performance first, with human usability as an interface requirement rather than the core design center.

## 4. System Tracks

### Track A — Retail / Manual / Human-Interface System

This is the first proving system.

It uses:
- ChatGPT projects
- Grok workspaces / collections / structured prompt packs
- Perplexity spaces or equivalent research threads
- optionally Claude projects
- optionally Gemini gems or large-context workflows

It is run manually but under rigid deterministic procedure.

### Track B — Agentic / API / Orchestrated System

This is the second system.

It formalizes the successful behaviors from Track A into:
- programmable orchestration
- task graphs
- stateful execution
- replayable research runs
- automatic validation
- cost control
- model routing
- evidence lineage

## 5. Primary Outcome Classes

The project must eventually emit at least the following artifact families:
- executive market brief
- product manager working brief
- market segment dossier
- regional requirement brief
- competitive vendor landscape
- customer pain-point matrix
- server recommendation matrix
- forecast shift report
- build/no-build prioritization report
- assumptions and risk register
- evidence ledger appendix

## 6. Scope Domains

The project will cover, at minimum:
- enterprise general workloads
- near-edge servers
- far-edge servers
- high-performance servers
- adjacent optional categories if later approved, such as AI inference, sovereign deployments, or specialized regulated infrastructure

The project will evaluate, at minimum:
- TAM, SAM, SOM
- market demand and segment characteristics
- regional differences in regulations, export limits, certifications, and deployment realities
- competitive server vendors and their market positions
- customer pain points and buying drivers
- serviceability, uptime, downtime, maintenance, and lifecycle needs
- thermal, power, and energy constraints
- chipset and platform directionality
- ecosystem and integration expectations
- forward-looking market shift signals

## 7. Research and Analysis Layers

The operating system is divided into these layers:

1. Control layer  
   Rules, naming, versioning, manifests, gates, logs, checksums, anti-loop controls.

2. Acquisition layer  
   Market, regulatory, vendor, operator, ecosystem, and competitive evidence gathering.

3. Structuring layer  
   Normalization into canonical schemas and evidence classes.

4. Reasoning layer  
   Cross-source comparison, pain-point mapping, segment synthesis, recommendation building.

5. Recommendation layer  
   Product-strategy outputs and server design implications.

6. Audit layer  
   Source lineage, artifact hashes, run logs, confidence scoring, unresolved items.

## 8. Evidence Hierarchy

All conclusions must be tagged by evidence tier.

Suggested evidence tiers:
- Tier 1: primary source documents, official vendor documentation, regulations, standards, financial filings, public procurement records
- Tier 2: reputable analyst and industry publications
- Tier 3: technical press, ecosystem reporting, engineering presentations, conference materials
- Tier 4: community/operator discussion, anecdotal field feedback, forum evidence
- Tier 5: model-derived inference only

The system must distinguish between:
- observed fact
- cross-source validated fact
- derived implication
- scenario hypothesis

## 9. Deterministic Operating Requirements

The system must enforce:
- versioned prompts
- versioned schemas
- versioned templates
- run IDs
- artifact IDs
- checksum manifests
- contradiction logs
- anti-loop retry ceilings
- gate-based progression
- explicit unresolved-issue tracking
- restart-from-last-valid-gate procedures

## 10. Project Deliverable Streams

This repository should eventually contain:
- project constitution
- blueprint pack
- engineering spec pack
- prompt pack
- schema pack
- operator guide pack
- model-specific setup guides
- run-control templates
- output templates
- CI/CD and repository quality gates
- future agentic architecture and implementation plan

## 11. Initial File Families

At minimum, the project needs the following normalized file families:
- project-outline.md
- blueprint-outline.md
- engineering-specs-outline.md
- project-instructions-outline.md
- project-memory-outline.md
- repo-bootstrap-outline.md
- prompts-and-schema-outline.md
- agentic-architecture-outline.md

## 12. Recommended Technical Direction

Recommended language stance:
- primary: TypeScript strict
- secondary utility layer: Python
- optional later specialized workers: Go

## 13. Repository Evolution Sequence

The deterministic sequence from here should be:

1. normalize outlines into canonical markdown files
2. create repo constitution files
3. create blueprint and engineering spec v0.1.0 documents
4. bootstrap repository structure
5. add formatting, linting, and CI gates
6. establish manifest and checksum protocols
7. define model-specific operator procedures
8. begin first blueprint drafting
9. begin first engineering spec drafting
10. only then start prototype execution workflows

## 14. Immediate Next Actions

Immediate next actions after these outline files:
- initialize repo structure
- create root README
- create .editorconfig
- create prettier config
- create markdownlint config
- create TypeScript strict config scaffold if code layer is created immediately
- create CI workflow for formatting, linting, and structural checks
- create initial docs tree for blueprint and spec drafting
- create manifest/log/template directories

## 15. Non-Negotiables

- this system is personal IP of the user
- no uncontrolled prompt improvisation inside live runs
- no final recommendation without evidence tagging
- no publishable artifact without manifest and review state
- no silent drift between blueprint, engineering spec, prompts, and outputs
- restart from last valid gate, not from ad hoc memory
EOT

cat > docs/blueprints/blueprint-outline-v0.1.0.md <<'EOT'
# Blueprint Outline — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Blueprint Pack Structure

The project should produce at least two blueprint-class documents.

1. AI-First Human-Interface Market Research Operating System Blueprint
2. Agentic Multi-Model Research Orchestration Blueprint

This file defines the structure both blueprints should follow.

## 2. Blueprint 1 — AI-First Human-Interface Operating System

### 2.1 Purpose

Define the retail/manual operating system that runs in commercial model interfaces using projects, files, instructions, memory population, and deterministic operator procedures.

### 2.2 Problem Statement

Server-market strategy work is usually fragmented across human researchers, product managers, market analysts, and disconnected notes. This blueprint defines a constrained AI-first operating system that produces repeatable, evidence-driven market outputs with the human acting as operator and escalation layer rather than primary analyst.

### 2.3 Users

Primary user:
- server systems product manager

Secondary users:
- market intelligence
- product strategy
- technical marketing
- architecture liaison
- engineering leadership
- business planning

### 2.4 Design Principles

Must include and explain:
- AI-first design
- human-as-interface
- determinism over improvisation
- evidence-first outputs
- schema-first normalization
- restartability
- explicit auditability
- bounded inference
- traceable recommendations

### 2.5 Capability Goals

The blueprint must describe how the system:
- gathers market and regulatory evidence
- normalizes evidence into schemas
- synthesizes segment findings
- maps pain points to design traits
- develops region-aware server recommendations
- produces executive-safe outputs
- preserves evidence lineage

### 2.6 Functional Modules

Blueprint 1 should include modules for:
- control and governance
- model-role routing
- acquisition workflows
- structuring workflows
- validation workflows
- recommendation compilation
- operator guidance
- failure recovery
- artifact publication

### 2.7 Workflow Phases

Blueprint 1 should define phases such as:
- constitution and setup
- market map definition
- acquisition runs
- normalization runs
- segment analysis runs
- cross-segment synthesis
- recommendation drafting
- validation and contradiction review
- publication and handoff

### 2.8 Deliverable Classes

Must define outputs and their intended audience.

### 2.9 Model Role Matrix

Must define which models are used for:
- acquisition
- normalization
- synthesis
- proofing
- final packaging

### 2.10 Constraints and Non-Goals

Must state what the manual system is not trying to do yet.

### 2.11 Human Operator Role

Must define operator duties, decisions, and limits.

### 2.12 Audit and Traceability

Must define what evidence and log data accompany each output.

## 3. Blueprint 2 — Agentic Multi-Model Research Orchestration

### 3.1 Purpose

Define the future state in which the proven manual operating system is translated into programmatic orchestration without losing determinism.

### 3.2 Core Thesis

The agentic system does not invent new behavior. It automates already-approved operating behavior from Blueprint 1.

### 3.3 Architectural Domains

Blueprint 2 should cover:
- orchestration layer
- state and task graph layer
- evidence store
- artifact store
- validation layer
- contradiction detection
- retry and anti-loop protections
- human escalation layer
- output compilation layer

### 3.4 Agent Classes

Should define likely agent classes such as:
- controller
- acquisition agent
- normalization agent
- synthesis agent
- validation agent
- contradiction agent
- compiler agent
- reviewer/escalation gate

### 3.5 Run Life Cycle

Should describe:
- task creation
- task dispatch
- result validation
- task chaining
- retry policy
- contradiction handling
- human review branches
- artifact publication

### 3.6 Data Contracts

Should define the need for typed task objects, manifests, artifact references, and evidence envelopes.

### 3.7 Enterprise Readiness

Must cover:
- auditability
- replayability
- cost control
- failure isolation
- access control concepts
- service evolution path

### 3.8 Migration Path

Must describe how the project moves from manual system to orchestrated system without re-architecting the entire logic stack.

## 4. Blueprint Section Template

Each blueprint should use this normalized section order:

1. Title and metadata  
2. Executive summary  
3. Problem statement  
4. System mission  
5. Users and stakeholders  
6. Design principles  
7. Scope and non-goals  
8. Functional architecture  
9. Workflow phases  
10. Roles and responsibilities  
11. Deliverables  
12. Controls and gates  
13. Risks and mitigations  
14. Future evolution  
15. Appendix references

## 5. Blueprint Completion Criteria

A blueprint is not complete unless:
- scope is explicit
- human role is explicit
- model role matrix is explicit
- phases are explicit
- controls are explicit
- outputs are explicit
- failure handling is explicit
- migration path is explicit where applicable
EOT

cat > docs/engineering-specs/engineering-specs-outline-v0.1.0.md <<'EOT'
# Engineering Specs Outline — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Engineering Spec Pack Structure

The project should produce at least two engineering-spec documents.

1. Retail/Manual Multi-Model Implementation Spec
2. Agentic Orchestration, Validation, and Replay Spec

This file defines the structure both engineering specs should follow.

## 2. Engineering Spec 1 — Retail/Manual Multi-Model Implementation

### 2.1 Purpose

Define the exact file, prompt, schema, log, naming, and operator procedures required to run the AI-first human-interface system deterministically.

### 2.2 Repository/File Structure

The spec should define the initial repository structure, including likely directories such as:
- docs/
- docs/blueprints/
- docs/engineering-specs/
- docs/operator-guides/
- docs/project-constitution/
- prompts/
- schemas/
- templates/
- manifests/
- logs/
- runs/
- outputs/
- scripts/

### 2.3 Canonical Artifact Types

The spec should define all artifact classes, including:
- market segment definition
- region profile
- vendor landscape
- pain-point matrix
- feature opportunity map
- recommendation brief
- shift signal note
- evidence ledger
- contradiction log
- run manifest
- handoff note

### 2.4 Naming Convention

The spec should define deterministic naming with fields such as:
- date
- market or region
- segment
- artifact class
- semantic version
- status

### 2.5 Prompt Packaging

The spec should define modular prompt classes, such as:
- role prompt
- task prompt
- schema prompt
- validation prompt
- contradiction check prompt
- self-critique prompt
- compiler prompt

### 2.6 Schema Requirements

The spec should define canonical schema expectations for every major artifact family.

### 2.7 Run Protocol

The spec should define exact run metadata such as:
- run ID
- objective
- operator
- models used
- input bundle
- source window
- prompt package version
- artifact outputs
- gate results
- start/end timestamps

### 2.8 Logging

The spec should define:
- run log format
- event log format
- contradiction log format
- review log format
- failure log format
- checksum ledger format

### 2.9 Validation Gates

Must define gate classes and pass/fail rules.

Suggested gate classes:
- input gate
- evidence gate
- schema gate
- reasoning gate
- output gate
- publish gate

### 2.10 Operator Procedure

The spec should define the exact human operating sequence for each supported model environment.

### 2.11 Failure Recovery

The spec must define:
- when to retry
- when to stop
- when to escalate
- how to resume from last valid gate
- how to record invalidated artifacts

## 3. Engineering Spec 2 — Agentic Orchestration, Validation, and Replay

### 3.1 Purpose

Define the exact technical contracts and control mechanisms for a programmable, replayable, multi-model agentic implementation.

### 3.2 Core Runtime Components

Should specify components such as:
- orchestrator
- task queue or scheduler
- state store
- evidence store
- artifact store
- event logger
- validation engine
- contradiction engine
- checksum engine
- human-review gate
- compiler

### 3.3 Task Object Model

Should define required task fields such as:
- task ID
- run ID
- parent task ID
- task type
- model route
- input refs
- output refs
- checksum
- status
- retry count
- timestamps

### 3.4 Artifact Object Model

Should define:
- artifact ID
- artifact type
- producing task
- schema version
- hash
- confidence score
- evidence refs
- publication status

### 3.5 Event Model

Should define events such as:
- task queued
- task started
- model invoked
- model returned
- validation passed
- validation failed
- contradiction detected
- retry scheduled
- escalation required
- artifact published

### 3.6 Anti-Loop Controls

Must specify:
- retry ceilings
- identical-output detection
- no-progress detection
- circular-task prevention
- contradiction thresholds
- forced human intervention thresholds

### 3.7 Replay and Reproducibility

Must specify what is required to replay a run:
- same input set
- same prompt package version
- same schema versions
- same routing policy
- same model settings where controllable
- same validation rules

### 3.8 Cost and Routing Policy

Should define:
- default model routes by task type
- escalation routes
- low-cost mode
- high-certainty mode
- source-acquisition mode
- duplicate-call suppression

### 3.9 Security and Confidentiality

Should define internal handling expectations for proprietary project artifacts and customer-sensitive outputs.

### 3.10 Observability

Should define dashboards or reports needed later for:
- run health
- task health
- contradiction rates
- artifact publication stats
- model spend and routing patterns

## 4. Engineering Spec Section Template

Each engineering spec should use this normalized section order:

1. Title and metadata  
2. Purpose  
3. Scope  
4. Definitions and artifact taxonomy  
5. System structure  
6. Data contracts  
7. Run protocol  
8. Validation and controls  
9. Error handling and recovery  
10. Logging and auditability  
11. Security and confidentiality  
12. Implementation notes  
13. Open issues  
14. Appendices

## 5. Engineering Spec Completion Criteria

An engineering spec is not complete unless:
- file structures are explicit
- naming is explicit
- manifests are explicit
- schemas are explicit
- gate logic is explicit
- failure handling is explicit
- replay behavior is explicit where applicable
- logging and checksum requirements are explicit
EOT

cat > docs/project-constitution/repo-bootstrap-outline-v0.1.0.md <<'EOT'
# Repo Bootstrap Outline — server-market-deterministic-agentic-model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Repo Facts

Repository owner/user: thesis-web  
Repository name: server-market-deterministic-agentic-model  
Repository state: blank private repository already created  
README: not created yet  
CI/CD: not created yet

Droplet/repo working model:
- access via SSH to droplet
- droplet already has SSH config alias support
- repo work will be done via thesis-web account context

## 2. Bootstrap Goal

After the outline files are accepted, the next deterministic step is to bootstrap the repository so it can hold the constitution, blueprints, engineering specs, prompt packs, templates, schemas, logs, and later the code/runtime for the agentic system.

## 3. Recommended Initial Repository Layout

Suggested first structure:
- README.md
- .editorconfig
- .gitignore
- .prettierrc.json
- .prettierignore
- .markdownlint.json
- package.json
- tsconfig.json
- docs/
- prompts/
- schemas/
- templates/
- manifests/
- logs/
- scripts/
- src/
- .github/workflows/

## 4. Recommended CI/CD Phase 1

Phase 1 CI should be simple and deterministic.

Recommended initial gates:
- markdown formatting check
- markdown lint check
- JSON/YAML validity check where applicable
- TypeScript typecheck if src exists
- repository structure sanity check

## 5. Recommended Repository Standards

The repo bootstrap should establish:
- semantic versioning for canonical docs
- deterministic filenames
- prettier formatting
- markdownlint rules
- TypeScript strict configuration if code scaffold exists
- pinned Node version in package metadata or .nvmrc
- clean commit hygiene

## 6. Initial Bootstrap Deliverables

The first repo bootstrap pass should create:
- root README
- root package.json
- initial tsconfig with strict mode enabled
- docs tree
- prompts tree
- schemas tree
- templates tree
- workflow file for CI
- contributor/operator notes if needed

## 7. Immediate Post-Bootstrap Sequence

After bootstrap:
- commit baseline repo structure
- add project constitution files
- add blueprint outline and engineering spec outline into docs tree
- begin canonical Blueprint 1 drafting
- begin canonical Engineering Spec 1 drafting

## 8. Language Recommendation Summary

Recommended default stack for bootstrap:
- Node/TypeScript strict for primary implementation path
- markdown and JSON for canonical documents and manifests
- Python only when a clear utility need appears

This keeps the early repo coherent and supports later API orchestration cleanly.
EOT

cat > docs/project-constitution/prompts-and-schema-outline-v0.1.0.md <<'EOT'
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
EOT

cat > docs/project-constitution/agentic-architecture-outline-v0.1.0.md <<'EOT'
# Agentic Architecture Outline — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: Draft outline  
Date: 2026-03-13

## 1. Purpose

This file is the top-line architecture outline for the future API-based agentic system.

## 2. Core Thesis

The agentic system should be a formalized execution engine for already-proven manual operating behavior. It is not a speculative reinvention.

## 3. Candidate Runtime Domains

The future system will likely need these runtime domains:
- orchestration/controller
- task graph and scheduling
- model-routing policy engine
- source capture and evidence store
- normalization and validation layer
- contradiction detection layer
- artifact generation and publication layer
- observability and audit layer
- human escalation/review interface

## 4. Initial Agent Classes

Likely first-pass agent classes:
- controller agent
- acquisition agent
- normalization agent
- synthesis agent
- validation agent
- contradiction agent
- compiler agent
- review gate agent

## 5. Core Control Objects

The system will likely need typed objects for:
- run
- task
- artifact
- evidence bundle
- contradiction record
- review decision
- route policy
- checksum ledger entry

## 6. Control Philosophy

The agentic system must enforce:
- bounded retries
- no silent loops
- no hidden schema changes
- explicit route decisions
- explicit confidence tags
- explicit unresolved-item propagation

## 7. Evolution Path

Suggested staged evolution:
- Stage 0: manual deterministic system in retail tools
- Stage 1: local code scaffolds for manifests and validation
- Stage 2: scripted run helpers and artifact compilers
- Stage 3: partial orchestration of selected tasks
- Stage 4: fuller multi-model agentic orchestration
- Stage 5: enterprise-ready operationalization
EOT

cat > docs/operator-guides/operator-baseline-guide-v0.1.0.md <<'EOT'
# Operator Baseline Guide — Server Market Deterministic Agentic Model

Version: 0.1.0  
Status: draft baseline  
Date: 2026-03-13

## 1. Bootstrap use

This guide covers the initial repository bootstrap phase only.

## 2. Operator sequence

1. clone repo on droplet
2. run bootstrap script
3. install dependencies
4. run deterministic quality gate
5. review generated file tree
6. commit baseline
7. push to main

## 3. Failure handling

If any gate fails:
- stop
- correct the failing file or script
- rerun the full gate
- commit only after a clean pass

## 4. Continuation point

After bootstrap baseline is pushed, begin drafting Blueprint 1 and Engineering Spec 1.
EOT

cat > schemas/evidence-ledger/evidence-ledger.schema.json <<'EOT'
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "EvidenceLedger",
  "type": "object",
  "required": ["schemaVersion", "artifactType", "entries"],
  "properties": {
    "schemaVersion": { "type": "string" },
    "artifactType": { "type": "string", "const": "evidence-ledger" },
    "entries": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "tier", "claimType", "sourceRef"],
        "properties": {
          "id": { "type": "string" },
          "tier": { "type": "string" },
          "claimType": { "type": "string" },
          "sourceRef": { "type": "string" }
        },
        "additionalProperties": true
      }
    }
  },
  "additionalProperties": true
}
EOT

cat > schemas/market-segment/market-segment.schema.json <<'EOT'
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "MarketSegment",
  "type": "object",
  "required": ["schemaVersion", "artifactType", "segmentId", "segmentName"],
  "properties": {
    "schemaVersion": { "type": "string" },
    "artifactType": { "type": "string", "const": "market-segment" },
    "segmentId": { "type": "string" },
    "segmentName": { "type": "string" },
    "summary": { "type": "string" }
  },
  "additionalProperties": true
}
EOT

cat > schemas/recommendation/recommendation.schema.json <<'EOT'
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "RecommendationBrief",
  "type": "object",
  "required": ["schemaVersion", "artifactType", "recommendationId", "title"],
  "properties": {
    "schemaVersion": { "type": "string" },
    "artifactType": { "type": "string", "const": "recommendation-brief" },
    "recommendationId": { "type": "string" },
    "title": { "type": "string" },
    "summary": { "type": "string" }
  },
  "additionalProperties": true
}
EOT

cat > schemas/run-manifest/run-manifest.schema.json <<'EOT'
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "RunManifest",
  "type": "object",
  "required": ["schemaVersion", "artifactType", "runId", "objective"],
  "properties": {
    "schemaVersion": { "type": "string" },
    "artifactType": { "type": "string", "const": "run-manifest" },
    "runId": { "type": "string" },
    "objective": { "type": "string" },
    "modelsUsed": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "additionalProperties": true
}
EOT

cat > templates/run-manifest/run-manifest-template.json <<'EOT'
{
  "schemaVersion": "0.1.0",
  "artifactType": "run-manifest",
  "runId": "RUN-YYYYMMDD-0001",
  "objective": "",
  "modelsUsed": [],
  "inputBundle": [],
  "artifactOutputs": [],
  "gateResults": [],
  "timestamps": {
    "start": "",
    "end": ""
  }
}
EOT

cat > templates/output/recommendation-brief-template.md <<'EOT'
# Recommendation Brief

Version: 0.1.0  
Status: draft  
Date: YYYY-MM-DD

## Summary

## Context

## Evidence basis

## Recommendation

## Risks

## Unresolved items
EOT

touch manifests/.gitkeep logs/.gitkeep runs/.gitkeep outputs/.gitkeep
chmod +x scripts/bootstrap-repo.sh
