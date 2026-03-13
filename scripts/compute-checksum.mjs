import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

const filePathArg = getArg('--file');
if (!filePathArg) {
  console.error('Usage: node scripts/compute-checksum.mjs --file <path> [--append <ledgerPath>]');
  process.exit(1);
}

const filePath = path.resolve(filePathArg);
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePathArg}`);
  process.exit(1);
}

const buf = fs.readFileSync(filePath);
const hash = crypto.createHash('sha256').update(buf).digest('hex');
const rel = path.relative(process.cwd(), filePath);

console.log(`${hash}  ${rel}`);

const ledgerArg = getArg('--append');
if (ledgerArg) {
  const ledgerPath = path.resolve(ledgerArg);
  fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
  fs.appendFileSync(ledgerPath, `${hash}  ${rel}\n`, 'utf8');
  console.log(`Appended to ledger: ${path.relative(process.cwd(), ledgerPath)}`);
}
