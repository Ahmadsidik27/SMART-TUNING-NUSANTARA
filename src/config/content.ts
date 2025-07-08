// Konfigurasi Konten untuk AutoTech Academy
// File ini memudahkan pengelolaan semua teks dan konten yang ada di website

export const content = {
  // Informasi Website
  site: {
    name: 'AutoTech Academy',
    tagline: 'Platform E-Learning Otomotif Terdepan',
    description: 'Pelajari diagnostik otomotif, pemrograman ECU, dan teknologi scanner mobil. Belanja ebook otomotif dan suku cadang kendaraan.',
    keywords: 'otomotif, ECU, diagnostik, scanner mobil, kursus online, ebook teknis, suku cadang',
    author: 'AutoTech Academy Team',
    email: 'info@autotechacademy.com',
    phone: '+62 21 1234 5678',
    address: 'Jl. Teknologi No. 123, Jakarta Selatan, 12345'
  },

  // Konten Halaman Beranda
  home: {
    hero: {
      title: 'Kuasai Teknologi Otomotif',
      subtitle: 'Pelajari pemrograman ECU, teknik diagnostik, dan teknologi otomotif canggih dari para ahli industri. Dapatkan sertifikat dan tingkatkan karir Anda.',
      primaryButton: 'Jelajahi Kursus',
      secondaryButton: 'Pelajari Lebih Lanjut'
    },
    stats: [
      { number: '50+', label: 'Kursus Ahli' },
      { number: '5.000+', label: 'Siswa Terdaftar' },
      { number: '100+', label: 'Ebook Teknis' },
      { number: '1.000+', label: 'Suku Cadang' }
    ],
    sections: {
      courses: {
        title: 'Kursus Unggulan',
        subtitle: 'Belajar dari para ahli industri dan tingkatkan karir otomotif Anda'
      },
      ebooks: {
        title: 'Ebook Teknis',
        subtitle: 'Panduan lengkap dan manual untuk profesional otomotif'
      },
      spareParts: {
        title: 'Alat & Suku Cadang Profesional',
        subtitle: 'Alat otomotif berkualitas dan suku cadang untuk profesional'
      },
      features: {
        title: 'Mengapa Memilih AutoTech Academy?',
        subtitle: 'Semua yang Anda butuhkan untuk sukses dalam teknologi otomotif'
      }
    }
  },

  // Konten Menu Navigasi
  navigation: {
    main: [
      { key: 'home', label: 'Beranda', path: '/' },
      { key: 'courses', label: 'Kursus', path: '/courses' },
      { key: 'ebooks', label: 'Ebook', path: '/ebooks' },
      { key: 'spareParts', label: 'Suku Cadang', path: '/spare-parts' },
      { key: 'blog', label: 'Blog', path: '/blog' },
      { key: 'about', label: 'Tentang', path: '/about' },
      { key: 'contact', label: 'Kontak', path: '/contact' }
    ],
    footer: {
      quickLinks: [
        { label: 'Kursus', path: '/courses' },
        { label: 'Ebook', path: '/ebooks' },
        { label: 'Suku Cadang', path: '/spare-parts' },
        { label: 'Blog', path: '/blog' },
        { label: 'Tentang Kami', path: '/about' },
        { label: 'Kontak', path: '/contact' }
      ],
      categories: [
        'Pemrograman ECU',
        'Alat Diagnostik',
        'Manajemen Mesin',
        'Scanner Mobil',
        'Sistem OBD',
        'Sistem Kelistrikan'
      ],
      legal: [
        { label: 'Kebijakan Privasi', path: '/privacy' },
        { label: 'Syarat Layanan', path: '/terms' },
        { label: 'Kebijakan Cookie', path: '/cookies' }
      ]
    }
  },

  // Konten Fitur Utama
  features: [
    {
      icon: 'BookOpen',
      title: 'Kursus Dipimpin Ahli',
      description: 'Belajar dari profesional industri dengan pengalaman dunia nyata bertahun-tahun'
    },
    {
      icon: 'Award',
      title: 'Pembelajaran Bersertifikat',
      description: 'Dapatkan sertifikat yang diakui industri untuk memajukan karir Anda'
    },
    {
      icon: 'Wrench',
      title: 'Alat Berkualitas',
      description: 'Akses ke alat otomotif tingkat profesional dan suku cadang'
    },
    {
      icon: 'Clock',
      title: 'Pembelajaran Fleksibel',
      description: 'Belajar sesuai kecepatan Anda dengan akses seumur hidup ke materi kursus'
    },
    {
      icon: 'Users',
      title: 'Dukungan Komunitas',
      description: 'Terhubung dengan sesama siswa dan profesional dalam komunitas kami'
    },
    {
      icon: 'TrendingUp',
      title: 'Pertumbuhan Karir',
      description: 'Pelatihan lanjutan untuk meningkatkan keterampilan dan potensi penghasilan Anda'
    }
  ],

  // Konten Call-to-Action
  cta: {
    main: {
      title: 'Siap Memulai Perjalanan Anda?',
      subtitle: 'Bergabunglah dengan ribuan profesional otomotif yang telah memajukan karir mereka dengan AutoTech Academy',
      primaryButton: 'Mulai Belajar Hari Ini',
      secondaryButton: 'Hubungi Kami'
    },
    newsletter: {
      title: 'Tetap Update',
      subtitle: 'Berlangganan newsletter kami untuk mendapatkan insight teknologi otomotif terbaru',
      placeholder: 'Masukkan email Anda',
      button: 'Berlangganan'
    }
  },

  // Konten Form dan Pesan
  forms: {
    search: {
      placeholder: 'Cari kursus, ebook, suku cadang...',
      button: 'Cari'
    },
    login: {
      title: 'Masuk ke Akun Anda',
      subtitle: 'Belum punya akun?',
      signupLink: 'Daftar',
      emailLabel: 'Alamat Email',
      passwordLabel: 'Kata Sandi',
      rememberMe: 'Ingat saya',
      forgotPassword: 'Lupa kata sandi?',
      loginButton: 'Masuk',
      orContinue: 'Atau lanjutkan dengan'
    },
    register: {
      title: 'Buat Akun Anda',
      subtitle: 'Sudah punya akun?',
      signinLink: 'Masuk',
      nameLabel: 'Nama Lengkap',
      emailLabel: 'Alamat Email',
      passwordLabel: 'Kata Sandi',
      confirmPasswordLabel: 'Konfirmasi Kata Sandi',
      registerButton: 'Buat Akun'
    },
    contact: {
      title: 'Kirim Pesan',
      nameLabel: 'Nama Lengkap',
      emailLabel: 'Alamat Email',
      subjectLabel: 'Subjek',
      messageLabel: 'Pesan',
      sendButton: 'Kirim Pesan',
      subjects: [
        'Pertanyaan Kursus',
        'Dukungan Teknis',
        'Tagihan & Pembayaran',
        'Peluang Kemitraan',
        'Feedback & Saran',
        'Lainnya'
      ]
    }
  },

  // Pesan Status dan Notifikasi
  messages: {
    success: {
      login: 'Berhasil masuk! Selamat datang kembali.',
      register: 'Akun berhasil dibuat! Silakan masuk.',
      addToCart: 'Item berhasil ditambahkan ke keranjang.',
      contactForm: 'Pesan Anda berhasil dikirim. Kami akan segera merespons.',
      newsletter: 'Terima kasih telah berlangganan newsletter kami!'
    },
    error: {
      login: 'Email atau kata sandi salah.',
      register: 'Pendaftaran gagal. Silakan coba lagi.',
      network: 'Terjadi kesalahan jaringan. Silakan coba lagi.',
      general: 'Terjadi kesalahan. Silakan coba lagi.'
    },
    info: {
      loading: 'Memuat...',
      processing: 'Memproses...',
      emptyCart: 'Keranjang belanja Anda kosong.',
      noResults: 'Tidak ada hasil yang ditemukan.',
      comingSoon: 'Fitur ini akan segera hadir!'
    }
  },

  // Konten Kategori
  categories: {
    courses: [
      'Pemrograman ECU',
      'Diagnostik',
      'Sistem Mesin',
      'Sistem Kelistrikan',
      'Komunikasi'
    ],
    ebooks: [
      'Pemrograman ECU',
      'Diagnostik',
      'Sistem Mesin',
      'Sistem Kelistrikan',
      'Komunikasi'
    ],
    spareParts: [
      'Alat Diagnostik',
      'Alat Pemrograman',
      'Komponen Mesin',
      'Alat Komunikasi'
    ]
  },

  // Konten Level/Tingkat
  levels: [
    'Pemula',
    'Menengah',
    'Lanjutan'
  ],

  // Konten Sorting
  sorting: {
    popular: 'Paling Populer',
    rating: 'Rating Tertinggi',
    priceLow: 'Harga: Rendah ke Tinggi',
    priceHigh: 'Harga: Tinggi ke Rendah',
    newest: 'Terbaru',
    name: 'Nama A-Z'
  }
};

// Fungsi helper untuk mendapatkan konten
export const getContent = (path: string): any => {
  const keys = path.split('.');
  let result: any = content;
  
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) break;
  }
  
  return result;
};

// Fungsi untuk mendapatkan teks navigasi
export const getNavigationItem = (key: string) => {
  return content.navigation.main.find(item => item.key === key);
};

// Fungsi untuk mendapatkan pesan berdasarkan tipe
export const getMessage = (type: 'success' | 'error' | 'info', key: string): string => {
  return content.messages[type]?.[key] || content.messages.error.general;
};