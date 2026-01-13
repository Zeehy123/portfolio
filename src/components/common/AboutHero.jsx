export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-32">
      {/* Ambient Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-3xl" />
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex gap-10 items-center">
        {/* TEXT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            About me
          </p>

          <h1 className="text-4xl lg:text-6xl font-heading leading-tight mb-6">
            I don’t just write code.
            <br />
            <span className="text-primary">
              I design how people experience the web.
            </span>
          </h1>

          <p className="text-lg text-white font-mono max-w-xl leading-relaxed">
            I’m a frontend & backend developer who cares deeply about clarity,
            performance, and accessibility. I enjoy turning complex ideas into
            simple, intuitive digital experiences that feel good to use.
          </p>
        </div>

        {/* VISUAL ANCHOR */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow */}
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/60 to-purple-600/40 blur-3xl" />

          {/* Core */}
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary to-purple-300 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.6)]">
            <span className="text-5xl font-heading text-white">Z</span>
          </div>
        </div>
      </div>
    </section>
  );
}
