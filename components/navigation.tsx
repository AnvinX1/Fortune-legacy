"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/social", label: "Social" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-white/80 backdrop-blur-md border-b border-neutral-200" : "bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-neutral-900">
          FORTUNE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:text-blue-600 transition-colors ${pathname === link.href ? "text-blue-600 font-bold" : "text-neutral-600"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-all text-neutral-900"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-b border-neutral-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg uppercase tracking-widest hover:text-blue-600 transition-all py-2 ${pathname === link.href ? "text-blue-600 font-bold" : "text-neutral-600"
                } ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                transitionDuration: "300ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
