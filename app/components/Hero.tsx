import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mechatronics R&D Engineer
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Innovating in Aerospace Design & Simulation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Passionate about developing cutting-edge engineering solutions, with a current focus on aerospace systems. Specializing in design, simulation, and analysis to drive innovation in satellite and launch vehicle technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="https://drive.google.com/file/d/1fZB-Z_FlB9cm5cwLSbUx3ui-zzCSSwra/view?usp=drive_link">
                 Download Resume
                  <Download className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink_outfit-compressed.jpg-z1yRnkwb69zcXbLvROjQibZ2TRmKsA.jpeg"
                  alt="Kapil B - Mechatronics Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R&D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
