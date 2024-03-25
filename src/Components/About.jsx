import React from "react";
import aboutImg from "../assets/images/aboutImg.png";
import aboutImg2 from "../assets/images/aboutImg2.png";

const About = () => {
  return (
    <>
      <div className="text-center text-4xl text-secondary underline mt-10 font-bold">
        About Us
      </div>
      <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">

        {/* Part One */}

        <div className="flex flex-col md:flex-row justify between items-center gap-8">
          <div className="md:w-1/2">
            <img src={aboutImg} alt="" />
          </div>

          {/* About us Content */}
          <div className="md:w-2/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading normal">
              We have been improving our{" "}
              <span className="text-secondary">product for many years.</span>
            </h2>
            <p className="text-tertiary text-lg mb-7">
              {" "}
              At Tintopia, we're passionate about fostering creativity and
              enabling individuals from all walks of life to explore the
              fascinating world of color.
            </p>
          </div>
        </div>

        {/* Part Two */}

        <div className="flex flex-col md:flex-row-reverse justify between items-center gap-8">
          <div className="md:w-1/2">
            <img src={aboutImg2} alt="" />
          </div>

    
          <div className="md:w-2/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading normal">
              Our <span className="text-secondary"> Mission</span>
            </h2>
            <p className="text-tertiary text-lg mb-7">
              Our mission at Tintopia is simple: to inspire and empower
              creativity through color exploration. We believe that color has
              the power to evoke emotion, spark innovation, and transform ideas
              into reality. Our platform is designed to provide you with the
              tools, resources, and inspiration you need to unleash your
              imagination and express yourself through the vibrant language of
              color.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
