/**
 * Contact Component
 * Handles parallax scroll effect for contact image
 */

import { ParallaxScroll } from '../../helpers/ParallaxScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class Contact {
  private imageElement: HTMLElement | null;
  private imageWrapper: HTMLElement | null;
  private parallaxInstance: ParallaxScroll | null = null;

  constructor() {
    this.imageElement = document.querySelector('.contact__image');
    this.imageWrapper = document.querySelector('.contact__image-wrapper');
    
    this.init();
  }

  /**
   * Initialize the component
   */
  private init(): void {
    // Initialize pan animations (parallax will be enabled after card animation)
    this.initPanAnimations();
  }

  /**
   * Initialize pan animations for entire card
   * Card and image slide from right to left
   * Triggers once when section enters viewport
   * Parallax will be enabled after card animation completes
   */
  private initPanAnimations(): void {
    const contactSection = document.querySelector('.contact');
    const cardElement = document.querySelector('.contact__card');

    if (!contactSection || !cardElement) return;

    // Register ScrollTrigger (safe to call multiple times)
    gsap.registerPlugin(ScrollTrigger);

    // Set initial position - card starts from right
    gsap.set(cardElement, { x: 200, opacity: 0 });

    // Pan animation - triggers once when section enters viewport
    let hasAnimated = false;
    ScrollTrigger.create({
      trigger: contactSection,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          hasAnimated = true;
          gsap.to(cardElement, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              // Enable parallax after card animation completes
              // Delay a bit to ensure card is fully in position
              setTimeout(() => {
                if (!this.parallaxInstance && this.imageElement && this.imageWrapper) {
                  this.initParallax();
                }
              }, 100);
            }
          });
        }
      }
    });
  }

  /**
   * Initialize parallax scroll effect for the image
   */
  private initParallax(): void {
    if (!this.imageElement || !this.imageWrapper) {
      console.warn('Contact: Image element or wrapper not found for parallax');
      return;
    }

    // Sử dụng ParallaxScroll helper
    this.parallaxInstance = new ParallaxScroll(this.imageElement, this.imageWrapper, {
      speed: 0.25,
      scale: 1.25,
      centered: true
    });
  }

  /**
   * Destroy the parallax instance
   */
  public destroy(): void {
    if (this.parallaxInstance) {
      this.parallaxInstance.destroy();
      this.parallaxInstance = null;
    }
  }
}

