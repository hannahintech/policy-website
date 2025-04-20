'use client'

export default function ManifestoLongPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">General Election Manifesto 2024 (Long)</h1>
      <p className="mb-4 text-lg text-gray-800">
        This is the full-length manifesto setting out the Green Party's priorities for the 2024
        General Election.
      </p>
      <a
        href="/files/manifesto-2024-long.pdf"
        className="text-fair underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the full manifesto (PDF)
      </a>
    </main>
  )
}
