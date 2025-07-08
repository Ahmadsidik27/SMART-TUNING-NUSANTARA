# AutoTech Academy - Platform E-Learning Otomotif

Platform e-learning komprehensif untuk sektor otomotif yang mengkhususkan diri dalam pemahaman penggunaan scanner mobil dan cara kerja ECU, serta toko online untuk menjual ebook pengetahuan otomotif dan suku cadang kendaraan roda empat.

## Fitur Utama

### 🎓 Platform E-Learning
- **Daftar Kursus**: Halaman yang menampilkan semua kursus yang tersedia
- **Detail Kursus**: Halaman detail untuk setiap kursus dengan deskripsi lengkap, silabus, dan materi pembelajaran
- **Area Belajar Siswa**: Area pribadi untuk siswa yang telah mendaftar
- **Sistem Manajemen Pengguna**: Registrasi dan login untuk siswa
- **Sistem Pembayaran Kursus**: Integrasi dengan berbagai metode pembayaran

### 📚 Toko Ebook
- **Daftar Ebook**: Halaman yang menampilkan semua ebook yang tersedia
- **Detail Ebook**: Informasi lengkap tentang ebook
- **Keranjang Belanja**: Proses pembelian ebook yang aman dan mudah

### 🔧 Toko Suku Cadang
- **Daftar Suku Cadang**: Halaman yang menampilkan semua suku cadang yang dijual
- **Detail Suku Cadang**: Informasi lengkap tentang suku cadang
- **Filter dan Kategori**: Fitur untuk memudahkan pencarian suku cadang
- **Manajemen Stok**: Sistem untuk mengelola inventori suku cadang

### 📄 Halaman Tambahan
- **Tentang Kami**: Informasi tentang organisasi
- **Hubungi Kami**: Informasi kontak dan formulir kontak
- **Blog**: Bagian untuk berbagi artikel dan tips
- **Dashboard**: Area pengguna untuk mengelola akun dan progress

## Teknologi yang Digunakan

- **Frontend**: React 18 dengan TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

## Setup untuk Visual Studio Code

### Ekstensi yang Direkomendasikan
Proyek ini sudah dikonfigurasi dengan ekstensi VS Code yang direkomendasikan:

- **Tailwind CSS IntelliSense**: Autocomplete untuk class Tailwind
- **Prettier**: Code formatter
- **ESLint**: Linting untuk JavaScript/TypeScript
- **TypeScript**: Dukungan TypeScript yang ditingkatkan
- **Auto Rename Tag**: Rename tag HTML/JSX secara otomatis
- **Path Intellisense**: Autocomplete untuk path file

### Pengaturan VS Code
File `.vscode/settings.json` sudah dikonfigurasi dengan:
- Format otomatis saat save
- Konfigurasi ESLint
- Pengaturan Tailwind CSS
- Konfigurasi TypeScript

## Instalasi dan Menjalankan Proyek

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd automotive-elearning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Build untuk production**
   ```bash
   npm run build
   ```

5. **Preview build production**
   ```bash
   npm run preview
   ```

## Struktur Proyek

```
src/
├── components/          # Komponen React yang dapat digunakan kembali
│   ├── Header.tsx      # Header navigasi
│   └── Footer.tsx      # Footer website
├── pages/              # Halaman-halaman utama
│   ├── Home.tsx        # Halaman beranda
│   ├── Courses.tsx     # Daftar kursus
│   ├── CourseDetail.tsx # Detail kursus
│   ├── Ebooks.tsx      # Daftar ebook
│   ├── EbookDetail.tsx # Detail ebook
│   ├── SpareParts.tsx  # Daftar suku cadang
│   ├── SparePartDetail.tsx # Detail suku cadang
│   ├── About.tsx       # Tentang kami
│   ├── Contact.tsx     # Kontak
│   ├── Blog.tsx        # Blog
│   ├── Cart.tsx        # Keranjang belanja
│   ├── Login.tsx       # Login/Register
│   └── Dashboard.tsx   # Dashboard pengguna
├── context/            # React Context untuk state management
│   ├── AuthContext.tsx # Konteks autentikasi
│   └── CartContext.tsx # Konteks keranjang belanja
├── App.tsx             # Komponen utama aplikasi
├── main.tsx           # Entry point aplikasi
└── index.css          # Styling global
```

## Fitur yang Tersedia

### 🏠 Halaman Beranda
- Hero section yang menarik
- Statistik platform
- Kursus unggulan
- Ebook terpopuler
- Suku cadang unggulan
- Fitur-fitur platform

### 📖 Sistem Kursus
- Daftar kursus dengan filter dan pencarian
- Detail kursus dengan informasi lengkap
- Sistem rating dan review
- Informasi instruktur
- Kurikulum kursus

### 📚 Sistem Ebook
- Katalog ebook dengan kategori
- Preview dan detail ebook
- Sistem pembelian
- Download setelah pembelian

### 🔧 Sistem Suku Cadang
- Katalog produk dengan filter
- Spesifikasi teknis
- Informasi kompatibilitas
- Manajemen stok
- Sistem review produk

### 👤 Sistem Pengguna
- Registrasi dan login
- Dashboard pengguna
- Progress kursus
- Riwayat pembelian
- Manajemen profil

### 🛒 Sistem Keranjang
- Tambah/hapus item
- Update quantity
- Kalkulasi total
- Proses checkout

## Kontribusi

Untuk berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## Kontak

AutoTech Academy - info@autotechacademy.com

Link Proyek: [https://github.com/yourusername/automotive-elearning-platform](https://github.com/yourusername/automotive-elearning-platform)