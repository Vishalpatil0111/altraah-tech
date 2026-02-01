function Certifications() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
              Quality Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300">
              Committed to international quality standards in LED PCB manufacturing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 p-8 rounded-lg text-center border border-slate-700">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/images/companies/msme.jpg" alt="MSME" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">MSME Certified</h3>
              <p className="text-gray-400">Micro, Small & Medium Enterprise</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg text-center border border-slate-700">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/images/companies/gst.jpg" alt="GST" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">GST Registered</h3>
              <p className="text-gray-400">Government Certified Business</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg text-center border border-slate-700">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/images/companies/udyoog.jpg" alt="Udyog Aadhaar" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Udyog Aadhaar</h3>
              <p className="text-gray-400">Government Recognition Certificate</p>
            </div>
          </div>
          
          <div className="bg-slate-800 p-10 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
              Our Quality Commitment
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>100% electrical testing on all LED PCB assemblies</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>Thermal performance validation for all MCPCBs</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>Automated optical inspection (AOI) systems</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>Strict adherence to IPC-A-600 acceptance standards</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>Full traceability and documentation for every order</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-400 font-bold mr-3 text-xl">✓</span>
                <span>99.8% quality rate with continuous improvement process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications