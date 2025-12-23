import { Dumbbell, Activity, Brain, Lightbulb, Palette, Trophy } from 'lucide-react'

export default function Activities() {
  const activities = [
    {
      title: 'Yoga & Meditation',
      description: 'Daily yoga sessions to improve physical fitness, flexibility, concentration, and mental well-being of students.',
      Icon: Activity,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Karate Training',
      description: 'Professional karate classes to build discipline, self-defense skills, confidence, and physical strength in children.',
      Icon: Dumbbell,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Problem Solving',
      description: 'Interactive sessions designed to enhance logical thinking, analytical skills, and creative problem-solving abilities.',
      Icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Critical Thinking',
      description: 'Activities and exercises that develop reasoning skills, decision-making abilities, and independent thinking in students.',
      Icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Arts & Crafts',
      description: 'Creative arts and crafts activities to nurture imagination, fine motor skills, and artistic expression in children.',
      Icon: Palette,
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Sports & Games',
      description: 'Various indoor and outdoor sports activities promoting teamwork, physical fitness, and sportsmanship among students.',
      Icon: Trophy,
      color: 'from-green-500 to-teal-500'
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center uppercase tracking-wide mb-2 font-['Quicksand',sans-serif] font-semibold animate-fadeIn">Our Activities</p>
          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 font-['Fredoka',sans-serif] animate-fadeIn animation-delay-500">
            Co-Curricular Activities
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg font-['Poppins',sans-serif]">
            Holistic development through diverse learning experiences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-orange-500 dark:hover:border-orange-400 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-r ${activity.color} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <activity.Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-['Fredoka',sans-serif] group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-['Poppins',sans-serif]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}