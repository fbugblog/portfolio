// NOTE_USERNAME を自分のnoteユーザー名に変更してください
// 記事一覧はビルド時にnote RSSから取得します（GitHub Actionsで定期更新可）

type Article = {
  title: string;
  url: string;
  date: string;
};

// ビルド時フェッチ用のサーバーコンポーネント
// note RSSは https://note.com/{username}/rss で取得可能
async function fetchNoteArticles(): Promise<Article[]> {
  const NOTE_USERNAME = "fbug887"; // ← 変更してください
  try {
    const res = await fetch(
      `https://note.com/${NOTE_USERNAME}/rss`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const text = await res.text();
    const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    return items.slice(0, 4).map((m) => {
      const content = m[1];
      const title = content.match(/<title><!\[CDATA\[(.*?)\]\]>/)?.[1] ?? "";
      const url = content.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
      const date = content.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
      return { title, url, date: new Date(date).toLocaleDateString("ja-JP") };
    });
  } catch {
    return [];
  }
}

export default async function Writing() {
  const articles = await fetchNoteArticles();
  const NOTE_USERNAME = "fbug887"; // ← 変更してください

  return (
    <section id="writing" className="py-28 px-6 max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
          Writing
        </h2>
        <a
          href={`https://note.com/${NOTE_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          note をすべて見る →
        </a>
      </div>

      {articles.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-500">
          noteユーザー名を設定すると記事が表示されます。
        </p>
      ) : (
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between py-4 group"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors leading-relaxed pr-8">
                {a.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap mt-0.5">
                {a.date}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
