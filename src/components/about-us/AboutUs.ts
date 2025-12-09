/**
 * About Us Component
 * Handles video play button click and YouTube video modal
 */

import { ParallaxScroll } from '../../helpers/ParallaxScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class AboutUs {
  private playButton: HTMLElement | null;
  private videoUrl: string | null;
  private imageElement: HTMLElement | null;
  private imageWrapper: HTMLElement | null;
  private parallaxInstance: ParallaxScroll | null = null;

  constructor() {
    this.playButton = document.querySelector('.about-us__play-button');
    this.videoUrl = this.playButton?.getAttribute('data-video-url') || null;
    this.imageElement = document.querySelector('.about-us__image');
    this.imageWrapper = document.querySelector('.about-us__image-wrapper');
    
    this.init();
  }

  /**
   * Initialize the component
   */
  private init(): void {
    // Initialize play button
    if (this.playButton && this.videoUrl) {
      this.playButton.addEventListener('click', () => {
        this.openYouTubeVideo(this.videoUrl!);
      });
    }

    // Initialize FAQ accordion
    this.initFAQ();

    // Initialize pan animations (parallax will be enabled after card animation)
    this.initPanAnimations();
  }

  /**
   * Initialize pan animations for entire card
   * Card and image slide from left to right
   * Triggers once when section enters viewport
   * Parallax will be enabled after card animation completes
   */
  private initPanAnimations(): void {
    const aboutSection = document.querySelector('.about-us');
    const cardElement = document.querySelector('.about-us__card');

    if (!aboutSection || !cardElement) return;

    // Register ScrollTrigger (safe to call multiple times)
    gsap.registerPlugin(ScrollTrigger);

    // Set initial position - card starts from left
    gsap.set(cardElement, { x: -200, opacity: 0 });

    // Pan animation - triggers once when section enters viewport
    let hasAnimated = false;
    ScrollTrigger.create({
      trigger: aboutSection,
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
   * Initialize FAQ accordion functionality
   */
  private initFAQ(): void {
    const faqQuestions = document.querySelectorAll('.about-us__faq-question');
    
    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        const faqItem = question.closest('.about-us__faq-item');
        
        if (faqItem) {
          const isCurrentlyActive = faqItem.classList.contains('active');
          
          // Close all other open items first
          const allFaqItems = document.querySelectorAll('.about-us__faq-item');
          let hasOpenItems = false;
          
          allFaqItems.forEach((item) => {
            if (item !== faqItem && item.classList.contains('active')) {
              item.classList.remove('active');
              hasOpenItems = true;
            }
          });

          // Wait for closing animation to complete before opening new item
          if (hasOpenItems && !isCurrentlyActive) {
            setTimeout(() => {
              faqItem.classList.add('active');
            }, 400); // Match transition duration
          } else if (!isCurrentlyActive) {
            // If no items were open, open immediately
            faqItem.classList.add('active');
          } else {
            // If clicking on active item, just close it (already handled above)
            faqItem.classList.remove('active');
          }
        }
      });
    });
  }

  /**
   * Initialize parallax scroll effect for the image
   */
  private initParallax(): void {
    if (!this.imageElement || !this.imageWrapper) {
      console.warn('AboutUs: Image element or wrapper not found for parallax');
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
   * Convert YouTube URL to embed format and open in modal or new tab
   */
  private openYouTubeVideo(url: string): void {
    // Extract video ID from YouTube URL
    const videoId = this.extractVideoId(url);
    
    if (videoId) {
      // Option 1: Open in new tab
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      
      // Option 2: Open in modal (uncomment if you want modal instead)
      // this.openVideoModal(videoId);
    }
  }

  /**
   * Extract video ID from YouTube URL
   */
  private extractVideoId(url: string): string | null {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

}

