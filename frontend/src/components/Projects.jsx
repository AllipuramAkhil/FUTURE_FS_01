function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Full stack personal portfolio using React, Spring Boot, and MySQL.",
    },

    {
      title: "Mini CRM",
      description:
        "Lead management system with CRUD operations and authentication.",
    },

    {
      title: "Gym Website",
      description:
        "Responsive business website for a local fitness center.",
    },
  ];

  return (
    <section
      id="projects"
      className="px-10 py-24"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
          >

            <h3 className="text-2xl font-bold mb-5">
              {project.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;