import fs from 'node:fs';
import path from 'node:path';

const requiredPaths = [
  'README.md',
  '.editorconfig',
  '.gitignore',
  '.prettierrc.json',
  '.prettierignore',
  '.markdownlint.json',
  '.nvmrc',
  'package.json',
  'tsconfig.json',
  '.github/workflows/ci.yml',
  'docs',
  'docs/blueprints',
  'docs/engineering-specs',
  'docs/operator-guides',
  'docs/project-constitution',
  'prompts',
  'schemas',
  'templates',
  'manifests',
  'logs',
  'runs',
  'outputs',
  'scripts',
  'src',
];

const missing = requiredPaths.filter((p) => !fs.existsSync(path.resolve(p)));

if (missing.length > 0) {
  console.error('Missing required repository paths:');
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log('Repository structure validation passed.');
