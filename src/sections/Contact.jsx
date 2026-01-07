import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
export default function Contact() {
  return (
    <section className="text-center py-20">
      <hr className="border-white/10" />
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="text-lg mb-6">
        I’m looking to collaborate with a cross-functional team focused on
        building accessible <br />
        and meaningful experiences. Have a project in mind? Let’s connect!
      </p>

      <a
        href="mailto:ibii.code@gmail.com"
        className="block text-primary font-medium mb-6 hover:underline"
      >
        zyusuf957@gmail.com
      </a>

      <div className="flex justify-center gap-6 mb-10">
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram className="w-6 h-6 text-white hover:text-primary transition" />
        </a>
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="w-6 h-6 text-white hover:text-primary transition" />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="w-6 h-6 text-white hover:text-primary transition" />
        </a>
      </div>
      <hr className="border-white/10" />
      <p className="text-xs mt-10">© 2025 Yusuf Zainab. All rights reserved.</p>
    </section>
  );
}
