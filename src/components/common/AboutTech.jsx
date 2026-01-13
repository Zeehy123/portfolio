const techGroups = [
  {
    title: "Frontend",
    tools: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    note: "Focused on clean UI, performance, and accessible interfaces.",
  },
  {
    title: "Backend",
    tools: ["PHP", "REST APIs", "MySQL", "Django", "MYSQL"],
    note: "Powering logic, data flow, and application stability.",
  },
  {
    title: "Tools & Workflow",
    tools: ["Git", "GitHub", "figma", "VS Code"],
    note: "Supporting collaboration, version control, and fast iteration.",
  },
];

export default function AboutTech() {
  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="text-primary text-sm mb-3">Tech Stack</p>
          <h2 className="text-4xl font-heading leading-tight mb-6">
            The tools behind my work
          </h2>
          <p className="text-muted max-w-md leading-relaxed">
            I choose technologies based on clarity, scalability, and long-term
            maintainability. Each tool I use supports building fast, accessible,
            and reliable digital experiences.
          </p>
        </div>

        {/* RIGHT STACK CARDS */}
        <div className="space-y-8">
          {techGroups.map((group, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:translate-x-2 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/10 blur-xl opacity-0 hover:opacity-100 transition" />

              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{group.title}</h3>

                <p className="text-xs text-muted mb-4">{group.note}</p>

                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-muted"
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
