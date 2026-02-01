'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { allProducts as products } from '@/data/products'

export default function ProductDetailsPage() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const foundProduct = products.find(p => p.slug === params.slug)
    setProduct(foundProduct)
  }, [params.slug])

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/products" className="text-gray-500 hover:text-amber-600">Products</Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-96">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 px-3 py-1 rounded-full text-sm font-medium text-white">
                    {product.category}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Power Rating</div>
                    <div className="font-semibold text-gray-900">{product.powerRating}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Layers</div>
                    <div className="font-semibold text-gray-900">{product.layers}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Min Order</div>
                    <div className="font-semibold text-gray-900">{product.minOrder}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-semibold text-gray-900">{product.category}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link 
                    href="/contact"
                    className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-lg transition-all duration-300"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description} Our {product.name} is engineered for superior performance 
                      in demanding applications, offering excellent thermal management and reliability.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        High thermal conductivity substrate
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Superior electrical performance
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        RoHS compliant materials
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Custom design capabilities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Every PCB undergoes rigorous testing to ensure it meets our high standards 
                      for quality and reliability. Our ISO 9001:2015 certified processes guarantee 
                      consistent performance.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Quality Standards</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• ISO 9001:2015 Quality Management</li>
                        <li>• IPC-A-600 Acceptability Standards</li>
                        <li>• RoHS Compliance Testing</li>
                        <li>• 100% Electrical Testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                    <div className="space-y-4">
                      {product.specifications?.map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">{spec}</span>
                          <span className="font-medium text-gray-900">✓</span>
                        </div>
                      )) || (
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Power Rating</span>
                            <span className="font-medium text-gray-900">{product.powerRating}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Layer Count</span>
                            <span className="font-medium text-gray-900">{product.layers}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Operating Temperature</span>
                            <span className="font-medium text-gray-900">-40°C to +125°C</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Thermal Conductivity</span>
                            <span className="font-medium text-gray-900">1.0-3.0 W/mK</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Dielectric Strength</span>
                            <span className="font-medium text-gray-900">≥3000V</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Dimensions & Tolerances</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Board Thickness</span>
                          <span className="font-medium">0.8mm - 3.2mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Copper Thickness</span>
                          <span className="font-medium">35μm - 105μm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Min Trace Width</span>
                          <span className="font-medium">0.1mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Min Via Size</span>
                          <span className="font-medium">0.15mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Surface Finish</span>
                          <span className="font-medium">HASL, OSP, ENIG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Applications</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.applications?.map((app, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{app}</h4>
                        <p className="text-gray-600 text-sm">Optimized for {app.toLowerCase()} applications with superior performance and reliability.</p>
                      </div>
                    )) || (
                      <div className="col-span-3 grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17h10l4-4V8a1 1 0 00-1-1H4a1 1 0 00-1 1v5l4 4z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Automotive Lighting</h4>
                          <p className="text-gray-600 text-sm">Perfect for headlights, tail lights, and interior automotive lighting systems.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Industrial Lighting</h4>
                          <p className="text-gray-600 text-sm">High-power solutions for warehouses, factories, and industrial facilities.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Commercial Applications</h4>
                          <p className="text-gray-600 text-sm">Ideal for office buildings, retail spaces, and commercial lighting projects.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}


            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link 
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 h-40 bg-gray-100">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}