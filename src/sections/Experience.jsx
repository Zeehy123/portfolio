import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Where I’ve worked</h2>
        <p className="mt-4 text-lg text-muted">
          From a frontend internship to leading engineers on compliance
          software.
        </p>
      </div>

      <ol className="relative mt-12 space-y-10 border-l border-border pl-8">
        {experience.map((job) => (
          <li key={job.role + job.period} className="relative">
            <span
              className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold text-accent">{job.period}</p>
            <h3 className="mt-1 text-xl font-bold">{job.role}</h3>
            <p className="text-muted">
              {job.org}, {job.place}
            </p>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-primary">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
