import React from "react";
import BasicCard from "./BasicCard";
import Participants from "./Participants";

const JourneySection = () => {
  return (
    <div className="lg:w-[60%]">
      <div className="flex p-[10px] justify-between bg-[#242B2E] text-[#fff]">
        <h1 className="text-[25px] font-[800] ml-[30px]">Music Journey</h1>
        <div className="bg-[#fff] flex text-[#000] mr-[1.5rem] lg:ml-[18rem] h-[2rem] w-[15rem] rounded-[50px]">
          <div className="p-[5px]">
            <ion-icon name="search"></ion-icon>
          </div>
          <input
            className="h-[2rem] focus:outline-none"
            placeholder="Search for music lessons"
            type="search"
          />
        </div>
        <div className="hidden text-[20px] mt-[5px] lg:block lg:flex lg:flex-row">
          <div className="mr-[20px]">
            <ion-icon name="notifications"></ion-icon>
          </div>
          <div className="mr-[20px]">
            <ion-icon name="mail"></ion-icon>
          </div>
          <div className="mr-[20px]">
            <ion-icon name="chatbox"></ion-icon>
          </div>
        </div>
      </div>
      <BasicCard />
      <Participants />
    </div>
  );
};

export default JourneySection;
