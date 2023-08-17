import React from "react";

const ProfileSection = () => {
  return (
    <>
      <div className="main bg-[#242B2E] p-[30px] lg:p-[0] lg:w-[15%] lg:h-[100vh] lg:flex lg:flex-col lg:justify-normal  flex justify-between text-[#fff]">
        <div className="prof-img flex bg-[#fff] lg:text-[14px] lg:w-[10rem] lg:h-[3rem]  h-[4rem] w-[12rem] rounded-[50px] lg:mt-[20px] lg:ml-[15px]">
          <img
            className="h-[4rem] lg:h-[3rem] rounded-[50px]"
            src="https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg"
            alt=""
          />
          <h4 className="text-[#000] text-start mt-[5px]">
            Learn Music <br /> Contact Support
          </h4>
        </div>
        <div className="hidden lg:block mt-[30px]">
          <div className="flex ml-[25px] text-[20px]">
            <ion-icon name="grid-outline"></ion-icon>
            <p className="ml-[10px] mt-[-3px] text-[17px]">Music OverView</p>
          </div>
          <div className="flex ml-[25px] bg-[#ecc1d8] p-[10px] w-[10rem] ml-[15px] rounded-[50px] text-[#000] mt-[20px] text-[20px]">
            <ion-icon name="home"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Music Classes</p>
          </div>
          <div className="flex ml-[25px] mt-[20px] text-[20px]">
            <ion-icon name="checkmark-circle"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Music Grades</p>
          </div>
          <div className="flex ml-[25px] mt-[20px] text-[20px]">
            <ion-icon name="people"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Music Teachers</p>
          </div>
          <div className="flex ml-[25px] mt-[20px] text-[20px]">
            <ion-icon name="clipboard"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Music Notes</p>
          </div>
          <div className="mt-[17rem] h-[1px] w-[14.3rem] bg-[#fff]"></div>
          <div className="flex ml-[25px] mt-[20px] text-[20px]">
            <ion-icon name="settings"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Settings</p>
          </div>
          <div className="flex ml-[25px] mt-[20px] text-[20px]">
            <ion-icon name="log-out"></ion-icon>
            <p className="ml-[10px] text-[17px] mt-[-3px]">Log Out</p>
          </div>
        </div>
        <div className="text-[45px] lg:hidden">
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
