'use client'

import { MapPin, FileText, Users, CheckCircle } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'

export default function AdmissionPage() {
  const handleDownload = () => {
    // Create a temporary link element for PNG image
    const link = document.createElement('a');
    link.href = '/gallery/admission-form.png';
    link.download = 'Sri_Bharathi_Vidhyalaya_Admission_Form.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-20 w-96 h-96 bg-gradient-to-br from-green-300 to-blue-300 dark:from-green-900 dark:to-blue-900 rounded-full opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-gradient-to-br from-orange-300 to-yellow-300 dark:from-orange-900 dark:to-yellow-900 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 font-['Fredoka',sans-serif] animate-fadeIn">Admission Process</h1>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-scale-in">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-['Fredoka',sans-serif] flex items-center gap-3">
              <FileText className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              How to Apply
            </h2>
            <ol className="space-y-6 mb-8">
              {[
                { icon: MapPin, title: 'Visit Our Campus', desc: 'Schedule a visit to see our facilities and meet our staff' },
                { icon: FileText, title: 'Submit Application', desc: 'Fill out the admission form with required documents' },
                { icon: Users, title: 'Interview & Assessment', desc: 'Meet with our principal for assessment and orientation' },
                { icon: CheckCircle, title: 'Confirmation', desc: 'Receive admission confirmation and complete fee payment' },
              ].map((step, index) => (
                <li key={index} className="flex items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-600 dark:text-blue-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-['Fredoka',sans-serif]">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            
            <button 
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-['Quicksand',sans-serif] flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5" />
              Download Application Form
            </button>

            {/* Preview option */}
            <div className="mt-6 text-center">
              <a 
                href="/gallery/admission-form.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                👁️ Preview form before downloading
              </a>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <p className="text-center text-gray-700 dark:text-gray-300 font-['Poppins',sans-serif]">
                📢 <span className="font-bold text-orange-600 dark:text-orange-400">Admissions Open for 2026-2027</span><br/>
                Pre-KG to 5th Standard
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}