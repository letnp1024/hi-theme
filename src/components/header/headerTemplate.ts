/**
 * Header HTML Template
 */

export const headerHTML = `
<header class="header" id="header">
  <!-- Hero Slideshow Background -->
  <div class="header__slideshow">
    <div class="header__slideshow-slide" style="background-image: url('/images/hero/hero.jpg');"></div>
    <div class="header__slideshow-slide" style="background-image: url('/images/hero/hero1.jpg');"></div>
    <!-- Gradient Overlay - Center -->
    <div class="header__slideshow-gradient"></div>
  </div>

  <!-- Header Content -->
  <div class="header__content">
    <!-- Part 1: Top Info Bar -->
    <div class="header__top-bar">
      <div class="container">
        <div class="header__top-bar-inner">
          <!-- Left: Logo -->
          <div class="header__top-bar-logo">
            <img src="/logo.svg" alt="Company Logo" onerror="this.style.display='none'" />
            <span style="font-size: 1.5rem; font-weight: 700; color: var(--bs-primary);">Logo</span>
          </div>
          <!-- Right: Contact Info -->
          <div class="header__top-bar-info">
            <div class="info-item">
              <i class="fas fa-phone-alt"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>123 Business St, City, State 12345</span>
            </div>
            <div class="info-item">
              <i class="fas fa-clock"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Part 2: Navigation Menu -->
    <div class="header__navigation">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="header__navigation-inner">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#testimonial">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Part 3: Hero Section (Slogan + CTA) -->
    <div class="header__hero">
      <div class="container">
        <div class="header__hero-content">
          <h1 class="header__hero-slogan">
            Building Success Through Innovation
          </h1>
          <p class="header__hero-subtitle">
            We deliver exceptional solutions that drive growth and create lasting value for your business
          </p>
          <div class="header__hero-cta">
            <a href="#contact" class="header__hero-button">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- Top Navigation (Sticky) -->
<nav class="top-nav" id="topNav">
  <div class="container">
    <div class="top-nav__inner">
      <div class="top-nav__logo">
        <img src="/logo.svg" alt="Company Logo" onerror="this.style.display='none'" />
        <span>Logo</span>
      </div>
      <div class="top-nav__menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonial">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
`;

