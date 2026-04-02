import profile from "../assets/profile.png";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools
} from "react-icons/fa";

function About() {

  const skillData = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500 text-lg md:text-xl" />,
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500 text-lg md:text-xl" />,
      skills: ["Node.js", "C#", ".NET"]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-yellow-500 text-lg md:text-xl" />,
      skills: ["SQL Server", "MySQL", "Firebase"]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-purple-500 text-lg md:text-xl" />,
      skills: ["Git", "VS Code", "Figma"]
    }
  ];

  return (
    <div className="ml-0 md:ml-24 bg-gray-100 min-h-screen py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-0 md:left-10 animate-pulse"></div>
      <div className="absolute w-60 md:w-80 h-60 md:h-80 bg-purple-400 opacity-20 blur-3xl rounded-full bottom-10 right-0 md:right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">

        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center relative">

            <div className="absolute w-56 md:w-72 h-56 md:h-72 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>
            <div className="absolute w-64 md:w-80 h-64 md:h-80 border border-gray-300 rounded-full animate-spinSlow"></div>

            <img
              src={profile}
              className="w-44 md:w-64 h-44 md:h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              About Me 👨‍💻
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I am a passionate Full Stack Developer focused on building modern web,
              mobile, and AI-powered applications.
            </p>

            <button className="bg-gray-900 text-white px-5 md:px-6 py-2 md:py-3 rounded-md hover:scale-105 transition">
              Contact Me
            </button>

          </div>

        </div>

        {/* SKILLS */}
        <div>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">
            Skills & Expertise 🚀
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            {skillData.map((category, i) => (
              <div
                key={i}
                className="bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-lg transition"
              >

                <div className="flex items-center gap-2 mb-3">
                  {category.icon}
                  <h3 className="text-xs md:text-sm font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-1">
                  {category.skills.map((skill, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-xs md:text-sm bg-gray-50 px-2 md:px-3 py-1 rounded-md"
                    >
                      {skill}
                    </p>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* EXPERIENCE */}
        <div>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 md:mb-10">
            Experience 💼
          </h2>

          <div className="border-l-2 border-gray-300 pl-5 md:pl-8 space-y-8 md:space-y-10">

            {[
              {
                title: "System Assistant & ISO Coordinator",
                company: "Kothmale Tea Factory",
                desc: "IT support, system maintenance, CCTV monitoring, ISO coordination."
              },
              {
                title: "Data Entry Operator",
                company: "Sri Lanka Telecom",
                desc: "Handled high-volume data entry tasks with accuracy."
              },
              {
                title: "Designer & Typist",
                company: "Kothmale Tech",
                desc: "Created documents and supported technical work."
              }
            ].map((item, i) => (

              <div key={i} className="relative">

                <div className="absolute -left-[22px] md:-left-[30px] top-2 w-3 md:w-4 h-3 md:h-4 bg-black rounded-full border-2 md:border-4 border-white"></div>

                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">

                  <h3 className="text-gray-900 font-semibold text-sm md:text-base">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xs md:text-sm">
                    {item.company}
                  </p>

                  <p className="text-gray-600 text-xs md:text-sm mt-2">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white p-6 md:p-10 rounded-2xl text-center">

          <h2 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-5">
            Ready to build something amazing? Let’s connect!
          </p>

          <button className="bg-white text-black px-5 md:px-6 py-2 md:py-3 rounded-md hover:scale-105 transition">
            Contact Me
          </button>

        </div>

      </div>

    </div>
  );
}

export default About;