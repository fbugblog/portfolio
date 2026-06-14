import fs from "fs";
import path from "path";

type Article = {
  title: string;
  url: string;
  date: string;
  thumbnail: string;
};

async function getArticles(): Promise<Article[]> {
  // GitHub Actions でビルド時に生成される JSON を優先して読む
  const jsonPath = path.join(process.cwd(), "public", "note-articles.json");
  if (fs.existsSync(jsonPath)) {
    try {
      const data = fs.readFileSync(jsonPath, "utf8");
      return JSON.parse(data) as Article[];
    } catch {
      // fall through to RSS fetch
    }
  }

  // ローカル開発時は RSS を直接フェッチ
  try {
    const res = await fetch("https://note.com/fbug887/rss", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-build/1.0)" },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const text = await res.text();
    const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    return items.slice(0, 6).map((m) => {
      const c = m[1];
      const title =
        c.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
        c.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
      const url =
        c.match(/<link>([\s\S]*?)<\/link>/)?.[1] ??
        c.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1] ?? "";
      const date = c.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "";
      const thumbnail =
        c.match(/<media:thumbnail>(https?:\/\/[^<]+)<\/media:thumbnail>/)?.[1] ?? "";
      const dateStr = date ? new Date(date).toLocaleDateString("ja-JP") : "";
      return { title: title.trim(), url: url.trim(), date: dateStr, thumbnail };
    }).filter((a) => a.title && a.url);
  } catch {
    return [];
  }
}

export default async function Writing() {
  const articles = await getArticles();

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative w-full aspect-[16/9] bg-[#111927] overflow-hidden">
                {a.thumbnail ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={a.thumbnail}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl opacity-20">✍</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm font-medium text-[#e8f0fe] leading-snug mb-3 group-hover:text-[#00d4ff] transition-colors duration-200 line-clamp-2">
                  {a.title}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-xs font-mono text-[#3d5a7a]">{a.date}</p>
                  <span className="text-xs font-mono text-[#3d5a7a] group-hover:text-[#00d4ff] transition-colors">
                    読む →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
