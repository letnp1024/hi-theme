/**
 * Services Component with Carousel
 */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ParallaxScroll } from '../../helpers/ParallaxScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class Services {
  private swiper: Swiper | null = null;
  private parallaxInstances: ParallaxScroll[] = [];

  constructor() {
    this.init();
  }

  /**
   * Initialize the services carousel
   */
  private init(): void {
    const carouselElement = document.querySelector<HTMLElement>('.services__carousel');
    if (!carouselElement) return;

    // Register Swiper modules
    Swiper.use([Navigation]);

    // Initialize Swiper
    this.swiper = new Swiper(carouselElement, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.services__carousel-btn--next',
        prevEl: '.services__carousel-btn--prev',
      },
      breakpoints: {
        // Mobile
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Tablet
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        // Desktop
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize parallax for service card images
    this.initParallax();

    // Initialize scroll-controlled carousel
    this.initScrollCarousel();
  }

  /**
   * Initialize parallax scroll effect for service card images
   */
  private initParallax(): void {
    // Get all service card images
    const cardImages = document.querySelectorAll<HTMLElement>('.services__card-image');
    const cardImageWrappers = document.querySelectorAll<HTMLElement>('.services__card-image-wrapper');

    cardImages.forEach((image, index) => {
      const wrapper = cardImageWrappers[index];
      if (image && wrapper) {
        const parallaxInstance = new ParallaxScroll(image, wrapper, {
          speed: 0.25,
          scale: 1.25,
          centered: false
        });
        this.parallaxInstances.push(parallaxInstance);
      }
    });
  }

  /**
   * Initialize scroll-controlled carousel
   * Carousel slides based on scroll position, section is pinned until all slides are shown
   */
  private initScrollCarousel(): void {
    if (!this.swiper) return;

    const servicesSection = document.querySelector('.services');
    if (!servicesSection) return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Get total number of slides
    const totalSlides = this.swiper.slides.length;
    if (totalSlides === 0) return;

    // Calculate scroll distance per slide
    const scrollPerSlide = 300; // pixels of scroll per slide
    const totalScrollDistance = totalSlides * scrollPerSlide;

    // Create ScrollTrigger to control carousel based on scroll
    ScrollTrigger.create({
      trigger: servicesSection,
      start: "center center", // Start when section is at center of viewport
      end: `+=${totalScrollDistance}`,
      scrub: 1, // Smooth scrubbing
      pin: true, // Pin services section during scroll
      anticipatePin: 1,
      pinSpacing: true,
      onUpdate: (self) => {
        // Calculate progress (0 to 1)
        const progress = self.progress;
        
        // Calculate which slide should be shown
        const targetSlideIndex = Math.floor(progress * totalSlides);
        
        // Clamp to valid slide index
        const slideIndex = Math.min(targetSlideIndex, totalSlides - 1);
        
        // Update Swiper to show the correct slide
        if (this.swiper && this.swiper.activeIndex !== slideIndex) {
          this.swiper.slideTo(slideIndex, 0); // 0 = no animation, instant
        }
      },
      onEnter: () => {
        // Reset to first slide when entering
        if (this.swiper) {
          this.swiper.slideTo(0, 0);
        }
      },
      onLeave: () => {
        // Show last slide when leaving
        if (this.swiper) {
          this.swiper.slideTo(totalSlides - 1, 0);
        }
      },
      invalidateOnRefresh: true
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

    // Destroy parallax instances
    this.parallaxInstances.forEach(instance => {
      instance.destroy();
    });
    this.parallaxInstances = [];
  }
}

