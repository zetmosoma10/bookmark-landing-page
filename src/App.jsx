import Footer from "./components/Footer";
import Extentions from "./sections/Extentions";
import FAQ from "./sections/FAQ";
import CallToAction from "./sections/CallToAction";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <main className="font-rubik">
        <Navbar />
        <Hero />
        <Features />
        <Extentions />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
