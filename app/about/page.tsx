import Link from "next/link"
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, Award, Globe, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Image from "next/image"

export default function AboutPage() {
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
                  Since 2017
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-neutral-900">
                ABOUT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  FORTUNE
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                Delivering excellence in business solutions across the Gulf region. We connect organizations with the right talent and provide comprehensive support for growth.
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

      {/* Company Story */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-center">
              OUR STORY
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed text-center">
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter text-neutral-900">OUR VISION</h3>
              <p className="text-neutral-600 leading-relaxed">
                To be the most reliable partner in providing exceptional staffing and outsourcing solutions that empower
                both organizations and individuals to thrive.
              </p>
            </div>

            {/* Mission */}
            <div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-purple-500/50 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter text-neutral-900">OUR MISSION</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>To deliver innovative and customized staffing services across Oman</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>To ensure seamless integration of talent into organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>To create lasting value by building trusted relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-neutral-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              CORE VALUES
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our values define who we are and how we work. They guide our decisions and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300">
              <Award className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-neutral-900">EXCELLENCE</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We maintain the highest standards in everything we deliver, ensuring quality that exceeds expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300">
              <Lightbulb className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-neutral-900">INNOVATION</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We continuously evolve our services and products to meet the changing needs of modern businesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300">
              <Shield className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-neutral-900">INTEGRITY</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We build trust through transparency, honesty, and ethical business practices in all our relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">
            LEADERSHIP TEAM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group relative">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg bg-neutral-100">
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-400 font-bold text-4xl">
                  SN
                </div>
                {/* Placeholder for actual image if available */}
                {/* <Image src="/path/to/image.jpg" fill className="object-cover" /> */}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">Suraj Noncowry</h3>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">CEO</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Leading Fortune's strategic vision and driving growth across all business verticals.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group relative">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg bg-neutral-100">
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-400 font-bold text-4xl">
                  AN
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">Atheena Naz</h3>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">Business Development Manager</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Specializing in staffing solutions and building strategic client partnerships.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group relative">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg bg-neutral-100">
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-400 font-bold text-4xl">
                  PR
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">Pavithra Ramasamy</h3>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">Business Development Manager</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Expert in branding solutions and delivering impactful corporate identity programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-neutral-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Gifts Delivered</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  )
}
