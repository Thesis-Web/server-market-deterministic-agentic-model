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
