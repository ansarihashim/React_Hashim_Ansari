const Navbar = () => {
  return (
    <nav className="bg-[#2F6F4E] px-8 h-16 shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <svg
              className="w-5 h-5 text-[#2F6F4E]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-xl">Recipe Planner</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            Meals
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            List
          </a>
          <button className="bg-white hover:bg-green-50 text-[#2F6F4E] px-6 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors shadow-md ml-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
