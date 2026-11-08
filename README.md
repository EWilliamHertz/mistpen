# Huemist

Pre-launch website for **Huemist**: colour-coded, refillable 3 ml spray pens for perfume, hand sanitizer and mouth spray. 45 kr each, 3 for 100 kr.

Built with Next.js (App Router), Tailwind CSS 3 and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## What is on the page

- **Hero:** an animated pen that cycles through the four hues and sprays a mist burst (click the pen or "Spritz").
- **Colour code:** tabs for Scent (coral), Fresh (mint), Clean (sky) and Free (graphite), each with its use and fill guidance.
- **Uses:** perfume, hand sanitizer, mouth spray.
- **How it works**, **Pricing** (a set builder that applies the 3-for-100 kr rule), **House rules**, **FAQ** and a **waitlist** form.

Motion respects `prefers-reduced-motion` through `MotionConfig` in `components/Providers.tsx`.

## Where to edit things

| What | Where |
| --- | --- |
| Hues, colours, copy for each use, prices, FAQ | `lib/data.ts` |
| Pen illustration | `components/Pen.tsx` |
| Page order | `app/page.tsx` |
| Brand colours and fonts | `tailwind.config.ts` |

Prices live in `lib/data.ts` (`SINGLE_PRICE`, `BUNDLE_SIZE`, `BUNDLE_PRICE`) and the pricing maths is in `priceFor()`.

## Connect the waitlist

The form posts `{ "email": "..." }` as JSON to the URL in `NEXT_PUBLIC_WAITLIST_URL`. Copy `.env.example` to `.env.local` and set it to a Formspree, Basin or Getform endpoint (or your own). Until it is set, the form says sign-up is not live rather than pretending it saved the address.

## Deploy

Push to GitHub and import the repo in Vercel. Add `NEXT_PUBLIC_WAITLIST_URL` under the project's environment variables. Then connect your domain (after you have confirmed it is available and registered).

## Before you go live

1. Register the domain and confirm the name is clear in the EUIPO and PRV trademark databases.
2. Check the product copy against what the supplier actually ships: capacity, materials, and the mouth-pen test reports.
3. Keep product claims modest. The site describes empty containers and makes no germ-killing or health claims.
4. Add the legal pages a shop needs (terms, privacy policy, returns with the 14-day right of withdrawal, company details) before taking orders.
5. For checkout, the quickest route is Stripe Payment Links or Shopify. The "Reserve my set" button currently jumps to the waitlist.
6. The copy is in English. For the Swedish market, translate `lib/data.ts` and the component text.
