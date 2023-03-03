import React from "react";
import { Link } from "react-router-dom";

const HeaderFavorite = () => {
  return (
    <>
      <h1 className=" text-[36px] text-center mt-2 text-slate-200">
        You didn't choose your favorite character
      </h1>
      <Link to="/">
        <div className="flex justify-center ">
          <button className="border-2 py-2 px-4 bg-slate-200 hover:bg-red-200 mt-1">
            Back to main
          </button>
        </div>
      </Link>
    </>
  );
};

export default HeaderFavorite;
