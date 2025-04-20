'use client'

import Link from 'next/link'

export default function PoliciesIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-8 font-heading text-3xl">Green Party Policy</h1>

      {/* Foundational */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Foundational Documents</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/about" className="text-fair underline">
              Philosophical Basis & Core Values
            </Link>
          </li>
          <li>
            <Link href="/manifesto" className="text-fair underline">
              Green Party Manifesto
            </Link>
          </li>
        </ul>
      </section>

      {/* Live Policy */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Live Policy (PSS & RoPS)</h2>
        <p className="mb-4 text-sm text-gray-700">
          These are the official policy positions agreed by members through Conference.
        </p>
        <ul className="space-y-3">
          <li>
            <Link href="/policies/pss" className="text-fair underline">
              Policies for a Sustainable Society (PSS)
            </Link>
          </li>
          <li>
            <Link href="/policies/rops" className="text-fair underline">
              Record of Policy Statements (RoPS)
            </Link>
          </li>
        </ul>
      </section>

      {/* Policy Motions */}
      <section>
        <h2 className="mb-3 text-2xl font-semibold">Policy Motions</h2>
        <p className="mb-4 text-sm text-gray-700">
          These motions have been submitted for debate at the next Green Party Conference.
        </p>
        <ul className="space-y-4">
          <li>
            <Link
              href="/policies/example-policy"
              className="block rounded border border-fair p-4 transition hover:bg-fair hover:text-white"
            >
              Example Policy: A Green Future
            </Link>
          </li>
          {/* Add more motions here as needed */}
        </ul>
      </section>
    </main>
  )
}
