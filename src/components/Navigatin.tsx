import React from "react";
import { Link } from "react-router-dom";

import dotaIcon from "../image/dota-icon.png";

const Navigatin = () => {
  return (
    <div className="container mx-auto shadow">
      <nav className="flex justify-between items-center h-[60px] px-5  bg-slate-300 ">
        <img className="max-w-[50px] " src={dotaIcon} alt="Dota Icon" />

        <span className="text-lg">
          <Link className="mr-3 hover:text-red-500 hover:fz-22" to="/">
            Main
          </Link>
          <Link className="hover:text-red-500" to="/favorite">
            Favorite
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Navigatin;
