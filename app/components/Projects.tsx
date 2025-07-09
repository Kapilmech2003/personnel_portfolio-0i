import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Autonomous Pallet Detection and Docking",
      description:
        "Developed an intelligent system for warehouse AMRs using YOLOv8 for pallet detection, OpenCV for image processing, and 3D point cloud processing for precise docking at fixed tilting angles.",
      technologies: ["YOLOv8", "OpenCV", "ROS2", "Python", "3D Point Cloud", "Computer Vision"],
      image: "/images/pallet-detection.jpg",
      category: "Robotics",
      githubUrl: "https://github.com/Kapilmech2003/pallet_detection_with_pcl.git",
      demoUrl: "https://demo-pallet-detection.example.com", // Replace with actual demo URL
    },
    {
      title: "LED Strip Control System",
      description:
        "Implemented a sophisticated LED strip control system using DMX512 protocol in ROS2 with publisher-subscriber architecture, supporting multiple operational modes including charging, warning, and emergency states.",
      technologies: ["ROS2", "DMX512", "Python", "Embedded Systems", "Real-time Control"],
      image: "/images/led-strip.jpg",
      category: "Automation",
      githubUrl: "https://github.com/Kapilmech2003/led_strip_cpp_code.git",
      demoUrl: "https://demo-led-control.example.com", // Replace with actual demo URL
    },
    {
      title: "Plastik Haut - Sustainable Recycling",
      description:
        "Designed and prototyped an innovative solution to transform LDPE plastic waste into leather-finished products like purses and handbags, contributing to environmental sustainability.",
      technologies: ["SolidWorks", "Product Design", "Sustainability", "Material Engineering"],
      image: "/images/plastik-haut.jpg",
      category: "Design",
      githubUrl: "https://github.com/Kapilmech2003/plastik-haut.git", // Replace with actual GitHub URL
      demoUrl: "https://demo-plastik-haut.example.com", // Replace with actual demo URL
    },
    {
      title: "Digital Fuel Gauge System",
      description:
        "Developed a pressure-based fuel quantity measurement system for automotive applications with accurate fuel level display in liters and enhanced fuel management capabilities.",
      technologies: ["Python", "Sensors", "Data Analysis", "Automotive", "Embedded Systems"],
      image: "/images/digital-fuel-gauge.jpg",
      category: "Automotive",
      githubUrl: "https://github.com/Kapilmech2003/Digital-fuel-gauge.git",
      demoUrl: "https://demo-fuel-gauge.example.com", // Replace with actual demo URL
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative engineering solutions spanning robotics, automation, and sustainable design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
