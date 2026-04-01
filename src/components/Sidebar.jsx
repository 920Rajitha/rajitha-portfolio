import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaClipboardList,
  FaWhatsapp
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-24 
    bg-[#0f172a] flex flex-col items-center py-8 
    justify-between shadow-xl border-r border-white/10">

      {/* TOP */}
      <div className="flex flex-col items-center gap-10">

        {/* LOGO */}
        <div className="text-white text-2xl font-bold">
          R
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-8 text-xl">

          {[
            { to: "/", icon: <FaHome />, label: "Home" },
            { to: "/about", icon: <FaUser />, label: "About" },
            { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
            { to: "/posts", icon: <FaClipboardList />, label: "Posts" }
          ].map((item, i) => (

            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                `group relative flex items-center justify-center 
                p-3 rounded-xl transition duration-300
                ${isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"}`
              }
            >

              {({ isActive }) => (
                <>
                  {/* ICON */}
                  <div className="text-xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* TOOLTIP */}
                  <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-md 
                  opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md">
                    {item.label}
                  </span>

                  {/* ACTIVE LINE */}
                  <span
                    className={`absolute left-0 w-1 h-full bg-white 
                    ${isActive ? "scale-y-100" : "scale-y-0"} 
                    transition origin-top`}
                  ></span>
                </>
              )}

            </NavLink>

          ))}

        </nav>

      </div>

      {/* 🔥 WHATSAPP */}
      <div className="pb-6">

        <a
          href="https://wa.me/94750979908"
          target="_blank"
          className="group p-3 bg-green-500 rounded-xl hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp className="text-white text-xl group-hover:scale-110 transition" />
        </a>

      </div>

    </div>
  );
}

export default Sidebar;