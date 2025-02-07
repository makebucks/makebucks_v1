import React from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
//Styled components
import styled from "styled-components";

const NavBar = () => {
  const navref = useRef();
  const showNavBar = () => {
    navref.current.classList.toggle("responsive_nav");
  };
  return (
    <StyledNavBar>
      <Link className="logomb" to="/">
        make<span>bucks</span>
      </Link>
      <ul ref={navref}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ourapp">Our app</NavLink>
        </li>
        <li>
          <Link to="contactMe" smooth={true} offset={-50} duration={500}>
            Contact us
          </Link>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf4f9hyCDtRRFD2DpDqcWy8O_USIfg9-gexr9Vb9SjqvXe0yQ/viewform?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Join live</button>
          </a>
        </li>
        <li>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </li>
      </ul>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.5rem;
  animation: fade-down 0.5s;
  /* position: sticky;
  top: 0; */
  /* background: #282828; */
  .logomb {
    border-bottom: none;
  }

  //..................keyframe.......................//
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-30px) scale(1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  //........................................//
  .active {
    border-bottom: 2px solid #0303ce;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.3s;
    span {
      color: #6161ff;
      font-weight: 600;
    }
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    a:hover {
      color: #7575ff;
    }
  }
  #logo {
    font-size: 0.9rem;
    font-family: "Poppins", serif;
    font-weight: 400;
  }

  .nav-btn {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  /* li {
    padding-left: 2rem;
  } */
  //...........Responsive tablet 1000px.........//
  @media (max-width: 1000px) {
    padding: 1.7rem 4rem;
    #logo {
      font-size: 0.8rem;
    }
    a {
      font-size: 0.8rem;
    }
    button {
      font-size: 0.8rem;
      font-weight: 400;
      padding: 0.2rem 1rem;
    }
  }
  //...........Responsive tablet 755px.........//
  @media (max-width: 755px) {
    padding: 1.2rem 2.5rem;
  }
  //...........Responsive tablet 700px.........//
  @media (max-width: 700px) {
    ul {
      background-color: #111111;
      position: fixed;
      top: 0;
      left: 0;
      height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 1s;
      transform: translateY(-80vh);
    }

    .nav-btn {
      display: block;
      visibility: visible;
      opacity: 1;
    }
    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    .responsive_nav {
      transform: none;
    }
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 1.6rem 2rem;
    #logo {
      font-size: 0.7rem;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 1.6rem 1.5rem;
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    padding: 1.6rem 2rem 0 2rem;
  }
`;

export default NavBar;
