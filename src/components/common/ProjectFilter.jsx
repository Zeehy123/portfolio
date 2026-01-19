export default function ProjectFilter({ active, setActive }) {
  const filters = ["All", "Frontend", "Full-Stack"];

  return (
    <div className="flex justify-center gap-4 mb-16">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-6 py-2 rounded-full text-sm border transition
            ${
              active === filter
                ? "bg-primary text-white border-primary"
                : "border-white/10 text-muted hover:border-primary/40"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
