'use client'

import type { MDXModule } from '@/types/mdx'
import { mdxComponents } from './mdx/componentMap'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'

interface Props {
  slug: keyof typeof mdxComponents
}

export default function DynamicMDXRenderer({ slug }: Props) {
  const [Component, setComponent] = useState<ComponentType | null>(null)

  useEffect(() => {
    const load = mdxComponents[slug]
    if (load) {
      load().then((mod: MDXModule) => {
        setComponent(() => mod.default)
      })
    }
  }, [slug])

  if (!Component) return <p>Loading...</p>

  return (
    <article className="prose prose-sm max-w-none">
      <Component />
    </article>
  )
}
