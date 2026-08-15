import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import ProductsSection from "../components/ProductsSection";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />

      <ProductsSection />
      <Footer />
    </main>

  );
}