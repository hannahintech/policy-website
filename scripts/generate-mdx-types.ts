import fs from 'fs'
import path from 'path'

const mdxDir = path.resolve('src/app/policies/data')
const files = fs.readdirSync(mdxDir).filter(f => f.endsWith('.mdx'))

files.forEach(file => {
  const slug = file.replace(/\.mdx$/, '')
  const outPath = path.join(mdxDir, `${slug}.mdx.d.ts`)
  const modulePath = `./${slug}.mdx`

  const content = `import type { JSX } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module '${modulePath}' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export default Component
}
`

  fs.writeFileSync(outPath, content)
  console.log(`✅ Generated types for ${file}`)
})
