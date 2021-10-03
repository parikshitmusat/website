import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  padding-top: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #000;

  // @media screen and (max-width: 768px ){
  //     height: 1100px;

  // }

  // @media screen and (max-width: 480px ){
  //     height: 1300px;

  // }
`;

export const TeamWrapper = styled.div`
  // max-width: 100px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const TeamCard = styled.div`
  background: #000;
  display: flex;
  margin: 10px;
  margin-bottom: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  width: 250px;
  height: 300px;
  box-shadow: 10px 10px 5px black;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TeamIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TeamH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TeamP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
export const SocialMedia = styled.a`
  display: inline-block;
  padding: 2px;
  margin: 2px;
  justify-content: space-between;
`;

export const SocialMediaIcons = styled.a`
  padding: 2px;
  margin: 2px;
  margin-top: 1px;
  font-size: 0.7rem;
  
`;

export const TeamH3 = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
