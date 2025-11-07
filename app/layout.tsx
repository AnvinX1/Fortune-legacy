import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fortune Business Solutions",
  description: "Leading provider of staffing solutions, company formation services, and event management in Oman, Bahrain, and India",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
