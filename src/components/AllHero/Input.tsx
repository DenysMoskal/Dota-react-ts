import React from "react";

type InputProp = {
  setValue: (value: string) => void;
  value: string;
};

const Input: React.FC<InputProp> = ({ value, setValue }) => {
  return (
    <input
      className="border-2 border-black rounded-full h-[40px] items-center py-4 px-4"
      placeholder="Search hero"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
};

export default Input;
