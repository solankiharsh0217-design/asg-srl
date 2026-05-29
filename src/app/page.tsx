import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Shield, Award, Factory } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, SERVICES, STATS, CERTIFICATIONS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero.jpg" alt="ASG S.R.L. Ancona" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="animate-fade-in font-display text-[10px] uppercase tracking-[0.4em] text-[#CA8A04] mb-5">
            Dal {SITE.founded} · Ancona
          </p>
          <h1 className="animate-fade-in animate-delay-200 font-display text-white leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            A.S.G.
          </h1>
          <div className="animate-fade-in animate-delay-300 gold-line mx-auto mb-6" />
          <p className="animate-fade-in animate-delay-400 font-display text-white/80 uppercase tracking-[0.15em] mb-4"
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}>
            {SITE.tagline}
          </p>
          <p className="animate-fade-in animate-delay-400 font-body text-white/65 mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "1.05rem" }}>
            Specialisti in serramenti metallici, carpenteria e componentistica nautica di alta qualità. Qualità certificata UNI EN ISO 9001.
          </p>
          <div className="animate-fade-in animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contatti"
              className="font-display text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 bg-[#CA8A04] text-[#1C1917] hover:bg-[#FDE68A] transition-colors duration-200 cursor-pointer flex items-center gap-2">
              Richiedi Preventivo <ArrowRight size={13} />
            </Link>
            <Link href="/serramenti"
              className="font-display text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 border border-white/40 text-white hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors duration-200 cursor-pointer">
              Scopri i Servizi
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#CA8A04]/60 animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="bg-[#292524] py-10 border-y border-[#CA8A04]/20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[#CA8A04] mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}>
                {s.value}
              </div>
              <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────── */}
      <section className="section-pad bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <Image src="/images/carp6.jpg" alt="ASG S.R.L. officina" width={620} height={460}
                className="object-cover w-full shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#CA8A04]/30 pointer-events-none" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-display text-[10px] uppercase tracking-[0.25em] text-[#CA8A04] mb-4">L'Azienda</p>
            <h2 className="font-display text-[#1C1917] leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
              70 anni di artigianato metallico
            </h2>
            <div className="gold-line mb-6" />
            <p className="font-body text-[#44403C] leading-relaxed mb-4" style={{ fontSize: "1.02rem" }}>
              Fondata nel {SITE.founded} dall'artigiano Genserico Ambrogini ad Ancona, ASG S.R.L. è specializzata nella realizzazione e posa in opera di infissi metallici e carpenteria per uso civile, industriale e navale.
            </p>
            <p className="font-body text-[#44403C] leading-relaxed mb-8" style={{ fontSize: "1.02rem" }}>
              Con oltre {SITE.facility} di superficie operativa e tre certificazioni UNI, garantiamo qualità, precisione e rispetto delle normative più stringenti.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {CERTIFICATIONS.map((c) => (
                <span key={c.code} className="font-display text-[9px] uppercase tracking-widest px-3 py-1.5 border border-[#CA8A04]/50 text-[#44403C]">
                  {c.code}
                </span>
              ))}
            </div>
            <Link href="/azienda"
              className="font-display text-[10px] uppercase tracking-[0.2em] px-6 py-3 bg-[#1C1917] text-white hover:bg-[#CA8A04] hover:text-[#1C1917] transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer">
              Leggi la Storia <ArrowRight size={12} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────── */}
      <section className="section-pad bg-[#1C1917]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Cosa facciamo</p>
              <h2 className="font-display text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
                I nostri servizi
              </h2>
              <div className="gold-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#CA8A04]/15">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link href={s.href} className="group block bg-[#1C1917] p-8 hover:bg-[#292524] transition-colors duration-300 cursor-pointer h-full">
                  <div className="img-zoom mb-6 aspect-video overflow-hidden bg-[#292524]">
                    <Image src={s.image} alt={s.title} width={500} height={280} className="object-cover w-full h-full" />
                  </div>
                  <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#CA8A04] mb-2">{s.subtitle}</p>
                  <h3 className="font-display text-white mb-3 group-hover:text-[#CA8A04] transition-colors"
                    style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                    {s.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex items-center gap-2 font-display text-[9px] uppercase tracking-widest text-[#CA8A04] group-hover:gap-3 transition-all">
                    Scopri <ArrowRight size={11} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────── */}
      <section className="section-pad bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Qualità certificata</p>
              <h2 className="font-display text-[#1C1917] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
                Le nostre certificazioni
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {CERTIFICATIONS.map((c, i) => {
              const icons = [Shield, Award, Factory];
              const Icon = icons[i];
              return (
                <ScrollReveal key={c.code} delay={i * 100} className="h-full">
                  <div className="card-hover bg-white border border-[#1C1917]/8 p-8 h-full">
                    <div className="w-10 h-10 border border-[#CA8A04]/40 flex items-center justify-center mb-6">
                      <Icon size={18} className="text-[#CA8A04]" />
                    </div>
                    <p className="font-display text-[#CA8A04] mb-1" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{c.code}</p>
                    {c.year && <p className="font-display text-[9px] uppercase tracking-widest text-[#44403C]/50 mb-3">Dal {c.year}</p>}
                    <p className="font-body text-sm text-[#44403C]/70 leading-relaxed">{c.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="bg-[#CA8A04] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[#1C1917] mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Avete un progetto da realizzare?
            </h2>
            <p className="font-body text-[#1C1917]/70 mb-8 max-w-xl mx-auto">
              Contattateci per un preventivo personalizzato. Siamo disponibili dal lunedì al venerdì, {SITE.hours}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={SITE.phoneLink}
                className="font-display text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 bg-[#1C1917] text-white hover:bg-[#292524] transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                <Phone size={13} /> {SITE.phone}
              </a>
              <a href={SITE.emailLink}
                className="font-display text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 border-2 border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                <Mail size={13} /> {SITE.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
