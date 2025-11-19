// src/components/MenuBar.tsx   ←  FINAL VERSION
import { Link, useLocation } from 'react-router-dom'

export default function MenuBar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/apod', label: 'APOD' },
    { to: '/asteroids', label: 'Asteroids' },
    { to: '/mars', label: 'Mars Rover' },
    { to: '/earth', label: 'Earth' },
    { to: '/events', label: 'Events' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 tracking-wider">
            Cosmic Explorer
          </Link>

          {/* Menu – always visible, responsive spacing */}
          <div className="flex items-center gap-2 sm:gap-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  pathname === to
                    ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-400/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}