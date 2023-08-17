import React from "react";

const BasicCard = () => {
  return (
    <div className="mt-[20px] border-[1px] border-solid border-[#000] rounded-[25px] w-[90%] m-auto">
      <div className="flex justify-between p-[10px]">
        <h1 className="text-[25px] font-[700]">Music Basics</h1>
        <div className="flex">
          <img
            className="h-[2rem]"
            src="https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg"
            alt=""
          />
          <p className="text-[#A9A3AF] p-[3px]">Music Notes</p>
        </div>
      </div>
      <div className="h-[20rem] w-[95%] m-auto rounded-[25px] bg-[url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlhbm98ZW58MHx8MHx8fDA%3D&w=1000&q=80')]">
        <div className="text-[#fff] text-[18px] p-[25px] flex flex-col items-end">
          <div className="mb-[10px] bg-[#000] p-[7px] w-[2rem] h-[2.2rem] rounded-[50px]">
            <ion-icon name="square-outline"></ion-icon>
          </div>
          <div className="mb-[10px] bg-[#000] p-[6.5px] w-[2rem] h-[2.2rem] rounded-[50px]">
            <ion-icon name="settings"></ion-icon>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[50px] text-[#fff] text-[20px] bg-[#f0f0f050] mt-[6.5rem] w-[100%] m-auto p-[20px] rounded-[25px]">
          <div className="bg-[#000] p-[7px] w-[2.2rem] h-[2.4rem] rounded-[50px]">
            <ion-icon name="play"></ion-icon>
          </div>
          <div className="bg-[#000] p-[7px] w-[2.2rem] h-[2.4rem] rounded-[50px]">
            <ion-icon name="mic-off"></ion-icon>
          </div>
          <div className="bg-[#000] p-[7px] w-[2.2rem] h-[2.4rem] rounded-[50px]">
            <ion-icon name="chatbox"></ion-icon>
          </div>
          <div className="bg-[#000] p-[7px] w-[2.2rem] h-[2.4rem] rounded-[50px]">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
          <div className="bg-[red] p-[7px] w-[2.2rem] h-[2.4rem] rounded-[50px]">
            <ion-icon name="call"></ion-icon>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-[20px]">
        <div className="flex">
          <div className="p-[2px] ">
            <ion-icon name="ellipse"></ion-icon>
          </div>
          <p>Total Users Online 34</p>
        </div>
        <div>
          <p>
            Time
            <span className="text-[#A9A3AF]">
              <ion-icon name="time"></ion-icon>
            </span>
            Remaining 45 min
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
