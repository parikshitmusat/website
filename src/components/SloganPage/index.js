import React from "react";
import Video from "../../videos/webquote2.mp4";
import {
  SloganContainer,
  SloganBg,
  VideoBg,
  SloganContent,
  SloganH1,
  SloganP,
} from "./SloganPageElements";

const SloganPage = () => {
  return (
    <SloganContainer>
      <SloganBg>
        <VideoBg loop autoPlay muted src={Video} type="webquote/mp4" />
      </SloganBg>
      <SloganContent>
        <SloganH1>
          "Parikshit is your 'Pariksha'! Learn well, question deeply. Don't take
          anything for granted.Success will be yours. God Bless,Happy Creating
          and testing!"
        </SloganH1>
        <SloganP>-Wing Commander Rakesh Sharma, Research Cosmonaut</SloganP>
      </SloganContent>
    </SloganContainer>
  );
};

export default SloganPage;
