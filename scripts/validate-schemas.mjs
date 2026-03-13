import fs from 'node:fs';
import path from 'node:path';

const schemaRoot = path.resolve('schemas');

if (!fs.existsSync(schemaRoot)) {
  console.error('schemas/ directory not found.');
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const mdFiles = walk(schemaRoot).filter((p) => p.endsWith('.md'));
if (mdFiles.length === 0) {
  console.error('No schema markdown files found under schemas/.');
  process.exit(1);
}

const failures = [];

for (const file of mdFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file);

  const hasVersion = /^version:\s*\d+\.\d+\.\d+\s*$/m.test(raw);
  const hasStatus = /^status:\s*(draft|active|deprecated)\s*$/m.test(raw);
  const hasReq = /^##\s+Required\s+Fields\s*$/m.test(raw);

  if (!hasVersion) failures.push(`${rel}: missing 'version: x.y.z'`);
  if (!hasStatus) failures.push(`${rel}: missing 'status: (draft|active|deprecated)'`);
  if (!hasReq) failures.push(`${rel}: missing '## Required Fields' section`);
}

if (failures.length > 0) {
  console.error('Schema validation failed:');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log(`Schemas validated: ${mdFiles.length} files OK`);
