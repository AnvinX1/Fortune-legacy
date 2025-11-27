import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <section className="py-20 sm:py-24 px-4 md:px-8 bg-white text-neutral-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                    READY TO
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
                        GET STARTED?
                    </span>
                </h2>
                <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss how we can help your business with our comprehensive solutions.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-10 py-5 bg-blue-600 text-white text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-sm shadow-lg shadow-blue-600/20"
                >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}
