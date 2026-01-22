import { useState } from "react";

export default function ExploreProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden
        border border-white/10 bg-white/5 backdrop-blur-xl
        cursor-pointer transition hover:-translate-y-1
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* MEDIA */}
      <div
        className="
          relative
          h-52 sm:h-60 md:h-64
          overflow-hidden
        "
      >
        {/* Image (always visible on mobile) */}
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition duration-700
            group-hover:scale-110
            md:group-hover:opacity-0
          "
        />

        {/* Video (desktop hover only) */}
        {project.video && (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute inset-0
              w-full h-full object-cover
              opacity-0
              hidden md:block
              md:group-hover:opacity-100
              transition-opacity duration-500
            "
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">
        <p className="text-xs sm:text-sm text-primary mb-1">
          {project.category}
        </p>

        <h3 className="text-base sm:text-lg font-semibold mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
