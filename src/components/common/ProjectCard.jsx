export default function FeaturedProject({ project, reverse }) {
  return (
    <section className="relative mx-auto max-w-6xl py-20 px-4 sm:px-6">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* IMAGE */}
        <div
          className={`relative ${
            reverse ? "lg:col-start-2" : "lg:col-start-1"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-[260px] sm:h-[320px] md:h-[400px]
                lg:h-full
                object-cover
              "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-primary/10" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div
          className={`
            relative z-10
            w-full max-w-lg mx-auto
            lg:max-w-xl
            lg:absolute lg:top-1/2 lg:-translate-y-1/2
            ${reverse ? "lg:right-[45%]" : "lg:left-[45%]"}
          `}
        >
          {/* TAG + TITLE */}
          <div className="mb-6 text-center lg:text-left lg:ml-20">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">
              {project.tag}
            </p>

            <h3
              className="
                font-semibold
                text-[1.6rem]
                sm:text-2xl
                leading-tight
              "
            >
              {project.title}
            </h3>
          </div>

          {/* DESCRIPTION CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-2xl" />

            <div
              className="
                relative
                bg-white/10 backdrop-blur-2xl
                border border-white/15
                rounded-2xl
                p-5 sm:p-6
                text-sm sm:text-base
                leading-relaxed
                shadow-xl
              "
            >
              {project.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
