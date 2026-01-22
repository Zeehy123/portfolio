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
    <section className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 sm:mb-24 max-w-2xl mx-auto text-center">
          <p className="text-primary text-sm font-mono mb-3">My Journey</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading leading-tight">
            How I grew into the developer I am today
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 h-full w-px 
          bg-gradient-to-b from-primary/60 via-primary/20 to-transparent 
          sm:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-14 sm:space-y-20">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start`}
              >
                {/* Content */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "sm:text-right sm:pr-20 sm:col-start-1"
                      : "sm:text-left sm:pl-20 sm:col-start-2"
                  }`}
                >
                  <div
                    className="inline-block rounded-2xl bg-white/5 backdrop-blur-xl 
                  border border-white/10 p-5 sm:p-6 max-w-md"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-4 sm:left-1/2 top-6 
                  -translate-x-1/2"
                >
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary 
                  shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
