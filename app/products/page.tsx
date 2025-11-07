import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

const productCategories = [
  {
    name: "Technology Gifts",
    description: "Premium tech items including wireless chargers, power banks, USB drives, earbuds, and speakers",
    items: ["Wireless Chargers", "Power Banks", "USB Flash Drives", "Bluetooth Speakers", "Wireless Earbuds"],
  },
  {
    name: "Eco-Friendly Products",
    description: "Sustainable bamboo notebooks, pens, eco water bottles, and reusable tote bags",
    items: ["Bamboo Notebooks", "Bamboo Pen Sets", "Eco Water Bottles", "Sustainable Totes"],
  },
  {
    name: "Drinkware & Stationery",
    description: "Stainless steel bottles, ceramic mugs, insulated tumblers, notebooks, and premium pens",
    items: ["Stainless Steel Bottles", "Ceramic Mugs", "Notebooks", "Premium Pens", "Desk Accessories"],
  },
  {
    name: "Corporate Gift Sets",
    description: "Curated executive gift boxes, premium pen sets, travel kits, and branded accessory bundles",
    items: ["Executive Gift Sets", "Tech Gift Boxes", "Premium Pen Sets", "Travel Gift Kits"],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 animate-slideInLeft">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
              PREMIUM
              <br />
              PRODUCTS
            </h1>
            <p className="text-xl max-w-2xl">
              Discover our curated collection of corporate gifts and promotional products, all customizable with your
              brand identity.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animate-slideInRight">
            <div className="w-48 h-48 border-4 border-blue-600 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>
        {/* End of added grid layout */}
      </section>

      {/* Product Categories Grid - matching social page card style */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12 animate-fadeIn">OUR CATEGORIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`group border border-black p-12 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-slideUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="text-6xl font-bold mb-4">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-3xl font-bold mb-4 tracking-tighter">{category.name}</h3>
                <p className="text-lg mb-6">{category.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-widest mb-3 opacity-70">Available Items:</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <span className="mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="inline-flex items-center text-sm uppercase tracking-widest">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - matching social page numbered list style */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 animate-slideInLeft">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">WHY CHOOSE US</h2>
              <p className="text-xl mb-6">
                Premium quality products with full customization to perfectly represent your brand.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Custom Branding</h3>
                    <p className="text-neutral-600">
                      Full customization with your logo, colors, and brand identity on all products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Premium Quality</h3>
                    <p className="text-neutral-600">
                      High-quality materials and craftsmanship that reflect your brand standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Bulk Orders</h3>
                    <p className="text-neutral-600">
                      Competitive pricing for large quantities with reliable delivery timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex items-center justify-center animate-slideInRight">
              <div className="relative w-full aspect-square bg-black overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay muted playsInline src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching social page CTA style */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white animate-fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">READY TO ORDER?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need large quantities or have specific customization requirements? Contact us for personalized quotes and
            custom branding options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Get a Quote
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
                <a href="#" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors">
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
