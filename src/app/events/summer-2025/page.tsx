import Link from 'next/link'

export default function SummerPolicyFestPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">Summer Policy Fest 2025</h1>
      <p className="mb-6 text-lg">17–18 May, Birmingham and online</p>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">What is Policy Fest?</h2>
        <p>
          Policy Fest is a hybrid event focused on how Green Party policies are made — not just what
          they say. Open to all members, it's a welcoming space for learning, collaboration, and
          development.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Format and Timetable</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Saturday:</strong> "Connecting Policy with Politics" – exploring communication
            between the policy community and elected members via case studies in democracy, climate,
            and nature.
          </li>
          <li>
            <strong>Sunday:</strong> "Strengthening the Policy Process and Community" – training on
            process, comms, and campaign messaging.
          </li>
          <li>
            Pre-event online consultations will run in the preceding week (details to follow).
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Registration & Costs</h2>
        <p className="mb-2">
          Tickets include tea/coffee breaks. In-person attendance capped at 120.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>In-person: £15 (1 day) / £20 (2 days)</li>
          <li>Online: £5 (1 day) / £7.50 (2 days)</li>
        </ul>
        <p className="mt-2">
          <Link href="/contact" className="text-fair underline">
            Book your place
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Venue & Catering</h2>
        <p className="mb-2">
          <strong>Location:</strong> Signing Tree, Deaf Cultural Centre, Ladywood Road, Birmingham
          B16 8SZ
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>No café onsite — bring your own food or eat nearby</li>
          <li>Optional packed lunch: £8.50 (order by 5 May)</li>
          <li>Shops and café are ~5 mins walk</li>
        </ul>
      </section>

      <p className="text-sm text-gray-600">
        For general enquiries, email{' '}
        <a href="mailto:policy@greenparty.org.uk" className="underline">
          policy@greenparty.org.uk
        </a>
      </p>
    </main>
  )
}
