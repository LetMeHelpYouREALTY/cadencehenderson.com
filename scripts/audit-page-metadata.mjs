#!/usr/bin/env node
/**
 * SEO metadata audit: title/description length and duplicate descriptions.
 * Scans export const metadata in app page.tsx and layout.tsx files.
 *
 * Usage: node scripts/audit-page-metadata.mjs
 */

import { readFile, readdir, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'

const root = process.cwd()
const appDir = join(root, 'app')

const MAX_TITLE = 70
const MAX_DESCRIPTION = 160

async function walk(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, acc)
    } else if (entry.name === 'page.tsx' || entry.name === 'layout.tsx') {
      acc.push(full)
    }
  }
  return acc
}

function extractConstStrings(source, name) {
  const re = new RegExp(
    `const\\s+${name}\\s*=\\s*([\\s\\S]*?)(?=\\n\\n|export\\s|const\\s+\\w+\\s*=)`,
    'm',
  )
  const m = source.match(re)
  if (!m) return []
  return extractStringLiterals(m[1])
}

function extractStringLiterals(chunk) {
  const values = []
  const patterns = [
    /'([^'\\]*(?:\\.[^'\\]*)*)'/g,
    /"([^"\\]*(?:\\.[^"\\]*)*)"/g,
    /`([^`\\]*(?:\\.[^`\\]*)*)`/g,
  ]
  for (const re of patterns) {
    let match
    while ((match = re.exec(chunk)) !== null) {
      const raw = match[1]
      const cleaned = raw.replace(/\$\{[^}]+\}/g, '').trim()
      if (cleaned) values.push(cleaned)
    }
  }
  return values
}

function extractMetadataBlock(source) {
  const start = source.indexOf('export const metadata')
  if (start === -1) return null
  const braceStart = source.indexOf('{', start)
  if (braceStart === -1) return null
  let depth = 0
  for (let i = braceStart; i < source.length; i++) {
    const ch = source[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) return source.slice(braceStart, i + 1)
    }
  }
  return null
}

function resolveRootField(block, field, source) {
  const head = block.split(/\n\s*openGraph:/)[0]
  const idx = head.indexOf(`${field}:`)
  if (idx === -1) return null
  const after = head.slice(idx + field.length + 1).trimStart()

  const identMatch = after.match(/^([A-Z_][A-Z0-9_]*)/)
  if (
    identMatch &&
    !after.startsWith("'") &&
    !after.startsWith('"') &&
    !after.startsWith('`')
  ) {
    const fromConst = extractConstStrings(source, identMatch[1])
    if (fromConst[0]) return fromConst[0]
  }

  const fromLit = extractStringLiterals(after)
  return fromLit[0] ?? null
}

function auditFile(filePath, source) {
  const metaExport = source.match(
    /export const metadata[\s\S]*?(?=\nexport |\ndefault )/,
  )?.[0]
  if (!metaExport) return null
  if (metaExport.includes('villageMetadata')) return null

  const block = extractMetadataBlock(source)
  if (!block) return null

  const rel = relative(root, filePath)
  const title = resolveRootField(block, 'title', source)
  const description = resolveRootField(block, 'description', source)

  const issues = []
  if (title && title.length > MAX_TITLE) {
    issues.push(`title ${title.length} chars (max ${MAX_TITLE})`)
  }
  if (description && description.length > MAX_DESCRIPTION) {
    issues.push(`description ${description.length} chars (max ${MAX_DESCRIPTION})`)
  }
  if (!description) {
    if (/index:\s*false/.test(block)) {
      return { rel, title, description: null, issues: [] }
    }
    issues.push('missing resolvable description')
  }

  return { rel, title, description, issues }
}

async function shouldAuditLayout(layoutPath) {
  const pagePath = join(dirname(layoutPath), 'page.tsx')
  try {
    await stat(pagePath)
    const pageSource = await readFile(pagePath, 'utf8')
    if (pageSource.includes('export const metadata')) return false
  } catch {
    /* no page.tsx */
  }
  return true
}

async function main() {
  const files = await walk(appDir)
  const results = []
  for (const file of files) {
    if (file.endsWith('layout.tsx')) {
      if (file.endsWith('app/layout.tsx')) continue
      if (!(await shouldAuditLayout(file))) continue
    }
    const source = await readFile(file, 'utf8')
    const row = auditFile(file, source)
    if (row) results.push(row)
  }

  const descMap = new Map()
  for (const row of results) {
    if (!row.description) continue
    const key = row.description.toLowerCase()
    if (!descMap.has(key)) descMap.set(key, [])
    descMap.get(key).push(row.rel)
  }

  const duplicates = [...descMap.entries()].filter(([, paths]) => paths.length > 1)

  let failed = false
  console.log('Page metadata audit\n')

  for (const row of results.sort((a, b) => a.rel.localeCompare(b.rel))) {
    if (row.issues.length === 0) continue
    failed = true
    console.log(`✗ ${row.rel}`)
    for (const issue of row.issues) console.log(`    ${issue}`)
    if (row.description) {
      console.log(`    "${row.description.slice(0, 80)}${row.description.length > 80 ? '…' : ''}"`)
    }
  }

  for (const [desc, paths] of duplicates) {
    failed = true
    console.log(`✗ duplicate description (${paths.length} files)`)
    console.log(`    ${paths.join(', ')}`)
    console.log(`    "${desc.slice(0, 80)}${desc.length > 80 ? '…' : ''}"`)
  }

  const okCount = results.filter((r) => r.issues.length === 0).length
  console.log(`\n${okCount}/${results.length} files passed length checks.`)

  if (failed) {
    console.error('\nMetadata audit failed.')
    process.exit(1)
  }
  console.log('Metadata audit passed.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
