import Project from "../components/common/ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-32 px-40 space-y-10">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}
