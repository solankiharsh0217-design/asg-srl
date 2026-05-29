import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV_LINKS, CERTIFICATIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image src="/images/logo.png" alt={SITE.name} width={110} height={55}
            className="object-contain brightness-0 invert mb-5" />
          <p className="font-body text-sm text-white/60 leading-relaxed mb-4">{SITE.description}</p>
          <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04]">{SITE.founded} · Ancona</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] mb-6">Navigazione</h4>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="font-body text-sm text-white/60 hover:text-[#CA8A04] transition-colors duration-200 cursor-pointer">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] mb-6">Certificazioni</h4>
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((c) => (
              <div key={c.code}>
                <p className="font-display text-xs text-white/90">{c.code}</p>
                <p className="font-body text-[11px] text-white/45 leading-snug mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] mb-6">Contatti</h4>
          <div className="flex flex-col gap-4">
            <a href={SITE.phoneLink} className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-[#CA8A04] transition-colors cursor-pointer">
              <Phone size={13} className="text-[#CA8A04] shrink-0" />{SITE.phone}
            </a>
            <a href={SITE.emailLink} className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-[#CA8A04] transition-colors cursor-pointer">
              <Mail size={13} className="text-[#CA8A04] shrink-0" />{SITE.email}
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-3 font-body text-sm text-white/60 hover:text-[#CA8A04] transition-colors cursor-pointer">
              <MapPin size={13} className="text-[#CA8A04] shrink-0 mt-0.5" />
              <span>{SITE.address}<br />{SITE.city}</span>
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-white/60">
              <Clock size={13} className="text-[#CA8A04] shrink-0" />{SITE.hours}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-line-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-display text-[9px] uppercase tracking-widest text-white/25">
        <span>© {new Date().getFullYear()} {SITE.fullName} — {SITE.piva}</span>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-[#CA8A04] transition-colors cursor-pointer">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-[#CA8A04] transition-colors cursor-pointer">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
