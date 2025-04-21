/* global console */

'use client'

import type { MDXModule } from '@/types/mdx'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'

interface Props {
  slug: string
  base?: 'pss' | 'rops'
}

export default function DynamicMDXRenderer({ slug, base }: Props) {
  const [Component, setComponent] = useState<ComponentType | null>(null)

  useEffect(() => {
    async function loadMDX() {
      try {
        const path = base
          ? `@/app/policies/data/${base}/${slug}.mdx`
          : `@/app/policies/data/${slug}.mdx`
        const mod: MDXModule = await import(path)
        setComponent(() => mod.default)
      } catch (err) {
        console.error(`Could not load MDX for ${slug}`, err)
      }
    }

    loadMDX()
  }, [slug, base])

  if (!Component) return <p>Loading...</p>

  return (
    <article className="prose prose-sm max-w-none">
      <Component />
    </article>
  )
}
