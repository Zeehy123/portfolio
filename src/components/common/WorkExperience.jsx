import ExperienceCard from "./ExperienceCard";
import { experience } from "../../data/experience";

export default function WorkExperience() {
  return (
    <section className="py-24">
      <h2 className="text-center font-mono text-5xl font-bold mb-16">
        Work Experience
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
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
