const steps = [
  {
    title: "Curiosity",
    text: "I started by exploring how websites work behind the scenes, which quickly turned into building things myself.",
  },
  {
    title: "Frontend focus",
    text: "I gravitated to frontend, where logic meets design and small details shape the user experience.",
  },
  {
    title: "Backend and systems",
    text: "As projects grew I moved into APIs, databases and access control to understand the full picture.",
  },
  {
    title: "Building with purpose",
    text: "Today I build production platforms for compliance, government workflows and schools, and I mentor others on using them.",
  },
];

export default function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
        How I grew into the developer I am today
      </h2>
      <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
        {steps.map((s) => (
          <li key={s.title} className="relative">
            <span
              className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {s.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
