export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-16 items-center">
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-xs sm:text-sm text-center uppercase tracking-widest text-muted mb-4">
            About me
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6">
            I don’t just write code.
            <span className="block mt-3 text-primary text-xl sm:text-2xl font-normal">
              I design how people experience the web.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white font-mono leading-relaxed">
            I’m a frontend & backend developer who cares deeply about clarity,
            performance, and accessibility. I enjoy turning complex ideas into
            simple, intuitive digital experiences that feel good to use.
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end shrink-0">
          {/* Glow (smaller on mobile) */}
          <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-primary/60 to-purple-600/40 blur-3xl" />
          {/* Core */}{" "}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-purple-300 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.6)]">
            <span className="text-4xl sm:text-5xl font-heading text-white">
              Z
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
