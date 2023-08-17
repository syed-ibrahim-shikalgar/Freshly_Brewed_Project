import React from "react";

const ProfileSection = () => {
  const profileImgUrl =
    "https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg";
  return (
    <div className="profile-section flex justify-between p-[20px] lg:p-[0] lg:items-center bg-[#242B2E] lg:flex lg:flex-col lg:w-[10%] lg:h-[100vh] lg:justify-normal">
      <img
        src={profileImgUrl}
        className="h-[5rem] lg:h-[6rem] lg:w-[6rem] lg:mt-[30px] rounded-[50px]"
        alt="profile image"
      />
      <div className="top-icons hidden lg:block pt-[20px] lg:flex lg:flex-col text-[#fff] gap-[2rem] mb-[11rem] text-[22px]">
        <ion-icon className="appy mt-[10px]" name="grid-outline"></ion-icon>
        <ion-icon className="home" name="home"></ion-icon>
        <ion-icon className="verified" name="checkmark-done-circle"></ion-icon>
        <ion-icon className="user" name="people"></ion-icon>
        <ion-icon className="note" name="clipboard"></ion-icon>
      </div>
      <div className="bottom-icons hidden lg:block lg:flex lg:flex-col text-[#fff] text-[22px] gap-[2rem]">
        <div className="line h-[1px] w-[35px] ml-[-5px] bg-[#fff]"></div>
        <ion-icon name="settings"></ion-icon>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      <div className="menu text-[40px] pt-[10px] lg:hidden">
        <ion-icon className="" name="menu-outline"></ion-icon>
      </div>
    </div>
  );
};

export default ProfileSection;
