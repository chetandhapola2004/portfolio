import { useEffect, useState } from "react";
import profileImage from "../assets/wtf.png"; 

const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
];

function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setText("");
      setLetterIndex(0);
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearTimeout(pause);
  }, [letterIndex, wordIndex]);

  return (
    <section className="min-h-screen flex items-center pt-24 lg:pt-0 bg-[#0D1117] relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-md h-112 rounded-full bg-cyan-500/20 blur-[120px] -left-40 top-10"></div>

      <div className="absolute w-88 h-88 rounded-full bg-blue-600/20 blur-[120px] right-0 bottom-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}

        <div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Chetan Dhapola
          </h1>

          <h2 className="text-3xl lg:text-4xl mt-6 font-bold text-cyan-400 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

       <p className="text-gray-400 leading-8 mt-8 max-w-xl text-lg">
  Final-year Computer Science Engineering student passionate
  about building modern, scalable full-stack web applications
  using React, Node.js, Express, and MongoDB. I enjoy turning
  ideas into real-world products while continuously improving
  my problem-solving skills through Data Structures and Algorithms.
</p>

<div className="mt-10 flex flex-wrap gap-4">
  <a
    href="/resume.pdf"
    download
    className="inline-flex items-center rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:scale-105"
  >
    Download Resume
  </a>
</div>
        </div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl bg-[#161B22] border border-cyan-500/20 p-8 shadow-xl backdrop-blur-md">

            <div className="flex items-center gap-4 mb-6">
             <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400">
              <img
              src={profileImage}
               alt="Chetan Dhapola"
              className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Chetan Dhapola
                </h3>

                <p className="text-cyan-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 font-mono text-sm">

              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-green-400">
                  Open to Opportunities
                </span>
              </div>

              <div className="flex justify-between">
                <span>Stack</span>
                <span>MERN</span>
              </div>

              <div className="flex justify-between">
                <span>Learning</span>
                <span>DSA + Development</span>
              </div>

             

            </div>

            <div className="mt-8 rounded-xl bg-[#0D1117] p-4 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
            {`const developer = {
  name: "Chetan",
  role: "Full Stack Developer",
  stack: ["React","Node","MongoDB"],
  available: true
};`}
              </pre>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;