import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import MarketCTA from "@/components/MarketCTA";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MarketCTA />
        <MapSection />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
