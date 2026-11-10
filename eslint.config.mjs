import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // Existing marketing copy uses apostrophes/quotes; keep as warnings.
      'react/no-unescaped-entities': 'warn',
    },
  },
  {
    ignores: [
      '.agent/**',
      '.agents/**',
      '.claude/**',
      '.windsurf/**',
      '.cursor/skills/**',
      'app/projects/**',
      'node_modules/**',
      '.next/**',
    ],
  },
]

export default eslintConfig
