import React from "react";
//components
import LandingSection from "../components/LandingSection";
import WhySection from "../components/WhySection";
import AboutUs from "../components/AboutUs";
import HowWeWork from "../components/HowWeWork";
import AfforadablePricing from "../components/AffordablePricing";
import Faq from "../components/Faq";
import MoreQuestions from "../components/MoreQuestions";

const Home = () => {
  return (
    <>
      <LandingSection />
      <WhySection />
      <AboutUs />
      <HowWeWork />
      <AfforadablePricing />
      <Faq />
      <MoreQuestions />
    </>
  );
};

export default Home;
