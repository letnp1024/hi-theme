/**
 * Footer HTML Template
 */

export const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__container">
      <!-- Footer Content -->
      <div class="footer__content">
        <!-- About Column -->
        <div class="footer__column footer__about">
          <div class="footer__about-logo">
            <span>Your Company</span>
          </div>
          <p>
            We provide exceptional services and solutions to help your business grow and succeed in the digital world.
          </p>
          <div class="footer__social">
            <a href="#" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="footer__column">
          <h3>Quick Links</h3>
          <ul class="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Services Column -->
        <div class="footer__column">
          <h3>Services</h3>
          <ul class="footer__links">
            <li><a href="#service-web">Web Development</a></li>
            <li><a href="#service-marketing">Digital Marketing</a></li>
            <li><a href="#service-consulting">Consulting</a></li>
            <li><a href="#service-cloud">Cloud Solutions</a></li>
            <li><a href="#service-analytics">Data Analytics</a></li>
          </ul>
        </div>

        <!-- Contact Info Column -->
        <div class="footer__column">
          <h3>Contact Info</h3>
          <div class="footer__contact">
            <div class="footer__contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <p>123 Business Street<br>City, State 12345</p>
              </div>
            </div>
            <div class="footer__contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="footer__contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <p>info@yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
`;

