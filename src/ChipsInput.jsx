import React, { useState } from "react";

const ChipsInput = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-black">Chips-Input</h1>
        <input
          className="border border-black"
          type="text"
          value={input}
          placeholder="Type chips or press enter"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
};

export default ChipsInput;
