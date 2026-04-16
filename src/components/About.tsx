const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs tracking-widest uppercase text-gray-400">{children}</span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'SQL', 'TypeScript / JavaScript', 'HTML5 & CSS'],
  },
  {
    title: 'Frameworks & Data',
    items: ['React · Next.js', 'Spring Boot · Express.js', 'FastAPI · Node.js', 'PySpark · Pandas · NumPy', 'Scikit-learn · Matplotlib'],
  },
  {
    title: 'Cloud & Infra',
    items: ['PostgreSQL · MySQL', 'Firebase · Supabase', 'AWS S3 · IAM', 'Docker · Kubernetes', 'Linux · Git · CI/CD'],
  },
];

export const About = () => {
  return (
    <>
      <div id="about" className="border-b border-gray-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-sm text-gray-500 leading-loose">
              I'm Irvin — a graduate CS student at Georgia Tech specializing in Computing Systems,
              with a B.S. in Computer Science (Data Science focus) from Georgia State University,
              where I graduated with a 4.02 GPA. I bring experience across the full stack: from
              building REST APIs and managing relational databases to shipping production-ready
              React frontends.
            </p>
            <p className="text-sm text-gray-500 leading-loose">
              My recent work spans healthcare data pipelines, fintech payment systems, and
              AI-assisted products. I care about clean architecture, data integrity, and building
              software that actually ships. I'm actively looking for Software Engineering
              internships and full-time roles where I can contribute across backend, data,
              and infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div id="skills" className="border-b border-gray-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Skills</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {skills.map(({ title, items }) => (
              <div key={title}>
                <h4 className="font-mono text-[10px] tracking-widest uppercase text-gray-400 mb-4 pb-3 border-b border-gray-100">
                  {title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
