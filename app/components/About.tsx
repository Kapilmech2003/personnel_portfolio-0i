import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Dynamic and driven Mechanical Engineering graduate with a passion for Aerospace Systems and Simulation.
              Currently working as an R&D Engineer at Spacekidz India, where I'm developing expertise in aerospace component design, finite element analysis (FEA), and computational fluid dynamics (CFD) for satellite deployers, experimental payloads, and micro-launch vehicle systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a solid academic foundation in mechanical engineering and hands-on experience in CAD design, FEA, and CFD, I'm passionate about developing innovative aerospace solutions that bridge the gap between structural design and high-fidelity simulation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to contribute to the development of next-generation aerospace systems through advanced design, simulation, and analysis, driving innovation in space technology and exploration
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor of Mechanical and Mechatronics Engineering
                  <br />
                  SNS College of Engineering (2025) - CGPA 8.5
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Current Role</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  R&D Enginer at Spacekidz India
                  <br />
                  Aerospace Design and FEA & CFD Analysis (May 2025 - Ongoing)
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Focus Areas</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Avionics • Simulation • Designing • Robotics • Automation • Embedded Systems
                  <br />
                  Computer Vision • Autonomous Navigation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
