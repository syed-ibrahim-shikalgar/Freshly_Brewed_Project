import React from "react";
import LiveChat from "./LiveChat";
import { Link } from "react-router-dom";

const ChatSection = () => {
  return (
    <div className="lg:w-[25%] flex flex-col border-l-[1px] border-solid border-[#000]">
      {/* <div className="line hidden lg:block h-[100vh] w-[1px] bg-[#000]"></div> */}
      <LiveChat />
      <div className="w-[60%] lg:w-[80%] lg:text-[12px] m-auto mt-[30px] lg:mt-[10px] ">
        <div className="flex border-[1px] border-solid border-[#000] rounded-[50px] p-[10px]">
          <div className="bg-[red] py-[5px] lg:py-[4px]  lg:px-[8px] px-[9px] lg:text-[10px] rounded-[50px] ml-[20px] mr-[20px]">
            <ion-icon name="musical-notes"></ion-icon>
          </div>
          <h3 className="text-[20px] lg:text-[12px] w-[19rem]">
            Lesson Materials
          </h3>
          <div className=" mt-[5px] text-[#b7bec2]">
            <ion-icon name="caret-forward"></ion-icon>
          </div>
        </div>
        <div className="flex border-[1px] border-solid border-[#000] rounded-[50px] p-[10px] mt-[20px] lg:mt-[10px]">
          <div className="bg-[red] py-[5px] lg:text-[10px] px-[9px] lg:py-[4px]  lg:px-[8px] rounded-[50px] ml-[20px] mr-[20px]">
            <ion-icon name="home"></ion-icon>
          </div>
          <h3 className="text-[20px] lg:text-[12px] w-[19rem]">Homework</h3>
          <div className=" mt-[5px] text-[#b7bec2]">
            <ion-icon name="caret-forward"></ion-icon>
          </div>
        </div>
        <div className="flex border-[1px] border-solid border-[#000] rounded-[50px] p-[10px] mt-[20px] lg:mt-[10px]">
          <div className="bg-[red] py-[5px] px-[9px] lg:py-[4px]  lg:px-[8px] lg:text-[10px] rounded-[50px] ml-[20px] mr-[20px]">
            <ion-icon name="document"></ion-icon>
          </div>
          <Link to={"/my-learning/"}>
            <h3 className="text-[20px] lg:text-[12px] w-[12rem]">Your Notes</h3>
          </Link>
          <div className=" mt-[5px] text-[#b7bec2]">
            <ion-icon name="caret-forward"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
