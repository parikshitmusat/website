import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroH2
} from "./LandingElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg loop autoPlay muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Extending thoughts into space..</HeroH1>
        <HeroP>
          "If you end up doing what you're passionate about, the journey is so easy."
        </HeroP>
        <HeroH2>-Wing Commander Rakesh Sharma, Research Cosmonaut</HeroH2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
