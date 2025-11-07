"use client"

import type React from "react"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/navigation"

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
    <main className="min-h-screen bg-white">
      <Navigation />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-4 border-blue-600 p-12 max-w-md mx-4 text-center animate-slideUp">
            <CheckCircle2 className="h-24 w-24 text-blue-600 mx-auto mb-6 animate-bounce" />
            <h3 className="text-4xl font-bold mb-4 tracking-tighter">MESSAGE SENT!</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Thank you for contacting us! We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
              LET'S TALK
              <br />
              BUSINESS
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed">
              Transform your business with our comprehensive solutions. Get in touch to discuss your needs and discover
              how Fortune can help you succeed.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animate-slideInRight">
            <div className="w-48 h-48 border-4 border-blue-600 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-black animate-fadeIn">
            <div className="bg-white border-r border-b md:border-b-0 border-black p-8">
              <MapPin className="h-12 w-12 mb-6 text-blue-600" />
              <h3 className="text-sm uppercase tracking-widest mb-4">Location</h3>
              <p className="font-bold text-lg">Ruwi, Muscat</p>
              <p className="text-neutral-600">Sultanate of Oman</p>
            </div>

            <div className="bg-white border-r border-b md:border-b-0 border-black p-8">
              <Phone className="h-12 w-12 mb-6 text-blue-600" />
              <h3 className="text-sm uppercase tracking-widest mb-4">Phone</h3>
              <a href="tel:+96891724281" className="font-bold text-lg hover:text-blue-600 transition-colors">
                +968 91724281
              </a>
              <p className="text-neutral-600 text-sm mt-1">Mon-Thu, 8AM-6PM</p>
            </div>

            <div className="bg-white border-r border-b md:border-b-0 border-black p-8">
              <Mail className="h-12 w-12 mb-6 text-blue-600" />
              <h3 className="text-sm uppercase tracking-widest mb-4">Email</h3>
              <a
                href="mailto:ceo.fortune@outlook.com"
                className="font-bold text-lg hover:text-blue-600 transition-colors break-all"
              >
                ceo.fortune@outlook.com
              </a>
              <p className="text-neutral-600 text-sm mt-1">24h response time</p>
            </div>

            <div className="bg-white p-8">
              <Clock className="h-12 w-12 mb-6 text-blue-600" />
              <h3 className="text-sm uppercase tracking-widest mb-4">Hours</h3>
              <p className="font-bold">Sun-Thu</p>
              <p className="text-neutral-600">8:00 AM - 6:00 PM</p>
              <p className="font-bold mt-2">Fri-Sat</p>
              <p className="text-neutral-600">Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2 animate-slideInLeft">
              <h2 className="text-5xl font-bold tracking-tighter mb-6">GET IN TOUCH</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Fill out the form and our team will respond within 24 hours. We're here to help with all your business
                needs.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-sm uppercase tracking-widest mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• 8+ years of experience</li>
                    <li>• 5000+ successful deliveries</li>
                    <li>• 150+ satisfied clients</li>
                    <li>• Gulf-wide service coverage</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-sm uppercase tracking-widest mb-3">Our Services</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Staffing Solutions</li>
                    <li>• Corporate Gifts</li>
                    <li>• Branding & Design</li>
                    <li>• Event Management</li>
                    <li>• Office Fitouts</li>
                    <li>• Business Consulting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 animate-slideInRight">
              <form onSubmit={handleSubmit} className="border-2 border-black p-8 bg-neutral-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 bg-white"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 bg-white"
                      placeholder="+968 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 bg-white"
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
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2 font-bold">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-2 border-black py-3 px-4 focus:outline-none focus:border-blue-600 resize-none bg-white"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center font-bold disabled:opacity-50 disabled:cursor-not-allowed"
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
      <section className="py-20 px-4 md:px-8 bg-black text-white animate-fadeIn">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold tracking-tighter mb-8">VISIT OUR OFFICE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="aspect-video border-2 border-white overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29320.756688948636!2d58.53645869999999!3d23.5880307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e00db5f7e8f9d%3A0x9e4e8e9e8e9e8e9e!2sRuwi%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fortune Business Solutions Location - Ruwi, Muscat, Oman"
                ></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-3">Address</h3>
                <p className="text-lg">Ruwi Business District</p>
                <p className="text-lg">Muscat, Oman</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-3">Parking</h3>
                <p className="text-neutral-400">Free parking available for visitors</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-3">Access</h3>
                <p className="text-neutral-400">Easily accessible from main roads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Simplified */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 animate-fadeIn">COMMON QUESTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8 hover:bg-blue-600 hover:text-white transition-colors group animate-slideUp animate-delay-100">
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Minimum Order Quantity?</h3>
              <p className="leading-relaxed group-hover:text-white">
                MOQ varies by product type. Contact us with your requirements for accurate pricing and quantity
                information.
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-blue-600 hover:text-white transition-colors group animate-slideUp animate-delay-200">
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Custom Branding Timeline?</h3>
              <p className="leading-relaxed group-hover:text-white">
                Standard turnaround is 7-14 business days depending on complexity. Rush orders available upon request.
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-blue-600 hover:text-white transition-colors group animate-slideUp animate-delay-300">
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Regional Delivery?</h3>
              <p className="leading-relaxed group-hover:text-white">
                We deliver across Oman and the Gulf region including UAE, Saudi Arabia, Kuwait, Bahrain, and Qatar.
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-blue-600 hover:text-white transition-colors group animate-slideUp animate-delay-400">
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Product Samples?</h3>
              <p className="leading-relaxed group-hover:text-white">
                Sample viewing available at our Muscat office. Schedule an appointment to see our product range
                firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold tracking-tighter mb-4">FORTUNE</div>
              <p className="text-sm text-neutral-400">Business Solutions in Muscat, Oman</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-neutral-400 hover:text-white">
                  About
                </Link>
                <Link href="/services" className="block text-sm text-neutral-400 hover:text-white">
                  Services
                </Link>
                <Link href="/products" className="block text-sm text-neutral-400 hover:text-white">
                  Products
                </Link>
                <Link href="/contact" className="block text-sm text-neutral-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>Ruwi, Muscat, Oman</p>
                <p>+968 91724281</p>
                <p>ceo.fortune@outlook.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
            © 2025 Fortune Business Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
