import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-fair text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-3xl tracking-wide">
          GPEW Policy
        </Link>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link href="/policies" className="hover:underline">
            Policies
          </Link>
          <Link href="/process" className="hover:underline">
            Process
          </Link>
          <Link href="/dates" className="hover:underline">
            Key Dates
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
