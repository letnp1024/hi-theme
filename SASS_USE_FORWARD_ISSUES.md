# VẤN ĐỀ VỚI @use/@forward VÀ THƯ VIỆN

## VẤN ĐỀ CHÍNH

Sass đã **deprecate `@import`** và chỉ hỗ trợ `@use` và `@forward` từ Dart Sass 1.80.0+. Điều này gây ra các vấn đề khi làm việc với thư viện như Bootstrap.

---

## CÁC VẤN ĐỀ CỤ THỂ

### 1. Bootstrap vẫn dùng @import internally

**Vấn đề:**
```scss
// scss/style.scss
@use "bootstrap/scss/bootstrap";  // ❌ LỖI
```

**Lỗi:**
```
Error: @import rules must be written before any other rules
```

**Nguyên nhân:**
- Bootstrap SCSS files vẫn dùng `@import` internally
- `@use` không tương thích với `@import` trong cùng file
- Sass compiler yêu cầu tất cả `@import` phải đứng trước `@use`

### 2. Không thể mix @import và @use

**Vấn đề:**
- Nếu thư viện dùng `@import`, bạn không thể dùng `@use` để import nó
- Phải chọn một trong hai: hoặc dùng `@import` (deprecated) hoặc không import thư viện SCSS

### 3. Namespace conflicts

**Vấn đề:**
```scss
@use "bootstrap/scss/variables" as bs;
@use "my-variables" as vars;

// Phải dùng namespace
$color: bs.$primary;  // Phức tạp hơn
```

**So với @import cũ:**
```scss
@import "bootstrap/scss/variables";
$color: $primary;  // Đơn giản hơn
```

---

## GIẢI PHÁP

### ✅ GIẢI PHÁP 1: Chỉ dùng Bootstrap CSS (KHUYẾN NGHỊ)

**Cách làm:**
1. Không import Bootstrap SCSS
2. Chỉ link Bootstrap CSS trong HTML
3. Dùng `@use` cho code tự viết

```scss
// scss/style.scss
// KHÔNG import Bootstrap SCSS

@use "variables";
@use "mixins";
@use "base";
@use "components/buttons";
```

```html
<!-- HTML -->
<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
```

**Ưu điểm:**
- ✅ Không gặp lỗi với @use/@forward
- ✅ Đơn giản, dễ maintain
- ✅ Bootstrap CSS đã được optimize
- ✅ Tuân thủ best practices của Sass mới

**Nhược điểm:**
- ❌ Không thể dùng Bootstrap SCSS variables/mixins
- ❌ Không thể customize Bootstrap SCSS source

### ✅ GIẢI PHÁP 2: Dùng CSS Custom Properties

Thay vì dùng Bootstrap SCSS variables, dùng CSS variables:

```scss
// scss/style.scss
:root {
  --bs-primary: #007bff;
  --bs-secondary: #6c757d;
  --bs-success: #28a745;
}

@use "variables";
@use "components/buttons";
```

```html
<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
```

**Ưu điểm:**
- ✅ Không gặp vấn đề với @use/@forward
- ✅ Vẫn có thể customize Bootstrap colors
- ✅ Hoạt động runtime (có thể thay đổi bằng JS)

### ⚠️ GIẢI PHÁP 3: Dùng @use với Bootstrap riêng lẻ (Rủi ro)

Nếu thực sự cần Bootstrap variables/mixins:

```scss
// scss/style.scss
@use "bootstrap/scss/functions" as *;
@use "bootstrap/scss/variables" as * with (
  $primary: #007bff
);
@use "bootstrap/scss/mixins" as *;

@use "variables";
@use "components/buttons";
```

**Lưu ý:**
- ⚠️ Cần test kỹ vì Bootstrap có thể vẫn dùng @import internally
- ⚠️ Có thể gặp lỗi với một số Bootstrap versions
- ⚠️ Không import toàn bộ Bootstrap, chỉ import phần cần thiết

### ❌ GIẢI PHÁP 4: Dùng @import (Deprecated - KHÔNG KHUYẾN NGHỊ)

```scss
// scss/style.scss
@import "bootstrap/scss/bootstrap";  // ⚠️ Deprecated
@import "variables";
```

**Vấn đề:**
- ❌ Sass sẽ cảnh báo về deprecated @import
- ❌ Có thể bị remove trong tương lai
- ❌ Không tuân thủ best practices

---

## CẤU HÌNH SASS

### Cấu hình để tương thích

Có thể cấu hình Sass để vẫn hỗ trợ @import (tạm thời):

```json
// package.json
{
  "scripts": {
    "compile:sass": "sass scss:assets/css --load-path=node_modules"
  }
}
```

Nhưng vẫn nên chuyển sang @use khi có thể.

---

## KHUYẾN NGHỊ CHO DỰ ÁN

### ✅ KHUYẾN NGHỊ: Giải pháp 1 + 2

1. **Không import Bootstrap SCSS**
   - Chỉ link Bootstrap CSS trong HTML
   - Dùng `@use` cho code tự viết

2. **Dùng CSS Custom Properties để customize**
   - Override Bootstrap colors bằng CSS variables
   - Hoạt động tốt với @use

3. **Cấu trúc code:**
   ```scss
   // scss/style.scss
   @use "variables";
   @use "mixins";
   @use "base";
   @use "components/buttons";
   @use "components/cards";
   ```

### Workflow đề xuất:

```
Development:
  ✅ Dùng @use cho code tự viết
  ✅ Không import Bootstrap SCSS
  ✅ Link Bootstrap CSS trong HTML

Build:
  ✅ Copy Bootstrap CSS → assets/css/vendor/
  ✅ Compile SCSS → assets/css/style.css

HTML:
  ✅ Link vendor CSS trước
  ✅ Link custom CSS sau
```

---

## TÓM TẮT

### Vấn đề:
- Sass mới chỉ hỗ trợ @use/@forward
- Bootstrap vẫn dùng @import internally
- Không thể mix @import và @use

### Giải pháp tốt nhất:
- ✅ Không import Bootstrap SCSS
- ✅ Chỉ link Bootstrap CSS trong HTML
- ✅ Dùng @use cho code tự viết
- ✅ Dùng CSS Custom Properties để customize

### Kết quả:
- ✅ Không gặp lỗi
- ✅ Tuân thủ best practices
- ✅ Dễ maintain
- ✅ Tương thích với Sass mới

