import { Heart, Smile, Palette, Lightbulb, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="animate-slideInLeft">
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2 font-['Quicksand',sans-serif] font-semibold">Why Choose Us</p>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 font-['Fredoka',sans-serif] animate-fadeIn leading-tight">
                The Best Early Learning Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed font-['Poppins',sans-serif] animate-fadeIn animation-delay-500">
                With 25 years of successful educational service, we provide quality education that nurtures every child's potential through experienced staff and modern teaching methodologies.
              </p>
              
              <div className="space-y-5 mb-10">
                {[
                  { text: 'Holistic approach to development', icon: CheckCircle },
                  { text: 'Passionate & experienced teachers', icon: CheckCircle },
                  { text: 'Safe & nurturing environment', icon: CheckCircle }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group transform hover:translate-x-3 transition-all duration-300 animate-fadeIn" style={{ animationDelay: `${(idx + 1) * 0.2}s` }}>
                    <div className="mr-4 mt-1">
                      <item.icon className="w-7 h-7 text-orange-500 dark:text-orange-400 group-hover:scale-125 transition-transform animate-pulse-soft" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-['Poppins',sans-serif] text-lg font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/about"
                className="group border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:border-transparent dark:hover:border-transparent px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-['Quicksand',sans-serif] btn-ripple inline-block"
              >
                <span className="flex items-center gap-2">
                  Know More
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Right Side - Cards Grid */}
            <div className="grid grid-cols-2 gap-6 animate-slideInRight">
              {[
                { 
                  Icon: Heart, 
                  title: 'Kindness', 
                  desc: 'Teaching compassion, empathy, and respect through daily interactions and value-based education',
                  bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30',
                  borderColor: 'border-orange-200 dark:border-orange-800',
                  iconColor: 'text-orange-500 dark:text-orange-400'
                },
                { 
                  Icon: Smile, 
                  title: 'Emotional Growth', 
                  desc: 'Developing emotional intelligence and social skills for better relationships and self-awareness',
                  bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/30',
                  borderColor: 'border-pink-200 dark:border-pink-800',
                  iconColor: 'text-pink-500 dark:text-pink-400'
                },
                { 
                  Icon: Palette, 
                  title: 'Creativity', 
                  desc: 'Encouraging imaginative thinking through arts, music, and hands-on creative activities',
                  bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30',
                  borderColor: 'border-blue-200 dark:border-blue-800',
                  iconColor: 'text-blue-500 dark:text-blue-400'
                },
                { 
                  Icon: Lightbulb, 
                  title: 'Innovation', 
                  desc: 'Fostering problem-solving and critical thinking skills for 21st century learners',
                  bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30',
                  borderColor: 'border-purple-200 dark:border-purple-800',
                  iconColor: 'text-purple-500 dark:text-purple-400'
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`${item.bgColor} ${item.borderColor} border-2 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 card-hover animate-scale-in cursor-pointer group`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={`${item.iconColor} mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <item.Icon className="w-12 h-12" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-xl text-gray-800 dark:text-white mb-3 font-['Fredoka',sans-serif] group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-['Poppins',sans-serif]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}