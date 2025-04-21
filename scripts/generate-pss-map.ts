import fs from 'fs'
import path from 'path'

const dirPath = path.resolve('src/app/policies/data/pss')
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))

const mapEntries = files.map(file => {
  const slug = file.replace(/\.mdx$/, '')
  return `  "${slug}": () => import("@/app/policies/data/pss/${slug}.mdx")`
})

const output = `export const pssMdxMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {\n${mapEntries.join(',\n')}\n};\n`

fs.writeFileSync('src/components/mdx/pssMap.ts', output)
console.log('✅ Generated pssMap.ts')
