# CHECKLIST CHUYỂN ĐỔI TỪ VITE SANG DỰ ÁN MỚI

## 📋 CHECKLIST TỔNG QUAN

### PHẦN 1: SCSS FILES

- [ ] Copy `_variables.scss` → `assets/scss/_variables.scss`
- [ ] Copy `_mixins.scss` → `assets/scss/_mixins.scss`
- [ ] Copy `_typography.scss` → `assets/scss/_base.scss`
- [ ] Copy `components/_header.scss` → `assets/scss/sections/_header.scss`
- [ ] Copy `components/_services.scss` → `assets/scss/sections/_services.scss`
- [ ] Copy `components/_about-us.scss` → `assets/scss/sections/_about.scss`
- [ ] Copy `components/_testimonial.scss` → `assets/scss/sections/_testimonials.scss`
- [ ] Copy `components/_contact.scss` → `assets/scss/sections/_contact.scss`
- [ ] Copy `components/_footer.scss` → `assets/scss/sections/_footer.scss`
- [ ] Copy `components/_animations.scss` → `assets/scss/components/_animations.scss`
- [ ] Tạo `assets/scss/style.scss` mới (KHÔNG import Bootstrap SCSS)
- [ ] Tạo `_layout.scss`, `_utilities.scss`, `_responsive.scss`
- [ ] Xóa `_bootstrap-override.scss` (dùng CSS variables thay thế)

### PHẦN 2: TYPESCRIPT FILES

#### Libraries Setup
- [ ] Copy `libraries-setup.ts` → `assets/ts/utils/libraries-setup.ts`
  - [ ] Bỏ `import './scss/main.scss'`
  - [ ] Bỏ `import '@fortawesome/fontawesome-free/css/all.min.css'`
  - [ ] Bỏ `import 'aos/dist/aos.css'`
  - [ ] Giữ import JS libraries
  - [ ] Export initialization function

#### Main Entry
- [ ] Chuyển đổi `main.ts`:
  - [ ] Bỏ import SCSS
  - [ ] Bỏ import CSS
  - [ ] Bỏ dynamic HTML injection (`app.innerHTML`)
  - [ ] Chuyển sang function-based initialization
  - [ ] Import và gọi init functions

#### Components
- [ ] `Header.ts` → `components/header.ts` (class → functions)
- [ ] `AnimationManager.ts` → `components/animation-manager.ts`
- [ ] `Animations.ts` → `components/animations.ts`

#### Sections
- [ ] `services/Services.ts` → `sections/services.ts` (class → functions)
- [ ] `about-us/AboutUs.ts` → `sections/about.ts` (class → functions)
- [ ] `testimonial/Testimonial.ts` → `sections/testimonials.ts` (class → functions)
- [ ] `contact/Contact.ts` → `sections/contact.ts` (class → functions)

#### Helpers/Utils
- [ ] `helpers/ParallaxScroll.ts` → `utils/parallax-scroll.ts`
- [ ] Cập nhật import paths trong tất cả files

### PHẦN 3: HTML FILES

#### Includes
- [ ] `headerTemplate.ts` → `includes/header.html` (copy HTML string)
- [ ] `footerTemplate.ts` → `includes/footer.html` (copy HTML string)

#### Components
- [ ] `servicesTemplate.ts` → `components/sections/section-services.html`
- [ ] `aboutUsTemplate.ts` → `components/sections/section-about.html`
- [ ] `testimonialTemplate.ts` → `components/sections/section-testimonials.html`
- [ ] `contactTemplate.ts` → `components/sections/section-contact.html`
- [ ] `contactFormTemplate.ts` → `components/forms/form-contact.html`

#### Pages
- [ ] Tạo `index.html` với cấu trúc đầy đủ
  - [ ] Link vendor CSS files
  - [ ] Link custom CSS file
  - [ ] Paste header HTML
  - [ ] Paste sections HTML
  - [ ] Paste footer HTML
  - [ ] Link vendor JS files
  - [ ] Link custom JS file

### PHẦN 4: CẤU HÌNH

- [ ] Cập nhật `tsconfig.json`:
  - [ ] `rootDir`: `"./assets/ts"`
  - [ ] `outDir`: `"./assets/js"`
  - [ ] `moduleResolution`: `"node"`
- [ ] Kiểm tra `package.json` scripts
- [ ] Test `npm run copy:libs`
- [ ] Test `npm run compile:sass`
- [ ] Test `npm run compile:ts`
- [ ] Test `npm run build`

### PHẦN 5: KIỂM TRA

#### Compile
- [ ] SCSS compile thành công → `assets/css/style.css`
- [ ] TypeScript compile thành công → `assets/js/main.js`
- [ ] Không có lỗi trong console

#### Chức năng
- [ ] Header slideshow hoạt động
- [ ] Mobile menu hoạt động
- [ ] Services carousel (Swiper) hoạt động
- [ ] Animations (GSAP) hoạt động
- [ ] Parallax effects hoạt động
- [ ] AOS animations hoạt động
- [ ] Contact form hoạt động
- [ ] Smooth scroll hoạt động

#### Responsive
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

### PHẦN 6: HOÀN TẤT

- [ ] Tất cả chức năng hoạt động đúng
- [ ] Không có lỗi console
- [ ] Responsive đúng
- [ ] Xóa folder `README/src`

---

## 📝 GHI CHÚ

- Đảm bảo đường dẫn ảnh đúng: `assets/images/...`
- Đảm bảo thứ tự load CSS/JS trong HTML đúng
- Kiểm tra import paths trong TypeScript
- Kiểm tra @use paths trong SCSS

