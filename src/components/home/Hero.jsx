'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductHighlights from './ProductHighlights'
import ChooseUs from './ChooseUs'
import AboutPreview from './AboutPreview'
import HomeCTA from './HomeCTA'

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&h=1080&fit=crop'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded font-body">
                ESTABLISHED 2010 | ISO 9001:2015 CERTIFIED
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
              Professional LED PCB<br/>
              <span className="text-blue-400">Manufacturing Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-body">
              Industry-leading LED printed circuit board design and manufacturing for automotive, industrial, and commercial lighting applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-colors duration-200 text-center font-body">
                VIEW PRODUCTS
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 font-semibold transition-colors duration-200 text-center font-body">
                REQUEST QUOTE
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-600">
              <div>
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-gray-400 text-sm font-body">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">13+</div>
                <div className="text-gray-400 text-sm font-body">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">99.8%</div>
                <div className="text-gray-400 text-sm font-body">Quality Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">24-48h</div>
                <div className="text-gray-400 text-sm font-body">Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductHighlights />
      <AboutPreview />
      <ChooseUs />
      <HomeCTA />

      {/* Industries Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Industries We Serve</h2>
            <p className="text-lg text-gray-600 font-body">Trusted LED PCB partner across multiple sectors</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-heading">Automotive</h3>
              <p className="text-sm text-gray-600 font-body">LED lighting systems</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                  <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-heading">Industrial</h3>
              <p className="text-sm text-gray-600 font-body">Manufacturing equipment</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-heading">Commercial</h3>
              <p className="text-sm text-gray-600 font-body">Architectural lighting</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-heading">Consumer</h3>
              <p className="text-sm text-gray-600 font-body">Electronics & displays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero