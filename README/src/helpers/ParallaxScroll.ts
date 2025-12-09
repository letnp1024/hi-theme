/**
 * Parallax Scroll Effect Helper
 * Tạo hiệu ứng parallax cho các element khi scroll
 */

export interface ParallaxScrollOptions {
  speed?: number; // Tốc độ parallax (0.1 - 1.0), mặc định 0.25
  scale?: number; // Scale của element, mặc định 1.0
  centered?: boolean; // Có dùng translate(-50%, -50%) để center không, mặc định false
}

export class ParallaxScroll {
  private element: HTMLElement;
  private container: HTMLElement | null;
  private parallaxSpeed: number;
  private scale: number;
  private centered: boolean;
  private scrollTimeout: number | null = null;
  private scrollHandler: (() => void) | null = null;
  private resizeHandler: (() => void) | null = null;

  /**
   * @param element - Element cần áp dụng parallax (ảnh)
   * @param container - Container để tính toán viewport position (optional, mặc định là parent)
   * @param options - Options cho parallax effect
   */
  constructor(
    element: HTMLElement,
    container: HTMLElement | null = null,
    options: ParallaxScrollOptions = {}
  ) {
    this.element = element;
    this.container = container || element.parentElement;
    this.parallaxSpeed = options.speed || 0.05;
    this.scale = options.scale || 1.0;
    this.centered = options.centered || false;
    this.init();
  }

  /**
   * Initialize parallax scroll effect
   */
  private init(): void {
    if (!this.element) {
      console.warn('ParallaxScroll: Element not found');
      return;
    }

    if (!this.container) {
      console.warn('ParallaxScroll: Container not found');
      return;
    }

    this.scrollHandler = (): void => {
      if (this.scrollTimeout) {
        window.cancelAnimationFrame(this.scrollTimeout);
      }

      this.scrollTimeout = window.requestAnimationFrame(() => {
        if (!this.element || !this.container) return;

        const rect = this.container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax when container is in or near viewport
        if (rect.bottom > -100 && rect.top < windowHeight + 100) {
          // Simple parallax: dựa trên khoảng cách từ top của container đến top của viewport
          // Element càng xa top viewport (scroll xuống) -> ảnh trượt lên (offset âm)
          // Element càng gần top viewport (scroll lên) -> ảnh trượt xuống (offset dương)
          const elementTopFromViewport = rect.top;
          let offset = -elementTopFromViewport * this.parallaxSpeed;

          // Giới hạn offset để ảnh không bị lộ ra ngoài frame
          // Với scale > 1, ảnh lớn hơn container, nên có thể di chuyển được một khoảng
          // maxOffset = (containerHeight * (scale - 1)) / 2
          const containerHeight = rect.height;
          const maxOffset = (containerHeight * (this.scale - 1)) / 2;
          
          // Clamp offset trong phạm vi cho phép
          offset = Math.max(-maxOffset, Math.min(maxOffset, offset));

          // Apply transform based on centered option
          if (this.centered) {
            // Use centered transform with scale
            this.element.style.transform = `translate(-50%, calc(-50% + ${offset}px)) scale(${this.scale})`;
          } else {
            // Use simple translateY with scale
            this.element.style.transform = `translateY(${offset}px) scale(${this.scale})`;
          }
        }
      });
    };

    this.resizeHandler = this.scrollHandler;

    // Add scroll event listener
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.resizeHandler, { passive: true });

    // Initial calculation after DOM is ready
    setTimeout(() => {
      if (this.scrollHandler) {
        this.scrollHandler();
      }
    }, 300);
  }

  /**
   * Destroy parallax effect (clean up event listeners)
   */
  public destroy(): void {
    if (this.scrollTimeout) {
      window.cancelAnimationFrame(this.scrollTimeout);
      this.scrollTimeout = null;
    }

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }

    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}

