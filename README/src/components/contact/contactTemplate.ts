/**
 * Contact HTML Template
 */

export const contactHTML = `
<section class="contact" id="contact">
  <div class="container">
    <div class="contact__card">
      <!-- Left: Image -->
      <div class="contact__image-wrapper">
        <div class="contact__image" style="background-image: url('/images/contact.jpg');"></div>
        <!-- Overlay với gradient blur -->
        <div class="contact__image-overlay"></div>
      </div>
      
      <!-- Right: Content with Form -->
      <div class="contact__content">
        <h2 class="contact__title">Get In Touch</h2>
        <p class="contact__description">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <!-- Contact Form -->
        <form class="contact__form" id="contactForm">
          <!-- Name and Email Row -->
          <div class="contact__form-row">
            <div class="contact__form-group">
              <label for="name" class="contact__label">Your Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                class="contact__input" 
                placeholder="Enter your name"
                required
              >
            </div>
            <div class="contact__form-group">
              <label for="email" class="contact__label">Your Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                class="contact__input" 
                placeholder="Enter your email"
                required
              >
            </div>
          </div>

          <!-- Phone and Subject Row -->
          <div class="contact__form-row">
            <div class="contact__form-group">
              <label for="phone" class="contact__label">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                class="contact__input" 
                placeholder="Enter your phone"
              >
            </div>
            <div class="contact__form-group">
              <label for="subject" class="contact__label">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                class="contact__input" 
                placeholder="Enter subject"
                required
              >
            </div>
          </div>

          <!-- Message -->
          <div class="contact__form-group">
            <label for="message" class="contact__label">Your Message *</label>
            <textarea 
              id="message" 
              name="message" 
              class="contact__textarea" 
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="contact__submit">
            <span>Send Message</span>
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
`;

