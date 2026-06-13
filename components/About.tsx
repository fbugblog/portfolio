const strengths = [
  {
    icon: "❄",
    title: "Snowflake / Data Platform",
    desc: "オンラインバンクのデータ統合基盤を領域リーダーとして設計・要件定義。Snowflake × Informatica × Azure で大規模 Data Mesh を構築中。",
    accent: "#00d4ff",
  },
  {
    icon: "🤖",
    title: "AI / LLM Engineering",
    desc: "データ基盤へのLLM統合・RAGパイプライン設計。Snowflake Cortex を活用した分析高度化を推進。Python × dbt × Vector DB でエンドツーエンドの AI データ基盤を構築。",
    accent: "#00ff9d",
  },
  {
    icon: "⚡",
    title: "Algorithm Optimization",
    desc: "競プロ知識を実務へ直結。Segment Tree + 二分探索の導入で処理速度 1/200 を達成。計算量解析から実装まで一手で担う。",
    accent: "#a78bfa",
  },
  {
    icon: "📐",
    title: "上流設計 / 要件定義",
    desc: "部室長・ベンダーへのヒアリング・提案プレゼン。プロジェクト予算の約8割を占める領域のリーディング経験。ビジネス課題をデータ設計に落とし込む。",
    accent: "#f59e0b",
  },
];

const certs = [
  "AWS Solutions Architect Associate",
  "AWS Cloud Practitioner",
  "Oracle Certified Java Programmer Silver",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">01 / About</span>
        <div className="flex-1 divider-glow" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[#e8f0fe] mb-6 leading-snug">
            Data × AI で<br />
            <span className="gradient-text">価値を生み出す</span><br />
            エンジニア
          </h2>
          <p className="text-sm text-[#7a9cc4] leading-relaxed mb-4">
            シティコム・フューチャーの2社で6年のSE経験。ウォーターフォールからアジャイルまで、
            データエンジニアリングと上流工程の両方を経験してきました。
          </p>
          <p className="text-sm text-[#7a9cc4] leading-relaxed mb-6">
            現在はフューチャー株式会社でオンラインバンクのデータ統合分析基盤構築に
            領域リーダーとして従事。Snowflake を核とした次世代データ基盤と
            AI 統合を主導しています。
          </p>
          <div className="space-y-1.5">
            {certs.map((c) => (
              <p key={c} className="text-xs font-mono text-[#3d5a7a] flex items-center gap-2">
                <span className="text-[#00d4ff]">✓</span>
                {c}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {strengths.map(({ icon, title, desc, accent }) => (
            <div
              key={title}
              className="tech-card rounded-xl p-4 group"
              style={{ "--accent-local": accent } as React.CSSProperties}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">{icon}</span>
                <div>
                  <p
                    className="text-sm font-semibold mb-1 transition-colors"
                    style={{ color: accent }}
                  >
                    {title}
                  </p>
                  <p className="text-xs text-[#7a9cc4] leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
