import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
        >
          <X size={20} />
        </button>

        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[21/9] w-full bg-black object-cover object-left-top"
          />
        ) : (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="aspect-[21/9] w-full object-cover object-left-top"
          />
        )}

        <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-accent">
              {project.category}
            </p>
            <h2 className="mt-1 text-3xl font-bold">{project.title}</h2>

            <h3 className="mt-6 text-lg font-bold">The problem</h3>
            <p className="mt-1 leading-relaxed text-muted">
              {project.details.problem}
            </p>
            <h3 className="mt-5 text-lg font-bold">What I built</h3>
            <p className="mt-1 leading-relaxed text-muted">
              {project.details.solution}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold">Highlights</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-primary">
              {project.details.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg font-bold">Built with</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
