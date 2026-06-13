export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
        Data Engineer
      </p>
      <h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-6 leading-tight">
        Yuma Fujita
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
        データ基盤の設計・構築と、アルゴリズム最適化が得意なエンジニア。
        <br />
        Snowflake / Go / Python / Next.js で、スケールするシステムを作ります。
      </p>
      <div className="flex items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          View Work
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 7h9M7.5 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://github.com/fbugblog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://note.com/fbug887"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
        >
          note
        </a>
      </div>
    </section>
  );
}
