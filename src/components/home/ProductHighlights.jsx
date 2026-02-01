import Link from 'next/link'
import { featuredProducts } from '@/data/products'

function ProductHighlights() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured LED PCB Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            Precision-engineered LED circuit boards for diverse industrial applications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-600">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-body">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.specifications.slice(0, 3).map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-600">{product.powerRating}</span>
                  <Link 
                    href={`/products/${product.slug}`}
                    className="text-slate-600 font-semibold hover:text-slate-800 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center px-8 py-4 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductHighlights