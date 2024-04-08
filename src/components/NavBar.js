import logo from '../img/logo.png'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import NavBarMobile from './NavBarMobile';
import { useNavigate } from 'react-router-dom';
const NavBar =()=>{
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () =>{
    setShowNav(!showNav)
  }
  const navigate = useNavigate();
    return (
        <>
            <StyledNav>
                <StyledLogo>
                    <img src={logo} alt="makebucks"></img>
                </StyledLogo>
                <StyledNavLinks>
                    <StyledNavLinksLists>
                    <StyledNavLink to="/home">
                        <span>Home</span>
                    </StyledNavLink>
                    </StyledNavLinksLists>
                    <StyledNavLinksLists>
                    <StyledNavLink to="/traders-mentorship">
                        <span>Traders mentorship</span>
                    </StyledNavLink>
                    </StyledNavLinksLists>
                    <StyledNavLinksLists>
                    <StyledNavLink to="/tax-filing">
                        <span>Tax filing</span>
                    </StyledNavLink>
                    </StyledNavLinksLists>
                    <StyledNavLinksLists>
                    
                    </StyledNavLinksLists>
                    <StyledNavLinksLists>
                    <StyledNavLink to="/our-app">
                        <span>Our app</span>
                    </StyledNavLink>
                    </StyledNavLinksLists>
                    <StyledNavLinksLists>
                    <StyledNavLink to="/contact-us">
                        <span>Contact us</span>
                    </StyledNavLink>
                    </StyledNavLinksLists>
                </StyledNavLinks>
                <StyledButton>
                    <button onClick={()=>navigate("/traders-mentorship")}>Join now</button>
                </StyledButton>
                <Hamburger onClick={toggleNav}>
                  <AiOutlineMenu />
                </Hamburger>
            </StyledNav>
        
            {
              showNav && <NavBarMobile onToggle={toggleNav}/>
            }

        </>
    )
}
const StyledNavLink = styled(NavLink)`
&:link,
&:visited {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
}

/* This works because react-router places the active class on the active NavLink */
&:hover,
&:active,
&.active:link,
&.active:visited {
  color: var(--color-grey-800);
  border-bottom: 1px solid rgba(67, 75, 253, 1);
}
`;
const StyledLogo = styled.div`
    display: flex;
    width: 4rem;
    height: 4rem;
`
const StyledButton = styled.div`
    display: none;
   
  @media screen and (min-width: 1080px){
    margin-right: 4rem;
    display: flex;
  }
`
const StyledNav = styled.nav`
      display: flex;
    gap: 0rem;
    width: 100%;
    justify-content: space-between;
    padding: 0rem 8rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(222, 222, 222, .8);
    height: 5rem;
    align-items: center;
    z-index: 5;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 99999;
   @media screen and (max-width: 460px){
    padding: 0rem 2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    padding: 0 3rem;
  }
`
const StyledNavLinks = styled.ul`
      display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 1080px){
    display: none;
  }
  
 
`
const StyledNavLinksLists = styled.li`
   flex-direction: column;
    gap: 0.8rem;
    list-style: none;
    font-size: 2rem;
    font-weight: 500;
`

const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 38%;
  right: 8px;
    padding: 0 2rem;
  @media screen and (max-width: 1080px){
    display: flex;
  }
`
export default NavBar;