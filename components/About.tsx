const strengths = [
  {
    title: "データ基盤",
    desc: "Snowflakeを用いたデータ統合基盤の設計・要件定義。大規模データの集計・モデリング。",
  },
  {
    title: "アルゴリズム最適化",
    desc: "競プロ知識を実務に応用。Segment Tree・二分探索の導入で処理を1/200に短縮した実績。",
  },
  {
    title: "上流〜要件定義",
    desc: "部室長レベルへのヒアリング・提案プレゼン。プロジェクト予算の約8割を占める領域のリーディング経験。",
  },
];

const certs = [
  "AWS Solutions Architect Associate",
  "AWS Cloud Practitioner",
  "Oracle Certified Java Programmer Silver",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-10">
        About
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            シティコム・フューチャーの2社で6年のSE経験。ウォーターフォールからアジャイルまで、
            データエンジニアリングと上流工程の両方に携わってきました。
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            現在はフューチャー株式会社でオンラインバンクのデータ統合分析基盤構築に
            領域リーダーとして従事しています。
          </p>
          <div className="space-y-1">
            {certs.map((c) => (
              <p
                key={c}
                className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                {c}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {strengths.map(({ title, desc }) => (
            <div key={title}>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                {title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
