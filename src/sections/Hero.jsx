import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import me from "../assets/images/zainabbb.jpg";
import useTypeWriter from "../hooks/TypeWriter";
import { socials } from "../data/socials";

const roles = [
  "frontend developer",
  "backend developer",
  "full-stack developer",
  "React Native developer",
];

const facts = [
  { value: "4+", label: "years building for the web" },
  { value: "5", label: "live products with real users" },
  { value: "1", label: "federal ministry as a client" },
];

export default function Hero() {
  const typed = useTypeWriter(roles);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 md:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-5 text-lg text-muted">
            Hi, I’m Zainab. I work as a{" "}
            <span className="font-semibold text-primaryLight">
              {typed}
              <span className="animate-pulse" aria-hidden="true">
                |
              </span>
            </span>
          </p>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05]">
            I build secure, easy-to-use software for real organisations.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            My strongest work is in React and interface design, backed by Django
            and PHP. I have shipped privacy compliance platforms and a workflow
            system used inside a Nigerian federal ministry.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/explore"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-primaryLight hover:text-background"
            >
              See my projects
            </Link>
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-7 py-3.5 font-semibold transition hover:border-primaryLight"
            >
              Email me <ArrowUpRight size={18} />
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-heading text-3xl font-bold">{f.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-t-[999px] rounded-b-3xl border border-primary/40"
              aria-hidden="true"
            />
            <img
              src={me}
              alt="Portrait of Zainab Yusuf"
              className="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl object-cover shadow-frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
