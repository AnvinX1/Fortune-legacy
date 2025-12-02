"use client"

import Link from "next/link"
import { ArrowRight, Instagram, Mail, CheckCircle2, Facebook, Youtube } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import { useEffect, useRef } from "react"

export default function SocialPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

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
                  Social Media
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-neutral-900">
                CONNECT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  WITH US
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                Follow our journey across all social platforms, stay updated with the latest news, and connect with Fortune Business
                Solutions.
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

      {/* Instagram Dominant Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 text-center">
            FOLLOW
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              US
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Instagram Card - Featured */}
            <a
              href="https://www.instagram.com/fortune_oman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative col-span-1 lg:col-span-2 row-span-2 h-[600px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 text-white shadow-lg shadow-purple-600/20">
                    <Instagram className="h-8 w-8" />
                  </div>
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-neutral-900">
                    @fortune_oman
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-neutral-900">
                    INSTAGRAM
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Discover our visual story. See our latest projects, team moments, corporate gifts, events, and behind-the-scenes content. Join our growing community and stay inspired with daily updates.
                  </p>
                </div>
              </div>
            </a>

            {/* Small Facebook Card */}
            <a
              href="https://www.facebook.com/profile.php?id=61550640942940&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[288px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Facebook className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tighter text-neutral-900">FACEBOOK</h3>
                  <p className="text-sm text-neutral-600">Connect & stay updated with company news</p>
                </div>
              </div>
            </a>

            {/* Small YouTube Card */}
            <a
              href="https://youtube.com/@fortunebusiness-omr?si=EqCAl2F5fU_XJPBC"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[288px] bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Youtube className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tighter text-neutral-900">YOUTUBE</h3>
                  <p className="text-sm text-neutral-600">Watch videos & tutorials about our services</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Media Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                id: "01",
                title: "Daily Updates",
                desc: "Fresh content every day featuring our latest projects, corporate gifts, and team achievements."
              },
              {
                id: "02",
                title: "Behind The Scenes",
                desc: "Exclusive glimpses into our events, product launches, and company culture."
              },
              {
                id: "03",
                title: "Client Stories",
                desc: "Success stories, testimonials, and partnerships with leading organizations."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl font-bold text-blue-600/20 group-hover:text-blue-600 mb-4 transition-colors duration-300">
                  {feature.id}
                </div>
                <h4 className="text-xl font-bold mb-3 text-neutral-900">{feature.title}</h4>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-16 border border-neutral-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 text-neutral-900">
                  NEWSLETTER
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Subscribe to our newsletter for exclusive updates, industry insights, and special offers delivered to
                  your inbox.
                </p>
              </div>
              <div>
                <form className="w-full">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center font-bold"
                    >
                      Subscribe
                      <Mail className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-neutral-900">
                JOIN OUR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  COMMUNITY
                </span>
              </h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
                Be part of a growing network of business professionals, entrepreneurs, and industry leaders across the
                Gulf region by following us on Instagram.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Exclusive Content",
                    desc: "Access industry insights, tips, and behind-the-scenes content daily."
                  },
                  {
                    title: "Early Access",
                    desc: "Be first to know about new products and special offers through Instagram Stories."
                  },
                  {
                    title: "Engage & Connect",
                    desc: "Comment, share, and connect with like-minded professionals through our posts."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center animate-slideInRight">
              <div className="relative w-full aspect-square max-w-md">
                <video ref={videoRef} muted playsInline loop className="relative w-full h-full object-cover opacity-90">
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
