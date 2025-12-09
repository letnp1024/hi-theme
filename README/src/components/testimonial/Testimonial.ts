/**
 * Testimonial Component with Carousel
 */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export class Testimonial {
  private swiper: Swiper | null = null;

  constructor() {
    this.init();
  }

  /**
   * Initialize the testimonial carousel
   */
  private init(): void {
    // Initialize carousel
    const carouselElement = document.querySelector<HTMLElement>('.testimonial__carousel');
    if (!carouselElement) return;

    // Register Swiper modules
    Swiper.use([Navigation]);

    // Initialize Swiper
    this.swiper = new Swiper(carouselElement, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.testimonial__carousel-btn--next',
        prevEl: '.testimonial__carousel-btn--prev',
      },
      breakpoints: {
        // Mobile
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Tablet
        768: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        // Desktop
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  /**
   * Destroy the carousel instance
   */
  public destroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }
}

