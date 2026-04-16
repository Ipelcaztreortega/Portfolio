const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs tracking-widest uppercase text-gray-400">
      {children}
    </span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

const experiences = [
  {
    date: 'June 2024 — Present',
    role: 'Software Engineer Intern',
    company: 'Eye Space',
  },
  {
    date: 'July 2023 — Aug 2024',
    role: 'Tech Fellow — Web Development',
    company: 'CodePath',
  },
];

export const Experience = () => {
  return (
    <div id="experience" className="border-b border-gray-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <div>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 py-6 border-gray-100 ${
                i === 0 ? 'border-t border-b' : 'border-b'
              }`}
            >
              <span className="font-mono text-xs text-gray-400 tracking-tight pt-0.5">
                {exp.date}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-400">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
