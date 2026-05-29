import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti – ASG S.R.L. Ancona",
  description: "Contatta ASG S.R.L. per preventivi su serramenti, carpenteria metallica e componentistica nautica. Via Ugo Tombesi 9/A, 60131 Ancona.",
};

export default function ContattiPage() {
  return (
    <div className="bg-[#FAFAF9] pt-28 pb-20">
      <div className="bg-[#1C1917] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Scriveteci</p>
            <h1 className="font-display text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 }}>Contatti</h1>
            <div className="gold-line" />
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* Info card */}
        <ScrollReveal>
          <div className="bg-white border border-[#1C1917]/8 p-10 shadow-sm">
            <h2 className="font-display text-[#1C1917] mb-8" style={{ fontSize: "1.5rem", fontWeight: 700 }}>Informazioni</h2>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#CA8A04]/50 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#CA8A04]" />
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04] mb-1">Telefono</p>
                  <a href={SITE.phoneLink} className="font-body text-[#1C1917] hover:text-[#CA8A04] transition-colors cursor-pointer" style={{ fontSize: "1.05rem" }}>
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#CA8A04]/50 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#CA8A04]" />
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04] mb-1">Email</p>
                  <a href={SITE.emailLink} className="font-body text-[#1C1917] hover:text-[#CA8A04] transition-colors cursor-pointer" style={{ fontSize: "1.05rem" }}>
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#CA8A04]/50 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#CA8A04]" />
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04] mb-1">Sede</p>
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="font-body text-[#1C1917] hover:text-[#CA8A04] transition-colors cursor-pointer">
                    {SITE.address}<br />{SITE.city}
                  </a>
                  <p className="font-display text-[9px] uppercase tracking-widest text-[#44403C]/40 mt-1">{SITE.piva}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#CA8A04]/50 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-[#CA8A04]" />
                </div>
                <div>
                  <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04] mb-1">Orari</p>
                  <p className="font-body text-[#1C1917]">{SITE.hours}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#1C1917]/8 flex gap-4">
              <a href={SITE.phoneLink}
                className="font-display text-[10px] uppercase tracking-[0.15em] px-6 py-3 bg-[#CA8A04] text-[#1C1917] hover:bg-[#FDE68A] transition-colors cursor-pointer">
                Chiama
              </a>
              <a href={SITE.emailLink}
                className="font-display text-[10px] uppercase tracking-[0.15em] px-6 py-3 border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer">
                Scrivi
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Map placeholder */}
        <ScrollReveal delay={150}>
          <div className="bg-[#1C1917] min-h-[420px] flex flex-col items-center justify-center p-10 text-center border-l-2 border-[#CA8A04]">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Sede operativa</p>
            <h3 className="font-display text-white mb-3 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>Ancona (AN)</h3>
            <p className="font-body text-white/50 mb-2">{SITE.address}</p>
            <p className="font-body text-white/50 mb-8">{SITE.city}</p>
            <p className="font-display text-[9px] uppercase tracking-widest text-[#CA8A04]/60 mb-6">{SITE.facility}</p>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="font-display text-[10px] uppercase tracking-[0.15em] px-6 py-3 border border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-[#1C1917] transition-colors cursor-pointer">
              Apri su Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
