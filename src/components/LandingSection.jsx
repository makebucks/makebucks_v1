import React from "react";
import styled from "styled-components";
// import { FaStar } from "react-icons/fa";

const LandingSection = () => {
  return (
    <MaxWidthContainer className="maxwidth-container">
      <Landing>
        <Description className="description">
          <div className="tag">
            <h5>Rule based trading strategy</h5>
          </div>
          <Titles className="title">
            <div className="hide">
              <h2>Generate side income through trading,</h2>
            </div>
            <div className="hide">
              <span>no experience or technical analysis needed.</span>
            </div>
          </Titles>
          <p>
            Unlock the power of rule-based trading to generate consistent
            income, even as a beginner. Our proven system enabling you to
            achieve results without spending hours analyzing charts. Start your
            journey to financial freedom today!
          </p>
          <button>Learn more</button>
        </Description>
      </Landing>
    </MaxWidthContainer>
  );
};
export default LandingSection;

const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const Landing = styled.div`
  margin: 6rem 0rem;
  display: flex;
  justify-content: center;
  padding: 2rem 4.5rem;
  h2 {
    font-size: 3rem;
    font-weight: 500;
  }
  span {
    font-size: 3rem;
    font-weight: 500;
    color: #0eaf00;
    text-align: center;
  }
  p {
    width: 80%;
    color: #939393;
    font-size: 1rem;
    line-height: 175%;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0 1rem;
    border-radius: 50rem;
    margin-bottom: 1rem;
    background-color: rgb(10, 32, 7);
    h5 {
      font-weight: 400;
      padding: 0.5rem;
      color: #c2c2c2;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  //...........Responsive tablet 1280px.........//
  @media (max-width: 1280px) {
    h2,
    span {
      font-size: 2.6rem;
      font-weight: 500;
    }
    p {
      font-size: 1rem;
      width: 85%;
    }
  }
  //...........Responsive tablet 1055px.........//
  @media (max-width: 1055px) {
    h2,
    span {
      font-size: 2.4rem;
    }
    p {
      width: 80%;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  //...........Responsive tablet 1000px.........//
  @media (max-width: 1000px) {
    padding: 1.7rem 4rem;
    h2,
    span {
      font-size: 2.2rem;
    }
    p {
      width: 80%;
      font-size: 0.9rem;
    }
  }
  //...........Responsive tablet 900px.........//
  @media (max-width: 900px) {
    h2,
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 840px) {
    margin: 4rem 0rem;
    padding: 1.5rem 3.8rem;
    h2,
    span {
      font-size: 1.8rem;
    }

    p {
      width: 85%;
      font-size: 0.8rem;
    }
    .tag {
      padding: 0rem 0.5rem;
      font-size: 0.7rem;
      h5 {
        padding: 0.4rem;
      }
    }
  }
  @media (max-width: 755px) {
    padding: 1.2rem 3.2rem;
    h2,
    span {
      font-size: 1.6rem;
    }
    p {
      width: 95%;
      font-size: 0.8rem;
    }
    .tag {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 665px) {
    padding: 1.2rem 2.8rem;
    h2,
    span {
      font-size: 1.3rem;
    }
    p {
      width: 95%;
      font-size: 0.8rem;
    }
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    /* min-height: 30vh; */
    margin: 1.2rem 0rem 2.5rem 0rem;
    h2,
    span {
      font-size: 1.2rem;
      font-weight: 500;
    }
    p {
      width: 100%;
      font-size: 0.8rem;
      text-align: left;
    }
    //...........Responsive phone 450px.........//
    @media (max-width: 450px) {
      /* min-height: 30vh; */
      padding: 0rem 1.5rem;
      h2,
      span {
        font-size: 1rem;
      }
      p {
        width: 100%;
        font-size: 0.7rem;
      }
      .tag {
        font-size: 0.6rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    h2,
    span {
      font-size: 1rem;
    }
    p {
      width: 100%;
      font-size: 0.7rem;
    }
    .tag {
      font-size: 0.6rem;
    }
  }
`;
const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //...........Responsive tablet.........//
  @media (max-width: 840px) {
    button {
      font-size: 0.8rem;
      padding: 0.2rem 1rem;
      font-weight: 400;
    }
  }
  //...........Responsive phone.........//
  @media (max-width: 550px) {
    align-items: flex-start;
    button {
      font-size: 0.7rem;
      font-weight: 400;
      padding: 0.4rem 1rem;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    button {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 400px) {
    button {
      padding: 0.3rem 0.8rem;
    }
  }
`;
const Titles = styled.div`
  margin-bottom: 0.8rem;
  /* line-height: 370%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
  }
  //...........Responsive tablet.........//
  @media (max-width: 1000px) {
    margin-bottom: 0.6rem;
    /* line-height: 335%; */
  }

  @media (max-width: 840px) {
    margin-bottom: 0.6rem;
    /* line-height: 275%; */
  }
  //...........Responsive phone.........//
  @media (max-width: 550px) {
    align-items: flex-start;
    margin-bottom: 0.4rem;
    /* line-height: 225%; */
    div {
      text-align: left;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    /* line-height: 175%; */
  }
`;
