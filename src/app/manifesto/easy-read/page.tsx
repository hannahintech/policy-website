'use client'

export default function ManifestoEasyReadPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-4 font-heading text-3xl">General Election Manifesto 2024 (Easy Read)</h1>
      <p className="mb-4 text-lg text-gray-800">
        An accessible, easy-read version of the Green Party's 2024 manifesto.
      </p>
      <a
        href="/files/manifesto-2024-easy-read.pdf"
        className="text-fair underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the easy-read manifesto (PDF)
      </a>
    </main>
  )
}
