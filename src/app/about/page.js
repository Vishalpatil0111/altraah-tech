'use client' 
import { useEffect, useRef } from 'react' 
import { motion } from 'framer-motion' 
import { gsap } from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; 
import WhatsAppButton from "@/components/ui/WhatsAppButton"; 
if (typeof window !== 'undefined') { 
  gsap.registerPlugin(ScrollTrigger); 
} 
export default function AboutPage() { 
  const heroRef = useRef(null) 
  const statsRef = useRef(null) 
  useEffect(() => { 
    gsap.fromTo(heroRef.current,  
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" } 
    ) 
    gsap.fromTo(".stat-number",  
      { textContent: 0 }, 
      { 
        textContent: (i, target) => target.getAttribute('data-value'), 
        duration: 2, 
        ease: "power2.out", 
        snap: { textContent: 1 }, 
        scrollTrigger: { 
          trigger: statsRef.current, 
          start: "top 80%" 
        } 
      } 
    ) 
  }, []) 
  return ( 
    <div className="bg-gray-50"> 
      <Navbar /> 
      <main className="pt-20"> 
        {/* Hero Section */} 
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 sm:py-16 md:py-20 overflow-hidden"> 
          <div className="absolute inset-0"> 
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div> 
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div> 
          </div> 

          <div className="container mx-auto px-4 sm:px-6 relative"> 
            <motion.div  
              ref={heroRef} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className="max-w-4xl mx-auto text-center" 
            > 
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6"> 
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> 
                <span className="text-xs font-medium text-blue-200">About Altraah</span> 
              </div> 

              <h1 className="poppins-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"> 
                Leading LED PCB Manufacturer 
              </h1> 

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4"> 
                With over 13 years of expertise in LED PCB manufacturing, we deliver precision-engineered  
                solutions that power the world's most demanding applications. 
              </p> 
            </motion.div> 
          </div> 
        </section> 
        {/* Company Story */} 
        <section className="py-12 sm:py-16 md:py-20 bg-white"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"> 
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }} 
              > 
                <h2 className="poppins-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6"> 
                  Our Story 
                </h2> 
                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed"> 
                  <p> 
                    Founded in 2011, Altraah began as a vision to revolutionize LED PCB manufacturing  
                    through innovation and precision engineering. What started as a small team of  
                    passionate engineers has grown into a leading manufacturer serving global markets. 
                  </p> 
                  <p> 
                    Our commitment to quality and customer satisfaction has driven continuous investment  
                    in cutting-edge technology and skilled personnel, establishing us as a trusted  
                    partner for automotive, industrial, and commercial LED solutions. 
                  </p> 
                  <p> 
                    Today, we operate state-of-the-art facilities equipped with the latest manufacturing  
                    technology, serving clients across 50+ countries with our premium LED PCB solutions. 
                  </p> 
                </div> 
              </motion.div> 

              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }} 
                className="relative" 
              > 
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl"> 
                  <img  
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"  
                    alt="Altraah Manufacturing Facility"  
                    className="w-full h-60 sm:h-80 object-cover rounded-xl" 
                  /> 
                </div> 
              </motion.div> 
            </div> 
          </div> 
        </section> 
        {/* Stats Section */} 
        <section ref={statsRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12" 
            > 
              <h2 className="poppins-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4"> 
                Our Impact in Numbers 
              </h2> 
              <p className="text-base sm:text-lg text-gray-300"> 
                Delivering excellence across the globe 
              </p> 
            </motion.div> 

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"> 
              {[ 
                { number: "13", suffix: "+", label: "Years Experience" }, 
                { number: "50", suffix: "K+", label: "PCBs Manufactured" }, 
                { number: "200", suffix: "+", label: "Global Clients" }, 
                { number: "48", suffix: "h", label: "Max Turnaround" } 
              ].map((stat, index) => ( 
                <motion.div  
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="text-center" 
                > 
                  <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"> 
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2"> 
                      <span className="stat-number" data-value={stat.number}>0</span> 
                      <span>{stat.suffix}</span> 
                    </div> 
                    <div className="text-xs sm:text-sm md:text-base text-gray-300">{stat.label}</div> 
                  </div> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 
        {/* Mission & Vision */} 
        <section className="py-12 sm:py-16 md:py-20 bg-white"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12" 
            > 
              <h2 className="poppins-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"> 
                Our Mission & Vision 
              </h2> 
            </motion.div> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"> 
              <motion.div  
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300" 
              > 
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6"> 
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> 
                  </svg> 
                </div> 
                <h3 className="poppins-bold text-lg sm:text-xl text-gray-900 mb-4">Our Mission</h3> 
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"> 
                  To deliver exceptional LED PCB solutions that exceed customer expectations through  
                  innovative design, superior quality, and reliable performance in every application. 
                </p> 
              </motion.div> 

              <motion.div  
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300" 
              > 
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6"> 
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> 
                  </svg> 
                </div> 
                <h3 className="poppins-bold text-lg sm:text-xl text-gray-900 mb-4">Our Vision</h3> 
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"> 
                  To be the global leader in LED PCB manufacturing, setting industry standards for  
                  innovation, sustainability, and customer satisfaction across all markets we serve. 
                </p> 
              </motion.div> 
            </div> 
          </div> 
        </section> 
        {/* Team Section */} 
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12" 
            > 
              <h2 className="poppins-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"> 
                Our Leadership Team 
              </h2> 
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"> 
                Meet the experienced professionals driving innovation and excellence at Altraah 
              </p> 
            </motion.div> 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto"> 
              {[ 
                { 
                  name: "Dr. Rajesh Kumar", 
                  position: "Chief Executive Officer", 
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
                  description: "15+ years in electronics manufacturing with expertise in LED technology and business strategy." 
                }, 
                { 
                  name: "Sarah Chen", 
                  position: "Chief Technology Officer", 
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
                  description: "Leading our R&D initiatives with 12+ years in PCB design and thermal management solutions." 
                }, 
                { 
                  name: "Michael Rodriguez", 
                  position: "Head of Quality Assurance", 
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
                  description: "Ensuring quality standards compliance with 10+ years in quality management and process optimization." 
                }, 
                { 
                  name: "Emily Johnson", 
                  position: "Head of Operations", 
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
                  description: "Streamlining manufacturing processes with 8+ years in operations management and lean manufacturing." 
                } 
              ].map((member, index) => ( 
                <motion.div  
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center" 
                > 
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden"> 
                    <img  
                      src={member.image}  
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    /> 
                  </div> 
                  <h3 className="poppins-bold text-lg text-gray-900 mb-1">{member.name}</h3> 
                  <p className="poppins-medium text-blue-600 mb-3 text-sm">{member.position}</p> 
                  <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 
        {/* Why Choose Us */} 
        <section className="py-12 sm:py-16 md:py-20 bg-white"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12" 
            > 
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"> 
                Why Choose Altraah? 
              </h2> 
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"> 
                Our commitment to excellence sets us apart in the LED PCB manufacturing industry 
              </p> 
            </motion.div> 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> 
              {[ 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, 
                  title: "Advanced Technology", 
                  description: "State-of-the-art manufacturing equipment and processes" 
                }, 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
                  title: "Quality Assurance", 
                  description: "Rigorous testing protocols and quality management systems" 
                }, 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, 
                  title: "Expert Team", 
                  description: "Skilled engineers and technicians with decades of experience" 
                }, 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, 
                  title: "Custom Solutions", 
                  description: "Tailored designs to meet specific application requirements" 
                }, 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, 
                  title: "Fast Delivery", 
                  description: "Quick turnaround times without compromising quality" 
                }, 
                { 
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
                  title: "Global Support", 
                  description: "Comprehensive customer support and technical assistance" 
                } 
              ].map((feature, index) => ( 
                <motion.div  
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" 
                > 
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 text-white"> 
                    {feature.icon} 
                  </div> 
                  <h3 className="text-lg font-bold text-gray-900 mb-3"> 
                    {feature.title} 
                  </h3> 
                  <p className="text-gray-600 text-sm leading-relaxed"> 
                    {feature.description} 
                  </p> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 
        {/* Certifications */} 
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50"> 
          <div className="container mx-auto px-4 sm:px-6"> 
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="text-center mb-8 sm:mb-12" 
            > 
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"> 
                Certifications & Standards 
              </h2> 
              <p className="text-base sm:text-lg text-gray-600 px-4"> 
                Trusted and certified by leading organizations 
              </p> 
            </motion.div> 

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center"> 
              {[ 
                { name: "IndiaMART", logo: "https://via.placeholder.com/200x100/ffffff/1e293b?text=IndiaMART" }, 
                { name: "MSME", logo: "https://via.placeholder.com/200x100/ffffff/1e293b?text=MSME" }, 
                { name: "Make in India", logo: "https://via.placeholder.com/200x100/ffffff/1e293b?text=Make+in+India" }, 
                { name: "GST Certified", logo: "https://via.placeholder.com/200x100/ffffff/1e293b?text=GST" }, 
                { name: "Udyog Aadhaar", logo: "https://via.placeholder.com/200x100/ffffff/1e293b?text=Udyog+Aadhaar" } 
              ].map((cert, index) => ( 
                <motion.div  
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center" 
                > 
                  <img src={cert.logo} alt={cert.name} className="w-full h-auto object-contain" /> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 
      </main> 
      <Footer /> 
      <WhatsAppButton /> 
    </div> 
  ); 
} 
