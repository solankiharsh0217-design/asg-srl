import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, NAUTICA_PRODUCTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nautica – ASG S.R.L. Componentistica Inox per Imbarcazioni Ancona",
  description: "Realizzazione su misura di corrimani, portelli, griglie, bitte e componenti inox/alluminio per yacht e imbarcazioni. ASG S.R.L. Ancona.",
};

export default function NauticaPage() {
  return (
    <div className="bg-[#FAFAF9] pt-28 pb-20">
      <div className="bg-[#1C1917] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Servizi</p>
            <h1 className="font-display text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 }}>Nautica</h1>
            <div className="gold-line mb-4" />
            <p className="font-body text-white/60 max-w-2xl" style={{ fontSize: "1.02rem" }}>
              Componentistica su misura in acciaio inox AISI 316 e alluminio per yacht e imbarcazioni. Lavorazioni di precisione per il settore navale.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {NAUTICA_PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <div className="card-hover bg-white border border-[#1C1917]/8 overflow-hidden">
                <div className="img-zoom aspect-video overflow-hidden bg-[#F5F5F4]">
                  <Image src={p.image} alt={p.title} width={500} height={280} className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[#1C1917] mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>{p.title}</h3>
                  <p className="font-body text-sm text-[#44403C]/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-[#1C1917] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-white mb-2" style={{ fontSize: "1.3rem", fontWeight: 600 }}>Componentistica navale su misura</h3>
              <p className="font-body text-white/60 text-sm">Contattaci per discutere le vostre specifiche tecniche e ricevere un preventivo.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a href={SITE.phoneLink}
                className="font-display text-[10px] uppercase tracking-[0.2em] px-6 py-3 bg-[#CA8A04] text-[#1C1917] hover:bg-[#FDE68A] transition-colors cursor-pointer">
                {SITE.phone}
              </a>
              <Link href="/contatti"
                className="font-display text-[10px] uppercase tracking-[0.2em] px-6 py-3 border border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-[#1C1917] transition-colors cursor-pointer flex items-center gap-2">
                Contatti <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
