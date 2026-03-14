import fs from 'node:fs';
import path from 'node:path';

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
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

const templatePath = path.resolve('templates', 'run-control', 'run-manifest-template.json');
if (!fs.existsSync(templatePath)) {
  console.error(`Missing template: ${templatePath}`);
  process.exit(1);
}

const tpl = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
tpl.run_id = runId;
tpl.objective = objective;
tpl.operator = operator;
tpl.route_policy_id = routePolicyId;
tpl.start_timestamp = new Date().toISOString();

const outPath = path.resolve(outPathArg);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(tpl, null, 2) + '\n', 'utf8');

console.log(`Wrote run manifest: ${path.relative(process.cwd(), outPath)}`);
