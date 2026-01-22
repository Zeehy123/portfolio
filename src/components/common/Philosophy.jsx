import { Code, Layers, RefreshCcw, Accessibility } from "lucide-react";

const principles = [
  {
    icon: Code,
    title: "Clarity First",
    text: "Clean UI and readable code matter just as much as features. If it’s hard to understand, it’s hard to maintain.",
  },
  {
    icon: Layers,
    title: "Details Matter",
    text: "Small interactions shape how users feel. Spacing, motion, and feedback are never accidental.",
  },
  {
    icon: RefreshCcw,
    title: "Build. Improve. Repeat.",
    text: "I iterate constantly, refining both design and logic to make products better over time.",
  },
  {
    icon: Accessibility,
    title: "Accessibility by Default",
    text: "Good products work for everyone. Accessibility isn’t an add-on — it’s part of the process.",
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono text-sm sm:text-lg mb-3">
            My Approach
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl leading-tight">
            How I think about building products
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl 
                p-6 sm:p-7 lg:p-8 transition-transform duration-300
                hover:-translate-y-2"
              >
                {/* Glow (hover only on larger screens) */}
                <div
                  className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl opacity-0 
                group-hover:opacity-100 transition hidden sm:block"
                />

                <div className="relative z-10">
                  <Icon className="text-primary mb-4 sm:mb-6" size={24} />

                  <h3 className="text-lg sm:text-xl text-primary font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
