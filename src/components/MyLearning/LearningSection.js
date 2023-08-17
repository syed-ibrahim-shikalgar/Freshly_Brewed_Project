import React from "react";
import MusicCards from "./MusicCards";

const LearningSection = () => {
  const musicCard = [
    {
      musicImgUrl:
        "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/home/featured/featured-40.jpg?1620768974",
      headings: "Latest News About Musicians",
      aut_name: "John Smith",
      per_cmpltn: "85% complete",
    },
    {
      musicImgUrl:
        "https://watermark.lovepik.com/photo/20211210/large/lovepik-playing-piano-hand-close-up-picture_501783681.jpg",
      headings: "Mastering Music Notes",
      aut_name: "Sarah Johnson",
      per_cmpltn: "42% complete",
    },
    {
      musicImgUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      headings: "Musical Instruments 101",
      aut_name: "David Thompson",
      per_cmpltn: "23% complete",
    },
    {
      musicImgUrl:
        "https://static.toiimg.com/thumb/msid-101151888,width-400,resizemode-4/101151888.jpg",
      headings: "Learn to Read Sheet Music",
      aut_name: "Emily Davis",
      per_cmpltn: "42% complete",
    },
  ];
  return (
    <div className="learningSection lg:w-[45%]">
      <div className="heading flex justify-between p-[30px]">
        <div className="myLearning">
          <h1 className="text-[25px] font-[600]">My Learning</h1>
        </div>
        <div className="music flex">
          <div className="bg-[#D82E2F] rounded-[40px] text-[25px] px-[5px] mr-[2rem]">
            <ion-icon className="" name="library-outline"></ion-icon>
          </div>
          <h4 className="text-[#758283] text-[18px] mt-[5px]">Music</h4>
        </div>
      </div>
      {musicCard.map((obj) => {
        return (
          <MusicCards
            key={obj.headings}
            musicImgUrl={obj.musicImgUrl}
            headings={obj.headings}
            aut_name={obj.aut_name}
            per_cmpltn={obj.per_cmpltn}
          />
        );
      })}
    </div>
  );
};

export default LearningSection;
