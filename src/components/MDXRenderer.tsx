'use client'

import { ComponentType } from 'react'

export default function MDXRenderer({ component }: { component: ComponentType }) {
  const Content = component
  return (
    <article className="prose prose-lg mx-auto max-w-3xl py-8">
      <Content />
    </article>
  )
}
