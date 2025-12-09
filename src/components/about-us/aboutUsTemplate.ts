/**
 * About Us HTML Template
 */

export const aboutUsHTML = `
<section class="about-us" id="about">
  <div class="container">
    <div class="about-us__card">
      <!-- Left: Image with breath animation -->
      <div class="about-us__image-wrapper">
        <div class="about-us__image" style="background-image: url('/images/about-us.jpg');"></div>
        <!-- Overlay với gradient blur và play button -->
        <div class="about-us__image-overlay">
          <button class="about-us__play-button" data-video-url="https://www.youtube.com/watch?v=bQ6WljsU5TQ">
            <i class="fas fa-play"></i>
            <span class="about-us__play-ripple about-us__play-ripple--1"></span>
            <span class="about-us__play-ripple about-us__play-ripple--2"></span>
            <span class="about-us__play-ripple about-us__play-ripple--3"></span>
          </button>
        </div>
      </div>
      
      <!-- Right: Content -->
      <div class="about-us__content">
        <h2 class="about-us__title">Who We Are ?</h2>
        <p class="about-us__description">
          We are a leading company dedicated to delivering exceptional solutions and services to our clients. 
          With years of experience and a team of skilled professionals, we strive for excellence in everything we do.
        </p>
        
        <!-- FAQ Accordion -->
        <div class="about-us__faq">
          <div class="about-us__faq-item">
            <button class="about-us__faq-question">
              <span>What services do you offer?</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="about-us__faq-answer">
              <p>We offer a comprehensive range of services including web development, digital marketing, business consulting, cloud solutions, and data analytics to help your business grow and succeed.</p>
            </div>
          </div>
          
          <div class="about-us__faq-item">
            <button class="about-us__faq-question">
              <span>How long does a typical project take?</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="about-us__faq-answer">
              <p>Project timelines vary depending on the scope and complexity. We typically complete small projects in 2-4 weeks, medium projects in 1-3 months, and large enterprise projects in 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
            </div>
          </div>
          
          <div class="about-us__faq-item">
            <button class="about-us__faq-question">
              <span>Do you provide ongoing support?</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="about-us__faq-answer">
              <p>Yes, we offer comprehensive ongoing support and maintenance packages to ensure your solutions continue to perform optimally. Our support includes regular updates, security patches, and technical assistance.</p>
            </div>
          </div>
          
          <div class="about-us__faq-item">
            <button class="about-us__faq-question">
              <span>What is your pricing structure?</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="about-us__faq-answer">
              <p>Our pricing is customized based on your specific needs and project requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a free consultation and customized quote.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

