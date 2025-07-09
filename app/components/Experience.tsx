import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "R&D Engineer",
      company: "Spacekidz India",
      location: "Chennai",
      period: "May 2025 - Ongoing",
      type: "Current",
      description: [
        "Working on Aerospace Projects like Rockets",
        "Gaining Proficiency in Avionics, Drones etc.",
        "Exploring Aerospace systems in terms of Designing, Troubleshooting and NPD",
      ],
      technologies: ["Designing", "Raspberry Pi", "Simulation - FEA and CFD"],
    },
    {
      title: "Robotics Intern",
      company: "TheDush Robotics",
      location: "Coimbatore",
      period: "Oct 2024 - Apr 2025",
      type: "Completed",
      description: [
        "Developed solid understanding of ROS 2 and associated robotics tools",
        "Working on robotic model visualization and computer vision applications",
        "Gaining proficiency in Nav2 and SLAM for autonomous navigation systems",
        "Implementing pallet detection and docking strategies for warehouse automation",
      ],
      technologies: ["ROS2", "Computer Vision", "SLAM", "Nav2", "Autonomous Navigation"],
    },
    {
      title: "Design Intern",
      company: "K S Viswanathan Company",
      location: "Coimbatore",
      period: "Feb 2024 - July 2024",
      type: "Completed",
      description: [
        "Contributed across all departments from purchasing to design and hands-on machining",
        "Reverse engineered cone machine and created detailed 2D drafts for machining",
        "Designed innovative molds for paper bowls and rectangular trays",
        "Gained comprehensive understanding of manufacturing workflows",
      ],
      technologies: ["CAD Design", "Reverse Engineering", "Manufacturing", "Machining"],
    },
    {
      title: "Tool Room Intern",
      company: "TITAN Watch Division",
      location: "Hosur",
      period: "July 2023 - Aug 2023",
      type: "Completed",
      description: [
        "Self-taught operations of wired EDM machines and 5-axis CNC machines",
        "Operated milling machines and worked in assembly units",
        "Acquired knowledge in advanced manufacturing processes",
        "Learned precision machining techniques under senior guidance",
      ],
      technologies: ["CNC Machining", "EDM", "Milling", "Assembly", "Manufacturing"],
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Hands-on experience in robotics, manufacturing, and design across leading companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden lg:block"></div>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden lg:block"></div>

                  <Card className="lg:ml-16 hover:shadow-lg transition-shadow duration-300 mx-2 md:mx-0">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                            <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-sm md:text-base">{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:items-end space-y-2">
                          <Badge
                            className={`text-xs px-2 py-1 ${
                              exp.type === "Current"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex flex-col space-y-1 text-xs md:text-sm">
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-600 dark:text-gray-300 flex items-start text-sm md:text-base"
                          >
                            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0 text-xs">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
