function CompanyStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-slate-400 rounded-2xl opacity-20 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" 
              alt="LED PCB Manufacturing"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-xl shadow-2xl">
              <div className="text-5xl font-bold text-slate-300">13+</div>
              <div className="text-sm text-gray-400">Years Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-body">
              <p>
                Founded in 2010, <strong>Altraah</strong> emerged from a vision to revolutionize LED PCB manufacturing in India. What started as a small workshop has grown into a leading <strong>Metal Core PCB manufacturer</strong> serving global markets.
              </p>
              
              <p>
                We specialize in <strong>thermal-efficient LED circuit boards</strong> that power automotive lighting, industrial fixtures, and commercial installations worldwide. Our expertise in <strong>aluminum PCB</strong> and <strong>copper core PCB</strong> technology sets us apart.
              </p>
              
              <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Core Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-3">▸</span>
                    <span><strong>LED PCB Manufacturing</strong> - High-power LED boards with superior thermal management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-3">▸</span>
                    <span><strong>Metal Core PCBs (MCPCB)</strong> - Aluminum & copper core solutions for optimal heat dissipation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-3">▸</span>
                    <span><strong>CAD Design Services</strong> - Custom PCB layouts with thermal analysis & optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory