function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#020617] z-50">

      {/* OUTER GLOW */}
      <div className="absolute w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* SPINNER */}
      <div className="relative">

        {/* OUTER RING */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* INNER RING */}
        <div className="absolute inset-2 w-12 h-12 border-4 border-cyan-400 border-b-transparent rounded-full animate-spinReverse"></div>

      </div>

      {/* TEXT */}
      <p className="mt-6 text-gray-400 text-sm tracking-wide animate-pulse">
        Loading...
      </p>

    </div>
  );
}

export default Loader;