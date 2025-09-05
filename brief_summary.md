Oke Firman 🙌 aku tambahkan ke **brief summary** sebelumnya soal **branding warna**.

---

## 📝 Brief Summary – Jersey Catalog Website

### 1. **Stack & Tools**

* **Frontend Framework**: [Next.js](https://nextjs.org/) (SEO friendly + support SSG/ISR).
* **Data Source**: Google Sheets API (data produk).
* **Image Storage**: Google Drive (gunakan link publik), opsional CDN seperti Cloudinary untuk performa lebih baik.
* **Deployment**: [Netlify](https://www.netlify.com/) (gratis).
* **Extra Feature**: WhatsApp Chat button di tiap card produk.

---

### 2. **Arsitektur Sistem**

1. **Google Sheets** → berisi data produk (nama jersey, klub, harga, link gambar).
2. **Next.js** → fetch data dari Sheets API (SSG/ISR).
3. **UI Katalog** → grid of product cards.
4. **WhatsApp Button** → link otomatis sesuai nama jersey.
5. **Hosting** → deploy ke Netlify via GitHub.

---

### 3. **Branding & Warna**

* **Warna Utama (Brand): Merah** → (#ED3235 atau sejenisnya, sesuai identitas “jersey bola” yang kuat, berani, energik).
* **Warna Pendukung yang cocok dengan merah**:

  * **Hitam (#000000)** → elegan, sporty, dan kontras.
  * **Putih (#FFFFFF)** → netral, bersih, menjaga keseimbangan.
  * **Abu-abu gelap (#333333 atau #444444)** → buat teks atau background lembut.
  * **Emas (#FFD700)** → opsional, memberi kesan premium (misalnya untuk promo jersey edisi spesial).

👉 Kombinasi rekomendasi:

* **Primary**: Merah (#ED3235)
* **Secondary**: Hitam (#000000)
* **Accent**: Putih (#FFFFFF)
* **Optional Highlight**: Emas (#FFD700)

---

### 4. **Alur Penggunaan**

1. Admin update produk di **Google Sheets**.
2. Website fetch data terbaru (via ISR).
3. Pengunjung buka katalog di website.
4. Klik **“Beli via WhatsApp”** → langsung chat ke nomor penjual.

---

### 5. **Next Steps (Implementasi)**

* Setup Google Sheets API + service account.
* Buat Next.js project → fetch data dari Google Sheets.
* Implementasi UI dengan Tailwind CSS menggunakan **brand colors**.
* Tambahkan tombol WhatsApp di tiap card.
* Deploy ke Netlify.

---

Apakah kamu mau saya bikinkan **Tailwind config** dengan warna brand + contoh UI card jersey langsung pakai warna merah ini biar bisa kamu pakai di boilerplate?
