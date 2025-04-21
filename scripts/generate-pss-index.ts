import fs from 'fs'
import path from 'path'

const dir = path.resolve('src/app/policies/data/pss')
const outPath = path.resolve('src/app/policies/data/pss/index.ts')

const files = fs
  .readdirSync(dir)
  .filter(f => f.endsWith('.mdx'))
  .map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) // capitalise each word
    return { slug, title }
  })

const output = `// Auto-generated list of PSS policies

export const pssPolicies = ${JSON.stringify(files, null, 2)};
`

fs.writeFileSync(outPath, output)
console.log(`✅ Generated PSS index with ${files.length} entries`)
