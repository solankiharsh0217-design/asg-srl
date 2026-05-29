import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.fullName} – Serramenti Infissi Carpenteria Nautica Ancona`,
  description: SITE.description,
  keywords: "serramenti ancona, infissi metallici ancona, carpenteria metallica, nautica inox, arredo urbano, asg srl ancona",
  openGraph: {
    title: `${SITE.fullName} – Serramenti e Carpenteria Ancona`,
    description: SITE.description,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
