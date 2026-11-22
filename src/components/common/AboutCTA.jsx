import { socials } from "../../data/socials";

export default function AboutCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="rounded-3xl bg-panel px-6 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
          Let’s build something meaningful
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          If you’re working on something impactful and want a developer who
          values quality, accessibility and growth, I’d love to hear from you.
        </p>
        <a
          href={`mailto:${socials.email}`}
          className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-primaryLight hover:text-background"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
