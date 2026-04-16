const Footer = () => {
  return (
    <>
      {/* Contact */}
      <div id="contact" className="border-b border-gray-100 px-6 py-20">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
            Let's work<br />
            <em className="italic">together.</em>
          </h2>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:"
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              Email ↗
            </a>
            <a
              href="https://github.com/Ipelcaztreortega"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/irvin-pelcaztre-ortega/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-gray-400 tracking-tight">
            Built by Irvin Pelcaztre-Ortega — 2024
          </p>
          <p className="font-mono text-xs text-gray-400 tracking-tight">
            Georgia State University · CS · Data Science
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
