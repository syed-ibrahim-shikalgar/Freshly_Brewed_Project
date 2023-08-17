import React from "react";

const Participants = () => {
  return (
    <div>
      <div className="flex justify-between p-[15px] ml-[20px] mr-[20px]">
        <h1 className="text-[20px] font-[500]">Participants</h1>
        <div className="flex mr-[20px]">
          <div>
            <ion-icon name="caret-back"></ion-icon>
          </div>
          <div>
            <ion-icon name="caret-forward"></ion-icon>
          </div>
        </div>
      </div>
      <div className="flex justify-around mb-[30px] mr-[40px] ml-[20px]">
        <div className="h-[5.5rem] text-[#fff] flex justify-end items-end   w-[8.4rem] bg-[url('https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] bg-cover rounded-[15px]">
          <div className="mr-[5px]">
            <ion-icon name="mic-off"></ion-icon>
          </div>
        </div>
        <div className="h-[5.5rem] text-[#fff] flex justify-end items-end  w-[8.4rem] bg-[url('https://media.istockphoto.com/id/1397013109/photo/acoustic-guitar-against-blank-wooden-plank-panel-grunge-background-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=aF6f6l4m7LHYZrYXVfJt0CHvBaGq2kLRzejzYhYtkeY=')] bg-cover rounded-[15px]">
          <div className="mr-[10px] bg-[#000] p-[3px] rounded-[50px]">
            <ion-icon name="mic-off"></ion-icon>
          </div>
        </div>
        <div className="h-[5.5rem] text-[#fff] flex justify-end items-end  w-[8.4rem] bg-[url('https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?cs=srgb&dl=pexels-josh-sorenson-995301.jpg&fm=jpg')] bg-cover rounded-[15px]">
          <div className="mr-[10px] bg-[#000] p-[3px] rounded-[50px]">
            <ion-icon name="mic-off"></ion-icon>
          </div>
        </div>
        <div className="h-[5.5rem] text-[#fff] flex justify-end items-end  w-[8.4rem] bg-[url('https://static.toiimg.com/thumb/msid-74173820,width-400,resizemode-4/74173820.jpg')] bg-cover rounded-[15px]">
          <div className="mr-[10px] bg-[#000] p-[3px] rounded-[50px]">
            <ion-icon name="mic-off"></ion-icon>
          </div>
        </div>
        <div className="h-[5.5rem] bg-[#f0f0f0] text-[#fff] flex justify-center items-center  w-[8.4rem] bg-[url('https://static.toiimg.com/thumb/msid-86937496,width-1280,resizemode-4/86937496.jpg')] bg-cover rounded-[15px]">
          <button className="bg-[#000] p-[8px] rounded-[15px] text-[10px]">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Participants;
