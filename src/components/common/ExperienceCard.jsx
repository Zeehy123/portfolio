export default function ExperienceCard({ title, description, icon: Icon }) {
  return (
    <div
      className="relative rounded-2xl p-5 bg-gradient-to-br from-[#211c3aff] to-[#2d2457ff] 
  border border-muted/90 boder-top-white/60 transition-all duration-300 erase-out hover:-transition-y-2 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,1.00)]
  hover:border-primary/40"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl 
      opacity-0 transition-opacity duration-300 group-hover:opacity-100 
      bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15), transparent_60%)]"
      />
      <div className="flex items center gap-3">
        <div className="p-2 rounded-lg text-text inline-flex items-center justify-center">
          <Icon size={38} />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-4 mt-4">
          {title}
        </h3>
      </div>
      <p className="text-md text-muted leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center text-xs font-mono tracking-wide">
        LEARN MORE &rarr;
      </span>
    </div>
  );
}
