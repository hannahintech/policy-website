// eslint.config.js
import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['**/*.mdx', '**/*.d.ts', 'node_modules', '.next', 'dist', 'out'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
  {
    files: ['**/*.tsx', '**/*.ts'],
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,json,md,mdx}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  js.configs.recommended,
]
