import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gunmetal text-white py-3 ">
      <div className="logo">
        <span className="font-bold text-xl mx-8">Tickerr</span>
      </div>
      <ul className="flex gap-7 mx-8">
        <li className="cursor-pointer hover:font-semibold transition-all ease-in-out font-normal">
          Home
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all ease-in-out font-normal">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
