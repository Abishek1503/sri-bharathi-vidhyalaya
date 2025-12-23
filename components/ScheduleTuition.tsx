import { Clock, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function ScheduleTuition() {
  const plans = [
    {
      number: '01',
      title: 'Pre-KG to UKG',
      duration: '9:00 AM - 12:30 PM',
      description: 'Morning session with age-appropriate curriculum, play-based learning, and foundational skill development for early learners.',
    },
    {
      number: '02',
      title: '1st and 2nd Std',
      duration: '9:00 AM - 3:30 PM',
      description: 'Full day program with comprehensive academics, co-curricular activities, and personality development sessions.',
    },
    {
      number: '03',
      title: '4th to 5th Std',
      duration: '9:00 AM - 3:30 PM',
      description: 'Advanced learning with focus on critical thinking, problem-solving, and preparation for higher education.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center uppercase tracking-wide mb-2 font-['Quicksand',sans-serif] font-semibold animate-fadeIn">School Timings</p>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center font-['Fredoka',sans-serif] animate-fadeIn animation-delay-500">
            Schedules for Classes!
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg font-['Poppins',sans-serif]">
            Flexible programs designed for different age groups
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-orange-500 dark:hover:border-orange-400 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-orange-500 dark:text-orange-400 text-sm font-bold mb-2 font-['Quicksand',sans-serif]">{plan.number}</div>
                <h2 className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-4 font-['Fredoka',sans-serif] group-hover:scale-105 transition-transform">
                  {plan.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-['Poppins',sans-serif]">
                  {plan.description}
                </p>
                
                <div className="pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium font-['Poppins',sans-serif]">{plan.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-800">
            <GraduationCap className="w-16 h-16 text-orange-500 dark:text-orange-400 mx-auto mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-['Poppins',sans-serif]">
              Admissions open for Pre-KG to 5th Standard for Academic Year <span className="font-bold text-orange-600 dark:text-orange-400">2025-2026</span>
            </p>
            <Link 
              href="/admission"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-['Quicksand',sans-serif]"
            >
              Enroll Your Kid
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}