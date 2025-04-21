'use client'

import Link from 'next/link'
import { pssPolicies } from '../data/pss/index'

export default function PSSPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 font-heading text-3xl">Policies for a Sustainable Society (PSS)</h1>
      <ul className="space-y-4">
        {pssPolicies.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/policies/pss/${slug}`}
              className="block rounded border border-fair p-4 transition hover:bg-fair hover:text-white"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
