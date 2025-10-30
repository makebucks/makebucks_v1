import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//images
import wa from "../img/wa.png";
import yt from "../img/yt.png";
import gmail from "../img/gmail.png";
import insta from "../img/insta.png";
const Footer = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container" id="contactMe">
        <div>
          <StyledContainer className="container">
            <div className="wrapper">
              <div className="logo-mission">
                <h4>
                  make<span>bucks</span>
                </h4>
                <p>
                  We are on our mission to educate & helps you to build side
                  income through stock market trading.
                </p>
              </div>
              <div className="pages-legal">
                <div className="pages">
                  <h4>Pages</h4>
                  <Links classname="link">
                    <NavLink to="/">Home</NavLink>
                    <NavLink>Course</NavLink>
                    <NavLink to="/ourapp">Our app</NavLink>
                  </Links>
                </div>
                <div className="legal">
                  <h4>Contact</h4>
                  <Links className="link">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=makebucksin@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Email
                    </a>
                    <a
                      href="https://www.instagram.com/makebucks.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/919972470399"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Links>
                </div>
              </div>
            </div>
            <div className="wrapper-2">
              <div className="social-copyright">
                <div className="social-icons">
                  <div className="icon insta">
                    <a
                      href="https://www.instagram.com/makebucks.in"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={insta} alt="insta-icon" />
                    </a>
                  </div>
                  <div className="icon whatsapp">
                    <a
                      href="https://wa.me/919972470399"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={wa} alt="Whatsapp-icon" />
                    </a>
                  </div>
                  <div className="icon youtube">
                    <a
                      href="https://makebucks.in/"
                      rel="noreferrer"
                    >
                      <img src={yt} alt="youtube-icon" />
                    </a>
                  </div>
                  <div className="icon mail">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=makebucksin@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={gmail} alt="mail-icon" />
                    </a>
                  </div>
                </div>
                <div className="copyright">
                  <p>&copy; makebucks 2025</p>
                </div>
                <div className="developer">
                  <p>Designed & Developed by Vipin</p>
                </div>
              </div>
            </div>
          </StyledContainer>
        </div>
      </MaxWidthContainer>
    </>
  );
};

export default Footer;
const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 4.5rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(
    -90deg,
    rgba(3, 3, 206, 0.3) -20%,
    rgba(12, 9, 20, 0.3) 70%
  );
  border-radius: 1.2rem;
  border: 0.5px solid rgba(147, 147, 147, 0.25);

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    span {
      color: #6161ff;
    }
  }
  p {
    font-size: 0.9rem;
    line-height: 160%;
    color: #939393;
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo-mission {
      width: 40%;
      margin-bottom: 6rem;
    }
    .pages-legal {
      display: flex;
      gap: 2rem;
    }
  }
  .developer {
    p {
      font-size: 0.8rem;
    }
  }

  .wrapper-2 {
    display: flex;
    gap: 1.5rem;
    .social-icons {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50rem;
        background-color: rgba(32, 32, 32, 0.5);
        transition: 0.35s;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .icon:hover {
        background-color: #5151f8;
      }
    }
    .social-icons {
      display: flex;
      gap: 0.7rem;
    }
  }
  //.................Responsive tablet 1180px...................//
  @media (max-width: 1180px) {
    margin: 1rem 3rem;
  }
  //.................Responsive tablet 1000px...................//
  @media (max-width: 1000px) {
    h4 {
      font-weight: 500;
    }
    p {
      font-size: 0.8rem;
    }
    .wrapper {
      a {
        font-size: 0.8rem;
      }
    }
    .developer {
      p {
        font-size: 0.7rem;
      }
    }
  }
  //...........Responsive tablet 900px.........//
  @media (max-width: 900px) {
    padding: 1.5rem 2rem;
    h4 {
      font-size: 0.9rem;
    }
  }
  //...........Mobile 665px................//
  @media (max-width: 665px) {
    margin: 1rem 2rem;
  }
  //...........Mobile 550px................//
  @media (max-width: 550px) {
    margin: 2rem 1.5rem;
    padding: 1.5rem 1rem;
    h4 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
    .wrapper {
      a {
        font-size: 0.7rem;
      }
      flex-direction: column;
      .logo-mission {
        width: 100%;
        margin-bottom: 3rem;
      }
      .pages-legal {
        margin-bottom: 3rem;
      }
    }
    .developer {
      p {
        font-size: 0.6rem;
      }
    }
    .wrapper-2 {
      .social-icons {
        gap: 0.4rem;
        .icon {
          img {
            width: 60%;
            height: auto;
          }
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  //...........Mobile 450px................//
  @media (max-width: 450px) {
    margin: 1.5rem;
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
    .wrapper {
      a {
        font-size: 0.7rem;
      }
    }
  }
  //...........Mobile 400px................//
  @media (max-width: 400px) {
    margin: 1.2rem;
    h4 {
      font-size: 0.8rem;
      font-weight: 500;
    }
    .wrapper {
      a {
        font-size: 0.7rem;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    color: #939393;
    font-size: 0.9rem;
    font-weight: 400;
    transition: 0.25s;
  }
  a:hover {
    color: #bbbbbb;
  }
  //...........Mobile 450px................//
  @media (max-width: 450px) {
    a {
      font-size: 0.7rem;
    }
  }
`;
