export type HueId = "scent" | "fresh" | "clean" | "free";

export interface Hue {
  id: HueId;
  /** Färgnamn */
  name: string;
  /** Ändamålet färgen står för. Visas också på klistermärkena. */
  job: string;
  color: string;
  /** Mjuk nyans till bakgrunder */
  soft: string;
  /** Läsbar textfärg ovanpå `color` */
  ink: string;
  /** Frilagd produktbild (public/pens) */
  image: string;
  tagline: string;
  scenario: string;
  optimizedFor: string;
  notes: string[];
}

export const HUES: Hue[] = [
  {
    id: "scent",
    name: "Lila",
    job: "Doft",
    color: "#9B51E0",
    soft: "#EEE3FA",
    ink: "#FFFFFF",
    image: "/pens/purple.png",
    tagline: "Din signaturdoft, alltid till hands.",
    scenario:
      "Skrivbordslådan, gymväskan, kvällen ute. Ett snabbt puff utan att behöva bära hela flaskan.",
    optimizedFor: "Parfym och kroppsdimma",
    notes: [
      "Liten och diskret i fickan",
      "Fin dimma som passar dofter",
      "Förvara den skyddad från sol och värme",
    ],
  },
  {
    id: "fresh",
    name: "Klar",
    job: "Fräsch",
    color: "#7CCBD9",
    soft: "#E2F4F7",
    ink: "#0B2A31",
    image: "/pens/clear.png",
    tagline: "Ett diskret puff efter kaffet eller lunchen.",
    scenario:
      "Möten, dejter, långa pendlingsresor. Ha den i fickan och använd den bara till ett ändamål.",
    optimizedFor: "Munspray",
    notes: [
      "Håll pennan till ett enda ändamål",
      "Personlig: dela den inte med andra",
      "Följ alltid anvisningarna för det du använder",
    ],
  },
  {
    id: "clean",
    name: "Blå",
    job: "Ren",
    color: "#2F8FE0",
    soft: "#DCEBFA",
    ink: "#08213D",
    image: "/pens/blue.png",
    tagline: "Rena händer inom räckhåll.",
    scenario:
      "Bussen, torget, gymmet, lunchrasten. Ett tryck och du är redo att gå vidare.",
    optimizedFor: "Handsprit",
    notes: [
      "Fin dimma med ett enkelt tryck",
      "Alkoholbaserade produkter är brandfarliga: håll dem borta från låga och värme",
      "Förvaras utom räckhåll för småbarn",
    ],
  },
  {
    id: "free",
    name: "Grå",
    job: "Fri",
    color: "#3A3D52",
    soft: "#E4E5EE",
    ink: "#FFFFFF",
    image: "/pens/grey.png",
    tagline: "Gör färgkoden till din egen.",
    scenario:
      "Märk den själv med klistermärkena och ge den ett uppdrag som ingen annan har tänkt på.",
    optimizedFor: "Det du själv väljer att märka upp den för",
    notes: [
      "Använd klistermärkena för att märka pennan",
      "Välj bara vätskor som passar hur du ska använda dem",
      "En penna, en vätska – alltid",
    ],
  },
];

export const SINGLE_PRICE = 45;
export const BUNDLE_SIZE = 3;
export const BUNDLE_PRICE = 100;

/** Pris i kr (inkl. moms) för `n` pennor: varje 3-pack för 100 kr, resten för 45 kr styck. */
export function priceFor(n: number): number {
  const bundles = Math.floor(n / BUNDLE_SIZE);
  const rest = n % BUNDLE_SIZE;
  return bundles * BUNDLE_PRICE + rest * SINGLE_PRICE;
}

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Vad är MistPen?",
    a: "En påfyllningsbar sprayflaska på 3 ml i pennformat. Den är optimerad för parfym, handsprit och munspray, och levereras utan innehåll.",
  },
  {
    q: "Varför färgkodning?",
    a: "I väskan ser alla pennor likadana ut. En färg per ändamål gör att du aldrig tar fel penna. Föredrar du en enda färg? Använd klistermärkena och märk upp pennorna själv.",
  },
  {
    q: "Kan jag använda en penna till flera saker?",
    a: "Vi rekommenderar det inte. Håll varje penna till ett ändamål och byt aldrig användning mellan pennorna.",
  },
  {
    q: "Hur mycket rymmer pennan?",
    a: "3 ml. Den får plats i fickan och ryms med god marginal inom handbagagets gräns på 100 ml för vätskor. Hur länge det räcker beror på vad du använder den till och hur ofta du sprayar.",
  },
  {
    q: "Passar den för munspray?",
    a: "Den klara pennan är optimerad för munspray. Håll den till det ändamålet, dela den inte med andra och följ anvisningarna för produkten du använder. Frågor om en specifik produkt ställer du till tillverkaren.",
  },
  {
    q: "När kan jag beställa?",
    a: "Vi öppnar snart. Gå med i listan så får du veta först, med lanseringsinformation via e-post.",
  },
  {
    q: "Kan vi få egna färger till vårt team eller event?",
    a: "Team- och eventpaket i egna färger är på gång. Lämna din e-post och nämn det, så hör vi av oss.",
  },
];
