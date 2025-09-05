import React, { useState } from "react";

const ChipsInput = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };
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
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>

      <div>
        {chips.map((item) => (
          <h6 key={item}>{item}</h6>
        ))}
      </div>
    </>
  );
};

export default ChipsInput;
