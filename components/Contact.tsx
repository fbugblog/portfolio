// お問い合わせはFormspree (https://formspree.io) を使う想定
// FORMSPREE_ID を差し替えてください（無料プランで月50件まで）

const socials = [
  { label: "GitHub", href: "https://github.com/fbugblog" },
  { label: "note", href: "https://note.com/fbug887" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "X (Twitter)", href: "https://x.com/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-10">
        Contact
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            副業・フリーランス案件のご相談、技術的なご質問などお気軽にどうぞ。
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Formspree フォーム — FORMSPREE_ID を設定してください */}
        <form
          action="https://formspree.io/f/FORMSPREE_ID"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-xs text-gray-400 dark:text-gray-500 mb-1.5"
            >
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs text-gray-400 dark:text-gray-500 mb-1.5"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600 transition resize-none"
              placeholder="ご相談内容をどうぞ"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            送信
          </button>
        </form>
      </div>
    </section>
  );
}
