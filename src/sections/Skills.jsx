import { skills } from "../data/experience";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="text-3xl font-bold sm:text-4xl">What I work with</h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="text-lg font-bold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-lg bg-panel px-3 py-1.5 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
