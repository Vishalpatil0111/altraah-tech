function TeamSection() {

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=400&background=475569&color=fff&bold=true',
      description: 'Visionary leader with 15+ years in PCB manufacturing'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Engineering',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=400&background=64748b&color=fff&bold=true',
      description: 'Expert in LED PCB design and thermal management'
    },
    {
      name: 'Amit Patel',
      role: 'Quality Assurance Director',
      image: 'https://ui-avatars.com/api/?name=Amit+Patel&size=400&background=475569&color=fff&bold=true',
      description: 'Ensuring ISO standards and 99.8% quality rate'
    },
    {
      name: 'Sneha Reddy',
      role: 'CAD Design Lead',
      image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&size=400&background=64748b&color=fff&bold=true',
      description: 'Specialist in precision PCB layout and optimization'
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals driving innovation in LED PCB manufacturing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {member.name}
                    </h3>
                    <p className="text-slate-300 text-sm font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white"></div>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">50+ Team Members</div>
              <div className="text-sm text-gray-600">Dedicated to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection