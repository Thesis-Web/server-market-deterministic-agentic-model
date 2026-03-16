import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const gateSequence = [
  'input-gate',
  'evidence-gate',
  'schema-gate',
  'reasoning-gate',
  'output-gate',
  'publish-gate',
];
const routePolicyPattern = /^route-policy-\d{8}-[a-z0-9-]+-v\d+\.\d+\.\d+$/;
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
const requiredPublishControls = [
  'evidence-ledger',
  'evidence-log',
  'contradiction-log',
  'run-log',
  'route-log',
  'review-log',
  'checksum-ledger',
  'handoff-note',
];

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
function hasNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}
function hasArray(v) {
  return Array.isArray(v);
}
function fail(failures, rel, msg) {
  failures.push(`${rel}: ${msg}`);
}
function findArtifactByType(manifest, artifactType) {
  return (manifest.artifact_outputs ?? []).filter(
    (artifact) => artifact.artifact_type === artifactType,
  );
}
function resolveArtifactPath(artifactPath) {
  return path.resolve(repoRoot, artifactPath);
}
function isPrimaryOutputArtifact(artifact) {
  return !controlArtifactTypes.has(artifact.artifact_type);
}

const manifests = walk(path.resolve('runs')).filter((file) => file.endsWith('manifest.json'));
const failures = [];
if (manifests.length === 0) {
  console.error('Gate validation failed: no run manifests found under runs/.');
  process.exit(1);
}

for (const manifestPath of manifests) {
  const relManifest = path.relative(repoRoot, manifestPath);
  const manifest = readJson(manifestPath);
  const gateResults = Array.isArray(manifest.gate_results) ? manifest.gate_results : [];
  const gateByName = Object.fromEntries(gateResults.map((gate) => [gate.gate_name, gate]));
  const runDir = path.dirname(manifestPath);
  const primaryArtifacts = (manifest.artifact_outputs ?? []).filter(isPrimaryOutputArtifact);

  for (const gateName of gateSequence) {
    if (!gateByName[gateName]) fail(failures, relManifest, `missing gate result for ${gateName}`);
  }

  if (!hasNonEmptyString(manifest.objective)) fail(failures, relManifest, 'objective is empty');
  if (!hasNonEmptyString(manifest.execution_mode))
    fail(failures, relManifest, 'execution_mode is empty');
  if (
    !hasNonEmptyString(manifest.route_policy_id) ||
    !routePolicyPattern.test(manifest.route_policy_id)
  ) {
    fail(failures, relManifest, 'route_policy_id does not match canonical pattern');
  }
  if (!Array.isArray(manifest.governing_docs_loaded) || manifest.governing_docs_loaded.length < 7) {
    fail(failures, relManifest, 'governing_docs_loaded does not contain the canonical minimum set');
  }
  if (!Array.isArray(manifest.artifact_targets) || manifest.artifact_targets.length === 0) {
    fail(failures, relManifest, 'artifact_targets is empty');
  }
  if ((manifest.system_stage ?? '') !== 'stage-0-manual-deterministic') {
    fail(failures, relManifest, 'system_stage is not stage-0-manual-deterministic');
  }

  const inputGate = gateByName['input-gate'];
  if (inputGate?.outcome === 'passed') {
    if (!findArtifactByType(manifest, 'run-log').length) {
      fail(failures, relManifest, 'input-gate passed but no run-log artifact output exists');
    }
  }

  const evidenceGate = gateByName['evidence-gate'];
  if (evidenceGate?.outcome === 'passed') {
    if (!findArtifactByType(manifest, 'evidence-ledger').length) {
      fail(
        failures,
        relManifest,
        'evidence-gate passed but no evidence-ledger artifact output exists',
      );
    }
    if (!findArtifactByType(manifest, 'evidence-log').length) {
      fail(
        failures,
        relManifest,
        'evidence-gate passed but no evidence-log artifact output exists',
      );
    }
    for (const artifact of primaryArtifacts) {
      const label = artifact.artifact_id ?? artifact.artifact_path ?? 'unknown';
      if (!hasArray(artifact.evidence_refs) || artifact.evidence_refs.length === 0) {
        fail(failures, relManifest, `evidence-gate passed but ${label} has no evidence_refs`);
      }
      if (!hasNonEmptyString(artifact.primary_model_origin)) {
        fail(
          failures,
          relManifest,
          `evidence-gate passed but ${label} has no primary_model_origin`,
        );
      }
    }
  }

  const schemaGate = gateByName['schema-gate'];
  if (schemaGate?.outcome === 'passed') {
    for (const artifact of primaryArtifacts) {
      const label = artifact.artifact_id ?? artifact.artifact_path ?? 'unknown';
      const artifactFile = resolveArtifactPath(artifact.artifact_path);
      if (!fs.existsSync(artifactFile)) {
        fail(
          failures,
          relManifest,
          `schema-gate passed but ${label} path does not exist: ${artifact.artifact_path}`,
        );
        continue;
      }
      if (path.extname(artifactFile) !== '.json') continue;
      const artifactJson = readJson(artifactFile);
      for (const field of [
        'schema_version',
        'artifact_type',
        'status',
        'version',
        'run_id',
        'primary_model_origin',
        'supporting_model_origins',
        'model_stage_contributions',
      ]) {
        if (!(field in artifactJson)) {
          fail(
            failures,
            relManifest,
            `schema-gate passed but ${label} is missing required field: ${field}`,
          );
        }
      }
    }
  }

  const reasoningGate = gateByName['reasoning-gate'];
  if (reasoningGate?.outcome === 'passed') {
    if (!findArtifactByType(manifest, 'contradiction-log').length) {
      fail(
        failures,
        relManifest,
        'reasoning-gate passed but no contradiction-log artifact output exists',
      );
    }
    if (
      manifest.overlap_plan?.overlap_required === true &&
      !findArtifactByType(manifest, 'route-log').length
    ) {
      fail(
        failures,
        relManifest,
        'reasoning-gate passed with overlap_required=true but no route-log artifact output exists',
      );
    }
  }

  const outputGate = gateByName['output-gate'];
  if (outputGate?.outcome === 'passed') {
    for (const artifact of primaryArtifacts) {
      const label = artifact.artifact_id ?? artifact.artifact_path ?? 'unknown';
      if (!hasNonEmptyString(artifact.review_status)) {
        fail(failures, relManifest, `output-gate passed but ${label} review_status is empty`);
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
    for (const artifactType of requiredPublishControls) {
      if (!findArtifactByType(manifest, artifactType).length) {
        fail(
          failures,
          relManifest,
          `publish-gate passed but ${artifactType} artifact output is missing`,
        );
      }
    }
  }
}

if (failures.length > 0) {
  console.error('Gate validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Gate validation passed: ${manifests.length} run manifest(s) validated.`);
