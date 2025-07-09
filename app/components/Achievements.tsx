import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Target } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "First Prize in CAD Modelling Competition",
      description: "Recognized for exceptional 3D modeling skills and design innovation",
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      category: "Competition",
    },
    {
      title: "Second Prize in Water Rocketry Competition",
      description: "Demonstrated engineering excellence in aerospace design and propulsion",
      icon: <Award className="h-8 w-8 text-silver-600" />,
      category: "Competition",
    },
    {
      title: "30-Day LinkedIn Challenge in 3D Modelling",
      description: "Completed intensive 3D modeling challenge, showcasing consistent skill development",
      icon: <Target className="h-8 w-8 text-blue-600" />,
      category: "Professional Development",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition for excellence in engineering design and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {achievement.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
