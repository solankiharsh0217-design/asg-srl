import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ASG S.R.L.",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR 2016/679. ASG S.R.L. Ancona.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAFAF9] pt-28 pb-20">
      <div className="bg-[#1C1917] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Legale</p>
          <h1 className="font-display text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 }}>Privacy Policy</h1>
          <div className="gold-line" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="prose font-body text-[#44403C] space-y-8" style={{ fontSize: "1rem", lineHeight: "1.75" }}>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>1. Titolare del trattamento</h2>
            <p>Il titolare del trattamento dei dati personali è <strong>{SITE.name}</strong>, con sede in {SITE.address}, {SITE.city}, P.IVA {SITE.piva}.</p>
            <p>Per qualsiasi questione relativa al trattamento dei tuoi dati personali puoi contattarci a: <a href={SITE.emailLink} className="text-[#CA8A04] hover:underline">{SITE.email}</a></p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>2. Dati raccolti</h2>
            <p>Il sito raccoglie i seguenti dati:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Dati di navigazione</strong> — indirizzo IP, tipo di browser, pagine visitate, orari di accesso, raccolti automaticamente dai log del server.</li>
              <li><strong>Dati forniti volontariamente</strong> — nome, indirizzo email, numero di telefono e testo inseriti nel modulo di contatto o inviati via email.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>3. Finalità e base giuridica</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Rispondere alle richieste di contatto</strong> — base giuridica: esecuzione di misure precontrattuali (art. 6 par. 1 lett. b GDPR).</li>
              <li><strong>Sicurezza e gestione tecnica del sito</strong> — base giuridica: legittimo interesse (art. 6 par. 1 lett. f GDPR).</li>
              <li><strong>Adempimenti di legge</strong> — base giuridica: obbligo legale (art. 6 par. 1 lett. c GDPR).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>4. Conservazione dei dati</h2>
            <p>I dati di navigazione sono conservati per 30 giorni. I dati di contatto sono conservati per il tempo necessario a evadere la richiesta e comunque non oltre 24 mesi, salvo obblighi di legge.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>5. Comunicazione e diffusione</h2>
            <p>I dati non vengono ceduti a terzi né diffusi. Possono essere comunicati a soggetti che forniscono servizi tecnici (hosting, manutenzione sito) nella qualità di responsabili del trattamento.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>6. Diritti dell'interessato</h2>
            <p>Ai sensi degli artt. 15–22 GDPR hai il diritto di:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>accedere ai tuoi dati personali;</li>
              <li>richiedere la rettifica o la cancellazione;</li>
              <li>opporti al trattamento o richiederne la limitazione;</li>
              <li>richiedere la portabilità dei dati;</li>
              <li>revocare il consenso in qualsiasi momento;</li>
              <li>proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
            </ul>
            <p className="mt-3">Per esercitare i tuoi diritti scrivi a: <a href={SITE.emailLink} className="text-[#CA8A04] hover:underline">{SITE.email}</a></p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>7. Cookie</h2>
            <p>Per informazioni sull'uso dei cookie consulta la nostra <Link href="/cookie-policy" className="text-[#CA8A04] hover:underline">Cookie Policy</Link>.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>8. Modifiche</h2>
            <p>La presente informativa può essere aggiornata. La versione vigente è sempre disponibile su questa pagina.</p>
            <p className="text-sm text-[#44403C]/50 mt-2">Ultimo aggiornamento: maggio 2025</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1C1917]/10">
          <Link href="/"
            className="font-display text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2 text-[#CA8A04] hover:text-[#1C1917] transition-colors">
            <ArrowLeft size={11} /> Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}
