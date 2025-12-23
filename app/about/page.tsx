'use client'

import { Heart, Target, Sparkles, GraduationCap, Users, BookOpen, Trophy, Globe, Shield, Star, Award, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Live Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        
        {/* Animated Particles Background - FIXED with deterministic values */}
        <div className="absolute inset-0">
          {[
            { left: '84.44%', top: '76.46%', duration: '7.01s', delay: '1.74s', width: '2.60px', height: '4.78px' },
            { left: '70.77%', top: '81.03%', duration: '7.38s', delay: '1.26s', width: '4.99px', height: '4.70px' },
            { left: '26.99%', top: '9.28%', duration: '8.08s', delay: '1.91s', width: '4.21px', height: '4.37px' },
            { left: '99.93%', top: '24.32%', duration: '9.20s', delay: '0.63s', width: '3.20px', height: '4.97px' },
            { left: '26.66%', top: '98.45%', duration: '9.89s', delay: '1.92s', width: '4.87px', height: '3.81px' },
            { left: '12.49%', top: '75.56%', duration: '9.09s', delay: '0.47s', width: '2.66px', height: '3.22px' },
            { left: '19.12%', top: '99.18%', duration: '6.11s', delay: '0.45s', width: '2.66px', height: '4.68px' },
            { left: '13.67%', top: '37.22%', duration: '9.77s', delay: '1.55s', width: '3.24px', height: '4.54px' },
            { left: '23.42%', top: '97.87%', duration: '9.33s', delay: '0.40s', width: '3.40px', height: '3.34px' },
            { left: '98.80%', top: '61.94%', duration: '6.70s', delay: '1.76s', width: '3.13px', height: '2.91px' },
            { left: '85.60%', top: '32.71%', duration: '7.83s', delay: '1.31s', width: '3.97px', height: '4.03px' },
            { left: '65.09%', top: '42.36%', duration: '7.00s', delay: '0.80s', width: '2.11px', height: '3.64px' },
            { left: '25.08%', top: '87.58%', duration: '7.39s', delay: '1.16s', width: '3.03px', height: '4.99px' },
            { left: '36.76%', top: '70.28%', duration: '9.56s', delay: '0.92s', width: '3.00px', height: '3.50px' },
            { left: '20.21%', top: '0.40%', duration: '8.03s', delay: '1.89s', width: '2.31px', height: '4.53px' },
            { left: '3.65%', top: '14.76%', duration: '7.07s', delay: '1.81s', width: '4.91px', height: '3.25px' },
            { left: '77.36%', top: '58.50%', duration: '8.93s', delay: '1.83s', width: '2.96px', height: '4.24px' },
            { left: '95.81%', top: '17.36%', duration: '8.92s', delay: '0.86s', width: '3.13px', height: '4.32px' },
            { left: '76.00%', top: '88.13%', duration: '8.97s', delay: '1.49s', width: '3.83px', height: '2.76px' },
            { left: '12.59%', top: '86.70%', duration: '6.94s', delay: '0.18s', width: '3.17px', height: '3.41px' },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.duration} ease-in-out infinite ${particle.delay}`,
                width: particle.width,
                height: particle.height,
              }}
            />
          ))}
        </div>

        {/* Moving Gradient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-teal-300/20 to-blue-300/20 dark:from-teal-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 relative z-10">
            {/* Main Title - Made Bigger */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight font-['Fredoka',sans-serif]">
              <span className="block">About</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Sri Bharathi Vidhyalaya
              </span>
            </h1>
            
            {/* Tagline - Made Bigger */}
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Poppins',sans-serif] mb-12 leading-relaxed">
              Celebrating 25 Years of Excellence • Silver Jubilee 2025-2026
            </p>

            {/* Silver Jubilee Badge */}
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-xl font-bold animate-pulse font-['Quicksand',sans-serif] backdrop-blur-sm shadow-lg mb-8">
              🎉 Silver Jubilee Celebration 2025-2026 🎉
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Poppins',sans-serif] mb-12">
              Transforming early education through innovative learning, personalized attention, and a nurturing environment since 2001.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative z-10">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 font-['Fredoka',sans-serif] mb-3">25</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">Years of Excellence</div>
              <Trophy className="w-10 h-10 text-yellow-500 mx-auto mt-4 animate-bounce-slow" />
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
              <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 font-['Fredoka',sans-serif] mb-3">800+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">Happy Students</div>
              <Users className="w-10 h-10 text-orange-500 mx-auto mt-4 animate-bounce-slow animation-delay-500" />
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 font-['Fredoka',sans-serif] mb-3">40+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">Expert Teachers</div>
              <GraduationCap className="w-10 h-10 text-green-500 mx-auto mt-4 animate-bounce-slow animation-delay-1000" />
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 font-['Fredoka',sans-serif] mb-3">15+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">Activities</div>
              <Sparkles className="w-10 h-10 text-purple-500 mx-auto mt-4 animate-bounce-slow animation-delay-1500" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group backdrop-blur-lg">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Target className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold font-['Fredoka',sans-serif]">Our Mission</h3>
              </div>
              <p className="text-xl mb-8 opacity-90 font-['Poppins',sans-serif] leading-relaxed">
                To nurture young minds for a brighter tomorrow by providing holistic education that balances academics, values, and life skills.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-lg">Personalized learning journeys</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-500"></div>
                  <span className="text-lg">Character building & values education</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                  <span className="text-lg">Safe & nurturing environment</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-10 text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group backdrop-blur-lg">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Lightbulb className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold font-['Fredoka',sans-serif]">Our Vision</h3>
              </div>
              <p className="text-xl mb-8 opacity-90 font-['Poppins',sans-serif] leading-relaxed">
                To be the preferred institution for holistic education, creating responsible global citizens who excel in academics and life.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-lg">Excellence in education with a heart</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-500"></div>
                  <span className="text-lg">Innovative teaching methodologies</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                  <span className="text-lg">Global perspective with local values</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-['Fredoka',sans-serif]">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Poppins',sans-serif]">
              The principles that guide everything we do at Sri Bharathi Vidhyalaya
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Child-Centered', desc: 'Every decision puts the pupil first', color: 'from-red-500 to-pink-500' },
              { icon: Shield, title: 'Safety First', desc: 'Secure and nurturing environment', color: 'from-green-500 to-teal-500' },
              { icon: BookOpen, title: 'Excellence', desc: 'Striving for academic brilliance', color: 'from-blue-500 to-cyan-500' },
              { icon: Users, title: 'Community', desc: 'Strong partnership with parents', color: 'from-purple-500 to-pink-500' },
              { icon: Globe, title: 'Global Mindset', desc: 'Preparing for a connected world', color: 'from-indigo-500 to-purple-500' },
              { icon: Star, title: 'Innovation', desc: 'Modern teaching approaches', color: 'from-yellow-500 to-orange-500' },
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group border border-white/20"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-['Fredoka',sans-serif]">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 font-['Fredoka',sans-serif]">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 font-['Poppins',sans-serif] text-lg leading-relaxed">
                <p>
                  Founded in 2001, Sri Bharathi Vidhyalaya began with a simple vision: to create a learning environment where every child feels valued and inspired to learn.
                </p>
                <p>
                  Over the past 25 years, we've grown from a small neighborhood school to a respected educational institution, consistently adapting to changing educational needs while maintaining our core values.
                </p>
                <p>
                  Our journey has been marked by continuous innovation in teaching methodologies, infrastructure development, and community engagement.
                </p>
                <p>
                  Today, we proudly celebrate our Silver Jubilee (25th Anniversary) in 2025-2026, having nurtured thousands of students who have gone on to excel in various fields.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Animated Timeline */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
                {[
                  { year: '2001', event: 'School Founded', color: 'bg-blue-500' },
                  { year: '2008', event: 'Expanded Campus', color: 'bg-purple-500' },
                  { year: '2015', event: 'Digital Learning Initiative', color: 'bg-pink-500' },
                  { year: '2020', event: 'Smart Classrooms', color: 'bg-orange-500' },
                  { year: '2025', event: '🎊 Silver Jubilee 25 Years 🎊', color: 'bg-gradient-to-r from-amber-500 to-yellow-500' },
                ].map((milestone, index) => (
                  <div key={index} className="relative flex items-center mb-10 group">
                    <div className={`${milestone.color} w-6 h-6 rounded-full z-10 transform group-hover:scale-150 transition-all duration-300 shadow-lg`}></div>
                    <div className="ml-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                      <div className="font-bold text-2xl text-gray-900 dark:text-white font-['Fredoka',sans-serif]">{milestone.year}</div>
                      <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif] text-lg">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-center text-white transform hover:scale-105 transition-all duration-500 shadow-3xl backdrop-blur-lg">
            <div className="max-w-2xl mx-auto">
              <Award className="w-20 h-20 mx-auto mb-8 animate-bounce-slow" />
              <h3 className="text-4xl font-bold mb-6 font-['Fredoka',sans-serif]">
                Join Our Silver Jubilee Celebration
              </h3>
              <p className="text-2xl mb-10 opacity-90 font-['Poppins',sans-serif] leading-relaxed">
                Admissions open for 2025-2026. Be part of our 25th anniversary year celebrations!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-3xl font-['Quicksand',sans-serif] inline-block"
                >
                  Schedule a Visit
                </Link>
                <Link 
                  href="/admission"
                  className="bg-transparent border-2 border-white hover:bg-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-3xl font-['Quicksand',sans-serif] inline-block"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}