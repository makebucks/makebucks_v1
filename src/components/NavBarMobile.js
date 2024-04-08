import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import closeImg from '../img/closeIcon.png'
const NavBarMobile =({onToggle})=>{
    return (
        <>
            <StyledNav onClick={onToggle}>
                    <Img onClick={onToggle} src={closeImg}/>
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
            </StyledNav>
        </>
    )
}

const Img = styled.img`
    position: absolute;
    right: 7%;
    top: 2%;
    width: 2.5rem;
    height: 2.5rem;
`
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
  transition: all 0.3s;
  @media screen and (max-width: 350px){
    font-size:10px;
}
}

/* This works because react-router places the active class on the active NavLink */
&:hover,
&:active,
&.active:link,
&.active:visited {
  color: rgba(67, 75, 253, 1);
  border-bottom: 2px solid rgba(67, 75, 253, 1);
}

& svg {
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-grey-400);
  transition: all 0.3s;
}

&:hover svg,
&:active svg,
&.active:link svg,
&.active:visited svg {
  color: var(--color-brand-600);
}
`;
const StyledNav = styled.nav`
    width: 50%;
    height: 100vh;
    background: rgba(255,255,255);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 999999;
    overflow: hidden;
    position: fixed;
    right: 0;
    box-shadow: -7px 0px 12px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width:450px){
        width:60%;
    }

`
const StyledNavLinks = styled.ul`
      display: flex;
      flex-direction: column;
    position: absolute;
    left: 4%;
    top: 6%;
  gap: 2rem;
  color: #fff;
  
 
`
const StyledNavLinksLists = styled.li`
   flex-direction: column;
    gap: 0.8rem;
    list-style: none;
    font-size: 2rem;
    font-weight: 500;
    color: #fff;

`

export default NavBarMobile;