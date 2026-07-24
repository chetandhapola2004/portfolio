import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D1117]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          {"<"}
          <span className="text-cyan-400">Chetan</span>
          {" />"}
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        {/* Socials + Resume */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;