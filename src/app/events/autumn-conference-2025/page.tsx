import Link from 'next/link'

export default function AutumnConference2025Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">Autumn Conference 2025</h1>
      <p className="mb-6 text-lg">3-5 October, Bournemouth International Centre</p>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">About Conference</h2>
        <p>
          Green Party Conferences are the highest decision-making bodies of the party. Autumn
          Conference 2025 will bring members together to debate policy, attend training, and engage
          in democratic process.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Who Can Attend?</h2>
        <p>
          All Green Party members are invited to attend and vote. Conference is open to anyone who
          wants to learn more about our values, motions, and governance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">AGM & Officer Reports</h2>
        <p>
          The Annual General Meeting (AGM) is held alongside Autumn Conference. Internally elected
          officers will report on their work. Members can ask questions and hold representatives
          accountable.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Registration & Info</h2>
        <p>Details of tickets, access info, and timetables will be published nearer the time.</p>
        <p className="mt-2 text-sm">
          <Link href="/contact" className="text-fair underline">
            Contact us with questions or support needs
          </Link>
        </p>
      </section>
    </main>
  )
}
