type Article = {
  title: string;
  url: string;
  date: string;
};

async function fetchNoteArticles(): Promise<Article[]> {
  const NOTE_USERNAME = "fbug887";
  try {
    const res = await fetch(`https://note.com/${NOTE_USERNAME}/rss`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const text = await res.text();
    const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    return items.slice(0, 4).map((m) => {
      const content = m[1];
      // note RSS uses both CDATA and plain title
      const title =
        content.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
        content.match(/<title>([\s\S]*?)<\/title>/)?.[1] ??
        "";
      const url =
        content.match(/<link>([\s\S]*?)<\/link>/)?.[1] ??
        content.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1] ??
        "";
      const date = content.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "";
      const dateStr = date ? new Date(date).toLocaleDateString("ja-JP") : "";
      return { title: title.trim(), url: url.trim(), date: dateStr };
    }).filter((a) => a.title && a.url);
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
        <div className="tech-card rounded-xl p-8 text-center">
          <p className="text-sm font-mono text-[#3d5a7a] mb-4">
            記事はまだ公開されていません。
          </p>
          <a
            href="https://note.com/fbug887"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-[#1e2d42] text-[#7a9cc4] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all"
          >
            note.com/fbug887 →
          </a>
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
