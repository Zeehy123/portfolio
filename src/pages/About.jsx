import AboutCTA from "../components/common/AboutCTA";
import AboutHero from "../components/common/AboutHero";
import AboutTech from "../components/common/AboutTech";
import Journey from "../components/common/Journey";
import Philosophy from "../components/common/Philosophy";
import Navbar from "../components/layout/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Philosophy />
      <Journey />
      <AboutTech />
      <AboutCTA />
    </>
  );
}
