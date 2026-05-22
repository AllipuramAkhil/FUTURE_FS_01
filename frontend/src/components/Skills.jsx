function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST APIs",
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub",
    "Tailwind CSS"
  ];

  return (
    <section
      id="skills"
      className="px-10 py-24 bg-slate-900"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-5">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-cyan-500 px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;