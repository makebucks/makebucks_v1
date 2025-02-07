import React from "react";
import styled from "styled-components";

const WhySection = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledWhySection>
          <div className="left-titles">
            <h2>So many reasons to start</h2>
            <span>Rule based trading.</span>
          </div>
          <p className="right-description">
            It means following fixed rules to decide when to buy or sell,
            instead of guessing or using emotions. These rules are based on Open
            interest & Option greeks.
          </p>
        </StyledWhySection>
        <StyledAdvantageGroup className="advantage-group">
          <StyledAdvantageLeft className="advantage-left">
            <div className="advantage-1">
              <h5>Advantage 01</h5>
              <div>
                <h3 className="title-heading">No technical analysis needed.</h3>
                <p>
                  Simplify trading with predefined rules—no charts, indicators,
                  or complex analysis required. Perfect for beginners and busy
                  traders.
                </p>
              </div>
            </div>
            <div className="advantage-23">
              <div className="advantage-2">
                <h5>Advantage 02</h5>
                <div>
                  <h3 className="title-heading">Consistency.</h3>
                  <p>
                    Rules ensure a trader follows the same process every time,
                    leading to more reliable results over the long term.
                  </p>
                </div>
              </div>
              <div className="advantage-3">
                <h5>Advantage 03</h5>
                <div>
                  <h3 className="title-heading">Objective.</h3>
                  <p>
                    Eliminates guesswork and ensures decisions are based on data
                    or logic, not emotions or opinions.
                  </p>
                </div>
              </div>
            </div>
          </StyledAdvantageLeft>
          <StyledAdvantageRight className="advantage-right">
            <div className="advantage-45">
              <div className="advantage-4">
                <h5>Advantage 04</h5>
                <div>
                  <h3 className="title-heading">Risk management.</h3>
                  <p>
                    Rules can include strict stop-losses, and other risk
                    controls to protect against large losses
                  </p>
                </div>
              </div>
              <div className="advantage-5">
                <h5>Advantage 05</h5>
                <div>
                  <h3 className="title-heading">Scalability.</h3>
                  <p>
                    Once set up, the same rules can be applied across different
                    assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-6">
              <h5>Advantage 06</h5>
              <div>
                <h3 className="title-heading">Remove emotional bias.</h3>
                <p>
                  Free yourself from fear, greed, and second-guessing.
                  Rule-based trading eliminates emotional interference. Trade
                  like a pro, with discipline and confidence every time.
                </p>
              </div>
            </div>
          </StyledAdvantageRight>
        </StyledAdvantageGroup>
      </MaxWidthContainer>
    </>
  );
};

export default WhySection;

//styles
const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
const StyledWhySection = styled.div`
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
    margin-bottom: 1.3rem;
    padding: 0 3rem;
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
    margin-bottom: 1.3rem;
    padding: 0rem 3rem;
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
  }
  //...........Responsive tablet 665px.........//
  @media (max-width: 665px) {
    padding: 1.2rem 2rem;
    h2,
    span {
      font-size: 1.3rem;
    }
  }

  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    margin-bottom: 1rem;
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
    padding: 0rem 1.5rem;
    h2,
    span {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 175%;
    }
    .left-titles {
      margin-bottom: 0.35rem;
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

const StyledAdvantageLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-weight: 500;
    color: #939393;
    text-transform: uppercase;
  }
  p {
    font-size: 0.9rem;
    line-height: 160%;
    color: #939393;
  }
  .advantage-1 {
    /* height: 50vh; */
    background: linear-gradient(
      -180deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );

    .title-heading {
      margin-top: 6rem;
    }
  }

  .advantage-23 {
    /* height: 45vh; */
    display: flex;
    gap: 0.7rem;
    .advantage-2 {
      width: 50%;
    }
    .advantage-3 {
      width: 50%;
    }
    .title-heading {
      margin-top: 6rem;
    }
  }
  .advantage-2,
  .advantage-3 {
    background: linear-gradient(
      0deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
  }
  .advantage-1,
  .advantage-2,
  .advantage-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }
  //...........Responsive tablet 1185px.........//
  @media (max-width: 1185px) {
    width: 100%;
    .advantage-1 {
      /* height: 60vh; */
    }
    .advantage-23 {
      /* height: 60vh; */
    }
  }
  //...........Responsive tablet 1024px.........//
  @media (max-width: 1024px) {
    .advantage-1 {
      /* height: 25vh; */
    }
    .advantage-23 {
      /* height: 25vh; */
    }
  }
  //...........Responsive tablet 850px.........//
  @media (max-width: 850px) {
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      font-size: 0.8rem;
    }
    .advantage-1 {
      /* height: 25vh; */
    }
    .advantage-23 {
      /* height: 25vh; */
    }
  }
  //...........Responsive mobile 550px.........//
  @media (max-width: 550px) {
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      font-size: 0.8rem;
      line-height: 175%;
    }
    .title-heading {
      margin-top: 4rem;
      font-size: 0.8rem;
    }
    .advantage-1 {
      height: auto;
      .title-heading {
        margin-top: 4rem;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    .advantage-23 {
      flex-direction: column;
      height: auto;
      .title-heading {
        margin-top: 4rem;
        font-size: 0.8rem;
        font-weight: 500;
      }
      .advantage-2,
      .advantage-3 {
        width: 100%;
      }
    }
    .advantage-1,
    .advantage-2,
    .advantage-3 {
      padding: 1.5rem 1rem;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    .title-heading {
      margin-top: 3rem;
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 0.7rem;
      line-height: 175%;
    }
    h5 {
      font-size: 0.7rem;
      font-weight: 400;
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .title-heading {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;

const StyledAdvantageRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-weight: 500;
    color: #939393;
    text-transform: uppercase;
  }
  p {
    font-size: 0.9rem;
    color: #939393;
    line-height: 160%;
  }
  .advantage-6 {
    /* height: 50vh; */
    background: linear-gradient(
      -180deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    .title-heading {
      margin-top: 6rem;
    }
  }
  .advantage-45 {
    /* height: 45vh; */
    display: flex;
    gap: 0.7rem;
    .advantage-4 {
      width: 50%;
    }
    .advantage-5 {
      width: 50%;
    }
    .title-heading {
      margin-top: 6rem;
    }
  }
  .advantage-4,
  .advantage-5 {
    background: linear-gradient(
      0deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
  }
  .advantage-4,
  .advantage-5,
  .advantage-6 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }
  //...........Responsive tablet 1185.........//
  @media (max-width: 1185px) {
    width: 100%;
    .advantage-6 {
      /* height: 60vh; */
    }
    .advantage-45 {
      /* height: 60vh; */
    }
  }
  //...........Responsive tablet 1024px.........//
  @media (max-width: 1024px) {
    .advantage-6 {
      /* height: 25vh; */
    }
    .advantage-45 {
      /* height: 25vh; */
    }
  }

  //...........Responsive tablet 850px.........//
  @media (max-width: 850px) {
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      font-size: 0.8rem;
    }
    .advantage-6 {
      /* height: 25vh; */
    }
    .advantage-45 {
      /* height: 25vh; */
    }
  }
  //...........Responsive mobile 550px.........//
  @media (max-width: 550px) {
    p {
      font-size: 0.8rem;
      line-height: 175%;
    }
    .advantage-6 {
      padding: 1.5rem 1rem;
      height: auto;
      .title-heading {
        margin-top: 4rem;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    .advantage-45 {
      flex-direction: column;
      height: auto;
      .title-heading {
        margin-top: 4rem;
        font-size: 0.8rem;
        font-weight: 500;
      }
      .advantage-4,
      .advantage-5 {
        padding: 1.5rem 1rem;
        width: 100%;
      }
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    .title-heading {
      margin-top: 4rem;
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 0.7rem;
      line-height: 175%;
    }
    h5 {
      font-size: 0.7rem;
      font-weight: 400;
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .title-heading {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;

const StyledAdvantageGroup = styled.div`
  display: flex;
  padding: 0 4.5rem;
  gap: 0.7rem;
  margin-bottom: 3rem;
  //...........Responsive tablet.........//
  @media (max-width: 1180px) {
    padding: 0 3rem;
  }
  @media (max-width: 1070px) {
    flex-direction: column;
  }
  @media (max-width: 840px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 665px) {
    margin-bottom: 0.5rem;
    padding: 0 2rem;
  }
  @media (max-width: 550px) {
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 0 1.5rem;
  }
`;
