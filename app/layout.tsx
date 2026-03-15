import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indriyani Putri Dwi Irianto — CS Student & Developer",
  description:
    "Personal portfolio of Indriyani Putri Dwi Irianto — a Computer Science student passionate about software development, algorithms, and building meaningful digital experiences. Theme: Antigravity.",
  keywords: ["portfolio", "computer science", "developer", "programmer", "Indriyani"],
  openGraph: {
    title: "Indriyani Putri Dwi Irianto — CS Student & Developer",
    description: "Personal portfolio with Antigravity theme",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-midnight text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
