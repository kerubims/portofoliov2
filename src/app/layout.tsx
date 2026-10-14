import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font", // Match existing CSS variable
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ksm.web.id"),
  title: {
    default: "Kerubim SM — Full Stack Web Developer & Software Engineer",
    template: "%s | Kerubim SM",
  },
  description:
    "Kerubim SM (Kerubim Serafim Mahanaim) adalah Full Stack Web Developer & Software Engineer asal Malang, Indonesia. Membangun aplikasi web modern berkinerja tinggi dengan Next.js, React, Laravel, dan AI integration.",
  keywords: [
    "Kerubim SM",
    "Kerubim Serafim Mahanaim",
    "Kerubim",
    "ksm.web.id",
    "Web Developer Indonesia",
    "Full Stack Developer Malang",
    "Portfolio Web Developer",
    "Software Engineer Indonesia",
    "Next.js Developer Indonesia",
    "Laravel Developer Indonesia",
    "Jasa Pembuatan Website Malang",
    "Jasa Web Developer",
    "SIM-KERMA",
    "CVKu",
    "Poltek Sendawar",
  ],
  authors: [{ name: "Kerubim Serafim Mahanaim", url: "https://ksm.web.id" }],
  creator: "Kerubim SM",
  publisher: "Kerubim SM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://ksm.web.id",
    siteName: "Kerubim SM Portfolio",
    title: "Kerubim SM — Full Stack Web Developer & Software Engineer",
    description:
      "Kerubim SM adalah Full Stack Web Developer asal Indonesia berfokus pada aplikasi web modern, performa tinggi, dan digital experiences.",
    images: [
      {
        url: "/assets/lazyhero.webp",
        width: 1200,
        height: 630,
        alt: "Kerubim SM — Web Developer Portfolio Visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerubim SM — Full Stack Web Developer",
    description:
      "Full Stack Web Developer & Software Engineer crafting high-performance web applications and digital experiences.",
    images: ["/assets/lazyhero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kerubim Serafim Mahanaim",
    alternateName: ["Kerubim SM", "Kerubim"],
    url: "https://ksm.web.id",
    image: "https://ksm.web.id/assets/lazyhero.webp",
    jobTitle: "Full Stack Web Developer & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    sameAs: [
      "https://github.com/kerubims",
      "https://www.linkedin.com/in/kerubim-serafim-mahanaim-393a2b24b",
      "https://instagram.com/ubims_s",
      "https://wa.me/62882009074648",
    ],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Docker",
      "RESTful API",
      "WebSocket",
      "Artificial Intelligence",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kerubim SM — Web Developer Portfolio",
    alternateName: "ksm.web.id",
    url: "https://ksm.web.id",
    inLanguage: ["id-ID", "en-US"],
    description:
      "Portofolio resmi Kerubim SM, Full Stack Web Developer & Software Engineer asal Indonesia yang berfokus pada aplikasi web performa tinggi, Next.js, dan Laravel.",
  };

  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 1.125rem;
            vertical-align: middle;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className={`${oswald.variable} ${hanken.variable}`}>{children}</body>
    </html>
  );
}
