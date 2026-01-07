import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import WorkExperience from "../components/common/WorkExperience";
import TechStack from "../components/common/TechStack";
import Projects from "../sections/Project";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
