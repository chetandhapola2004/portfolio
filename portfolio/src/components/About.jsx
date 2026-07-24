import profile from "../assets/mee.jpeg";

function About() {
  return (
    <section id="about" className="bg-[#111827] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-6xl font-extrabold text-white">
              About <span className="text-cyan-400">Me.</span>
            </h2>

            <div className="w-24 h-1 rounded-full bg-cyan-400 mt-5"></div>

            <p className="text-gray-400 text-lg leading-9 mt-10">
              I'm a Final Year Computer Science Engineering student at
              <span className="text-white font-medium"> DIT University</span>{" "}
              with a strong passion for Full Stack Development. I enjoy
              building responsive web applications, solving Data Structures &
              Algorithms problems, and continuously learning modern
              technologies to become a better software engineer.
            </p>

            <p className="text-gray-400 text-lg leading-9 mt-6">
              My goal is to create scalable, user-friendly applications,
              improve my backend development skills, and gain real-world
              experience through impactful software projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Full Stack",
                "React",
                "Node.js",
                "Java",
                "MongoDB",
                "PostgreSQL",
                "DSA",
                "Git",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-medium transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative h-full">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 blur-3xl"></div>

            {/* Image Card */}
            <div
              className="
                relative
                h-full
                min-h-[650px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
            >
              <img
                src={profile}
                alt="Chetan Dhapola"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div
          className="
            bg-white/5
            backdrop-blur-xl
            rounded-3xl
            p-10
            mt-16
            border
            border-white/10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
          "
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Career Objective
          </h3>

          <p className="text-gray-400 text-lg leading-9">
            I aspire to become a skilled Full Stack Software Engineer by
            building scalable, efficient, and user-centric web applications. I
            enjoy learning new technologies, strengthening my problem-solving
            skills through Data Structures & Algorithms, and contributing to
            real-world software projects that create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;