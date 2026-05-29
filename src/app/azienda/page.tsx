import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, CERTIFICATIONS, STATS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azienda – ASG S.R.L. Ancona dal 1954",
  description: "La storia di ASG S.R.L.: dall'artigiano Genserico Ambrogini nel 1954 a oggi, oltre 70 anni di eccellenza in serramenti metallici, carpenteria e nautica ad Ancona.",
};

const TIMELINE = [
  { year: "1954", title: "La fondazione", text: "Genserico Ambrogini fonda l'impresa individuale ad Ancona, specializzandosi nella realizzazione e posa in opera di infissi metallici." },
  { year: "1998", title: "ASG S.R.L.", text: "L'azienda si trasforma in società a responsabilità limitata per supportare la crescita e la diversificazione nel mercato." },
  { year: "2000", title: "ISO 9001", text: "Ottenimento della certificazione UNI EN ISO 9001 per la progettazione, realizzazione e posa di infissi metallici e carpenteria." },
  { year: "2015", title: "EN 1090", text: "Certificazione UNI EN 1090 per i componenti strutturali in acciaio, aprendo nuovi mercati nell'edilizia pubblica e industriale." },
  { year: "Oggi", title: "70+ anni di eccellenza", text: "1.100 mq di superficie coperta, 1.400 mq di spazio esterno, tre certificazioni UNI e una gamma completa di servizi in metallo." },
] as const;

export default function AziendaPage() {
  return (
    <div className="bg-[#FAFAF9] pt-28 pb-20">
      {/* Header */}
      <div className="bg-[#1C1917] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Chi siamo</p>
            <h1 className="font-display text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 }}>
              L'Azienda
            </h1>
            <div className="gold-line" />
          </ScrollReveal>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-20">
        <ScrollReveal>
          <div className="relative">
            <Image src="/images/officina.jpg" alt="ASG officina" width={580} height={440} className="object-cover w-full shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#CA8A04]/30 pointer-events-none" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-[#CA8A04] mb-4">La nostra storia</p>
          <h2 className="font-display text-[#1C1917] leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
            Artigianato metallico dal 1954
          </h2>
          <div className="gold-line mb-6" />
          <div className="space-y-4 font-body text-[#44403C] leading-relaxed" style={{ fontSize: "1.02rem" }}>
            <p>ASG nasce nel {SITE.founded} come impresa individuale di Genserico Ambrogini ad Ancona. L'attività si avvia con la realizzazione e posa di infissi metallici, espandendosi progressivamente verso la carpenteria metallica leggera e pesante per committenze civili, pubbliche e industriali.</p>
            <p>Nel 1998, per sostenere la crescita e diversificare il mercato, l'impresa si trasforma in ASG S.R.L. Nel corso degli anni i figli del fondatore si sono affiancati all'attività, ampliando la dimensione produttiva.</p>
            <p>Oggi l'azienda opera su una superficie coperta di 1.100 mq (200 mq di uffici + 900 mq di officina) e 1.400 mq di spazio esterno, con tre certificazioni UNI che garantiscono la qualità delle lavorazioni.</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats */}
      <div className="bg-[#292524] py-12 mb-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[#CA8A04] mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}>{s.value}</div>
              <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Storia</p>
            <h2 className="font-display text-[#1C1917] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>Il percorso</h2>
          </div>
        </ScrollReveal>
        <div className="relative pl-8 border-l-2 border-[#CA8A04]/30">
          {TIMELINE.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 100}>
              <div className="mb-10 relative">
                <div className="absolute -left-[2.6rem] w-4 h-4 bg-[#CA8A04] border-2 border-[#FAFAF9]" />
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-[#CA8A04] mb-1">{item.year}</p>
                <h3 className="font-display text-[#1C1917] mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>{item.title}</h3>
                <p className="font-body text-[#44403C]/70 leading-relaxed text-sm">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Qualità</p>
            <h2 className="font-display text-[#1C1917] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>Certificazioni</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((c, i) => (
            <ScrollReveal key={c.code} delay={i * 100}>
              <div className="bg-[#1C1917] p-8 border-l-2 border-[#CA8A04]">
                <p className="font-display text-[#CA8A04] mb-1" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{c.code}</p>
                {c.year && <p className="font-display text-[9px] uppercase tracking-widest text-white/30 mb-3">Dal {c.year}</p>}
                <p className="font-body text-sm text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center px-6">
          <Link href="/contatti"
            className="font-display text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 bg-[#CA8A04] text-[#1C1917] hover:bg-[#FDE68A] transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer">
            Contattaci <ArrowRight size={12} />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
