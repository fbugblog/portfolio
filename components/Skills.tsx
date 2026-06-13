type Category = {
  label: string;
  color: string;
  items: { name: string; featured?: boolean }[];
};

const categories: Category[] = [
  {
    label: "Data & AI",
    color: "#00d4ff",
    items: [
      { name: "Snowflake", featured: true },
      { name: "Informatica", featured: true },
      { name: "dbt" },
      { name: "LLM / RAG", featured: true },
      { name: "Snowflake Cortex" },
      { name: "Vector DB" },
      { name: "Data Mesh" },
      { name: "DMBOK" },
    ],
  },
  {
    label: "Language",
    color: "#00ff9d",
    items: [
      { name: "Go", featured: true },
      { name: "Python", featured: true },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "SQL / PL/pgSQL", featured: true },
      { name: "JavaScript" },
    ],
  },
  {
    label: "Cloud / Infra",
    color: "#a78bfa",
    items: [
      { name: "AWS (SAA)", featured: true },
      { name: "Azure" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Linux" },
    ],
  },
  {
    label: "Frontend / Backend",
    color: "#f59e0b",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "Oracle" },
      { name: "Redshift" },
    ],
  },
  {
    label: "Algorithm",
    color: "#f472b6",
    items: [
      { name: "Segment Tree", featured: true },
      { name: "Binary Search" },
      { name: "競技プログラミング", featured: true },
      { name: "計算量解析" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">03 / Skills</span>
        <div className="flex-1 divider-glow" />
      </div>

      {/* Snowflake featured highlight */}
      <div
        className="tech-card rounded-2xl p-6 mb-8"
        style={{ borderColor: "rgba(0,212,255,0.3)", boxShadow: "0 0 30px rgba(0,212,255,0.08)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">❄</span>
          <p className="text-sm font-mono text-[#00d4ff] font-semibold tracking-wide">FEATURED · Snowflake</p>
          <span className="text-xs font-mono px-2 py-0.5 rounded border border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/05">
            業務実績あり
          </span>
        </div>
        <p className="text-sm text-[#7a9cc4] leading-relaxed">
          オンラインバンク向けデータ統合分析基盤を領域リーダーとして設計。
          Snowflake × Informatica × Azure で Data Mesh を構築。
          Snowflake Cortex を活用した AI 統合も推進中。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(({ label, color, items }) => (
          <div key={label} className="tech-card rounded-xl p-5">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color }}
            >
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map(({ name, featured }) => (
                <span
                  key={name}
                  className="tag-chip"
                  style={
                    featured
                      ? { borderColor: color, color, background: `${color}10` }
                      : undefined
                  }
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
