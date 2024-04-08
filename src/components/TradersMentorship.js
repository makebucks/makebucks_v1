import styled from "styled-components";
import { useState } from "react";
import backImg from "../img/Choose our mentroship eclipse L&R.png";
import ContactUs from "./ContactUs";
import Banner from "../utils/Banner";
import star from "../img/tick icon png.png";
import mentorshipBackImg from "../img/Choose our mentroship eclipse L&R.png";
import proTraderBackImg from "../img/pro trade card eclipse.png";
import { AiOutlineRight } from "react-icons/ai";
import recordIcon from "../img/Video icon blue.png";
import Description from "./Description";
import { Link } from "react-scroll";

const TradersMentorship = () => {
  const [value, setValue] = useState("");
  const [courseactive, setCourseActive] = useState(true);
  const [descactive, setDescactive] = useState(false);
  const showModule = (val) => {
    if (value === val) {
      setValue(() => {
        val = "null";
        return val;
      });
    }
    setValue((oldval) => {
      return val;
    });
  };
  const showContents = (val) => {
    if (val === "course" && !courseactive) {
      setCourseActive(true);
      setDescactive(false);
    } else {
      if (!descactive) {
        setDescactive(true);
        setCourseActive(false);
      }
    }
  };
  return (
    <>
      <StyledHeader>
        <H2>
          Choose Our <StyledSpan> Mentorship.</StyledSpan>
        </H2>

        <StyledPara>
          Get onboard with us. Let’s learn and trade together.
        </StyledPara>
      </StyledHeader>
      <StyledCardContainer>
        <StyledFirstCard>
          <Card>
            <BackDropImg src={mentorshipBackImg} />
            <StyledButtonDiv>
              <StyledButton>Live</StyledButton>
              <StyledButton style={{ background: `#fff`, color: `#0A0B0F` }}>
                Recommended
              </StyledButton>
            </StyledButtonDiv>
            <CardH3>Advanced Trader Program</CardH3>
            <CardPara>
              Learn everything from basic to advanced options trader.
            </CardPara>
            <StyledCardSpan>₹ 4999</StyledCardSpan>
            <StyledAmount>
              ₹ 3499 <STyledAmountSpan>/ Lifetime</STyledAmountSpan>
            </StyledAmount>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Crafted for complete beginners</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>
                Learn Equity, Futures & Options markets
              </StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Learn Technical analysis</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Live trading for a month</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Premium Option selling strategy</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Access to our discord (Lifetime)</StyledBlockP>
            </StyledBlocks>

            <BottomButtons>
              <Link to="banner" smooth={true} offset={-50} duration={500}>
                <StyledJoinBatch>Join Upcoming Batch</StyledJoinBatch>
              </Link>
              <Link to="modules" smooth={true} offset={-50} duration={500}>
                <StyledShowModule>Show modules</StyledShowModule>
              </Link>
            </BottomButtons>
          </Card>
        </StyledFirstCard>
        <StyledSecondCard>
          <Card>
            <BackDropImg src={proTraderBackImg} />
            <StyledButtonDiv>
              <StyledButton>Recorded</StyledButton>
              <StyledButtonFill>Coming soon</StyledButtonFill>
            </StyledButtonDiv>
            <CardH3>Pro Trader Program</CardH3>
            <CardPara>
              Learn how to sell options & adjustments in options.
            </CardPara>
            <StyledCardSpan>₹ 2999</StyledCardSpan>
            <StyledAmount>
              ₹ 1999 <STyledAmountSpan>/ Lifetime</STyledAmountSpan>
            </StyledAmount>
            <StyledBlocksFaded>
              <Img src={star}></Img>
              <BlackCover></BlackCover>
              <StyledBlockPFaded>
                Crafted for complete beginners
              </StyledBlockPFaded>
            </StyledBlocksFaded>
            <StyledBlocksFaded>
              <Img src={star}></Img>
              <BlackCover></BlackCover>

              <StyledBlockPFaded>
                Learn Equity, Futures & Options markets
              </StyledBlockPFaded>
            </StyledBlocksFaded>
            <StyledBlocksFaded>
              <Img src={star}></Img>
              <BlackCover></BlackCover>

              <StyledBlockPFaded>Learn Technical analysis</StyledBlockPFaded>
            </StyledBlocksFaded>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Live trading for a month</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Premium Option selling strategy</StyledBlockP>
            </StyledBlocks>
            <StyledBlocks>
              <Img src={star}></Img>

              <StyledBlockP>Access to our discord (Lifetime)</StyledBlockP>
            </StyledBlocks>
            <BottomButtons>
              <Link to="banner" smooth={true} offset={-50} duration={500}>
                <StyledJoinBatch>Get access</StyledJoinBatch>
              </Link>
              <Link to="modules" smooth={true} offset={-50} duration={500}>
                <StyledShowModule>Show modules</StyledShowModule>
              </Link>
            </BottomButtons>
          </Card>
        </StyledSecondCard>
      </StyledCardContainer>
      <CourseContent>
        <ContentNav>
          <p
            className={courseactive ? "cactive" : "cnotactive"}
            onClick={() => showContents("course")}
          >
            Course content
          </p>
          <p
            className={descactive ? "cactive" : "cnotactive"}
            onClick={() => showContents("desc")}
          >
            Description
          </p>
        </ContentNav>
        {courseactive && (
          <CourseContents id="modules">
            <h4>Advanced trader program</h4>
            <AccordianSection>
              <DropDownSection
                onClick={() => {
                  showModule("one");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("one");
                  }}
                >
                  <StyledP>Introduction to Stock Market</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("one");
                    }}
                  />
                </Module>
                {value === "one" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>
                        What is stock market / stock exchanges
                      </ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Who are stock brokers</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Multiple players in stock market</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>
                        Why 99% people lose money in the market
                      </ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>

              <DropDownSection
                onClick={() => {
                  showModule("two");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("two");
                  }}
                >
                  <StyledP
                    onClick={() => {
                      showModule("two");
                    }}
                  >
                    Deep dive into Technical analysis
                  </StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("two");
                    }}
                  />
                </Module>
                {value === "two" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Technical jargons in the stock market</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Formation of candlestick and patterns</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Market trend and phases</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Supply and Demand</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Chart patterns & Gap theory</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Price action vs Indicators</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Our 4 favorite Indicators</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Trading terminal and your first order</ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
              <DropDownSection
                onClick={() => {
                  showModule("three");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("three");
                  }}
                >
                  <StyledP>Equities & Derivatives markets</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("three");
                    }}
                  />
                </Module>
                {value === "three" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What are equity/Derivatives market</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Stocks vs Indices</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Basics of Futures and Options</ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
              <DropDownSection
                onClick={() => {
                  showModule("four");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("four");
                  }}
                >
                  <StyledP>In-depth view of Options</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("four");
                    }}
                  />
                </Module>
                {value === "four" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What are Call and Put options</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Decoding option jargons</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What are greeks</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Introduction to option chain</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Open Interest (OI) and Max Pain</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Expiry of Options</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Our 4 favorite Indicators</ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
              <DropDownSection
                onClick={() => {
                  showModule("five");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("five");
                  }}
                >
                  <StyledP>Trading in Options</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("five");
                    }}
                  />
                </Module>
                {value === "five" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What is Option Buying</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What is Option Selling</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>Directional & Non-Directional trading</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What are stradles</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What are strangles</ContentP>
                    </StyledContent>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>What is spreads</ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
              <DropDownSection
                onClick={() => {
                  showModule("six");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("six");
                  }}
                >
                  <StyledP>Premium Options selling strategy</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("six");
                    }}
                  />
                </Module>
                {value === "six" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>
                        On this module you'll learn our premium option selling
                        strategy & adjustments, this will give you consistent
                        returns from the market.
                      </ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
              <DropDownSection
                onClick={() => {
                  showModule("seven");
                }}
              >
                <Module
                  onClick={() => {
                    showModule("seven");
                  }}
                >
                  <StyledP>Trading Live with us</StyledP>
                  <AiOutlineRight
                    onClick={() => {
                      showModule("seven");
                    }}
                  />
                </Module>
                {value === "seven" && (
                  <Content>
                    <StyledContent>
                      <RecordImg src={recordIcon}></RecordImg>
                      <ContentP>
                        After your course completion. You will be added to our
                        premium discord server. Where you can trade live with
                        us.
                      </ContentP>
                    </StyledContent>
                  </Content>
                )}
              </DropDownSection>
            </AccordianSection>
          </CourseContents>
        )}
        {descactive && (
          <CourseContents>
            <h4>Advanced trader program</h4>
            <Description />
          </CourseContents>
        )}
      </CourseContent>
      <Banner />
      <ContactUsDiv>
        <ContactUs />
      </ContactUsDiv>
      <Img1 src={backImg}></Img1>
      <Img2 src={backImg}></Img2>
    </>
  );
};
const Module = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: rgba(56, 56, 56, 1);
  border: 0.5px solid rgb(255, 255, 255, 0.5);
`;

const ContentP = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const RecordImg = styled.img`
  width: 2rem;
  height: auto;
`;
const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const BackDropImg = styled.img`
  width: 24rem;
  height: 43rem;
  position: absolute;
  top: -130px;
  right: -25px;
  z-index: 1;
  transform: rotate(-90deg);
`;
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
  @media screen and (min-width: 768px) {
    line-height: 8rem;
  }
`;
const StyledPara = styled.p`
  font-size: 1.875rem;
  width: 60%;
  text-align: center;

  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    width: 80%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 70%;
  }
  @media screen and (max-width: 493px) {
    font-size: 14px;
    padding-top: 1rem;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 1.8rem;
  height: auto;
  @media screen and (max-width: 500px) {
    width: 1.6rem;
  }
`;
const ContactUsDiv = styled.div`
  display: flex;
  width: 100%;
`;
const Img1 = styled.img`
  width: 46rem;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(180deg);
  @media screen and (max-width: 460px) {
    width: 20rem;
  }
  @media screen and (min-width: 460px) and (max-width: 700px) {
    width: 30rem;
  }
`;
const Img2 = styled.img`
  width: 46rem;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (max-width: 460px) {
    width: 10rem;
  }
  @media screen and (min-width: 460px) and (max-width: 700px) {
    width: 25rem;
  }
`;
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  flex-direction: column;
`;
const StyledCardContainer = styled.div`
  display: flex;
  gap: 6rem;
  width: 100%;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 968px) {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
`;
const StyledFirstCard = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
`;
const StyledSecondCard = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
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

const StyledButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 20px;
`;
const StyledButton = styled.button`
  border: 2px solid #bdfa3a;
  background: transparent;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 500;
  @media screen and (max-width: 493px) {
    font-size: 10px;
  }
`;
const StyledButtonFill = styled.button`
  border: 2px solid #bdfa3a;
  background: #bdfa3a;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 500;
  @media screen and (max-width: 493px) {
    font-size: 10px;
  }
  color: #000000;
`;
const Card = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1rem 2rem 2rem 2rem;
  background: #0c0914;
  width: 40rem;
  margin-top: 4rem;
  border-radius: 30px;
  border: double 4px transparent;
  background-image: linear-gradient(#0c0914, #0c0914),
    radial-gradient(circle at top, #434bfd, rgba(255, 182, 182, 0.44));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  flex-direction: column;
  z-index: 4;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 76%;
    margin: 0;
    padding: 1rem;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 44rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 493px) {
    margin-top: 1rem;
    width: 95%;
    padding: 0rem 1rem 2rem 1.5rem;
    gap: 1rem;
    border-radius: 18px;
  }
  @media screen and (min-width: 493px) and (max-width: 768px) {
    margin-top: 1rem;
    width: 40rem;
    padding: 0rem 1rem 2rem 1.5rem;
    gap: 1rem;
    border-radius: 18px;
  }
`;
const CardH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin-top: 6rem;
  line-height: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 8rem;
  }
  @media screen and (max-width: 493px) {
    font-size: 18px;
    margin-top: 8rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 4rem;
  }
`;
const CardPara = styled.p`
  font-size: 1.6rem;
  color: #b0b0b0;
  @media screen and (max-width: 493px) {
    font-size: 12px;
    width: 84%;
  }
`;
const StyledCardSpan = styled.span`
  font-size: 1.5rem;
  text-decoration: line-through;
  color: #fff;
  @media screen and (max-width: 493px) {
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 10px;
  }
  @media screen and (min-width: 493px) and (max-width: 1200px) {
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 10px;
    margin-top: 6px;
  }
`;
const StyledAmount = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;
const STyledAmountSpan = styled.span`
  font-size: 12px;
  color: #b0b0b0;
  font-weight: 400;
`;

const StyledBlocks = styled.div`
  display: flex;
  border-radius: 40px;
  width: 100%;
  background: #181d0dd9;
  padding: 1rem 1rem;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 1rem;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 6px;
  }
`;
const StyledBlocksFaded = styled.div`
  display: flex;
  border-radius: 40px;
  width: 100%;
  background: rgba(24, 29, 13);
  padding: 1rem 0 1rem 1rem;
  align-items: center;
  gap: 1rem;
  z-index: 4;
  position: relative;
  @media screen and (min-width: 1200px) {
    margin-bottom: 6px;
  }
`;
const BlackCover = styled.div`
  position: absolute;
  width: 100%;
  background: rgb(12, 9, 20, 0.7);
  left: 0;
  top: 0;
  height: 100%;
`;
const StyledBlockP = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 493px) {
    font-size: 12px;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    text-align: left;
  }
  @media screen and (max-width: 350px) {
    font-size: 10px;
  }
`;
const StyledBlockPFaded = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 493px) {
    font-size: 12px;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    text-align: left;
  }
  @media screen and (max-width: 350px) {
    font-size: 10px;
  }
`;
const BottomButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  gap: 1rem;
`;
const StyledJoinBatch = styled.button`
  width: 100%;
  border-radius: 50px;
`;
const StyledShowModule = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #434bfd;
  border-radius: 50px;
`;
const CourseContent = styled.div`
  display: flex;
  width: 94%;
  margin: 2rem auto;
  background: #fff;
  border-radius: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1080px) {
    width: 80%;
  }
  @media screen and (min-width: 1080px) {
    width: 94rem;
  }
`;
const ContentNav = styled.div`
  display: flex;
  gap: 4rem;
  padding: 1rem 3.5rem;
  width: 100%;
  border-bottom: 1px solid #898989;
  cursor: pointer;
  min-height: 5.6rem;
`;
const CourseContents = styled.div`
  display: flex;
  padding: 2.5rem 1rem 3.5rem 2.5rem;
  flex-direction: column;
`;

const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

const DropDownSection = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  border-radius: 4px;
  flex-direction: column;
  background-color: rgba(12, 9, 20, 1);
`;

export default TradersMentorship;
