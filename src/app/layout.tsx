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
  title: "Kerubim SM — Web Developer",
  description: "Kerubim SM is a developer from Indonesia crafting high-performance web applications and digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 1.125rem;
            vertical-align: middle;
          }
        `}</style>
      </head>
      <body className={`${oswald.variable} ${hanken.variable}`}>{children}</body>
    </html>
  );
}
