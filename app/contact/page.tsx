// app/contact/page.tsx - REPLACE YOUR ENTIRE FILE WITH THIS
'use client'

import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollToTop from '@/components/ScrollToTop'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! We will get back to you within 24 hours.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection or call us at 9597462662.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-15 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Fredoka',sans-serif]">
              Contact <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Poppins',sans-serif]">
              Get in touch with us. We're here to answer your questions about admissions, programs, and more.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-slideInLeft">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-['Fredoka',sans-serif]">
                  📍 Our Location
                </h2>
                <div className="flex items-start gap-3 mt-4 group hover:translate-x-1 transition-transform">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">School Address</h3>
                    <p className="text-gray-600 font-['Poppins',sans-serif]">
                      10, Raja Nagar, Church Bus Stop<br />
                      88 Veppampattu, Tiruvallur<br />
                      TamilNadu 602024
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-green-50 text-green-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                    <a href="tel:7695930309" className="text-gray-600 hover:text-orange-600 transition-colors font-['Poppins',sans-serif] font-bold text-lg">
                      7695930309
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                    <a href="mailto:sribharathividhyalaya@gmail.com" className="text-gray-600 hover:text-orange-600 transition-colors font-['Poppins',sans-serif]">
                      sribharathividhyalaya@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 font-['Fredoka',sans-serif] flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  Follow Us On Social Media
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="https://www.instagram.com/sribharathividhyalaya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-gradient-to-br from-pink-50 to-white p-4 rounded-xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <Instagram className="w-8 h-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">Instagram</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1AaYauVCd8/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <Facebook className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
                  </a>
                  <a 
                    href="https://youtube.com/@sri_bharathi_vidhyalaya?si=RIykKx-iLRu4MvXe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-gradient-to-br from-red-50 to-white p-4 rounded-xl border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <Youtube className="w-8 h-8 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-slideInRight">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-['Fredoka',sans-serif] flex items-center gap-2">
                  <Send className="w-6 h-6 text-orange-600" />
                  Send Your Message
                </h2>
                <p className="text-gray-600 font-['Poppins',sans-serif]">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
                    : 'bg-gradient-to-r from-red-50 to-pink-50 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`font-['Poppins',sans-serif] ${
                    submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {submitStatus.message}
                  </span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins',sans-serif]">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full p-4 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white text-gray-800 transition-all duration-300 font-['Poppins',sans-serif] hover:border-gray-300"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins',sans-serif]">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white text-gray-800 transition-all duration-300 font-['Poppins',sans-serif] hover:border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins',sans-serif]">
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      className="w-full p-4 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white text-gray-800 transition-all duration-300 font-['Poppins',sans-serif] hover:border-gray-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins',sans-serif]">
                    Your Message *
                  </label>
                  <textarea 
                    name="message"
                    placeholder="Please share your query or message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    className="w-full p-4 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white text-gray-800 transition-all duration-300 font-['Poppins',sans-serif] hover:border-gray-300 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 font-['Quicksand',sans-serif] mt-2 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message Now
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}