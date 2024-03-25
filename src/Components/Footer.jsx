import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        {/* Footer AppName */}
        <div className="md:w-1/2 space-y-8">
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <span className="w-10 inline-block items-center text-white">
              Tintopia
            </span>
          </Link>
          <p className="md:w-1/2">
            We strive for excellence in everything we do, ensuring that Tintopia
            remains your go-to destination for all your color-related needs.
          </p>
        </div>

        {/* Footer Navigation */}

        <div className="md:w-1/2 flex flex-col md:flex-row justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <Link to="/" className="block hover:text-gray-300">
                Home
              </Link>
              <Link to="/" className="block hover:text-gray-300">
                About Us
              </Link>
              <Link to="/" className="block hover:text-gray-300">
                Services
              </Link>
              <Link to="/search" className="block hover:text-gray-300">
                Search
              </Link>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className="block hover:text-gray-300 cursor-pointer">
                +91 7058494893
              </p>
              <p className="block hover:text-gray-300 cursor-pointer">
                Email: shreyashwaghmare2003@gmail.com
              </p>
              <p className="block hover:text-gray-300 cursor-pointer">
                Maharashtra, India
              </p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between  my-8">
        <p>@ Tintopia 2022 - 2024.All rights reserved. </p>

        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/shreyash2003w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl cursor-pointer hover:translate-y-4 transition-all duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash-waghmare-bb4739258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-3xl cursor-pointer hover:translate-y-4 transition-all duration-300" />
          </a>

          <a
            href="https://github.com/shreyash2003w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-3xl cursor-pointer hover:translate-y-4 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyash-waghmare-bb4739258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl cursor-pointer hover:translate-y-4 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
