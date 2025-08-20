import React from "react";
import Image from "next/image";
import projects from "../Constant/projects"; // Importing projects.js

const MyWork = () => {
  return (
    <>
      <section id="services">
        <div className="bg-[#1F1E1B] flex flex-col justify-center items-center font-Inconsolata gap-12 py-52">
          <div className="flex justify-center items-center">
            <h1 className="text-[#FF8303] text-3xl font-semibold">My Projects</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <Image src={project.imageurl} width={300} height={325} alt="work" className="opacity-80 rounded-lg"/>
                <div className="bg-[#21201D] h-full absolute top-0 flex flex-col justify-center items-center py-8 px-4 gap-4 opacity-95 group-hover:visible transition-opacity duration-300">
                  <h1 className="text-[#FF8303] text-xl font-semibold">
                    {project.title}
                  </h1>
                  <label className="text-[#F0E3CA] text-sm">
                    {project.technologies}
                  </label>
                  <span className="underline w-[200px] border border-solid border-orange-500"></span>
                  <p className="text-[#F0E3CA] text-sm text-left px-2">
                    {project.description}
                  </p>
                  <div className="w-full flex justify-evenly">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#32312E] hover:bg-[#4A4946] py-1 px-2 rounded-md text-white hover:font-bold hover:cursor-pointer">
                        GITHUB
                      </button>
                    </a>
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#32312E] hover:bg-[#4A4946] py-1 px-2 rounded-md text-white hover:font-bold hover:cursor-pointer">
                        WEBSITE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
