'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa'



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center">

          {/* LEFT – SOCIAL ICONS */}
          <div className="hidden md:flex flex-1 items-center gap-3">
            <a href="https://instagram.com" className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
              <FaInstagram size={14} />
            </a>
            <a href="https://facebook.com" className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
              <FaFacebookF size={14} />
            </a>
            <a href="https://linkedin.com" className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>

          {/* LEFT – LOGO (Mobile: left, Desktop: center) */}
          <div className="flex-1 flex justify-start md:justify-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/images/logo/logo.png" 
                alt="Altraah Logo" 
                width={40} 
                height={40}
                className="rounded-md"
              />

              <div className="leading-tight">
                <div className="text-xl uppercase font-semibold tracking-wide text-gray-900">
                  Altraah tech
                </div>
                <div className="text-xs font-medium text-blue-600 tracking-wide">
                  LED PCB Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT – NAV LINKS */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition whitespace-nowrap ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium whitespace-nowrap
              text-blue-600 border border-blue-500 rounded-md
              hover:bg-blue-600 hover:text-white transition"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden fixed right-0 top-16 bg-white h-screen w-1/2 shadow-xl z-50">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-3 text-sm font-medium text-white bg-blue-600 rounded-md"
            >
              Get Quote
            </Link>

            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
              <a href="https://instagram.com" className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
                <FaInstagram size={16} />
              </a>
              <a href="https://facebook.com" className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://linkedin.com" className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white hover:shadow-md transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
