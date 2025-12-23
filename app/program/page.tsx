'use client'

import { useState } from 'react'
import { BookOpen, Sparkles, Brain, Palette, Trophy, Activity, Music, Beaker, Users, GraduationCap, Globe, Heart, Zap } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'

const programs = [
  {
    class: 'Pre-KG',
    age: '2.5 - 3.5 Years',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    shortDesc: 'Foundational learning through play and exploration',
    fullContent: [
      'Montessori-inspired activities for early cognitive development',
      'Sensory play with sand, water, and textures',
      'Basic social skills: sharing, taking turns, and cooperation',
      'Introduction to colors, shapes, and numbers through games',
      'Music and movement sessions for rhythm development',
      'Fine motor skills development through art activities',
      'Storytelling sessions to build listening skills',
      'Outdoor play for gross motor development'
    ],
    specialFeatures: ['Play-based Learning', 'Parent-Toddler Sessions', 'Safety First Environment']
  },
  {
    class: 'LKG',
    age: '3.5 - 4.5 Years',
    icon: Sparkles,
    color: 'from-purple-500 to-indigo-500',
    shortDesc: 'Developing language skills and basic concepts',
    fullContent: [
      'Phonics-based English language introduction',
      'Basic Tamil vocabulary and rhymes',
      'Number concepts 1-50 with hands-on activities',
      'Creative expression through art and craft',
      'Environmental awareness: plants, animals, seasons',
      'Developing pencil grip and pre-writing skills',
      'Introduction to simple science concepts',
      'Dramatic play and role-playing activities'
    ],
    specialFeatures: ['Phonics Program', 'Creative Arts', 'Field Trips']
  },
  {
    class: 'UKG',
    age: '4.5 - 5.5 Years',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    shortDesc: 'Building academic readiness for primary school',
    fullContent: [
      'Reading readiness with simple sentences',
      'Basic writing skills with guided practice',
      'Number operations 1-100 (addition/subtraction)',
      'Introduction to computer basics',
      'Science experiments: sink/float, magnets',
      'Social studies: family, community helpers',
      'Public speaking and show-and-tell activities',
      'Problem-solving through puzzles and games'
    ],
    specialFeatures: ['Reading Readiness', 'Computer Literacy', 'Science Exploration']
  },
  {
    class: '1st Standard',
    age: '5.5 - 6.5 Years',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    shortDesc: 'Structured learning with emphasis on literacy',
    fullContent: [
      'Comprehensive English reading and writing',
      'Tamil language with basic grammar',
      'Mathematics: addition, subtraction, measurement',
      'Environmental studies: our body, food, shelter',
      'Introduction to keyboard typing',
      'Art: coloring, drawing, simple crafts',
      'Physical education: basic exercises, games',
      'Moral science: values and good habits'
    ],
    specialFeatures: ['Structured Curriculum', 'Computer Lab', 'Library Periods']
  },
  {
    class: '2nd Standard',
    age: '6.5 - 7.5 Years',
    icon: Globe,
    color: 'from-amber-500 to-orange-500',
    shortDesc: 'Expanding knowledge and critical thinking',
    fullContent: [
      'English grammar: nouns, verbs, adjectives',
      'Tamil reading comprehension',
      'Mathematics: multiplication, division, time',
      'Science: plants, animals, air, water',
      'Social studies: our country, festivals',
      'Computer: MS Paint, basic commands',
      'Art: painting, clay modeling',
      'Yoga and meditation sessions'
    ],
    specialFeatures: ['Grammar Foundation', 'Project-based Learning', 'Yoga Sessions']
  },
  {
    class: '3rd Standard',
    age: '7.5 - 8.5 Years',
    icon: Beaker,
    color: 'from-red-500 to-pink-500',
    shortDesc: 'Developing analytical and research skills',
    fullContent: [
      'English composition and comprehension',
      'Tamil poetry and stories',
      'Mathematics: fractions, geometry, money',
      'Science: living/non-living, states of matter',
      'Social studies: maps, continents, oceans',
      'Computer: MS Word basics, internet safety',
      'General knowledge quizzes',
      'Karate training for discipline'
    ],
    specialFeatures: ['Science Lab', 'Computer Applications', 'Karate Classes']
  },
  {
    class: '4th Standard',
    age: '8.5 - 9.5 Years',
    icon: Zap,
    color: 'from-violet-500 to-purple-500',
    shortDesc: 'Advanced concepts with application focus',
    fullContent: [
      'English literature and creative writing',
      'Tamil grammar and composition',
      'Mathematics: decimals, measurements, data handling',
      'Science: human body, solar system, electricity',
      'Social studies: history, civics, geography',
      'Computer: PowerPoint presentations',
      'Art: perspective drawing, craft work',
      'Sports: athletics, team games'
    ],
    specialFeatures: ['Creative Writing', 'Science Projects', 'Sports Competitions']
  },
  {
    class: '5th Standard',
    age: '9.5 - 10.5 Years',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    shortDesc: 'Preparation for higher education transition',
    fullContent: [
      'Advanced English grammar and literature',
      'Tamil: essays, letters, comprehension',
      'Mathematics: area, volume, averages, percentages',
      'Science: ecosystems, energy, natural resources',
      'Social studies: Indian history, government',
      'Computer: Excel basics, coding introduction',
      'Public speaking and debate competitions',
      'Career guidance and aptitude tests'
    ],
    specialFeatures: ['Advanced Curriculum', 'Coding Basics', 'Career Guidance']
  }
]

const coCurricularActivities = [
  { 
    Icon: Activity, 
    title: 'Yoga & Meditation', 
    desc: 'Daily sessions for physical fitness, flexibility, and mental peace. Improves concentration and reduces stress.', 
    benefits: ['Improved Focus', 'Stress Relief', 'Better Posture']
  },
  { 
    Icon: Trophy, 
    title: 'Karate Training', 
    desc: 'Professional martial arts training focusing on self-defense, discipline, and confidence building.', 
    benefits: ['Self Defense', 'Discipline', 'Confidence']
  },
  { 
    Icon: Music, 
    title: 'Music & Dance', 
    desc: 'Classical and contemporary music lessons with dance classes in Bharatanatyam and Western styles.', 
    benefits: ['Rhythm Sense', 'Cultural Awareness', 'Expression']
  },
  { 
    Icon: Palette, 
    title: 'Arts & Crafts', 
    desc: 'Creative workshops in painting, pottery, origami, and craft to nurture artistic talent.', 
    benefits: ['Creativity', 'Fine Motor Skills', 'Patience']
  },
  { 
    Icon: Brain, 
    title: 'Brain Games', 
    desc: 'Chess, puzzles, and logical games to enhance problem-solving and strategic thinking.', 
    benefits: ['Logical Thinking', 'Strategy', 'Memory']
  },
  { 
    Icon: Globe, 
    title: 'Language Club', 
    desc: 'Additional language learning opportunities including basic French and Hindi conversation.', 
    benefits: ['Multilingual', 'Communication', 'Cultural']
  }
]

export default function ProgramPage() {
  // Track which card is expanded by its index
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleExpand = (index: number) => {
    // If clicking the already expanded card, collapse it
    // Otherwise, expand the clicked card
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-orange-300/30 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-['Fredoka',sans-serif]">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Academic Programs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Poppins',sans-serif]">
              Comprehensive education from Pre-KG to 5th Standard with focus on academic excellence and holistic development
            </p>
            <div className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-lg font-semibold animate-pulse">
              Age Group: 2.5 to 10.5 Years
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Academic Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border border-white/20 flex flex-col ${
                    expandedIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Program Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${program.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full">
                      {program.age}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-['Fredoka',sans-serif]">
                    {program.class}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-['Poppins',sans-serif]">
                    {program.shortDesc}
                  </p>

                  {/* Special Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.specialFeatures.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content - Shows ONLY for the clicked card */}
                  {expandedIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 font-['Quicksand',sans-serif]">
                        Curriculum Highlights:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {program.fullContent.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Learn More Button - Perfectly aligned at bottom for ALL cards */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleExpand(index)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {expandedIndex === index ? 'Show Less' : 'Learn More'}
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Co-Curricular Activities Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-2xl backdrop-blur-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-['Fredoka',sans-serif]">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Co-Curricular</span> Activities
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Poppins',sans-serif]">
                  Beyond academics, we nurture talents and develop life skills through diverse activities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coCurricularActivities.map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <activity.Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1 font-['Fredoka',sans-serif]">{activity.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-['Poppins',sans-serif]">{activity.desc}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {activity.benefits.map((benefit, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Schedule */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 font-['Fredoka',sans-serif]">
                  Weekly Activity Schedule
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, i) => (
                    <div key={i} className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-xl text-center">
                      <div className="font-bold text-gray-800 dark:text-white mb-2">{day}</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {['Yoga', 'Karate', 'Music', 'Arts', 'Sports', 'Club'][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold shadow-lg">
                🎓 Admissions Open for 2025-2026 Academic Year
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 font-['Poppins',sans-serif]">
                Each program is carefully designed by our expert educators to ensure optimal learning outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}