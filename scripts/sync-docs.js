#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration for each project
const projects = [
  {
    name: 'probe',
    repo: 'https://github.com/probelabs/probe.git',
    branch: 'main',
    docsPath: 'site',  // Path to docs in the source repo
    targetPath: 'docs/probe',  // Where to put docs in website
    files: [
      'installation.md',
      'quick-start.md',
      'features.md',
      'how-it-works.md',
      'cli-mode.md',
      'code-extraction.md',
      'search-reference.md',
      'output-formats.md',
      'nodejs-sdk.md',
      'mcp-server.md',
      'ai-chat.md',
      'ai-integration.md',
      'web-interface.md',
      'adding-languages.md',
      'language-support-overview.md',
      'supported-languages.md',
      'changelog.md',
      'use-cases',
      'integrations',
      'contributing',
      'blog'
    ]
  }
  // Add more projects here as needed
  // {
  //   name: 'maid',
  //   repo: 'https://github.com/probelabs/mermaid-lint.git',
  //   branch: 'main',
  //   docsPath: 'docs',
  //   targetPath: 'docs/maid',
  //   files: ['*.md']
  // }
];

const TEMP_DIR = path.join(__dirname, '.tmp');
const ROOT_DIR = path.join(__dirname, '..');

function log(message) {
  console.log(`[sync-docs] ${message}`);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanTempDir() {
  if (fs.existsSync(TEMP_DIR)) {
    log('Cleaning temp directory...');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
}

function cloneRepo(project) {
  const tempRepoPath = path.join(TEMP_DIR, project.name);
  
  log(`Cloning ${project.name} from ${project.repo}...`);
  
  try {
    execSync(
      `git clone --depth 1 --branch ${project.branch} ${project.repo} ${tempRepoPath}`,
      { stdio: 'inherit' }
    );
    return tempRepoPath;
  } catch (error) {
    log(`Error cloning ${project.name}: ${error.message}`);
    return null;
  }
}

function copyFiles(sourcePath, targetPath, files) {
  ensureDir(targetPath);
  
  for (const file of files) {
    const source = path.join(sourcePath, file);
    const target = path.join(targetPath, file);
    
    if (!fs.existsSync(source)) {
      log(`  Skipping ${file} (not found)`);
      continue;
    }
    
    const stat = fs.statSync(source);
    
    if (stat.isDirectory()) {
      log(`  Copying directory: ${file}`);
      fs.cpSync(source, target, { recursive: true });
    } else {
      log(`  Copying file: ${file}`);
      ensureDir(path.dirname(target));
      fs.copyFileSync(source, target);
    }
  }
}

function syncProject(project) {
  log(`\nSyncing ${project.name}...`);
  
  const tempRepoPath = cloneRepo(project);
  if (!tempRepoPath) {
    return false;
  }
  
  const sourcePath = path.join(tempRepoPath, project.docsPath);
  const targetPath = path.join(ROOT_DIR, project.targetPath);
  
  // Clean target directory
  if (fs.existsSync(targetPath)) {
    log(`Cleaning ${targetPath}...`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
  
  // Copy files
  copyFiles(sourcePath, targetPath, project.files);
  
  log(`✓ ${project.name} synced successfully`);
  return true;
}

function main() {
  log('Starting documentation sync...\n');
  
  // Clean and create temp directory
  cleanTempDir();
  ensureDir(TEMP_DIR);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const project of projects) {
    if (syncProject(project)) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  // Cleanup
  cleanTempDir();
  
  log(`\nSync complete: ${successCount} succeeded, ${failCount} failed`);
  
  if (failCount > 0) {
    process.exit(1);
  }
}

main();
