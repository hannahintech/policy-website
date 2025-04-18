import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-fair px-4 py-4 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-heading text-xl">
          GPEW Policy
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/policies" className="hover:underline">
            Policies
          </Link>
          <Link href="/process" className="hover:underline">
            Process
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/pwg" className="hover:underline">
            PWGs
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
