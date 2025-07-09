import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kapil B - Mechatronics R&D Engineer |Aerospace Design and Simulation Portfolio",
  description:
    "Portfolio of Kapil B, a passionate Mechatronics R&D Engineer specializing in Designing, robotics and Simulation. Currently working on Aerospace New Product development with expertise in Solidworks, Microcontroller, and Drones.",
  keywords:
    "Mechatronics Engineer,SolidWorks, ANSYS, Robotics, ROS2, Computer Vision, Embedded Systems, Python, C++",
  authors: [{ name: "Kapil B" }],
  creator: "Kapil B",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kapil-portfolio.vercel.app",
    title: "Kapil B - Mechatronics R&D Engineer",
    description: "Portfolio showcasing innovative robotics and automation projects",
    siteName: "Kapil B Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil B - Mechatronics R&D Engineer",
    description: "Portfolio showcasing innovative design and simulation projects",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
