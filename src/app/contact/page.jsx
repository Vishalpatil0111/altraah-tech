'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <span className="text-xs font-medium text-amber-200">Get In Touch</span>
              </div>
              
              <h1 className="poppins-bold text-4xl md:text-5xl mb-4 text-white">
                Contact Altraah
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to discuss your LED PCB requirements? Our expert team is here to help you find the perfect solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="poppins-bold text-3xl text-gray-900 mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="poppins-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 866 868 3583</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 8AM-6PM IST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="poppins-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">altrahtechcirart@gmail.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="poppins-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">Plot No D-15, Behind Amber Auto</p>
                      <p className="text-gray-600">Datir Mala, Navnath Nagar</p>
                      <p className="text-gray-600">Ambad MIDC Road, Nashik 422010</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="poppins-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="poppins-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-linear-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Why Choose Altraah?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      24-48 hour turnaround time
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      ISO 9001:2015 certified quality
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      Custom LED PCB design services
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      Competitive pricing & bulk discounts
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h2 className="poppins-bold text-3xl text-gray-900 mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="poppins-semibold block text-sm text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="poppins-semibold block text-sm text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="poppins-semibold block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="poppins-semibold block text-sm text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="poppins-semibold block text-sm text-gray-700 mb-2">
                        Message / Requirements *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none transition-all"
                        placeholder="Tell us about your LED PCB requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="poppins-bold w-full bg-linear-to-r from-amber-500 to-amber-600 text-white py-4 rounded-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-lg transition-all duration-300 text-lg"
                    >
                      Send Inquiry
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="poppins-bold text-lg text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours during business days.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="poppins-bold text-lg text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">Our technical experts provide free consultation for your LED PCB projects.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="poppins-bold text-lg text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-600 text-sm">Industry-leading 24-48 hour turnaround for prototypes and samples.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}