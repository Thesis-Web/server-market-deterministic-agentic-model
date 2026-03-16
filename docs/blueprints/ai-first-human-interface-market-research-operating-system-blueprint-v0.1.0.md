# AI-First Human-Interface Market Research Operating System Blueprint

Version: v0.1.0  
Status: draft canonical realignment  
Date: 2026-03-14  
Author: OpenAI ChatGPT with human operator James

## 1. Executive summary

This blueprint defines Track A of the server-market-deterministic-agentic-model project as a manual, deterministic, AI-first operating system executed across commercial model interfaces.

Track A is the proving system. It is not ad hoc prompting, and it is not yet the future API orchestration layer. It is the controlled manual environment in which the operating rules, routing decisions, artifact classes, validation logic, and handoff discipline are proven before any deeper automation is attempted.

The central operating premise is fixed:

- the models perform the primary analytical work
- the human serves as operator, reviewer, and escalation authority
- outputs must preserve evidence lineage, artifact structure, and restartability
- later agentic behavior must automate proven Track A behavior rather than inventing a new architecture

Track A is formally expressed in three execution modes:

1. single-model / single-chat
2. single-model / multi-chat
3. multi-model / multi-environment

This three-mode structure is a refinement of the existing Track A thesis, not a new architecture. It preserves the project constitution, the project outline, and the migration path into Track B orchestration.

The approved Track A core model set for the current design state is:

- ChatGPT Plus
- Claude Pro
- Perplexity Pro
- Grok Premium

Within this manual operating system, the models are not treated as interchangeable. They are routed according to functional strengths, with intentional overlap where contradiction detection, drift detection, or evidentiary strengthening is required.

## 2. Problem statement

Server-market strategy work is normally fragmented across market reports, vendor collateral, regulatory material, field anecdotes, technical documents, competitive positioning, and executive interpretation. In standard practice, the human analyst becomes the primary processing bottleneck. This creates drift, inconsistent evidence handling, weak reproducibility, and recommendations that are difficult to audit.

That failure mode worsens when multiple commercial model environments are used without a deterministic operating system. The result is usually:

- source loss between environments
- inconsistent routing of tasks to models
- undocumented overlap and duplication
- weak restart behavior
- hidden contradictions
- non-normalized outputs that cannot be compared or replayed

This blueprint addresses that by defining a constrained manual system in which:

- the human is the interface, not the primary analytical processor
- each model has a bounded role profile
- artifact production follows normalized schema families
- validation is gate-based
- evidence lineage is explicit
- model-origin contribution is preserved
- restart happens from the last valid gate rather than conversational memory

## 3. System mission

The mission of Track A is to produce repeatable, evidence-backed, audit-ready market-research and product-strategy outputs for server product planning.

The operating system must support a server systems product manager and adjacent stakeholders who need defensible answers to questions such as:

- which server classes should be built, revised, prioritized, or deferred
- which geographies or regulatory environments materially alter requirements
- which customer pain points should shape design traits
- which competitors and vendor moves matter
- which ecosystem shifts are directional noise versus durable signals
- which recommendations are sufficiently evidence-backed for executive review

The system must convert raw evidence into controlled artifacts that can later be automated in Track B without architectural reinvention.

## 4. Users and stakeholders

### 4.1 Primary user

The primary user is a server systems product manager operating between executive leadership, architecture, engineering, product strategy, technical marketing, sales context, and business planning.

### 4.2 Secondary users

Secondary users include:

- market intelligence
- product strategy
- technical marketing
- architecture liaison functions
- engineering leadership
- business planning
- executive reviewers

### 4.3 Stakeholder expectations

| Stakeholder            | Primary need                          | Required output traits                    |
| ---------------------- | ------------------------------------- | ----------------------------------------- |
| Product manager        | server design and portfolio direction | actionable, comparative, traceable        |
| Executive leadership   | strategic prioritization              | concise, defensible, evidence-backed      |
| Engineering leadership | design implications and constraints   | technically grounded, explicit, auditable |
| Technical marketing    | market framing and positioning        | segment-aware, competitor-aware           |
| Business planning      | sizing and prioritization             | explicit assumptions, risk visibility     |
| Human operator         | run control and continuity            | manifests, logs, gates, restartability    |

## 5. Design principles

### 5.1 AI-first design

The system is optimized for model execution quality first. File structures, templates, prompts, schemas, and operating steps exist to improve machine interpretability and deterministic reuse.

### 5.2 Human-as-interface

The human is the control layer interface. The human sets objectives, loads inputs, routes tasks, manages continuity, reviews contradictions, authorizes escalation, and approves publication. The human is not the primary analytical engine.

### 5.3 Determinism over improvisation

Track A rejects unstructured prompt improvisation as a primary operating mode. Manual execution must still follow versioned prompts, normalized artifact classes, run manifests, gates, and handoffs.

### 5.4 Evidence-first outputs

Every substantive output must preserve evidence lineage and distinguish:

- observed fact
- cross-source validated fact
- derived implication
- scenario hypothesis

### 5.5 Schema-first normalization

Raw outputs from model environments are intermediate material, not final artifacts. They must be normalized into canonical classes that can be validated, compared, and later automated.

### 5.6 Restartability

No critical work product should depend on ephemeral chat memory alone. Runs must be resumable from the last valid gate with manifest visibility and handoff continuity.

### 5.7 Explicit auditability

Track A must preserve:

- run identity
- route decisions
- model participation
- evidence tiering
- model-origin contribution
- contradiction handling
- review state
- publication state

### 5.8 Bounded inference

Inference is allowed only when marked. Recommendations must separate source-grounded claims from model-derived synthesis.

### 5.9 Traceable recommendations

A publishable recommendation must expose its path from evidence through synthesis to recommendation logic. Hidden jumps are unacceptable.

## 6. Scope and non-goals

### 6.1 In-scope

Track A covers at minimum:

- enterprise general workloads
- near-edge servers
- far-edge servers
- high-performance servers

It also covers, at minimum:

- TAM, SAM, SOM framing
- regional requirement differences
- vendor landscapes
- pain-point mapping
- serviceability and lifecycle needs
- thermal, power, and density pressures
- ecosystem and chipset direction
- market shift signals
- evidence-led product recommendations

### 6.2 Non-goals

Track A is not trying to do the following yet:

- implement the future orchestrator runtime
- replace canonical governance with chat memory
- guarantee perfect automation inside consumer model interfaces
- invent novel agent classes not already justified by manual behavior
- treat every platform as equivalent or interchangeable
- publish recommendations without evidence and review state

## 7. Functional architecture

Track A operates through the following functional modules.

### 7.1 Control and governance module

Responsible for:

- governing document priority
- run IDs
- artifact IDs
- prompt and schema versioning
- gate sequence
- checksum and handoff discipline
- unresolved-item propagation

### 7.2 Model-routing module

Responsible for:

- selecting model environment by task type
- recording route decisions
- invoking overlap when validation strength is needed
- preventing silent role drift between models

### 7.3 Acquisition module

Responsible for:

- gathering market, vendor, regulatory, ecosystem, and operator evidence
- separating primary from secondary and anecdotal sources
- capturing time-sensitive external signals

### 7.4 Structuring module

Responsible for:

- normalizing evidence into canonical schemas
- preserving evidence tiers
- preserving model-origin contribution
- producing intermediate structured artifacts

### 7.5 Synthesis module

Responsible for:

- segment analysis
- cross-source comparison
- implication development
- contradiction surfacing
- recommendation drafting

### 7.6 Validation module

Responsible for:

- evidence checks
- schema checks
- contradiction review
- route-review adequacy
- output readiness

### 7.7 Compilation module

Responsible for:

- assembling final work products
- preserving evidence lineage
- preserving review status
- producing executive-safe and operator-safe versions

### 7.8 Failure-recovery module

Responsible for:

- stop conditions
- escalation rules
- restart protocol
- invalidation handling
- handoff generation

## 8. Workflow phases

Track A follows a normalized workflow.

### Phase 0 — constitution and setup

- return to repository root
- load governing documents
- confirm objective
- assign run ID
- identify affected artifacts
- identify execution mode
- identify route policy

### Phase 1 — market map definition

- define segment scope
- define regional scope
- define evidence targets
- define target outputs
- define initial route plan

### Phase 2 — acquisition runs

- gather primary and secondary evidence
- separate durable evidence from live signals
- log source classes
- record acquisition model participation

### Phase 3 — normalization runs

- convert raw evidence into canonical schema-shaped artifacts
- preserve source lineage
- preserve model-origin attribution
- identify gaps and unresolved items

### Phase 4 — segment and cross-segment synthesis

- compare artifacts across segments, regions, vendors, and signals
- map pain points to design implications
- draft scenario implications and recommendation logic

### Phase 5 — validation and contradiction review

- execute evidence gate
- execute schema gate
- execute reasoning gate
- execute overlap review where needed
- log contradictions and unresolved items

### Phase 6 — recommendation drafting and compilation

- compile recommendation briefs
- compile executive-safe summaries
- attach evidence lineage
- attach review status

### Phase 7 — publication and handoff

- pass output and publish gates
- register final artifacts
- write restart-safe handoff
- preserve logs and manifest state

## 9. Roles and responsibilities

### 9.1 Human operator responsibilities

The human operator is responsible for:

- maintaining repo-root operating discipline
- loading governing files
- selecting execution mode
- selecting route policy
- moving artifacts between environments when needed
- preserving run state
- reviewing contradictions
- authorizing escalation or publication

### 9.2 Model responsibilities

The models are responsible for the analytical work itself, within bounded task classes.

### 9.3 Core Track A model set

The approved core Track A model set is:

- ChatGPT Plus
- Claude Pro
- Perplexity Pro
- Grok Premium

Gemini is not part of the current Track A core.

## 10. Model role matrix

### 10.1 Primary routing stance

| Platform       | Primary role                                                                           | Secondary role             | Avoid as primary                        |
| -------------- | -------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| Perplexity Pro | evidence acquisition, citation-first research, fast contradiction surfacing            | supporting synthesis input | root compiler                           |
| Grok Premium   | live ecosystem signals, X/social-adjacent signal capture, rapid current-event scouting | supplemental acquisition   | canonical compiler, heavy normalization |
| Claude Pro     | deep synthesis, long-document reasoning, contradiction analysis                        | structured drafting        | primary live acquisition                |
| ChatGPT Plus   | compilation, normalization, packaging, project-based artifact work                     | synthesis support          | primary live-signal monitor             |

### 10.2 Overlap policy

Intentional overlap is permitted when:

- evidence is high-stakes
- signals are new or unstable
- contradiction risk is high
- one model’s output may suppress minority but important evidence
- a recommendation path needs stronger validation

Allowed overlap purposes include:

- contradiction detection
- drift detection
- confidence strengthening
- retention of minority or edge-case evidence

### 10.3 Model-origin evidence tagging

Artifacts must preserve which environment materially contributed to which stage of work. At minimum, the system must be able to distinguish:

- acquisition contribution
- normalization contribution
- synthesis contribution
- compilation contribution

A typical pattern may look like:

- Perplexity: acquisition
- Grok: live-signal acquisition
- Claude: synthesis
- ChatGPT: normalization and compilation

This is a default routing posture, not an immutable rule.

## 11. Track A execution modes

### 11.1 Mode A — single-model / single-chat

Use when:

- the task is narrow
- evidence scope is limited
- contradiction risk is low
- one artifact family is being drafted or repaired

Strengths:

- fastest operator overhead
- cleanest continuity
- simplest restart surface

Limitations:

- weakest cross-model validation
- highest risk of unseen model bias
- not ideal for high-stakes recommendations

### 11.2 Mode B — single-model / multi-chat

Use when:

- one model remains the primary engine
- the task needs decomposition across subtopics
- context segmentation helps control drift
- multiple artifacts or subproblems must be developed in parallel

Strengths:

- preserves model specialization while reducing single-thread overload
- easier to isolate acquisition, synthesis, and review branches
- cleaner contradiction checks inside one environment

Limitations:

- still platform-bounded
- still vulnerable to environment-specific blind spots

### 11.3 Mode C — multi-model / multi-environment

Use when:

- the task is high-value
- evidence acquisition needs live breadth
- long-document synthesis is heavy
- contradiction risk is material
- final recommendation quality matters more than operator simplicity

Strengths:

- strongest validation posture
- strongest evidence breadth
- strongest resistance to single-platform drift

Limitations:

- highest operator overhead
- highest continuity burden
- strongest need for manifests, handoffs, and route logging

## 12. Deliverables

Track A must support at minimum the following deliverable classes:

- executive market brief
- product manager working brief
- market segment dossier
- regional requirement brief
- vendor landscape
- customer pain-point matrix
- feature opportunity map
- recommendation brief
- shift signal note
- contradiction log
- evidence ledger
- run manifest
- handoff note

## 13. Controls and gates

The system requires these mandatory gates:

1. input gate
2. evidence gate
3. schema gate
4. reasoning gate
5. output gate
6. publish gate

No recommendation should advance past review without explicit gate state.

### 13.1 Contradiction disposition taxonomy

Every contradiction log entry must carry a `disposition` value from the canonical set defined in engineering spec §12.1.5:

- `unresolved` — no resolution reached
- `source_conflict` — two or more sources disagree on a fact
- `weak_signal_not_confirmed` — signal exists but lacks corroboration
- `evidence_gap` — no source found to resolve the conflict
- `resolved_in_favor_of_primary_source` — primary source accepted as authoritative
- `resolved_in_favor_of_cross_validated_source` — cross-validated source accepted as authoritative
- `compiler_overreach_corrected` — model inferred beyond evidence; inference rolled back

### 13.2 Overlap result taxonomy

When a run executes an overlap task (`overlap_plan.overlap_required: true`), every resulting contradiction log entry must carry an `overlap_result` value from the canonical set defined in engineering spec §12.3:

- `confirmed` — both models agree; finding strengthened
- `contradicted` — models disagree; contradiction recorded
- `broadened` — overlap surfaced additional evidence not in original pass
- `unresolved` — overlap did not produce a resolvable outcome

## 14. Risks and mitigations

| Risk                               | Description                               | Mitigation                                                |
| ---------------------------------- | ----------------------------------------- | --------------------------------------------------------- |
| platform drift                     | consumer model surfaces change quickly    | route by proven behavior, not marketing claims            |
| evidence loss between environments | manual movement can lose source context   | require manifest registration and evidence ledger updates |
| hidden contradiction               | one model suppresses conflicting evidence | invoke overlap policy and contradiction logging           |
| stale chat memory                  | long sessions distort or compress context | restart from manifest and handoff, not memory alone       |
| operator inconsistency             | manual work introduces variability        | enforce repo-root workflow, fixed gates, fixed templates  |
| over-trust in one model            | convenience biases routing                | preserve explicit role matrix and route-review steps      |

## 15. Future evolution

This blueprint is the proving baseline for Track B.

### 15.1 Track B migration path

Track B must automate already-approved Track A behavior, including:

- route policy
- artifact classes
- evidence lineage
- contradiction handling
- validation gates
- restart logic
- review branches

Track B must not silently replace the logic of Track A with a new architecture.

### 15.2 Track B construction method

The approved construction method for Track B is:

1. Copy the Track A prompt pack, schema pack, and template pack verbatim into the Track B implementation layer
2. Replace the human operator transfer steps with API routing calls using the existing §12.1.3 transfer-packet contract as the typed message envelope
3. Replace the human review-gate with a programmatic validation call against the existing gate logic in `scripts/validate-gates.mjs`
4. Replace `output_N.txt` file handoffs with typed task objects carrying the same fields as the `input_bundle_refs` entries in the run manifest
5. Add an orchestration controller that sequences agents 1–4 per the §5 execution mode definitions
6. Simulate model API calls where live API credentials are not yet available — the simulation must preserve the same input/output contract so real calls can be substituted without logic changes

Track B does not require new artifact classes, new schemas, or new gate logic. It requires an execution layer that calls the existing contracts programmatically.

### 15.3 Track B API simulation stance

Where API credentials are unavailable, the Track B implementation must:

- stub each model API call with a function that accepts the same prompt-pack input and returns a schema-valid placeholder output
- log all stubbed calls to the run log with `status: simulated`
- mark all artifacts produced from stubs with `primary_model_origin: simulated`
- preserve all gate logic — simulated runs must still pass or fail gates on structure, not on content

This allows the full orchestration layer to be built, tested, and handed off before live API keys are available.

## 16. Appendix references

This blueprint is governed by and must remain consistent with:

- project outline
- blueprint outline
- engineering specs outline
- prompts and schema outline
- repo bootstrap outline
- agentic architecture outline
- project constitution
- project instructions
