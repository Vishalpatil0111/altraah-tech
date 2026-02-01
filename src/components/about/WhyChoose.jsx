function WhyChoose() {

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'LED-Focused Expertise',
      description: 'Over 13 years specializing exclusively in LED PCB manufacturing, with deep understanding of LED driver circuits, thermal requirements, and lighting industry standards.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Thermal-Efficient MCPCBs',
      description: 'Advanced Metal Core PCB technology with aluminum and copper substrates, delivering superior heat dissipation for high-power LED applications up to 25W per LED.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'CAD-Driven Design Precision',
      description: 'Professional PCB design services using industry-leading CAD software, offering thermal simulation, DFM analysis, and optimized layouts for maximum LED performance.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Indian Manufacturing Reliability',
      description: 'ISO 9001:2015 certified manufacturing facility with 99.8% quality rate, fast 24-48 hour turnaround, and cost-effective solutions without compromising on quality standards.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Why Choose Altraah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading expertise in Metal Core PCBs and thermal management solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-slate-400 rounded-2xl opacity-20 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=1000&fit=crop" 
              alt="LED PCB Quality"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose