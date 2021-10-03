import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
  background-color: #000;
`


export const FooterWrap = styled.div`
  padding: 48px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 820px) {

    padding-top: 32px;

  }
   
`


export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 820px) {

    padding-top: 32px;
    
  }
   
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  max-width: 360px;
  box-sizing: border-box;



  @media screen and (max-width: 420px) {

    margin: 0;
    padding: 10px;
    width: 100%;
    
  }
   
`
export const FooterLinkTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 16px;
  color: #fff;


   
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;



  &:hover
  {
      color: #fff;
      transition: 0.3s ease-in-out;
      
  }
   
`;


export const SocialMedia =  styled.section`
  max-width: 1000px;
  width: 100%;

`

export const SocialMediaWrap =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;


  @media screen and (max-width: 820px) {

    flex-direction: column;
    
  }
  
`

export const WebsiteRights =  styled.small`
  color: #fff;
    margin-bottom: 16px;
    text-align: center;
 

`


export const FooterMedia = styled.a`
  display: inline-block;
  padding: 2px;
  margin: 2px;
  justify-content: space-between;
`;

export const FooterMediaIcons = styled.a`
  padding: 2px;
  margin: 2px;
  margin-top: 1px;
  font-size: 0.7rem;
  
`;
