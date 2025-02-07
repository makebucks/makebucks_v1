import React from "react";
import { useState } from "react";
import styled from "styled-components";

const datas = [
  {
    questions: "Are you a profitable trader?",
    answer:
      "Yes we are, Financial year 2024 we used 24L to generate above +30%. Current FY 2025 (till dec) generated above +17%",
  },
  {
    questions: "Do I need any prior trading experience to use this system?",
    answer:
      "No, our system is designed for everyone, even for complete beginners. Its is simple to follow and requires no techical expertise",
  },
  {
    questions: "Do you know trading or investing in the stock market is risky?",
    answer:
      "Yes, it can be, but risks are high only for those without proper knowledge or strategy.",
  },
  {
    questions: "How will I get support after your live class?",
    answer:
      "You will be added to our WhatsApp group & Discord for support & trade alerts.",
  },
  {
    questions:
      "Is this trading system suitable for both beginners and experienced traders?",
    answer:
      "Absolutely! Beginners can start trading confidently, and experienced traders can refine their strategies for better results.",
  },
  {
    questions:
      "How do you ensure the system minimizes risks and manages losses?",
    answer:
      "Our system includes built-in risk management rules to protect your capital. You’ll always know how much is at stake before entering a trade.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <MaxWidthContainer className="maxwidth-container">
        <StyledFaq>
          <div className="left-titles">
            <h2>Frequently </h2>
            <span>Asked Questions.</span>
          </div>
          <p className="right-description">
            Find clear answers to the most common questions about our program.
            We’re here to make your journey smooth and hassle-free!
          </p>
        </StyledFaq>
        <StyledFaqContainer>
          <div className="container">
            <div className="questions-wrappper">
              {datas.map((item, i) => {
                return (
                  <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <h4>{item.questions}</h4>
                      <span>{selected === i ? "-" : "+"}</span>
                    </div>
                    <div
                      className={selected === i ? "content-show" : "content"}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </StyledFaqContainer>
      </MaxWidthContainer>
    </>
  );
};

export default Faq;

const MaxWidthContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const StyledFaq = styled.div`
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
  //.................Responsive tablet 1000px...................//
  @media (max-width: 1000px) {
    p {
      font-size: 0.9rem;
      line-height: 175%;
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
  //...........Mobile 550px................//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    margin: 2rem 0rem 1rem 0rem;
    h2,
    span {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 180%;
    }
  }
  //...........Mobile 450px................//
  @media (max-width: 450px) {
    padding: 0rem 1.5rem;
    h2,
    span {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 160%;
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

const StyledFaqContainer = styled.div`
  padding: 0 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  h4 {
    width: 90%;
    font-weight: 500;
    font-size: 1rem;
    line-height: 165%;
    color: #ffffff;
    /* margin-bottom: 0.5rem; */
  }
  p {
    font-size: 0.9rem;
    line-height: 160%;
    color: #939393;
  }
  .container-left,
  .container-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .item {
    background: linear-gradient(
      90deg,
      rgba(3, 3, 206, 0.3) -20%,
      rgba(12, 9, 20, 0.3) 70%
    );
    border-radius: 1.2rem;
    border: 0.5px solid rgba(147, 147, 147, 0.25);
    padding: 1.5rem;
  }
  .questions-wrappper {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    .content {
      max-height: 0;
      overflow: hidden;
      /* transition: all 0.5s ease; */
    }
    .content-show {
      /* height: auto; */
      /* max-height: 999rem; */
      padding-top: 0.3rem;
      /* transition: all 0.5s ease; */
    }
  }
  //...........Tablet 1180px...............
  @media (max-width: 1180px) {
    padding: 0 3rem;
  }
  //...........Tablet 850px...............
  @media (max-width: 850px) {
    h4 {
      font-size: 0.9rem;
    }
  }
  //...........Tablet 665px...............
  @media (max-width: 665px) {
    padding: 0rem 2rem;
  }
  //...........Mobile 550px................//
  @media (max-width: 550px) {
    padding: 0rem 1.5rem;
    font-size: 0.8rem;
    h4,
    p {
    }
    .questions-wrappper {
      .item {
        padding: 1rem;
      }
    }
  }
  //...........Mobile 450px................//
  @media (max-width: 450px) {
    padding: 0rem 1.5rem;
    h4,
    p {
      font-size: 0.7rem;
    }
    .questions-wrappper {
      .title {
        h4 {
          font-weight: 400;
        }
      }
    }
  }
`;
