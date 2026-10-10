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
        title: "Dashboard Overview",
        description: "Displays key collaboration metrics, document status, and pending approval notifications.",
      },
      {
        title: "Document Versioning",
        description: "Tracks every change made to collaboration documents, complete with a history of who edited it and when.",
      },
      {
        title: "Multi-party E-Signature",
        description: "Electronic signature integration enabling sequential authorized signing by various ministries.",
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
        title: "Main Landing Page",
        description: "Displays quick information about the campus, latest news, and quick links to academic programs.",
        image: "/assets/projects/polsen.png",
      },
      {
        title: "Study Programs Directory",
        description: "Detailed page for each department, complete with curriculum and accreditation status.",
      },
      {
        title: "News and Events",
        description: "Information center for campus activities, academic seminars, and important announcements for students.",
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
      "AI-powered CV maker: ATS score checker with keyword gap analysis, guided CV editor, CV library, and streaming AI assistant.",
    techTags: ["Next.js", "AI SDK", "Docker"],
    liveUrl: "https://cvku.ksm.web.id",
    features: [
      {
        title: "ATS Resume Checker",
        description: "Upload your CV and get a job matching score analysis based on keywords.",
      },
      {
        title: "AI Chat Assistant",
        description: "Smart assistant that helps users formulate their work experience using more professional language.",
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
    features: [
      {
        title: "Cashier (POS Interface)",
        description: "Cashier interface optimized for fast customer order input and payment calculation.",
      },
      {
        title: "Inventory Management",
        description: "Automated alerts when raw materials run low to ensure uninterrupted shop operations.",
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
    features: [
      {
        title: "Live Bidding Room",
        description: "Auction room for rare spare parts where prices are updated in real-time without reloading the page.",
      },
      {
        title: "Seller Dashboard",
        description: "Panel for sellers to monitor auction activity, set base prices, and view transaction history.",
      }
    ]
  }
];
