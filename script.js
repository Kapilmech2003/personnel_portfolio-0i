// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const moonIcon = document.getElementById("moon-icon")
const sunIcon = document.getElementById("sun-icon")
const htmlElement = document.documentElement

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  htmlElement.classList.add("dark")
  sunIcon.classList.remove("hidden")
  moonIcon.classList.add("hidden")
} else {
  htmlElement.classList.remove("dark")
  moonIcon.classList.remove("hidden")
  sunIcon.classList.add("hidden")
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("dark")

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
    sunIcon.classList.remove("hidden")
    moonIcon.classList.add("hidden")
  } else {
    localStorage.setItem("theme", "light")
    moonIcon.classList.remove("hidden")
    sunIcon.classList.add("hidden")
  }
})

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileNav = document.getElementById("mobile-nav")
const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close-icon")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden")

  if (mobileNav.classList.contains("hidden")) {
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  } else {
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  }
})

// Close mobile menu when link is clicked
const mobileLinks = mobileNav.querySelectorAll("a")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// Contact Form - Gmail Integration
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("form-name").value
  const email = document.getElementById("form-email").value
  const message = document.getElementById("form-message").value

  // Create Gmail compose URL with pre-filled data
  const subject = `Portfolio Contact: Message from ${name || "Visitor"}`
  const body = `Hello Kapil,

${message || "I am interested in discussing potential opportunities with you."}

Best regards,
${name || "Name not provided"}
${email ? `Email: ${email}` : "Email not provided"}

---
This message was sent via your portfolio contact form.`

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kapilkapi2003@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  // Open Gmail in a new tab
  window.open(gmailUrl, "_blank")

  // Clear form
  contactForm.reset()
})

// Update footer year
const footerYear = document.getElementById("footer-year")
const currentYear = new Date().getFullYear()
footerYear.textContent = `© ${currentYear} Kapil B. All rights reserved. Built with Innovation and Engineering.`

// Smooth scroll for anchor links (already handled by scroll-smooth in CSS)
// Add fade-in animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})
