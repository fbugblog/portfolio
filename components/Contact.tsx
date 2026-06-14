import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">05 / Contact</span>
        <div className="flex-1 divider-glow" />
      </div>

      <div className="max-w-lg">
        <h2 className="text-2xl font-bold text-[#e8f0fe] mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <SocialLinks />
      </div>

      <div className="mt-20 pt-8 border-t border-[#1e2d42] text-center">
        <p className="text-xs font-mono text-[#3d5a7a]">
          © {new Date().getFullYear()} Yuma Fujita — Built with Next.js + Tailwind CSS
        </p>
      </div>
    </section>
  );
}
