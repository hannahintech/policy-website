'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'

const mdxMap: Record<string, () => Promise<{ default: ComponentType }>> = {
  'example-policy': () => import('../data/example-policy.mdx'),
  // Add more slugs as needed
}

export default function PolicyPage() {
  const { slug } = useParams()
  const [Content, setContent] = useState<ComponentType | null>(null)

  useEffect(() => {
    const loader = mdxMap[slug as string]
    if (!loader) return
    loader().then(mod => setContent(() => mod.default))
  }, [slug])

  if (!slug || !mdxMap[slug as string]) {
    return <div className="text-red-600 p-6">404 - Policy not found</div>
  }

  if (!Content) return <div className="p-6">Loading...</div>

  return (
    <article className="prose prose-lg mx-auto max-w-3xl py-8">
      <Content />
    </article>
  )
}
