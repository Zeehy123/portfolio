import { Code, Layers, RefreshCcw, Accessibility } from "lucide-react";

const principles = [
  {
    icon: Code,
    title: "Clarity first",
    text: "Clean interfaces and readable code matter as much as features. If it’s hard to understand, it’s hard to maintain.",
  },
  {
    icon: Layers,
    title: "Details matter",
    text: "Spacing, motion and feedback shape how a product feels. None of it is accidental.",
  },
  {
    icon: RefreshCcw,
    title: "Build, improve, repeat",
    text: "I iterate on both design and logic until the product genuinely works for its users.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    text: "Good products work for everyone. Accessibility is part of the process, not an add-on.",
  },
];

export default function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
        How I think about building products
      </h2>
      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {principles.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-5">
            <Icon className="mt-1 shrink-0 text-primaryLight" size={26} />
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
