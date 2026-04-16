const SectionLabel = ({ children }: { children: string }) => (
    <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs tracking-widest uppercase text-gray-400">{children}</span>
        <div className="flex-1 h-px bg-gray-100" />
    </div>
);

const experiences = [
    {
        date: 'May 2024 — Jan 2025',
        company: 'Bimini AI Startup · Remote',
        role: 'Software Engineer Intern → Team Lead',
        bullets: [
        'Built a React Vite + Firebase analytics dashboard capturing 100+ monthly front-end events, visualized with Chart.js for physician product decisions.',
        'Designed Firestore event logging schemas and API integrations as a foundation for downstream analytics workflows.',
        'Promoted to Team Lead; coordinated Agile delivery across engineering and stakeholders for a Reddit-style discussion platform.',
        ],
    },
    {
        date: 'Aug 2023 — Dec 2023',
        company: 'CodePath · Remote',
        role: 'Web Development Tech Fellow',
        bullets: [
        'Led technical instruction for 24 students across 4 pods; conducted code reviews in JavaScript, HTML, and CSS.',
        'Facilitated pair programming and defined weekly checkpoint goals, unblocking students on real-time debugging challenges.',
        'Provided written feedback to a 300+ student cohort via Slack, reinforcing frontend best practices.',
        ],
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
                            className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 py-6 border-gray-100 ${
                                i === 0 ? 'border-t border-b' : 'border-b'
                            }`}
                        >
                            <div>
                                <span className="font-mono text-[10px] text-gray-400 tracking-tight leading-relaxed block">
                                    {exp.date}
                                </span>
                                <span className="font-mono text-[10px] text-gray-300 tracking-tight leading-relaxed block mt-1">
                                    {exp.company}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900 mb-3">{exp.role}</p>
                                <ul className="flex flex-col gap-2">
                                {exp.bullets.map((b, j) => (
                                    <li key={j} className="text-xs text-gray-500 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-200">
                                    {b}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
