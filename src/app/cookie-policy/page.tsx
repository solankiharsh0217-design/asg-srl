import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy – ASG S.R.L.",
  description: "Informativa sull'uso dei cookie sul sito ASG S.R.L. Ancona.",
};

const COOKIE_TABLE = [
  { name: "PHPSESSID", type: "Tecnico", durata: "Sessione", scopo: "Gestione sessione del server web" },
  { name: "_ga, _gid", type: "Analitico", durata: "2 anni / 24 ore", scopo: "Google Analytics — statistiche di accesso anonimizzate" },
  { name: "cookieConsent", type: "Tecnico", durata: "12 mesi", scopo: "Memorizza la preferenza dell'utente sui cookie" },
] as const;

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#FAFAF9] pt-28 pb-20">
      <div className="bg-[#1C1917] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] mb-4">Legale</p>
          <h1 className="font-display text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 }}>Cookie Policy</h1>
          <div className="gold-line" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="font-body text-[#44403C] space-y-8" style={{ fontSize: "1rem", lineHeight: "1.75" }}>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Cosa sono i cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo quando li visiti. Servono a far funzionare il sito correttamente, a ricordare le tue preferenze e a raccogliere informazioni statistiche sull'uso del sito.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Cookie utilizzati da questo sito</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1C1917] text-white">
                    <th className="font-display text-[9px] uppercase tracking-widest p-3 text-left">Nome</th>
                    <th className="font-display text-[9px] uppercase tracking-widest p-3 text-left">Tipo</th>
                    <th className="font-display text-[9px] uppercase tracking-widest p-3 text-left">Durata</th>
                    <th className="font-display text-[9px] uppercase tracking-widest p-3 text-left">Scopo</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIE_TABLE.map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F4]"}>
                      <td className="p-3 font-mono text-[0.8rem] text-[#CA8A04]">{row.name}</td>
                      <td className="p-3">{row.type}</td>
                      <td className="p-3 text-[#44403C]/60">{row.durata}</td>
                      <td className="p-3">{row.scopo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Cookie tecnici</h2>
            <p>I cookie tecnici sono necessari per il corretto funzionamento del sito. Non richiedono consenso e non possono essere disabilitati senza compromettere l'uso del sito.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Cookie analitici</h2>
            <p>Utilizziamo Google Analytics con anonimizzazione dell'IP per raccogliere dati statistici sull'utilizzo del sito (pagine visitate, provenienza, durata della sessione). Questi dati sono aggregati e anonimi. Puoi disattivare Google Analytics installando il <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#CA8A04] hover:underline">componente aggiuntivo per il browser</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Come gestire i cookie</h2>
            <p>Puoi gestire le preferenze sui cookie direttamente dal tuo browser. Di seguito i link alle istruzioni dei principali browser:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#CA8A04] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-[#CA8A04] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-[#CA8A04] hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#CA8A04] hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3">La disabilitazione dei cookie potrebbe influire sulla funzionalità di alcune parti del sito.</p>
          </section>

          <section>
            <h2 className="font-display text-[#1C1917] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Titolare del trattamento</h2>
            <p>{SITE.name} — {SITE.address}, {SITE.city}<br />
              Email: <a href={SITE.emailLink} className="text-[#CA8A04] hover:underline">{SITE.email}</a></p>
            <p className="mt-3">Per ulteriori informazioni consulta la nostra <Link href="/privacy-policy" className="text-[#CA8A04] hover:underline">Privacy Policy</Link>.</p>
          </section>

          <p className="text-sm text-[#44403C]/50">Ultimo aggiornamento: maggio 2025</p>
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
