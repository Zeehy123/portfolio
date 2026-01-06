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
    <section className="pt-14">
      <div className="max-w-6xl mx-auto px-16 flex items-center gap-10">
        {/* Image */}
        <div className="relative shrink-0">
          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-84 h-84 bg-muted/30 rounded-full blur-3xl" />

          <img
            src={zainab}
            alt="zainab profile"
            className="relative w-64 rounded-full z-10"
          />
        </div>
        <div className="max-w-xl relative">
          <div className="relative inline-block mb-4">
            <svg
              className="absolute top-3.5 right-[150px] w-28 text-primary"
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
            <p className="font-mono mb-4 text-md">
              Hi, I’m {""}
              <span className="font-mini font-bold">Yusuf Zainab</span>
            </p>
          </div>

          <h1 className="font-heading text-6xl font-bold leading-tight">
            <span className="block text-3xl font-normal">
              Frontend developer who
            </span>

            <span className="block mt-2">
              Turns ideas into <br />
              reliable{"  "}
              <span className="text-primary">
                software...
                <svg
                  className="absolute top-[80px] right-[115px] w-60 h-60 scale-95 rotate-[-15deg]"
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
      <div className="px-16 mt-20 max-w-6xl mx-auto">
        <h1 className="font-heading text-5xl font-bold">
          I'm a {""}
          <span className="">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="mt-1 text-lg ">
          I build reliable, scalable, and user-focused software
        </p>
        <p className="mt-16 max-w-2xl font-mini font-bold leading-relaxed">
          {" "}
          A developer focused on building clean, performant, and accessible
          applications. I care deeply about structure, clarity, and the small
          details that turn good code into great products
        </p>
      </div>
    </section>
  );
}
