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
    'Usage: node scripts/generate-run-manifest.mjs --run run-YYYYMMDD-scope-0001 [--objective "text"] [--operator "name"] [--route-policy "id"] [--out path]',
  );
  process.exit(1);
}

const objective = getArg('--objective') ?? '';
const operator = getArg('--operator') ?? '';
const routePolicyId = getArg('--route-policy') ?? '';
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
template.system_stage = 'stage-0-manual-deterministic';
template.start_timestamp = new Date().toISOString();

const outPath = path.resolve(outPathArg);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(template, null, 2) + '\n', 'utf8');

console.log(`Wrote run manifest: ${path.relative(process.cwd(), outPath)}`);
console.log(`Ensured run scaffold: runs/${runId}/`);
