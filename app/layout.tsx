import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "MistPen: Välj din färg. Puffa dig fräsch.",
  description:
    "Färgkodade, påfyllningsbara 3 ml-spraypennor, optimerade för parfym, handsprit och munspray. 45 kr styck, 3 för 100 kr.",
};

export const viewport: Viewport = {
  themeColor: "#FBF7F2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="bg-cream font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
