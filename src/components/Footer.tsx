export default function Footer() {
    return (
      <footer className="bg-forest text-white text-sm py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Green Party of England & Wales. All rights reserved.
        </div>
      </footer>
    );
  }
  