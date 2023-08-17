import React from "react";
import ProfileSection from "./ProfileSection";
import JourneySection from "./JourneySection";
import ChatSection from "./ChatSection";

const Home = () => {
  return (
    <div className="App flex flex-col lg:flex lg:flex-row">
      <ProfileSection />
      <JourneySection />
      <ChatSection />
    </div>
  );
};

export default Home;
