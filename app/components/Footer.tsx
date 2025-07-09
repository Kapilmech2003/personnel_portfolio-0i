import { Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Kapil B</h3>
            <p className="text-gray-300 mb-4">
              Mechatronics R&D Engineer passionate about robotics, automation, and innovative engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kapil-b-engineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Kapilmech2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:kapilkapi2003@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>kapilkapi2003@gmail.com</p>
              <p>+91 9003985479</p>
              <p>Hosur, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Kapil B. All rights reserved. Built with Innovation and Engineering.
          </p>
        </div>
      </div>
    </footer>
  )
}
