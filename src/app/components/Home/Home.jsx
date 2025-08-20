"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import BasketballAnimation from "./_components/BasketballAnimation";

const Home = () => {
  return (
    <>
      <section id="about">
        <div className="bg-[#1F1E1B] font-Inconsolata flex flex-col-reverse lg:flex-col justify-center items-center py-40 gap-14">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-32">
            <div className="flex flex-col lg:items-start justify-center items-center gap-2 p-5">
              <h1 className="text-[#FF8303] text-6xl font-bold">
                Navinder Gill
              </h1>
              <TypeAnimation
                className="text-[#F0E3CA] text-3xl"
                sequence={[
                  "Bennett University",
                  1000,
                  "DevOps Engineer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="relative w-96 h-96 bg-cover">
              <Image src="/homepic2.png" fill alt={"No Image Found"} />
              <div className="w-40 h-40 absolute left-24 top-32">
                <Image src="/navi5.png" fill alt={"No Image Found"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center text-lg items-center gap-3 text-[#F0E3CA] flex-wrap p-4">
            <div className="relative w-48 h-48">
              <BasketballAnimation />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <p>
                👋 Hi there! I'm Nainder Gill , a final year student at Bennett University majoring in Computer Science and Engineering . <br/>
              </p>
              {/* Download Resume Section */}
              <div className="mt-5">
                <a
                  href="/navinder_resume.pdf"
                  download="Navinder_Gill_Resume.pdf"
                  // className="bg-[#FF8303] text-white px-5 py-2 rounded-md text-lg font-medium hover:bg-[#FF9B3F] transition"
                  className="text-[#FF8303] border-2 border-[#FF8303] px-4 py-2 rounded-lg text-lg font-medium hover:bg-[#FF8303] hover:text-[#1F1E1B] hover:font-extrabold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
