import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FeatureAccordion from "@/components/FeatureAccordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureAccordion />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
