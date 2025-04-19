import Link from 'next/link'

export default function WinterPolicyFestPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">Winter Policy Fest 2025</h1>
      <p className="mb-6 text-lg">12-18 January, online</p>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Overview</h2>
        <p>
          Winter Policy Fest is a week-long online gathering focused on the development, discussion,
          and consultation of Green Party policy. Sessions are open to all members and designed to
          be welcoming to new participants.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Policy Consultations</h2>
        <p>
          Sessions will focus on upcoming voting papers and draft proposals for Spring and Autumn
          Conference 2025. The full schedule will be published closer to the event.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Who Can Attend?</h2>
        <p>
          Any Green Party member interested in policy development — whether you're an experienced
          working group convenor or just curious to learn — is welcome to attend.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">How to Register</h2>
        <p>
          Registration opens in late 2024. Check back for more details or join our policy mailing
          list to be notified.
        </p>
        <p className="mt-2 text-sm">
          <Link href="/contact" className="text-fair underline">
            Contact the PDC or request updates
          </Link>
        </p>
      </section>
    </main>
  )
}
