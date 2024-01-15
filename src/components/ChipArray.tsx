import React, { useState, ChangeEvent } from "react";
import { chipData } from "./types";
import Recomendation from "./Recomendation";
import { users } from "../dummyData";
import ReactLogo from "../assets/react.svg";

const ChipArray: React.FunctionComponent = () => {
  const [chips] = useState<chipData[]>(users); // unmodified
  const [filteredChips, setFilteredChips] = useState<chipData[]>(chips);
  const [selectedChips, setSelectedChips] = useState<chipData[]>([]);
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAdd = (key: number) => {
    const itemIndex = filteredChips.findIndex((item) => item.key === key);
    setSelectedChips((c) => [...c, filteredChips[itemIndex]]);

    const newFilteredChips = [
      ...filteredChips.slice(0, itemIndex),
      ...filteredChips.slice(itemIndex + 1),
    ];

    setFilteredChips(newFilteredChips);
  };

  const handleRemove = (key: number) => {
    const itemIndex = selectedChips.findIndex((item) => item.key === key);
    setFilteredChips((c) => [...c, selectedChips[itemIndex]]);
    const newSelectedChips = [
      ...selectedChips.slice(0, itemIndex),
      ...selectedChips.slice(itemIndex + 1),
    ];

    setSelectedChips(newSelectedChips);
  };

  return (
    <div className="flex justify-start">
      <div>
        <div className="flex flex-wrap mx-20 gap-y-6 ">
          {selectedChips.map((chip) => (
            <div
              key={chip.key}
              className="max-h-10 ml-8  bg-gray-200  flex text-slate-600 rounded-2xl pr-4 pl-1 py-2  "
            >
              <div className=" pr-1 ">
                <img
                  src={ReactLogo}
                  alt="logo"
                  className="object-contain w-6 "
                />
              </div>
              <div>{chip.name}</div>
              <div
                onClick={() => handleRemove(chip.key)}
                className="cursor-pointer ml-2 text-gray-600 hover:text-gray-950"
                title="delete"
              >
                X
              </div>
            </div>
          ))}
          <div className="ml-4">
            <input
              type="text"
              className="bg-zinc-100 px-1 w-full  border-b-2 border-blue-500 outline-none"
              onChange={handleChange}
              value={name}
            />

            <Recomendation name={name} data={filteredChips} add={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipArray;
