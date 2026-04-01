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
      icon: <FaReact className="text-blue-500 text-xl" />,
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500 text-xl" />,
      skills: ["Node.js", "C#", ".NET"]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-yellow-500 text-xl" />,
      skills: ["SQL Server", "MySQL", "Firebase"]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-purple-500 text-xl" />,
      skills: ["Git", "VS Code", "Figma"]
    }
  ];

  return (
    <div className="ml-24 bg-gray-100 min-h-screen py-16 px-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND ANIMATION */}
      <div className="absolute w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-400 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        {/* 🔥 HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">

          {/* IMAGE WITH ROUND FRAME */}
          <div className="flex justify-center relative">

            {/* GLOW */}
            <div className="absolute w-72 h-72 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>

            {/* RING */}
            <div className="absolute w-80 h-80 border border-gray-300 rounded-full animate-spinSlow"></div>

            {/* IMAGE */}
            <img
              src={profile}
              className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10 hover:scale-105 transition duration-500"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              About Me 👨‍💻
            </h1>

            <p className="text-gray-600 leading-relaxed">
              I am a passionate Full Stack Developer focused on building modern web,
              mobile, and AI-powered applications.
            </p>

            <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-black transition hover:scale-105 shadow-md">
              Contact Me
            </button>
          </div>

        </div>

        {/* 🔥 SKILLS */}
        <div className="animate-fadeUp">

          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Skills & Expertise 🚀
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {skillData.map((category, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >

                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-sm font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-md"
                    >
                      {skill}
                    </p>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* 🔥 EXPERIENCE */}
   <div className="animate-fadeUp">

  <h2 className="text-2xl font-semibold text-gray-900 mb-10">
    Experience 💼
  </h2>

  <div className="relative border-l-2 border-gray-300 pl-8 space-y-10">

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

        {/* DOT */}
        <div className="absolute -left-[38px] top-2 w-4 h-4 bg-black rounded-full border-4 border-white shadow"></div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

          <h3 className="text-gray-900 font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-500 text-sm">
            {item.company}
          </p>

          <p className="text-gray-600 text-sm mt-2">
            {item.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

        {/* 🔥 CTA */}
        <div className="bg-gray-900 text-white p-10 rounded-2xl text-center animate-fadeIn shadow-lg">

          <h2 className="text-2xl font-semibold mb-3">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-300 mb-5">
            Ready to build something amazing? Let’s connect!
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition hover:scale-105">
            Contact Me
          </button>

        </div>

      </div>

    </div>
  );
}

export default About;