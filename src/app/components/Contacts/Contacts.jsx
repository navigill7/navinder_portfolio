import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="bg-[#1F1E1B] flex flex-col  xl:flex-row justify-center pl-20 pb-20 md:p-20 gap-5 font-Inconsolata ">
          <div className="flex flex-col  gap-4 md:p-6">
            <h1 className="text-3xl text-[#F0E3CA]">
              <span className="text-[#FF8303]">&lt;/N</span>avi
              <span className="text-[#FF8303]">&gt;</span>
            </h1>
            <p className="text-[#F0E3CA] text-xl md:w-[70%]">
              I'm excited to build new connections and explore new opportunities on the way.
            </p>
          </div>
          <div className="flex flex-col  items-start gap-5  flex-wrap">
            <h1 className="text-[#FF8303] text-3xl font-bold">Contacts</h1>
            <div className="flex flex-col justify-start items-start gap-10">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/mail.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-[#FF8303] text-2xl text-center"
                  href="mailto:nnavigill784@gmail.com"
                >
                  Email
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/linkdin.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-[#FF8303] text-2xl text-center"
                  href="https://www.linkedin.com/in/navinder-gill-050190252/"
                >
                  Linkdin
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/github.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-[#FF8303] text-2xl text-center"
                  href="https://github.com/navigill7/"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
