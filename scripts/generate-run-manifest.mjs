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
    'Usage: node scripts/generate-run-manifest.mjs --run RUN-YYYYMMDD-0001 [--objective "text"] [--out path]',
  );
  process.exit(1);
}

const objective = getArg('--objective') ?? '';
const outPathArg = getArg('--out') ?? path.join('runs', runId, 'manifest.json');

const templatePath = path.resolve('templates', 'run-control', 'run-manifest-template.json');
if (!fs.existsSync(templatePath)) {
  console.error(`Missing template: ${templatePath}`);
  process.exit(1);
}

const tpl = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
tpl.runId = runId;
tpl.objective = objective;

if (tpl.timestamps && typeof tpl.timestamps === 'object') {
  tpl.timestamps.start = new Date().toISOString();
}

const outPath = path.resolve(outPathArg);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(tpl, null, 2) + '\n', 'utf8');

console.log(`Wrote run manifest: ${path.relative(process.cwd(), outPath)}`);
