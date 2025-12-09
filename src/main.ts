/**
 * Corporate Theme - Main Entry Point
 */

// Import Main Styles (SCSS)
import './scss/main.scss'
// Import Font Awesome locally (no CDN)
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import and initialize libraries
import { initializeLibraries } from './libraries-setup'

// Import Animation Manager
import { AnimationManager } from './components/AnimationManager'

// Import Header Component
import { Header } from './components/Header'

// Import Services Component
import { Services } from './components/services/Services'

// Import About Us Component
import { AboutUs } from './components/about-us/AboutUs'

// Import Testimonial Component
import { Testimonial } from './components/testimonial/Testimonial'

// Import Contact Component
import { Contact } from './components/contact/Contact'

// Import HTML Templates
import { headerHTML } from './components/header/headerTemplate'
import { servicesHTML } from './components/services/servicesTemplate'
import { aboutUsHTML } from './components/about-us/aboutUsTemplate'
import { testimonialHTML } from './components/testimonial/testimonialTemplate'
import { contactHTML } from './components/contact/contactTemplate'
import { footerHTML } from './components/footer/footerTemplate'

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  // Initialize libraries (AOS, GSAP, etc.)
  initializeLibraries();
  
  // Initialize Animation Manager
  const animationManager = AnimationManager.getInstance();
  
  // Insert header HTML
  app.innerHTML = headerHTML;
  
  // Initialize Header Component
  const header = new Header();
  
  // Pause slideshow on hover
  header.pauseOnHover();
  
  // Insert Services HTML after header
  app.insertAdjacentHTML('beforeend', servicesHTML);
  
  // Initialize Services Component (Carousel)
  new Services();
  
  // Insert About Us HTML after services
  app.insertAdjacentHTML('beforeend', aboutUsHTML);
  
  // Initialize About Us Component
  new AboutUs();
  
  // Insert Testimonial HTML after about us
  app.insertAdjacentHTML('beforeend', testimonialHTML);
  
  // Initialize Testimonial Component (Carousel)
  new Testimonial();
  
  // Insert Contact HTML after testimonial
  app.insertAdjacentHTML('beforeend', contactHTML);
  
  // Initialize Contact Component (Parallax)
  new Contact();
  
  // Initialize Contact Form
  initContactForm();
  
  // Insert Footer HTML at the end
  app.insertAdjacentHTML('beforeend', footerHTML);
  
  // Initialize all animations after all components are loaded
  animationManager.initAllAnimations();
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        // Smooth scroll implementation will be added later
        console.log('Navigate to:', href);
      }
    });
  });
  
  console.log('✅ Corporate Theme initialized successfully!');
});

/**
 * Initialize Contact Form
 */
function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
}
