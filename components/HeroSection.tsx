'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Award, Users, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentSlogan, setCurrentSlogan] = useState(0)
  const slogans = [
    "A safe and joyful place for your lovely children",
    "Where every child's potential is nurtured",
    "Building tomorrow's leaders today"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center overflow-hidden transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-pink-300 to-orange-300 dark:from-pink-900 dark:to-orange-900 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-gradient-to-br from-teal-300 to-blue-300 dark:from-teal-900 dark:to-blue-900 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="animate-slideInLeft">
              <div className="inline-block mb-4 animate-bounce-slow">
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full font-['Quicksand',sans-serif] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Putting the pupil first
                </span>
              </div>
              
              {/* 25 Years Anniversary Badge - Added here */}
              <div className="mb-6 flex justify-start">
                <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 rounded-xl shadow-2xl p-2 animate-pulse border-2 border-amber-300 dark:border-amber-500">
                  <div className="flex items-center">
                    <div className="bg-white dark:bg-gray-900 rounded-lg px-4 py-2 text-center">
                      <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 font-['Fredoka',sans-serif] leading-none">25</div>
                      <div className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Years</div>
                    </div>
                    <div className="ml-3 text-white font-['Poppins',sans-serif]">
                      <div className="text-lg font-bold">ANNIVERSARY</div>
                      <div className="text-xs opacity-90">Celebrating Excellence</div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-300 dark:bg-amber-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-300 dark:bg-amber-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Smooth Transitioning Slogans */}
              <div className="relative h-[220px] md:h-[260px] lg:h-[280px] mb-6 overflow-hidden">
                {slogans.map((slogan, index) => (
                  <h1
                    key={index}
                    className={`absolute top-0 left-0 w-full text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight font-['Fredoka',sans-serif] transition-all duration-1000 ${
                      index === currentSlogan
                        ? 'opacity-100 translate-y-0'
                        : index < currentSlogan
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
                      {slogan}
                    </span>
                  </h1>
                ))}
              </div>
              
              <div className="space-y-3 mb-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-['Poppins',sans-serif] animate-fadeIn flex items-center gap-2">
                  <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <span className="font-bold text-orange-600 dark:text-orange-400">25 Years of Excellence</span> - Silver Jubilee Celebration
                </p>
                <p className="text-orange-600 dark:text-orange-400 font-semibold text-xl animate-pulse font-['Poppins',sans-serif] flex items-center gap-2">
                  <GraduationCap className="w-7 h-7" />
                  Admissions Open for 2025-2026
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold animate-fadeIn animation-delay-500 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    800+ Students
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full font-semibold animate-fadeIn animation-delay-1000 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    1000+ Happy Parents
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
                <Link 
                  href="/admission"
                  className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-['Poppins',sans-serif] animate-slideInLeft animation-delay-1500 inline-block"
                >
                  <span className="flex items-center gap-2">
                    Enroll Your Kid
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg animate-fadeIn animation-delay-2000 hover:scale-105 transition-transform">
                  <div className="flex text-yellow-400 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium font-['Poppins',sans-serif]">4.8 on Google</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 w-fit px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-slideInLeft animation-delay-2500">
                <div className="bg-orange-500 p-2 rounded-full animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="text-gray-900 dark:text-white font-bold font-['Poppins',sans-serif]">7695930309</span>
              </div>
            </div>

            {/* Right Side - Animated Images */}
            <div className="relative animate-slideInRight">
              <div className="grid grid-cols-2 gap-6">
                {/* Large image with icon */}
                <div className="relative group animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl h-80 overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-2xl flex items-center justify-center">
                    <GraduationCap className="w-32 h-32 text-white animate-bounce-slow" />
                  </div>
                </div>
                
                {/* Small image with icon */}
                <div className="relative group mt-16 animate-float animation-delay-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-pink-400 dark:from-orange-600 dark:to-pink-600 rounded-3xl h-64 overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-24 h-24 text-white animate-bounce-slow animation-delay-500" />
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-float animation-delay-2000">
                <div className="text-center">
                  <Award className="w-12 h-12 text-orange-500 dark:text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white font-['Fredoka',sans-serif]">25 Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}