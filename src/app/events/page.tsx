import Link from 'next/link'

export default function EventsIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 font-heading text-3xl">Green Party Events</h1>

      <p className="mb-6 text-lg">
        The Green Party hosts a range of member-driven events each year — from policy-making
        weekends to conferences and training sessions. All members are welcome, whether you're
        shaping motions, learning how the process works, or connecting with others in the party.
      </p>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Upcoming Events</h2>
        <ul className="space-y-6">
          <li className="rounded bg-fair/10 p-4 shadow-sm">
            <h3 className="mb-1 text-xl font-semibold">Summer Policy Fest 2025</h3>
            <p className="mb-1 text-sm">17-18 May, Birmingham and online</p>
            <Link href="/events/summer-2025" className="text-fair underline">
              Event details
            </Link>
          </li>
          <li className="rounded bg-fair/10 p-4 shadow-sm">
            <h3 className="mb-1 text-xl font-semibold">Winter Policy Fest 2025</h3>
            <p className="mb-1 text-sm">12-18 January, online</p>
            <Link href="/events/winter-2025" className="text-fair underline">
              Event details
            </Link>
          </li>
          <li className="rounded bg-fair/10 p-4 shadow-sm">
            <h3 className="mb-1 text-xl font-semibold">Autumn Conference 2025</h3>
            <p className="mb-1 text-sm">3-5 October, Bournemouth</p>
            <Link href="/events/autumn-conference-2025" className="text-fair underline">
              Event details
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Past Events</h2>
        <p className="text-sm text-gray-700">
          Recordings, reports, and outcomes from past conferences and policy fests will appear here
          soon.
        </p>
      </section>
    </main>
  )
}
