"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 navbar-blur ${
      (scrolled || !isHome) ? "bg-[#1C1917]/92 shadow-lg shadow-black/30 py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={100}
            height={50}
            className="object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-display text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer ${
                pathname === link.href ? "text-[#CA8A04]" : "text-white/80 hover:text-[#CA8A04]"
              }`}>
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${SITE.email}`}
            className="font-display text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-[#1C1917] transition-colors duration-200 cursor-pointer">
            Preventivo
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white cursor-pointer p-1" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1C1917]/96 navbar-blur border-t border-[#CA8A04]/20 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-display text-xs uppercase tracking-widest py-2 cursor-pointer ${
                pathname === link.href ? "text-[#CA8A04]" : "text-white/80 hover:text-[#CA8A04]"
              }`}>
              {link.label}
            </Link>
          ))}
          <a href={SITE.phoneLink}
            className="font-body text-sm text-[#CA8A04] py-2 cursor-pointer">
            {SITE.phone}
          </a>
        </div>
      )}
    </header>
  );
}
