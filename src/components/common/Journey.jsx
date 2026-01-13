const journeySteps = [
  {
    title: "Curiosity Sparked",
    text: "I started by exploring how websites work behind the scenes, which quickly turned into a passion for building things myself.",
  },
  {
    title: "Frontend Focus",
    text: "I gravitated toward frontend development, where logic meets design and small details shape the user experience.",
  },
  {
    title: "Backend Expansion",
    text: "As projects grew, I expanded into backend systems, APIs, and data flow to better understand the full picture.",
  },
  {
    title: "Building with Purpose",
    text: "Today, I focus on building real-world applications while continuously refining my skills and approach.",
  },
];

export default function Journey() {
  return (
    <section className="py-32 relative px-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 max-w-xl">
          <p className="text-primary text-sm mb-3">My Journey</p>
          <h2 className="text-4xl font-mono leading-tight text-center">
            How I grew into the developer I am today
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {/* Steps */}
          <div className="space-y-24">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:text-right md:pr-20" : "md:pl-20"
                  }`}
                >
                  <div className="inline-block rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 max-w-md">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
