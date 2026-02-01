function AboutHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 bg-slate-600/30 backdrop-blur-sm border border-slate-400/30 px-6 py-3 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold">Established 2010 • ISO 9001:2015 Certified</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          About Altraah<br/>
          <span className="text-slate-300">Tech Circuit Art</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-body">
          Pioneering LED PCB manufacturing with innovative Metal Core solutions and precision engineering for over 13 years.
        </p>
      </div>
    </div>
  )
}

export default AboutHero