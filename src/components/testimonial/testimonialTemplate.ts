/**
 * Testimonial HTML Template
 */

export const testimonialHTML = `
<section class="testimonial" id="testimonial">
  <div class="container">
    <!-- Testimonial Header -->
    <div class="testimonial__header">
      <h2 class="text-primary">What Our Clients Say</h2>
      <p>Read testimonials from our satisfied customers</p>
    </div>

    <!-- Testimonial Carousel -->
    <div class="testimonial__carousel-wrapper">
      <div class="swiper testimonial__carousel">
        <div class="swiper-wrapper">
          <!-- Testimonial 1 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <!-- Card 1: Avatar (Hình tròn) -->
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-01.jpg" alt="John Doe">
              </div>

              <!-- Card 2: Content (Hình chữ nhật) -->
              <div class="testimonial__content-card">
                <!-- Dòng 1: Header -->
                <div class="testimonial__content-card-header">
                  <!-- Thông tin -->
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">John Doe</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>

                <!-- Dòng 2: Bình luận -->
                <p class="testimonial__content-card-comment">
                  "Excellent service and professional team! They delivered exactly what we needed and exceeded our expectations. Highly recommended!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-02.jpg" alt="Jane Smith">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Jane Smith</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Outstanding work! The team was responsive, creative, and delivered on time. Our business has seen significant growth since working with them."
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-04.jpg" alt="Michael Johnson">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Michael Johnson</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Professional, reliable, and results-driven. They understand our needs and provide solutions that work. Couldn't be happier!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-05.jpg" alt="Sarah Williams">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Sarah Williams</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Amazing experience from start to finish. The team is knowledgeable, friendly, and always available to help. Top-notch service!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 5 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-06.jpg" alt="David Brown">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">David Brown</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Best decision we made! The quality of work is exceptional and the team goes above and beyond. Highly satisfied with the results."
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 6 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-07.jpg" alt="Emily Davis">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Emily Davis</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Incredible attention to detail and customer service. They truly care about delivering the best results. Would definitely work with them again!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 7 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-08.jpg" alt="Robert Wilson">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Robert Wilson</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Fast, efficient, and professional. The team exceeded all expectations and delivered outstanding results. Highly recommend their services!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 8 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-09.jpg" alt="Lisa Anderson">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Lisa Anderson</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Outstanding communication and project management. They kept us informed every step of the way and delivered exactly what we needed."
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 9 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-10.jpg" alt="James Taylor">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">James Taylor</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Professional team with excellent expertise. They transformed our vision into reality and helped us achieve our business goals. Thank you!"
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 10 -->
          <div class="swiper-slide">
            <div class="testimonial__card-container">
              <div class="testimonial__avatar-card">
                <img src="/images/testimonial/testimonial-11.jpg" alt="Maria Garcia">
              </div>
              <div class="testimonial__content-card">
                <div class="testimonial__content-card-header">
                  <div class="testimonial__content-card-info">
                    <h3 class="testimonial__content-card-name">Maria Garcia</h3>
                    <div class="testimonial__content-card-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="testimonial__content-card-comment">
                  "Exceptional service and results! The team is creative, professional, and always goes the extra mile. Couldn't be more satisfied!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <button class="testimonial__carousel-btn testimonial__carousel-btn--prev" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="testimonial__carousel-btn testimonial__carousel-btn--next" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
`;

