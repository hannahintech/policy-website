'use client'

import Link from 'next/link'

const policyList = [
  {
    slug: 'example-policy',
    title: 'Example Policy: A Green Future',
  },
]

export default function PoliciesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-heading mb-6">Policy Motions</h1>
      <ul className="space-y-4">
        {policyList.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/policies/${slug}`}
              className="block p-4 border border-fair rounded hover:bg-fair hover:text-white transition"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
