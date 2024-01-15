import React from "react";
import { chipData } from "./types";
import ReactLogo from "../assets/react.svg";

type RecomendationProps = {
  name: string;
  data: chipData[];
  add: (key: number) => void;
};

const Recomendation: React.FunctionComponent<RecomendationProps> = ({
  name,
  data,
  add,
}) => {
  return (
    <div className="border shadow-sm border-[#d4f1f1] ">
      <ul>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
          )
          .map((item, idx) => (
            <li
              className="p-1 cursor-pointer flex "
              style={idx == 0 ? { backgroundColor: "#f1f1f1" } : {}}
              key={item.key}
              onClick={() => add(item.key)}
            >
              <div className=" pr-1 ">
                <img
                  src={ReactLogo}
                  alt="logo"
                  className="object-contain w-6 "
                />
              </div>
              <div className="flex justify-between space-x-4 ">
                <div>{item.name}</div>
                <div className="text-sm  flex justify-center items-center ">
                  {item.email}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Recomendation;
