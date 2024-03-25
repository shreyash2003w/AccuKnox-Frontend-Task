import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between item font-medium">
          <div className="flex space-x-14 items-center ">
            <Link
              to="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary "
            >
              <span>
                Tin<span className="text-secondary">topia</span>
              </span>
            </Link>
          </div>

          {/*Search Button  */}
          <Link to="/search">
            <div className="space-x-12  md:flex items-center">
              <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-600 ">
                Search
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
