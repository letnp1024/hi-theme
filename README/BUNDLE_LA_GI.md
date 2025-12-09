# BUNDLE LÀ GÌ?

## ĐỊNH NGHĨA

**Bundle** (Gói) là quá trình kết hợp nhiều file JavaScript, CSS, và các tài nguyên khác thành một hoặc một vài file lớn hơn để tối ưu hóa việc tải và sử dụng trong trình duyệt.

---

## BUNDLE HOẠT ĐỘNG NHƯ THẾ NÀO?

### 1. TRƯỚC KHI BUNDLE (Không bundle)

```
Trình duyệt phải tải nhiều file riêng lẻ:

index.html
├── <script src="vendor/jquery.min.js"></script>        (87 KB)
├── <script src="vendor/bootstrap.min.js"></script>     (60 KB)
├── <script src="vendor/gsap.min.js"></script>          (45 KB)
├── <script src="vendor/swiper.min.js"></script>        (120 KB)
├── <script src="components/header.js"></script>        (5 KB)
├── <script src="components/slider.js"></script>         (8 KB)
├── <script src="sections/services.js"></script>        (12 KB)
└── <script src="main.js"></script>                     (3 KB)

Tổng: 8 requests HTTP riêng biệt
Tổng dung lượng: ~340 KB
```

**Nhược điểm:**
- Nhiều HTTP requests (chậm hơn)
- Phải quản lý thứ tự load
- Khó tối ưu hóa

### 2. SAU KHI BUNDLE

```
Trình duyệt chỉ tải 1-2 file:

index.html
├── <script src="bundle.js"></script>                   (340 KB - đã minify)

Hoặc chia nhỏ:
├── <script src="vendor.bundle.js"></script>             (312 KB - thư viện)
└── <script src="main.bundle.js"></script>              (28 KB - code tự viết)
```

**Ưu điểm:**
- Ít HTTP requests (nhanh hơn)
- Tự động tối ưu hóa
- Tree-shaking (loại bỏ code không dùng)
- Minification (nén code)

---

## CÁC CÔNG CỤ BUNDLE PHỔ BIẾN

### 1. **Vite** (Dự án cũ của bạn)
- Bundle tự động khi build
- Dev server nhanh
- HMR (Hot Module Replacement)

### 2. **Webpack**
- Bundle phổ biến nhất
- Cấu hình linh hoạt
- Nhiều plugins

### 3. **Rollup**
- Bundle tối ưu cho libraries
- Tree-shaking tốt

### 4. **Parcel**
- Zero configuration
- Tự động bundle

---

## BUNDLE TRONG DỰ ÁN CŨ (VITE)

### Cách hoạt động:

**File nguồn:**
```typescript
// main.ts
import './scss/main.scss'              // SCSS
import '@fortawesome/fontawesome-free/css/all.min.css'  // CSS
import { gsap } from 'gsap'            // JS library
import { Header } from './components/Header'  // Component
```

**Sau khi Vite bundle:**
```javascript
// bundle.js (đã được bundle và minify)
// Tất cả code được gộp vào 1 file
```

**HTML:**
```html
<script src="/bundle.js"></script>  <!-- Chỉ 1 file -->
```

---

## KHÔNG BUNDLE TRONG DỰ ÁN MỚI

### Cách hoạt động:

**File nguồn:**
```typescript
// assets/ts/main.ts
import { gsap } from 'gsap'  // Import từ node_modules
import { initHeader } from './components/header'
```

**Sau khi TypeScript compile:**
```javascript
// assets/js/main.js (chỉ compile, không bundle)
// Vẫn giữ import statements hoặc require()
```

**HTML:**
```html
<!-- Phải link tất cả files riêng lẻ -->
<script src="assets/js/vendor/jquery.min.js"></script>
<script src="assets/js/vendor/bootstrap.min.js"></script>
<script src="assets/js/vendor/gsap.min.js"></script>
<script src="assets/js/main.js"></script>
```

---

## SO SÁNH BUNDLE VS KHÔNG BUNDLE

| Tiêu chí | Bundle (Vite) | Không Bundle |
|----------|---------------|--------------|
| **Số file JS** | 1-2 files | Nhiều files |
| **HTTP requests** | Ít (1-2) | Nhiều (5-10+) |
| **Tốc độ tải** | Nhanh hơn (ít requests) | Chậm hơn (nhiều requests) |
| **Cấu hình** | Phức tạp (cần build tool) | Đơn giản (chỉ compile) |
| **Tree-shaking** | Có (tự động) | Không |
| **Minification** | Tự động | Phải làm thủ công |
| **Code splitting** | Tự động | Không |
| **Dev experience** | Tốt (HMR, fast refresh) | Đơn giản (reload page) |
| **Phù hợp** | Production apps | Template HTML thuần |

---

## KHI NÀO DÙNG BUNDLE?

### ✅ NÊN DÙNG BUNDLE KHI:
- Xây dựng ứng dụng web phức tạp (SPA, React, Vue)
- Cần tối ưu hóa performance
- Cần code splitting
- Cần tree-shaking
- Production deployment

### ❌ KHÔNG CẦN BUNDLE KHI:
- Template HTML thuần (như dự án của bạn)
- Chỉ cần compile SCSS và TypeScript
- Không cần tối ưu hóa phức tạp
- Muốn đơn giản, dễ maintain

---

## VÍ DỤ CỤ THỂ

### Với Bundle (Vite):

**Input:**
```typescript
// main.ts
import { gsap } from 'gsap';
import { Header } from './Header';
import './styles.scss';
```

**Output sau build:**
```javascript
// dist/bundle.js (1 file duy nhất, đã minify)
(function(){var e=require("gsap"),t=require("./Header");...})();
```

**HTML:**
```html
<script src="/bundle.js"></script>
```

### Không Bundle (Dự án mới):

**Input:**
```typescript
// assets/ts/main.ts
import { gsap } from 'gsap';
import { initHeader } from './header';
```

**Output sau compile:**
```javascript
// assets/js/main.js (vẫn có import hoặc require)
const gsap = require('gsap');
const { initHeader } = require('./header');
```

**HTML:**
```html
<script src="assets/js/vendor/gsap.min.js"></script>
<script src="assets/js/main.js"></script>
```

---

## TREE-SHAKING LÀ GÌ?

**Tree-shaking** là quá trình loại bỏ code không được sử dụng khỏi bundle.

**Ví dụ:**

**File nguồn:**
```typescript
// utils.ts
export function usedFunction() { ... }
export function unusedFunction() { ... }  // Không được import

// main.ts
import { usedFunction } from './utils';
usedFunction();
```

**Sau tree-shaking:**
```javascript
// bundle.js chỉ chứa usedFunction
// unusedFunction đã bị loại bỏ
```

**Kết quả:** Bundle nhỏ hơn, tải nhanh hơn.

---

## MINIFICATION LÀ GÌ?

**Minification** là quá trình nén code bằng cách:
- Xóa comments
- Xóa whitespace
- Rút gọn tên biến
- Tối ưu cú pháp

**Ví dụ:**

**Trước minify:**
```javascript
function calculateTotal(price, quantity) {
  // Calculate total with tax
  const tax = 0.1;
  const subtotal = price * quantity;
  const total = subtotal + (subtotal * tax);
  return total;
}
```

**Sau minify:**
```javascript
function calculateTotal(a,b){const c=.1,d=a*b;return d+d*c}
```

**Kết quả:** File nhỏ hơn nhiều (từ 200 bytes → 80 bytes)

---

## CODE SPLITTING LÀ GÌ?

**Code splitting** là chia bundle thành nhiều file nhỏ, chỉ tải khi cần.

**Ví dụ:**

**Không split:**
```javascript
// bundle.js (500 KB) - Tải tất cả ngay
```

**Có split:**
```javascript
// main.js (100 KB) - Tải ngay
// about.js (50 KB) - Chỉ tải khi vào trang About
// contact.js (50 KB) - Chỉ tải khi vào trang Contact
// ...
```

**Kết quả:** Trang đầu tải nhanh hơn.

---

## TẠI SAO DỰ ÁN MỚI KHÔNG DÙNG BUNDLE?

### Lý do:

1. **Template HTML thuần**
   - Không phải SPA (Single Page Application)
   - Mỗi trang là file HTML riêng
   - Không cần code splitting

2. **Đơn giản hóa**
   - Không cần cấu hình build tool phức tạp
   - Dễ hiểu, dễ maintain
   - Dễ debug (file riêng lẻ)

3. **Phù hợp với WordPress**
   - Sau này chuyển sang WordPress theme
   - WordPress có cách quản lý assets riêng
   - Không cần bundle tool

4. **Performance đủ tốt**
   - Template HTML không quá phức tạp
   - Có thể dùng CDN cho thư viện lớn
   - Browser cache tốt

---

## KẾT LUẬN

### Bundle là gì?
- **Gộp nhiều file thành 1-2 file lớn**
- **Tối ưu hóa performance**
- **Giảm số lượng HTTP requests**

### Dự án của bạn:
- **Không dùng bundle** → Đơn giản, dễ maintain
- **Chỉ compile** → SCSS → CSS, TypeScript → JavaScript
- **Link files riêng lẻ** → Trong HTML

### Khi nào cần bundle?
- Ứng dụng web phức tạp (React, Vue, Angular)
- Cần tối ưu hóa cao
- Production deployment lớn

### Template HTML thuần?
- **Không cần bundle** → Đơn giản là đủ

