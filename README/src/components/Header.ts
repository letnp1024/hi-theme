/**
 * Header Component with Hero Slideshow
 * Includes: Top bar, Navigation menu, and Hero section with slogan
 */

import { Animations } from './Animations';
import { gsap } from 'gsap';

export class Header {
  private slideshowContainer: HTMLElement | null;
  private slides: NodeListOf<HTMLElement> | null;
  private heroContent: HTMLElement | null;
  private currentSlide: number = 0;
  private slideInterval: number | null = null;
  private readonly slideDuration: number = 8000; // 8 seconds per slide (slower transitions)
  private topNav: HTMLElement | null = null;
  private navigationBar: HTMLElement | null = null;
  private scrollTimeout: number | null = null;

  constructor() {
    this.slideshowContainer = document.querySelector('.header__slideshow');
    this.slides = document.querySelectorAll('.header__slideshow-slide');
    this.heroContent = document.querySelector('.header__hero-content');
    this.topNav = document.querySelector('.top-nav');
    this.navigationBar = document.querySelector('.header__navigation');
    
    this.init();
  }

  /**
   * Initialize the header component
   */
  private init(): void {
    if (this.slides && this.slides.length > 0) {
      // Set first slide as active
      this.slides[0].classList.add('active');
      
      // Add breath animation class to first slide (index 0 = breath in)
      this.slides[0].classList.add('breath-in');
      
      this.heroContent?.classList.add('active');
      
      // Start slideshow
      this.startSlideshow();
    }

    // Initialize animations
    this.initAnimations();

    // Initialize mobile menu
    this.initMobileMenu();

    // Initialize top-nav sticky behavior
    this.initTopNav();

    // Initialize hero highlight on scroll
    this.initHeroHighlight();

    // Ripple effect is initialized in main.ts after CDN scripts load
    // this.initRippleEffect();
  }

  /**
   * Initialize header animations
   */
  private initAnimations(): void {
    // Animate top bar
    const topBar = document.querySelector('.header__top-bar');
    Animations.topBarEnter(topBar as HTMLElement, 100);

    // Animate logo
    const logo = document.querySelector('.header__top-bar-logo');
    Animations.logoEnter(logo as HTMLElement, 200);

    // Animate navigation menu
    const navigation = document.querySelector('.header__navigation-inner');
    Animations.navEnter(navigation as HTMLElement, 300);

    // Animate nav links with stagger effect
    const navLinks = document.querySelectorAll('.header__navigation .nav-link');
    Animations.navLinksStagger(navLinks as NodeListOf<HTMLElement>, 80, 400);

    // Wrap words in slogan and subtitle for word-by-word highlight
    this.wrapSloganWords();
    this.wrapSubtitleWords();

    // Animate hero content with stagger
    const heroSlogan = document.querySelector('.header__hero-slogan');
    const heroSubtitle = document.querySelector('.header__hero-subtitle');
    const heroCTA = document.querySelector('.header__hero-cta');
    Animations.heroContentStagger(
      heroSlogan as HTMLElement,
      heroSubtitle as HTMLElement,
      heroCTA as HTMLElement
    );
  }

  /**
   * Wrap each word in slogan with span for word-by-word highlight
   */
  private wrapSloganWords(): void {
    const slogan = document.querySelector('.header__hero-slogan');
    if (!slogan) return;

    const text = slogan.textContent || '';
    const words = text.trim().split(/\s+/);
    
    // Clear existing content
    slogan.innerHTML = '';
    
    // Wrap each word in a span (NO highlight class initially)
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word'; // Only 'word' class, NO 'highlight'
      span.textContent = word;
      slogan.appendChild(span);
      
      // Add space after word (except last)
      if (index < words.length - 1) {
        slogan.appendChild(document.createTextNode(' '));
      }
    });
  }

  /**
   * Wrap each word in subtitle with span for word-by-word highlight
   */
  private wrapSubtitleWords(): void {
    const subtitle = document.querySelector('.header__hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent || '';
    const words = text.trim().split(/\s+/);
    
    // Clear existing content
    subtitle.innerHTML = '';
    
    // Wrap each word in a span (NO highlight class initially)
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word'; // Only 'word' class, NO 'highlight'
      span.textContent = word;
      subtitle.appendChild(span);
      
      // Add space after word (except last)
      if (index < words.length - 1) {
        subtitle.appendChild(document.createTextNode(' '));
      }
    });
  }

  /**
   * Start the automatic slideshow
   */
  private startSlideshow(): void {
    if (!this.slides || this.slides.length <= 1) return;

    this.slideInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.slideDuration);
  }

  /**
   * Stop the slideshow
   */
  private stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  /**
   * Go to next slide
   */
  private nextSlide(): void {
    if (!this.slides || this.slides.length === 0) return;

    const totalSlides = this.slides.length;
    const nextIndex = (this.currentSlide + 1) % totalSlides;
    
    this.goToSlide(nextIndex);
  }


  /**
   * Navigate to specific slide
   */
  private goToSlide(index: number): void {
    if (!this.slides || this.slides.length === 0) return;
    if (index < 0 || index >= this.slides.length) return;
    if (index === this.currentSlide) return; // Don't switch to same slide

    // Slide out current content
    if (this.heroContent) {
      this.heroContent.classList.add('content-slide-out');
      this.heroContent.classList.remove('content-slide-in');
    }

    // Get slide elements
    const currentSlideElement = this.slides[this.currentSlide];
    const newSlideElement = this.slides[index];
    
    // Update current slide index immediately
    this.currentSlide = index;
    
    // Remove breath classes and active class from current slide
    currentSlideElement.classList.remove('breath-in', 'breath-out', 'active');
    currentSlideElement.classList.add('fading-out');
    
    // Remove breath classes from new slide first
    newSlideElement.classList.remove('breath-in', 'breath-out');
    
    // Add active class to new slide immediately (will fade in)
    // Both slides will transition simultaneously for smooth cross-fade
    newSlideElement.classList.add('active');
    
    // Add breath animation class based on slide index (alternating)
    // Even index (0, 2, 4...) = breath in, Odd index (1, 3, 5...) = breath out
    if (index % 2 === 0) {
      newSlideElement.classList.add('breath-in');
    } else {
      newSlideElement.classList.add('breath-out');
    }
    
    // Remove 'fading-out' class after transition completes
    setTimeout(() => {
      currentSlideElement.classList.remove('fading-out');
    }, 2000); // Match transition duration (2s)
    
    // Slide in new content after fade transition starts
    setTimeout(() => {
      if (this.heroContent) {
        this.heroContent.classList.remove('content-slide-out');
        this.heroContent.classList.add('content-slide-in');
        this.heroContent.classList.add('active');
      }
    }, 100);
  }

  /**
   * Initialize mobile menu functionality with jQuery overlay
   * Mobile menu slides in from left with backdrop
   */
  private initMobileMenu(): void {
    // Ensure jQuery is available
    const $ = (window as any).$ || (window as any).jQuery;
    if (!$) {
      console.warn('jQuery is not loaded. Mobile menu overlay requires jQuery.');
      return;
    }

    // Create backdrop element if it doesn't exist
    let $backdrop = $('.header__navigation-backdrop');
    if ($backdrop.length === 0) {
      $backdrop = $('<div class="header__navigation-backdrop"></div>');
      $('body').append($backdrop);
    }

    const $navCollapse = $('.navbar-collapse');
    const $toggler = $('.navbar-toggler');

    // Function to open mobile menu
    const openMenu = (): void => {
      if (window.innerWidth < 992) {
        $navCollapse.addClass('show');
        $backdrop.addClass('show');
        $('body').css('overflow', 'hidden'); // Prevent body scroll
        // Animate mobile menu entrance
        Animations.mobileMenuEnter($navCollapse[0] as HTMLElement);
      }
    };

    // Function to close mobile menu
    const closeMenu = (): void => {
      // Animate mobile menu exit
      Animations.mobileMenuExit($navCollapse[0] as HTMLElement);
      setTimeout(() => {
        $navCollapse.removeClass('show');
        $backdrop.removeClass('show');
        $('body').css('overflow', ''); // Restore body scroll
      }, 300); // Match animation duration
    };

    // Toggle menu on navbar-toggler click
    $toggler.on('click', function(e: JQuery.Event) {
      e.preventDefault();
      e.stopPropagation();
      
      if (window.innerWidth < 992) {
        if ($navCollapse.hasClass('show')) {
          closeMenu();
        } else {
          openMenu();
        }
      }
    });

    // Close menu when clicking backdrop
    $backdrop.on('click', closeMenu);

    // Close menu when clicking nav links (mobile only)
    // Also sync active state between main nav and top-nav
    $('.nav-link').on('click', function(this: HTMLElement) {
      const $link = $(this);
      const href = $link.attr('href');

      // Sync active state
      $('.nav-link').removeClass('active');
      $link.addClass('active');

      // Sync with top-nav links
      if (href) {
        $('.top-nav .nav-link').removeClass('active');
        $(`.top-nav .nav-link[href="${href}"]`).addClass('active');
      }

      // Close mobile menu
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });

    // Also handle clicks on top-nav links
    $('.top-nav .nav-link').on('click', function(this: HTMLElement) {
      const $link = $(this);
      const href = $link.attr('href');

      // Sync active state
      $('.top-nav .nav-link').removeClass('active');
      $link.addClass('active');

      // Sync with main nav links
      if (href) {
        $('.header__navigation .nav-link').removeClass('active');
        $(`.header__navigation .nav-link[href="${href}"]`).addClass('active');
      }
    });

    // Close menu on window resize if switching to desktop
    $(window).on('resize', function() {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    });

    // Close menu on ESC key
    $(document).on('keydown', function(e: JQuery.Event) {
      if (e.key === 'Escape' && $navCollapse.hasClass('show')) {
        closeMenu();
      }
    });
  }

  /**
   * Update active navigation link based on current section
   * Updates both main nav and top-nav
   */
  public updateActiveNav(activeSection: string): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('active');
      }
    });
    
    // Also update top-nav
    this.updateActiveTopNav(activeSection);
  }

  /**
   * Pause slideshow on hover
   */
  public pauseOnHover(): void {
    if (this.slideshowContainer) {
      this.slideshowContainer.addEventListener('mouseenter', () => {
        this.stopSlideshow();
      });

      this.slideshowContainer.addEventListener('mouseleave', () => {
        this.startSlideshow();
      });
    }
  }

  /**
   * Initialize top navigation sticky behavior
   * Shows when scrolling down past the navigation bar
   * Hides when scrolling back up to the navigation bar
   */
  private initTopNav(): void {
    if (!this.topNav || !this.navigationBar) return;

    // Throttle function to optimize scroll performance
    const handleScroll = (): void => {
      if (this.scrollTimeout) {
        window.cancelAnimationFrame(this.scrollTimeout);
      }

      this.scrollTimeout = window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navigationRect = this.navigationBar!.getBoundingClientRect();
        const navigationBottom = navigationRect.bottom + scrollTop;

        // Show top-nav when scrolled past navigation bar
        if (scrollTop > navigationBottom) {
          // Scrolling down past nav bar - show top-nav
          if (!this.topNav!.classList.contains('show')) {
            this.topNav!.classList.add('show');
            Animations.topNavEnter(this.topNav);
          }
        } else {
          // Scrolled back up to or above nav bar - hide top-nav
          if (this.topNav!.classList.contains('show')) {
            this.topNav!.classList.remove('show');
          }
        }
      });
    };

    // Add scroll event listener with throttling
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check on page load
    handleScroll();
  }

  /**
   * Update active navigation link in top-nav based on current section
   */
  public updateActiveTopNav(activeSection: string): void {
    if (!this.topNav) return;
    
    const topNavLinks = this.topNav.querySelectorAll('.nav-link');
    topNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Initialize hero highlight effect on scroll using GSAP ScrollTrigger
   * Highlights each word one by one as user scrolls down
   * Pins hero section during highlighting process
   */
  private initHeroHighlight(): void {
    if (!this.heroContent) return;

    const slogan = this.heroContent.querySelector('.header__hero-slogan');
    const subtitle = this.heroContent.querySelector('.header__hero-subtitle');
    const button = this.heroContent.querySelector('.header__hero-button');
    if (!slogan) return;

    // Get all word elements from slogan
    const sloganWords = slogan.querySelectorAll('.word');
    const totalSloganWords = sloganWords.length;
    
    if (totalSloganWords === 0) return;

    // Get all word elements from subtitle
    const subtitleWords = subtitle ? subtitle.querySelectorAll('.word') : [];
    const totalSubtitleWords = subtitleWords.length;
    
    // Total words = slogan words + subtitle words
    const totalWords = totalSloganWords + totalSubtitleWords;

    // Ensure NO words are highlighted initially
    sloganWords.forEach(word => {
      word.classList.remove('highlight');
    });
    subtitleWords.forEach(word => {
      word.classList.remove('highlight');
    });

    // Hide button initially and prepare for pop animation
    let buttonPopped = false;
    if (button) {
      gsap.set(button, {
        opacity: 0,
        scale: 0.5,
        y: 20
      });
    }

    // Get hero element
    const heroElement = document.querySelector('.header');
    const heroSection = document.querySelector('.header__hero');
    if (!heroElement || !heroSection) return;

    // Calculate distance for highlighting (each word gets some scroll distance)
    const scrollPerWord = 150; // pixels of scroll per word
    const totalScrollDistance = totalWords * scrollPerWord;

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroElement,
        start: "top top",
        end: `+=${totalScrollDistance}`,
        scrub: 0.5, // Smooth scrubbing
        pin: true, // Pin hero section during scroll
        anticipatePin: 1,
        pinSpacing: true,
        onUpdate: (self) => {
          // Calculate progress (0 to 1)
          const progress = self.progress;
          
          // Calculate how many words should be highlighted
          const highlightedWordCount = Math.floor(progress * totalWords);
          
          // Update slogan word highlights
          sloganWords.forEach((word, index) => {
            if (index < highlightedWordCount) {
              word.classList.add('highlight');
            } else {
              word.classList.remove('highlight');
            }
          });

          // Check if all slogan words are highlighted
          const allSloganWordsHighlighted = highlightedWordCount >= totalSloganWords;
          
          // Pop button immediately when all slogan words are highlighted (only once, independent of scroll)
          if (allSloganWordsHighlighted && button && !buttonPopped) {
            // All slogan words highlighted - pop the button immediately (only once)
            buttonPopped = true;
            gsap.to(button, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)", // Bounce effect
              delay: 0.2
            });
          }
          // Note: Button will not be reset when scrolling back up - it stays popped once triggered

          // Update subtitle word highlights (after all slogan words)
          if (allSloganWordsHighlighted) {
            const subtitleHighlightCount = highlightedWordCount - totalSloganWords;
            subtitleWords.forEach((word, index) => {
              if (index < subtitleHighlightCount) {
                word.classList.add('highlight');
              } else {
                word.classList.remove('highlight');
              }
            });
            
            // Add highlight class to content when subtitle starts highlighting
            if (!this.heroContent!.classList.contains('highlight')) {
              this.heroContent!.classList.add('highlight');
            }
          } else {
            // Remove subtitle highlights if not all slogan words are done
            subtitleWords.forEach(word => word.classList.remove('highlight'));
            if (this.heroContent!.classList.contains('highlight')) {
              this.heroContent!.classList.remove('highlight');
            }
          }
        },
        onEnter: () => {
          // Ensure no highlights when entering
          sloganWords.forEach(word => word.classList.remove('highlight'));
          subtitleWords.forEach(word => word.classList.remove('highlight'));
          if (this.heroContent!.classList.contains('highlight')) {
            this.heroContent!.classList.remove('highlight');
          }
          // Only reset button if it hasn't been popped yet (first time entering)
          if (!buttonPopped && button) {
            gsap.set(button, {
              opacity: 0,
              scale: 0.5,
              y: 20
            });
          }
        },
        onLeave: () => {
          // Ensure all highlights when leaving
          sloganWords.forEach(word => word.classList.add('highlight'));
          subtitleWords.forEach(word => word.classList.add('highlight'));
          if (!this.heroContent!.classList.contains('highlight')) {
            this.heroContent!.classList.add('highlight');
          }
          // Show button with pop animation
          if (button) {
            gsap.to(button, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)"
            });
          }
        },
        onEnterBack: () => {
          // Reset highlights when scrolling back
          sloganWords.forEach(word => word.classList.remove('highlight'));
          subtitleWords.forEach(word => word.classList.remove('highlight'));
          if (this.heroContent!.classList.contains('highlight')) {
            this.heroContent!.classList.remove('highlight');
          }
          // Keep button popped if it was already popped (don't reset)
          // Button will remain visible if it was already triggered
        }
      }
    });

    // Store ScrollTrigger instance for cleanup
    (this as any)._heroScrollTrigger = tl.scrollTrigger;
  }

}

