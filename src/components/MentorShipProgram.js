import styled from "styled-components";
import mentorshipBackImg from "../img/Choose our mentroship eclipse L&R.png";
import { useNavigate } from "react-router-dom";
import recorded from "../img/live icon.png";
const MentorShipProgram = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledMSPSection>
        <H2>Mentorship Program.</H2>
        <P>
          Transparent pricing for you. Choose our program and get access to our
          trading community,{" "}
          <StyledSpan onClick={() => navigate("/traders-mentorship")}>
            Learn more
          </StyledSpan>
        </P>
        <Card>
          <BackDropImg src={mentorshipBackImg} />
          <div className="row">
            <div className="description">
              <CardH3>Foundation of stock market trading</CardH3>
              <CardPara>
                Learn everything from basic to advanced in equity trading.
              </CardPara>
            </div>
            <StyledButtonDiv>
              <StyledButton>
                {" "}
                <div className="live">
                  <Img src={recorded}></Img>
                  Recorded
                </div>
              </StyledButton>
              <StyledButton
                style={{
                  background: `#DBFF73
`,
                  color: `#0A0B0F`,
                }}
              >
                Limited offer
              </StyledButton>
            </StyledButtonDiv>
          </div>

          <StyledCardSpan>₹ 599</StyledCardSpan>
          <StyledAmount>
            ₹ 299 <STyledAmountSpan>/ Lifetime</STyledAmountSpan>
          </StyledAmount>

          <BottomButtons>
            <StyledJoinBatch>
              <a
                className="tagmon"
                href="https://learn.makebucks.in/l/456472bb0d"
                target="_blank"
                rel="noreferrer"
              >
                Enroll now <span>-&gt;</span>
              </a>
            </StyledJoinBatch>

            <StyledShowModule onClick={() => navigate("/traders-mentorship")}>
              More details
            </StyledShowModule>
          </BottomButtons>
        </Card>
        <Card>
          <BackDropImg src={mentorshipBackImg} />
          <div className="row">
            <div className="description">
              <CardH3>Futures & Options trading masterclass</CardH3>
              <CardPara>
                Learn about the concepts of Options buying & selling strategies
                to generate income.
              </CardPara>
            </div>
            <StyledButtonDiv>
              <StyledButton>
                {" "}
                <div className="live">
                  <Img src={recorded}></Img>
                  Recorded
                </div>
              </StyledButton>
              <StyledButton
                style={{
                  background: `#DBFF73
`,
                  color: `#0A0B0F`,
                }}
              >
                Limited offer
              </StyledButton>
            </StyledButtonDiv>
          </div>

          <StyledCardSpan>₹ 999</StyledCardSpan>
          <StyledAmount>
            ₹ 499 <STyledAmountSpan>/ Lifetime</STyledAmountSpan>
          </StyledAmount>

          <BottomButtons>
            <StyledJoinBatch>
              <a
                className="tagmon"
                href="https://learn.makebucks.in/l/271bf4763e"
                target="_blank"
                rel="noreferrer"
              >
                Enroll now <span>-&gt;</span>
              </a>
            </StyledJoinBatch>

            <StyledShowModule onClick={() => navigate("/traders-mentorship")}>
              More details
            </StyledShowModule>
          </BottomButtons>
        </Card>
      </StyledMSPSection>
    </>
  );
};
const BackDropImg = styled.img`
  width: 24rem;
  height: 43rem;
  position: absolute;
  top: -92px;
  right: -25px;
  z-index: 1;
  transform: rotate(-90deg);
`;
const H2 = styled.h2`
  font-size: 6rem;
  text-align: center;
  line-height: 5rem;
  @media screen and (max-width: 460px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 493px) {
    font-size: 30px;
    line-height: 4rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 8rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 24px;
  }
`;
const P = styled.p`
  font-size: 1.875rem;
  width: 42%;
  text-align: center;

  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    width: 80%;
    margin-top: 0.6rem;
  }
  @media screen and (min-width: 768px) {
    width: 41%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 70%;
  }
  @media screen and (max-width: 493px) {
    font-size: 1.2rem;
    padding-top: 1rem;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 1.6rem;
  height: auto;
  @media screen and (max-width: 500px) {
    width: 1.4rem;
  }
`;
const StyledMSPSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 6rem 1rem 0 0.9rem;
  align-items: center;
  justify-content: center;
`;
const StyledSpan = styled.span`
  color: #434bfd;
  cursor: pointer;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 12%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 9%;
  }
`;
const StyledButton = styled.button`
  border: 2px solid #bdfa3a;
  background: transparent;
  border-radius: 50px;
  font-size: 0.9rem;
  padding: 0.2rem 1rem;
  font-weight: 500;
  width: 100%;
  .live {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
    font-size: 8px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: baseline;
  padding: 3rem 1rem 3rem 3rem;
  background: #0c0914;
  width: 57rem;
  margin-top: 4rem;
  border-radius: 30px;
  border: double 4px transparent;
  background-image: linear-gradient(#0c0914, #0c0914),
    radial-gradient(circle at top, #434bfd, rgba(255, 182, 182, 0.44));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  flex-direction: column;
  z-index: 4;
  position: relative;
  overflow: hidden;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 2rem;
  }
  .description {
    display: block;
    width: 71%;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 76%;
    margin: 0;
  }
  @media screen and (min-width: 620px) and (max-width: 768px) {
    min-width: 50rem;
  }
  @media screen and (min-width: 510px) and (max-width: 620px) {
    min-width: 50rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 54rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 510px) {
    margin-top: 4rem;
    min-width: 94%;
    padding: 0rem 1rem 2rem 1.5rem;
    border-radius: 18px;
    .description {
      width: 71%;
    }
  }
  @media screen and (min-width: 493px) and (max-width: 768px) {
    margin-top: 4rem;
    width: 40rem;
    padding: 0rem 1rem 2rem 1.5rem;
    border-radius: 18px;
  }
`;

const CardH3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 493px) {
    font-size: 16px;
    margin-top: 2rem;
  }
  @media screen and (min-width: 493px) and (max-width: 768px) {
    font-size: 18px;
    margin-top: 1em;
  }
  @media screen and (min-width: 768px) {
  }
`;

const CardPara = styled.p`
  font-size: 14px;
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
    top: 4px;
  }
  @media screen and (min-width: 493px) and (max-width: 1200px) {
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 4px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 4px;
  }
`;
const StyledAmount = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 510px) {
    font-size: 1.5rem;
  }
`;
const STyledAmountSpan = styled.span`
  font-size: 12px;
  color: #b0b0b0;
  font-weight: 400;
  @media screen and (max-width: 510px) {
    font-size: 10px;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  gap: 1rem;
`;
const StyledJoinBatch = styled.button`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 10px;
  width: 17%;
  padding: 0.4rem 0.5rem;
  @media screen and (max-width: 620px) {
    font-size: 10px;
    width: 20%;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    width: 38%;
  }
`;
const StyledShowModule = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #434bfd;
  border-radius: 50px;
  font-size: 10px;
  width: 17%;
  padding: 0.4rem 0.5rem;
  @media screen and (max-width: 620px) {
    font-size: 10px;
    width: 20%;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    width: 38%;
  }
`;
export default MentorShipProgram;
