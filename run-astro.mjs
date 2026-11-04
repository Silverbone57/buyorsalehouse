// Helper script so the project can run smoothly even when stored inside a Google Drive folder on Windows
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, copyFileSync, cpSync, watch } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const cmd = process.argv[2] || 'dev';
const projectRoot = process.cwd();
const localCacheDir = join(process.env.LOCALAPPDATA || join(homedir(), 'AppData', 'Local'), 'buyorsalehouse-deps');

mkdirSync(localCacheDir, { recursive: true });

function syncToCache() {
  try {
    copyFileSync(join(projectRoot, 'package.json'), join(localCacheDir, 'package.json'));
    copyFileSync(join(projectRoot, 'astro.config.mjs'), join(localCacheDir, 'astro.config.mjs'));
    copyFileSync(join(projectRoot, 'tailwind.config.mjs'), join(localCacheDir, 'tailwind.config.mjs'));
    cpSync(join(projectRoot, 'src'), join(localCacheDir, 'src'), { recursive: true, force: true });
    if (existsSync(join(projectRoot, 'public'))) {
      cpSync(join(projectRoot, 'public'), join(localCacheDir, 'public'), { recursive: true, force: true });
    }
  } catch {
    // Ignore transient sync locks
  }
}

syncToCache();

if (cmd === 'dev') {
  watch(join(projectRoot, 'src'), { recursive: true }, () => {
    syncToCache();
  });
  if (existsSync(join(projectRoot, 'public'))) {
    watch(join(projectRoot, 'public'), { recursive: true }, () => {
      syncToCache();
    });
  }
}

const astroBin = join(localCacheDir, 'node_modules', '.bin', 'astro.cmd');
const child = spawn(`"${astroBin}"`, [cmd, ...process.argv.slice(3)], {
  cwd: localCacheDir,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  if (cmd === 'build' && existsSync(join(localCacheDir, 'dist'))) {
    cpSync(join(localCacheDir, 'dist'), join(projectRoot, 'dist'), { recursive: true, force: true });
  }
  process.exit(code ?? 0);
});
