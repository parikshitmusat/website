import styled from "styled-components";

export const SubsystemContainer = styled.div`
  display: flex;
  padding: 1.4rem 0;
  padding-top: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #000;
`;

export const SubsystemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

export const SubsystemCard = styled.div`
  background: #fff;
  height: 490px;
  display: flex;
  margin: 30px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  width: 310px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SubsystemIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;

`;

export const SubsystemH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubsystemH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SubsystemP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const SecondRow = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
`;
