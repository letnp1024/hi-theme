/**
 * File này hướng dẫn cách import và khởi tạo các thư viện jQuery/Animation
 * cho Corporate Theme
 */

// ============================================
// 1. JQUERY - Core Library
// ============================================
import $ from 'jquery';
// Đảm bảo jQuery có sẵn globally
(window as any).$ = (window as any).jQuery = $;

// ============================================
// 2. GSAP - Animation Engine Mạnh Mẽ Nhất
// ============================================
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// Đăng ký plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Ví dụ sử dụng GSAP:
// gsap.to('.element', { duration: 1, x: 100, opacity: 0.5 });
// gsap.from('.element', { duration: 1, y: 50, opacity: 0 });

// ============================================
// 3. AOS - Animate On Scroll
// ============================================
import AOS from 'aos';
import 'aos/dist/aos.css';

// Khởi tạo AOS
AOS.init({
  duration: 800,        // Thời gian animation (ms)
  easing: 'ease-in-out', // Easing function
  once: true,           // Chỉ animate một lần
  offset: 100,          // Offset khi scroll
});

// Sử dụng: Thêm data-aos="fade-up" vào HTML element

// ============================================
// 4. SWIPER - Slider/Carousel
// ============================================
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// Đăng ký modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

// Khởi tạo Swiper example:
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination, Autoplay],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
//   pagination: { el: '.swiper-pagination', clickable: true },
//   autoplay: { delay: 3000 },
// });

// Export để sử dụng trong các components khác
export const initSwiper = (selector: string, options?: any) => {
  return new Swiper(selector, {
    modules: [Navigation, Pagination, Autoplay],
    ...options,
  });
};

// ============================================
// 5. ANIMATE.CSS - CSS Animations
// ============================================
import 'animate.css';

// Sử dụng: Thêm class "animate__animated animate__fadeInUp" vào HTML

// ============================================
// 6. WOW.JS - Scroll Reveal Animations
// ============================================
// Note: WOW.js có thể có vấn đề với import, comment out vì đã có AOS
// Nếu cần sử dụng WOW.js, thử các cách sau:

// Cách 1: Import default
// import WOW from 'wow.js';

// Cách 2: Import named export
// import { WOW } from 'wow.js';

// Cách 3: Dynamic import
// const loadWOW = async () => {
//   const module = await import('wow.js');
//   return module.default || module.WOW || module;
// };

// Khởi tạo WOW.js (nếu muốn dùng thay vì AOS)
// const wow = new WOW({
//   boxClass: 'wow',        // class để trigger animation
//   animateClass: 'animated', // class animation
//   offset: 0,              // distance to trigger
//   mobile: true,           // enable on mobile
//   live: true,             // reload trên dynamic content
// });

// wow.init(); // Uncomment để sử dụng

// ============================================
// 7. ISOTOPE - Filtering & Sorting Grid
// ============================================
import Isotope from 'isotope-layout';

// Ví dụ sử dụng:
// const iso = new Isotope('.grid', {
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });
// 
// // Filtering
// $('.filter-button').on('click', function() {
//   const filterValue = $(this).attr('data-filter');
//   iso.arrange({ filter: filterValue });
// });

// ============================================
// 8. MAGNIFIC POPUP - Lightbox
// ============================================
// Note: Magnific Popup cần jQuery, import sau khi jQuery đã load
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

// Sử dụng với jQuery:
// $('.image-popup').magnificPopup({
//   type: 'image',
//   gallery: { enabled: true }
// });

// ============================================
// 9. WAYPOINTS - Scroll Triggers
// ============================================
// Note: Waypoints v4 không có default export, sử dụng dynamic import hoặc comment out nếu không dùng
// Vì đã có GSAP ScrollTrigger và AOS, Waypoints có thể không cần thiết
// Nếu cần sử dụng, uncomment và sử dụng dynamic import:

// import * as WaypointModule from 'waypoints/lib/noframework.waypoints.js';
// const Waypoint = (WaypointModule as any).default || WaypointModule;

// Hoặc sử dụng dynamic import khi cần:
// const loadWaypoint = async () => {
//   const module = await import('waypoints/lib/noframework.waypoints.js');
//   return module.default || module;
// };

// Ví dụ sử dụng (nếu đã load):
// const waypoint = new Waypoint({
//   element: document.querySelector('.element'),
//   handler: function(direction) {
//     if (direction === 'down') {
//       // Do something
//     }
//   }
// });

// ============================================
// 10. PARTICLES.JS - Particle Background
// ============================================
// Note: particles.js không có default export, sử dụng dynamic import hoặc comment out nếu không dùng
// Nếu cần sử dụng, uncomment và sử dụng dynamic import:

// import * as ParticlesModule from 'particles.js';
// const Particles = (ParticlesModule as any).default || ParticlesModule;

// Hoặc sử dụng dynamic import khi cần:
// const loadParticles = async () => {
//   const module = await import('particles.js');
//   return module.default || module;
// };

// Ví dụ sử dụng (nếu đã load):
// Particles('particles-js', {
//   particles: { /* config */ },
//   interactivity: { /* config */ }
// });

// ============================================
// 11. SMOOTH SCROLLBAR - Custom Scrollbar
// ============================================
import SmoothScrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'; // Uncomment if needed

// Ví dụ sử dụng:
// SmoothScrollbar.use(OverscrollPlugin);
// const scrollbar = SmoothScrollbar.init(document.querySelector('#my-scrollbar')!);

// ============================================
// EXPORT TẤT CẢ ĐỂ SỬ DỤNG
// ============================================
export {
  $,
  gsap,
  AOS,
  Swiper,
  Isotope,
  // Particles, // Commented out - use dynamic import if needed
  SmoothScrollbar,
  // Waypoint, // Commented out - use GSAP ScrollTrigger or AOS instead
};

// ============================================
// INITIALIZATION FUNCTION
// ============================================
export const initializeLibraries = () => {
  // Khởi tạo AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
  });

  // Khởi tạo GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Khởi tạo WOW (nếu cần)
  // wow.init();

  console.log('✅ All libraries initialized successfully!');
};

