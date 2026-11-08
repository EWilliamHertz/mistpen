import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ColourCode from "@/components/ColourCode";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Safety from "@/components/Safety";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ColourCode />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <Safety />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
