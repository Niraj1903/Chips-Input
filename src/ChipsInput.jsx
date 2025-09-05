import React, { useState } from "react";

const ChipsInput = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDeleteChip = (index) => {
    const chipsCopy = [...chips];
    chipsCopy.splice(index, 1);
    setChips(chipsCopy);
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
        {chips.map((item, index) => (
          <div key={index} className="flex">
            <h6 className="mr-2">{item}</h6>
            <button onClick={() => handleDeleteChip(index)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChipsInput;
