'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CompanyOverview() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>
            Leading LED PCB Manufacturer
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Altraah is a premier <strong>LED PCB manufacturer</strong> specializing in high-performance <strong>Metal Core Printed Circuit Boards (MCPCB)</strong> and advanced LED lighting solutions. With over 13 years of expertise in the PCB industry, we deliver precision-engineered circuit boards for automotive LED systems, industrial lighting, and commercial applications.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-slate-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-3">•</span>
                  <span><strong>LED PCB Manufacturing:</strong> Specialized production of high-power LED circuit boards with superior thermal management and reliability for automotive, industrial, and commercial lighting applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-3">•</span>
                  <span><strong>Metal Core PCBs (MCPCB):</strong> Advanced aluminum and copper core PCB solutions designed for optimal heat dissipation in high-power LED applications, ensuring extended lifespan and consistent performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-3">•</span>
                  <span><strong>CAD-Based Design Support:</strong> Professional PCB design services using industry-leading CAD software, offering custom LED circuit board layouts, thermal analysis, and design optimization for maximum efficiency.</span>
                </li>
              </ul>
            </div>
            
            <p>
              Our state-of-the-art manufacturing facility combines cutting-edge technology with rigorous quality control to produce <strong>thermal-efficient PCBs</strong> that meet international standards. From prototype to mass production, we ensure every LED PCB delivers exceptional performance, durability, and cost-effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview