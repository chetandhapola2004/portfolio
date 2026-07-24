import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      ],
    },

    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "C", icon: <span className="text-blue-500 font-bold text-2xl">C</span> },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0D1117] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Technologies{" "}
            <span className="text-cyan-400">
              I Work With
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies, programming languages and tools I use for building modern applications.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-[#161B22] border border-gray-700 rounded-3xl p-6 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-[#0D1117] rounded-xl px-4 py-3"
                  >

                    <div className="text-3xl">
                      {skill.icon}
                    </div>

                    <span className="text-lg">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;