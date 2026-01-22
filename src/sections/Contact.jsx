import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <section className="text-center py-20 px-4 sm:px-6">
      <hr className="border-white/10 mb-12" />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>

      {/* Description */}
      <p className="max-w-xl mx-auto text-sm sm:text-lg leading-relaxed mb-8 text-white/80">
        I’m looking to collaborate with cross-functional teams focused on
        building accessible and meaningful experiences. Have a project in mind?
        <span className="block mt-2">Let’s connect!</span>
      </p>

      {/* Email */}
      <a
        href="mailto:zyusuf957@gmail.com"
        className="inline-block text-primary font-medium mb-10 hover:underline break-all"
      >
        zyusuf957@gmail.com
      </a>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-12">
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiInstagram className="w-7 h-7 sm:w-6 sm:h-6 text-white hover:text-primary transition" />
        </a>

        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub className="w-7 h-7 sm:w-6 sm:h-6 text-white hover:text-primary transition" />
        </a>

        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="w-7 h-7 sm:w-6 sm:h-6 text-white hover:text-primary transition" />
        </a>
      </div>

      <hr className="border-white/10 mb-8" />

      {/* Footer */}
      <p className="text-xs text-white/50">
        © 2025 Yusuf Zainab. All rights reserved.
      </p>
    </section>
  );
}
