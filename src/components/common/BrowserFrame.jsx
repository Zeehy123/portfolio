// A browser-window frame that plays a muted looping video, or shows an image.
export default function BrowserFrame({ project, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-panel shadow-frame ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-panelHi px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      {project.video ? (
        <video
          src={project.video}
          poster={project.image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} demo video`}
          className="aspect-[21/9] w-full object-cover object-left-top"
        />
      ) : (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-[21/9] w-full object-cover object-left-top"
        />
      )}
    </div>
  );
}
