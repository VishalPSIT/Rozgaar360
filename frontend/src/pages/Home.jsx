import React from "react";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import BranchCards from "../components/BranchCards";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <Features />
      <Testimonials />
      <BranchCards />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Home;
