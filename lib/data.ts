export type HueId = "scent" | "fresh" | "clean" | "free";

export interface Hue {
  id: HueId;
  /** Colour name */
  name: string;
  /** The job this hue is for. Also printed on the pen label. */
  job: string;
  color: string;
  /** Soft tint used for backgrounds */
  soft: string;
  /** Readable text colour on top of `color` */
  ink: string;
  tagline: string;
  scenario: string;
  fillWith: string;
  notes: string[];
}

export const HUES: Hue[] = [
  {
    id: "scent",
    name: "Coral",
    job: "Scent",
    color: "#FF6B5E",
    soft: "#FFE3DF",
    ink: "#1B1B2F",
    tagline: "Your signature, in your pocket.",
    scenario:
      "Desk drawer, gym bag, evening out. A quick refresh without carrying the full bottle.",
    fillWith: "Your favourite perfume or body mist",
    notes: [
      "Decant from your own bottle",
      "Keep it out of direct sun and heat",
      "Spray on clothes or skin as you normally would",
    ],
  },
  {
    id: "fresh",
    name: "Mint",
    job: "Fresh",
    color: "#3DDBB0",
    soft: "#D6F7EC",
    ink: "#0E2A24",
    tagline: "A discreet spritz after coffee or lunch.",
    scenario:
      "Meetings, dates, long commutes. Keep it in your pocket and keep it for the mouth only.",
    fillWith: "A mouth spray made for use in the mouth",
    notes: [
      "Dedicated to mouth sprays only, never swapped",
      "Use only products made for oral use",
      "Personal item: do not share it",
    ],
  },
  {
    id: "clean",
    name: "Sky",
    job: "Clean",
    color: "#4DA3FF",
    soft: "#DCEBFF",
    ink: "#0B1F3A",
    tagline: "Clean hands within reach.",
    scenario:
      "Bus, market, gym, lunch break. One press and you are ready to carry on.",
    fillWith: "A hand sanitizer you trust",
    notes: [
      "Alcohol-based products are flammable: keep away from flames and heat",
      "Keep out of reach of small children",
      "Follow the instructions of the sanitizer you fill it with",
    ],
  },
  {
    id: "free",
    name: "Graphite",
    job: "Free",
    color: "#2B2D42",
    soft: "#E4E5EE",
    ink: "#FFFFFF",
    tagline: "Make the code your own.",
    scenario:
      "Label it yourself with the sticker sheet and give it a job nobody else has thought of.",
    fillWith: "A product that suits a fine mist, with your own label on it",
    notes: [
      "Use the sticker sheet to label what is inside",
      "Only fill it with liquids that are safe for how you will use them",
      "One pen, one liquid, always",
    ],
  },
];

export const SINGLE_PRICE = 45;
export const BUNDLE_SIZE = 3;
export const BUNDLE_PRICE = 100;

/** Price in kr (incl. VAT) for `n` pens: every 3 for 100 kr, the rest at 45 kr. */
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
    q: "Do the pens come filled?",
    a: "No. Every pen arrives empty and ready to fill, so you choose the perfume, hand sanitizer or mouth spray you already like. You can refill it as often as you want.",
  },
  {
    q: "Why colour-code?",
    a: "In a bag, one pen looks like any other. One hue per job means you never reach for the mouth spray when you meant to sanitize your hands. Prefer a single colour? Use the label stickers instead.",
  },
  {
    q: "Can I use one pen for more than one thing?",
    a: "We recommend not. Keep each pen for one liquid, and never move a pen between mouth use and anything else.",
  },
  {
    q: "How much does a pen hold?",
    a: "3 ml. That is pocket-sized and well inside the 100 ml carry-on liquids limit. How long it lasts depends on the liquid and how often you spray.",
  },
  {
    q: "Is it okay to use for a mouth spray?",
    a: "Use the Fresh pen only with products designed for use in the mouth, keep it dedicated to that, and follow the care sheet that comes with it. For questions about a specific product, ask its maker.",
  },
  {
    q: "When can I order?",
    a: "We are opening soon. Join the list and you will be first to know, with launch details sent by email.",
  },
  {
    q: "Can I get custom colours for my team or event?",
    a: "Team and event packs in your own colours are planned. Leave your email and mention it, and we will be in touch.",
  },
];
