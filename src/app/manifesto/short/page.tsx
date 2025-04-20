'use client'

export default function ManifestoShortPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">General Election Manifesto 2024 (Short)</h1>
      <p className="mb-4 text-lg text-gray-800">
        A concise version of the 2024 Green Party manifesto - easy to browse or share online.
      </p>
      <a
        href="/files/manifesto-2024-short.pdf"
        className="text-fair underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the short manifesto (PDF)
      </a>
    </main>
  )
}
