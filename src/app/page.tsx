import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="mb-4 font-heading text-4xl">Welcome to the Green Party Policy Website</h1>
        <p className="max-w-prose text-lg">
          This site helps members explore, shape, and understand Green Party policy. Discover how
          our policy is made, what's coming up, and how to get involved.
        </p>
      </section>

      {/* Next Event Highlight */}
      <section className="mb-12">
        <h2 className="mb-4 font-heading text-2xl">Next Event</h2>
        <div className="rounded bg-fair/10 p-4 shadow-sm">
          <h3 className="mb-1 text-xl font-semibold">Summer Policy Fest 2025</h3>
          <p className="mb-2 text-sm">17-18 May, Birmingham and online</p>
          <Link href="/events/summer-2025" className="text-fair underline">
            View full details
          </Link>
        </div>
      </section>

      {/* Learn About Policy Making */}
      <section className="mb-12">
        <h2 className="mb-4 font-heading text-2xl">What is Green Party Policy?</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Policy Process</h3>
            <p className="mb-2 text-sm">
              Learn how our members shape party policy through conference, consultation, and local
              participation.
            </p>
            <Link href="/process" className="text-sm text-fair underline">
              Explore the policy process
            </Link>
          </li>
          <li className="rounded border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Philosophical Basis & Core Values</h3>
            <p className="mb-2 text-sm">Read the values that underpin everything we do.</p>
            <Link href="/about" className="text-sm text-fair underline">
              Read our values
            </Link>
          </li>
        </ul>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="mb-4 font-heading text-2xl">Quick Access</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <Link
              href="/policies"
              className="block rounded bg-fair/10 p-4 transition hover:bg-fair hover:text-white"
            >
              Browse All Policies
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block rounded bg-fair/10 p-4 transition hover:bg-fair hover:text-white"
            >
              Accreditation
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
