import React from "react";
import ProfileSection from "./ProfileSection";
import LearningSection from "./LearningSection";
import TheorySection from "./TheorySection";

const MyLearning = () => {
  return (
    <div className="App lg:flex">
      <ProfileSection />
      <LearningSection />
      <TheorySection />
    </div>
  );
};

export default MyLearning;
