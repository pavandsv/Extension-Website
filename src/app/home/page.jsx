import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import ProducSections from "../../components/sections/ProductsSections";
import TeamSection from "../../components/sections/TeamSection";
import ClientSection from "../../components/sections/ClientSection";
import CallToAction from "../../components/sections/CallToAction";

const Page = () => {
  return (
    <>
      <HeroSection />
      <ProducSections />
      <TeamSection />
      {/* <ClientSection /> */}
      <CallToAction />
    </>
  );
};

export default Page;
