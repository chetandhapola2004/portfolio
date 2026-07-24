import miniPostImg from "../assets/projects/mini-post.png";
import employeeImg from "../assets/projects/employy.png";
import weatherImg from "../assets/projects/weather.png";
import airesume from "../assets/projects/ai_resume.png"

const projects = [
  {
    id: 1,
    title: "Full Stack Gen AI Job Preparation Web Application.",
    image: airesume,
    description:
      "This application acts as an AI-powered career assistant that analyzes user resumes against specific job descriptions to detect skill gaps.",

    tech: [
      "React",
      "Express",
      "MongoDB",
      "Google's Gemini API",
      "Puppeteer"
    ],
  },
  {
    id: 2,
    title: "Mini Post App",
    image: miniPostImg,
    description:
      "A full-stack MERN social media application where users can create posts, upload images, and browse a public feed.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "ImageKit",
    ],

    github:
      "https://github.com/chetandhapola2004/mini-post-app",

    live:
      "https://chetan-mini-post-app.vercel.app",
  },

  {
    id: 3,
    title: "Employee Management",

    image: employeeImg,

    description:
      "Java desktop project demonstrating Object Oriented Programming concepts like inheritance, encapsulation and employee record management.",

    tech: [
      "Java",
      "OOP",
      "Collections",
    ],

    github:
      "https://github.com/chetandhapola2004/Employee-Management-System",

    live: "",
  },

  {
    id: 4,

    title: "Weather Forecast App",

    image: weatherImg,

    description:
      "Responsive weather application using React and a public Weather API with dynamic city search.",

    tech: [
      "React",
      "Weather API",
      "JavaScript",
    ],

    github:
      "https://github.com/chetandhapola2004/Weather-forcsast",

    live: "",
  },
];

export default projects;