import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu,
    SidebarLink  } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon>
               <CloseIcon />    
           </Icon>

           <SidebarWrapper>
               <SidebarMenu>
               <SidebarLink to='about us' onClick={toggle}>
                Home
               </SidebarLink>

               <SidebarLink to='subsystem' onClick={toggle}>
                Subsystem
               </SidebarLink>

               <SidebarLink to='team' onClick={toggle}>
                Team
               </SidebarLink>

               <SidebarLink to='library' onClick={toggle}>
                Library
               </SidebarLink>

               <SidebarLink to='contact us' onClick={toggle}>
                Contact Us
               </SidebarLink>
               </SidebarMenu>

           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
