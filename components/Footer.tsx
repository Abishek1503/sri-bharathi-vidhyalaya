// components/Footer.tsx
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="animate-fadeIn">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-['Fredoka',sans-serif]">
                SRI BHARATHI VIDHYALAYA
              </span>
            </div>
            <p className="text-gray-600 mb-2 font-['Quicksand',sans-serif] italic font-semibold">
              Putting the pupil first
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed font-['Poppins',sans-serif]">
              Since 2001 - 25 Years of Successful Educational Service
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/sribharathividhyalaya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-3 bg-gray-100 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-110">
                  <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a 
                href="https://www.facebook.com/sribharathividhyalaya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-3 bg-gray-100 rounded-xl hover:bg-blue-600 transition-all transform hover:scale-110">
                  <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a 
                href="https://www.youtube.com/@sribharathividhyalaya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-red-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-3 bg-gray-100 rounded-xl hover:bg-red-600 transition-all transform hover:scale-110">
                  <Youtube className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn animation-delay-500">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Fredoka',sans-serif]">Quick Links</h3>
            <ul className="space-y-3 font-['Poppins',sans-serif]">
              <li><Link href="/" className="text-orange-500 hover:text-orange-600 transition-colors transform hover:translate-x-2 inline-block font-semibold">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">About Us</Link></li>
              <li><Link href="/admission" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Admission</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fadeIn animation-delay-1000">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Fredoka',sans-serif]">Our Programs</h3>
            <ul className="space-y-3 font-['Poppins',sans-serif]">
              <li><Link href="/program" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Pre-KG to 5th Std</Link></li>
              <li><Link href="/program" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Yoga & Karate</Link></li>
              <li><Link href="/program" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Problem Solving</Link></li>
              <li><Link href="/program" className="text-gray-600 hover:text-gray-900 transition-colors transform hover:translate-x-2 inline-block">Critical Thinking</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="animate-fadeIn animation-delay-1500">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Fredoka',sans-serif]">Get in Touch</h3>
            <div className="space-y-4 font-['Poppins',sans-serif]">
              <div className="flex items-start gap-3 group cursor-pointer hover:text-orange-500 transition-colors">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                <p className="text-gray-600 group-hover:text-orange-500 transition-colors">
                  10, Raja Nagar, Church Bus Stop<br />
                  88 Veppampattu, Tiruvallur<br />
                  TamilNadu 602024
                </p>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-orange-500 transition-colors">
                <Phone className="w-5 h-5 text-orange-500 group-hover:scale-125 transition-transform" />
                <a href="tel:7695930309" className="text-gray-600 group-hover:text-orange-500 transition-colors font-semibold">
                  7695930309
                </a>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5 text-orange-500 group-hover:scale-125 transition-transform" />
                <a href="mailto:sribharathividhyalaya@gmail.com" className="text-gray-600 group-hover:text-orange-500 transition-colors">
                  sribharathividhyalaya@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 font-['Poppins',sans-serif]">
            © {new Date().getFullYear()} Sri Bharathi Vidhyalaya. All rights reserved. | 
            <span className="text-orange-500 font-bold"> 25 Years of Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  )
}