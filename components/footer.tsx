import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-12 sm:py-16 px-4 md:px-8 bg-neutral-100 text-neutral-900 border-t border-neutral-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="text-2xl font-bold tracking-tighter mb-4">FORTUNE</div>
                        <p className="text-sm text-neutral-600 leading-relaxed">Business Solutions in Muscat, Oman</p>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-neutral-500">Quick Links</h4>
                        <div className="space-y-3">
                            <Link href="/about" className="block text-sm text-neutral-600 hover:text-blue-600 transition-colors">
                                About
                            </Link>
                            <Link href="/services" className="block text-sm text-neutral-600 hover:text-blue-600 transition-colors">
                                Services
                            </Link>
                            <Link href="/products" className="block text-sm text-neutral-600 hover:text-blue-600 transition-colors">
                                Products
                            </Link>
                            <Link href="/contact" className="block text-sm text-neutral-600 hover:text-blue-600 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-neutral-500">Contact</h4>
                        <div className="space-y-3 text-sm text-neutral-600">
                            <p>Ruwi, Muscat, Oman</p>
                            <p>+968 91724281</p>
                            <p className="break-all hover:text-blue-600 transition-colors cursor-pointer">ceo.fortune@outlook.com</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-neutral-500">Follow Us</h4>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.instagram.com/fortune_oman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-widest text-neutral-600 hover:text-blue-600 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
                    © 2025 Fortune Business Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
