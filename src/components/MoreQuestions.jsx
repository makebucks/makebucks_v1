import React from "react";
import styled from "styled-components";
//font awesome
import { FaEnvelope, FaComment, FaComments } from "react-icons/fa";

const MoreQuestions = () => {
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledMoreQuestions>
          <div className="left-titles">
            <h2>More Questions </h2>
            <span>On Your Mind.</span>
          </div>
          <p className="right-description">
            Don’t hesitate, use any of the options below to reach us out.
          </p>
        </StyledMoreQuestions>

        <StyledContents className="contents">
          <div className="wrap-mail-whatsapp">
            <div className="mail-container">
              <div className="text">
                <h4>Write us mail</h4>
                <p>
                  Anything regarding business or for support related queries.
                </p>
              </div>
              <div className="button">
                <div className="image">
                  <FaEnvelope className="fa-icons" />
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=makebucksin@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mail
                </a>
              </div>
            </div>
            <div className="whatsapp-container">
              <div className="text">
                <h4>Chat with us</h4>
                <p>We are available to chat everyday from 10am - 7pm.</p>
              </div>
              <div className="button">
                <div className="image">
                  <FaComment className="fa-icons" />
                </div>
                <a
                  href="https://wa.me/919972470399"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="wrapper-cal">
            <div className="cal-container">
              <div className="text">
                <h4>Book a video call</h4>
                <p>
                  Talk to solve any query related to our program or business.
                </p>
              </div>
              <div className="button">
                <div className="image">
                  <FaComments className="fa-icons" />
                </div>
                <a
                  href="https://cal.com/makebucks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cal.com
                </a>
              </div>
            </div>
          </div>
        </StyledContents>
      </MaxWidthContainer>
    </>
  );
};

export default MoreQuestions;

const StyledMoreQuestions = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem 4.5rem;
  margin-top: 3rem;
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

  //.................Responsive tablet...................//
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

  @media (max-width: 755px) {
    h2,
    span {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
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
  //...........Mobile 550px................//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    margin-bottom: 1.2rem;
    h2,
    span {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  //...........Mobile 450px................//
  @media (max-width: 450px) {
    margin-top: 2rem;
    padding: 0rem 1.5rem;
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

const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
const StyledContents = styled.div`
  padding: 0 4.5rem;
  display: flex;
  gap: 0.7rem;
  margin-bottom: 2rem;
  h4 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 165%;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 160%;
    color: #939393;
  }
  a {
    font-weight: 500;
    font-size: 0.9rem;
    color: #ffffff;
  }
  img {
    width: 80%;
    border-radius: 1rem;
  }
  .mail-container,
  .whatsapp-container,
  .cal-container {
    padding: 1.5rem;
    background: linear-gradient(
      90deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
  }
  .text {
    margin-bottom: 1rem;
  }
  .button {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.3rem 0.7rem;
    display: flex;
    border-radius: 50rem;
    background-color: #0303ce;
    .fa-icons {
      color: #111;
      font-size: 14px;
    }
    .image {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10rem;
      background-color: #eee;
    }
  }
  .wrap-mail-whatsapp {
    display: flex;
    gap: 0.7rem;
  }
  //...........Tablet 1180px................//
  @media (max-width: 1180px) {
    padding: 0 3rem;
  }
  //...........Tablet 1000px................//
  @media (max-width: 1000px) {
    p {
      font-size: 0.8rem;
    }
  }
  //...........Tablet 900px................//
  @media (max-width: 900px) {
    .wrap-mail-whatsapp {
      flex-direction: column;
    }
  }
  //...........Mobile 665px................//
  @media (max-width: 665px) {
    padding: 0rem 2rem;
    .button {
      .fa-icons {
        font-size: 10px;
      }
    }
  }
  //...........Mobile 550px................//
  @media (max-width: 550px) {
    padding: 0 1.5rem;
    flex-direction: column;
    h4 {
      font-size: 0.9rem;
    }
    p,
    a {
      font-size: 0.8rem;
    }
    .mail-container,
    .whatsapp-container,
    .cal-container {
      padding: 1.5rem 1rem;
    }
  }
  //...........Mobile 450px................//
  @media (max-width: 500px) {
    padding: 0 1.5rem;
    h4 {
      font-size: 0.8rem;
    }
    p,
    a {
      font-size: 0.7rem;
    }
    .text {
      margin-bottom: 0.7rem;
    }
    .button {
      padding: 0.3rem 0.7rem;
      .image {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`;
