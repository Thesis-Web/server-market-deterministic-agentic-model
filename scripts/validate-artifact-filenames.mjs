#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const runsDir = path.join(repoRoot, 'runs');

const RUN_DIR_RE = /^run-\d{8}-[a-z0-9-]+-\d{2}$/;
const ROUTE_POLICY_RE = /^route-policy-\d{8}-[a-z0-9-]+-v\d+\.\d+\.\d+$/;

// §3.3 canonical status values: draft|in-review|validated|blocked|invalidated|published
const PRIMARY_ARTIFACT_RE =
  /^\d{4}-\d{2}-\d{2}-[a-z0-9-]+-[a-z0-9-]+-[a-z0-9-]+-v\d+\.\d+\.\d+-(draft|in-review|validated|blocked|invalidated|published)\.(md|json)$/;

const errors = [];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

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

if (!fs.existsSync(runsDir)) {
  console.log('Artifact filename validation passed: runs/ directory not yet initialized.');
  process.exit(0);
}

const runDirs = fs
  .readdirSync(runsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((n) => n !== '.gitkeep')
  .sort();

if (runDirs.length === 0) {
  console.log('Artifact filename validation passed: no run directories found under runs/.');
  process.exit(0);
}

for (const runDirName of runDirs) {
  const runDirPath = path.join(runsDir, runDirName);

  if (!RUN_DIR_RE.test(runDirName)) {
    errors.push(
      `runs/${runDirName}: run directory name does not match canonical pattern ${RUN_DIR_RE}`,
    );
  }

  const manifestPath = path.join(runDirPath, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    errors.push(`runs/${runDirName}: manifest.json missing`);
    continue;
  }

  let manifest;
  try {
    manifest = readJson(manifestPath);
  } catch (err) {
    errors.push(`runs/${runDirName}/manifest.json: invalid JSON (${err.message})`);
    continue;
  }

  if (manifest.run_id !== runDirName) {
    errors.push(
      `runs/${runDirName}/manifest.json: run_id "${manifest.run_id}" does not match directory "${runDirName}"`,
    );
  }

  if (!RUN_DIR_RE.test(manifest.run_id || '')) {
    errors.push(
      `runs/${runDirName}/manifest.json: run_id does not match canonical pattern ${RUN_DIR_RE}`,
    );
  }

  if (!ROUTE_POLICY_RE.test(manifest.route_policy_id || '')) {
    errors.push(
      `runs/${runDirName}/manifest.json: route_policy_id does not match canonical pattern ${ROUTE_POLICY_RE}`,
    );
  }

  const artifactTargets = Array.isArray(manifest.artifact_targets)
    ? manifest.artifact_targets
    : [];
  if (artifactTargets.length === 0) {
    errors.push(
      `runs/${runDirName}/manifest.json: artifact_targets must contain at least one item`,
    );
  }

  const artifactsDir = path.join(runDirPath, 'artifacts');
  for (const file of walk(artifactsDir)) {
    const base = path.basename(file);
    if (!PRIMARY_ARTIFACT_RE.test(base)) {
      errors.push(
        `runs/${runDirName}/artifacts/${path.relative(artifactsDir, file)}: artifact filename does not match canonical pattern`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error('Artifact filename validation failed:');
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log(`Artifact filename validation passed: ${runDirs.length} run director(ies) OK.`);
