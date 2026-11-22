import me from "../../assets/images/zainabbb.jpg";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            I don’t just write code. I shape how people use the web.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I’m a full-stack developer who cares about clarity, performance and
            accessibility. I started in frontend, grew into backend systems,
            and spent a year training civil servants to use software I helped
            build. That taught me to design for people who aren’t technical.
          </p>
        </div>
        <img
          src={me}
          alt="Zainab Yusuf"
          className="mx-auto aspect-square w-64 rounded-3xl object-cover shadow-frame lg:w-full"
        />
      </div>
    </section>
  );
}
