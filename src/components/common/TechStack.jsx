import { techStack } from "../../data/techStack";

export default function TechStack() {
  const rings = [
    {
      id: 1,
      size: 420,
      radius: 205,
      border: "border-primary/20",
      animation: "animate-orbitSlow",
    },
    {
      id: 2,
      size: 340,
      radius: 170,
      border: "border-primary/15",
      animation: "animate-orbitMedium",
    },
    {
      id: 3,
      size: 260,
      radius: 130,
      border: "border-primary/10",
      animation: "animate-orbitFast",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-lg">
          I'm proficient in a variety{" "}
          <span className="text-primary">of technologies and tools</span>
        </p>
        <p className="mt-1 text-xs">
          that help me build efficient and scalable applications.
        </p>
      </div>

      <div className="relative mt-40 flex items-center justify-center group">
        {/* ================= ORBIT RINGS ================= */}
        {rings.map((ring) => (
          <div
            key={ring.id}
            className={`absolute w-[${ring.size}px] h-[${ring.size}px] rounded-full border ${ring.border} ${ring.animation}
            group-hover:[animation-play-state:paused]`}
          />
        ))}

        {/* ================= ICON ORBITS ================= */}
        {rings.map((ring) => {
          const items = techStack.filter((t) => t.ring === ring.id);

          return (
            <div
              key={ring.id}
              className={`absolute w-[${ring.size}px] h-[${ring.size}px] ${ring.animation}
              group-hover:[animation-play-state:paused]`}
            >
              {items.map((tech, i) => {
                const Icon = tech.icon;
                const angle = (360 / items.length) * i;

                return (
                  <div
                    key={tech.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${ring.radius}px)`,
                    }}
                  >
                    {/* Keep icon upright */}
                    <div
                      className="animate-float"
                      style={{ transform: `rotate(-${angle}deg)` }}
                    >
                      <div className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:border-primary transition">
                        {/* Glow trail */}
                        <div className="absolute inset-0 rounded-full blur-xl bg-primary/30 opacity-70" />

                        <Icon className="relative text-xl text-white/80 group-hover:text-primary transition" />
                      </div>

                      <span className="block text-center mt-2 text-[15px] text-white opacity-0 group-hover:opacity-100 transition">
                        {tech.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* ================= CENTER CORE ================= */}
        <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-purple-600/40 blur-3xl" />

          {/* Core */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.7)]">
            <span className="text-4xl font-heading text-white">Z</span>
          </div>
        </div>
      </div>
    </section>
  );
}
