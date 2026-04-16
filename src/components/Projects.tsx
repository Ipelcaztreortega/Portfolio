const SectionLabel = ({ children }: { children: string }) => (
    <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs tracking-widest uppercase text-gray-400">{children}</span>
        <div className="flex-1 h-px bg-gray-100" />
    </div>
);

const projects = [
    {
        num: '01',
        name: 'Medical Claims ETL Pipeline',
        desc: 'Batch ETL pipeline ingesting and transforming synthetic medical claims with PySpark, loading validated records into PostgreSQL. Includes data quality checks for nulls, duplicates, and malformed entries. Raw and processed files staged in AWS S3; containerized with Docker.',
        tags: ['Python', 'PySpark', 'AWS S3', 'PostgreSQL', 'Docker'],
        link: 'https://github.com/Ipelcaztreortega',
        linkLabel: 'GitHub ↗',
    },
    {
        num: '02',
        name: 'Fintech Payment Management App',
        desc: 'Full-stack payment platform with a Spring Boot REST API and PostgreSQL backend. Supports account creation, payment processing, and transaction tracking with data consistency logic. Endpoints validated via Postman; frontend consumes data through Axios.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
        link: 'https://github.com/Ipelcaztreortega',
        linkLabel: 'GitHub ↗',
    },
    {
        num: '03',
        name: 'Hospital Management System',
        desc: 'Full-stack CRUD system managing appointments, doctors, and patients across a PostgreSQL schema with 8+ interconnected tables. Achieves 50ms average query response time while maintaining HIPAA compliance and data integrity.',
        tags: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
        link: 'https://github.com/Ipelcaztreortega',
        linkLabel: 'GitHub ↗',
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
                            <p className="font-mono text-[10px] text-gray-400 mb-3 tracking-tight">{p.num}</p>
                            <h3 className="font-serif text-2xl font-normal mb-3 leading-tight">{p.name}</h3>
                            <p className="text-xs text-gray-500 leading-loose max-w-lg mb-4">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                            {p.tags.map((tag) => (
                                <span
                                key={tag}
                                className="font-mono text-[9px] tracking-wider text-gray-400 px-2.5 py-1 border border-gray-100 rounded-sm"
                                >
                                {tag}
                                </span>
                            ))}
                            </div>
                        </div>
                        <div className="flex items-start pt-10">
                            <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] text-gray-400 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                            >
                            {p.linkLabel}
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
