type Project = {
  period: string;
  title: string;
  role: string;
  highlight: string;
  tags: string[];
  accentTag?: string;
};

const projects: Project[] = [
  {
    period: "2025.03 — 現在",
    title: "オンラインバンク データ統合分析基盤",
    role: "領域リーダー",
    highlight:
      "前例のない分析基盤導入を要件定義から完遂。Snowflake × Informatica × Azure で Data Mesh アーキテクチャを設計。プロジェクト予算の約8割を占めるメイン領域の責任者として、部室長・Snowflake社との合意形成を主導。",
    tags: ["Snowflake", "Azure", "Informatica", "Data Mesh", "AI/ML"],
    accentTag: "Snowflake",
  },
  {
    period: "2023.09 — 2024.09",
    title: "アパレル企業 データ基幹システム アジャイル改修",
    role: "開発・案件リーディング",
    highlight:
      "画像メタデータ集計処理に Segment Tree + 二分探索を導入し処理速度を 1/200 に短縮。Go × Next.js でフルスタック改修し、インフラコストも大幅削減。クライアントより名指しで案件担当を指名される。",
    tags: ["Go", "Next.js", "PostgreSQL", "GCP", "Segment Tree"],
    accentTag: "Go",
  },
  {
    period: "2024.10 — 2025.03",
    title: "卸売業者 物流システム刷新 DBチューニング",
    role: "開発メンバー",
    highlight:
      "PL/pgSQL による SQL 解析・統計情報整理とチューニング用サンドボックス環境を整備。テストデータ自動生成機能を実装し、検証サイクルを大幅短縮。",
    tags: ["PL/pgSQL", "Java", "Vue.js", "AWS"],
    accentTag: "PL/pgSQL",
  },
  {
    period: "2022.01 — 2023.04",
    title: "総務省マイナポイント 事務管理支援システム",
    role: "サブリーダー・後輩5名育成",
    highlight:
      "数千万件規模の Redshift バッチ処理、Queue 管理による非同期処理を実装。ベンダーとの仕様すり合わせ、後輩5名の育成を担当。",
    tags: ["Java", "AWS", "S3", "Oracle", "Agile"],
    accentTag: "AWS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">02 / Projects</span>
        <div className="flex-1 divider-glow" />
      </div>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <div key={i} className="tech-card rounded-2xl p-6 group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <p className="font-semibold text-[#e8f0fe] text-base mb-1 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {p.title}
                </p>
                <p className="text-xs font-mono text-[#3d5a7a]">{p.role}</p>
              </div>
              <p className="text-xs font-mono text-[#3d5a7a] whitespace-nowrap shrink-0">
                {p.period}
              </p>
            </div>
            <p className="text-sm text-[#7a9cc4] leading-relaxed mb-4">
              {p.highlight}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`tag-chip ${tag === p.accentTag ? "featured" : ""}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
