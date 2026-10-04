import { useState } from 'react'
import Button from './Button'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">Yared Tech School</div>

        {/* desktop links - hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#courses" className="transition hover:text-blue-400">Courses</a>
          <a href="#pricing" className="transition hover:text-blue-400">Pricing</a>
          <a href="#contact" className="transition hover:text-blue-400">Contact</a>
          <a href="#pricing">
            <Button variant="pink">Enroll Now</Button>
          </a>
        </div>

        {/* menu button - only on mobile */}
        <button
          className="block rounded text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="space-y-3 bg-slate-800 px-4 py-4 md:hidden">
          <a href="#courses" className="block hover:text-blue-400">Courses</a>
          <a href="#pricing" className="block hover:text-blue-400">Pricing</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
