'use client'

import Link from 'next/link'
import { 
  Baby, 
  School, 
  Palette,
  GraduationCap, 
  Heart, 
  Users,
  Trophy,
  BookOpen,
  Award,
  Sparkles,
  Star
} from 'lucide-react'

export default function AgeSupport() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center uppercase tracking-wide mb-2 font-['Inter',sans-serif] animate-fadeIn">Classes Available</p>
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif] animate-fadeIn animation-delay-500">
            Age-specific support for every stage
          </h1>
          <p className="text-center text-orange-600 dark:text-orange-400 font-semibold mb-16 animate-pulse font-['Inter',sans-serif] flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Pre-KG to 5th Standard
            <GraduationCap className="w-5 h-5" />
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Pre-KG & LKG',
                desc: 'Early childhood education focusing on basic learning skills, social interaction, and creative development through play-based activities.',
                icon: Baby,
                bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30',
                iconColor: 'text-blue-600',
                delay: '0s'
              },
              { 
                title: 'UKG & 1st Std',
                desc: 'Building strong foundation in reading, writing, and numeracy with emphasis on cognitive development and motor skills.',
                icon: School,
                bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30',
                iconColor: 'text-pink-600',
                delay: '0.2s'
              },
              { 
                title: '2nd to 5th Std',
                desc: 'Comprehensive curriculum with focus on academics, co-curricular activities, and personality development for growing learners.',
                icon: BookOpen,
                bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30',
                iconColor: 'text-orange-600',
                delay: '0.4s'
              },
            ].map((program, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-hover animate-scale-in cursor-pointer"
                style={{ animationDelay: program.delay }}
              >
                <div className={`${program.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <program.icon className={`w-20 h-20 ${program.iconColor} animate-bounce-slow group-hover:scale-125 transition-transform duration-500`} />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-['Poppins',sans-serif] group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-['Inter',sans-serif]">{program.desc}</p>
                  <Link href="/program" className="group/btn text-orange-500 dark:text-orange-400 font-semibold flex items-center hover:text-orange-600 dark:hover:text-orange-300 transition-all font-['Inter',sans-serif]">
                    Learn more 
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: GraduationCap, 
                number: '800+', 
                label: 'Students', 
                color: 'from-blue-500 to-purple-500',
                iconBg: 'bg-blue-100 dark:bg-blue-900/30',
                iconColor: 'text-blue-600'
              },
              { 
                icon: Heart, 
                number: '1000+', 
                label: 'Happy Parents', 
                color: 'from-pink-500 to-red-500',
                iconBg: 'bg-pink-100 dark:bg-pink-900/30',
                iconColor: 'text-pink-600'
              },
              { 
                icon: Users, 
                number: '25+', 
                label: 'Experienced Staff', 
                color: 'from-green-500 to-teal-500',
                iconBg: 'bg-green-100 dark:bg-green-900/30',
                iconColor: 'text-green-600'
              },
              { 
                icon: Trophy, 
                number: '25', 
                label: 'Years Excellence', 
                color: 'from-orange-500 to-yellow-500',
                iconBg: 'bg-orange-100 dark:bg-orange-900/30',
                iconColor: 'text-orange-600'
              },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`${stat.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-slow`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 font-['Poppins',sans-serif]`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-['Inter',sans-serif]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}