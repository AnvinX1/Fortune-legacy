import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Image from "next/image"

export default function ProductsPage() {
  const productCategories = [
    {
      id: "01",
      name: "TECHNOLOGY GIFTS",
      description: "Premium tech items including wireless chargers, power banks, USB drives, earbuds, and speakers.",
      image: "/images/product-tech.png",
      items: ["Wireless Chargers", "Power Banks", "USB Flash Drives", "Bluetooth Speakers"]
    },
    {
      id: "02",
      name: "ECO-FRIENDLY",
      description: "Sustainable bamboo notebooks, pens, eco water bottles, and reusable tote bags.",
      image: "/images/product-eco.png",
      items: ["Bamboo Notebooks", "Bamboo Pen Sets", "Eco Water Bottles", "Sustainable Totes"]
    },
    {
      id: "03",
      name: "DRINKWARE",
      description: "Stainless steel bottles, ceramic mugs, insulated tumblers, notebooks, and premium pens.",
      image: "/images/product-drinkware.png",
      items: ["Stainless Steel Bottles", "Ceramic Mugs", "Notebooks", "Premium Pens"]
    },
    {
      id: "04",
      name: "GIFT SETS",
      description: "Curated executive gift boxes, premium pen sets, travel kits, and branded accessory bundles.",
      image: "/images/product-gift-sets.png",
      items: ["Executive Gift Sets", "Tech Gift Boxes", "Premium Pen Sets", "Travel Gift Kits"]
    },
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
                  Corporate Gifting
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-neutral-900">
                PREMIUM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  PRODUCTS
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                Discover our curated collection of corporate gifts and promotional products, all customizable with your brand identity.
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

      {/* Product Categories Grid */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                COLLECTION
              </span>
            </h2>
            <p className="text-neutral-600 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-right md:text-left">
              From eco-friendly options to premium tech gadgets, we have the perfect gifts for your clients and team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href="/contact"
                className="group relative h-[500px] bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-blue-500/50 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-bold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-500 drop-shadow-sm">
                      {category.id}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-neutral-100 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-neutral-900">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0" />
                          <span className="truncate">{item}</span>
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
                Premium quality products with full customization to perfectly represent your brand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Custom Branding</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Full customization with your logo, colors, and brand identity on all products.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Premium Quality</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      High-quality materials and craftsmanship that reflect your brand standards.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-neutral-900">Bulk Orders</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Competitive pricing for large quantities with reliable delivery timelines.
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
