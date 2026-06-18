import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/effects/GrainOverlay";
import ScrollProgress, { ScrollIndicator } from "@/components/effects/ScrollProgress";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollIndicator />
      <GrainOverlay />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Products />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
