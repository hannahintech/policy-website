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
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-6 font-heading text-3xl">Policy Motions</h1>
      <ul className="space-y-4">
        {policyList.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/policies/${slug}`}
              className="block rounded border border-fair p-4 transition hover:bg-fair hover:text-white"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
