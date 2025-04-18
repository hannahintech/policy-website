import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-fair text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-heading tracking-wide">
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
