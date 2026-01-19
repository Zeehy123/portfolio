import { useState } from "react";

export default function ExploreProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* MEDIA */}
      <div className="relative h-64 overflow-hidden">
        {!hovered ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-xs mb-1">{project.category}</p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
