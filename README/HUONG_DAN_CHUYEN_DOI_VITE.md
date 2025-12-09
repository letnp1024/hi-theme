# HƯỚNG DẪN CHUYỂN ĐỔI SOURCE CODE TỪ VITE SANG DỰ ÁN MỚI

## TỔNG QUAN

Dự án Vite cũ sử dụng:
- **Vite** để bundle và dev server
- **Import SCSS** trực tiếp trong TypeScript (`import './scss/main.scss'`)
- **Import CSS** từ node_modules (`import '@fortawesome/fontawesome-free/css/all.min.css'`)
- **Dynamic HTML injection** vào `#app` element
- **Component-based** với TypeScript classes

Dự án mới (không dùng Vite):
- **Compile SCSS** riêng bằng `sass` CLI
- **Compile TypeScript** riêng bằng `tsc`
- **Link CSS/JS** trong HTML (không bundle)
- **Static HTML files** với includes/components
- **Modular structure** nhưng không bundle

---

## PHẦN 1: CHUYỂN ĐỔI SCSS

### 1.1. Cấu trúc SCSS cũ (Vite)

```
src/scss/
├── main.scss              (Import tất cả, kể cả Bootstrap SCSS)
├── _variables.scss
├── _mixins.scss
├── _typography.scss
├── _bootstrap-override.scss
└── components/
    ├── _header.scss
    ├── _services.scss
    └── ...
```

### 1.2. Cấu trúc SCSS mới

```
assets/scss/
├── style.scss             (Import tất cả - KHÔNG import Bootstrap SCSS)
├── _variables.scss
├── _mixins.scss
├── _base.scss             (Thay _typography.scss)
├── _layout.scss
├── _utilities.scss
├── _responsive.scss
├── components/
│   ├── _buttons.scss
│   ├── _forms.scss
│   └── ...
└── sections/
    ├── _header.scss
    ├── _services.scss
    └── ...
```

### 1.3. Các bước chuyển đổi SCSS

#### BƯỚC 1: Copy các file SCSS

```bash
# Copy file chính
cp README/src/scss/_variables.scss assets/scss/_variables.scss
cp README/src/scss/_mixins.scss assets/scss/_mixins.scss

# Copy components
cp README/src/scss/components/_header.scss assets/scss/sections/_header.scss
cp README/src/scss/components/_services.scss assets/scss/sections/_services.scss
cp README/src/scss/components/_about-us.scss assets/scss/sections/_about.scss
cp README/src/scss/components/_testimonial.scss assets/scss/sections/_testimonials.scss
cp README/src/scss/components/_contact.scss assets/scss/sections/_contact.scss
cp README/src/scss/components/_footer.scss assets/scss/sections/_footer.scss
cp README/src/scss/components/_animations.scss assets/scss/components/_animations.scss
```

#### BƯỚC 2: Tạo file style.scss mới

**File cũ (Vite):**
```scss
// src/scss/main.scss
@use "variables" as *;
@use "mixins" as *;
@use "typography" as *;

// Import Bootstrap SCSS
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
// ... nhiều Bootstrap imports

// Import components
@use "components/header";
@use "components/services";
// ...
```

**File mới (Không dùng Vite):**
```scss
// assets/scss/style.scss

// KHÔNG import Bootstrap SCSS - chỉ link CSS trong HTML
// @use "bootstrap/scss/..."  ❌ KHÔNG DÙNG

// Import custom SCSS với @use
@use "variables" as *;
@use "mixins" as *;
@use "base" as *;  // Thay _typography.scss
@use "layout" as *;
@use "utilities" as *;

// Import components
@use "components/animations" as *;
@use "components/buttons" as *;
@use "components/forms" as *;
// ...

// Import sections
@use "sections/header" as *;
@use "sections/hero" as *;
@use "sections/about" as *;
@use "sections/services" as *;
@use "sections/testimonials" as *;
@use "sections/contact" as *;
@use "sections/footer" as *;

// Import pages (nếu có)
@use "pages/homepage" as *;
@use "pages/about-page" as *;
// ...

// Responsive
@use "responsive" as *;
```

#### BƯỚC 3: Xử lý Bootstrap Override

**File cũ:** `_bootstrap-override.scss` - Override Bootstrap variables

**File mới:** Không cần file này vì không import Bootstrap SCSS

**Giải pháp:** Dùng CSS Custom Properties để override Bootstrap:

```scss
// assets/scss/_variables.scss
:root {
  // Override Bootstrap colors bằng CSS variables
  --bs-primary: #0644D7;
  --bs-primary-light: #4B81D1;
  --bs-secondary: #EEC06E;
  // ...
}
```

Hoặc override trực tiếp trong `_base.scss`:
```scss
// assets/scss/_base.scss
:root {
  --bs-primary: #0644D7;
  --bs-secondary: #EEC06E;
}
```

#### BƯỚC 4: Tạo các file SCSS còn thiếu

```bash
# Tạo file base.scss từ typography.scss
cp README/src/scss/_typography.scss assets/scss/_base.scss

# Tạo file layout.scss mới (nếu chưa có)
touch assets/scss/_layout.scss

# Tạo file utilities.scss mới
touch assets/scss/_utilities.scss

# Tạo file responsive.scss mới
touch assets/scss/_responsive.scss
```

---

## PHẦN 2: CHUYỂN ĐỔI TYPESCRIPT

### 2.1. Cấu trúc TypeScript cũ (Vite)

```
src/
├── main.ts                    (Entry point - import SCSS, init components)
├── libraries-setup.ts         (Setup tất cả thư viện)
├── components/
│   ├── Header.ts
│   ├── AnimationManager.ts
│   ├── Animations.ts
│   ├── services/
│   │   ├── Services.ts
│   │   └── servicesTemplate.ts
│   └── ...
└── helpers/
    └── ParallaxScroll.ts
```

### 2.2. Cấu trúc TypeScript mới

```
assets/ts/
├── main.ts                    (Entry point - KHÔNG import SCSS)
├── components/
│   ├── header.ts
│   ├── navigation.ts
│   ├── slider.ts
│   ├── animations.ts
│   └── ...
├── sections/
│   ├── about.ts
│   ├── services.ts
│   └── ...
└── utils/
    ├── helpers.ts
    └── parallax-scroll.ts     (Từ helpers/ParallaxScroll.ts)
```

### 2.3. Các bước chuyển đổi TypeScript

#### BƯỚC 1: Tạo file libraries-setup.ts mới

**File cũ:** `src/libraries-setup.ts` - Import và setup thư viện

**File mới:** `assets/ts/utils/libraries-setup.ts`

**Thay đổi:**
- ❌ Bỏ `import './scss/main.scss'` (SCSS compile riêng)
- ❌ Bỏ `import '@fortawesome/fontawesome-free/css/all.min.css'` (Link trong HTML)
- ❌ Bỏ `import 'aos/dist/aos.css'` (Link trong HTML)
- ✅ Giữ lại import JavaScript libraries
- ✅ Export initialization function

**Ví dụ:**
```typescript
// assets/ts/utils/libraries-setup.ts

// Import từ node_modules (TypeScript sẽ resolve)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import $ from 'jquery';

// Đảm bảo jQuery global
(window as any).$ = (window as any).jQuery = $;

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Register Swiper modules
Swiper.use([Navigation, Pagination, Autoplay]);

// Export để sử dụng
export { $, gsap, AOS, Swiper };

// Initialization function
export const initializeLibraries = (): void => {
  // Khởi tạo AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
  });

  console.log('✅ All libraries initialized successfully!');
};
```

#### BƯỚC 2: Chuyển đổi main.ts

**File cũ:**
```typescript
// src/main.ts
import './scss/main.scss'  // ❌ Bỏ
import '@fortawesome/fontawesome-free/css/all.min.css'  // ❌ Bỏ

import { initializeLibraries } from './libraries-setup'
import { Header } from './components/Header'
import { headerHTML } from './components/header/headerTemplate'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')!;
  initializeLibraries();
  app.innerHTML = headerHTML;  // ❌ Không dùng dynamic injection
  new Header();
});
```

**File mới:**
```typescript
// assets/ts/main.ts

// KHÔNG import SCSS - SCSS compile riêng
// KHÔNG import CSS - Link trong HTML

// Import libraries setup
import { initializeLibraries } from './utils/libraries-setup';

// Import components
import { initHeader } from './components/header';
import { initServices } from './sections/services';
import { initAbout } from './sections/about';
import { initTestimonials } from './sections/testimonials';
import { initContact } from './sections/contact';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Initialize libraries (AOS, GSAP, etc.)
  initializeLibraries();
  
  // Initialize components (HTML đã có sẵn trong file HTML)
  initHeader();
  initServices();
  initAbout();
  initTestimonials();
  initContact();
  
  // Initialize contact form
  initContactForm();
  
  console.log('✅ Corporate Theme initialized successfully!');
});

/**
 * Initialize Contact Form
 */
function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
}
```

#### BƯỚC 3: Chuyển đổi Components

**File cũ:** `src/components/Header.ts` - Class-based component

**File mới:** `assets/ts/components/header.ts` - Function-based

**Ví dụ chuyển đổi:**

**File cũ:**
```typescript
// src/components/Header.ts
export class Header {
  private slideshowContainer: HTMLElement | null;
  
  constructor() {
    this.slideshowContainer = document.querySelector('.header__slideshow');
    this.init();
  }
  
  private init(): void {
    // ...
  }
  
  public pauseOnHover(): void {
    // ...
  }
}
```

**File mới:**
```typescript
// assets/ts/components/header.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Animations } from './animations';

export function initHeader(): void {
  const slideshowContainer = document.querySelector<HTMLElement>('.header__slideshow');
  const slides = document.querySelectorAll<HTMLElement>('.header__slideshow-slide');
  const heroContent = document.querySelector<HTMLElement>('.header__hero-content');
  
  if (!slideshowContainer || !slides.length) return;
  
  // Initialize slideshow
  initSlideshow(slideshowContainer, slides, heroContent);
  
  // Initialize animations
  initHeaderAnimations();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize top nav
  initTopNav();
  
  // Initialize hero highlight
  initHeroHighlight(heroContent);
  
  // Pause on hover
  pauseOnHover(slideshowContainer);
}

function initSlideshow(
  container: HTMLElement,
  slides: NodeListOf<HTMLElement>,
  heroContent: HTMLElement | null
): void {
  // Copy logic từ Header class
  // ...
}

function initHeaderAnimations(): void {
  // Copy logic từ Header.initAnimations()
  // ...
}

function initMobileMenu(): void {
  // Copy logic từ Header.initMobileMenu()
  // ...
}

function initTopNav(): void {
  // Copy logic từ Header.initTopNav()
  // ...
}

function initHeroHighlight(heroContent: HTMLElement | null): void {
  // Copy logic từ Header.initHeroHighlight()
  // ...
}

function pauseOnHover(container: HTMLElement): void {
  // Copy logic từ Header.pauseOnHover()
  // ...
}
```

#### BƯỚC 4: Chuyển đổi Template Files

**File cũ:** `src/components/header/headerTemplate.ts` - Export HTML string

**File mới:** `includes/header.html` - File HTML thuần

**Ví dụ chuyển đổi:**

**File cũ:**
```typescript
// src/components/header/headerTemplate.ts
export const headerHTML = `
<header class="header" id="header">
  <!-- HTML content -->
</header>
`;
```

**File mới:**
```html
<!-- includes/header.html -->
<header class="header" id="header">
  <!-- HTML content (copy từ template string) -->
</header>
```

**Các file template cần chuyển:**
- `headerTemplate.ts` → `includes/header.html`
- `servicesTemplate.ts` → `components/sections/section-services.html`
- `aboutUsTemplate.ts` → `components/sections/section-about.html`
- `testimonialTemplate.ts` → `components/sections/section-testimonials.html`
- `contactTemplate.ts` → `components/sections/section-contact.html`
- `footerTemplate.ts` → `includes/footer.html`
- `contactFormTemplate.ts` → `components/forms/form-contact.html`

#### BƯỚC 5: Chuyển đổi Helper Files

**File cũ:** `src/helpers/ParallaxScroll.ts`

**File mới:** `assets/ts/utils/parallax-scroll.ts`

**Thay đổi:**
- Đổi tên file: `ParallaxScroll.ts` → `parallax-scroll.ts`
- Giữ nguyên logic, chỉ export function hoặc class

---

## PHẦN 3: CHUYỂN ĐỔI HTML

### 3.1. Tạo HTML files từ Templates

#### BƯỚC 1: Tạo index.html

**File cũ:** Không có (Vite inject vào `#app`)

**File mới:** `index.html` - HTML hoàn chỉnh

**Cấu trúc:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Hi Theme</title>
    
    <!-- Vendor CSS (Copy từ node_modules) -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/vendor/animate.min.css">
    <link rel="stylesheet" href="assets/css/vendor/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/vendor/aos.css">
    <link rel="stylesheet" href="assets/css/vendor/all.min.css">
    
    <!-- Custom CSS (Compile từ SCSS) -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Preloader -->
    <div id="preloader"></div>
    
    <!-- Header (Load từ includes/header.html hoặc paste trực tiếp) -->
    <header class="header" id="header">
        <!-- Copy từ headerTemplate.ts -->
    </header>
    
    <!-- Main Content -->
    <main id="main">
        <!-- Services Section -->
        <section id="services" class="services">
            <!-- Copy từ servicesTemplate.ts -->
        </section>
        
        <!-- About Section -->
        <section id="about" class="about">
            <!-- Copy từ aboutUsTemplate.ts -->
        </section>
        
        <!-- Testimonials Section -->
        <section id="testimonial" class="testimonials">
            <!-- Copy từ testimonialTemplate.ts -->
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="contact">
            <!-- Copy từ contactTemplate.ts -->
        </section>
    </main>
    
    <!-- Footer (Load từ includes/footer.html hoặc paste trực tiếp) -->
    <footer class="footer" id="footer">
        <!-- Copy từ footerTemplate.ts -->
    </footer>
    
    <!-- Vendor JavaScript (Copy từ node_modules) -->
    <script src="assets/js/vendor/jquery.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/js/vendor/gsap.min.js"></script>
    <script src="assets/js/vendor/swiper-bundle.min.js"></script>
    <script src="assets/js/vendor/aos.js"></script>
    
    <!-- Custom JavaScript (Compile từ TypeScript) -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

#### BƯỚC 2: Tạo includes files

Copy HTML từ template files vào includes:

```bash
# Copy header HTML
# Mở src/components/header/headerTemplate.ts
# Copy nội dung trong template string
# Paste vào includes/header.html

# Copy footer HTML
# Mở src/components/footer/footerTemplate.ts
# Copy nội dung trong template string
# Paste vào includes/footer.html
```

#### BƯỚC 3: Tạo component HTML files

Copy HTML từ template files vào components:

```bash
# Services
# src/components/services/servicesTemplate.ts → components/sections/section-services.html

# About
# src/components/about-us/aboutUsTemplate.ts → components/sections/section-about.html

# Testimonials
# src/components/testimonial/testimonialTemplate.ts → components/sections/section-testimonials.html

# Contact
# src/components/contact/contactTemplate.ts → components/sections/section-contact.html

# Contact Form
# src/components/contact-form/contactFormTemplate.ts → components/forms/form-contact.html
```

---

## PHẦN 4: CẬP NHẬT IMPORTS VÀ DEPENDENCIES

### 4.1. Cập nhật TypeScript imports

#### Thay đổi import paths:

**File cũ:**
```typescript
import { ParallaxScroll } from '../../helpers/ParallaxScroll';
import { Animations } from './Animations';
import { Header } from './components/Header';
```

**File mới:**
```typescript
import { ParallaxScroll } from '../utils/parallax-scroll';
import { Animations } from './animations';
import { initHeader } from './components/header';
```

#### Thay đổi relative paths:

- `../../helpers/` → `../utils/`
- `./components/Header` → `./components/header`
- `./components/services/Services` → `./sections/services`

### 4.2. Cập nhật SCSS imports

#### Thay đổi import paths:

**File cũ:**
```scss
@use "components/header";
@use "components/services";
```

**File mới:**
```scss
@use "sections/header" as *;
@use "sections/services" as *;
```

---

## PHẦN 5: CHECKLIST CHUYỂN ĐỔI

### ✅ SCSS FILES

- [ ] Copy `_variables.scss` → `assets/scss/_variables.scss`
- [ ] Copy `_mixins.scss` → `assets/scss/_mixins.scss`
- [ ] Copy `_typography.scss` → `assets/scss/_base.scss`
- [ ] Copy tất cả `components/*.scss` → `assets/scss/sections/*.scss`
- [ ] Tạo `assets/scss/style.scss` mới (không import Bootstrap SCSS)
- [ ] Tạo `_layout.scss`, `_utilities.scss`, `_responsive.scss`
- [ ] Xóa `_bootstrap-override.scss` (dùng CSS variables thay thế)

### ✅ TYPESCRIPT FILES

- [ ] Copy `libraries-setup.ts` → `assets/ts/utils/libraries-setup.ts`
  - [ ] Bỏ import SCSS
  - [ ] Bỏ import CSS
  - [ ] Giữ import JS libraries
- [ ] Chuyển đổi `main.ts`:
  - [ ] Bỏ import SCSS
  - [ ] Bỏ import CSS
  - [ ] Bỏ dynamic HTML injection
  - [ ] Chuyển sang function-based initialization
- [ ] Chuyển đổi Components:
  - [ ] `Header.ts` → `components/header.ts` (class → functions)
  - [ ] `Services.ts` → `sections/services.ts` (class → functions)
  - [ ] `AboutUs.ts` → `sections/about.ts` (class → functions)
  - [ ] `Testimonial.ts` → `sections/testimonials.ts` (class → functions)
  - [ ] `Contact.ts` → `sections/contact.ts` (class → functions)
- [ ] Copy Helpers:
  - [ ] `ParallaxScroll.ts` → `utils/parallax-scroll.ts`
- [ ] Copy Utilities:
  - [ ] `AnimationManager.ts` → `components/animation-manager.ts`
  - [ ] `Animations.ts` → `components/animations.ts`

### ✅ HTML FILES

- [ ] Tạo `index.html` với cấu trúc đầy đủ
- [ ] Copy header HTML từ `headerTemplate.ts` → `includes/header.html`
- [ ] Copy footer HTML từ `footerTemplate.ts` → `includes/footer.html`
- [ ] Copy services HTML → `components/sections/section-services.html`
- [ ] Copy about HTML → `components/sections/section-about.html`
- [ ] Copy testimonials HTML → `components/sections/section-testimonials.html`
- [ ] Copy contact HTML → `components/sections/section-contact.html`
- [ ] Copy contact form HTML → `components/forms/form-contact.html`

### ✅ CẤU HÌNH

- [ ] Cập nhật `tsconfig.json`:
  - [ ] `rootDir`: `"./assets/ts"`
  - [ ] `outDir`: `"./assets/js"`
  - [ ] `moduleResolution`: `"node"`
- [ ] Kiểm tra `package.json` scripts đã đúng chưa
- [ ] Test compile SCSS: `npm run compile:sass`
- [ ] Test compile TypeScript: `npm run compile:ts`
- [ ] Test copy libs: `npm run copy:libs`

---

## PHẦN 6: CÁC THAY ĐỔI QUAN TRỌNG

### 6.1. Không còn Dynamic HTML Injection

**File cũ (Vite):**
```typescript
const app = document.querySelector('#app')!;
app.innerHTML = headerHTML;
app.insertAdjacentHTML('beforeend', servicesHTML);
```

**File mới:**
- HTML đã có sẵn trong file HTML
- Chỉ cần initialize components

### 6.2. Không còn Import SCSS trong TypeScript

**File cũ:**
```typescript
import './scss/main.scss'  // ❌
```

**File mới:**
- SCSS compile riêng bằng `sass` CLI
- Link CSS trong HTML

### 6.3. Không còn Import CSS trong TypeScript

**File cũ:**
```typescript
import '@fortawesome/fontawesome-free/css/all.min.css'  // ❌
import 'aos/dist/aos.css'  // ❌
```

**File mới:**
- CSS link trong HTML từ `assets/css/vendor/`

### 6.4. Class-based → Function-based

**File cũ:**
```typescript
export class Header {
  constructor() { this.init(); }
}
new Header();
```

**File mới:**
```typescript
export function initHeader(): void {
  // ...
}
initHeader();
```

### 6.5. Template Strings → HTML Files

**File cũ:**
```typescript
export const headerHTML = `<header>...</header>`;
```

**File mới:**
```html
<!-- includes/header.html -->
<header>...</header>
```

---

## PHẦN 7: VÍ DỤ CHUYỂN ĐỔI HOÀN CHỈNH

### Ví dụ: Chuyển đổi Services Component

#### BƯỚC 1: Copy SCSS

```bash
cp README/src/scss/components/_services.scss assets/scss/sections/_services.scss
```

#### BƯỚC 2: Copy và chuyển đổi TypeScript

**File cũ:** `src/components/services/Services.ts`

**File mới:** `assets/ts/sections/services.ts`

```typescript
// assets/ts/sections/services.ts
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ParallaxScroll } from '../utils/parallax-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initServices(): void {
  const carouselElement = document.querySelector<HTMLElement>('.services__carousel');
  if (!carouselElement) return;

  // Initialize Swiper
  Swiper.use([Navigation]);
  
  const swiper = new Swiper(carouselElement, {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.services__carousel-btn--next',
      prevEl: '.services__carousel-btn--prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 25 },
      992: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Initialize parallax effects
  initParallaxEffects();
  
  // Initialize animations
  initAnimations();
}

function initParallaxEffects(): void {
  // Copy logic từ Services class
  // ...
}

function initAnimations(): void {
  // Copy logic từ Services class
  // ...
}
```

#### BƯỚC 3: Copy HTML Template

**File cũ:** `src/components/services/servicesTemplate.ts`

**File mới:** `components/sections/section-services.html`

```html
<!-- components/sections/section-services.html -->
<section id="services" class="services">
  <!-- Copy HTML từ servicesTemplate.ts -->
  <div class="container">
    <!-- ... -->
  </div>
</section>
```

#### BƯỚC 4: Thêm vào index.html

```html
<!-- index.html -->
<main id="main">
  <!-- Services Section -->
  <section id="services" class="services">
    <!-- Paste HTML từ section-services.html -->
  </section>
</main>
```

---

## PHẦN 8: LƯU Ý QUAN TRỌNG

### 8.1. Đường dẫn ảnh

**File cũ (Vite):**
```typescript
style="background-image: url('/images/hero/hero.jpg');"
```

**File mới:**
```html
style="background-image: url('assets/images/hero/hero.jpg');"
```

Hoặc nếu HTML ở root:
```html
style="background-image: url('./assets/images/hero/hero.jpg');"
```

### 8.2. jQuery và Global Variables

**File cũ:**
```typescript
(window as any).$ = (window as any).jQuery = $;
```

**File mới:**
- jQuery load từ `assets/js/vendor/jquery.min.js` trong HTML
- Vẫn cần set global nếu components dùng `$`

### 8.3. GSAP ScrollTrigger

**File cũ:**
```typescript
gsap.registerPlugin(ScrollTrigger);
```

**File mới:**
- Vẫn cần register trong `libraries-setup.ts`
- Đảm bảo GSAP load trước main.js trong HTML

### 8.4. AOS Initialization

**File cũ:**
```typescript
AOS.init({ ... });
```

**File mới:**
- Vẫn cần init trong `libraries-setup.ts`
- Đảm bảo AOS CSS và JS load trong HTML

---

## PHẦN 9: KIỂM TRA SAU KHI CHUYỂN ĐỔI

### 9.1. Compile và Test

```bash
# 1. Copy libraries
npm run copy:libs

# 2. Compile SCSS
npm run compile:sass

# 3. Compile TypeScript
npm run compile:ts

# 4. Mở index.html trong browser
# 5. Kiểm tra console có lỗi không
# 6. Kiểm tra các component hoạt động đúng không
```

### 9.2. Kiểm tra các chức năng

- [ ] Header slideshow hoạt động
- [ ] Mobile menu hoạt động
- [ ] Services carousel hoạt động
- [ ] Animations hoạt động
- [ ] Parallax effects hoạt động
- [ ] Contact form hoạt động
- [ ] Smooth scroll hoạt động
- [ ] AOS animations hoạt động
- [ ] GSAP animations hoạt động

### 9.3. Kiểm tra Responsive

- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

---

## PHẦN 10: XÓA FOLDER SRC SAU KHI HOÀN THÀNH

Sau khi đã chuyển đổi xong và test thành công:

```bash
# Xóa folder src cũ
rm -rf README/src
```

Hoặc trên Windows:
```powershell
Remove-Item -Recurse -Force README\src
```

---

## TÓM TẮT QUY TRÌNH

1. **Copy SCSS files** → `assets/scss/`
   - Bỏ import Bootstrap SCSS
   - Chuyển `components/` → `sections/`
   - Tạo `style.scss` mới

2. **Copy TypeScript files** → `assets/ts/`
   - Bỏ import SCSS/CSS
   - Chuyển class → functions
   - Cập nhật import paths

3. **Copy HTML templates** → `includes/` và `components/`
   - Chuyển template strings → HTML files

4. **Tạo HTML pages**
   - Tạo `index.html` với cấu trúc đầy đủ
   - Link CSS/JS files

5. **Test và kiểm tra**
   - Compile SCSS và TypeScript
   - Test trong browser
   - Kiểm tra các chức năng

6. **Xóa folder src cũ**

---

## HỖ TRỢ

Nếu gặp vấn đề trong quá trình chuyển đổi:
1. Kiểm tra console errors
2. Kiểm tra import paths
3. Kiểm tra file paths trong HTML
4. Kiểm tra thứ tự load CSS/JS trong HTML

