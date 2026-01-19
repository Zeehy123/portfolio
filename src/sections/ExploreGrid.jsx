import ExploreProjectCard from "../components/common/ExploreProjectCard";

export default function ExploreGrid({ projects, onOpen }) {
  return (
    <section className="hidden md:grid max-w-6xl mx-auto px-6 grid-cols-2 gap-12">
      {projects.map((project) => (
        <ExploreProjectCard
          key={project.id}
          project={project}
          onOpen={onOpen}
        />
      ))}
    </section>
  );
}
