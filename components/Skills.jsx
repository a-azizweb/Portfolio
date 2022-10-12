import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* HTML image */}

          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* CSS image */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* JS image */}

          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* Reactjs image */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          {/* Nextjs image */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>NEXT JS</h3>
              </div>
            </div>
          </div>
          {/* Tailwind css */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          {/* Git Hub */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          {/* Firebase */}
          <div className="p-4 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  alt="/"
                  width="44px"
                  height="44px"
                />
              </div>
              <div className="flex flex-cols justify-center items-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
