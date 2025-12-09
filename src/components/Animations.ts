/**
 * Animations Utility
 * Centralized animation class management
 * Provides methods to add/remove animation classes consistently
 */

export class Animations {
  /**
   * Slide in content from below
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideInUp(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('content-slide-in');
        element.classList.add('active');
      }, delay);
    } else {
      element.classList.add('content-slide-in');
      element.classList.add('active');
    }
  }

  /**
   * Slide out content downward
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideOutDown(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('content-slide-out');
        element.classList.remove('content-slide-in', 'active');
      }, delay);
    } else {
      element.classList.add('content-slide-out');
      element.classList.remove('content-slide-in', 'active');
    }
  }

  /**
   * Fade in element
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static fadeIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-fade-enter');
      }, delay);
    } else {
      element.classList.add('slide-fade-enter');
    }
  }

  /**
   * Fade out element
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static fadeOut(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-fade-exit');
        element.classList.remove('slide-fade-enter');
      }, delay);
    } else {
      element.classList.add('slide-fade-exit');
      element.classList.remove('slide-fade-enter');
    }
  }

  /**
   * Add breath-in animation to slideshow slide
   * @param element - Slide element to animate
   */
  static breathIn(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('breath-out');
    element.classList.add('breath-in');
  }

  /**
   * Add breath-out animation to slideshow slide
   * @param element - Slide element to animate
   */
  static breathOut(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('breath-in');
    element.classList.add('breath-out');
  }

  /**
   * Remove all animation classes from element
   * @param element - Element to reset
   */
  static reset(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove(
      'content-slide-in',
      'content-slide-out',
      'slide-fade-enter',
      'slide-fade-exit',
      'active',
      'breath-in',
      'breath-out',
      'fading-out'
    );
  }

  /**
   * Toggle active state for hero content
   * @param element - Hero content element
   * @param isActive - Whether to activate or deactivate
   */
  static setHeroContentActive(element: HTMLElement | null, isActive: boolean): void {
    if (!element) return;

    if (isActive) {
      element.classList.add('active');
      // Remove slide-out if present
      element.classList.remove('content-slide-out');
      // Add slide-in after a short delay to trigger animation
      setTimeout(() => {
        element.classList.add('content-slide-in');
      }, 10);
    } else {
      element.classList.remove('active', 'content-slide-in');
      element.classList.add('content-slide-out');
    }
  }

  /**
   * Slide in from left
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideInLeft(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-in-left');
      }, delay);
    } else {
      element.classList.add('slide-in-left');
    }
  }

  /**
   * Slide in from right
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideInRight(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-in-right');
      }, delay);
    } else {
      element.classList.add('slide-in-right');
    }
  }

  /**
   * Zoom in animation
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static zoomIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('zoom-in');
      }, delay);
    } else {
      element.classList.add('zoom-in');
    }
  }

  /**
   * Bounce in animation
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static bounceIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('bounce-in');
      }, delay);
    } else {
      element.classList.add('bounce-in');
    }
  }

  /**
   * Rotate in animation
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static rotateIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('rotate-in');
      }, delay);
    } else {
      element.classList.add('rotate-in');
    }
  }

  /**
   * Flip in animation
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static flipIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('flip-in');
      }, delay);
    } else {
      element.classList.add('flip-in');
    }
  }

  /**
   * Text reveal animation
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static textReveal(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('text-reveal');
      }, delay);
    } else {
      element.classList.add('text-reveal');
    }
  }

  /**
   * Stagger animation for multiple elements
   * @param elements - NodeList or array of elements
   * @param baseDelay - Base delay between each element (ms)
   * @param startDelay - Initial delay before first element (ms)
   */
  static stagger(
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    baseDelay: number = 100,
    startDelay: number = 0
  ): void {
    const elementArray = Array.from(elements);
    
    elementArray.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('stagger-item', 'active');
      }, startDelay + (index * baseDelay));
    });
  }

  /**
   * Add hover lift effect
   * @param element - Element to add effect to
   */
  static addHoverLift(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.add('hover-lift');
  }

  /**
   * Add hover scale effect
   * @param element - Element to add effect to
   */
  static addHoverScale(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.add('hover-scale');
  }

  /**
   * Add hover glow effect
   * @param element - Element to add effect to
   */
  static addHoverGlow(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.add('hover-glow');
  }

  /**
   * Add pulse animation
   * @param element - Element to animate
   */
  static addPulse(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.add('pulse');
  }

  // ============================================
  // Header Specific Animations
  // ============================================

  /**
   * Animate top bar sliding down
   * @param element - Top bar element
   * @param delay - Optional delay in milliseconds
   */
  static topBarEnter(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('top-bar-enter');
      }, delay);
    } else {
      element.classList.add('top-bar-enter');
    }
  }

  /**
   * Animate navigation menu entering
   * @param element - Navigation element
   * @param delay - Optional delay in milliseconds
   */
  static navEnter(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('nav-enter');
      }, delay);
    } else {
      element.classList.add('nav-enter');
    }
  }

  /**
   * Animate navigation menu with fade in
   * @param element - Navigation element
   * @param delay - Optional delay in milliseconds
   */
  static navFadeIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('nav-fade-in');
      }, delay);
    } else {
      element.classList.add('nav-fade-in');
    }
  }

  /**
   * Animate top nav sticky menu
   * @param element - Top nav element
   */
  static topNavEnter(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.add('top-nav-enter');
  }

  /**
   * Animate logo entering
   * @param element - Logo element
   * @param delay - Optional delay in milliseconds
   */
  static logoEnter(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('logo-enter');
      }, delay);
    } else {
      element.classList.add('logo-enter');
    }
  }

  /**
   * Animate nav links with stagger effect
   * @param elements - NodeList or array of nav link elements
   * @param baseDelay - Base delay between each link (ms)
   * @param startDelay - Initial delay before first link (ms)
   */
  static navLinksStagger(
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    baseDelay: number = 100,
    startDelay: number = 0
  ): void {
    const elementArray = Array.from(elements);
    
    elementArray.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('nav-link-enter');
      }, startDelay + (index * baseDelay));
    });
  }

  /**
   * Animate mobile menu sliding in
   * @param element - Mobile menu element
   */
  static mobileMenuEnter(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('mobile-menu-exit');
    element.classList.add('mobile-menu-enter');
  }

  /**
   * Animate mobile menu sliding out
   * @param element - Mobile menu element
   */
  static mobileMenuExit(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('mobile-menu-enter');
    element.classList.add('mobile-menu-exit');
  }

  /**
   * Animate hero content with specific directions:
   * - Slogan: slide from left to right
   * - Subtitle: slide from right to left
   * - CTA: pan from top to bottom
   * @param slogan - Hero slogan element
   * @param subtitle - Hero subtitle element
   * @param cta - Hero CTA element
   */
  static heroContentStagger(
    slogan: HTMLElement | null,
    subtitle: HTMLElement | null,
    cta: HTMLElement | null
  ): void {
    if (slogan) {
      slogan.classList.add('hero-slogan-enter');
    }
    if (subtitle) {
      subtitle.classList.add('hero-subtitle-enter');
    }
    if (cta) {
      cta.classList.add('hero-cta-enter');
    }
  }

  /**
   * Animate hero slogan sliding from left to right
   * @param element - Hero slogan element
   * @param delay - Optional delay in milliseconds
   */
  static heroSloganSlideLeftToRight(element: HTMLElement | null, delay: number = 200): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('hero-slogan-enter');
      }, delay);
    } else {
      element.classList.add('hero-slogan-enter');
    }
  }

  /**
   * Animate hero subtitle sliding from right to left
   * @param element - Hero subtitle element
   * @param delay - Optional delay in milliseconds
   */
  static heroSubtitleSlideRightToLeft(element: HTMLElement | null, delay: number = 400): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('hero-subtitle-enter');
      }, delay);
    } else {
      element.classList.add('hero-subtitle-enter');
    }
  }

  /**
   * Animate hero button panning from top to bottom
   * @param element - Hero CTA button element
   * @param delay - Optional delay in milliseconds
   */
  static heroButtonPanDown(element: HTMLElement | null, delay: number = 600): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('hero-cta-enter');
      }, delay);
    } else {
      element.classList.add('hero-cta-enter');
    }
  }

  /**
   * Reset all header animations
   * @param element - Element to reset
   */
  static resetHeader(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove(
      'top-bar-enter',
      'nav-enter',
      'nav-fade-in',
      'top-nav-enter',
      'logo-enter',
      'nav-link-enter',
      'mobile-menu-enter',
      'mobile-menu-exit',
      'hero-stagger',
      'hero-slogan-enter',
      'hero-subtitle-enter',
      'hero-cta-enter'
    );
  }
}

