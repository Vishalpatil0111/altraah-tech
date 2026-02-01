function MissionVision() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-2xl opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
            <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver quality-driven <strong>LED PCB manufacturing</strong> solutions that exceed industry standards. We are committed to producing high-performance Metal Core PCBs with exceptional thermal efficiency, reliability, and precision for the global LED lighting industry.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-2xl opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
            <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become the most trusted <strong>LED PCB partner globally</strong>, recognized for innovation in thermal management, CAD-driven design excellence, and manufacturing reliability. We aim to power the future of LED lighting technology worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision