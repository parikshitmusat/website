import styled from 'styled-components'


export const HeroContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    max-height: calc(100vh - 80px) !important ;
    position: relative;
    z-index: 1;


    /* Add : before styles*/


`;

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    


`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;



export const HeroContent = styled.div `
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    background: rgba(0,0,0,0.75);
  
  
  
`;

export const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
  

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }


    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`


export const HeroP = styled.p`
    margin-top: 100px;
    color: #fff;
    font-size: 25px;
    margin-left: 0px;
    padding: 0 1.2rem;

`


export const HeroH2 = styled.p`
    margin-top: 20px;
    color: #fff;
    font-size: 22px;
    margin-left: 0px;
    padding: 0 1.2rem;

`