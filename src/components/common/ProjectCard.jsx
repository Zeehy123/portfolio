export default function FeaturedProject({ project, reverse }) {
  return (
    <div className="relative mx-auto max-w-6xl py-10">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE */}
        <div
          className={`relative ${
            reverse ? "lg:col-start-2" : "lg:col-start-1"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-[1.02] blur-[0.5px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-primary/10" />
          </div>
        </div>

        {/* TEXT CARD (ABSOLUTE OVER IMAGE) */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-10
          ${reverse ? "right-[45%]" : "left-[45%]"}
          w-full max-w-xl`}
        >
          <div className="relative ml-20">
            <p className="text-xl text-primary mb-2">{project.tag}</p>

            <h3 className="text-2xl font-semibold leading-tight mb-6">
              {project.title}
            </h3>
          </div>

          {/* Glass Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-2xl" />

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 text-md leading-relaxed shadow-xl">
              {project.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
