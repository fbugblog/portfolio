"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-[#1e2d42]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] group-hover:shadow-[0_0_14px_#00d4ff] transition-shadow" />
          <span className="text-sm font-mono font-medium text-[#e8f0fe] tracking-tight">
            YF<span className="text-[#00d4ff]">.dev</span>
          </span>
        </a>
        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs font-mono px-3 py-1.5 text-[#7a9cc4] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] rounded transition-all duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
