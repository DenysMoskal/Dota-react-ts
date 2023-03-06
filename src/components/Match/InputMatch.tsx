import React, { ChangeEvent } from "react";

interface InputMatchType {
  setId: (i: string) => void;
}

const InputMatch: React.FC<InputMatchType> = ({ setId }) => {
  const [inputValue, setInputValue] = React.useState("7045221911");

  return (
    <>
      <div className="flex m-auto justify-center items-center mt-[12px]">
        <input
          type="text"
          className="border-2 border-black px-3 py-1"
          placeholder="Id #00000000"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />

        <button
          onClick={() => setId(inputValue)}
          className="bg-slate-200 ml-[6px] h-[32px] px-4 hover:text-red-400"
        >
          Find
        </button>
      </div>
    </>
  );
};

export default InputMatch;
