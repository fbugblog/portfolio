const categories = [
  {
    label: "Language",
    items: ["Go", "Python", "Java", "TypeScript", "JavaScript", "SQL / PL/pgSQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "Vue.js", "React", "Tailwind CSS"],
  },
  {
    label: "Backend / Data",
    items: ["Snowflake", "PostgreSQL", "Oracle", "Redshift", "Informatica"],
  },
  {
    label: "Cloud / Infra",
    items: ["AWS (SAA)", "GCP", "Azure", "Linux", "Docker"],
  },
  {
    label: "Methodology",
    items: ["Agile", "Waterfall", "Data Mesh", "DMBOK", "Algorithm Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-10">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ label, items }) => (
          <div key={label}>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
