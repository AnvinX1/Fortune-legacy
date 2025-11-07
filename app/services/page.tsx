import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
              OUR
              <br />
              SERVICES
            </h1>
            {/* </CHANGE> */}
            <p className="text-xl max-w-2xl">
              Comprehensive business solutions tailored to meet your organization's unique needs across Oman and the
              Gulf region.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animate-slideInRight">
            <div className="w-48 h-48 border-4 border-blue-600 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 animate-fadeIn">WHAT WE DO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Staffing Solutions */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100"
            >
              <div className="text-6xl font-bold mb-4">01</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">STAFFING SOLUTIONS</h3>
              <p className="text-lg mb-6">
                We offer a complete range of manpower and staffing solutions that are flexible, scalable, and
                results-oriented. Whether you are a growing business or an established organization, Fortune provides
                the right people at the right time.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Flexible & Adaptable Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Scalable to Project Needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Short-term & Long-term Staffing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Focused on Productivity</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 2: Company Formation */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200"
            >
              <div className="text-6xl font-bold mb-4">02</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">COMPANY FORMATION</h3>
              <p className="text-lg mb-6">
                Fortune PRO makes it easy to establish your business in Oman with 100% foreign ownership. Hassle-free
                business setup with complete documentation support.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Commercial Registration (CR)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Investment & Commercial Licenses</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Bank Account Opening Assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>TAX/VAT Certificate & MOH Approval</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 3: Exhibition Stall */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300"
            >
              <div className="text-6xl font-bold mb-4">03</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">EXHIBITION STALL</h3>
              <p className="text-lg mb-6">
                Professional exhibition stall design and setup services to make your brand stand out at trade shows and
                exhibitions across the region.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Custom Stall Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Complete Setup & Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Graphics & Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>On-site Support</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 4: Corporate Events */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-400"
            >
              <div className="text-6xl font-bold mb-4">04</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">CORPORATE EVENTS</h3>
              <p className="text-lg mb-6">
                Complete event management services for corporate functions, conferences, and business gatherings of all
                scales.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Conference Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Business Gatherings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Product Launches</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Full Event Coordination</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 5: Digital Signage */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-500"
            >
              <div className="text-6xl font-bold mb-4">05</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">DIGITAL SIGNAGE</h3>
              <p className="text-lg mb-6">
                Modern digital display solutions for effective business communication, advertising, and brand visibility
                in high-traffic areas.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>LED Display Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Interactive Displays</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Content Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Installation & Support</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 6: Event Management */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-600"
            >
              <div className="text-6xl font-bold mb-4">06</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">EVENT MANAGEMENT</h3>
              <p className="text-lg mb-6">
                Comprehensive event planning and execution services for all types of corporate and social events.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Event Planning & Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Vendor Coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Logistics Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>On-site Execution</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 7: Road-shows Events */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100"
            >
              <div className="text-6xl font-bold mb-4">07</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">ROAD-SHOWS EVENTS</h3>
              <p className="text-lg mb-6">
                Mobile marketing campaigns and road-show events to engage your target audience across multiple
                locations.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Mobile Campaign Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Multi-location Coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Brand Activation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Audience Engagement</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 8: Public Relations */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200"
            >
              <div className="text-6xl font-bold mb-4">08</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">PUBLIC RELATIONS</h3>
              <p className="text-lg mb-6">
                Strategic public relations services to build and maintain your organization's reputation and media
                presence.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Media Relations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Press Release Writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Crisis Communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Reputation Management</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 9: Social Media */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300"
            >
              <div className="text-6xl font-bold mb-4">09</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">SOCIAL MEDIA</h3>
              <p className="text-lg mb-6">
                Comprehensive social media management and marketing services to grow your online presence and engage
                your audience.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Social Media Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Content Creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Community Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Analytics & Reporting</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Service 10: Vehicle Branding */}
            <Link
              href="/contact"
              className="group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-400"
            >
              <div className="text-6xl font-bold mb-4">10</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tighter">VEHICLE BRANDING</h3>
              <p className="text-lg mb-6">
                Professional vehicle wrap and branding services to turn your fleet into mobile advertisements.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Full Vehicle Wraps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Partial Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Fleet Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Professional Installation</span>
                </li>
              </ul>
              <div className="inline-flex items-center text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 animate-slideInLeft">
              <h2 className="text-6xl font-bold tracking-tighter mb-6">WHY CHOOSE US</h2>
              <p className="text-xl mb-6">
                With years of experience serving businesses across the Gulf region, we deliver exceptional service and
                measurable results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Team</h3>
                    <p className="text-neutral-600">
                      Experienced professionals dedicated to delivering outstanding results for your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local Knowledge</h3>
                    <p className="text-neutral-600">
                      Deep understanding of the Omani and Gulf business landscape and culture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Proven Track Record</h3>
                    <p className="text-neutral-600">
                      Trusted by leading organizations across various industries for quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex items-center justify-center animate-slideInRight">
              <div className="relative w-full aspect-square bg-black overflow-hidden">
                <video autoPlay muted playsInline className="w-full h-full object-cover">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">READY TO START?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can benefit your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
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
