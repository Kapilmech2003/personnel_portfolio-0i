# Kapil B - Portfolio Website

A modern, responsive portfolio website showcasing the work of Kapil B, a Mechatronics R&D Engineer specializing in aerospace design, robotics, and automation.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Contact Integration**: Direct Gmail integration for contact form
- **Project Showcase**: Featured projects with GitHub links and demos
- **Skills Display**: Interactive skill categories with logos
- **Professional Timeline**: Experience section with timeline design

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: Theme switching, form handling, smooth scrolling
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Inter font family

## File Structure

\`\`\`
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── public/
│   ├── icons/          # Skill and technology logos
│   │   ├── solidworks.svg
│   │   ├── fusion-360.png
│   │   ├── python.svg
│   │   ├── cpp.svg
│   │   ├── ros2.svg
│   │   ├── raspberry-pi.svg
│   │   ├── slam.svg
│   │   └── ansys-*.png
│   └── images/         # Project images
│       ├── pallet-detection.jpg
│       ├── led-strip.jpg
│       ├── plastik-haut.jpg
│       └── digital-fuel-gauge.jpg
\`\`\`

## Setup and Installation

1. **Clone or Download**: Get the project files
2. **Local Server**: Use a local server to serve the files (recommended)
   \`\`\`bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   \`\`\`
3. **Open Browser**: Navigate to `http://localhost:8000`

## Features Overview

### Theme System
- Automatic dark mode detection based on system preference
- Manual toggle with persistent localStorage
- Smooth transitions between themes

### Contact Form
- Gmail integration for direct email composition
- Form validation and user feedback
- Pre-filled email templates

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling

### Performance
- Optimized images and assets
- Minimal JavaScript footprint
- CSS custom properties for theming

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
\`\`\`css
:root {
  --primary: 59, 130, 246;    /* Blue */
  --secondary: 241, 245, 249; /* Gray */
  /* ... other colors */
}
\`\`\`

### Content
Update content directly in `index.html`:
- Personal information
- Project details
- Skills and technologies
- Contact information

### Styling
Modify `styles.css` for:
- Layout adjustments
- Color schemes
- Typography
- Animations

## Contact

- **Email**: kapilkapi2003@gmail.com
- **Phone**: +91 9003985479
- **LinkedIn**: [kapil-b-engineer](https://www.linkedin.com/in/kapil-b-engineer)
- **GitHub**: [Kapilmech2003](https://github.com/Kapilmech2003)

## License

© 2024 Kapil B. All rights reserved.
