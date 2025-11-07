import Link from "next/link"
import { ArrowRight, Star, Users, Award, Clock, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-slideInLeft">
            <div className="inline-block px-4 py-2 border-2 border-blue-600 mb-4">
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-blue-600">
                8+ Years of Excellence
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
              FORTUNE
              <br />
              BUSINESS
              <br />
              <span className="text-blue-600">SOLUTION</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed text-neutral-700 font-bold">
              TALENT IS BEING ABLE TO SELL SOMETHING YOU ARE FEELING
            </p>

            <div className="flex items-center gap-2 text-sm sm:text-base uppercase tracking-widest font-bold">
              <span>WE ARE AT</span>
              <span className="text-blue-600">|</span>
              <span>OMAN</span>
              <span className="text-blue-600">|</span>
              <span>BAHRAIN</span>
              <span className="text-blue-600">|</span>
              <span>INDIA</span>
            </div>
            {/* </CHANGE> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-black">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">8+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">150+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-neutral-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">3</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-neutral-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Video Content - Made video smaller and more responsive */}
          <div className="relative animate-slideInRight flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-black overflow-hidden">
              <video autoPlay muted playsInline className="w-full h-full object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-slideUp animate-delay-100">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center animate-slideUp animate-delay-200">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Gifts Delivered</div>
            </div>
            <div className="text-center animate-slideUp animate-delay-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="text-center animate-slideUp animate-delay-400">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            INDUSTRIES WE SERVE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">OIL & GAS</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Comprehensive staffing and corporate gifting solutions for the energy sector.
              </p>
            </div>

            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">GOVERNMENT</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Supporting public sector organizations with tailored business solutions.
              </p>
            </div>

            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">HOSPITALITY</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Event management and premium products for hotels and restaurants.
              </p>
            </div>

            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-400">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">BANKING</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Executive staffing and corporate branding for financial institutions.
              </p>
            </div>

            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">CONSTRUCTION</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Workforce solutions and safety equipment for construction companies.
              </p>
            </div>

            <div className="border-2 border-black p-6 sm:p-8 md:p-10 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-600">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 md:mb-6 group-hover:bg-white group-hover:text-blue-600">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tighter">RETAIL</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Promotional products and staffing support for retail businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">01</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                STAFFING SOLUTIONS
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Flexible, scalable, and results-oriented manpower solutions for businesses of all sizes.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>

            {/* Service 2 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">02</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                COMPANY FORMATION
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Fortune PRO makes business setup in Oman easy with 100% foreign ownership support.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>

            {/* Service 3 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">03</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                EVENT MANAGEMENT
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Corporate events, exhibitions, road-shows, and complete event coordination services.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>

            {/* Service 4 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-400"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">04</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                DIGITAL SIGNAGE
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Modern digital display solutions for effective business communication and branding.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>

            {/* Service 5 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-500"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">05</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                BRANDING & MARKETING
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Social media, PR, vehicle branding, and comprehensive marketing solutions.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>

            {/* Service 6 */}
            <Link
              href="/services"
              className="group border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-600"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">06</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                PUBLIC RELATIONS
              </h3>
              <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Strategic PR services to build and maintain your organization's reputation.
              </p>
              <div className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest">
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </Link>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">FEATURED PRODUCTS</h2>
            <Link
              href="/products"
              className="text-xs sm:text-sm uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center whitespace-nowrap"
            >
              View All <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link
              href="/products"
              className="group bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 md:mb-6 transition-all duration-300">
                1
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">
                TECHNOLOGY GIFTS
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Wireless chargers, power banks, USB drives, cables, and tech accessories
              </p>
            </Link>

            <Link
              href="/products"
              className="group bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 md:mb-6 transition-all duration-300">
                2
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">ECO-FRIENDLY</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Sustainable bamboo items and environmentally conscious branded materials
              </p>
            </Link>

            <Link
              href="/products"
              className="group bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 md:mb-6 transition-all duration-300">
                3
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tighter">DRINKWARE</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Bottles, mugs, tumblers, and lunch boxes with premium custom branding
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            HOW WE WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tighter">CONSULTATION</h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    We start by understanding your unique business needs, challenges, and objectives through detailed
                    consultation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tighter">PLANNING</h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    Our team develops a customized strategy and actionable plan tailored to your specific requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tighter">EXECUTION</h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    We implement the solution with precision, ensuring quality delivery and timely completion of
                    milestones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-400">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tighter">SUPPORT</h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    We provide ongoing support and follow-up to ensure continued success and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
                WHY CHOOSE US
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                We are recognized as one of the trusted staffing and outsourcing companies in Oman, connecting
                organizations with the right talent.
              </p>
              {/* </CHANGE> */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-base sm:text-lg md:text-xl">Right Talent, Right Fit</h3>
                    <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      We ensure not only the right skills but also the right mindset and cultural fit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-base sm:text-lg md:text-xl">Proven Experience</h3>
                    <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      Strong network, industry knowledge, and years of experience delivering workforce solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-base sm:text-lg md:text-xl">Multi-Country Presence</h3>
                    <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      Operating across Oman, Bahrain, and India for comprehensive regional support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-base sm:text-lg md:text-xl">Comprehensive Services</h3>
                    <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      From staffing to company formation and complete event management solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center mt-8 md:mt-0 animate-slideInRight">
              <div className="relative w-full max-w-sm md:max-w-none aspect-square bg-black overflow-hidden">
                <video autoPlay muted playsInline className="w-full h-full object-cover">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 text-center animate-fadeIn">
            TRUSTED BY LEADING ORGANIZATIONS
          </h2>

          <div className="mb-12 bg-white p-8 md:p-12 border-4 border-white animate-slideUp">
            <Image
              src="/images/clients-logos.png"
              alt="Fortune Business Solutions Trusted Clients including KR, Mohsin Haider Darwish, Jashanmal, Lulu International Exchange, Altal Alzahbie, Sharaf DG, Race International, Shah Nagardas, Oppo, OTE Group, Tecnaura, CIT, Mohammed A. Bahwan LLC, Nikai, Space, GECO, Jumbo Electronics, and WorldTell"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Fortune Business Solutions for their staffing, gifting,
            branding, and event management needs.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            CLIENT TESTIMONIALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="flex mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-current text-blue-600" />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
                "Fortune Business Solutions provided exceptional service for our corporate event. Their attention to
                detail and professionalism was outstanding."
              </p>
              <div className="text-xs sm:text-sm uppercase tracking-widest font-bold">CORPORATE CLIENT</div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="flex mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-current text-blue-600" />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
                "The quality of corporate gifts exceeded our expectations. Our employees and clients loved the
                custom-branded products."
              </p>
              <div className="text-xs sm:text-sm uppercase tracking-widest font-bold">BUSINESS PARTNER</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-black text-white animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help your business with our comprehensive solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-blue-600 text-white text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 px-4 md:px-8 bg-neutral-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tighter mb-3 md:mb-4">FORTUNE</div>
              <p className="text-xs sm:text-sm text-neutral-400">Business Solutions in Muscat, Oman</p>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-xs sm:text-sm text-neutral-400 hover:text-white">
                  About
                </Link>
                <Link href="/services" className="block text-xs sm:text-sm text-neutral-400 hover:text-white">
                  Services
                </Link>
                <Link href="/products" className="block text-xs sm:text-sm text-neutral-400 hover:text-white">
                  Products
                </Link>
                <Link href="/contact" className="block text-xs sm:text-sm text-neutral-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">Contact</h4>
              <div className="space-y-2 text-xs sm:text-sm text-neutral-400">
                <p>Ruwi, Muscat, Oman</p>
                <p>+968 91724281</p>
                <p className="break-all">ceo.fortune@outlook.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#"
                  className="text-xs sm:text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-xs sm:text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-6 md:pt-8 text-center text-xs sm:text-sm text-neutral-400">
            © 2025 Fortune Business Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
