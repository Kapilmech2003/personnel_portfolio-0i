// Performance monitoring
const performanceMetrics = {
  startTime: performance.now(),
  domContentLoaded: null,
  windowLoaded: null,
  firstPaint: null,
  firstContentfulPaint: null,
}

// Capture performance metrics
if ("PerformanceObserver" in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === "first-paint") {
        performanceMetrics.firstPaint = entry.startTime
      }
      if (entry.name === "first-contentful-paint") {
        performanceMetrics.firstContentfulPaint = entry.startTime
      }
    }
  })
  observer.observe({ entryTypes: ["paint"] })
}

function initializeLucideIcons() {
  if (typeof window.lucide !== "undefined") {
    try {
      window.lucide.createIcons()
    } catch (error) {
      console.warn("Lucide icons initialization failed:", error)
    }
  } else {
    // Retry after a short delay if lucide is not loaded yet
    setTimeout(initializeLucideIcons, 100)
  }
}

function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById("loading-indicator")
  if (loadingIndicator) {
    loadingIndicator.style.opacity = "0"
    setTimeout(() => {
      loadingIndicator.style.display = "none"
    }, 300)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  performanceMetrics.domContentLoaded = performance.now()

  // Initialize Lucide icons
  initializeLucideIcons()

  // Hide loading indicator
  hideLoadingIndicator()

  // Update current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  const themeToggle = document.getElementById("theme-toggle")
  const html = document.documentElement

  // Check for saved theme preference or default to system preference
  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  // Apply initial theme
  const initialTheme = getInitialTheme()
  if (initialTheme === "dark") {
    html.classList.add("dark")
  }

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
      initializeLucideIcons()
    }
  })

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark")

    // Save theme preference
    const isDark = html.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    // Re-initialize icons after theme change
    initializeLucideIcons()
  })

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")

  function toggleMobileMenu() {
    const isOpen = !mobileMenu.classList.contains("hidden")

    mobileMenu.classList.toggle("hidden")
    menuIcon.classList.toggle("hidden")
    closeIcon.classList.toggle("hidden")

    // Update ARIA attributes
    mobileMenuToggle.setAttribute("aria-expanded", !isOpen)

    // Focus management
    if (!isOpen) {
      const firstLink = mobileMenu.querySelector("a")
      if (firstLink) firstLink.focus()
    }
  }

  mobileMenuToggle.addEventListener("click", toggleMobileMenu)

  // Close mobile menu with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      toggleMobileMenu()
      mobileMenuToggle.focus()
    }
  })

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a")
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
    })
  })

  const contactForm = document.getElementById("contact-form")

  function validateForm(formData) {
    const name = formData.get("name")?.trim()
    const email = formData.get("email")?.trim()
    const message = formData.get("message")?.trim()

    if (!name || name.length < 2) {
      alert("Please enter a valid name (at least 2 characters)")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return false
    }

    if (!message || message.length < 10) {
      alert("Please enter a message (at least 10 characters)")
      return false
    }

    return true
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)

    if (!validateForm(formData)) {
      return
    }

    const name = formData.get("name") || "Visitor"
    const email = formData.get("email") || "Email not provided"
    const message = formData.get("message") || "I am interested in discussing potential opportunities with you."

    // Create Gmail compose URL with pre-filled data
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kapilkapi2003@gmail.com&su=${encodeURIComponent(
      `Portfolio Contact: Message from ${name}`,
    )}&body=${encodeURIComponent(
      `Hello Kapil,

${message}

Best regards,
${name}
${email !== "Email not provided" ? `Email: ${email}` : email}

---
This message was sent via your portfolio contact form.`,
    )}`

    // Open Gmail in a new tab
    try {
      window.open(gmailUrl, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open Gmail:", error)
      alert("Unable to open Gmail. Please copy the email address: kapilkapi2003@gmail.com")
    }
  })

  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  let scrollTimeout
  const header = document.querySelector("header")

  function handleScroll() {
    const currentScrollY = window.scrollY
    const isDark = html.classList.contains("dark")

    if (currentScrollY > 100) {
      header.style.backgroundColor = isDark ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)"
    } else {
      header.style.backgroundColor = isDark ? "rgba(17, 24, 39, 0.8)" : "rgba(255, 255, 255, 0.8)"
    }
  }

  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      cancelAnimationFrame(scrollTimeout)
    }
    scrollTimeout = requestAnimationFrame(handleScroll)
  })

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
        // Stop observing once animated to improve performance
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
          }
        }
      })
    })

    // Observe images with data-src attribute
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }
})

window.addEventListener("load", () => {
  performanceMetrics.windowLoaded = performance.now()

  // Log performance metrics in development
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("Performance Metrics:", {
      "DOM Content Loaded": `${(performanceMetrics.domContentLoaded - performanceMetrics.startTime).toFixed(2)}ms`,
      "Window Loaded": `${(performanceMetrics.windowLoaded - performanceMetrics.startTime).toFixed(2)}ms`,
      "First Paint": performanceMetrics.firstPaint ? `${performanceMetrics.firstPaint.toFixed(2)}ms` : "N/A",
      "First Contentful Paint": performanceMetrics.firstContentfulPaint
        ? `${performanceMetrics.firstContentfulPaint.toFixed(2)}ms`
        : "N/A",
    })
  }
})

window.addEventListener("error", (e) => {
  console.error("Uncaught error:", e.error)
})

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason)
})
