import AboutCTA from "../components/common/AboutCTA";
import AboutHero from "../components/common/AboutHero";
import Journey from "../components/common/Journey";
import Philosophy from "../components/common/Philosophy";
import Navbar from "../components/layout/Navbar";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Philosophy />
        <Journey />
        <Skills />
        <AboutCTA />
      </main>
      <Contact />
    </>
  );
}
