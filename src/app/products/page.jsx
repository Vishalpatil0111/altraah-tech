'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { lightProducts, categories } from '@/data/lightProducts'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowMobileFilter(true)}
            className="md:hidden mb-4 w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Categories
          </button>

          <div className="flex gap-6 sm:gap-8">
            {/* Left Sidebar - Category Filter */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="poppins-semibold text-lg text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                      selectedCategory === 'All'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white font-medium'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Overlay */}
            {showMobileFilter && (
              <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowMobileFilter(false)}>
                <div className="fixed left-0 top-0 h-full w-3/4 bg-white shadow-xl p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="poppins-semibold text-lg text-gray-900">Categories</h3>
                    <button onClick={() => setShowMobileFilter(false)} className="p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => { setSelectedCategory('All'); setShowMobileFilter(false); }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                        selectedCategory === 'All'
                          ? 'bg-blue-600 text-white font-medium'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => { setSelectedCategory(category); setShowMobileFilter(false); }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white font-medium'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Right Side - Products Display */}
            <div className="flex-1">
              {/* Category Name */}
              <h1 className="poppins-bold text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8">{selectedCategory}</h1>

              {/* Subcategories */}
              <div className="space-y-8 sm:space-y-12">
                {(selectedCategory === 'All' 
                  ? categories.flatMap(cat => Object.entries(lightProducts[cat]).map(([sub, data]) => ({ category: cat, subcategory: sub, data })))
                  : Object.entries(lightProducts[selectedCategory]).map(([sub, data]) => ({ subcategory: sub, data }))
                ).map(({ category, subcategory, data }) => (
                  <div key={`${category || selectedCategory}-${subcategory}`}>
                    {/* Subcategory Name */}
                    <h2 className="poppins-semibold text-lg sm:text-xl text-gray-800 mb-4 sm:mb-6">{subcategory}</h2>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {data.variants.map((variant, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                          {/* Image */}
                          <div className="relative h-36 sm:h-48 bg-gray-100 overflow-hidden">
                            <img
                              src={data.image}
                              alt={`${subcategory} - ${variant}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Variant Description */}
                          <div className="p-3 sm:p-4 text-center">
                            <p className="poppins-medium text-gray-900 text-sm sm:text-base md:text-lg">{variant}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
