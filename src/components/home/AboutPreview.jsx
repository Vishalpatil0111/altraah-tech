import Link from 'next/link'
import { companyInfo } from '@/data/company'

function AboutPreview() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Leading LED PCB Innovation Since {companyInfo.established}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {companyInfo.mission}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">{companyInfo.experience}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">{companyInfo.teamSize}</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" 
                alt="LED PCB Manufacturing Facility" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutPreview