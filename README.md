# Portofolio Pribadi - Riandaru Jiwan Alwasis

Portofolio pribadi modern, responsif, dan berkarakter minimalis yang dibangun dengan **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **Vite**. Desain terinspirasi langsung dari layout editorial kontemporer dengan tipografi Playfair Display & Plus Jakarta Sans.

---

## Fitur Utama

- 🎨 **Hero Section Presisi**: Sesuai dengan desain referensi ("GET EVERY SINGLE SOLUTIONS.", headline editorial serif, tombol aksi Coral Red, latar belakang gelombang vektor, dan foto desainer).
- ✏️ **Personalisasi Langsung**: Tombol "Sesuaikan Profil Anda" di hero section memungkinkan Anda mengubah nama, profesi, kicker, dan bio secara interaktif.
- 📊 **Strip Statistik & Metrik**: 8+ tahun pengalaman, 95+ proyek selesai, 99.2% kepuasan klien.
- 💡 **Layanan & Deliverables**: UI/UX Design, Frontend Web Engineering, Brand Identity, dan Deployment.
- 💼 **Studi Kasus Proyek (Bento Grid)**: Filter kategori (Semua, Web App, UI/UX, Mobile, Branding) dengan modal detail studi kasus interaktif.
- 📈 **Jejak Karir & Pendidikan**: Timeline pengalaman kerja dan sertifikasi profesional.
- 💬 **Testimoni Klien**: Ulasan nyata dengan atribusi klien dan foto profil.
- 📬 **Formulir Kontak Berfungsi**: Lengkap dengan validasi formulir dan tombol "Salin Email" satu-klik.
- 🌓 **Mode Gelap / Terang**: Dukungan tema ganda dengan penyimpanan otomatis di LocalStorage.
- 🚀 **Panduan Deploy Bawaan**: Modal panduan langkah demi langkah untuk publish ke GitHub dan Vercel.

---

## 🛠️ Menjalankan Proyek Secara Lokal

1. **Clone atau buka folder proyek:**
   ```bash
   cd portfolio
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan dev server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` di peramban Anda.

4. **Uji build produksi lokal:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🚀 Panduan Publish ke GitHub & Vercel

### Opsi 1: Deploy ke Vercel (Sangat Direkomendasikan - Gratis & Otomatis)

1. **Inisialisasi Git dan Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portofolio pribadi"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/portfolio.git
   git push -u origin main
   ```

2. **Hubungkan ke Vercel:**
   - Kunjungi [vercel.com](https://vercel.com) dan masuk dengan akun GitHub Anda.
   - Klik **"Add New..."** lalu pilih **"Project"**.
   - Pilih repository portofolio Anda.
   - Vercel akan otomatis mengenali framework **Vite**:
     - *Build Command*: `npm run build`
     - *Output Directory*: `dist`
   - Klik **"Deploy"**. Dalam ~30 detik, portofolio Anda live di alamat `https://nama-anda.vercel.app` dengan HTTPS gratis!

---

### Opsi 2: Deploy ke GitHub Pages

1. **Pasang paket gh-pages:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Tambahkan script di `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Jalankan perintah publish:**
   ```bash
   npm run deploy
   ```
   Website akan aktif di `https://USERNAME.github.io/portfolio`.

---

## 📄 Lisensi
Apache-2.0
