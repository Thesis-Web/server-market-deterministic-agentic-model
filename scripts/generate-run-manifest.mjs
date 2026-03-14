import fs from 'node:fs';
import path from 'node:path';

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

function ensureRunStructure(runId) {
  const runRoot = path.resolve('runs', runId);
  const subdirs = ['artifacts', 'evidence', 'reviews', 'logs', 'handoff'];

  fs.mkdirSync(runRoot, { recursive: true });

  for (const subdir of subdirs) {
    const subdirPath = path.join(runRoot, subdir);
    fs.mkdirSync(subdirPath, { recursive: true });

    const gitkeepPath = path.join(subdirPath, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
      fs.writeFileSync(gitkeepPath, '', 'utf8');
    }
  }

  return runRoot;
}

const runId = getArg('--run');
if (!runId) {
  console.error(
    'Usage: node scripts/generate-run-manifest.mjs --run run-YYYYMMDD-scope-01 [--objective "text"] [--operator "name"] [--route-policy "id"] [--execution-mode "single-model-single-chat|single-model-multi-chat|multi-model-multi-environment"] [--out path]',
  );
  process.exit(1);
}

const objective = getArg('--objective') ?? '';
const operator = getArg('--operator') ?? '';
const routePolicyId = getArg('--route-policy') ?? '';
const executionMode = getArg('--execution-mode') ?? null;
const outPathArg = getArg('--out') ?? path.join('runs', runId, 'manifest.json');

const templatePath = path.resolve('templates', 'run-manifest', 'run-manifest-template.json');
if (!fs.existsSync(templatePath)) {
  console.error(`Missing template: ${templatePath}`);
  process.exit(1);
}

ensureRunStructure(runId);

const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
template.run_id = runId;
template.objective = objective;
template.operator = operator;
template.route_policy_id = routePolicyId;
if (executionMode) template.execution_mode = executionMode;
template.status = 'initialized';
template.governing_docs_loaded = [
  {
    doc_id: 'project-constitution',
    path: 'docs/project-constitution/server-market-project-constitution-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'project-instructions',
    path: 'docs/project-constitution/server-market-project-instructions-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'project-outline',
    path: 'docs/project-constitution/project-outline-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'blueprint-outline',
    path: 'docs/blueprints/blueprint-outline-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'engineering-specs-outline',
    path: 'docs/engineering-specs/engineering-specs-outline-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'current-blueprint',
    path: 'docs/blueprints/ai-first-human-interface-market-research-operating-system-blueprint-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
  {
    doc_id: 'current-engineering-spec',
    path: 'docs/engineering-specs/retail-manual-multi-model-implementation-spec-v0.1.0.md',
    version: 'v0.1.0',
    status: 'loaded',
  },
];
template.system_stage = 'stage-0-manual-deterministic';
template.start_timestamp = new Date().toISOString();

const outPath = path.resolve(outPathArg);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(template, null, 2) + '\n', 'utf8');

console.log(`Wrote run manifest: ${path.relative(process.cwd(), outPath)}`);
console.log(`Ensured run scaffold: runs/${runId}/`);
