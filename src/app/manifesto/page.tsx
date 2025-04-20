import Link from 'next/link'

export default function ManifestoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 font-heading text-3xl">Green Party Manifesto 2024</h1>

      <p className="mb-4 text-lg">
        Our Manifesto sets out the Green Party's key policy pledges for the 2024 General Election.
        It builds on the values and long-term goals agreed by our members.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Download the Manifesto</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>
            <Link
              href="/manifesto/Green-Party-2024-General-Election-Manifesto-Long-version-with-cover.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fair underline"
            >
              Full Manifesto (PDF)
            </Link>
          </li>
          <li>
            <Link
              href="/manifesto/Short-Manifesto-2024-single-pages-screen-res_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fair underline"
            >
              Short Manifesto (PDF)
            </Link>
          </li>
          <li>
            <Link
              href="/manifesto/Green-Party-2024-General-Election-Manifesto-Easy-Read.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fair underline"
            >
              Easy Read Version (PDF)
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
