export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">
      <div className="relative max-w-3xl w-full bg-free rounded-2xl p-8 border border-white/10">
        <button
          className="absolute top-4 right-4 text-muted hover:text-white"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-3xl font-heading mb-2">{project.title}</h2>
        <p className="text-lg  mb-6">{project.category}</p>
        <div className="space-y-6 text-muted text-sm">
          <div>
            <h4 className="text-white font-semibold mb-1">Problem</h4>
            <p>{project.details.problem}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Solution</h4>
            <p className="text-lg">{project.details.solution}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Highlights</h4>
            <ul className="list-disc ml-5 space-y-1 text-lg">
              {project.details.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
