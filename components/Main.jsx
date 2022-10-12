/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai/';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Mian = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-600">
            LETS BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Ahmad Aziz</span>
          </h1>

          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 max-w-[70%] m-auto text-gray-600">
            I'm a front-end web developer specializing in building exceptional
            digital experience.currently I'm focused on responsive front-end web
            applications while learning backend technologies.
          </p>

          <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#5651e5] hover:text-white ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#5651e5] hover:text-white ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#5651e5] hover:text-white ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#5651e5] hover:text-white ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mian;
