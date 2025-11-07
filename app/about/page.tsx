import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-4 md:mb-6">
              ABOUT
              <br />
              FORTUNE
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Delivering excellence in business solutions across the Gulf region for over 8 years.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animate-slideInRight">
            <div className="w-48 h-48 border-4 border-blue-600 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12">ABOUT US</h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  At Fortune, we are proud to be recognized as one of the trusted staffing and outsourcing companies in
                  the Sultanate of Oman. We specialize in connecting organizations with the right talent, ensuring not
                  only the right skills but also the right mindset and cultural fit.
                </p>
                <p>
                  We believe that successful employees are more than just qualified professionals — they are motivated
                  individuals who add value, adapt quickly, and become true assets to their teams. With our strong
                  network, industry knowledge, and years of experience, we have consistently delivered workforce
                  solutions that help businesses grow while supporting professionals in advancing their careers.
                </p>
                <p>
                  Operating across Oman, Bahrain, and India, we provide comprehensive business solutions including
                  staffing, company formation, event management, and branding services.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center mt-8 md:mt-0 animate-slideInRight">
              <div className="relative w-full max-w-sm md:max-w-none aspect-square bg-black overflow-hidden">
                <video autoPlay muted playsInline className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            MISSION & VISION
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="group border border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">01</div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tighter">OUR VISION</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                To be the most reliable partner in providing exceptional staffing and outsourcing solutions that empower
                both organizations and individuals to thrive.
              </p>
            </div>
            <div className="group border border-black p-6 sm:p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">02</div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tighter">OUR MISSION</h3>
              <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
                <p>• To deliver innovative and customized staffing services across Oman</p>
                <p>• To ensure seamless integration of talent into organizations</p>
                <p>• To create lasting value by building trusted relationships between clients and candidates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            CORE VALUES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">01</div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tighter">EXCELLENCE</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                We maintain the highest standards in everything we deliver, ensuring quality that exceeds expectations.
              </p>
            </div>
            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">02</div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tighter">INNOVATION</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                We continuously evolve our services and products to meet the changing needs of modern businesses.
              </p>
            </div>
            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">03</div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tighter">INTEGRITY</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                We build trust through transparency, honesty, and ethical business practices in all our relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            OUR TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="aspect-square bg-blue-600 group-hover:bg-black mb-4 md:mb-6 flex items-center justify-center transition-colors duration-300">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">SN</span>
              </div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 tracking-tighter">Suraj Noncowry</h3>
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4 opacity-60">CEO</p>
              <p className="text-sm sm:text-base leading-relaxed">
                Leading Fortune's strategic vision and driving growth across all business verticals.
              </p>
            </div>

            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="aspect-square bg-blue-600 group-hover:bg-black mb-4 md:mb-6 flex items-center justify-center transition-colors duration-300">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">AN</span>
              </div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 tracking-tighter">Atheena Naz</h3>
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4 opacity-60">
                Business Development Manager
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Specializing in staffing solutions and building strategic client partnerships.
              </p>
            </div>

            <div className="group bg-white border border-black p-6 sm:p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-300">
              <div className="aspect-square bg-blue-600 group-hover:bg-black mb-4 md:mb-6 flex items-center justify-center transition-colors duration-300">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">PR</span>
              </div>
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 tracking-tighter">Pavithra Ramasamy</h3>
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4 opacity-60">
                Business Development Manager
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Expert in branding solutions and delivering impactful corporate identity programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 animate-fadeIn">
            BY THE NUMBERS
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="animate-slideUp animate-delay-100">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">8+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="animate-slideUp animate-delay-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">5000+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Gifts Delivered</div>
            </div>
            <div className="animate-slideUp animate-delay-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">150+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="animate-slideUp animate-delay-400">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">25+</div>
              <div className="text-xs sm:text-sm uppercase tracking-widest">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-blue-600 text-white animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">JOIN US</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to work with Oman's leading business solutions provider?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-black text-white text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 px-4 md:px-8 bg-black text-white">
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
