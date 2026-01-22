import ExploreProjectCard from "../components/common/ExploreProjectCard";

export default function ExploreGrid({ projects, onOpen }) {
  return (
    <section
      className="
        max-w-6xl mx-auto px-4 sm:px-6
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        gap-6 sm:gap-8 lg:gap-12
      "
    >
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
