import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="mb-4 font-heading text-4xl">Page Not Found</h1>
      <p className="mb-4 text-lg text-gray-700">
        Sorry, we couldn’t find that page. It may have moved, or it may not exist yet.
      </p>
      <p className="mb-6 text-gray-700">
        This is a new website we’re currently building — and we’d love your help.
      </p>
      <p className="mb-8 text-sm text-gray-600">
        <a href="mailto:policy@greenparty.org.uk" className="text-fair underline hover:text-forest">
          Contact us
        </a>{' '}
        with questions or feedback, or{' '}
        <a
          href="https://github.com/hannahintech/policy-website/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fair underline"
        >
          suggest an improvement on GitHub
        </a>
        .
      </p>
      <Link
        href="/"
        className="inline-block rounded bg-fair px-6 py-2 text-white transition hover:bg-forest"
      >
        Back to Homepage
      </Link>
    </main>
  )
}
