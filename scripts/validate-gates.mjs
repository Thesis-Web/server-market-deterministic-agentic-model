import fs from 'node:fs';
import path from 'node:path';

const gateSequence = [
  'input-gate',
  'evidence-gate',
  'schema-gate',
  'reasoning-gate',
  'output-gate',
  'publish-gate',
];

const controlArtifactTypes = new Set([
  'run-manifest',
  'evidence-ledger',
  'evidence-log',
  'contradiction-log',
  'run-log',
  'route-log',
  'review-log',
  'failure-log',
  'checksum-ledger',
  'handoff-note',
]);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function fail(failures, rel, msg) {
  failures.push(`${rel}: ${msg}`);
}

function hasNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function hasArray(value) {
  return Array.isArray(value);
}

function getRunDir(manifestPath) {
  return path.dirname(manifestPath);
}

function listJsonFiles(dir) {
  return walk(dir).filter((file) => file.endsWith('.json'));
}

function findArtifactByType(manifest, artifactType) {
  return (manifest.artifact_outputs ?? []).filter(
    (artifact) => artifact.artifact_type === artifactType,
  );
}

function resolveArtifactPath(repoRoot, artifactPath) {
  return path.resolve(repoRoot, artifactPath);
}

function isPrimaryOutputArtifact(artifact) {
  return !controlArtifactTypes.has(artifact.artifact_type);
}

const repoRoot = process.cwd();
const manifests = walk(path.resolve('runs')).filter((file) => file.endsWith('manifest.json'));
const failures = [];

if (manifests.length === 0) {
  console.log('Gate validation passed: no run manifests found under runs/.');
  process.exit(0);
}

for (const manifestPath of manifests) {
  const relManifest = path.relative(repoRoot, manifestPath);
  const manifest = readJson(manifestPath);
  const runDir = getRunDir(manifestPath);
  const gateResults = manifest.gate_results ?? [];

  if (!Array.isArray(gateResults)) {
    fail(failures, relManifest, 'gate_results must be an array');
    continue;
  }

  if (gateResults.length !== gateSequence.length) {
    fail(
      failures,
      relManifest,
      `gate_results must contain exactly ${gateSequence.length} entries in canonical order`,
    );
  }

  for (let i = 0; i < Math.min(gateResults.length, gateSequence.length); i += 1) {
    if (gateResults[i]?.gate_name !== gateSequence[i]) {
      fail(
        failures,
        relManifest,
        `gate_results[${i}] must be ${gateSequence[i]}, got ${gateResults[i]?.gate_name ?? 'missing'}`,
      );
    }
  }

  const gateByName = Object.fromEntries(gateResults.map((gate) => [gate.gate_name, gate]));
  const artifactOutputs = Array.isArray(manifest.artifact_outputs) ? manifest.artifact_outputs : [];
  const primaryArtifacts = artifactOutputs.filter(isPrimaryOutputArtifact);

  const inputGate = gateByName['input-gate'];
  if (inputGate?.outcome === 'passed') {
    if (!hasNonEmptyString(manifest.objective)) {
      fail(failures, relManifest, 'input-gate passed but objective is empty');
    }
    if (!hasNonEmptyString(manifest.execution_mode)) {
      fail(failures, relManifest, 'input-gate passed but execution_mode is empty');
    }
    if (!hasNonEmptyString(manifest.route_policy_id)) {
      fail(failures, relManifest, 'input-gate passed but route_policy_id is empty');
    }
    if (!hasArray(manifest.governing_docs_loaded) || manifest.governing_docs_loaded.length === 0) {
      fail(failures, relManifest, 'input-gate passed but governing_docs_loaded is empty');
    }
    if (!hasArray(manifest.artifact_outputs) || manifest.artifact_outputs.length === 0) {
      fail(failures, relManifest, 'input-gate passed but artifact_outputs is empty');
    }
    if (manifest.artifact_type !== 'run-manifest') {
      fail(failures, relManifest, 'input-gate passed but artifact_type is not run-manifest');
    }
  }

  const evidenceGate = gateByName['evidence-gate'];
  if (evidenceGate?.outcome === 'passed') {
    const evidenceJsonFiles = listJsonFiles(path.join(runDir, 'evidence'));
    if (
      evidenceJsonFiles.length === 0 &&
      findArtifactByType(manifest, 'evidence-ledger').length === 0
    ) {
      fail(
        failures,
        relManifest,
        'evidence-gate passed but no evidence JSON files or evidence-ledger artifact outputs were found',
      );
    }

    for (const artifact of primaryArtifacts) {
      if (!hasArray(artifact.evidence_refs) || artifact.evidence_refs.length === 0) {
        fail(
          failures,
          relManifest,
          `evidence-gate passed but artifact_output ${artifact.artifact_id ?? artifact.artifact_path ?? 'unknown'} has no evidence_refs`,
        );
      }
      if (!hasNonEmptyString(artifact.primary_model_origin)) {
        fail(
          failures,
          relManifest,
          `evidence-gate passed but artifact_output ${artifact.artifact_id ?? artifact.artifact_path ?? 'unknown'} has no primary_model_origin`,
        );
      }
    }
  }

  const schemaGate = gateByName['schema-gate'];
  if (schemaGate?.outcome === 'passed') {
    for (const artifact of primaryArtifacts) {
      const label = artifact.artifact_id ?? artifact.artifact_path ?? 'unknown';
      if (!hasNonEmptyString(artifact.artifact_path)) {
        fail(
          failures,
          relManifest,
          `schema-gate passed but artifact_output ${label} has no artifact_path`,
        );
        continue;
      }

      const artifactFile = resolveArtifactPath(repoRoot, artifact.artifact_path);
      if (!fs.existsSync(artifactFile)) {
        fail(
          failures,
          relManifest,
          `schema-gate passed but artifact_output ${label} path does not exist: ${artifact.artifact_path}`,
        );
        continue;
      }

      const artifactJson = readJson(artifactFile);
      const requiredFields = [
        'schema_version',
        'artifact_type',
        'status',
        'version',
        'run_id',
        'primary_model_origin',
        'supporting_model_origins',
        'model_stage_contributions',
      ];

      for (const field of requiredFields) {
        if (!(field in artifactJson)) {
          fail(
            failures,
            relManifest,
            `schema-gate passed but artifact_output ${label} is missing required field: ${field}`,
          );
        }
      }
    }
  }

  const reasoningGate = gateByName['reasoning-gate'];
  if (reasoningGate?.outcome === 'passed') {
    for (const artifact of primaryArtifacts) {
      if (!hasArray(artifact.evidence_refs) || artifact.evidence_refs.length === 0) {
        fail(
          failures,
          relManifest,
          `reasoning-gate passed but artifact_output ${artifact.artifact_id ?? artifact.artifact_path ?? 'unknown'} has no evidence_refs`,
        );
      }
    }

    const contradictionFiles =
      listJsonFiles(path.join(runDir, 'logs')).filter((file) => file.includes('contradiction')) +
      listJsonFiles(path.join(runDir, 'artifacts')).filter((file) =>
        file.includes('contradiction'),
      );

    const contradictionArtifacts = findArtifactByType(manifest, 'contradiction-log');
    if (contradictionFiles.length === 0 && contradictionArtifacts.length === 0) {
      fail(
        failures,
        relManifest,
        'reasoning-gate passed but no contradiction-log evidence was found',
      );
    }

    // Enforce canonical disposition values on all contradiction entries (§12.1.5)
    const validDispositions = new Set([
      'unresolved',
      'source_conflict',
      'weak_signal_not_confirmed',
      'evidence_gap',
      'resolved_in_favor_of_primary_source',
      'resolved_in_favor_of_cross_validated_source',
      'compiler_overreach_corrected',
    ]);
    for (const artifact of contradictionArtifacts) {
      if (!hasNonEmptyString(artifact.artifact_path)) continue;
      const artifactFile = resolveArtifactPath(repoRoot, artifact.artifact_path);
      if (!fs.existsSync(artifactFile)) continue;
      const contradictionJson = readJson(artifactFile);
      const entries = Array.isArray(contradictionJson.entries) ? contradictionJson.entries : [];
      for (const entry of entries) {
        if (!entry.disposition) {
          fail(failures, relManifest, `contradiction entry ${entry.contradiction_id ?? 'unknown'} is missing disposition`);
        } else if (!validDispositions.has(entry.disposition)) {
          fail(
            failures,
            relManifest,
            `contradiction entry ${entry.contradiction_id ?? 'unknown'} has invalid disposition '${entry.disposition}' — must be a canonical value per §12.1.5`,
          );
        }
      }
    }

    if (manifest.overlap_plan?.overlap_required === true) {
      const routeArtifacts = findArtifactByType(manifest, 'route-log');
      if (routeArtifacts.length === 0) {
        fail(
          failures,
          relManifest,
          'reasoning-gate passed with overlap_required=true but no route-log artifact output was found',
        );
      }

      // Enforce overlap_result on contradiction-log entries when overlap_required=true
      const validOverlapResults = new Set(['confirmed', 'contradicted', 'broadened', 'unresolved']);
      const contradictionArtifactsForOverlap = findArtifactByType(manifest, 'contradiction-log');
      for (const artifact of contradictionArtifactsForOverlap) {
        if (!hasNonEmptyString(artifact.artifact_path)) continue;
        const artifactFile = resolveArtifactPath(repoRoot, artifact.artifact_path);
        if (!fs.existsSync(artifactFile)) continue;
        const contradictionJson = readJson(artifactFile);
        const entries = Array.isArray(contradictionJson.entries) ? contradictionJson.entries : [];
        for (const entry of entries) {
          if (!entry.overlap_result) {
            fail(
              failures,
              relManifest,
              `reasoning-gate passed with overlap_required=true but contradiction entry ${entry.contradiction_id ?? 'unknown'} is missing overlap_result (§12.3)`,
            );
          } else if (!validOverlapResults.has(entry.overlap_result)) {
            fail(
              failures,
              relManifest,
              `contradiction entry ${entry.contradiction_id ?? 'unknown'} has invalid overlap_result '${entry.overlap_result}' — must be one of: confirmed, contradicted, broadened, unresolved`,
            );
          }
        }
      }
    }
  }

  const outputGate = gateByName['output-gate'];
  if (outputGate?.outcome === 'passed') {
    for (const artifact of primaryArtifacts) {
      const label = artifact.artifact_id ?? artifact.artifact_path ?? 'unknown';
      if (!hasArray(artifact.evidence_refs) || artifact.evidence_refs.length === 0) {
        fail(
          failures,
          relManifest,
          `output-gate passed but artifact_output ${label} has no lineage via evidence_refs`,
        );
      }
      if (!hasNonEmptyString(artifact.review_status)) {
        fail(
          failures,
          relManifest,
          `output-gate passed but artifact_output ${label} review_status is empty`,
        );
      }

      if (hasNonEmptyString(artifact.artifact_path)) {
        const artifactFile = resolveArtifactPath(repoRoot, artifact.artifact_path);
        if (fs.existsSync(artifactFile)) {
          const artifactJson = readJson(artifactFile);
          if (!Array.isArray(artifactJson.unresolved_items)) {
            fail(
              failures,
              relManifest,
              `output-gate passed but artifact_output ${label} does not expose unresolved_items`,
            );
          }
        }
      }
    }
  }

  const publishGate = gateByName['publish-gate'];
  if (publishGate?.outcome === 'passed') {
    if (!['approved', 'approved_with_notes'].includes(manifest.review_state)) {
      fail(
        failures,
        relManifest,
        'publish-gate passed but review_state is not approved or approved_with_notes',
      );
    }

    const hasHandoffRef = hasNonEmptyString(manifest.handoff_ref);
    const handoffArtifacts = findArtifactByType(manifest, 'handoff-note');
    if (!hasHandoffRef && handoffArtifacts.length === 0) {
      fail(
        failures,
        relManifest,
        'publish-gate passed but no handoff_ref or handoff-note artifact output exists',
      );
    }

    const contradictionArtifacts = findArtifactByType(manifest, 'contradiction-log');
    for (const artifact of contradictionArtifacts) {
      if (!hasNonEmptyString(artifact.artifact_path)) continue;
      const artifactFile = resolveArtifactPath(repoRoot, artifact.artifact_path);
      if (!fs.existsSync(artifactFile)) continue;
      const contradictionJson = readJson(artifactFile);
      const accepted = ['approved', 'approved_with_notes'].includes(contradictionJson.review_state);
      const noted = Array.isArray(contradictionJson.unresolved_items);
      if (!accepted && !noted) {
        fail(
          failures,
          relManifest,
          'publish-gate passed but contradiction-log is neither accepted nor noted',
        );
      }
    }
  }
}

if (failures.length > 0) {
  console.error('Gate validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Gate validation passed: ${manifests.length} run manifest(s) OK`);
