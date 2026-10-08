import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font", // Match existing CSS variable
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
      <body className={oswald.variable}>{children}</body>
    </html>
  );
}
