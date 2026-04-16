const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs tracking-widest uppercase text-gray-400">
      {children}
    </span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

export const About = () => {
  return (
    <>
      {/* About */}
      <div id="about" className="border-b border-gray-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-sm text-gray-500 leading-loose">
              Hello! I'm Irvin — a senior in the Computer Science program at Georgia State
              University with a focus on Data Science. I bring three years of hands-on coding
              experience across OOP languages, web development, and data tooling.
            </p>
            <p className="text-sm text-gray-500 leading-loose">
              I'm passionate about Software Engineering and eager to contribute my skills in an
              innovative, customer-focused organization. I'm looking for roles in Software
              Engineering, Full-Stack development, and Data Science where I can keep growing
              and make a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="border-b border-gray-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Skills</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                title: 'Languages',
                items: ['Python', 'JavaScript / TypeScript', 'Java', 'HTML & CSS', 'SQL (MySQL)', 'NoSQL (MongoDB)'],
              },
              {
                title: 'Libraries & Frameworks',
                items: ['React', 'Node.js & Express', 'Tailwind CSS', 'NumPy', 'Matplotlib'],
              },
              {
                title: 'Tools',
                items: ['Git & GitHub', 'Linux', 'Supabase', 'Firebase', 'Netlify', 'Tableau', 'MS Excel'],
              },
            ].map(({ title, items }) => (
              <div key={title}>
                <h4 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4 pb-3 border-b border-gray-100">
                  {title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-700">
                      {item}
                    </li>
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
