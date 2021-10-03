import styled from 'styled-components';

export const InfoSec = styled.div `
    color: #fff;
    padding: 160px, 0;
    background: ${({lightBg}) => (lightBg ?  '#fff' : '#000' )};


    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    padding: 0 24px;
    justify-content: space-between;
`;

export const InfoRow = styled.div `
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) =>  (imgStart ? 'row reverse' : 'row')};

   
  
`;

export const InfoColumn = styled.div `
    margin-bottom: 15px;
    padding: 15px;
    padding-left: 15px;
    flex: 1;
 
    flex-basis: 50%;


    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;

    }

`;



export const TextWrapper = styled.div `
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        paddung-bottom: 65px;
        

    }

`;

export const TopLine = styled.p `
    color: #fff;
    font-size: 27px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    padding-left: 50px;

`;



export const Heading = styled.p `
margin-bottom: 35px;
margin-top: 50px;
font-size: 19px;
line-height: 24px;

padding-left: 50px;


`;




export const Subtitle = styled.p`

    margin-bottom: 35px;
    margin-top: 50px;
    font-size: 19px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ?  'red' : '#fff')};
    padding-left: 50px;



`;

export const ImgWrapper = styled.div `
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: ${({ start }) => (start ?  'flex-start' : 'flex-end')};

`



export const Img = styled.img`
   
    
    border: 0;
    verticle-align: middle;
    max-width: 70%;
    padding-right: 20px;
    margin-right: 10px;
    max-height: 400px; 

`;

