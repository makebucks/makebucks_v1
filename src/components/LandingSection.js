import React from "react";
import styled from "styled-components";
import backImg from "../img/Trading skills eclipse.png";
import { Link } from "react-scroll";
const LandingSection = () => {
  return (
    <StyledHeader>
      <Img src={backImg}></Img>
      <StyledContainer>
        <StyledTitle>
          <div className="hide">
            <H2>Time to level up your </H2>
          </div>
          <div className="hide">
            <H2>
              <StyledSpan>Trading skills.</StyledSpan>
            </H2>
          </div>
        </StyledTitle>
        <StyledPara>
          Learn how to trade efficiently from absolute basics to expert level.
          we will help you to become independent trader.
        </StyledPara>
        <Link to="wcu" smooth={true} offset={-50} duration={500}>
          <button>Learn more</button>
        </Link>
      </StyledContainer>
    </StyledHeader>
  );
};
const H2 = styled.h2`
  font-size: 6rem;
  color: #0a0b0f;
  font-weight: 600;
  line-height: 7rem;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 30px;
    line-height: 5rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 40px;
    line-height: 5rem;
  }
  @media screen and (max-width: 493px) {
    font-size: 30px;
    line-height: 4rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 24px;
    line-height: 4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 8rem;
    line-height: 10rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 3%;
  z-index: 1;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0%;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    top: -5%;
    width: 78%;
    height: 72%;
  }
`;
const StyledHeader = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 420px) {
    min-height: 46vh;
  }
  @media screen and (min-width: 420px) and (max-width: 440px) {
    min-height: 50vh;
  }

  @media screen and (min-width: 440px) and (max-width: 500px) {
    min-height: 62vh;
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
    min-height: 50vh;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;
  z-index: 10;
  @media screen and (min-width: 420px) and (max-width: 500px) {
    position: absolute;
    top: 17%;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 14%;
  }
  @media screen and (max-width: 320px) {
    gap: 1.2rem;
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
    position: relative;
    top: 7%;
  }
`;
const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledSpan = styled.span`
  background: linear-gradient(92.12deg, #434bfd 26.52%, #ff3737 115.58%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: 105% auto;
  color: #000;
  letter-spacing: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;
`;
const StyledPara = styled.p`
  font-size: 1.875rem;
  text-align: center;
  width: 63%;
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    width: 80%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 70%;
  }
  @media screen and (max-width: 393px) {
    font-size: 14px;
    width: 80%;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
    width: 90%;
  }
`;

export default LandingSection;
