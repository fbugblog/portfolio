"use client";

const socials = [
  { label: "GitHub", href: "https://github.com/fbugblog", color: "#e8f0fe" },
  { label: "note", href: "https://note.com/fbug887", color: "#00ff9d" },
  { label: "LinkedIn", href: "https://linkedin.com/in/", color: "#00d4ff" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map(({ label, href, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono px-4 py-2 rounded-lg border border-[#1e2d42] text-[#7a9cc4] transition-all duration-200"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = color;
            el.style.borderColor = color;
            el.style.boxShadow = `0 0 12px ${color}30`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "";
            el.style.borderColor = "";
            el.style.boxShadow = "";
          }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
