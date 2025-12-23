import Link from 'next/link'
import { 
  Award,
  BookOpen,
  Sparkles,
  Trophy,
  GraduationCap,
  Star,
  CheckCircle,
  Target,
  Shield,
  Phone,
  Calendar
} from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float">
          <GraduationCap className="w-10 h-10 text-white/40" />
        </div>
        <div className="absolute top-40 right-20 text-4xl animate-float animation-delay-1000">
          <BookOpen className="w-10 h-10 text-white/40" />
        </div>
        <div className="absolute bottom-20 left-20 text-4xl animate-float animation-delay-2000">
          <Sparkles className="w-10 h-10 text-white/40" />
        </div>
        <div className="absolute bottom-40 right-10 text-4xl animate-float animation-delay-1500">
          <Trophy className="w-10 h-10 text-white/40" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fadeIn">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg animate-pulse-soft font-['Inter',sans-serif] flex items-center gap-2 justify-center">
              <Award className="w-5 h-5" />
              Silver Jubilee Celebration
              <Award className="w-5 h-5" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Poppins',sans-serif] animate-slideInLeft">
            Celebrating{' '}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
              25 Years
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8 space-y-4 animate-slideInRight">
            <p className="text-white text-xl font-semibold font-['Inter',sans-serif] flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Join 800+ Successful Students and 1000+ Happy Parents
              <Star className="w-5 h-5 text-yellow-400" />
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Experienced Staff
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Quality Education
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                Holistic Development
              </div>
            </div>
          </div>

          <div className="mb-8 animate-fadeIn animation-delay-1000">
            <p className="text-orange-400 dark:text-orange-300 text-2xl font-bold mb-2 animate-pulse font-['Poppins',sans-serif] flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6" />
              Admissions Open!
            </p>
            <p className="text-white text-xl font-['Inter',sans-serif]">
              Academic Year 2025-2026 | Pre-KG to 5th Standard
            </p>
          </div>

          <Link 
            href="/admission"
            className="group relative inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce-slow font-['Inter',sans-serif] btn-ripple overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Enroll Your Kid Now
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
          </Link>

          <p className="text-white/80 text-sm mt-8 font-['Inter',sans-serif] flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call us: <a href="tel:7695930309" className="text-orange-400 hover:text-orange-300 font-semibold">7695930309</a>
          </p>
        </div>
      </div>
    </section>
  )
}