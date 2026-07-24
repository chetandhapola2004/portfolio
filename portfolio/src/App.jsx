import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";


function App() {
  return (
    <div className="bg-[#0D1117] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Achievements/>
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 