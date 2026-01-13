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
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 max-w-xl">
          <p className="text-primary font-mono text-lg mb-3 text-center">
            My Approach
          </p>
          <h2 className="text-4xl font-heading leading-tight text-center">
            How I think about building products
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <Icon className="text-primary mb-6" size={28} />

                  <h3 className="text-xl text-primary font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text- text-white leading-relaxed">
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
