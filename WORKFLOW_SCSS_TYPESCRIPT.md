# WORKFLOW PHÁT TRIỂN: SCSS & TYPESCRIPT VỚI THƯ VIỆN

## VẤN ĐỀ

Khi viết SCSS và TypeScript, bạn cần sử dụng các thư viện như Bootstrap, GSAP, Swiper, etc. Nhưng các thư viện này chỉ có trong `assets/css/vendor/` và `assets/js/vendor/` sau khi copy, không có trong quá trình development.

## GIẢI PHÁP

### ✅ KHÔNG CÓ MÂU THUẪN - Đây là cách hoạt động đúng:

---

## PHẦN 1: SCSS WORKFLOW

### ⚠️ VẤN ĐỀ VỚI @use/@forward VÀ THƯ VIỆN

**Sass đã deprecate `@import` và chỉ hỗ trợ `@use` và `@forward` từ Dart Sass 1.80.0+**

**Vấn đề:**
- Bootstrap và nhiều thư viện khác vẫn dùng `@import` internally
- Khi bạn dùng `@use` để import Bootstrap, sẽ gặp lỗi vì Bootstrap vẫn dùng `@import`
- Cần giải pháp tương thích

### CÁCH 1: Dùng @use với Bootstrap (Có thể gặp lỗi)

```scss
// scss/style.scss

// ❌ CÓ THỂ GẶP LỖI - Bootstrap vẫn dùng @import internally
@use "bootstrap/scss/bootstrap";
```

**Lỗi có thể gặp:**
```
Error: @import rules must be written before any other rules
```

### CÁCH 2: Chỉ dùng Bootstrap CSS (KHUYẾN NGHỊ)

**Giải pháp tốt nhất:** Không import Bootstrap SCSS, chỉ dùng CSS compiled

```scss
// scss/style.scss

// KHÔNG import Bootstrap SCSS
// Chỉ viết code tự viết với @use

@use "variables";
@use "mixins";
@use "base";
@use "components/buttons";
// ...
```

Và link Bootstrap CSS trong HTML:
```html
<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
```

**Ưu điểm:**
- ✅ Không gặp lỗi với @use/@forward
- ✅ Đơn giản, dễ maintain
- ✅ Bootstrap CSS đã được optimize

**Nhược điểm:**
- ❌ Không thể dùng Bootstrap variables/mixins trong SCSS
- ❌ Không thể customize Bootstrap SCSS source

### CÁCH 3: Dùng @use với Bootstrap Variables riêng lẻ (Nâng cao)

Nếu cần dùng Bootstrap variables/mixins, có thể import từng phần:

```scss
// scss/style.scss

// Chỉ import variables và mixins (không import toàn bộ Bootstrap)
@use "bootstrap/scss/functions" as *;
@use "bootstrap/scss/variables" as *;
@use "bootstrap/scss/mixins" as *;

// Override variables
$primary: #007bff;
$secondary: #6c757d;

// Code tự viết
@use "variables" as *;
@use "mixins" as *;
@use "base";
```

**Lưu ý:**
- Cần kiểm tra Bootstrap version có hỗ trợ @use không
- Bootstrap 5.3+ có thể vẫn dùng @import internally
- Có thể cần cấu hình Sass để tương thích

### CÁCH 4: Dùng CSS Variables thay vì SCSS Variables

Thay vì dùng Bootstrap SCSS variables, dùng CSS custom properties:

```scss
// scss/style.scss

// Không import Bootstrap SCSS
// Dùng CSS variables để override Bootstrap

:root {
  --bs-primary: #007bff;
  --bs-secondary: #6c757d;
}

// Code tự viết
@use "variables";
@use "mixins";
@use "base";
```

Và trong HTML:
```html
<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
```

**Ưu điểm:**
- ✅ Không gặp vấn đề với @use/@forward
- ✅ Vẫn có thể customize Bootstrap colors
- ✅ Hoạt động runtime (có thể thay đổi bằng JS)

---

## PHẦN 2: TYPESCRIPT WORKFLOW

### Import từ node_modules khi viết code

Khi viết TypeScript, bạn import trực tiếp từ `node_modules`:

```typescript
// ts/main.ts

// Import từ node_modules - TypeScript sẽ tự động resolve
import { gsap } from 'gsap';
import Swiper from 'swiper';
import AOS from 'aos';
import * as $ from 'jquery';

// Code tự viết
import { initHeader } from './components/header';
import { initSlider } from './components/slider';

// Sử dụng
gsap.to('.element', { x: 100 });
const swiper = new Swiper('.swiper', { /* ... */ });
AOS.init();
```

**Lưu ý:**
- TypeScript compiler sẽ resolve imports từ `node_modules`
- Các thư viện đã được cài trong `node_modules` qua npm
- TypeScript sẽ tìm types từ `@types/*` hoặc types tích hợp

### Cấu hình tsconfig.json

Đảm bảo `tsconfig.json` có cấu hình đúng:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./assets/js",
    "rootDir": "./ts",
    "moduleResolution": "node",  // ← Quan trọng: resolve từ node_modules
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["ts/**/*"],
  "exclude": ["node_modules"]
}
```

---

## PHẦN 3: HTML WORKFLOW

### Link thư viện từ assets/vendor trong HTML

Sau khi compile, trong HTML bạn link các file đã copy vào `assets`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Vendor CSS (đã copy từ node_modules) -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/vendor/animate.min.css">
    <link rel="stylesheet" href="assets/css/vendor/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/vendor/aos.css">
    
    <!-- Custom CSS (compile từ SCSS) -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Content -->
    
    <!-- Vendor JS (đã copy từ node_modules) -->
    <script src="assets/js/vendor/jquery.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/js/vendor/gsap.min.js"></script>
    <script src="assets/js/vendor/swiper-bundle.min.js"></script>
    <script src="assets/js/vendor/aos.js"></script>
    
    <!-- Custom JS (compile từ TypeScript) -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## PHẦN 4: QUY TRÌNH HOÀN CHỈNH

### Bước 1: Development (Viết code)

```
┌─────────────────────────────────────┐
│  Viết SCSS                          │
│  @import "bootstrap/scss/variables" │ ← Import từ node_modules
│  @import "variables"                │ ← Import file tự viết
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  Viết TypeScript                    │
│  import { gsap } from 'gsap'        │ ← Import từ node_modules
│  import { init } from './utils'      │ ← Import file tự viết
└─────────────────────────────────────┘
```

### Bước 2: Build (Compile & Copy)

```bash
npm run build
```

Quy trình:
1. **Copy libs**: Copy từ `node_modules` → `assets/css/vendor/` và `assets/js/vendor/`
2. **Compile SCSS**: Compile từ `scss/` → `assets/css/style.css`
3. **Compile TypeScript**: Compile từ `ts/` → `assets/js/main.js`

### Bước 3: Kết quả

```
assets/
├── css/
│   ├── vendor/              ← Thư viện (copy từ node_modules)
│   │   ├── bootstrap.min.css
│   │   └── ...
│   └── style.css           ← Code tự viết (compile từ SCSS)
│
└── js/
    ├── vendor/              ← Thư viện (copy từ node_modules)
    │   ├── jquery.min.js
    │   ├── gsap.min.js
    │   └── ...
    └── main.js              ← Code tự viết (compile từ TypeScript)
```

---

## PHẦN 5: VÍ DỤ CỤ THỂ

### Ví dụ 1: SCSS với @use (Không dùng Bootstrap SCSS)

```scss
// scss/_variables.scss
$primary-color: #007bff;
$secondary-color: #6c757d;

// scss/style.scss
// KHÔNG import Bootstrap SCSS
// Chỉ dùng code tự viết với @use

@use "variables" as *;
@use "mixins" as *;
@use "base";
@use "components/buttons";
```

**Kết quả:**
- `assets/css/style.css` chỉ chứa code tự viết
- Bootstrap CSS link riêng trong HTML từ `assets/css/vendor/bootstrap.min.css`

### Ví dụ 1b: SCSS với Bootstrap Variables (Nếu cần)

```scss
// scss/style.scss
// ⚠️ CẨN THẬN: Có thể gặp lỗi nếu Bootstrap dùng @import internally

@use "bootstrap/scss/functions" as *;
@use "bootstrap/scss/variables" as * with (
  $primary: #007bff,
  $secondary: #6c757d
);
@use "bootstrap/scss/mixins" as *;

// Code tự viết
@use "variables" as *;
@use "components/buttons";
```

**Lưu ý:** Cần test kỹ vì Bootstrap có thể vẫn dùng @import internally

### Ví dụ 2: TypeScript với GSAP

```typescript
// ts/main.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Code tự viết
import { initAnimations } from './components/animations';

initAnimations();
```

**Kết quả:**
- TypeScript compile thành `assets/js/main.js`
- Trong HTML vẫn cần link `assets/js/vendor/gsap.min.js` trước `main.js`

### Ví dụ 3: TypeScript với jQuery

```typescript
// ts/main.ts
import * as $ from 'jquery';

// Hoặc
import $ from 'jquery';

$(document).ready(() => {
  // Code của bạn
});
```

**Lưu ý:** 
- TypeScript compile sẽ bundle jQuery vào `main.js` (nếu dùng bundler)
- Hoặc chỉ compile code của bạn, và link jQuery riêng trong HTML

---

## PHẦN 6: LƯU Ý QUAN TRỌNG

### 1. TypeScript Module Resolution

TypeScript có thể compile theo 2 cách:

**Cách 1: Compile riêng (Hiện tại)**
- TypeScript compile code tự viết → `main.js`
- Thư viện link riêng trong HTML
- ✅ Đơn giản, dễ debug
- ❌ Phải link nhiều file trong HTML

**Cách 2: Bundle (Dùng Webpack/Vite)**
- Bundle tất cả (thư viện + code tự viết) → `main.js`
- ✅ Chỉ cần link 1 file
- ❌ Phức tạp hơn, cần setup bundler

### 2. SCSS Import Path

SCSS compiler tự động resolve từ:
- `node_modules/` (nếu import không có `./` hoặc `../`)
- Thư mục hiện tại (nếu import có `./` hoặc `../`)

### 3. Thứ tự load trong HTML

```html
<!-- 1. Vendor CSS trước -->
<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">

<!-- 2. Custom CSS sau (có thể override vendor) -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- 3. Vendor JS trước -->
<script src="assets/js/vendor/jquery.min.js"></script>

<!-- 4. Custom JS sau (có thể dùng vendor) -->
<script src="assets/js/main.js"></script>
```

---

## PHẦN 7: TÓM TẮT

### ✅ KHÔNG CÓ MÂU THUẪN

1. **Khi viết SCSS/TypeScript**: Import từ `node_modules` (có sẵn)
2. **Khi compile**: 
   - SCSS → `assets/css/style.css` (code tự viết)
   - TypeScript → `assets/js/main.js` (code tự viết)
3. **Khi copy libs**: Copy từ `node_modules` → `assets/css/vendor/` và `assets/js/vendor/`
4. **Trong HTML**: Link cả vendor và custom files

### Workflow đúng:

```
Development:
  SCSS → Import từ node_modules ✅
  TS → Import từ node_modules ✅

Build:
  Copy libs: node_modules → assets/vendor ✅
  Compile SCSS: scss → assets/css/style.css ✅
  Compile TS: ts → assets/js/main.js ✅

HTML:
  Link vendor files ✅
  Link custom files ✅
```

---

## KẾT LUẬN

**Không có mâu thuẫn!** Đây là workflow chuẩn:

- **Development**: Import từ `node_modules` (có sẵn khi cài npm)
- **Build**: Copy libs vào `assets/vendor/` và compile code tự viết
- **Production**: Link cả vendor và custom files trong HTML

