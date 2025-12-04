#!/usr/bin/env node
import "zx/globals";
import chalk from "chalk";
import { $ } from "zx";
import * as fs from "node:fs";
import * as path from "node:path";

$.verbose = true;

const PARENT_DIR = path.resolve(import.meta.dirname, "../..");
const MAIN_APP_DIR = path.resolve(import.meta.dirname, "../apps/nextjs/app");

const TEST_BRANCHES = ["test-claude", "test-codex", "test-codexmax", "test-copilot", "test-cursor-agent"];

try {
  console.log(chalk.blue("📁 Copying curriculum directories from test branches..."));

  for (const branch of TEST_BRANCHES) {
    const sourcePath = path.join(PARENT_DIR, branch, "apps/nextjs/app/curriculum");
    const targetName = branch.replace("test-", "curriculum-");
    const targetPath = path.join(MAIN_APP_DIR, targetName);

    if (!fs.existsSync(sourcePath)) {
      console.log(chalk.yellow(`⚠ Skipping ${branch}: no curriculum folder found`));
      continue;
    }

    // Remove existing target directory if it exists
    if (fs.existsSync(targetPath)) {
      console.log(chalk.gray(`  Removing existing ${targetName}...`));
      await $`rm -rf ${targetPath}`;
    }

    // Copy the directory
    console.log(chalk.cyan(`  Copying ${branch} → ${targetName}`));
    await $`cp -r ${sourcePath} ${targetPath}`;
    console.log(chalk.green(`✓ ${targetName} copied`));
  }

  console.log(chalk.green.bold("\n✨ All curriculum directories copied!"));
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(chalk.red("✗ Copy failed:"), errorMessage);
  process.exit(1);
}
