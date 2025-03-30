"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
  ]

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">

        </div>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0 gap-4 sm:gap-8`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

