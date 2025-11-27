import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "STAFFING SOLUTIONS",
      description: "Flexible, scalable, and results-oriented manpower solutions for businesses of all sizes.",
      image: "/images/service-staffing.png",
      features: ["Flexible & Adaptable", "Scalable to Needs", "Short & Long-term", "Productivity Focused"]
    },
    {
      id: "02",
      title: "COMPANY FORMATION",
      description: "Fortune PRO makes business setup in Oman easy with 100% foreign ownership support.",
      image: "/images/service-company-formation.png",
      features: ["Commercial Registration", "Investment Licenses", "Bank Account Assist", "TAX/VAT & MOH"]
    },
    {
      id: "03",
      title: "EXHIBITION STALL",
      description: "Professional exhibition stall design and setup services to make your brand stand out.",
      image: "/images/service-exhibition-stall.png",
      features: ["Custom Design", "Complete Setup", "Graphics & Branding", "On-site Support"]
    },
    {
      id: "04",
      title: "CORPORATE EVENTS",
      description: "Complete event management services for corporate functions and business gatherings.",
      image: "/images/service-event-management.png",
      features: ["Conferences", "Business Gatherings", "Product Launches", "Full Coordination"]
    },
    {
      id: "05",
      title: "DIGITAL SIGNAGE",
      description: "Modern digital display solutions for effective business communication and branding.",
      image: "/images/service-digital-signage.png",
      features: ["LED Displays", "Interactive Screens", "Content Management", "Installation"]
    },
    {
      id: "06",
      title: "EVENT MANAGEMENT",
      description: "Comprehensive event planning and execution services for all types of events.",
      image: "/images/service-event-planning.png",
      features: ["Planning & Strategy", "Vendor Coordination", "Logistics", "On-site Execution"]
    },
    {
      id: "07",
      title: "ROAD-SHOWS EVENTS",
      description: "Mobile marketing campaigns and road-show events to engage your target audience.",
      image: "/images/service-road-shows.png",
      features: ["Campaign Planning", "Multi-location", "Brand Activation", "Audience Engagement"]
    },
    {
      id: "08",
      title: "PUBLIC RELATIONS",
      description: "Strategic PR services to build and maintain your organization's reputation.",
      image: "/images/service-pr.png",
      features: ["Media Relations", "Press Releases", "Crisis Comm", "Reputation Mgmt"]
    },
    {
      id: "09",
      title: "SOCIAL MEDIA",
      description: "Comprehensive social media management to grow your online presence.",
      image: "/images/service-social-media.png",
      features: ["Strategy", "Content Creation", "Community Mgmt", "Analytics"]
    },
    {
      id: "10",
      title: "VEHICLE BRANDING",
      description: "Professional vehicle wrap and branding services for mobile advertising.",
      image: "/images/service-vehicle-branding.png",
      features: ["Full Wraps", "Partial Branding", "Fleet Branding", "Installation"]
    }
  ]

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navigation />

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
                  Our Expertise
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-neutral-900">
                OUR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  SERVICES
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                Comprehensive business solutions tailored to meet your organization's unique needs across Oman and the Gulf region.
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

      {/* Services Grid */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              WHAT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                WE DO
              </span>
            </h2>
            <p className="text-neutral-600 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-right md:text-left">
              Tailored solutions for diverse sectors, driving efficiency and growth across the board.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/contact"
                className="group relative h-[500px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500 drop-shadow-sm">
                      {service.id}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-neutral-100 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 text-neutral-900 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                WHY
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  CHOOSE US
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl">
                With years of experience serving businesses across the Gulf region, we deliver exceptional service and measurable results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Expert Team</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Experienced professionals dedicated to delivering outstanding results for your business.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Local Knowledge</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Deep understanding of the Omani and Gulf business landscape and culture.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Proven Track Record</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Trusted by leading organizations across various industries for quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center animate-slideInRight">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[60px] opacity-20" />
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl">
                  <video autoPlay muted playsInline loop className="w-full h-full object-cover opacity-90">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  )
}

