import { useCallback, useState } from "react";
import { projects } from "../data/projects";
import ExploreHero from "../sections/ExploreHero";
import ProjectFilter from "../components/common/ProjectFilter";
import ProjectCard from "../components/common/ProjectCard";
import ProjectModal from "../components/common/ProjectModal";
import Navbar from "../components/layout/Navbar";
import Contact from "../sections/Contact";

export default function Explore() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <Navbar />
      <main>
        <ExploreHero />
        <ProjectFilter active={filter} setActive={setFilter} />
        <section className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 sm:px-8">
          {shown.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </section>
        <ProjectModal project={active} onClose={close} />
      </main>
      <Contact />
    </>
  );
}
