const techGroups = [
  {
    title: "Frontend",
    tools: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    note: "Focused on clean UI, performance, and accessible interfaces.",
  },
  {
    title: "Backend",
    tools: ["PHP", "REST APIs", "MySQL", "Django"],
    note: "Powering logic, data flow, and application stability.",
  },
  {
    title: "Tools & Workflow",
    tools: ["Git", "GitHub", "Figma", "VS Code"],
    note: "Supporting collaboration, version control, and fast iteration.",
  },
];

export default function AboutTech() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* LEFT TEXT */}
        <div>
          <p className="text-primary text-sm font-mono mb-3">Tech Stack</p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading leading-tight mb-5">
            The tools behind my work
          </h2>

          <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
            I choose technologies based on clarity, scalability, and long-term
            maintainability. Each tool I use supports building fast, accessible,
            and reliable digital experiences.
          </p>
        </div>

        {/* RIGHT STACK CARDS */}
        <div className="space-y-6 sm:space-y-8">
          {techGroups.map((group, index) => (
            <div
              key={index}
              className="
                relative rounded-2xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 
                p-5 sm:p-6 
                transition
                lg:hover:translate-x-2
              "
            >
              {/* Glow (desktop only feel) */}
              <div
                className="
                absolute inset-0 rounded-2xl 
                bg-gradient-to-br from-primary/20 to-purple-600/10 
                blur-xl opacity-0 
                lg:hover:opacity-100 transition
              "
              />

              <div className="relative">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {group.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted mb-4">
                  {group.note}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="
                        px-3 py-1 
                        text-[11px] sm:text-xs 
                        rounded-full 
                        bg-white/10 
                        border border-white/10 
                        text-white
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
