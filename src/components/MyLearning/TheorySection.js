import React from "react";

const TheorySection = () => {
  return (
    <div className="mt-[40px] ml-[50px] lg:ml-[0] mr-[30px] lg:w-[45%] flex ">
      <div className="hidden lg:block h-[99.5vh] mt-[-38px] mr-[40px] w-[1px] bg-[#758283]"></div>
      <div>
        <div>
          <img
            className="h-[22rem] w-[38rem] rounded-[20px]"
            src="https://www.musikalessons.com/blog/wp-content/uploads/2016/11/piano-keyboard-side-view.jpg"
            alt="piano image"
          />
        </div>
        <h1 className="mt-[10px] text-[20px] font-[600] mb-[10px]">
          Mastering Music Theory
        </h1>
        <div className="flex border-[1px] w-[20%] border-[#758283] rounded-[50px] border-solid">
          <img
            className="h-[2rem]"
            src="https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg"
            alt=""
          />
          <h4 className="mt-[4px] ml-[5px] text-[#758283]">John Smith</h4>
        </div>
        <div className="flex mt-[10px]">
          <ion-icon name="time"></ion-icon>
          <p className="ml-[5px] mt-[-5px] text-[#758283]">1hr 30m</p>
        </div>
        <div className="flex mt-[10px]">
          <ion-icon name="star"></ion-icon>
          <p className="ml-[5px] mt-[-5px] text-[#758283]">4.7/5.0</p>
        </div>
        <h2 className="mt-[15px] text-[18px]">Course Description</h2>
        <p>
          This online course is designed to help you learn how to read sheet
          music and understand musical notations. It covers everything basic
          music symbol to complex rythms
        </p>
      </div>
    </div>
  );
};

export default TheorySection;
