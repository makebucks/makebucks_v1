import React from "react";
import styled from "styled-components";
//font awesome
import { FaStar, FaVideo, FaCheck, FaAddressCard } from "react-icons/fa";

const AfforadablePricing = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledAffordablePricing>
          <div className="left-titles">
            <h2>Affordable </h2>
            <span>Pricing.</span>
          </div>
          <p className="right-description">
            Get premium trading strategies at an affordable price—no hidden
            fees, just real value. Start trading smarter without Overspending!
          </p>
        </StyledAffordablePricing>
        <StyledAffordablePricingGroup>
          <StyledWhatYouLearn>
            <div className="live-session">
              <div className="icon-box">
                <FaVideo className="fa-icons" />
              </div>
              <p>Live session</p>
            </div>
            <div className="description">
              <h3>What you will learn</h3>
              <p>
                Here are the some topics & strategies you will learn in our live
                session
              </p>
            </div>
            <div className="lists">
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">Learn about option basics</p>
              </div>
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">Understanding about open interest</p>
              </div>
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">makebucks rule based trading strategy </p>
              </div>
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">Live doubts clearing session</p>
              </div>
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">Trading live on Zoom for next 30 days</p>
              </div>
              <div className="list">
                <div className="icon-box">
                  <FaCheck className="fa-icons" />
                </div>
                <p className="list-p">
                  Access to our Discord & WhatsApp community
                </p>
              </div>
            </div>
          </StyledWhatYouLearn>
          <StyledProtraderSupportGroup>
            <StyledRuleBasedTrading>
              <div className="pro-trader">
                <div className="icon-box">
                  <FaStar className="fa-icons" />
                </div>
                <p>Pro trader</p>
              </div>
              <div className="description">
                <h3>Rule based trader program</h3>
                <p>
                  Learn basics of the options trading and one proven NIFTY
                  option selling strategy which will help you to generate
                  consistent side income.
                </p>
              </div>
              <div className="pricing">
                <h5>₹4999</h5>
                <h3>
                  ₹1999 <span className="gst">/Excl. GST</span>
                </h3>
              </div>
              <div className="cta">
                <a
                  href="https://makebucks.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Enroll now</button>
                </a>

                <a
                  href="https://wa.me/919972470399"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="inactive-btn">Enquire now</button>
                </a>
              </div>
            </StyledRuleBasedTrading>
            <StyledInstantTalk>
              <div className="support">
                <div className="icon-box">
                  <FaAddressCard className="fa-icons" />
                </div>
                <p>Support</p>
              </div>
              <div className="description">
                <h3>Instant talk</h3>
                <p>
                  For all support related quires, you can WhatsApp or Direct
                  call. We respond as soon as possible.
                </p>
              </div>
            </StyledInstantTalk>
          </StyledProtraderSupportGroup>
        </StyledAffordablePricingGroup>
      </MaxWidthContainer>
    </>
  );
};

export default AfforadablePricing;
const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const StyledAffordablePricing = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4.5rem;
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
  //.................Responsive tablet 1180px...................//
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
  //.................Responsive tablet 1070px...................//
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
  //.................Responsive tablet 1070px...................//
  @media (max-width: 1000px) {
    p {
      font-size: 0.9rem;
    }
  }
  //.................Responsive tablet 755px...................//
  @media (max-width: 755px) {
    h2,
    span {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  //.................Responsive tablet 665px...................//
  @media (max-width: 665px) {
    padding: 0rem 2rem;
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
    .left-titles {
      display: flex;
      gap: 0.4rem;
      margin-bottom: 0.25rem;
    }
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
    margin-bottom: 1rem;
    h2,
    span {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.7rem;
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

const StyledAffordablePricingGroup = styled.div`
  padding: 0 4.5rem;
  display: flex;
  gap: 0.7rem;
  .icon-box {
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    .fa-icons {
      color: #111;
      font-size: 14px;
    }
    .icons {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  //...........Responsive tablet.........//
  @media (max-width: 1180px) {
    padding: 0 3rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 665px) {
    padding: 0rem 2rem;
  }
  //...........Mobile 500px................//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;

    .icon-box {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      font-size: 14px;
      .fa-icons {
        font-size: 10px;
      }
    }

    .icons {
      width: 90%;
      height: 90%;
      object-fit: cover;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 0rem 1.5rem;
  }
`;

const StyledWhatYouLearn = styled.div`
  width: 50%;
  padding: 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(3, 3, 206, 0.3) -20%,
    rgba(12, 9, 20, 0.3) 70%
  );
  border-radius: 1.2rem;
  border: 0.5px solid rgba(147, 147, 147, 0.25);
  .live-session {
    width: fit-content;
    padding: 0.4rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #0c0914;
    border-radius: 50rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
    margin-bottom: 1.5rem;
    p {
      font-size: 0.9rem;
    }
  }
  .description {
    margin-bottom: 1.5rem;
    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 160%;
      color: #939393;
    }
  }
  .lists {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .list {
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: #0c0914;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
    border-radius: 50rem;
    .list-p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
  //...........Responsive phone 550px.........//
  @media (max-width: 550px) {
    padding: 1.5rem 1rem;

    .live-session {
      margin-bottom: 0.8rem;
      p {
        font-size: 0.8rem;
      }
    }
    .description {
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    .list {
      .list-p {
        font-size: 0.8rem;
      }
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 450px) {
    padding: 1.5rem 1rem;
    .live-session {
      padding: 0.3rem 0.6rem;
      p {
        font-size: 0.7rem;
        letter-spacing: 0.05rem;
      }
    }
    .description {
      margin-bottom: 1rem;
      h3 {
        font-weight: 500;
        font-size: 1rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
    .list {
      padding: 0.4rem 0.6rem;
      gap: 0.6rem;
      .list-p {
        font-size: 0.7rem;
      }
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .description {
      h3 {
        font-size: 0.9rem;
      }
    }
  }
`;

const StyledProtraderSupportGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const StyledRuleBasedTrading = styled.div`
  padding: 1.5rem;
  height: 60%;
  background: linear-gradient(
    90deg,
    rgba(3, 3, 206, 0.3) -20%,
    rgba(12, 9, 20, 0.3) 70%
  );
  border-radius: 1.2rem;
  border: 0.5px solid rgba(147, 147, 147, 0.25);
  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: #939393;
  }
  .pro-trader {
    width: fit-content;
    padding: 0.4rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #0c0914;
    border-radius: 50rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
    margin-bottom: 1.5rem;
    p {
      font-size: 0.9rem;
    }
  }
  .description {
    margin-bottom: 0.8rem;
    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 160%;
      color: #939393;
    }
  }
  .pricing {
    margin-bottom: 1rem;
    h5 {
      font-weight: 400;
      font-size: 1rem;
      color: #939393;
      text-decoration: line-through;
    }
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
  .cta {
    display: flex;
    gap: 0.5rem;
    .inactive-btn {
      background-color: transparent;
      border: 0.5px solid rgba(147, 147, 147, 0.25);
      transition: 0.25s;
    }
    .inactive-btn:hover {
      background-color: #111111;
    }
  }
  //..........Mobile 850px.....................//
  @media (max-width: 850px) {
    .description {
      h3 {
        font-weight: 500;
      }
    }
    .pricing {
      h3 {
        font-weight: 500;
      }
    }
  }
  //..........Mobile 550px.....................//
  @media (max-width: 550px) {
    padding: 1.5rem 1rem;
    span {
      font-size: 0.7rem;
      font-weight: 400;
    }
    .pro-trader {
      margin-bottom: 0.8rem;
      p {
        font-size: 0.8rem;
      }
    }
    .description {
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    .pricing {
      h5 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }
    .cta {
      button {
        font-size: 0.8rem;
      }
    }
    //..........Mobile 450px.....................//
    @media (max-width: 450px) {
      padding: 1.5rem 1rem;
      .pro-trader {
        padding: 0.3rem 0.6rem;
        p {
          font-size: 0.7rem;
        }
      }
      .description {
        h3 {
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          font-size: 0.7rem;
        }
      }
      .pricing {
        h5 {
          font-size: 0.8rem;
        }
        h3 {
          font-size: 1.2rem;
        }
      }
      .cta {
        button {
          font-size: 0.7rem;
          font-weight: 500;
        }
      }
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .description {
      h3 {
        font-size: 0.9rem;
      }
    }
    .pricing {
      h5 {
        font-size: 0.7rem;
      }
      h3 {
        font-size: 1.1rem;
      }
    }
  }
`;
const StyledInstantTalk = styled.div`
  padding: 1.5rem;
  height: 40%;
  background: linear-gradient(
    90deg,
    rgba(3, 3, 206, 0.3) -20%,
    rgba(12, 9, 20, 0.3) 70%
  );
  border-radius: 1.2rem;
  border: 0.5px solid rgba(147, 147, 147, 0.25);
  .support {
    width: fit-content;
    padding: 0.4rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #0c0914;
    border-radius: 50rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
    margin-bottom: 1.5rem;
    p {
      font-size: 0.9rem;
    }
  }
  .description {
    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 160%;
      color: #939393;
    }
  }
  //..........Tablet 850px.....................//
  @media (max-width: 850px) {
    .description {
      h3 {
        font-weight: 500;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  //..........Mobile 550px.....................//
  @media (max-width: 550px) {
    padding: 1.5rem 1rem;

    .support {
      margin-bottom: 0.8rem;
      p {
        font-size: 0.8rem;
      }
    }
    .description {
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  //..........Mobile 450px.....................//
  @media (max-width: 450px) {
    padding: 1.5rem 1rem;
    .support {
      padding: 0.3rem 0.6rem;
      p {
        font-size: 0.7rem;
      }
    }
    .description {
      margin-bottom: 0;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    .description {
      h3 {
        font-size: 0.9rem;
      }
    }
  }
`;
