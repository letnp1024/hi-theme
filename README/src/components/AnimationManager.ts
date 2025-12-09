/**
 * Animation Manager
 * Centralized animation management for all components
 * Uses AOS, GSAP, and custom animations
 */

import { Animations } from './Animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';

export class AnimationManager {
  private static instance: AnimationManager | null = null;

  private constructor() {
    // Private constructor for singleton pattern
  }

  /**
   * Get singleton instance
   */
  static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }

  /**
   * Initialize all animation libraries
   */
  init(): void {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    console.log('✅ AnimationManager initialized');
  }

  /**
   * Initialize Header animations
   */
  initHeaderAnimations(): void {
    const header = document.querySelector('.header');
    const topNav = document.querySelector('.top-nav');
    const navigationBar = document.querySelector('.header__navigation');
    const logo = document.querySelector('.header__top-bar-logo');

    if (!header) return;

    // Sticky header fade-in animation
    if (topNav) {
      gsap.fromTo(
        topNav,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: navigationBar,
            start: 'top top',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Logo animation on scroll
    if (logo) {
      ScrollTrigger.create({
        trigger: header,
        start: 'top top',
        onEnter: () => {
          gsap.to(logo, { scale: 0.9, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(logo, { scale: 1, duration: 0.3 });
        },
      });
    }
  }

  /**
   * Initialize Hero section animations
   */
  initHeroAnimations(): void {
    const heroContent = document.querySelector('.header__hero-content') as HTMLElement | null;
    const heroSlogan = document.querySelector('.header__hero-slogan') as HTMLElement | null;
    const heroSubtitle = document.querySelector('.header__hero-subtitle') as HTMLElement | null;
    const heroCTA = document.querySelector('.header__hero-cta') as HTMLElement | null;
    const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement | null;

    // Hero content fade-in on load
    if (heroContent) {
      Animations.slideInUp(heroContent, 300);
    }

    // Stagger text animations
    if (heroSlogan) {
      Animations.textReveal(heroSlogan, 500);
    }

    if (heroSubtitle) {
      Animations.fadeIn(heroSubtitle, 700);
    }

    if (heroCTA) {
      Animations.bounceIn(heroCTA, 900);
    }

    // Scroll indicator bounce animation
    if (scrollIndicator) {
      Animations.addPulse(scrollIndicator);
    }
  }

  /**
   * Initialize Services section animations
   */
  initServicesAnimations(): void {
    const servicesSection = document.querySelector('.services');
    if (!servicesSection) return;

    // Section fade-in on scroll
    gsap.fromTo(
      servicesSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Service cards slide from left to right with stagger
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -100, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2 + index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Add hover effects to cards
    serviceCards.forEach((card) => {
      Animations.addHoverLift(card as HTMLElement);
      
      // Animate card icon on hover
      const icon = card.querySelector('.services__card-icon');
      if (icon) {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { rotation: 360, duration: 0.6, ease: 'power2.out' });
        });
      }
      
      // Animate overlay elements on card hover
      const overlayTitle = card.querySelector('.services__card-overlay-title');
      const overlayIcon = card.querySelector('.services__card-overlay-icon');
      const overlayDescription = card.querySelector('.services__card-description');
      const overlayLink = card.querySelector('.services__card-link');
      
      card.addEventListener('mouseenter', () => {
        if (overlayTitle) {
          gsap.fromTo(overlayTitle, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, delay: 0.1 });
        }
        if (overlayIcon) {
          gsap.fromTo(overlayIcon, { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 0.5, delay: 0.2 });
        }
        if (overlayDescription) {
          gsap.fromTo(overlayDescription, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.3 });
        }
        if (overlayLink) {
          gsap.fromTo(overlayLink, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, delay: 0.4 });
        }
      });
    });

    // Animate card icons individually
    const cardIcons = document.querySelectorAll('.services__card-icon');
    cardIcons.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 0.3 + index * 0.1,
          scrollTrigger: {
            trigger: icon,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate card titles
    const cardTitles = document.querySelectorAll('.services__card-title');
    cardTitles.forEach((title, index) => {
      Animations.textReveal(title as HTMLElement, 400 + index * 100);
    });
  }

  /**
   * Initialize About Us section animations
   */
  initAboutUsAnimations(): void {
    const aboutSection = document.querySelector('.about-us');
    if (!aboutSection) return;

    // Section fade-in on scroll
    gsap.fromTo(
      aboutSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Content card animation
    const contentCard = document.querySelector('.about-us__card');
    if (contentCard) {
      gsap.fromTo(
        contentCard,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentCard,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Image fade-in animation
    const image = document.querySelector('.about-us__image');
    if (image) {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Title and description text reveal animation
    const title = document.querySelector('.about-us__title');
    const description = document.querySelector('.about-us__description');
    
    if (title) {
      Animations.textReveal(title as HTMLElement, 400);
    }
    
    if (description) {
      Animations.textReveal(description as HTMLElement, 500);
    }

    // Play button animation
    const playButton = document.querySelector('.about-us__play-button');
    if (playButton) {
      gsap.fromTo(
        playButton,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.6,
          scrollTrigger: {
            trigger: playButton,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Play button hover animation
      playButton.addEventListener('mouseenter', () => {
        gsap.to(playButton, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
      });
      playButton.addEventListener('mouseleave', () => {
        gsap.to(playButton, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }

    // FAQ items stagger animation
    const faqItems = document.querySelectorAll('.about-us__faq-item');
    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.7 + index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // FAQ question icon animation on click
      const question = item.querySelector('.about-us__faq-question');
      const icon = question?.querySelector('.fas');
      
      question?.addEventListener('click', () => {
        if (icon) {
          const isActive = item.classList.contains('active');
          gsap.to(icon, { rotation: isActive ? 0 : 180, duration: 0.3, ease: 'power2.out' });
        }
      });
    });
  }

  /**
   * Initialize Testimonials section animations
   */
  initTestimonialsAnimations(): void {
    const testimonialsSection = document.querySelector('.testimonial');
    if (!testimonialsSection) return;

    // Section fade-in on scroll
    gsap.fromTo(
      testimonialsSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: testimonialsSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Testimonial header animation
    const testimonialHeader = document.querySelector('.testimonial__header');
    if (testimonialHeader) {
      gsap.fromTo(
        testimonialHeader,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialHeader,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Testimonial card containers fade-in animation
    const testimonialCards = document.querySelectorAll('.testimonial__card-container') as NodeListOf<HTMLElement>;
    Animations.stagger(testimonialCards, 150, 200);

    // Avatar card animations with scale and rotation
    const avatarCards = document.querySelectorAll('.testimonial__avatar-card');
    avatarCards.forEach((avatar, index) => {
      gsap.fromTo(
        avatar,
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3 + index * 0.1,
          scrollTrigger: {
            trigger: avatar,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Content card animations
    const contentCards = document.querySelectorAll('.testimonial__content-card');
    contentCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.4 + index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Name animations
    const names = document.querySelectorAll('.testimonial__content-card-name');
    names.forEach((name, index) => {
      Animations.textReveal(name as HTMLElement, 500 + index * 100);
    });

    // Rating stars stagger animation
    const ratings = document.querySelectorAll('.testimonial__content-card-rating');
    ratings.forEach((rating) => {
      const stars = rating.querySelectorAll('.fas.fa-star');
      stars.forEach((star, index) => {
        gsap.fromTo(
          star,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.7)',
            delay: 0.6 + index * 0.1,
            scrollTrigger: {
              trigger: rating,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    // Comment text reveal animation
    const comments = document.querySelectorAll('.testimonial__content-card-comment');
    comments.forEach((comment, index) => {
      gsap.fromTo(
        comment,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.8 + index * 0.1,
          scrollTrigger: {
            trigger: comment,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  /**
   * Initialize Contact section animations
   */
  initContactAnimations(): void {
    const contactSection = document.querySelector('.contact');
    if (!contactSection) return;

    // Section fade-in on scroll
    gsap.fromTo(
      contactSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Contact card animation
    const contactCard = document.querySelector('.contact__card');
    if (contactCard) {
      gsap.fromTo(
        contactCard,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactCard,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Title and description animations
    const contactTitle = document.querySelector('.contact__title');
    const contactDescription = document.querySelector('.contact__description');
    
    if (contactTitle) {
      Animations.textReveal(contactTitle as HTMLElement, 300);
    }
    
    if (contactDescription) {
      Animations.textReveal(contactDescription as HTMLElement, 400);
    }

    // Form groups stagger animation
    const formGroups = document.querySelectorAll('.contact__form-group');
    formGroups.forEach((group, index) => {
      gsap.fromTo(
        group,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.5 + index * 0.1,
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Label animations
    const labels = document.querySelectorAll('.contact__label');
    labels.forEach((label, index) => {
      gsap.fromTo(
        label,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.6 + index * 0.05,
          scrollTrigger: {
            trigger: label,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Form fields focus animations
    const formFields = document.querySelectorAll('.contact__input, .contact__textarea');
    formFields.forEach((field) => {
      // Initial animation
      gsap.fromTo(
        field,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: field,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Focus animations
      field.addEventListener('focus', () => {
        gsap.to(field, { scale: 1.02, y: -2, duration: 0.3, ease: 'power2.out' });
        const label = (field as HTMLElement).previousElementSibling;
        if (label && label.classList.contains('contact__label')) {
          gsap.to(label, { color: '#1a73e8', duration: 0.3 });
        }
      });

      field.addEventListener('blur', () => {
        gsap.to(field, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
        const label = (field as HTMLElement).previousElementSibling;
        if (label && label.classList.contains('contact__label')) {
          gsap.to(label, { color: '', duration: 0.3 });
        }
      });
    });

    // Submit button animation
    const submitButton = document.querySelector('.contact__submit');
    if (submitButton) {
      gsap.fromTo(
        submitButton,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 1,
          scrollTrigger: {
            trigger: submitButton,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      Animations.addHoverGlow(submitButton as HTMLElement);
      
      // Submit button icon animation
      const submitIcon = submitButton.querySelector('.fas');
      submitButton.addEventListener('mouseenter', () => {
        if (submitIcon) {
          gsap.to(submitIcon, { x: 5, duration: 0.3, ease: 'power2.out' });
        }
      });
      submitButton.addEventListener('mouseleave', () => {
        if (submitIcon) {
          gsap.to(submitIcon, { x: 0, duration: 0.3, ease: 'power2.out' });
        }
      });
    }

    // Image fade-in animation
    const contactImage = document.querySelector('.contact__image');
    if (contactImage) {
      gsap.fromTo(
        contactImage,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactImage,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  /**
   * Initialize Footer animations
   */
  initFooterAnimations(): void {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    // Footer fade-in on scroll
    gsap.fromTo(
      footer,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Footer columns stagger animation
    const footerColumns = document.querySelectorAll('.footer__column');
    footerColumns.forEach((column, index) => {
      gsap.fromTo(
        column,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: column,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Footer about logo animation
    const footerLogo = document.querySelector('.footer__about-logo');
    if (footerLogo) {
      gsap.fromTo(
        footerLogo,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 0.3,
          scrollTrigger: {
            trigger: footerLogo,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Footer headings animation
    const footerHeadings = document.querySelectorAll('.footer__column h3');
    footerHeadings.forEach((heading, index) => {
      Animations.textReveal(heading as HTMLElement, 400 + index * 50);
    });

    // Social links stagger and hover animations
    const socialLinks = document.querySelectorAll('.footer__social a');
    socialLinks.forEach((link, index) => {
      gsap.fromTo(
        link,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 0.5 + index * 0.1,
          scrollTrigger: {
            trigger: link,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      Animations.addHoverScale(link as HTMLElement);
      
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { rotation: 360, duration: 0.5, ease: 'power2.out' });
      });
    });

    // Footer links stagger and hover animations
    const footerLinks = document.querySelectorAll('.footer__links a');
    footerLinks.forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.6 + index * 0.05,
          scrollTrigger: {
            trigger: link,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      link.addEventListener('mouseenter', () => {
        gsap.to(link, { x: 5, duration: 0.3, ease: 'power2.out' });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Footer contact items animation
    const contactItems = document.querySelectorAll('.footer__contact-item');
    contactItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.7 + index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Icon animation
      const icon = item.querySelector('.fas');
      if (icon) {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.2, rotation: 360, duration: 0.4, ease: 'power2.out' });
        });
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' });
        });
      }
    });

    // Footer bottom animation
    const footerBottom = document.querySelector('.footer__bottom');
    if (footerBottom) {
      gsap.fromTo(
        footerBottom,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 1,
          scrollTrigger: {
            trigger: footerBottom,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  /**
   * Initialize all component animations
   */
  initAllAnimations(): void {
    this.init();
    this.initHeaderAnimations();
    this.initHeroAnimations();
    this.initServicesAnimations();
    this.initAboutUsAnimations();
    this.initTestimonialsAnimations();
    this.initContactAnimations();
    this.initFooterAnimations();
  }

  /**
   * Refresh animations (useful for dynamic content)
   */
  refresh(): void {
    AOS.refresh();
    ScrollTrigger.refresh();
  }
}

