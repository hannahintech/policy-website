import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

async function main() {
  const mdxFiles = await glob('src/app/**/data/*.mdx')

  mdxFiles.forEach((mdxFile: string) => {
    const dir = path.dirname(mdxFile)
    const slug = path.basename(mdxFile, '.mdx')
    const modulePath = `./${slug}.mdx`
    const outPath = path.join(dir, `${slug}.mdx.d.ts`)

    const content = `import type { JSX } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module '${modulePath}' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export default Component
}
`

    fs.writeFileSync(outPath, content)
    console.log(`✅ Generated types for ${modulePath}`)
  })
}

main()
