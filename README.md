# Google Sheets Template
This is a boilerplate React App to help you get started with integrating the Google Sheets API into your web app development.

Using GoogleSheets as your backend is a free way to begin developing a WebApp with read and write. I was inspired to build a WebApp backed by Google Spreadsheets after reading about how levels.fyi initially used Sheets as their backend: https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html

You will face a 60 requests per minute rate-limit with GoogleSpreadsheets, per service account.

When I initially set this up, I had trouble with the Google-Spreadsheet NPM library due to missing polyfills. The `next.config.js` changes address that.


## Jersey Store Catalog 🏆⚽

Website katalog produk jersey sepak bola yang terintegrasi dengan Google Sheets API. Dibangun dengan Next.js, TailwindCSS, dan fitur WhatsApp untuk pemesanan langsung.

## 🚀 Features

- **📊 Google Sheets Integration**: Data produk langsung dari Google Sheets
- **🎨 Modern UI/UX**: Desain responsif dengan brand colors merah, hitam, putih, dan emas
- **🔍 Search & Filter**: Pencarian jersey dan filter berdasarkan klub
- **📱 WhatsApp Integration**: Tombol pemesanan langsung via WhatsApp
- **⚡ Performance Optimized**: Menggunakan Next.js dengan SSR/SSG
- **📱 Mobile Responsive**: Optimized untuk semua device
- **🎯 SEO Friendly**: Meta tags dan struktur yang SEO-optimized

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React 18
- **Styling**: TailwindCSS 4
- **Data Source**: Google Sheets API
- **Image Handling**: Next.js Image optimization
- **Deployment**: Ready for Netlify/Vercel

## 🎨 Brand Colors

- **Primary Red**: `#ED3235` - Warna utama brand
- **Secondary Black**: `#000000` - Warna sekunder
- **Accent White**: `#FFFFFF` - Warna aksen
- **Text Gray**: `#333333` - Warna teks
- **Gold Highlight**: `#FFD700` - Warna highlight premium

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Google Sheets API

1. Buat project di [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Sheets API
3. Buat Service Account dan download JSON credentials
4. Buat Google Sheets dengan struktur kolom:
   - `nama_jersey` - Nama produk jersey
   - `klub` - Nama klub sepak bola
   - `harga` - Harga jersey (angka)
   - `link_gambar` - URL gambar jersey
   - `whatsapp_number` - Nomor WhatsApp untuk order (opsional)

### 3. Configure API Credentials

Update file `src/pages/index.js` dengan credentials dan sheet ID Anda:

```javascript
const credentials = {
  client_email: 'your-service-account@your-project.iam.gserviceaccount.com',
  private_key: 'your-private-key',
};

const sheetId = 'your-google-sheets-id';
```

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil.

## 📊 Google Sheets Structure

Pastikan Google Sheets Anda memiliki header kolom sebagai berikut:

| nama_jersey | klub | harga | link_gambar | whatsapp_number |
|-------------|------|-------|-------------|-----------------|
| Jersey Home MU 2024 | Manchester United | 350000 | https://example.com/image.jpg | 6281234567890 |
| Jersey Away Barca 2024 | Barcelona | 375000 | https://example.com/image2.jpg | 6281234567890 |

## 🚀 Deployment

### Netlify Deployment

1. Push code ke GitHub repository
2. Connect repository ke Netlify
3. Set environment variables jika diperlukan
4. Deploy!

### Vercel Deployment

```bash
npm install -g vercel
vercel deploy
```

## 📱 WhatsApp Integration

Setiap produk memiliki tombol "Beli via WhatsApp" yang akan membuka chat WhatsApp dengan:
- Nomor yang dikonfigurasi di Google Sheets
- Pesan otomatis berisi info produk

Format pesan:
```
Halo, saya tertarik dengan jersey [Nama Jersey] - [Klub]. Apakah masih tersedia?
```

## 🎯 Features Roadmap

- [ ] Admin panel untuk manage produk
- [ ] Sistem kategori jersey (Home, Away, Third)
- [ ] Wishlist functionality
- [ ] Shopping cart
- [ ] Payment gateway integration
- [ ] Review dan rating system
- [ ] Email notifications

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: your-email@example.com
- 💬 WhatsApp: +62 xxx-xxxx-xxxx
- 🐙 GitHub Issues: [Create Issue](https://github.com/your-username/jersey-catalog-api/issues)

---

**Made with ❤️ for jersey enthusiasts everywhere! ⚽🏆**

## Clone Project
- Clone this project and run 'npm i'
- provide your own credentials in `index.js`
- `npm run dev`

## Create your own proejct and Copy/Paste essentials
- Create new project with `npx create-next-app@13.2.4 project-name`
- `npm i google-spreadsheet --save`
- Copy over `next.js.config`
- Copy over `index.js`
- Copy over `package-lock.json`
- Copy over `package.json`
- run `npm i`
- Provide your credentials in `index.js`
- `npm run dev` and see the values in your sheets

#############################################################################

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


