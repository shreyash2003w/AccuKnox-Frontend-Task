import React from "react";
import banner from "../assets/images/banner.png";
import { Link } from "react-router-dom";

const Banner = ({ heading, subheading, btn }) => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* banner Image */}
          <div>
            <img src={banner} alt="" className="lg:h-[386px]" />
          </div>

          {/* Banner Content */}
          <div className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
            <div className="space-x-5 space-y-4">
              <Link to="/search">
                <button className="py-3 px-8 bg-secondary font-semibold text-white rounded-lg hover:bg-primary transition-all duration-300">
                  {btn}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
