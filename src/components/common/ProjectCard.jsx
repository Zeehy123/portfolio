export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group overflow-hidden rounded-2xl border border-border bg-panel text-left transition hover:border-primaryLight"
      aria-label={`Open ${project.title} details`}
    >
      <div className="relative aspect-[16/8] overflow-hidden bg-panelHi">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-left-top"
        />
        {project.video && (
          <video
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover object-left-top opacity-0 transition-opacity duration-300 md:block md:group-hover:opacity-100"
            onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
            onMouseLeave={(e) => e.currentTarget.pause()}
          />
        )}
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-accent">{project.category}</p>
        <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
