import React from "react";
import "../../App.css";

const MusicCards = ({ musicImgUrl, headings, aut_name, per_cmpltn }) => {
  const percentWidth = per_cmpltn?.split("%")?.[0] || 0;

  const getPercentGradient = (percent) => ({
    background: `linear-gradient(
        to right,
        rgb(109, 108, 108) ${percent}%,
        rgb(74, 73, 73) ${100 - percent}%
      )`,
  });
  return (
    <div className="">
      <div className="music-card mt-[10px] flex justify-around w-[90%] p-[10px] m-auto border-[1px] border-solid  border-[#758283] rounded-[15px]  ">
        <div className="music-img">
          <img
            className="h-[7rem] w-[14rem] mr-[10px] rounded-[15px]"
            src={musicImgUrl}
            alt="music-image"
          />
        </div>
        <div className="description">
          <div className="news-save flex ">
            <h2 className="text-[15px] mr-[4rem] w-[12.5rem] font-[500]">
              {headings}
            </h2>
            <div className="text-[20px] bg-[#D82E2F] rounded-[50px] px-[5px]">
              <ion-icon name="bookmark"></ion-icon>
            </div>
          </div>
          <div className="completion">
            <h4 className="text-[#758283] text-[12px]">{aut_name}</h4>
            <div
              className="percent mt-[1.5rem] mb-[15px] "
              style={getPercentGradient(Number(percentWidth))}
            ></div>
            <h4 className="text-[12px] text-[#758283]">{per_cmpltn}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCards;
