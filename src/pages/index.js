import React, { useState } from "react";
import HeroSection from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Subsystem from "../components/Subsystem";
import Team from "../components/Team";
import Footer from "../components/Footer";
import SloganPage from "../components/SloganPage";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <SloganPage />
      <Subsystem />
      <Team />
      <Footer />
    </>
  );
};
export default Home;
