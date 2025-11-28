import Link from "next/link"
import { ArrowRight, Star, Users, Award, Clock, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import ImageWithLoader from "@/components/image-with-loader"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-4 md:px-8 bg-white text-neutral-900 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slideInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-blue-600">
                  8+ Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter leading-[0.9] text-neutral-900">
                FORTUNE
                <br />
                BUSINESS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  SOLUTION
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed text-neutral-600 font-medium">
                TALENT IS BEING ABLE TO SELL SOMETHING YOU ARE FEELING
              </p>

              <div className="flex items-center gap-4 text-sm sm:text-base uppercase tracking-widest font-bold text-neutral-500">
                <span className="text-neutral-900">OMAN</span>
                <span className="text-blue-600">•</span>
                <span className="text-neutral-900">BAHRAIN</span>
                <span className="text-blue-600">•</span>
                <span className="text-neutral-900">INDIA</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-sm shadow-lg shadow-blue-600/20"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 text-neutral-900 text-sm uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-sm"
                >
                  Our Services
                </Link>
              </div>

              {/* Quick Stats Integrated */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-900">8+</div>
                  <div className="text-xs uppercase tracking-wide text-neutral-500">Years</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-900">150+</div>
                  <div className="text-xs uppercase tracking-wide text-neutral-500">Clients</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-900">3</div>
                  <div className="text-xs uppercase tracking-wide text-neutral-500">Countries</div>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative animate-slideInRight flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Glow behind video */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[60px] opacity-20" />
                <div className="relative w-full h-full bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-2xl">
                  <video autoPlay muted playsInline loop className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500">
                    <source src="/images/fortunevid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white text-neutral-900 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                SERVICES
              </span>
            </h2>
            <p className="text-neutral-600 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-right md:text-left">
              Comprehensive business solutions tailored to elevate your organization's potential and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Service 1 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-staffing.png"
                  alt="Staffing Solutions"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">01</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">STAFFING<br />SOLUTIONS</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Flexible, scalable, and results-oriented manpower solutions for businesses of all sizes.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-company-formation.png"
                  alt="Company Formation"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">02</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">COMPANY<br />FORMATION</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Fortune PRO makes business setup in Oman easy with 100% foreign ownership support.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-event-management.png"
                  alt="Event Management"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">03</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">EVENT<br />MANAGEMENT</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Corporate events, exhibitions, road-shows, and complete event coordination services.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-digital-signage.png"
                  alt="Digital Signage"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">04</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">DIGITAL<br />SIGNAGE</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Modern digital display solutions for effective business communication and branding.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 5 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-branding.png"
                  alt="Branding & Marketing"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">05</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">BRANDING<br />& MARKETING</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Social media, PR, vehicle branding, and comprehensive marketing solutions.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 6 */}
            <Link
              href="/services"
              className="group relative h-[450px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <ImageWithLoader
                  containerClassName="absolute inset-0"
                  src="/images/service-pr.png"
                  alt="Public Relations"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500">06</span>
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-neutral-900">PUBLIC<br />RELATIONS</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Strategic PR services to build and maintain your organization's reputation.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 text-neutral-900 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              INDUSTRIES
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                WE SERVE
              </span>
            </h2>
            <p className="text-neutral-600 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-right md:text-left">
              Tailored solutions for diverse sectors, driving efficiency and growth across the board.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Oil & Gas */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-oil-gas.png"
                alt="Oil & Gas Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Users className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">OIL & GAS</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Comprehensive staffing and corporate gifting solutions for the energy sector.
                </p>
              </div>
            </div>

            {/* Government */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-government.png"
                alt="Government Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Award className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">GOVERNMENT</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Supporting public sector organizations with tailored business solutions.
                </p>
              </div>
            </div>

            {/* Hospitality */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-hospitality.png"
                alt="Hospitality Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Clock className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">HOSPITALITY</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Event management and premium products for hotels and restaurants.
                </p>
              </div>
            </div>

            {/* Banking */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-banking.png"
                alt="Banking Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Shield className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">BANKING</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Executive staffing and corporate branding for financial institutions.
                </p>
              </div>
            </div>

            {/* Construction */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-construction.png"
                alt="Construction Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Users className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">CONSTRUCTION</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Workforce solutions and safety equipment for construction companies.
                </p>
              </div>
            </div>

            {/* Retail */}
            <div className="group relative h-[450px] rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/industry-retail.png"
                alt="Retail Industry"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <Award className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold mb-3 tracking-tighter text-neutral-900">RETAIL</h3>
                <p className="text-neutral-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Promotional products and staffing support for retail businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {/* Featured Products Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 text-neutral-900 relative">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              FEATURED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                PRODUCTS
              </span>
            </h2>
            <Link
              href="/products"
              className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center whitespace-nowrap mb-2 font-bold text-neutral-600"
            >
              View All Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Feature: Technology Gifts */}
            <Link
              href="/products"
              className="group relative col-span-1 lg:col-span-2 row-span-2 h-[600px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/product-tech.png"
                alt="Technology Gifts"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 text-white shadow-lg shadow-blue-600/20">
                  01
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-neutral-900">TECHNOLOGY GIFTS</h3>
                <p className="text-lg text-neutral-600 max-w-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Premium wireless chargers, power banks, and tech accessories designed for the modern professional.
                </p>
              </div>
            </Link>

            {/* Secondary Feature: Eco-Friendly */}
            <Link
              href="/products"
              className="group relative h-[288px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/product-eco.png"
                alt="Eco-friendly Gifts"
                fill
                className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tighter text-neutral-900">ECO-FRIENDLY</h3>
                    <p className="text-sm text-neutral-600">Sustainable bamboo & recycled materials</p>
                  </div>
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary Feature: Drinkware */}
            <Link
              href="/products"
              className="group relative h-[288px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <ImageWithLoader
                containerClassName="absolute inset-0"
                src="/images/product-drinkware.png"
                alt="Drinkware"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tighter text-neutral-900">DRINKWARE</h3>
                    <p className="text-sm text-neutral-600">Premium bottles, mugs & tumblers</p>
                  </div>
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white text-neutral-900 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              HOW WE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                WORK
              </span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Our streamlined process ensures efficient delivery and exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="group relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-200 border-2 border-blue-500/50 z-10 hidden lg:block group-hover:bg-blue-600 transition-colors" />
              <div className="relative bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 h-full shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  01
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">CONSULTATION</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We start by understanding your unique business needs, challenges, and objectives.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-200 border-2 border-blue-500/50 z-10 hidden lg:block group-hover:bg-blue-600 transition-colors" />
              <div className="relative bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 h-full shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  02
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">PLANNING</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Our team develops a customized strategy and actionable plan tailored to you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-200 border-2 border-blue-500/50 z-10 hidden lg:block group-hover:bg-blue-600 transition-colors" />
              <div className="relative bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 h-full shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  03
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">EXECUTION</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We implement the solution with precision, ensuring quality delivery.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-200 border-2 border-blue-500/50 z-10 hidden lg:block group-hover:bg-blue-600 transition-colors" />
              <div className="relative bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 h-full shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  04
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">SUPPORT</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Ongoing maintenance and support to ensure long-term success.
                </p>
              </div>
            </div>
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
                We are recognized as one of the trusted staffing and outsourcing companies in Oman, connecting
                organizations with the right talent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Right Talent, Right Fit</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      We ensure not only the right skills but also the right mindset and cultural fit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Proven Experience</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Strong network, industry knowledge, and years of experience delivering workforce solutions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Multi-Country Presence</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Operating across Oman, Bahrain, and India for comprehensive regional support.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600 font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Comprehensive Services</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      From staffing to company formation and complete event management solutions.
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
                    <source src="/images/fortunevid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white text-neutral-900 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-12 text-center animate-fadeIn">
            TRUSTED BY
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              LEADING ORGANIZATIONS
            </span>
          </h2>

          <div className="mb-12 bg-white p-8 md:p-12 rounded-xl overflow-hidden shadow-xl border border-neutral-100 animate-slideUp">
            <ImageWithLoader
              src="/images/clients-logos.png"
              alt="Fortune Business Solutions Trusted Clients"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="text-center text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Fortune Business Solutions for their staffing, gifting,
            branding, and event management needs.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 text-neutral-900 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-12 animate-fadeIn">
            CLIENT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              TESTIMONIALS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white border border-neutral-200 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 animate-slideUp animate-delay-100 shadow-sm hover:shadow-lg">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-blue-500" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-neutral-700 mb-6 leading-relaxed">
                "Fortune Business Solutions provided exceptional service for our corporate event. Their attention to
                detail and professionalism was outstanding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">
                  C
                </div>
                <div className="text-sm uppercase tracking-widest font-bold text-neutral-500 group-hover:text-blue-600 transition-colors">
                  CORPORATE CLIENT
                </div>
              </div>
            </div>

            <div className="group bg-white border border-neutral-200 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 animate-slideUp animate-delay-200 shadow-sm hover:shadow-lg">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-blue-500" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-neutral-700 mb-6 leading-relaxed">
                "The quality of corporate gifts exceeded our expectations. Our employees and clients loved the
                custom-branded products."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600 font-bold">
                  B
                </div>
                <div className="text-sm uppercase tracking-widest font-bold text-neutral-500 group-hover:text-purple-600 transition-colors">
                  BUSINESS PARTNER
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
