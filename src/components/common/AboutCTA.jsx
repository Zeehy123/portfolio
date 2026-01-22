export default function AboutCTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            w-[320px] h-[320px]
            sm:w-[420px] sm:h-[420px]
            lg:w-[600px] lg:h-[600px]
            rounded-full
            bg-gradient-to-br from-primary/30 to-purple-600/20
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading mb-5 sm:mb-6">
          Let’s build something meaningful
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
          I’m passionate about creating thoughtful digital experiences that
          solve real problems. If you’re working on something impactful or
          looking for a developer who values quality, accessibility, and growth,
          I’d love to connect.
        </p>

        <a
          href="/contact"
          className="
            inline-flex items-center justify-center
            px-7 sm:px-8 py-3 sm:py-4
            rounded-full
            bg-primary text-white font-medium
            transition
            hover:scale-105
            shadow-[0_0_40px_rgba(168,85,247,0.6)]
          "
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
