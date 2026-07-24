import ditLogo from "../assets/dit.jpg";
import cwpsLogo from "../assets/cwps.png";
import kvLogo from "../assets/kv.jpg";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      logo: ditLogo,
      degree: "Bachelor of Technology",
      course: "Computer Science Engineering (Full Stack)",
      college: "DIT University",
      year: "2023 - 2027",
      marks: "CGPA: 7.57",
      location: "Dehradun, Uttarakhand",
      description:
        "Currently pursuing B.Tech in Computer Science Engineering with a specialization in Full Stack Development.",
    },

    {
      logo: cwpsLogo,
      degree: "Class XII",
      course: "CBSE Board • PCM",
      college: "Countrywide Public School",
      year: "2022",
      marks: "74.25%",
      location: "Bageshwar, Uttarakhand",
      description:
        "Completed Higher Secondary education with Physics, Chemistry and Mathematics.",
    },

    {
      logo: kvLogo,
      degree: "Class X",
      course: "CBSE Board",
      college: "Kendriya Vidyalaya",
      year: "2020",
      marks: "84%",
      location: "Bageshwar, Uttarakhand",
      description:
        "Completed Secondary education with a strong academic foundation.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0D1117] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Academic <span className="text-cyan-400">Journey</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My educational background and learning journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#161B22] rounded-2xl border border-gray-700 p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              {/* Logo */}

              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-6">

                <img
                  src={item.logo}
                  alt={item.college}
                  className="w-16 h-16 object-contain"
                />

              </div>

              {/* Degree */}

              <h3 className="text-2xl font-bold">
                {item.degree}
              </h3>

              <p className="text-cyan-400 mt-1">
                {item.course}
              </p>

              <h4 className="text-lg font-semibold mt-5">
                {item.college}
              </h4>

              {/* Details */}

              <div className="mt-5 space-y-3 text-gray-300">

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{item.year}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-cyan-400" />
                  <span>{item.marks}</span>
                </div>

              </div>

              {/* Description */}

              <p className="text-gray-400 mt-6 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;