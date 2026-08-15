import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import type React from "react"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CANADA ÉLAN — Professional Hair Care Systems",
  description:
    "Prepare, Repair, Nourish, and Transform. Premium salon-grade hair care systems supporting professionals with products they can trust.",
  keywords: [
    "Canada Élan",
    "professional hair care",
    "salon products",
    "bond sealing",
    "hair smoothing",
    "Élan Plex",
  ],
  openGraph: {
    title: "CANADA ÉLAN — Professional Hair Care Systems",
    description:
      "Premium salon-grade hair care systems. Prepare, Repair, Nourish, and Transform.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#6b1522",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
