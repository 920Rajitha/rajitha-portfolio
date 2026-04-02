import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaClipboardList,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useState } from "react";

function Sidebar() {

  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUser />, label: "About" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/posts", icon: <FaClipboardList />, label: "Posts" }
  ];

  return (
    <>
      {/* 🔥 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#0f172a] text-white flex justify-between items-center px-5 py-4 z-50 shadow-md">

        <h1 className="text-lg font-bold">Rajitha</h1>

        <button onClick={() => setOpen(true)}>
          <FaBars className="text-xl" />
        </button>

      </div>

      {/* 🔥 MOBILE MENU */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#0f172a] text-white z-50 transform transition duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <h1 className="text-lg font-bold">Menu</h1>
          <button onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 text-lg">

          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-white"
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/94750979908"
            target="_blank"
            className="mt-6 bg-green-500 px-5 py-2 rounded-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>

      {/* 🔥 DESKTOP SIDEBAR */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-24 
      bg-[#0f172a] flex-col items-center py-8 justify-between shadow-xl border-r border-white/10">

        {/* TOP */}
        <div className="flex flex-col items-center gap-10">

          <div className="text-white text-2xl font-bold">R</div>

          <nav className="flex flex-col gap-8 text-xl">

            {navItems.map((item, i) => (

              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `group relative flex items-center justify-center 
                  p-3 rounded-xl transition
                  ${isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"}`
                }
              >

                {({ isActive }) => (
                  <>
                    <div>{item.icon}</div>

                    <span className="absolute left-16 bg-black text-white text-xs px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {item.label}
                    </span>

                    <span
                      className={`absolute left-0 w-1 h-full bg-white 
                      ${isActive ? "scale-y-100" : "scale-y-0"} transition`}
                    ></span>
                  </>
                )}

              </NavLink>

            ))}

          </nav>

        </div>

        {/* WhatsApp */}
       {/* WhatsApp */}
<div className="pb-6 flex justify-center items-center w-full">

  <a
    href="https://wa.me/94750979908"
    target="_blank"
    className="w-12 h-12 flex items-center justify-center 
    bg-green-500 rounded-xl hover:bg-green-600 transition 
    shadow-md hover:scale-110"
  >
    <FaWhatsapp className="text-white text-xl" />
  </a>

</div>

      </div>
    </>
  );
}

export default Sidebar;