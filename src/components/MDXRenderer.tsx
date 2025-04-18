'use client'

import { ComponentType } from 'react'

export default function MDXRenderer({ component }: { component: ComponentType }) {
  const Content = component
  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-8">
      <Content />
    </article>
  )
}
