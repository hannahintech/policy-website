export default function Footer() {
  return (
    <footer className="mt-12 bg-forest py-6 text-sm text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        &copy; {new Date().getFullYear()} Green Party of England & Wales. All rights reserved.
      </div>
    </footer>
  )
}
