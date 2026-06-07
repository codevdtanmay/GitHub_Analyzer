import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const distDir = join(root, '..', 'frontend', 'dist');
const publicDir = join(root, '..', 'backend', 'public');

await rm(publicDir, { recursive: true, force: true });
await mkdir(publicDir, { recursive: true });
await cp(distDir, publicDir, { recursive: true });

console.log(`Copied frontend build from ${distDir} to ${publicDir}`);
