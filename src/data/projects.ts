export type ProjectFeature = {
  title: string;
  description: string;
  image?: string; // Nanti bisa diisi path ke gambar screenshot
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  statusTone: "blue" | "green" | "amber" | "purple";
  description: string;
  techTags: string[];
  liveUrl?: string;
  features: ProjectFeature[];
  themeColor: string; // Untuk warna aksen spesifik project
  thumbnail: string; // Path ke screenshot utama
  logo?: string; // Path ke logo asli project
  art?: string; // Path ke ilustrasi 3D abstrak
};

export const projects: Project[] = [
  {
    slug: "sim-kerma",
    title: "SIM-KERMA",
    category: "Enterprise",
    status: "SHIPPED",
    statusTone: "green",
    themeColor: "#10b981", // Emerald
    thumbnail: "/assets/projects/sim-kerma.png",
    art: "/assets/projects/art_simkerma.jpg",
    description:
      "Sistem informasi manajemen kerjasama lintas kementerian: rantai persetujuan, versioning dokumen, e-signature multi-pihak, audit trail.",
    techTags: ["Laravel 11", "MySQL", "WebSocket"],
    liveUrl: "https://kerjasama.ksm.web.id",
    features: [
      {
        title: "Dashboard Overview",
        description: "Menampilkan metrik utama kerjasama, status dokumen, dan notifikasi persetujuan yang tertunda.",
      },
      {
        title: "Document Versioning",
        description: "Melacak setiap perubahan pada dokumen kerjasama, lengkap dengan riwayat siapa yang mengedit dan kapan.",
      },
      {
        title: "Multi-party E-Signature",
        description: "Integrasi tanda tangan elektronik yang memungkinkan penandatanganan sah oleh berbagai kementerian secara berurutan.",
      }
    ]
  },
  {
    slug: "poltek-sendawar",
    title: "Poltek Sendawar",
    category: "Company Profile",
    status: "LIVE",
    statusTone: "green",
    themeColor: "#3b82f6", // Blue
    thumbnail: "/assets/projects/polsen.png",
    logo: "/assets/sendawar.png",
    art: "/assets/projects/art_polsen.jpg",
    description:
      "Company profile resmi Politeknik Sendawar: profil, jurusan & akreditasi, berita & acara, kalender akademik, fasilitas, dan lowongan.",
    techTags: ["Laravel 12", "Blade", "Tailwind CSS"],
    features: [
      {
        title: "Halaman Utama (Landing Page)",
        description: "Menampilkan informasi sekilas tentang kampus, berita terbaru, dan tautan cepat ke program studi.",
      },
      {
        title: "Direktori Program Studi",
        description: "Halaman detail untuk masing-masing jurusan, lengkap dengan kurikulum dan status akreditasi.",
      }
    ]
  },
  {
    slug: "cvku",
    title: "CVKu",
    category: "AI",
    status: "LIVE",
    statusTone: "purple",
    themeColor: "#8b5cf6", // Violet
    thumbnail: "/assets/projects/cvku.png",
    art: "/assets/projects/art_cvku.jpg",
    description:
      "Pembuat CV berbasis AI: pemeriksa skor ATS dengan analisis gap kata kunci, editor CV terpandu, pustaka CV, dan asisten AI streaming.",
    techTags: ["Next.js", "AI SDK", "Docker"],
    liveUrl: "https://cvku.ksm.web.id",
    features: [
      {
        title: "ATS Resume Checker",
        description: "Mengunggah CV dan mendapatkan analisis skor kesesuaian dengan lowongan kerja berdasarkan kata kunci.",
      },
      {
        title: "AI Chat Assistant",
        description: "Asisten cerdas yang membantu pengguna merumuskan pengalaman kerja dengan bahasa yang lebih profesional.",
      }
    ]
  },
  {
    slug: "sebatas-kopi",
    title: "SebatasKopi",
    category: "POS / SMB",
    status: "DEPLOYED",
    statusTone: "green",
    themeColor: "#f59e0b", // Amber
    thumbnail: "/assets/projects/sebatas-kopi.png",
    description:
      "POS kedai kopi: menu, pelacakan pesanan, laporan harian, program member, dan alert stok. Dibangun untuk kecepatan.",
    techTags: ["Laravel 11", "Alpine.js", "MySQL"],
    features: [
      {
        title: "Kasir (POS Interface)",
        description: "Antarmuka kasir yang dioptimalkan untuk kecepatan input pesanan pelanggan dan kalkulasi pembayaran.",
      },
      {
        title: "Manajemen Stok",
        description: "Peringatan otomatis ketika bahan baku menipis untuk memastikan operasional kedai tidak terganggu.",
      }
    ]
  },
  {
    slug: "vespabox",
    title: "VespaBox",
    category: "Realtime",
    status: "BETA",
    statusTone: "amber",
    themeColor: "#ef4444", // Red
    thumbnail: "/assets/projects/vespabox.png",
    description:
      "Marketplace spare part Vespa dengan bidding realtime. Laravel Reverb WebSocket, broadcasting channel, diuji ribuan pengguna.",
    techTags: ["Laravel 11", "Reverb", "WebSocket"],
    features: [
      {
        title: "Live Bidding Room",
        description: "Ruang lelang suku cadang langka dimana harga terupdate secara real-time tanpa perlu memuat ulang halaman.",
      },
      {
        title: "Seller Dashboard",
        description: "Panel bagi penjual untuk memantau aktivitas lelang, mengatur harga dasar, dan melihat riwayat transaksi.",
      }
    ]
  }
];
