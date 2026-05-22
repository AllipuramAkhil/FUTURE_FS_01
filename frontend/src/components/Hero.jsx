function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5">

      <h1 className="text-6xl md:text-7xl font-bold mb-5">
        Hi, I'm <span className="text-cyan-400">Akhil</span>
      </h1>

      <h2 className="text-3xl md:text-4xl text-cyan-300 font-semibold">
        Full Stack Developer
      </h2>

      <p className="max-w-2xl text-gray-300 text-lg mt-8 leading-8">
        Passionate about building scalable full stack web applications
        using React.js, Spring Boot, Java, and MySQL.
      </p>

      <div className="flex gap-5 mt-10">

        <a
          href="#projects"
          className="bg-cyan-500 px-6 py-3 rounded-xl text-lg hover:bg-cyan-600 transition"
        >
          View Projects
        </a>

        <a
          href="/Resume.pdf"
          download
          className="border border-cyan-400 px-6 py-3 rounded-xl text-lg hover:bg-cyan-500 transition"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Hero;