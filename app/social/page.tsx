"use client"

import Link from "next/link"
import { ArrowRight, Instagram, Mail, CheckCircle2 } from "lucide-react"
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
                Follow our journey on Instagram, stay updated with the latest news, and connect with Fortune Business
                Solutions.
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

      {/* Instagram Dominant Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 text-center">
            FOLLOW
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              US
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Instagram Card */}
            <a
              href="https://www.instagram.com/fortune_oman/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-12 group relative bg-white border border-neutral-200 p-8 md:p-16 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left">
                  <Instagram className="h-16 w-16 md:h-24 md:w-24 mb-6 text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600 transition-all duration-500 mx-auto md:mx-0" />
                  <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-neutral-900">
                    @fortune_oman
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    INSTAGRAM
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                    Discover our visual story. See our latest projects, team moments, corporate gifts, events, and
                    behind-the-scenes content. Join our growing community and stay inspired with daily updates.
                  </p>
                  <div className="inline-flex items-center text-sm md:text-base uppercase tracking-widest font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                    Follow @fortune_oman <ArrowRight className="ml-3 h-5 w-5" />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-2 gap-4">
                    {["POST", "REEL", "STORY", "LIVE"].map((item, i) => (
                      <div
                        key={i}
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center text-lg md:text-xl font-bold shadow-sm transition-transform duration-500 group-hover:scale-105 ${i % 2 === 0
                          ? "bg-blue-600 text-white rotate-3 group-hover:rotate-6"
                          : "bg-neutral-900 text-white -rotate-3 group-hover:-rotate-6"
                          }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Features */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[60px] opacity-20" />
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl">
                  <video ref={videoRef} muted playsInline loop className="w-full h-full object-cover opacity-90">
                    <source src="/images/fortunevid.mp4" type="video/mp4" />
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
