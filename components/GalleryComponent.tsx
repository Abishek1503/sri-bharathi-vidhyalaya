// components/GalleryComponent.tsx
'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image' // Add this import

const galleryImages = [
  {
    id: 1,
    src: '/gallery/img1.png',
    alt: 'School Event 1',
    category: 'Events',
    title: 'Karate Competition'
  },
  {
    id: 2,
    src: '/gallery/img2.png',
    alt: 'School Event 2',
    category: 'Sports',
    title: 'Independence Day Celebration'
  },
  {
    id: 3,
    src: '/gallery/img3.png',
    alt: 'School Infrastructure 1',
    category: 'Infrastructure',
    title: 'Annual Day Celebration'
  },
  {
    id: 4,
    src: '/gallery/img4.png',
    alt: 'School Infrastructure 2',
    category: 'Infrastructure',
    title: 'Fancy Dress Competition'
  },
  {
    id: 5,
    src: '/gallery/img5.png',
    alt: 'School Activity 1',
    category: 'Activities',
    title: 'Independence Day Celebration'
  },
  {
    id: 6,
    src: '/gallery/img6.png',
    alt: 'School Event 3',
    category: 'Events',
    title: 'Grandparent\'s Day Celebration'
  },
  {
    id: 7,
    src: '/gallery/img7.png',
    alt: 'School Infrastructure 3',
    category: 'Infrastructure',
    title: 'Star Winner of Abacus'
  },
  {
    id: 8,
    src: '/gallery/img8.png',
    alt: 'School Event 4',
    category: 'Events',
    title: 'Children\'s Day Celebration'
  },
  {
    id: 9,
    src: '/gallery/img9.png',
    alt: 'School Infrastructure 4',
    category: 'Infrastructure',
    title: 'Drawing Competition'
  },
  {
    id: 10,
    src: '/gallery/img10.png',
    alt: 'School Activity 2',
    category: 'Activities',
    title: 'Art & Craft Session'
  },
  {
    id: 11,
    src: '/gallery/img11.png',
    alt: 'School Event 5',
    category: 'Events',
    title: 'KinderGarden Graduation'
  },
  {
    id: 12,
    src: '/gallery/img12.png',
    alt: 'School Infrastructure 5',
    category: 'Infrastructure',
    title: 'Abacus'
  },
]

const categories = ['All', 'Events', 'Infrastructure', 'Sports', 'Activities']

export default function GalleryComponent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Fredoka',sans-serif]">
            School <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-['Poppins',sans-serif]">
            Explore our vibrant campus life, events, and state-of-the-art facilities through photographs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 font-['Quicksand',sans-serif] ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image.id - 1)}
            >
              {/* Image Container with Next.js Image */}
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg font-['Poppins',sans-serif]">{image.title}</h3>
                </div>
              </div>
              
              {/* View Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No images found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300 z-10 bg-black/50 p-3 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300 z-10 bg-black/50 p-3 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-4xl max-h-[80vh]">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {galleryImages[selectedImage].category}
                    </span>
                    <span className="text-sm text-white/80">
                      Image {selectedImage + 1} of {galleryImages.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-['Poppins',sans-serif]">{galleryImages[selectedImage].title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 font-['Fredoka',sans-serif]">25+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">Years of Memories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 font-['Fredoka',sans-serif]">1000+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 font-['Fredoka',sans-serif]">50+</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 font-['Fredoka',sans-serif]">12</div>
              <div className="text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">Photo Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}