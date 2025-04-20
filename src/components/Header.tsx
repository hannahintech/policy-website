import Link from 'next/link'

const navItems = [
  { href: '/policies', label: 'Policies' },
  { href: '/process', label: 'Process' },
  { href: '/events', label: 'Events' },
  { href: '/pwgs', label: 'PWGs' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="bg-forest px-4 py-4 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <Link
          href="/"
          className="text-center font-heading text-xl font-bold hover:underline sm:text-left"
        >
          Green Party Policy
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
