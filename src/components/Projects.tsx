const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs tracking-widest uppercase text-gray-400">
      {children}
    </span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

const projects = [
  {
    num: '01',
    name: 'Workout Chat',
    desc: 'A community web app where users share workout experiences through images and captions. Includes search, filtering by newest and oldest, and a social feed for fitness enthusiasts.',
    tags: ['React', 'JavaScript', 'Supabase', 'Styled Components'],
    link: 'https://ipelcaztreortega-workout-chat.netlify.app/',
    linkLabel: 'Visit ↗',
  },
  {
    num: '02',
    name: 'Data Visualization',
    desc: 'A collaborative analysis project that transforms CSV data into a rich set of charts and visual insights, surfacing clear findings from raw datasets.',
    tags: ['Python', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/Ipelcaztreortega/Data_Visualization_Project',
    linkLabel: 'GitHub ↗',
  },
  {
    num: '03',
    name: 'Portfolio',
    desc: 'The third iteration of my personal portfolio — designed and built from scratch to showcase my projects, skills, and growth as a developer.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: null,
    linkLabel: 'This site',
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="border-b border-gray-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <div>
          {projects.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 py-8 border-gray-100 ${
                i === 0 ? 'border-t border-b' : 'border-b'
              }`}
            >
              <div>
                <p className="font-mono text-xs text-gray-400 mb-3 tracking-tight">{p.num}</p>
                <h3 className="font-serif text-2xl font-normal mb-3 leading-tight">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-loose max-w-lg mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-gray-400 px-2.5 py-1 border border-gray-100 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start pt-10">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-gray-400 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                  >
                    {p.linkLabel}
                  </a>
                ) : (
                  <span className="font-mono text-xs text-gray-300 whitespace-nowrap">
                    {p.linkLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
