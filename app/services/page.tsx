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

  const getServiceDetails = (serviceId: string) => {
    const details: { [key: string]: string } = {
      "01": "Our staffing solutions are designed to meet your business needs with flexible, scalable, and results-oriented manpower solutions. Whether you need short-term support or long-term placements, we provide qualified professionals who are ready to contribute to your success. We focus on finding the right talent that matches your company culture and business objectives.",
      "02": "Fortune PRO makes business setup in Oman seamless and straightforward. With 100% foreign ownership support, we guide you through every step of the process, from commercial registration to obtaining all necessary licenses. Our expert team handles all legal formalities, ensuring compliance with Omani regulations while saving you time and effort.",
      "03": "Create a lasting impression at exhibitions and trade shows with our professional exhibition stall design and setup services. We work closely with you to understand your brand and create custom designs that stand out. From concept to completion, we handle every detail including graphics, branding, and on-site support.",
      "04": "Host memorable corporate events that leave a lasting impact. Our comprehensive event management services cover conferences, business gatherings, product launches, and more. We coordinate every aspect of your event, from venue selection to catering, ensuring a seamless experience for your attendees.",
      "05": "Enhance your business communication with modern digital display solutions. Our digital signage services include LED displays, interactive screens, content management systems, and professional installation. Perfect for retail spaces, offices, and public areas, these solutions help you communicate effectively with your audience.",
      "06": "From intimate gatherings to large-scale events, we provide comprehensive event planning and execution services. Our team handles all aspects including planning, strategy development, vendor coordination, logistics, and on-site execution. We ensure every event runs smoothly and meets your objectives.",
      "07": "Take your brand on the road with our mobile marketing campaigns and road-show events. We create engaging experiences that connect with your target audience across multiple locations. Our services include campaign planning, brand activation, and audience engagement strategies that drive results.",
      "08": "Build and maintain a strong reputation with strategic PR services. We help you manage media relations, create compelling press releases, handle crisis communications, and develop reputation management strategies. Our PR expertise ensures your organization maintains a positive public image.",
      "09": "Grow your online presence with comprehensive social media management services. We develop strategies tailored to your brand, create engaging content, manage your community, and provide analytics to track your success. From daily posts to campaign management, we handle it all.",
      "10": "Turn your vehicles into moving billboards with professional vehicle wrap and branding services. Whether you need full wraps, partial branding, or fleet branding, we provide high-quality installations that make your brand visible wherever you go. Perfect for mobile advertising and brand awareness."
    }
    return details[serviceId] || "Comprehensive service tailored to meet your business needs and objectives."
  }

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
                <video autoPlay muted playsInline loop className="relative w-full h-full object-cover opacity-90">
                  <source src="/images/fortunevid.mp4" type="video/mp4" />
                </video>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/contact"
                className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-neutral-900">{service.id}</span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                    <ArrowRight className="w-5 h-5 text-neutral-900 group-hover:text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-neutral-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Detailed Description */}
                  <div className="mb-6 flex-1">
                    <p className="text-neutral-700 text-sm leading-relaxed line-clamp-3">
                      {getServiceDetails(service.id)}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-6 border-t border-neutral-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </div>
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
                <video autoPlay muted playsInline loop className="relative w-full h-full object-cover opacity-90">
                  <source src="/images/fortunevid.mp4" type="video/mp4" />
                </video>
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

