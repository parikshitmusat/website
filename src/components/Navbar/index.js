import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer, 
    NavMenu, 
    NavItem, 
    NavLinks,
    MobileIcon,
    TeamLogo
} from './NavbarElements';
import Icon40 from '../../images/logopar (1).png'

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
           
            <TeamLogo src={Icon40}/>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about us"> Home </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="subsystem"> Subsystem </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="team"> Team </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact us"> Contact Us </NavLinks>
                </NavItem>
            </NavMenu>
            
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;