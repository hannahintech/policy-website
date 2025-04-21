'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { pssMdxMap } from '@/components/mdx/pssMap' // 👈 your generated map

export default function PolicyPage() {
  const { slug } = useParams()
  const [Content, setContent] = useState<ComponentType | null>(null)

  useEffect(() => {
    if (!slug || Array.isArray(slug)) return

    const loader = pssMdxMap[slug]
    if (!loader) return

    loader()
      .then(mod => setContent(() => mod.default))
      .catch(() => setContent(null))
  }, [slug])

  if (!slug || !pssMdxMap[slug as string]) {
    return <div className="text-red-600 p-6">404 – Policy not found</div>
  }

  if (!Content) return <div className="p-6">Loading…</div>

  return (
    <article className="prose prose-lg mx-auto max-w-3xl py-8">
      <Content />
    </article>
  )
}
