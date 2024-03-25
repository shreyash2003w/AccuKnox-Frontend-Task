import React from "react";
import { convertToTitleCase } from "../../utils/ConvertToTitleCase";
const ColorCard = ({ color, value }) => {
  const formattedColor = convertToTitleCase(color);
  return (
    <div className="group flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-6 mx-2 my-4 sm:mx-4 sm:my-2 md:my-4 lg:mx-6 lg:my-2 xl:mx-8 xl:my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <div
        className={`w-32 h-32 bg-${color} rounded-full mb-4`}
        style={{ backgroundColor: value }}
      ></div>
      <p className="text-gray-800 text-lg font-semibold">{formattedColor}</p>
      <p className="text-gray-600 text-sm">Hex: {value}</p>
    </div>
  );
};

export default ColorCard;
