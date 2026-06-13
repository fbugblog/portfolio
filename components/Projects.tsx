type Project = {
  period: string;
  title: string;
  role: string;
  highlight: string;
  tags: string[];
};

const projects: Project[] = [
  {
    period: "2025.03 — 現在",
    title: "オンラインバンク データ統合分析基盤",
    role: "領域リーダー",
    highlight:
      "前例のない分析基盤導入を要件定義から完遂。プロジェクト予算の約8割を占めるメイン領域の責任者として、部室長・Snowflake社との合意形成を主導。",
    tags: ["Snowflake", "Azure", "Informatica", "Data Mesh"],
  },
  {
    period: "2023.09 — 2024.09",
    title: "アパレル企業 データ基幹システム アジャイル改修",
    role: "開発・案件リーディング",
    highlight:
      "画像メタデータ集計処理にSegment Tree + 二分探索を導入し処理速度を1/200に短縮。インフラコスト削減に加え、クライアントより名指しで案件担当を指名される。",
    tags: ["Go", "Next.js", "PostgreSQL", "GCP", "Segment Tree"],
  },
  {
    period: "2024.10 — 2025.03",
    title: "卸売業者 物流システム刷新 DBチューニング",
    role: "開発メンバー",
    highlight:
      "PL/pgSQLによるSQL解析・統計情報整理と、チューニング用サンドボックス環境を整備。テストデータ自動生成機能を実装。",
    tags: ["PL/pgSQL", "Java", "Vue.js", "AWS"],
  },
  {
    period: "2022.01 — 2023.04",
    title: "総務省マイナポイント 事務管理支援システム",
    role: "サブリーダー・後輩5名育成",
    highlight:
      "数千万件規模のRedshiftバッチ処理、Queue管理による非同期処理を実装。ベンダーとの仕様すり合わせ、後輩5名の育成を担当。",
    tags: ["Java", "AWS Redshift", "S3", "Oracle", "Agile"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-10">
        Projects
      </h2>
      <div className="space-y-px border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 px-6 py-6 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 mb-0.5">
                  {p.title}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {p.role}
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {p.period}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {p.highlight}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
