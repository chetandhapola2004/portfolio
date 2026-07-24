import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0D1117] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-6xl font-extrabold">
            Featured
            <span className="text-cyan-400">
              {" "}Projects
            </span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            A collection of projects that helped me
            improve my frontend, backend and problem
            solving skills.
          </p>

        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (

            <div
              key={project.id}
              className="
              bg-white/5
              backdrop-blur-xl
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              transition-all
              duration-300
              hover:-translate-y-3
              hover:border-cyan-400
              hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]
            "
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

             <div className="p-7 flex flex-col h-[420px]">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                      bg-cyan-400/10
                      text-cyan-400
                      px-4
                      py-2
                      rounded-full
                      text-sm
                    "
                    >
                      {item}
                    </span>

                  ))}

                </div>

               <div className="flex gap-4 mt-auto">

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex-1
                      bg-cyan-400
                      text-black
                      py-3
                      rounded-xl
                      text-center
                      font-semibold
                      hover:bg-cyan-300
                      transition
                    "
                    >
                      <FaExternalLinkAlt className="inline mr-2" />
                      Live
                    </a>

                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex-1
                    border
                    border-cyan-400
                    py-3
                    rounded-xl
                    text-center
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                  "
                  >
                    <FaGithub className="inline mr-2" />
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;