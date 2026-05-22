function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 sticky top-0">
      <h1 className="text-2xl font-bold text-cyan-400">
        Akhil Portfolio
      </h1>

      <ul className="flex gap-6 text-lg">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;