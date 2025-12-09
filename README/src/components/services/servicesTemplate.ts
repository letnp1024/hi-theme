/**
 * Services HTML Template
 */

export const servicesHTML = `
<section class="services" id="services">
  <div class="container">

    <!-- Services Carousel -->
    <div class="services__carousel-wrapper">
      <div class="swiper services__carousel">
        <div class="swiper-wrapper">
          <!-- Service Card 1 -->
          <div class="swiper-slide">
            <div class="services__card">
              <div class="services__card-image-wrapper">
                <div class="services__card-image" style="background-image: url('/images/services/service-01.jpg');"></div>
                <div class="services__card-overlay">
                  <div class="services__card-overlay-content">
                    <!-- Dòng 1: Title (trái) và Icon (phải) -->
                    <div class="services__card-overlay-header">
                      <h3 class="services__card-overlay-title">Web Development</h3>
                      <div class="services__card-overlay-icon">
                        <i class="fas fa-code"></i>
                      </div>
                    </div>
                    <!-- Dòng 2: Content -->
                    <div class="services__card-overlay-left">
                      <p class="services__card-description">
                        We create modern, responsive websites that deliver exceptional user experiences and drive business growth.
                      </p>
                      <a href="#service-web" class="services__card-link">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services__card-content">
                <div class="services__card-icon">
                  <i class="fas fa-code"></i>
                </div>
                <h3 class="services__card-title">Web Development</h3>
              </div>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="swiper-slide">
            <div class="services__card">
              <div class="services__card-image-wrapper">
                <div class="services__card-image" style="background-image: url('/images/services/service-02.jpg');"></div>
                <div class="services__card-overlay">
                  <div class="services__card-overlay-content">
                    <div class="services__card-overlay-header">
                      <h3 class="services__card-overlay-title">Digital Marketing</h3>
                      <div class="services__card-overlay-icon">
                        <i class="fas fa-bullhorn"></i>
                      </div>
                    </div>
                    <div class="services__card-overlay-left">
                      <p class="services__card-description">
                        Boost your online presence with our comprehensive digital marketing strategies and campaigns.
                      </p>
                      <a href="#service-marketing" class="services__card-link">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services__card-content">
                <div class="services__card-icon">
                  <i class="fas fa-bullhorn"></i>
                </div>
                <h3 class="services__card-title">Digital Marketing</h3>
              </div>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="swiper-slide">
            <div class="services__card">
              <div class="services__card-image-wrapper">
                <div class="services__card-image" style="background-image: url('/images/services/service-03.jpg');"></div>
                <div class="services__card-overlay">
                  <div class="services__card-overlay-content">
                    <div class="services__card-overlay-header">
                      <h3 class="services__card-overlay-title">Consulting</h3>
                      <div class="services__card-overlay-icon">
                        <i class="fas fa-chart-line"></i>
                      </div>
                    </div>
                    <div class="services__card-overlay-left">
                      <p class="services__card-description">
                        Expert business consulting services to help you make strategic decisions and achieve your goals.
                      </p>
                      <a href="#service-consulting" class="services__card-link">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services__card-content">
                <div class="services__card-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="services__card-title">Consulting</h3>
              </div>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="swiper-slide">
            <div class="services__card">
              <div class="services__card-image-wrapper">
                <div class="services__card-image" style="background-image: url('/images/services/service-04.jpg');"></div>
                <div class="services__card-overlay">
                  <div class="services__card-overlay-content">
                    <div class="services__card-overlay-header">
                      <h3 class="services__card-overlay-title">Cloud Solutions</h3>
                      <div class="services__card-overlay-icon">
                        <i class="fas fa-cloud"></i>
                      </div>
                    </div>
                    <div class="services__card-overlay-left">
                      <p class="services__card-description">
                        Scalable cloud infrastructure and solutions to modernize your business operations and improve efficiency.
                      </p>
                      <a href="#service-cloud" class="services__card-link">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services__card-content">
                <div class="services__card-icon">
                  <i class="fas fa-cloud"></i>
                </div>
                <h3 class="services__card-title">Cloud Solutions</h3>
              </div>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div class="swiper-slide">
            <div class="services__card">
              <div class="services__card-image-wrapper">
                <div class="services__card-image" style="background-image: url('/images/services/service-05.jpg');"></div>
                <div class="services__card-overlay">
                  <div class="services__card-overlay-content">
                    <div class="services__card-overlay-header">
                      <h3 class="services__card-overlay-title">Data Analytics</h3>
                      <div class="services__card-overlay-icon">
                        <i class="fas fa-database"></i>
                      </div>
                    </div>
                    <div class="services__card-overlay-left">
                      <p class="services__card-description">
                        Transform your data into actionable insights with our advanced analytics and business intelligence solutions.
                      </p>
                      <a href="#service-analytics" class="services__card-link">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services__card-content">
                <div class="services__card-icon">
                  <i class="fas fa-database"></i>
                </div>
                <h3 class="services__card-title">Data Analytics</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <button class="services__carousel-btn services__carousel-btn--prev" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="services__carousel-btn services__carousel-btn--next" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
`;
