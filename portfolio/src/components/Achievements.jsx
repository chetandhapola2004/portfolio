function Achievements() {
  const achievements = [
    {
      title: "180+ LeetCode Problems Solved",
      icon: "🏆",
      description:
        "Solved 180+ Data Structures & Algorithms problems covering Arrays, Strings, Binary Search, Linked Lists, Trees, Graphs, Dynamic Programming, and problem-solving techniques.",
      button: "View LeetCode",
      link: "https://leetcode.com/u/chetandhapola/",
    },
    {
      title: "Java (Basic) Certificate",
      icon: "☕",
      description:
        "Earned the HackerRank Java (Basic) certification, demonstrating proficiency in Java fundamentals, Object-Oriented Programming, core concepts, and problem-solving skills.",
      button: "View Certificate",
      link: "https://www.hackerrank.com/certificates/e504daa09106",
    },
    {
      title: "Frontend Developer (React) Certificate",
      icon: "🌐",
      description:"Successfully completed the HackerRank React (Basic) certification, demonstrating proficiency in React fundamentals, JSX, components, state management, and interactive UI development.",
      button: "View Certificate",
      link: "https://www.hackerrank.com/certificates/0d984a24c3ef",
    },
     {
      title: "Rest API (Intermediate) Certificate",
      icon: "🚀",
      description:
        "Successfully completed the HackerRank REST API (Intermediate) certification, covering RESTful APIs, HTTP methods, JSON handling, API integration, and request-response workflows.",
      button: "View Certificate",
      link: "https://www.hackerrank.com/certificates/bced02794668",
    },
    {
      title: "5+ Personal Projects",
      icon: "💻",
      description:
        "Built multiple real-world projects including MERN Stack applications, React apps, Java applications, REST APIs, and responsive websites using modern development practices.",
      button: "GitHub Profile",
      link: "https://github.com/chetandhapola2004",
    },
    {
      title: "Final Year CSE Student",
      icon: "🎓",
      description:
        "Pursuing a Bachelor of Technology in Computer Science Engineering at DIT University, maintaining a CGPA of 7.72 while building practical software development skills.",
      button: "About Me",
      link: "#about",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-[#111827] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-white">
            Achievements{" "}
            <span className="text-cyan-400">& Certifications</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            A collection of my certifications, coding achievements, and
            milestones that showcase my continuous learning and passion for
            software development.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              "
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-8">
                {item.description}
              </p>

              <a
                href={item.link}
                target={
                  item.link.startsWith("http") ? "_blank" : "_self"
                }
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  px-5
                  py-3
                  rounded-xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  hover:bg-cyan-300
                  transition-all
                  duration-300
                "
              >
                {item.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;