import { ArrowUpRight } from "lucide-react";
import { liveWork } from "../data/liveWork";

export default function LiveWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Products you can open today
        </h2>
        <p className="mt-4 text-lg text-muted">
          Recent client and employer work, live on the internet. Click any row
          to visit the site.
        </p>
      </div>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {liveWork.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-3 py-7 transition-colors hover:bg-panel/60 md:grid-cols-[1fr_1.4fr_auto] md:items-start md:gap-10 md:px-4"
            >
              <div>
                <h3 className="text-xl font-bold group-hover:text-primaryLight">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
                <p className="mt-0.5 text-sm text-accent">{item.period}</p>
              </div>
              <p className="leading-relaxed text-muted">{item.text}</p>
              <span
                className="flex items-center gap-1 text-sm font-semibold text-primaryLight md:justify-end"
                aria-label={`Visit ${item.name} (opens in a new tab)`}
              >
                Visit site <ArrowUpRight size={16} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
