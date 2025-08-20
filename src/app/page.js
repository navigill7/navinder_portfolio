import React from "react";
import Home from "./components/Home/Home";
import MySkills from "./components/My_Skills/MySkills";
import MyWork from "./components/My_Work/MyWork";
import Contacts from "./components/Contacts/Contacts";
import { MyEducation } from "./components/MyEducation/MyEducation";
import { MyExperience } from "./components/MyExperience/MyExperience";

const Page = () => {
  return (
    <>
      <Home />
      <MyExperience/>
      <MyEducation/>
      <MySkills />
      <MyWork />
      <Contacts />
    </>
  );
};

export default Page;
