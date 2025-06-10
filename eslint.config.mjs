import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslitPluginUnusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
    plugins: {
      eslintConfigPrettier: eslintConfigPrettier,
      prettier: eslintPluginPrettier,
      eslintPluginImport: eslintPluginImport,
      "unused-imports": eslitPluginUnusedImports,
    },
    extends: [eslintConfigPrettier],
    rules: {
      'prettier/prettier': 'error', // Prettier aplicado via ESLint
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'warn',
        { alphabetize: { order: 'asc', caseInsensitive: true } },
      ],
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  tseslint.configs.recommended,
]);
