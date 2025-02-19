import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
      <div className="text-2xl font-semibold">Sidebar</div>
      <nav>
        <a
          href="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Home
        </a>
        <a
          href="/form"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Form
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
