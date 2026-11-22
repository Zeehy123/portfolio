import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { socials } from "../data/socials";

export default function Contact() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-12 pt-20 sm:px-8">
      <div className="rounded-3xl bg-panel px-6 py-14 sm:px-12">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-5xl">
          Have a product to build or a team to join? Let’s talk.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          I’m open to full-stack roles and freelance projects. The fastest way
          to reach me is email.
        </p>
        <a
          href={`mailto:${socials.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-primaryLight hover:text-background"
        >
          <Mail size={18} /> {socials.email}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Zainab Yusuf. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <SiGithub size={22} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <SiLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
