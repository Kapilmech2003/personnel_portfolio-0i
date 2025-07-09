"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create Gmail compose URL with pre-filled data
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kapilkapi2003@gmail.com&su=${encodeURIComponent(
      `Portfolio Contact: Message from ${formData.name || "Visitor"}`,
    )}&body=${encodeURIComponent(
      `Hello Kapil,

${formData.message || "I am interested in discussing potential opportunities with you."}

Best regards,
${formData.name || "Name not provided"}
${formData.email ? `Email: ${formData.email}` : "Email not provided"}

---
This message was sent via your portfolio contact form.`,
    )}`

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kapilkapi2003@gmail.com",
      href: "mailto:kapilkapi2003@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9003985479",
      href: "tel:+919003985479",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hosur, Tamil Nadu",
      href: "#",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "kapil-b-engineer",
      href: "https://www.linkedin.com/in/kapil-b-engineer",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss opportunities in robotics, automation, and innovative engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-blue-600 dark:text-blue-400 mr-4">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
              <h4 className="text-xl font-bold mb-3">Ready to Collaborate?</h4>
              <p className="mb-4">
                I'm always interested in discussing new opportunities in robotics, automation, and innovative
                engineering projects.
              </p>
              <div className="flex space-x-4">
                <Button variant="secondary" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/kapil-b-engineer" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="https://github.com/Kapilmech2003" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and click "Send Message" to compose an email in Gmail
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message via Gmail
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  This will open Gmail with your message pre-filled
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
