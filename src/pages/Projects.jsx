import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/slide1.png";
import project2 from "../assets/slide2.png";

function Projects() {

  const projects = [
    {
      title: "AI Accident Detection App",
      desc: "AI-powered mobile application to detect accidents and send real-time alerts.",
      image: project1,
      tech: ["Flutter", "AI", "Firebase"],
      github: "#",
      live: "#"
    },
    {
      title: "Tuition Management System",
      desc: "Student management system with payment tracking using C# and SQL Server.",
      image: project2,
      tech: ["C#", ".NET", "SQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="ml-0 md:ml-24 bg-gray-100 min-h-screen py-12 md:py-16 px-4 md:px-6">

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">

        {/* HERO */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            My Projects 🚀
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            A collection of projects showcasing my skills in web development,
            mobile apps, and AI-based solutions.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">

          <img
            src={project1}
            className="w-full h-56 md:h-full object-cover"
          />

          <div className="p-5 md:p-8 space-y-4 md:space-y-5">

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              AI Accident Detection App
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              AI-powered Flutter app that detects accidents and sends real-time alerts.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Flutter", "AI", "Firebase"].map((t, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 text-xs md:text-sm rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 md:pt-4">
              <a href="#" className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
                <FaGithub /> Code
              </a>
              <a href="#" className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm">
                <FaExternalLinkAlt /> Live
              </a>
            </div>

          </div>

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >

              <div className="h-44 md:h-52 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 md:p-6 space-y-3 md:space-y-4">

                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-2 py-1 text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <a href="#" className="text-center text-xs md:text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
                    Code
                  </a>
                  <a href="#" className="text-center text-xs md:text-sm bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
                    Live
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="bg-black text-white p-6 md:p-10 rounded-2xl text-center">

          <h2 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
            Want to see more projects? 🚀
          </h2>

          <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-5">
            Check out my GitHub for more amazing work.
          </p>

          <a href="https://github.com/920Rajitha">
            <button className="bg-white text-black px-5 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base hover:bg-gray-200 transition">
              View GitHub
            </button>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Projects;