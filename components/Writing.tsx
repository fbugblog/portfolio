type Article = {
  title: string;
  url: string;
  date: string;
};

async function fetchNoteArticles(): Promise<Article[]> {
  const NOTE_USERNAME = "fbug887";
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

  return (
    <section id="writing" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase">04 / Writing</span>
        <div className="flex-1 divider-glow" />
        <a
          href="https://note.com/fbug887"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#3d5a7a] hover:text-[#00ff9d] transition-colors"
        >
          note をすべて見る →
        </a>
      </div>

      {articles.length === 0 ? (
        <div className="tech-card rounded-xl p-6">
          <p className="text-sm font-mono text-[#3d5a7a]">
            <span className="text-[#00d4ff]">$</span> note.com/fbug887 — 記事を取得中...
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card flex items-start justify-between py-4 px-5 rounded-xl group"
            >
              <p className="text-sm text-[#7a9cc4] group-hover:text-[#e8f0fe] transition-colors leading-relaxed pr-8">
                {a.title}
              </p>
              <p className="text-xs font-mono text-[#3d5a7a] whitespace-nowrap mt-0.5">
                {a.date}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
