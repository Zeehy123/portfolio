import { Link } from "react-router-dom";
import BrowserFrame from "../components/common/BrowserFrame";
import { projects } from "../data/projects";

export default function Showcase() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Projects in motion</h2>
        <p className="mt-4 text-lg text-muted">
          Short screen recordings of the apps I designed and built myself.
        </p>
      </div>

      <div className="mt-14 space-y-24">
        {featured.map((p, i) => (
          <article
            key={p.id}
            className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div
              className={`lg:col-span-7 ${
                i % 2 ? "lg:order-2" : ""
              }`}
            >
              <BrowserFrame project={p} />
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-accent">{p.category}</p>
              <h3 className="mt-2 text-3xl font-bold">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">
                {p.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <Link
          to="/explore"
          className="inline-flex rounded-full border border-border px-7 py-3.5 font-semibold transition hover:border-primaryLight"
        >
          See all {projects.length} projects
        </Link>
      </div>
    </section>
  );
}
