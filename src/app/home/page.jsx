import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import ProducSections from "../../components/sections/ProductsSections";
import TeamSection from "../../components/sections/TeamSection";
import CallToAction from "../../components/sections/CallToAction";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <ProducSections />
      <TeamSection />
      <CallToAction />
    </div>
  );
};


export default Page;
