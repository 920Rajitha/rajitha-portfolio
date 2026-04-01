import profile from "../assets/profile.png";
import { useState, useEffect } from "react";

function Home() {

  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  // LOAD DATA
  useEffect(() => {
    const savedFollowers = localStorage.getItem("followers");
    const followed = localStorage.getItem("followed");

    if (savedFollowers) setFollowers(parseInt(savedFollowers));
    if (followed === "true") setIsFollowing(true);
  }, []);

  // FOLLOW FUNCTION
  const handleFollow = () => {
    if (isFollowing) return;

    const newCount = followers + 1;

    setFollowers(newCount);
    setIsFollowing(true);

    localStorage.setItem("followers", newCount);
    localStorage.setItem("followed", "true");
  };

  return (
    <div className="ml-24 min-h-screen bg-gray-100 flex items-center px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-400 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="bg-white rounded-2xl shadow-md px-8 py-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <h1 className="text-4xl font-semibold text-gray-900">
              Hi, I'm <br />
              <span className="font-bold">Rajitha Lakshan</span>
            </h1>

            <h2 className="text-lg text-gray-600">
              Full Stack Developer 🚀
            </h2>

            <p className="text-gray-500 max-w-md">
              I build scalable web applications and AI-powered systems using modern technologies.
            </p>
<div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Flutter", ".NET", "SQL"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-md hover:bg-gray-200 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* FOLLOW BUTTON */}
            <div className="flex items-center gap-4 pt-3">

              <button
                onClick={handleFollow}
                disabled={isFollowing}
                className={`px-5 py-2 rounded-md transition ${
                  isFollowing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isFollowing ? "Following ✓" : "Follow"}
              </button>

              <span className="text-gray-600 text-sm">
                {followers} Followers
              </span>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-2">

              <a href="/contact">
                <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800">
                  Contact Me
                </button>
              </a>

              <a href="/Rajitha-CV.pdf" download>
                <button className="border px-5 py-2 rounded-md hover:bg-gray-100">
                  Download CV
                </button>
              </a>

            </div>

            {/* STATS */}
            <div className="flex gap-6 pt-4 text-sm text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-900">3+</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">10+</h3>
                <p>Technologies</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">2+</h3>
                <p>Years Learning</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">

            <div className="absolute w-72 h-72 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>

            <img
              src={profile}
              alt="profile"
              className="w-64 h-64 rounded-full border-4 border-white shadow-xl"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;