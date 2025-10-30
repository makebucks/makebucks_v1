import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledAboutUsSection>
          <div className="left-titles">
            <h2>Know more </h2>
            <span>about us.</span>
          </div>
          <p className="right-description">
            Full time traders, trading for last 4+ years. We just don’t teach,
            We trade every single day and make consistent profits by trading
            options.
          </p>
        </StyledAboutUsSection>
        <StyledAboutUsGroup className="aboutus-group">
          <div className="wrap-ourgoal-profitable">
            <div className="our-goal">
              <h3>Our goal.</h3>
              <p>
                We just want to help everyone common people to generate side
                income through stock market trading.
              </p>
            </div>
            <div className="make-profitable">
              <h3>Make you profitable.</h3>
              <p>
                With consistent strategies and disciplined execution, there is
                higher chance you can be profitable trader.
              </p>
            </div>
          </div>
          <div className="verified-youtube">
            <div className="verified-pl">
              <h3>Financial Year 2024</h3>
              <a
                href="https://verifiedpnl.fyers.in/aaa841a7-7e26-4714-a04c-bdfefc3a246e"
                target="_blank"
                rel="noreferrer"
              >
                <button>Verified P&L</button>
              </a>
            </div>
            <div className="our-youtube">
              <h3>Our Youtube.</h3>
              <a
  href="https://makebucks.in/"
  target="_blank"
  rel="noreferrer"
>

                <button>View channel </button>
              </a>
            </div>
          </div>
        </StyledAboutUsGroup>
      </MaxWidthContainer>
    </>
  );
};

export default AboutUs;
const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const StyledAboutUsSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 4.5rem;
  margin-bottom: 1.8rem;
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  span {
    font-size: 2rem;
    font-weight: 500;
    color: #0eaf00;
  }
  .left-titles {
    width: 50%;
  }
  .right-description {
    width: 50%;
    color: #939393;
  }
  //...........Responsive tablet 1180px.........//
  @media (max-width: 1180px) {
    padding: 0 3rem;
    margin-bottom: 1.8rem;
    h2,
    span {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
  //...........Responsive tablet 1070px.........//
  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: flex-start;
    .left-titles {
      margin-bottom: 0.7rem;
    }
    .left-titles,
    .right-description {
      width: 100%;
    }
  }
  //...........Responsive tablet 1000px.........//
  @media (max-width: 1000px) {
    p {
      font-size: 0.9rem;
      line-height: 175%;
    }
  }
  //...........Responsive tablet 850px.........//
  @media (max-width: 850px) {
    h2,
    span {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  //...........Responsive tablet 755px.........//
  @media (max-width: 755px) {
    h2,
    span {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  //...........Responsive tablet 665px.........//
  @media (max-width: 665px) {
    padding: 1.2rem 2rem;
    h2,
    span {
      font-size: 1.3rem;
    }
    .left-titles {
      display: flex;
      gap: 0.4rem;
      margin-bottom: 0.4rem;
    }
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    margin: 2rem 0rem 1rem 0rem;
    h2,
    span {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 175%;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    .left-titles {
      display: flex;
      gap: 0.4rem;
      margin-bottom: 0.35rem;
    }
    padding: 0rem 1.5rem;
    h2,
    span {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 175%;
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    h2,
    span {
      font-size: 1rem;
    }
  }
`;

const StyledAboutUsGroup = styled.div`
  display: flex;
  gap: 0.7rem;
  padding: 0 4.5rem;
  /* height: 56vh; */
  margin-bottom: 3rem;
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 0.7rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 160%;
    color: #939393;
  }
  button {
    width: 100%;
  }
  .our-goal,
  .make-profitable {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem 1.5rem;
    background: linear-gradient(
      0deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }
  .verified-youtube {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .verified-pl,
  .our-youtube {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(
      0deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }
  .wrap-ourgoal-profitable {
    display: flex;
    gap: 0.7rem;
  }
  //...........Responsive tablet 1180px.........//
  @media (max-width: 1180px) {
    padding: 0 3rem;
  }
  //...........Responsive tablet 1070px.........//
  @media (max-width: 1070px) {
    flex-direction: column;
    .verified-youtube {
      width: 100%;
      flex-direction: row;
    }
    .verified-pl,
    .our-youtube {
      padding-top: 6rem;
      width: 50%;
    }
    .our-goal,
    .make-profitable {
      padding-top: 8rem;
    }
  }
  //...........Responsive tablet 850px.........//
  @media (max-width: 850px) {
    p {
      font-size: 0.8rem;
    }
    .our-goal,
    .make-profitable {
      h3 {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    .verified-pl,
    .our-youtube {
      h3 {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
  //...........Responsive tablet 665px.........//
  @media (max-width: 665px) {
    margin-bottom: 0.5rem;
    padding: 0 2rem;
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    margin-bottom: 1.5rem;
    .wrap-ourgoal-profitable {
      flex-direction: column;
    }
    .our-goal,
    .make-profitable {
      padding: 8rem 1rem 1.5rem 1rem;
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 175%;
      }
      width: 100%;
    }
    .verified-pl,
    .our-youtube {
      button {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 0 1.5rem;
    .our-goal,
    .make-profitable {
      padding: 6rem 1rem 1.5rem 1rem;
      h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.7rem;
        line-height: 175%;
      }
    }
    .verified-pl,
    .our-youtube {
      width: 100%;
      padding: 6rem 1rem 1.5rem 1rem;
      button {
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.5px;
      }
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .verified-youtube {
      width: 100%;
      flex-direction: column;
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .our-goal,
    .make-profitable {
      h3 {
        font-size: 0.9rem;
      }
    }
    .verified-pl,
    .our-youtube {
      h3 {
        font-size: 0.9rem;
      }
    }
  }
`;
