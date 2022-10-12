import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">who I Am</h2>
          <p className="py-2 text-gray-600">Passionate Web developer</p>
          <p className="py-2 text-gray-600">
            My name is Ahmad Aziz and I am 23 years old.I started my journey as
            front-end web developer 3 and half years ago when I was doing my
            bachelours in Computer Science.I feel the web field interesting and
            decided to make career in the web.From there I started exploring
            about it and started learning about it online.I spent long hours
            practicing code and it was fun.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects here.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/about.jpg"
            alt="/"
            width="350"
            height="350"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
