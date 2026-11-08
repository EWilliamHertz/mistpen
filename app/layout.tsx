import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "MistPen: Pick your hue. Spritz your day.",
  description:
    "Colour-coded 3 ml refillable spray pens for perfume, hand sanitizer and mouth spray. 45 kr each, 3 for 100 kr.",
};

export const viewport: Viewport = {
  themeColor: "#FBF7F2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
