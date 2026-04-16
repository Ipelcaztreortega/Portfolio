export const MainView = () => {
    const techChips = [
        'Python', 'Java · Spring Boot', 'TypeScript · React',
        'PostgreSQL', 'AWS · Docker', 'PySpark',
    ];

    return (
        <div
            id="main-view"
            className="min-h-screen flex items-center border-b border-gray-100 px-6"
        >
            <div className="max-w-3xl mx-auto w-full py-24">
                <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-6">
                    Graduate CS · Georgia Tech — Atlanta, GA
                </p>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-6">
                    Irvin<br />
                    Pelcaztre-<em className="italic">Ortega</em>
                </h1>
                <p className="text-sm md:text-base text-gray-500 max-w-lg leading-relaxed mb-8">
                    M.S. Computer Science student at Georgia Tech (Computing Systems, GPA 3.79),
                    full-stack developer focused on scalable web applications, ETL pipelines, and
                    distributed systems. Actively seeking Software Engineering internships and
                    full-time opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                    {techChips.map((chip) => (
                        <span
                        key={chip}
                        className="font-mono text-[10px] tracking-wider text-gray-400 px-2.5 py-1 border border-gray-100 rounded-sm"
                        >
                        {chip}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="../../public/irvin_ortega_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gray-700 transition-colors duration-200"
                    >
                        Resume ↗
                    </a>
                    <a
                        href="mailto:ipelcaztreortega@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gray-50 transition-colors duration-200"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/Ipelcaztreortega"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gray-50 transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/irvin-pelcaztre-ortega/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gray-50 transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};
