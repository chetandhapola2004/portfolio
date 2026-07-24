import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111827] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-6xl font-extrabold">
            Let's
            <span className="text-cyan-400"> Connect.</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-8">
            I'm currently looking for Full Stack Development
            opportunities. If you have an internship,
            freelance project, or just want to connect,
            feel free to reach out.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* Email */}

          <a
            href="mailto:chetandhapola44@gmail.com"
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            flex
            items-center
            gap-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >
            <div className="bg-cyan-400 p-4 rounded-full text-black">
              <FaEnvelope size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Email
              </h3>

              <p className="text-gray-400 mt-2">
                chetandhapola44@gmail.com
              </p>
            </div>

          </a>

          {/* Phone */}

          <a
            href="tel:+918273755766"
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            flex
            items-center
            gap-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >
            <div className="bg-cyan-400 p-4 rounded-full text-black">
              <FaPhoneAlt size={22} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Phone
              </h3>

              <p className="text-gray-400 mt-2">
                +91 8273755766
              </p>
            </div>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/chetandhapola2004"
            target="_blank"
            rel="noreferrer"
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            flex
            items-center
            gap-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >
            <div className="bg-cyan-400 p-4 rounded-full text-black">
              <FaGithub size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                GitHub
              </h3>

              <p className="text-gray-400 mt-2">
                github.com/chetandhapola2004
              </p>
            </div>

          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/chetandhapola"
            target="_blank"
            rel="noreferrer"
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            flex
            items-center
            gap-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >
            <div className="bg-cyan-400 p-4 rounded-full text-black">
              <FaLinkedin size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                LinkedIn
              </h3>

              <p className="text-gray-400 mt-2">
                linkedin.com/in/chetandhapola
              </p>
            </div>

          </a>

        </div>

        {/* Resume Button */}

        <div className="flex justify-center mt-16">

          <a
            href="/resume.pdf"
            download
            className="
            flex
            items-center
            gap-3
            bg-cyan-400
            text-black
            px-8
            py-4
            rounded-xl
            font-semibold
            text-lg
            hover:bg-cyan-300
            transition
            "
          >
            <FaFileDownload />

            Download Resume

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;