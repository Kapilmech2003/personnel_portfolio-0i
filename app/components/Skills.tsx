import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, Code, Settings } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const skillCategories = [
    {
      title: "Mechanical Design",
      icon: <Wrench className="h-6 w-6" />,
      color: "text-blue-600",
      skills: [
        { name: "SolidWorks", icon: "solidworks.svg" },
        { name: "Fusion 360", icon: "fusion-360.png" },
        { name: "Ansys FEA", icon: "ansys-fea.png" },
        { name: "Ansys CFD", icon: "ansys-cfd.png" },
      ],
    },
    {
      title: "Electronics & Hardware",
      icon: <Zap className="h-6 w-6" />,
      color: "text-yellow-600",
      skills: [
        { name: "Raspberry Pi", icon: "raspberry-pi.svg" },
      ],
    },
    {
      title: "Software & Programming",
      icon: <Code className="h-6 w-6" />,
      color: "text-green-600",
      skills: [
        { name: "Python", icon: "python.svg" },
        { name: "C/C++", icon: "cpp.svg" },
        { name: "ROS2", icon: "ros2.svg" },
      ],
    },
    {
      title: "Tools & Automation",
      icon: <Settings className="h-6 w-6" />,
      color: "text-purple-600",
      skills: [
        { name: "SLAM Navigation", icon: "slam.svg" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning mechanical design, electronics, software development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="text-center pb-4">
                <div className={`${category.color} mb-3 flex justify-center`}>{category.icon}</div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center min-h-[110px] justify-center"
                    >
                      <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-600 rounded p-2 mb-2">
                        <Image
                          src={`/icons/${skill.icon || skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + ".svg"}`}
                          alt={`${skill.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Overview Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-300">Design Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-300">Hardware Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-300">Automation Tools</div>
          </div>
        </div>
      </div>
    </section>
  )
}
