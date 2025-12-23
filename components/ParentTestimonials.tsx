// components/ParentTestimonials.tsx
'use client'

import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function ParentTestimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center uppercase tracking-wide mb-12 font-['Quicksand',sans-serif]">What parents say</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group animate-fadeIn">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-3xl overflow-hidden shadow-2xl aspect-square transform group-hover:scale-105 transition-all duration-500 hover:shadow-3xl border border-white/20">
                <div className="w-full h-full relative">
                  <Image
                    src="/gallery/img14.png"
                    alt="Happy parents and students at Sri Bharathi Vidhyalaya"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold font-['Poppins',sans-serif] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      1000+ Happy Parents Trust Our School
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fadeIn animation-delay-500">
              <div className="text-orange-500 dark:text-orange-400 mb-6">
                <Quote className="w-12 h-12 animate-pulse-soft" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed font-['Poppins',sans-serif]">
                SRI BHARATHI VIDHYALAYA has been exceptional for our child's development. The experienced teachers, focus on both academics and co-curricular activities like yoga and karate, and the caring environment have made a huge difference. We're part of the 1000+ happy parents who trust this institution.
              </p>
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white font-['Fredoka',sans-serif]">Parent of our School</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}