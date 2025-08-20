'use client'

import React, { useEffect, useRef, useState } from "react";

const TimelineItem = ({ title, subtitle, description, date }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-start md:items-center mb-12 transition-transform duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-56 md:-translate-x-96 opacity-0"
      }`}
    >
      <div className="absolute -left-4 w-2 h-2 rounded-full bg-[#FF8303]"></div>
      <div className="flex items-center w-full">
        <div className="flex-1 bg-[#FF8303] h-0.5"></div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-6 w-full md:max-w-4xl">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <span className="italic text-white">{subtitle}</span>
        <p className="mt-2 text-white">{description}</p>
        <span className="text-[#FF8303] font-semibold">{date}</span>
      </div>
    </div>
  );
};

const MyEducation = () => {
  return (
    <section id="education">
      <div className="bg-[#1F1E1B] flex flex-col justify-center items-center font-Inconsolata gap-9 py-44 px-5">
        <h1 className="text-[#FF8303] text-3xl font-semibold">My Education</h1>
        <div className="w-full md:w-2/3">
          <TimelineItem
            title="Bennett University, Greater Noida"
            subtitle="BTech in Computer Science and Engineering"
            description="CGPA: 9.53"
            date="2022 - 2026"
          />
          <TimelineItem
            title="Golden Public School, Uklana Mandi , Haryana"
            subtitle="Physics, Chemistry, Math"
            description="80% (A1 credit for all subjects)"
            date="2010-2022"
          />
        </div>
      </div>
    </section>
  );
};

export { MyEducation };
