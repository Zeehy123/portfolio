import { projectTypes } from "../../data/projects";

export default function ProjectFilter({ active, setActive }) {
  return (
    <div
      className="mx-auto mb-10 flex max-w-6xl flex-wrap gap-3 px-5 sm:px-8"
      role="group"
      aria-label="Filter projects by type"
    >
      {projectTypes.map((type) => (
        <button
          key={type}
          onClick={() => setActive(type)}
          aria-pressed={active === type}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            active === type
              ? "border-primary bg-primary text-white"
              : "border-border text-muted hover:border-primaryLight hover:text-white"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
