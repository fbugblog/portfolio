import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">05 / Contact</span>
        <div className="flex-1 divider-glow" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#e8f0fe] mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm text-[#7a9cc4] leading-relaxed mb-8">
            データ基盤・AI 統合に関するご相談やお問い合わせはお気軽にどうぞ。
          </p>
          <SocialLinks />
        </div>

        <form
          action="https://formspree.io/f/FORMSPREE_ID"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-[#3d5a7a] mb-1.5">
              <span className="text-[#00d4ff]">&gt;</span> メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 text-sm font-mono rounded-lg border border-[#1e2d42] bg-[#0d1421] text-[#e8f0fe] placeholder-[#3d5a7a] focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-[#3d5a7a] mb-1.5">
              <span className="text-[#00d4ff]">&gt;</span> メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2.5 text-sm font-mono rounded-lg border border-[#1e2d42] bg-[#0d1421] text-[#e8f0fe] placeholder-[#3d5a7a] focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all resize-none"
              placeholder="ご相談内容をどうぞ"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-[#00d4ff] text-[#080c14] text-sm font-mono font-semibold hover:bg-[#00eeff] transition-colors shadow-[0_0_20px_rgba(0,212,255,0.35)]"
          >
            送信する →
          </button>
        </form>
      </div>

      <div className="mt-20 pt-8 border-t border-[#1e2d42] text-center">
        <p className="text-xs font-mono text-[#3d5a7a]">
          © {new Date().getFullYear()} Yuma Fujita — Built with Next.js + Tailwind CSS
        </p>
      </div>
    </section>
  );
}
