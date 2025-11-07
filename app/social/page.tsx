"use client"

import Link from "next/link"
import { ArrowRight, Instagram, Mail } from "lucide-react"
import Navigation from "@/components/navigation"
import { useEffect, useRef } from "react"

export default function SocialPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
              CONNECT
              <br />
              WITH US
            </h1>
            {/* </CHANGE> */}
            <p className="text-xl max-w-2xl">
              Follow our journey on Instagram, stay updated with the latest news, and connect with Fortune Business
              Solutions.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animate-slideInRight">
            <div className="w-48 h-48 border-4 border-blue-600 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Dominant Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 animate-fadeIn">FOLLOW US</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Instagram Card */}
            <a
              href="https://www.instagram.com/fortune_oman/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-12 group border-2 border-black p-8 md:p-16 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-500 animate-slideUp"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="flex-1">
                  <Instagram className="h-16 w-16 md:h-32 md:w-32 mb-6 md:mb-8" />
                  <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 break-all">
                    @fortune_oman
                  </div>
                  {/* </CHANGE> */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
                    INSTAGRAM
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
                    Discover our visual story. See our latest projects, team moments, corporate gifts, events, and
                    behind-the-scenes content. Join our growing community and stay inspired with daily updates.
                  </p>
                  <div className="inline-flex items-center text-sm md:text-lg uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Follow @fortune_oman <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-blue-600 flex items-center justify-center text-white text-lg md:text-2xl font-bold">
                      POST
                    </div>
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-black flex items-center justify-center text-white text-lg md:text-2xl font-bold">
                      REEL
                    </div>
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-black flex items-center justify-center text-white text-lg md:text-2xl font-bold">
                      STORY
                    </div>
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-blue-600 flex items-center justify-center text-white text-lg md:text-2xl font-bold">
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border border-black p-8 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-100">
              <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
              <h4 className="text-2xl font-bold mb-4">Daily Updates</h4>
              <p className="text-lg">
                Fresh content every day featuring our latest projects, corporate gifts, and team achievements.
              </p>
            </div>
            <div className="border border-black p-8 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
              <h4 className="text-2xl font-bold mb-4">Behind The Scenes</h4>
              <p className="text-lg">Exclusive glimpses into our events, product launches, and company culture.</p>
            </div>
            <div className="border border-black p-8 hover:border-blue-600 transition-all duration-300 animate-slideUp animate-delay-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
              <h4 className="text-2xl font-bold mb-4">Client Stories</h4>
              <p className="text-lg">Success stories, testimonials, and partnerships with leading organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-black text-white animate-fadeIn">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-6xl font-bold tracking-tighter mb-6">NEWSLETTER</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for exclusive updates, industry insights, and special offers delivered to
                your inbox.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center">
              <form className="w-full">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-transparent border border-white text-white placeholder:text-neutral-400 focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                  >
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 animate-slideInLeft">
              <h2 className="text-6xl font-bold tracking-tighter mb-6">JOIN OUR INSTAGRAM COMMUNITY</h2>
              <p className="text-xl mb-6">
                Be part of a growing network of business professionals, entrepreneurs, and industry leaders across the
                Gulf region by following us on Instagram.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Exclusive Content</h3>
                    <p className="text-neutral-600">
                      Access industry insights, tips, and behind-the-scenes content daily.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Early Access</h3>
                    <p className="text-neutral-600">
                      Be first to know about new products and special offers through Instagram Stories.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Engage & Connect</h3>
                    <p className="text-neutral-600">
                      Comment, share, and connect with like-minded professionals through our posts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex items-center justify-center animate-slideInRight">
              <div className="relative w-full aspect-square max-w-md">
                <video ref={videoRef} muted playsInline className="w-full h-full object-cover bg-black">
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
          <h2 className="text-6xl font-bold tracking-tighter mb-6">LET'S TALK</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We're here to help.
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
                <a
                  href="https://www.instagram.com/fortune_oman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
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
