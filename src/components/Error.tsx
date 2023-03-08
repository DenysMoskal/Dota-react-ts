import React from "react";
import { useNavigate } from "react-router-dom";

interface errorType {
  error: string | null;
}

const Error: React.FC<errorType> = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center mt-6 text-[36px] text-red-300">{error}</div>
      <button
        className="flex m-auto border border-slate-200 px-6 py-2 bg-slate-200 hover:bg-slate-400 mt-2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default Error;
