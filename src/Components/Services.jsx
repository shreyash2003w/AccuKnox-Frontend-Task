import React from "react";
import { FaDatabase } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

const Services = () => {
  return (
    <div pb-6 >
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          {/* Top */}
          <h1 className="text-center text-2xl text-secondary underline mt-10 font-semibold ">Services</h1>
          <h1 className="text-primary text-4xl font-semibold p-3">What do we offer?</h1>
        </div>

         {/* Bottom */}
         <div className=" p-5 flex sm:p-0 flex-wrap justify-center ">
            {/* Card */}
            <div className="w-full md:w-3/12 my-3 md:my-10 shadow-xl rounded-lg p-5 flex flex-col gap-3 bg-white-400">
                <FaDatabase className="text-2xl text-secondary" />
                <h1 className="font-medium text-lg text-primary">Extensive Color Library</h1>
                <p className="text-gray-400">Tintopia offers a vast collection of colors, spanning a wide spectrum of hues, shades, and tones.</p>
            </div>

            <div className="w-full md:w-3/12 my-3 md:my-10 shadow-xl rounded-lg p-5 flex flex-col gap-3  bg-white-400 ">
                <FaSearchengin className="text-2xl text-secondary" />
                <h1 className="font-medium text-lg text-primary">Color Search</h1>
                <p className="text-gray-400">The color search feature allows users to easily find specific colors by entering keywords, hex codes,.</p>
            </div>

            <div className="w-full md:w-3/12 my-3 md:my-10 shadow-xl rounded-lg p-5 flex flex-col gap-3  bg-white-400 ">
                <FaUsers className="text-2xl text-secondary" />
                <h1 className="font-medium text-lg text-primary">Community Engagement</h1>
                <p className="text-gray-400">Tintopia fosters a vibrant community of color enthusiasts, artists, designers, and creators.</p>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Services;
