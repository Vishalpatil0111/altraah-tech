'use client'

import Link from 'next/link'

function HomeCTA() {
  return (
    <div className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
          Ready to Start Your LED PCB Project?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get professional LED PCB manufacturing with fast turnaround and guaranteed quality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
          >
            Get Quote Now
          </Link>
          <Link 
            href="/products" 
            className="border-2 border-slate-600 text-white hover:bg-slate-600 px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCTA