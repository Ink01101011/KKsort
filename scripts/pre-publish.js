#!/usr/bin/env node

/**
 * Pre-publish validation script
 * Runs comprehensive checks before publishing to npm
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n→ ${description}...`, 'cyan');
  try {
    execSync(command, { stdio: 'inherit' });
    log(`✓ ${description} passed`, 'green');
    return true;
  } catch (error) {
    log(`✗ ${description} failed`, 'red');
    return false;
  }
}

function checkFile(filePath, description) {
  log(`\n→ Checking ${description}...`, 'cyan');
  if (fs.existsSync(filePath)) {
    log(`✓ ${description} exists`, 'green');
    return true;
  } else {
    log(`✗ ${description} missing`, 'red');
    return false;
  }
}

function checkPackageSize() {
  log('\n→ Checking package size...', 'cyan');
  try {
    const output = execSync('npm pack --dry-run 2>&1', { encoding: 'utf-8' });
    const sizeMatch = output.match(/package size:\s+(\d+\.?\d*\s*[kKmMgG]?[bB]?)/);
    const filesMatch = output.match(/total files:\s+(\d+)/);
    
    if (sizeMatch && filesMatch) {
      log(`  Package size: ${sizeMatch[1]}`, 'blue');
      log(`  Total files: ${filesMatch[1]}`, 'blue');
      log('✓ Package size check passed', 'green');
      return true;
    }
  } catch (error) {
    log('✗ Package size check failed', 'red');
    return false;
  }
}

function checkVersion() {
  log('\n→ Checking version...', 'cyan');
  const packageJson = require(path.join(process.cwd(), 'package.json'));
  const version = packageJson.version;
  
  if (version === '0.0.0' || version.includes('0.0.1')) {
    log(`  Current version: ${version}`, 'yellow');
    log('  ⚠ Consider updating version before publishing', 'yellow');
  } else {
    log(`  Version: ${version}`, 'blue');
  }
  log('✓ Version check passed', 'green');
  return true;
}

async function main() {
  log('\n╔════════════════════════════════════════╗', 'blue');
  log('║   Pre-Publish Validation Script       ║', 'blue');
  log('╚════════════════════════════════════════╝\n', 'blue');

  const checks = [];

  // 1. Check required files
  checks.push(checkFile('LICENSE', 'LICENSE file'));
  checks.push(checkFile('README.md', 'README.md'));
  checks.push(checkFile('CHANGELOG.md', 'CHANGELOG.md'));
  checks.push(checkFile('package.json', 'package.json'));

  // 2. Check version
  checks.push(checkVersion());

  // 3. Lint check
  checks.push(runCommand('npm run lint', 'ESLint check'));

  // 4. Format check
  checks.push(runCommand('npm run format:check', 'Prettier format check'));

  // 5. Run tests
  checks.push(runCommand('npm test', 'Unit tests'));

  // 6. Run tests with coverage
  checks.push(runCommand('npm run test:coverage -- --silent', 'Test coverage'));

  // 7. Build
  checks.push(runCommand('npm run build', 'TypeScript build'));

  // 8. Check dist directory
  checks.push(checkFile('dist', 'dist directory'));

  // 9. Check package size
  checks.push(checkPackageSize());

  // Summary
  const passed = checks.filter(Boolean).length;
  const total = checks.length;
  
  log('\n╔════════════════════════════════════════╗', 'blue');
  log('║          Validation Summary            ║', 'blue');
  log('╚════════════════════════════════════════╝\n', 'blue');
  
  if (passed === total) {
    log(`✓ All ${total} checks passed!`, 'green');
    log('\n✨ Ready to publish! Run: npm publish\n', 'green');
    process.exit(0);
  } else {
    log(`✗ ${total - passed} of ${total} checks failed`, 'red');
    log('\n❌ Please fix the issues before publishing\n', 'red');
    process.exit(1);
  }
}

main().catch((error) => {
  log(`\n✗ Unexpected error: ${error.message}`, 'red');
  process.exit(1);
});
