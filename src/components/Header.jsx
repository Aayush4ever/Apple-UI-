import React from 'react'

const navItems = [
  'Store','Mac','iPad','iPhone','Watch','Vision','AirPods','TV & Home','Entertainment','Accessories','Support'
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/80 border-b border-white/10">
      <div className="container-max h-[52px] md:h-[44px] flex items-center justify-between">
        {/* Apple Logo */}
        <a href="#" aria-label="Apple" className="p-2 flex items-center">
          <img
            src="/apple-logo.svg"
            alt="Apple"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          {navItems.map((i) => (
            <a key={i} href="#" className="hover:text-white transition-colors">{i}</a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3 pr-1">
          <button aria-label="Search" className="p-2 opacity-80 hover:opacity-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button aria-label="Bag" className="p-2 opacity-80 hover:opacity-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 7h12l-1 12H7L6 7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}