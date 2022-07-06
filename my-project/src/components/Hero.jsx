import React from "react";
import heroimg from "../images/hero.svg";
import heroavatar from "../images/mf-avatar.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 pt-20 px-6 w-screen">
      <h1 className="text-2xl font-bold mt-0 mb-6 lg:text-4xl">
        Designer, Front-end Developer & Mentor
      </h1>
      <h3 className="text-lg text-center font-extralight mb-8 lg:text-2xl">
        I design and code beautifully simple things, and I love what I do.
      </h3>
      <div className="flex flex-col items-center justify-center">
        <div className='py-10'>
          <img src={heroavatar} alt="" />
        </div>
        <div className='pt-12 px-2'>
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
