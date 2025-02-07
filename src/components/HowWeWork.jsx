import React from "react";
import styled from "styled-components";

const HowWeWork = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledHowWeWork>
          <div className="left-titles">
            <h2>How </h2>
            <span>We Work.</span>
          </div>
          <p className="right-description">
            Here are the four simple step framework we follow to make you
            profitable trader.
          </p>
        </StyledHowWeWork>
        <StyledHowWeWorkGroup>
          <div className="wrap-enroll-live">
            <div className="enroll">
              <div className="circle">1</div>
              <div className="content">
                <h3>Enroll.</h3>
                <p>Purchase our program to join upcoming live session.</p>
              </div>
            </div>
            <div className="live">
              <div className="circle">2</div>
              <div className="content">
                <h3>Live.</h3>
                <p>
                  Live class zoom link will be shared to your registered number.
                </p>
              </div>
            </div>
          </div>
          <div className="wrap-learn-trader">
            <div className="learn">
              <div className="circle">3</div>
              <div className="content">
                <h3>Learn.</h3>
                <p>
                  We will be teaching our NIFTY weekly option selling strategy.
                </p>
              </div>
            </div>
            <div className="trade">
              <div className="circle">4</div>
              <div className="content">
                <h3>Trade.</h3>
                <p>We will be trading live the strategy for next 30 days.</p>
              </div>
            </div>
          </div>
        </StyledHowWeWorkGroup>
      </MaxWidthContainer>
    </>
  );
};

export default HowWeWork;

const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const StyledHowWeWork = styled.div`
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
      }
    }
    //...........Responsive tablet 850px.........//
    @media (max-width: 850px) {
      h2,
      span {
        font-size: 1.4rem;
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
      padding: 1.2rem 2rem 0rem 2rem;
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
      .left-titles {
        display: flex;
        gap: 0.4rem;
      }
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
        margin-bottom: 0.35rem;
      }
      padding: 0rem 1.5rem;
      h2,
      span {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.7rem;
      }
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
const StyledHowWeWorkGroup = styled.div`
  display: flex;
  gap: 0.7rem;
  padding: 0 4.5rem;
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
  .enroll,
  .live,
  .learn,
  .trade {
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(
      0deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }

  .circle {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(3, 3, 206, 1);
    border-radius: 50rem;
  }
  .content {
    margin-top: 6rem;
  }
  .wrap-enroll-live,
  .wrap-learn-trader {
    display: flex;
    gap: 0.7rem;
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
    .wrap-enroll-live,
    .wrap-learn-trader {
      flex-direction: column;
    }
  }
  //...........Responsive tablet 850px.........//
  @media (max-width: 850px) {
    p {
      font-size: 0.8rem;
    }
    .content {
      h3 {
        font-weight: 500;
      }
    }
  }
  //...........Responsive tablet 665px.........//
  @media (max-width: 665px) {
    padding: 0rem 2rem;
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    flex-direction: column;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 175%;
    }
    .circle {
      width: 1.8rem;
      height: 1.8rem;
      font-size: 0.8rem;
    }
    .content {
      margin-top: 3rem;
    }
    .enroll,
    .live,
    .learn,
    .trade {
      padding: 1.5rem 1rem;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 0rem 1.5rem;
    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 0.7rem;
    }
    .enroll,
    .live,
    .learn,
    .trade {
      padding: 1.5rem 1rem;
    }
    .content {
      margin-top: 2.5rem;
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    h3 {
      font-size: 1rem;
    }
  }
`;
