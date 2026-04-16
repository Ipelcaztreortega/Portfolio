export const MainView = () => {
  return (
    <div
      id="main-view"
      className="min-h-screen flex items-center border-b border-gray-100 px-6"
    >
      <div className="max-w-3xl mx-auto w-full py-24">
        <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-6">
          Software Engineer — Atlanta, GA
        </p>
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-6">
          Irvin<br />
          Pelcaztre-<em className="italic">Ortega</em>
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-lg leading-relaxed mb-10">
          CS senior at Georgia State University, focused on Data Science. I build
          thoughtful software — from full-stack web apps to data-driven tools —
          and I'm actively seeking full-time Software Engineering roles.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="./IrvinPelcaztreOrtegaResumeMx2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gray-700 transition-colors duration-200"
          >
            View Resume ↗
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
