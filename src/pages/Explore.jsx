import { useState } from "react";
import { exploreProjects } from "../data/exploreProjects";
import ExploreHero from "../sections/ExploreHero";
import ProjectFilter from "../components/common/ProjectFilter";
import ExploreGrid from "../sections/ExploreGrid";
import ProjectModal from "../components/common/ProjectModal";
import Navbar from "../components/layout/Navbar";

export default function Explore() {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? exploreProjects
      : exploreProjects.filter((p) => p.type === filter);

  return (
    <main className="min-h-screen">
      <Navbar />
      <ExploreHero />

      <ProjectFilter active={filter} setActive={setFilter} />
      <ExploreGrid projects={filteredProjects} onOpen={setActiveProject} />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  );
}
