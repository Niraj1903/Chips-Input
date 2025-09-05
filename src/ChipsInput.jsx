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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-blue-700 tracking-wide">
            🌟 Chips Input
          </h1>

          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <input
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              type="text"
              value={input}
              placeholder="Type chips and press Enter"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {chips.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span className="mr-2">{item}</span>
                <button
                  onClick={() => handleDeleteChip(index)}
                  className="text-blue-800 hover:text-red-500 font-bold focus:outline-none"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipsInput;
