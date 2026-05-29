export const SITE = {
  name: "A.S.G.",
  fullName: "ASG S.R.L.",
  tagline: "Serramenti · Carpenteria · Nautica · Arredo Urbano",
  description:
    "Specialisti in serramenti e infissi metallici di alta qualità, carpenteria metallica per uso civile, industriale, navale e pubblico. Dal 1954 ad Ancona.",
  phone: "+39 071 286 1730",
  phoneLink: "tel:+390712861730",
  email: "info@asg-srl.it",
  emailLink: "mailto:info@asg-srl.it",
  whatsapp: "",
  address: "Via Ugo Tombesi 9/A",
  city: "60131 Ancona (AN)",
  fullAddress: "Via Ugo Tombesi 9/A – 60131 Ancona (AN)",
  mapsUrl: "https://maps.google.com/?q=Via+Ugo+Tombesi+9A+Ancona",
  piva: "P.I. 01532530423",
  founded: "1954",
  hours: "Lun–Ven: 08:30–18:30",
  facility: "1.100 mq coperti · 1.400 mq esterni",
} as const;

export const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Azienda",     href: "/azienda" },
  { label: "Serramenti",  href: "/serramenti" },
  { label: "Carpenteria", href: "/carpenteria" },
  { label: "Nautica",     href: "/nautica" },
  { label: "Contatti",    href: "/contatti" },
] as const;

export const CERTIFICATIONS = [
  { code: "UNI EN ISO 9001", year: "2000", desc: "Progettazione, realizzazione e posa in opera di infissi metallici e carpenteria" },
  { code: "UNI EN 1090",     year: "2015", desc: "Componenti strutturali in acciaio e relativi assemblaggi" },
  { code: "UNI EN 14351",    year: "",     desc: "Porte pedonali esterne per vie di esodo" },
] as const;

export const STATS = [
  { value: "1954",        label: "Anno di fondazione" },
  { value: "70+",         label: "Anni di esperienza" },
  { value: "1.100 mq",    label: "Superficie coperta" },
  { value: "3",           label: "Certificazioni UNI" },
] as const;

export const SERVICES = [
  {
    slug: "serramenti",
    title: "Serramenti",
    subtitle: "Infissi di alta qualità",
    description:
      "Infissi in acciaio inox, alluminio, PVC, legno-alluminio e verande su misura. Soluzioni per ogni esigenza civile e industriale.",
    image: "/images/serramenti1.jpg",
    href: "/serramenti",
    items: ["Acciaio Inox", "Alluminio", "Alluminio verniciato legno", "Legno e Alluminio", "PVC", "Verande in alluminio"],
  },
  {
    slug: "carpenteria",
    title: "Carpenteria",
    subtitle: "Strutture metalliche su misura",
    description:
      "Carpenteria metallica leggera e pesante per uso civile, industriale e pubblico: scale, ringhiere, tettoie, portoni, strutture per tensostrutture.",
    image: "/images/carp4.jpg",
    href: "/carpenteria",
    items: ["Scale in ferro", "Ringhiere in acciaio", "Portoni industriali", "Tettoie e pensiline", "Strutture metalliche", "Corrimani inox"],
  },
  {
    slug: "nautica",
    title: "Nautica",
    subtitle: "Componentistica per imbarcazioni",
    description:
      "Realizzazione di componenti inox e alluminio per yacht e imbarcazioni: corrimani, portelli, griglie, isole salpancore e attrezzature su misura.",
    image: "/images/nautica1.jpg",
    href: "/nautica",
    items: ["Corrimani inox", "Portelli ala di gabbiano", "Griglie inox/alluminio", "Isola salpancore", "Bitte inox", "Tavoli inox"],
  },
  {
    slug: "arredo-urbano",
    title: "Arredo Urbano",
    subtitle: "Design per spazi pubblici",
    description:
      "Progettazione e realizzazione di arredi urbani in metallo: panchine, pensiline, tettoie, cancelli, fontane e installazioni su commessa.",
    image: "/images/hero.jpg",
    href: "/contatti",
    items: ["Panchine", "Pensiline", "Tettoie in alluminio e vetro", "Cancelli in ferro", "Fontane", "Baretto e bagni"],
  },
  {
    slug: "taglio",
    title: "Taglio",
    subtitle: "Lavorazioni di precisione",
    description:
      "Taglio di precisione su allumini, acciaio inox, carbonio, vetro, vetroresina, marmo e materiali speciali con tecnologie avanzate.",
    image: "/images/carp5.jpg",
    href: "/contatti",
    items: ["Taglio allumini", "Taglio inox", "Taglio carbonio", "Taglio vetro", "Taglio vetroresina", "Mosaico di marmo"],
  },
  {
    slug: "scritte",
    title: "Scritte & Insegne",
    subtitle: "Segnaletica luminosa",
    description:
      "Realizzazione di scritte retroilluminate, pannelli LED, loghi luminosi e insegne su misura per attività commerciali e industriali.",
    image: "/images/carp3.jpg",
    href: "/contatti",
    items: ["Scritte retroilluminate", "Logo retroilluminato", "Pannelli LED", "Scritte non retroilluminate"],
  },
] as const;

export const SERRAMENTI_PRODUCTS = [
  { title: "Infissi Acciaio Inox",             image: "/images/serramenti1.jpg", desc: "Serramenti in acciaio inossidabile per massima durabilità e resistenza." },
  { title: "Infissi in Alluminio",              image: "/images/serramenti3.jpg", desc: "Soluzioni leggere e moderne in alluminio con diverse finiture disponibili." },
  { title: "Infissi in PVC",                    image: "/images/serramenti2.jpg", desc: "Eccellente isolamento termoacustico con profili in PVC di alta qualità." },
  { title: "Infissi Legno e Alluminio",         image: "/images/serramenti1.jpg", desc: "Il calore del legno all'interno, la resistenza dell'alluminio all'esterno." },
  { title: "Alluminio Verniciato Effetto Legno", image: "/images/serramenti3.jpg", desc: "L'estetica del legno con le prestazioni dell'alluminio." },
  { title: "Verande in Alluminio",              image: "/images/serramenti2.jpg", desc: "Verande su misura in alluminio per ampliare gli spazi vivibili." },
] as const;

export const CARPENTERIA_PRODUCTS = [
  { title: "Scale in Ferro",              image: "/images/carp4.jpg",  desc: "Scale in ferro e acciaio per uso interno ed esterno, civile e industriale." },
  { title: "Ringhiere in Acciaio",        image: "/images/carp2.jpg",  desc: "Ringhiere zincate e verniciate personalizzabili per ogni tipo di applicazione." },
  { title: "Portoni Industriali",         image: "/images/carp1.jpg",  desc: "Portoni scorrevoli in acciaio con pannelli sandwich per capannoni industriali." },
  { title: "Tettoie con Pannelli FV",     image: "/images/carp6.jpg",  desc: "Strutture in acciaio con copertura fotovoltaica integrata." },
  { title: "Facciata Porsche",            image: "/images/carp5.jpg",  desc: "Struttura curvilinea in acciaio con pannelli Alucobond per concessionaria." },
  { title: "Cappa in Inox",              image: "/images/carp3.jpg",  desc: "Struttura in acciaio inox con pannelli in rame e rete anti-insetti." },
] as const;

export const NAUTICA_PRODUCTS = [
  { title: "Corrimani Inox per Yacht",      image: "/images/nautica1.jpg", desc: "Corrimani in acciaio AISI 316 lucidato a specchio per imbarcazioni." },
  { title: "Portelli Ala di Gabbiano",      image: "/images/nautica2.jpg", desc: "Portelli movie e spin in alluminio su misura per yacht." },
  { title: "Griglie Inox e Alluminio",      image: "/images/nautica1.jpg", desc: "Griglie di aerazione e protezione in acciaio inox e alluminio." },
  { title: "Isola Salpancore",              image: "/images/nautica2.jpg", desc: "Strutture per prua con integrazione verricelli e sistemi di ancoraggio." },
  { title: "Bitte Inox",                   image: "/images/nautica1.jpg", desc: "Bitte di ormeggio in acciaio inox per marine e pontili." },
  { title: "Tavoli Inox e Piano in Legno",  image: "/images/nautica2.jpg", desc: "Tavoli da pozzetto personalizzati in inox con piani in legno teak." },
] as const;
