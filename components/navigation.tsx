'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Department', href: '#about' },
    { label: 'Club', href: '#student-branch' },
     { label: 'Teams', href: '#council' },
    { label: 'Events', href: '#events' },
    {label: 'Glimpse', href: '#Glimpse' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Club Members', href: '/club-members'},

   
    
  ]

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#hero">
         <img src="/logo.png"   alt="Logo" className="h-38 w-auto"/>
         </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 text-base">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-opacity hover:opacity-80 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded transition-opacity hover:opacity-80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
