import ExperienceCard from "./ExperienceCard";
import { experience } from "../../data/experience";

export default function WorkExperience() {
  return (
    <section className="py-20 md:py-28">
      {/* Section Header */}
      <div className="text-center mb-14 md:mb-20 px-4">
        <h2 className="font-mono font-bold text-[clamp(2.2rem,4vw,3rem)]">
          Work Experience
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted max-w-xl mx-auto">
          Roles and projects where I contributed to building real, impactful
          products.
        </p>
      </div>

      {/* Experience Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {experience.map((item) => (
          <ExperienceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
