import { companyInfo } from '@/data/company'

function ChooseUs() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Key Points */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Why Choose {companyInfo.name}?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Industry-leading LED PCB manufacturing with proven expertise and cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-gray-600">Internationally recognized quality management system ensuring consistent excellence in every LED PCB.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Superior Thermal Management</h3>
                  <p className="text-gray-600">Advanced aluminum and copper core substrates optimized for LED heat dissipation and longevity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24-48 Hour Prototyping</h3>
                  <p className="text-gray-600">Industry-leading turnaround times from design to prototype, accelerating your product development.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">13+ Years LED Expertise</h3>
                  <p className="text-gray-600">Dedicated LED PCB specialists with deep industry knowledge and technical support.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Trust Indicators */}
          <div className="relative">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Trusted by Industry Leaders</h3>
                <p className="text-gray-600">Join {companyInfo.stats.projectsDelivered.replace('+', '')}+ satisfied customers worldwide</p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-slate-600 mb-2">{companyInfo.stats.projectsDelivered}</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-slate-600 mb-2">{companyInfo.stats.qualityRate}</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-slate-600 mb-2">{companyInfo.stats.avgResponse}</div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-slate-600 mb-2">{companyInfo.stats.yearsExperience}</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-4">
                {companyInfo.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ChooseUs