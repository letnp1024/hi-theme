/**
 * Contact Form HTML Template
 */

export const contactFormHTML = `
<section class="contact-form" id="contact">
  <div class="container">
    <div class="contact-form__container">
      <!-- Header -->
      <div class="contact-form__header">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <!-- Form -->
      <form class="contact-form__form" id="contactForm">
        <!-- Name and Email Row -->
        <div class="contact-form__row">
          <div class="contact-form__group">
            <label for="name" class="contact-form__label">Your Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="contact-form__input" 
              placeholder="Enter your name"
              required
            >
          </div>
          <div class="contact-form__group">
            <label for="email" class="contact-form__label">Your Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="contact-form__input" 
              placeholder="Enter your email"
              required
            >
          </div>
        </div>

        <!-- Phone and Subject Row -->
        <div class="contact-form__row">
          <div class="contact-form__group">
            <label for="phone" class="contact-form__label">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              class="contact-form__input" 
              placeholder="Enter your phone"
            >
          </div>
          <div class="contact-form__group">
            <label for="subject" class="contact-form__label">Subject *</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              class="contact-form__input" 
              placeholder="Enter subject"
              required
            >
          </div>
        </div>

        <!-- Message -->
        <div class="contact-form__group">
          <label for="message" class="contact-form__label">Your Message *</label>
          <textarea 
            id="message" 
            name="message" 
            class="contact-form__textarea" 
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="contact-form__submit">
          <span>Send Message</span>
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
</section>
`;

