'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

let loaderFinished = false

export default function Loader() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      loaderFinished = true
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-9999 bg-slate-900 flex items-center justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-500/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-32 h-32 mx-auto">
            <div className="w-full h-full border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin" />
          </div>
          
          {/* Inner Pulsing Ring */}
          <div className="absolute inset-2 w-28 h-28 mx-auto">
            <div className="w-full h-full border-2 border-blue-300/50 rounded-full animate-pulse" />
          </div>

          {/* Logo */}
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <Image 
                src="/images/logo/logo.png" 
                alt="Altraah Logo" 
                width={60} 
                height={60}
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider animate-fade-in">
            ALTRAAH TECH
          </h1>
          <p className="text-blue-400 text-lg tracking-widest animate-fade-in-delay">
            LED PCB SOLUTIONS
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-linear-to-r from-blue-500 to-blue-400 rounded-full animate-loading-bar" />
        </div>

        {/* Loading Text */}
        <p className="text-slate-400 text-sm mt-4 animate-pulse">
          Initializing Manufacturing Systems...
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 animate-pulse" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-500/30 animate-pulse" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-500/30 animate-pulse" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-500/30 animate-pulse" />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          0%, 50% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-out;
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export { loaderFinished }