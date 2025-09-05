# Google Sheets Template untuk Jersey Catalog

## Struktur Kolom yang Dibutuhkan

Buat Google Sheets baru dengan header kolom sebagai berikut di baris pertama:

| nama_jersey | klub | harga | link_gambar | whatsapp_number |
|-------------|------|-------|-------------|-----------------|

## Contoh Data

Berikut adalah contoh data yang bisa Anda masukkan:

### Baris 1 (Header):
```
nama_jersey | klub | harga | link_gambar | whatsapp_number
```

### Baris 2-7 (Contoh Data):
```
Jersey Home Manchester United 2024 | Manchester United | 350000 | https://example.com/mu-home.jpg | 6281234567890
Jersey Away Barcelona 2024 | Barcelona | 375000 | https://example.com/barca-away.jpg | 6281234567890
Jersey Home Real Madrid 2024 | Real Madrid | 360000 | https://example.com/madrid-home.jpg | 6281234567890
Jersey Home Arsenal 2024 | Arsenal | 340000 | https://example.com/arsenal-home.jpg | 6281234567890
Jersey Third Liverpool 2024 | Liverpool | 355000 | https://example.com/liverpool-third.jpg | 6281234567890
Jersey Home Chelsea 2024 | Chelsea | 345000 | https://example.com/chelsea-home.jpg | 6281234567890
```

## Keterangan Kolom

### nama_jersey
- **Type**: Text
- **Contoh**: "Jersey Home Manchester United 2024"
- **Tips**: Gunakan nama yang deskriptif dan mudah dicari

### klub
- **Type**: Text  
- **Contoh**: "Manchester United"
- **Tips**: Konsisten dalam penulisan nama klub untuk filter yang akurat

### harga
- **Type**: Number (tanpa titik/koma/currency symbol)
- **Contoh**: `350000` (bukan `350.000` atau `Rp 350.000`)
- **Tips**: Input hanya angka untuk formatting otomatis

### link_gambar
- **Type**: URL/Text
- **Contoh**: `https://drive.google.com/uc?id=FILE_ID` (untuk Google Drive)
- **Tips**: 
  - Pastikan gambar bisa diakses publik
  - Untuk Google Drive: gunakan format `https://drive.google.com/uc?id=FILE_ID`
  - Ukuran gambar recommended: 300x400px atau rasio 3:4

### whatsapp_number
- **Type**: Text
- **Contoh**: `6281234567890` (format internasional tanpa +)
- **Tips**: 
  - Gunakan format internasional: 62 (Indonesia) + nomor tanpa 0 di depan
  - Contoh: 0812-3456-7890 → 6281234567890

## Setup Google Drive untuk Gambar

1. Upload gambar jersey ke Google Drive
2. Klik kanan gambar → "Get link"
3. Ubah permission ke "Anyone with the link can view"
4. Copy link dan extract FILE_ID
5. Format link: `https://drive.google.com/uc?id=FILE_ID`

Contoh:
- Link asli: `https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing`
- Link untuk sheets: `https://drive.google.com/uc?id=1ABC123xyz`

## Tips & Best Practices

1. **Konsistensi Data**: Pastikan format data konsisten di setiap baris
2. **Nama Klub**: Gunakan nama resmi klub yang konsisten
3. **Harga**: Input angka saja tanpa format currency
4. **Gambar**: Pastikan semua gambar dapat diakses publik
5. **WhatsApp**: Test nomor WhatsApp sebelum publish
6. **Backup**: Selalu backup sheets sebelum melakukan perubahan besar

## Troubleshooting

### Gambar tidak muncul?
- Periksa permission Google Drive (harus public)
- Pastikan format URL benar
- Coba akses URL gambar langsung di browser

### Data tidak muncul di website?
- Periksa nama kolom header (harus exact match)
- Pastikan sheets bisa diakses oleh service account
- Check console browser untuk error API

### WhatsApp tidak berfungsi?
- Periksa format nomor (tanpa +, dengan kode negara)
- Test nomor di WhatsApp Web terlebih dahulu
