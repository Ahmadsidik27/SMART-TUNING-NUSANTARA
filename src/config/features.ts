// Konfigurasi Fitur untuk AutoTech Academy
// File ini memudahkan pengelolaan semua fitur yang ada di website

export const features = {
  // Fitur Utama Website
  main: {
    elearning: {
      enabled: true,
      name: 'Platform E-Learning',
      description: 'Sistem pembelajaran online untuk kursus otomotif',
      icon: 'BookOpen'
    },
    ebookStore: {
      enabled: true,
      name: 'Toko Ebook',
      description: 'Penjualan ebook teknis otomotif',
      icon: 'FileText'
    },
    sparePartsStore: {
      enabled: true,
      name: 'Toko Suku Cadang',
      description: 'Penjualan alat dan suku cadang otomotif',
      icon: 'Wrench'
    },
    blog: {
      enabled: true,
      name: 'Blog',
      description: 'Artikel dan tips otomotif',
      icon: 'Edit'
    }
  },

  // Fitur E-Learning
  elearning: {
    courseList: {
      enabled: true,
      name: 'Daftar Kursus',
      description: 'Menampilkan semua kursus yang tersedia'
    },
    courseDetail: {
      enabled: true,
      name: 'Detail Kursus',
      description: 'Informasi lengkap tentang kursus'
    },
    studentDashboard: {
      enabled: true,
      name: 'Dashboard Siswa',
      description: 'Area pribadi untuk siswa'
    },
    progressTracking: {
      enabled: true,
      name: 'Pelacakan Progress',
      description: 'Memantau kemajuan belajar siswa'
    },
    certificates: {
      enabled: true,
      name: 'Sertifikat',
      description: 'Sertifikat penyelesaian kursus'
    },
    videoLearning: {
      enabled: true,
      name: 'Video Pembelajaran',
      description: 'Konten video untuk pembelajaran'
    },
    quizzes: {
      enabled: false, // Belum diimplementasi
      name: 'Kuis dan Ujian',
      description: 'Sistem evaluasi pembelajaran'
    },
    forums: {
      enabled: false, // Belum diimplementasi
      name: 'Forum Diskusi',
      description: 'Tempat diskusi antar siswa'
    }
  },

  // Fitur Toko Ebook
  ebookStore: {
    ebookList: {
      enabled: true,
      name: 'Daftar Ebook',
      description: 'Katalog semua ebook yang tersedia'
    },
    ebookDetail: {
      enabled: true,
      name: 'Detail Ebook',
      description: 'Informasi lengkap tentang ebook'
    },
    instantDownload: {
      enabled: true,
      name: 'Download Instan',
      description: 'Download otomatis setelah pembelian'
    },
    preview: {
      enabled: false, // Belum diimplementasi
      name: 'Preview Ebook',
      description: 'Pratinjau isi ebook sebelum beli'
    },
    reviews: {
      enabled: true,
      name: 'Review dan Rating',
      description: 'Sistem review dari pembeli'
    },
    multiFormat: {
      enabled: true,
      name: 'Multi Format',
      description: 'Dukungan PDF, EPUB, dll'
    }
  },

  // Fitur Toko Suku Cadang
  sparePartsStore: {
    partsList: {
      enabled: true,
      name: 'Daftar Suku Cadang',
      description: 'Katalog semua suku cadang'
    },
    partsDetail: {
      enabled: true,
      name: 'Detail Suku Cadang',
      description: 'Spesifikasi lengkap produk'
    },
    stockManagement: {
      enabled: true,
      name: 'Manajemen Stok',
      description: 'Pelacakan ketersediaan barang'
    },
    compatibility: {
      enabled: true,
      name: 'Info Kompatibilitas',
      description: 'Informasi kesesuaian dengan kendaraan'
    },
    shipping: {
      enabled: true,
      name: 'Pengiriman',
      description: 'Sistem pengiriman dan ongkir'
    },
    warranty: {
      enabled: true,
      name: 'Garansi',
      description: 'Informasi garansi produk'
    },
    bulkOrders: {
      enabled: false, // Belum diimplementasi
      name: 'Pesanan Grosir',
      description: 'Sistem pemesanan dalam jumlah besar'
    }
  },

  // Fitur Umum
  general: {
    userAuth: {
      enabled: true,
      name: 'Sistem Login',
      description: 'Registrasi dan login pengguna'
    },
    shoppingCart: {
      enabled: true,
      name: 'Keranjang Belanja',
      description: 'Sistem keranjang dan checkout'
    },
    search: {
      enabled: true,
      name: 'Pencarian',
      description: 'Fitur pencarian global'
    },
    filters: {
      enabled: true,
      name: 'Filter dan Kategori',
      description: 'Penyaringan produk dan konten'
    },
    responsive: {
      enabled: true,
      name: 'Responsive Design',
      description: 'Tampilan optimal di semua perangkat'
    },
    multilanguage: {
      enabled: false, // Saat ini hanya Indonesia
      name: 'Multi Bahasa',
      description: 'Dukungan berbagai bahasa'
    }
  },

  // Fitur Pembayaran
  payment: {
    creditCard: {
      enabled: true,
      name: 'Kartu Kredit',
      description: 'Pembayaran dengan kartu kredit'
    },
    paypal: {
      enabled: true,
      name: 'PayPal',
      description: 'Pembayaran melalui PayPal'
    },
    bankTransfer: {
      enabled: false, // Belum diimplementasi
      name: 'Transfer Bank',
      description: 'Pembayaran via transfer bank'
    },
    eWallet: {
      enabled: false, // Belum diimplementasi
      name: 'E-Wallet',
      description: 'Pembayaran dengan dompet digital'
    },
    installments: {
      enabled: false, // Belum diimplementasi
      name: 'Cicilan',
      description: 'Pembayaran dengan sistem cicilan'
    }
  },

  // Fitur Admin (untuk pengembangan masa depan)
  admin: {
    dashboard: {
      enabled: false,
      name: 'Dashboard Admin',
      description: 'Panel kontrol administrator'
    },
    courseManagement: {
      enabled: false,
      name: 'Manajemen Kursus',
      description: 'Kelola kursus dan materi'
    },
    userManagement: {
      enabled: false,
      name: 'Manajemen Pengguna',
      description: 'Kelola data pengguna'
    },
    analytics: {
      enabled: false,
      name: 'Analytics',
      description: 'Laporan dan statistik website'
    },
    contentManagement: {
      enabled: false,
      name: 'Manajemen Konten',
      description: 'Kelola konten website'
    }
  }
};

// Fungsi helper untuk mengecek apakah fitur aktif
export const isFeatureEnabled = (category: keyof typeof features, feature: string): boolean => {
  const categoryFeatures = features[category] as Record<string, any>;
  return categoryFeatures?.[feature]?.enabled || false;
};

// Fungsi untuk mendapatkan daftar fitur yang aktif
export const getEnabledFeatures = (category: keyof typeof features): string[] => {
  const categoryFeatures = features[category] as Record<string, any>;
  return Object.keys(categoryFeatures).filter(key => categoryFeatures[key]?.enabled);
};

// Fungsi untuk mendapatkan informasi fitur
export const getFeatureInfo = (category: keyof typeof features, feature: string) => {
  const categoryFeatures = features[category] as Record<string, any>;
  return categoryFeatures?.[feature] || null;
};