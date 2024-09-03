import styled from "styled-components";
import backImg from "../img/How we work eclipse.png";
import { AiOutlineRight } from "react-icons/ai";
import recordIcon from "../img/Video icon blue.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HowWeWork = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
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
  return (
    <>
      <StyledHWWSection>
        <div className="wcu_title">
          <H2>How we work.</H2>
        </div>
        <div className="wcu_para">
          <P>Here go with step by step details</P>
        </div>
      </StyledHWWSection>
      <HWWContainer>
        <CardHolder>
          <Card>
            <CardContent>
              <ContentDiv>
                <Number>01</Number>
              </ContentDiv>
              <StyledP>
                Buy our program, after purchasing our mentorship program.
              </StyledP>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ContentDiv>
                <Number>02</Number>
              </ContentDiv>
              <StyledP>
                You will be get access to our platform, where you learn & get
                community access.
              </StyledP>
            </CardContent>
          </Card>
        </CardHolder>
        <CourseModuleCard>
          <Card>
            <CardContent>
              <ContentDiv>
                <Number>03</Number>
              </ContentDiv>
              <StyledP>
                You will be learning following{" "}
                <StyledLink onClick={() => navigate("/traders-mentorship")}>
                  course modules
                </StyledLink>
              </StyledP>
              <CourseModuleSection>
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
                    <StyledP>Introduction to stock market</StyledP>
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
                        <ContentP>
                          What is DEMAT account & players in the stock market
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>How to open DEMAT & Trading account</ContentP>
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
                        <ContentP>
                          Introduction & Technical jargons in the market
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Candlesticks patterns & why it works
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Supply & Demand & its importance</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Plotting Supply & Demand (live)</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Identifying market trends & phases</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Gap theory & Top 6 chart patterns</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Price action vs Indicators (Leading & Lagging)
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          How to select stocks for Intraday & Swing trading
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          How to place your first order & types of orders
                        </ContentP>
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
                    <StyledP>Risk management \ Money management</StyledP>
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
                        <ContentP>
                          How to manage you risk (Risk to Reward)
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          How much win % actually you need to profitable trader
                        </ContentP>
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
                    <StyledP>Trading psychology</StyledP>
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
                        <ContentP>Why trading psychology is important</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Tips to improve trading psychology</ContentP>
                      </StyledContent>
                    </Content>
                  )}
                </DropDownSection>
                <DropDownSection
                  onClick={() => {
                    showModule("eleven");
                  }}
                >
                  <Module
                    onClick={() => {
                      showModule("eleven");
                    }}
                  >
                    <StyledP>Bonus lecture</StyledP>
                    <AiOutlineRight
                      onClick={() => {
                        showModule("eleven");
                      }}
                    />
                  </Module>
                  {value === "eleven" && (
                    <Content>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Tracking global stock market news</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Intraday trading strategy </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Recap of technical analysis (live chart)
                        </ContentP>
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
                    <StyledP> Introduction to futures & options</StyledP>
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
                        <ContentP>Overview of financial markets</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Understanding futures</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Real life examples for futures</ContentP>
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
                    <StyledP>In depth study of futures</StyledP>
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
                        <ContentP>Futures in the Indian stock market</ContentP>
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
                    <StyledP>Comprehensive study of options</StyledP>
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
                        <ContentP>Introduction to option contracts</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Real life examples for options contracts
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          In depth view of call options & put options
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Understanding and decoding Option greeks
                        </ContentP>
                      </StyledContent>
                    </Content>
                  )}
                </DropDownSection>
                <DropDownSection
                  onClick={() => {
                    showModule("eight");
                  }}
                >
                  <Module
                    onClick={() => {
                      showModule("eight");
                    }}
                  >
                    <StyledP>Directional Options trading strategies</StyledP>
                    <AiOutlineRight
                      onClick={() => {
                        showModule("eight");
                      }}
                    />
                  </Module>
                  {value === "eight" && (
                    <Content>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Option buying strategies</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Bull call spreads</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Bear put spreads</ContentP>
                      </StyledContent>
                    </Content>
                  )}
                </DropDownSection>
                <DropDownSection
                  onClick={() => {
                    showModule("nine");
                  }}
                >
                  <Module
                    onClick={() => {
                      showModule("nine");
                    }}
                  >
                    <StyledP>
                      {" "}
                      Non - Directional Options trading strategies
                    </StyledP>
                    <AiOutlineRight
                      onClick={() => {
                        showModule("nine");
                      }}
                    />
                  </Module>
                  {value === "nine" && (
                    <Content>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Market conditions to use Long straddle
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Understanding Long strangle</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Short straddle for neutral market conditions
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Short strangle for neutral market conditions
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Advanced short straddle with hedges</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Eliminating the risk of short strangle with iron
                          condor
                        </ContentP>
                      </StyledContent>
                    </Content>
                  )}
                </DropDownSection>
                <DropDownSection
                  onClick={() => {
                    showModule("ten");
                  }}
                >
                  <Module
                    onClick={() => {
                      showModule("ten");
                    }}
                  >
                    <StyledP>Bonus lecture</StyledP>
                    <AiOutlineRight
                      onClick={() => {
                        showModule("ten");
                      }}
                    />
                  </Module>
                  {value === "ten" && (
                    <Content>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Understanding the importance of Open Interest
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>
                          Practical tips for successful trading
                        </ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Conclusion</ContentP>
                      </StyledContent>
                      <StyledContent>
                        <RecordImg src={recordIcon}></RecordImg>
                        <ContentP>Bonus- Concept of short selling</ContentP>
                      </StyledContent>
                    </Content>
                  )}
                </DropDownSection>
              </CourseModuleSection>
            </CardContent>
          </Card>
        </CourseModuleCard>
        <CardHolder>
          <Card>
            <CardContent>
              <ContentDiv>
                <Number>04</Number>
              </ContentDiv>
              <StyledP>
                After completing all the modules, you will be added to our
                discord server. Where you will be trading live with us for a
                month.
              </StyledP>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ContentDiv>
                <Number>05</Number>
              </ContentDiv>
              <StyledP>
                With the help of us, you can be profitable trader.
              </StyledP>
            </CardContent>
          </Card>
        </CardHolder>

        <BackDropImg src={backImg}></BackDropImg>
      </HWWContainer>
    </>
  );
};
const CourseModuleSection = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 100%;
  gap: 0.6rem;
`;
const Module = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 3rem;
  padding: 0.5rem 2rem;
  background: rgba(237, 237, 237, 1);
`;
const RecordImg = styled.img`
  width: 2rem;
  height: auto;
`;
const BackDropImg = styled.img`
  width: 106rem;
  height: auto;
  position: absolute;
  z-index: 1;
  bottom: -22px;
  left: 9%;
`;
const H2 = styled.h2`
  font-size: 6rem;
  line-height: 5rem;
  @media screen and (max-width: 460px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 393px) {
    font-size: 30px;
    line-height: 4rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 24px;
  }
`;
const P = styled.p`
  font-size: 1.875rem;
  text-align: center;

  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    margin-top: 0.6rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 393px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    line-height: 8rem;
  }
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
const StyledHWWSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
`;
const HWWContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  gap: 1rem;
  margin-top: 3rem;
`;
const CardHolder = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 75.5%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0rem 2rem;
    gap: 1rem;
    width: 100%;
  }
  @media screen and (min-width: 800px) and (max-width: 1080px) {
    width: 89%;
  }
  @media screen and (min-width: 1080px) {
    width: 100rem;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: baseline;
  padding: 2rem;
  background: #0c0914;
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin: 0 auto;
  @media screen and (max-width: 460px) {
    border-radius: 10px;
    padding: 2rem;
  }
  @media screen and (max-width: 350px) {
    padding: 1.5rem;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  width: 100%;
`;
const ContentDiv = styled.div`
  display: flex;
  background-color: #494949;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 530px) {
    width: 3rem;
    height: 3rem;
  }
  @media screen and (min-width: 530px) and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;
const Number = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 530px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 530px) and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
const CourseModuleCard = styled.div`
  display: flex;
  width: 100%;
  z-index: 10;
  @media screen and (max-width: 800px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1080px) {
    width: 89%;
  }
  @media screen and (min-width: 1080px) {
    width: 100rem;
  }
`;
const StyledLink = styled.span`
  color: #a4a4ff;
  text-decoration: underline;
  cursor: pointer;
`;

const DropDownSection = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  height: auto;
  color: #0c0914;
  align-items: center;
  justify-content: space-between;
  font-weight: 200;
  font-size: 1.5rem;
  border-radius: 10px;
  flex-direction: column;
  margin-bottom: 0.3rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const JoinPara = styled.p`
  font-size: 2rem;
  color: #474748;
  text-align: center;
  width: 49%;
  padding: 3rem 0;
  @media screen and (max-width: 800px) {
    width: 88%;
    padding: 0;
    font-size: 18px;
    margin: 2rem 0 1rem 0;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 0;
    font-size: 12px;
    margin-top: 2rem;
  }
`;

export default HowWeWork;
