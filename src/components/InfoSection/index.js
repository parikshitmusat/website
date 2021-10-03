import React from 'react';

import {
    InfoSec,
    InfoWrapper, 
    InfoRow, 
    InfoColumn,
    TextWrapper,
    TopLine,
    Subtitle,
    ImgWrapper,
    Heading,
    Img} from './InfoElements'


const InfoSection = ({  
    lightBg,
    id,
    imgStart,
    topLine,
    darkText,
    description,
    heading,
    img,
    alt,
    start
}) => {
    return (

        <>
      

       

        <InfoSec lightBg={lightBg} id={id}>
           
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{heading}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper>
                        <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                    
                </InfoRow>
            </InfoWrapper>
     
        </InfoSec>
        </>
    )
}

export default InfoSection