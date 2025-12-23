// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Program', path: '/program' },
    { name: 'Admission', path: '/admission' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center group">
            {/* Logo image - Removed round styling */}
            <div className="mr-4 md:mr-5">
              <div className="relative w-16 h-16 md:w-20 md:h-20  ">
                <Image 
                  src="/gallery/favicon.ico"
                  alt="Sri Bharathi Vidhyalaya Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, 80px"
                  priority
                />
              </div>
            </div>
                        
            {/* School Name with adjusted spacing */}
            <div className="transform transition-all duration-300 group-hover:scale-105">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% font-['Poppins',sans-serif] tracking-tight leading-tight">
                SRI BHARATHI VIDHYALAYA
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-['Poppins',sans-serif] mt-1 italic">
                Putting the pupil first
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-lg font-bold transition-all duration-300 font-['Quicksand',sans-serif] ${
                  pathname === link.path
                    ? 'text-orange-500 scale-110'
                    : 'text-gray-700 hover:text-orange-500 hover:scale-105'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-slideIn"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Enroll Button - Now linked to Admission page */}
            <Link 
              href="/admission"
              className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Inter',sans-serif]"
            >
              Enroll now
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 px-4 py-4 bg-gray-50 rounded-lg mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-['Inter',sans-serif] ${
                  pathname === link.path
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admission"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-medium mt-4 transform hover:scale-105 transition-all duration-300 font-['Inter',sans-serif] text-center"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}