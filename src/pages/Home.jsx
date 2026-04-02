import profile from "../assets/profile.png";
import { useState, useEffect } from "react";

function Home() {

  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const savedFollowers = localStorage.getItem("followers");
    const followed = localStorage.getItem("followed");

    if (savedFollowers) setFollowers(parseInt(savedFollowers));
    if (followed === "true") setIsFollowing(true);
  }, []);

  const handleFollow = () => {
    if (isFollowing) return;

    const newCount = followers + 1;

    setFollowers(newCount);
    setIsFollowing(true);

    localStorage.setItem("followers", newCount);
    localStorage.setItem("followed", "true");
  };

  return (
    <div className="ml-0 md:ml-24 min-h-screen bg-gray-100 flex items-center px-4 md:px-6 py-10 relative overflow-hidden">

      {/* BG */}
      <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-0 md:left-10 animate-pulse"></div>
      <div className="absolute w-60 md:w-80 h-60 md:h-80 bg-purple-400 opacity-20 blur-3xl rounded-full bottom-10 right-0 md:right-10 animate-pulse"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="bg-white rounded-2xl shadow-md px-5 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-5 md:space-y-6 text-center md:text-left">

            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Hi, I'm <br />
              <span className="font-bold">Rajitha Lakshan</span>
            </h1>

            <h2 className="text-sm md:text-lg text-gray-600">
              Full Stack Developer 🚀
            </h2>

            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0">
              I build scalable web applications and AI-powered systems using modern technologies.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["React", "Node.js", "Flutter", ".NET", "SQL"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 text-xs md:text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* FOLLOW */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">

              <button
                onClick={handleFollow}
                disabled={isFollowing}
                className={`px-4 md:px-5 py-2 text-sm md:text-base rounded-md transition ${
                  isFollowing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isFollowing ? "Following ✓" : "Follow"}
              </button>

              <span className="text-gray-600 text-xs md:text-sm">
                {followers} Followers
              </span>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">

              <a href="/contact">
                <button className="w-full sm:w-auto bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800">
                  Contact Me
                </button>
              </a>

              <a href="/Rajitha-CV.pdf" download>
                <button className="w-full sm:w-auto border px-5 py-2 rounded-md hover:bg-gray-100">
                  Download CV
                </button>
              </a>

            </div>

            {/* STATS */}
            <div className="flex justify-center md:justify-start gap-6 pt-4 text-xs md:text-sm text-gray-600">

              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900">3+</h3>
                <p>Projects</p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900">10+</h3>
                <p>Technologies</p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900">2+</h3>
                <p>Years Learning</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative mt-6 md:mt-0">

            <div className="absolute w-56 md:w-72 h-56 md:h-72 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>

            <img
              src={profile}
              alt="profile"
              className="w-40 md:w-64 h-40 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;