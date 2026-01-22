import zainab from "../assets/images/zainabbb.jpg";
import useTypeWriter from "../hooks/TypeWriter";

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "React Native Developer",
  ];

  const typedText = useTypeWriter(roles);

  return (
    <section className="pt-20">
      {/* ================= TOP HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <div className="relative shrink-0 flex justify-center">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-muted/30 rounded-full blur-3xl hidden md:block" />

          <img
            src={zainab}
            alt="Yusuf profile"
            className="relative w-48 md:w-64 rounded-full z-10"
          />
        </div>

        {/* TEXT */}
        <div className="max-w-xl relative text-center md:text-left">
          {/* Greeting */}
          <div className="relative inline-block mb-4">
            {/* Arrow SVG (desktop only) */}
            <svg
              className="hidden md:block absolute top-4 right-[140px] w-28 text-primary"
              viewBox="0 0 200 100"
              fill="none"
            >
              <path
                d="M180 10 C120 10, 80,40,40,80"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M35 75 L40 85 L50 80"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <p className="font-mono text-md">
              Hi, I’m <span className="font-mini font-bold">Yusuf Zainab</span>
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold leading-tight text-[clamp(2.2rem,5vw,3.75rem)]">
            <span className="block text-xl md:text-3xl font-normal">
              Frontend developer who
            </span>

            <span className="block mt-2 relative">
              Turns ideas into <br />
              reliable{" "}
              <span className="text-primary relative inline-block">
                software...
                {/* Oval (desktop only) */}
                <svg
                  className="hidden md:block absolute top-[70px] right-[90px] w-56 rotate-[-15deg]"
                  viewBox="0 0 200 80"
                  fill="none"
                >
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="90"
                    ry="30"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="98"
                    cy="42"
                    rx="88"
                    ry="28"
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-4 font-semibold text-md">
            Because small details make or break real products.
          </p>

          <p className="mt-6 font-mono text-xs tracking-widest text-muted">
            I specialize in building clean, responsive, and accessible
            interfaces using React, Tailwind CSS, and modern JavaScript.
          </p>
        </div>
      </div>

      {/* ================= SECOND HERO ================= */}
      <div className="px-6 lg:px-16 mt-24 max-w-6xl mx-auto text-center md:text-left">
        <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)]">
          I'm a{" "}
          <span className="text-primary">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        <p className="mt-2 text-lg">
          I build reliable, scalable, and user-focused software
        </p>

        <p className="mt-10 max-w-2xl mx-auto md:mx-0 font-mini font-bold leading-relaxed">
          A developer focused on building clean, performant, and accessible
          applications. I care deeply about structure, clarity, and the small
          details that turn good code into great products.
        </p>
      </div>
    </section>
  );
}
