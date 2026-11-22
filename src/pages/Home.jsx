import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import LiveWork from "../sections/LiveWork";
import Showcase from "../sections/Showcase";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LiveWork />
        <Showcase />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
