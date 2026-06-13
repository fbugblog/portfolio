export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
      {/* Radial glow behind heading */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.07) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative">
        <p className="text-xs font-mono text-[#00d4ff] mb-4 tracking-[0.25em] uppercase flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-[#00d4ff]" />
          Data Engineer · AI Infrastructure
        </p>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#e8f0fe] leading-none mb-6">
          Yuma
          <br />
          <span className="gradient-text">Fujita</span>
        </h1>

        <p className="text-base text-[#7a9cc4] max-w-lg leading-relaxed mb-3 font-mono">
          <span className="text-[#00ff9d]">$</span>{" "}
          Snowflake × AI でスケールするデータ基盤を設計・構築。
        </p>
        <p className="text-sm text-[#3d5a7a] max-w-xl leading-relaxed mb-10 font-mono ml-4">
          アルゴリズム最適化・LLM活用・上流要件定義まで一気通貫で担う
          Data ＋ AI エンジニア。
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono font-medium text-[#080c14] bg-[#00d4ff] hover:bg-[#00eeff] transition-colors shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://github.com/fbugblog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e2d42] text-sm font-mono text-[#7a9cc4] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://note.com/fbug887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e2d42] text-sm font-mono text-[#7a9cc4] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-200"
          >
            note
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-8 border-t border-[#1e2d42] flex gap-10 flex-wrap">
          {[
            { num: "6+", label: "Years Experience" },
            { num: "4", label: "Major Projects" },
            { num: "1/200", label: "Performance Gain" },
            { num: "AWS SAA", label: "Certified" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-[#00d4ff] glow-text font-mono">{num}</p>
              <p className="text-xs text-[#3d5a7a] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
