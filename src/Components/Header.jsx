import React from "react";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-6" id="home">
      <Banner
        heading="Exploring the spectrum, one shade at a time"
        subheading="Dive into a vibrant world of endless possibilities with Tintopia, your ultimate destination for color discovery."
        btn="Discover"
      />
    </div>
  );
};

export default Header;
