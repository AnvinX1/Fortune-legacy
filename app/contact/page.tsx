"use client"

import type React from "react"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("[Fortune] Error submitting form:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navigation />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-blue-500/20 shadow-2xl p-12 max-w-md mx-4 text-center animate-slideUp rounded-2xl">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-blue-600 animate-bounce" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tighter text-neutral-900">MESSAGE SENT!</h3>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Thank you for contacting us! We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-blue-700 transition-colors rounded-sm shadow-lg shadow-blue-600/20"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-blue-600">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-neutral-900">
                LET'S TALK
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  BUSINESS
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                Transform your business with our comprehensive solutions. Get in touch to discuss your needs and discover
                how Fortune can help you succeed.
              </p>
            </div>
            <div className="relative animate-slideInRight">
              <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[60px] opacity-20" />
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl">
                  <video autoPlay muted playsInline loop className="w-full h-full object-cover opacity-90">
                    <source src="/images/fortunevid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm uppercase tracking-widest mb-2 font-bold text-neutral-900">Location</h3>
              <p className="font-bold text-lg text-neutral-900">Ruwi, Muscat</p>
              <p className="text-neutral-600 text-sm">Sultanate of Oman</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Phone className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm uppercase tracking-widest mb-2 font-bold text-neutral-900">Phone</h3>
              <a href="tel:+96891724281" className="font-bold text-lg text-neutral-900 hover:text-blue-600 transition-colors block">
                +968 91724281
              </a>
              <p className="text-neutral-600 text-sm">Mon-Thu, 8AM-6PM</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm uppercase tracking-widest mb-2 font-bold text-neutral-900">Email</h3>
              <a
                href="mailto:ceo.fortune@outlook.com"
                className="font-bold text-lg text-neutral-900 hover:text-blue-600 transition-colors break-all block"
              >
                ceo.fortune@outlook.com
              </a>
              <p className="text-neutral-600 text-sm">24h response time</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Clock className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm uppercase tracking-widest mb-2 font-bold text-neutral-900">Hours</h3>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-neutral-900">Sun-Thu</span>
                <span className="text-neutral-600">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-neutral-900">Fri-Sat</span>
                <span className="text-neutral-600">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 text-neutral-900">
                GET IN
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
                  TOUCH
                </span>
              </h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Fill out the form and our team will respond within 24 hours. We're here to help with all your business
                needs.
              </p>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-sm uppercase tracking-widest mb-4 font-bold text-blue-600">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "8+ years of experience",
                      "5000+ successful deliveries",
                      "150+ satisfied clients",
                      "Gulf-wide service coverage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-sm uppercase tracking-widest mb-4 font-bold text-purple-600">Our Services</h3>
                  <ul className="space-y-3">
                    {[
                      "Staffing Solutions",
                      "Corporate Gifts",
                      "Branding & Design",
                      "Event Management",
                      "Office Fitouts",
                      "Business Consulting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 animate-slideInRight">
              <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white rounded-2xl border border-neutral-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 placeholder:text-neutral-400"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 placeholder:text-neutral-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 placeholder:text-neutral-400"
                      placeholder="+968 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 placeholder:text-neutral-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                    Service Interest *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="staffing">Staffing Solutions</option>
                      <option value="gifts">Corporate Gifts</option>
                      <option value="branding">Branding & Design</option>
                      <option value="events">Corporate Events</option>
                      <option value="fitouts">Office Fitouts</option>
                      <option value="consulting">Pro Services</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-neutral-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2 font-bold text-neutral-500">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-neutral-900 placeholder:text-neutral-400 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 md:px-8 bg-white text-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
              VISIT OUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
                OFFICE
              </span>
            </h2>
            <p className="text-neutral-600 max-w-md text-right md:text-left">
              Located in the heart of Muscat's business district, easily accessible for all our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden border border-neutral-200 shadow-xl relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29320.756688948636!2d58.53645869999999!3d23.5880307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e00db5f7e8f9d%3A0x9e4e8e9e8e9e8e9e!2sRuwi%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fortune Business Solutions Location - Ruwi, Muscat, Oman"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-sm uppercase tracking-widest mb-3 text-blue-600 font-bold">Address</h3>
                <p className="text-lg font-medium text-neutral-900">Ruwi Business District</p>
                <p className="text-lg text-neutral-600">Muscat, Oman</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-sm uppercase tracking-widest mb-3 text-purple-600 font-bold">Parking</h3>
                <p className="text-neutral-600">Free parking available for visitors directly in front of the building.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-sm uppercase tracking-widest mb-3 text-blue-600 font-bold">Access</h3>
                <p className="text-neutral-600">Easily accessible from main Sultan Qaboos highway.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 text-center">
            COMMON
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              QUESTIONS
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Minimum Order Quantity?",
                a: "MOQ varies by product type. Contact us with your requirements for accurate pricing and quantity information."
              },
              {
                q: "Custom Branding Timeline?",
                a: "Standard turnaround is 7-14 business days depending on complexity. Rush orders available upon request."
              },
              {
                q: "Regional Delivery?",
                a: "We deliver across Oman and the Gulf region including UAE, Saudi Arabia, Kuwait, Bahrain, and Qatar."
              },
              {
                q: "Product Samples?",
                a: "Sample viewing available at our Muscat office. Schedule an appointment to see our product range firsthand."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
