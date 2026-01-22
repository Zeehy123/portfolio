import Project from "../components/common/ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="lg:py-32 lg:px-40 sm:py-10 sm:px-10 space-y-10">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}
