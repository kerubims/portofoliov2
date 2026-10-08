import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Testimonials />
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}
