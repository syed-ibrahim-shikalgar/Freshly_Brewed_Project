import React from "react";

const LiveChat = () => {
  return (
    <div className="border-[1px] mt-[20px] border-solid border-[#000] lg:text-[12px] w-[60%] lg:w-[85%] m-auto rounded-[15px]">
      <div className="flex justify-between p-[20px] lg:p-[5px] border-b-[1px] border-solid border-[#000]">
        <h1 className="text-[25px] lg:text-[12px] font-[700]">Live Chat</h1>
        <div className="text-[25px] lg:text-[12px]">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </div>
      <div className="main-chat mt-[20px] ml-[15px] mr-[15px]">
        <div className="flex">
          <div>
            <img
              className="h-[1.5rem] mr-[5px]"
              src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
              alt=""
            />
          </div>
          <div className="mt-[0px]">
            <div className="flex justify-between text-[9px] text-[#758283]">
              <p>Music Teacher</p>
              <p>Current Time</p>
            </div>
            <div>
              <h4 className="border-[1px] lg:text-[10px] border-solid border-[#000] p-[5px] w-[35vw] lg:w-[13vw] rounded-[20px] mt-[5px]">
                Need Help with Music Theory
              </h4>
            </div>
          </div>
        </div>
        <div className="flex mt-[2rem] lg:mt-[0.8rem]">
          <div>
            <img
              className="h-[1.5rem] mr-[5px]"
              src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="mt-[0px]">
            <div className="flex justify-between text-[10px] lg:text-[9px] text-[#758283]">
              <p>Music Tutor</p>
              <p>Current Time</p>
            </div>
            <div>
              <h4 className="border-[1px] border-solid border-[#000] p-[5px] w-[35vw] lg:w-[14vw] lg:text-[10px] rounded-[20px] mt-[5px]">
                Is Music Theory different <br /> from Computetr Science?
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] lg:mt-[0.8rem] lg:mb-[0.8rem] flex flex-col items-end mb-[2rem]">
          <p className="text-[10px] lg:text-[9px] text-[#758283] mb-[5px]">
            Your Profile
          </p>
          <h4 className="border-[1px] lg:text-[10px] border-solid border-[#000] bg-[#ecc1d8] p-[5px] w-[35vw] lg:w-[13vw] rounded-[15px]">
            Pay Attention during Music Lessons
          </h4>
        </div>
        <div className="flex">
          <div>
            <img
              className="h-[1.5rem] mr-[5px]"
              src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000"
              alt=""
            />
          </div>
          <div>
            <p className="text-[10px] lg:text-[9px] text-[#758283]">
              Music Teacher
            </p>
            <div className="flex justify-between">
              <h4 className="border-[1px] lg:text-[10px] border-solid border-[#000] p-[5px] rounded-[25px] mt-[5px] mb-[5px] w-[12vw] lg:w-[6vw]">
                Okay, I
              </h4>
              <p className="text-[10px] lg:text-[9px] text-[#758283] mt-[25px]">
                Current Time
              </p>
            </div>
            <h4 className="border-[1px] border-solid border-[#000] lg:text-[10px] p-[5px] rounded-[25px] w-[28vw] lg:w-[13vw]">
              {" "}
              Taking a short break
            </h4>
          </div>
        </div>
        <div className="flex mt-[2rem] lg:mt-[0.8rem]">
          <div>
            <img
              className="h-[1.5rem] mr-[5px]"
              src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="mt-[0px]">
            <div className="flex justify-between text-[10px] lg:text-[9px] text-[#758283]">
              <p>Learn music instruments</p>
              <p>Todays Time</p>
            </div>
            <div>
              <h4 className="border-[1px] border-solid border-[#000] p-[5px] lg:text-[10px] w-[35vw] lg:w-[13vw] rounded-[20px] mt-[5px]">
                Start your musical journey
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] lg:mt-[0.8rem] lg:mb-[0.8rem] flex flex-col items-end mb-[2rem]">
          <p className="text-[10px] text-[#758283] mb-[5px] lg:text-[9px]">
            User
          </p>
          <h4 className="border-[1px] border-solid border-[#000] bg-[#ecc1d8] lg:text-[10px] p-[5px] w-[35vw] lg:w-[13vw] rounded-[15px]">
            No sound? Check your speakers
          </h4>
        </div>
      </div>
      <div className="border-t-[1px] border-solid border-[#000] flex p-[20px] lg:p-[5px]">
        <input
          className="bg-[#e5ecf1] focus:outline-none lg:h-[2rem] rounded-[25px] p-[10px] lg:p-[5px] w-[50vw] lg:w-[45vw] "
          placeholder="Type your message here..."
          type="message"
        />
        <div className="p-[10px] text-[20px] lg:text-[12px] text-[#98a0a5]">
          <ion-icon name="send"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
