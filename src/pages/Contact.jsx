import { useState } from "react";
import { FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields ⚠️");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }

    } catch (error) {
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="ml-0 md:ml-24 bg-gray-100 min-h-screen py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-0 md:left-10 animate-pulse"></div>
      <div className="absolute w-60 md:w-72 h-60 md:h-72 bg-purple-400 opacity-20 blur-3xl rounded-full bottom-10 right-0 md:right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">

        {/* HERO */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Let’s Connect
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Got an idea, project, or opportunity? Let’s talk and build something amazing.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* FORM */}
          <div className="bg-white p-5 md:p-8 rounded-2xl shadow-md">

            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-5 md:mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm md:text-base"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm md:text-base"
              />

              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm md:text-base"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg text-sm md:text-base"
              >
                {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </button>

              {/* STATUS */}
              {status && (
                <p className="text-center text-xs md:text-sm mt-2 text-gray-700">
                  {status}
                </p>
              )}

            </form>

          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">

            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Let’s build something awesome
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              I’m always open to discussing new projects or ideas.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start pt-2 md:pt-4">

              <a href="https://github.com/920Rajitha"
                className="p-3 md:p-4 bg-white rounded-xl shadow-sm hover:scale-105 transition">
                <FaGithub className="text-lg md:text-xl" />
              </a>

              <a href="#"
                className="p-3 md:p-4 bg-white rounded-xl shadow-sm hover:scale-105 transition">
                <FaLinkedin className="text-blue-600 text-lg md:text-xl" />
              </a>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="bg-black text-white p-6 md:p-10 rounded-2xl text-center">

          <h2 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
            Ready to start your project?
          </h2>

          <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-5">
            Let’s collaborate and build something amazing.
          </p>

          <button className="bg-white text-black px-5 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base">
            Get Started
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;