# MistPen

Webbplats inför lansering för **MistPen**: färgkodade, påfyllningsbara spraypennor på 3 ml, optimerade för parfym, handsprit och munspray. 45 kr styck, 3 för 100 kr.

Byggd med Next.js (App Router), Tailwind CSS 3 och Framer Motion. Hela sidan är på svenska.

## Kör den

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produktionsbygge
npm run start    # kör produktionsbygget
```

## Vad som finns på sidan

- **Hero:** en animerad penna som bläddrar mellan de fyra färgerna och sprayar en dimma (klicka på pennan eller "Puffa").
- **Färgkoden:** flikar för Lila (doft), Klar (fräsch), Blå (ren) och Grå (fri), med användning och råd.
- **Användning:** parfym, handsprit, munspray.
- **Så funkar det**, **Pris** (en setbyggare som räknar ut 3 för 100 kr), **Husregler**, **FAQ** och en **väntelista**.

Animationerna respekterar `prefers-reduced-motion` via `MotionConfig` i `components/Providers.tsx`.

## Bilderna

Pennbilderna i `public/pens/` är frilagda ur produktbilden från Alibaba (blå, lila, klar och grå), som transparenta PNG-filer på 100 × 846 px. Varje färg pekar på sin bild via `image` i `lib/data.ts`. Gröna och röda pennan finns också i mappen men används inte.

Kontrollera att du har rätt att använda leverantörens produktbilder i din egen butik. Ersätt dem med egna produktfoton när du har prover.

## Var du ändrar saker

| Vad | Var |
| --- | --- |
| Färger, texter per användning, priser, FAQ | `lib/data.ts` |
| Pennbild | `components/Pen.tsx` och `public/pens/` |
| Sidans ordning | `app/page.tsx` |
| Varumärkesfärger och typsnitt | `tailwind.config.ts` |

Priserna ligger i `lib/data.ts` (`SINGLE_PRICE`, `BUNDLE_SIZE`, `BUNDLE_PRICE`) och prisberäkningen i `priceFor()`.

## Koppla väntelistan

Formuläret skickar `{ "email": "..." }` som JSON till adressen i `NEXT_PUBLIC_WAITLIST_URL`. Kopiera `.env.example` till `.env.local` och peka den mot en Formspree-, Basin- eller Getform-adress (eller din egen). Tills den är satt säger formuläret att anmälan inte är öppen, i stället för att låtsas spara adressen.

## Publicera

Pusha till GitHub och importera repot i Vercel. Lägg till `NEXT_PUBLIC_WAITLIST_URL` under projektets miljövariabler. Koppla sedan din domän.

## Innan du går live

1. Registrera domänen och kontrollera att namnet är ledigt hos EUIPO och PRV.
2. Jämför texterna med det leverantören faktiskt skickar: kapacitet, material och testrapporter.
3. Håll påståenden återhållsamma. Sidan beskriver tomma behållare som är optimerade för olika användning, och gör inga påståenden om att döda bakterier eller om hälsa.
4. Lägg till de juridiska sidor en butik behöver (villkor, integritetspolicy, retur med 14 dagars ångerrätt, företagsuppgifter) innan du tar emot beställningar.
5. För kassa är snabbaste vägen Stripe Payment Links eller Shopify. Knappen "Reservera mitt set" hoppar just nu till väntelistan.
