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
      "Cross-ministry collaboration management information system: approval chains, document versioning, multi-party e-signature, audit trail.",
    techTags: ["Laravel 11", "MySQL", "WebSocket"],
    liveUrl: "https://kerjasama.ksm.web.id",
    features: [
      {
        title: "Login",
        description: "Authentication page; the gateway to the application. Unauthenticated users attempting to access internal pages will be redirected here.",
        image: "/assets/projects/sim-kerma/01-login.png"
      },
      {
        title: "Dashboard",
        description: "Main overview dashboard after login. Provides a quick snapshot of the university's partnership status today.",
        image: "/assets/projects/sim-kerma/02-dashboard.png"
      },
      {
        title: "Partnership Documents",
        description: "Management page for all partnership documents (MoU, MoA, IA). Users can create new drafts, filter, and manage documents.",
        image: "/assets/projects/sim-kerma/03-dokumen-kerjasama.png"
      },
      {
        title: "Document Tracking",
        description: "Hierarchy and workflow tracking page—shows the current position of each document in the review process.",
        image: "/assets/projects/sim-kerma/04-tracking-dokumen.png"
      },
      {
        title: "Export Reports",
        description: "Page for generating and exporting partnership audit reports to PDF/Excel.",
        image: "/assets/projects/sim-kerma/05-export-laporan.png"
      },
      {
        title: "User Management",
        description: "User administration page for Super Admins—manage accounts and roles.",
        image: "/assets/projects/sim-kerma/06-users.png"
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
      "Official company profile for Politeknik Sendawar: profile, departments & accreditation, news & events, academic calendar, facilities, and careers.",
    techTags: ["Laravel 12", "Blade", "Tailwind CSS"],
    liveUrl: "https://polsen.ac.id",
    features: [
      {
        title: "Homepage",
        description: "Main company profile page; the gateway for campus information and enrollment.",
        image: "/assets/projects/poltek-sendawar/01-beranda.png"
      },
      {
        title: "Institution Profile",
        description: "Introduces the campus identity and background.",
        image: "/assets/projects/poltek-sendawar/02-profil-politeknik-sendawar.png"
      },
      {
        title: "Leadership",
        description: "Displays the institution's senior management team.",
        image: "/assets/projects/poltek-sendawar/03-kepemimpinan-politeknik-sendawar.png"
      },
      {
        title: "Facilities",
        description: "Promotes campus infrastructure and key facilities.",
        image: "/assets/projects/poltek-sendawar/04-fasilitas-politeknik-sendawar.png"
      },
      {
        title: "Partnerships",
        description: "Showcases the campus network and partnerships with industries, academia, and institutions.",
        image: "/assets/projects/poltek-sendawar/05-kerjasama-politeknik-sendawar.png"
      },
      {
        title: "Study Programs",
        description: "Directs prospective students to academic major information.",
        image: "/assets/projects/poltek-sendawar/06-program-studi.png"
      },
      {
        title: "Accreditation",
        description: "Displays the BAN-PT recognized accreditation status for study programs.",
        image: "/assets/projects/poltek-sendawar/07-akreditasi.png"
      },
      {
        title: "Academic Calendar",
        description: "Provides access to the current year's academic schedule.",
        image: "/assets/projects/poltek-sendawar/08-kalender-akademik.png"
      },
      {
        title: "Tracer Study",
        description: "Collects alumni career data and employment tracking.",
        image: "/assets/projects/poltek-sendawar/09-tracer-study.png"
      },
      {
        title: "Research & Community Service",
        description: "Publishes campus research activities and community service initiatives.",
        image: "/assets/projects/poltek-sendawar/10-penelitian-pengabdian.png"
      },
      {
        title: "Community",
        description: "Displays student activity platforms and communities (e.g., Student Choir).",
        image: "/assets/projects/poltek-sendawar/11-komunitas.png"
      },
      {
        title: "Organization",
        description: "Features student organizations and councils.",
        image: "/assets/projects/poltek-sendawar/12-organisasi.png"
      },
      {
        title: "About P2MPP",
        description: "Introduction to the Educational Quality Assurance Center: profile, duties, functions, and organization chart.",
        image: "/assets/projects/poltek-sendawar/13-tentang-p2mpp.png"
      },
      {
        title: "P2MPP Documents",
        description: "Repository for quality policy documents.",
        image: "/assets/projects/poltek-sendawar/14-dokumen-p2mpp.png"
      },
      {
        title: "Internal Quality Assurance",
        description: "Informs about the campus Internal Quality Assurance System.",
        image: "/assets/projects/poltek-sendawar/15-spmi.png"
      },
      {
        title: "Satisfaction Survey",
        description: "Collects feedback from stakeholders including lecturers, staff, students, and partners.",
        image: "/assets/projects/poltek-sendawar/16-survei-kepuasan.png"
      },
      {
        title: "News",
        description: "Publishes campus news and updates.",
        image: "/assets/projects/poltek-sendawar/17-berita.png"
      },
      {
        title: "Events",
        description: "Informs about upcoming campus events and agendas.",
        image: "/assets/projects/poltek-sendawar/18-acara.png"
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
    thumbnail: "/assets/projects/cvku/01-beranda.png",
    art: "/assets/projects/art_cvku.jpg",
    description:
      "AI-powered CV maker: ATS score checker with keyword gap analysis, guided CV editor, CV library, and streaming AI assistant.",
    techTags: ["Next.js", "AI SDK", "Docker"],
    liveUrl: "https://cvku.ksm.web.id",
    features: [
      {
        title: "Homepage",
        description: "Landing page introducing CVKu and encouraging visitors to create a CV. Explains that users can write casually while AI polishes the sentences—ready for HR in 5 minutes.",
        image: "/assets/projects/cvku/01-beranda.png"
      },
      {
        title: "Create CV (Wizard)",
        description: "A 6-step wizard to build a CV. Users fill out personal data, experience, and more with AI assistance—no login required.",
        image: "/assets/projects/cvku/02-buat-cv.png"
      },
      {
        title: "ATS Score Checker",
        description: "Free ATS score audit page—users can check their CV's passing rate against ATS screening systems in 30 seconds.",
        image: "/assets/projects/cvku/03-cek-skor-ats.png"
      },
      {
        title: "CV Examples & Templates",
        description: "Catalog of ATS-friendly CV examples and templates for various professions.",
        image: "/assets/projects/cvku/04-contoh-cv.png"
      },
      {
        title: "Articles & Career Tips",
        description: "Article listing page featuring interview tips, CV writing guides, and job market trends.",
        image: "/assets/projects/cvku/05-artikel-blog.png"
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
      "Coffee shop POS: menu, order tracking, daily reports, membership program, and stock alerts. Built for speed.",
    techTags: ["Laravel 11", "Alpine.js", "MySQL"],
    liveUrl: "https://sebatas-kopi.ksm.web.id/",
    features: [
      {
        title: "Home",
        description: "Home page welcoming visitors, introducing the shop, and directing them to place an order.",
        image: "/assets/projects/sebatas-kopi/01-beranda.png"
      },
      {
        title: "Menu",
        description: "Coffee shop menu catalog. Visitors can filter categories and add items to their cart.",
        image: "/assets/projects/sebatas-kopi/02-menu.png"
      },
      {
        title: "About",
        description: "Profile page covering the shop's story, highlights, operating hours, location, and contact info.",
        image: "/assets/projects/sebatas-kopi/03-about.png"
      },
      {
        title: "History",
        description: "User purchase history page. Displays empty state for unauthenticated users.",
        image: "/assets/projects/sebatas-kopi/04-history.png"
      },
      {
        title: "Order Cart",
        description: "Shopping cart page for reviewing items before checkout.",
        image: "/assets/projects/sebatas-kopi/05-order.png"
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
      "Vespa spare parts marketplace with real-time bidding. Laravel Reverb WebSocket, broadcasting channels, tested by thousands of users.",
    techTags: ["Laravel 11", "Reverb", "WebSocket"],
    liveUrl: "https://vespabox.ksm.web.id/",
    features: [
      {
        title: "Homepage",
        description: "Main landing page for the workshop. Introduces Vespa service offerings and directs visitors to book a service or browse the spare parts catalog.",
        image: "/assets/projects/vespabox/01-beranda.png"
      },
      {
        title: "Spare Parts Catalog",
        description: "Vespa spare parts shopping page. Visitors can search, filter, and add products to their cart.",
        image: "/assets/projects/vespabox/02-katalog.png"
      },
      {
        title: "Login",
        description: "Login page for customers to manage their service bookings.",
        image: "/assets/projects/vespabox/03-masuk.png"
      },
      {
        title: "Service History",
        description: "Personal history page to monitor all service bookings and history for the logged-in customer.",
        image: "/assets/projects/vespabox/04-riwayat-servis.png"
      },
      {
        title: "Live Queue",
        description: "Live Queue page to view the list of ongoing service queues at the workshop today.",
        image: "/assets/projects/vespabox/05-antrean-langsung.png"
      },
      {
        title: "Book Service",
        description: "Service scheduling form where customers enter vehicle data and choose a date for their service booking.",
        image: "/assets/projects/vespabox/06-pesan-servis.png"
      },
      {
        title: "My Profile",
        description: "Profile page to manage account information and security settings.",
        image: "/assets/projects/vespabox/07-profil-saya.png"
      }
    ]
  }
];
