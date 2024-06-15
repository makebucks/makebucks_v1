import styled from "styled-components";
import star from "../img/tick icon png.png";
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
          <CardH3>Foundation of stock market</CardH3>
          <CardPara>
            Learn everything from basic to advanced options trader.
          </CardPara>
          <StyledCardSpan>₹ 5999</StyledCardSpan>
          <StyledAmount>
            ₹ 299 <STyledAmountSpan>/ Lifetime</STyledAmountSpan>
          </StyledAmount>
          <StyledBlocks>
            <Img src={star}></Img>
            <StyledBlockP>Crafted for complete beginners</StyledBlockP>
          </StyledBlocks>
          <StyledBlocks>
            <Img src={star}></Img>
            <StyledBlockP>Learn stock market trading - Equity</StyledBlockP>
          </StyledBlocks>
          <StyledBlocks>
            <Img src={star}></Img>
            <StyledBlockP>Learn advanced technical analysis</StyledBlockP>
          </StyledBlocks>
          <StyledBlocks>
            <Img src={star}></Img>
            <StyledBlockP>Get certification</StyledBlockP>
          </StyledBlocks>
          <StyledBlocks>
            <Img src={star}></Img>
            <StyledBlockP>Access to our discord (Lifetime)</StyledBlockP>
          </StyledBlocks>
          <BottomButtons>
            <a
              className="tagmon"
              href="https://learn.makebucks.in/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledJoinBatch>
                Enroll now <span>-&gt;</span>
              </StyledJoinBatch>
            </a>
            <StyledShowModule onClick={() => navigate("/traders-mentorship")}>
              Show modules
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
  width: 60%;
  text-align: center;

  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    width: 80%;
    margin-top: 0.6rem;
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
  width: 1.8rem;
  height: auto;
  @media screen and (max-width: 500px) {
    width: 1.6rem;
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
  right: 12px;
  top: 20px;
`;
const StyledButton = styled.button`
  border: 2px solid #bdfa3a;
  background: transparent;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 500;
  .live {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 493px) {
    font-size: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1rem 2rem 2rem 2rem;
  background: #0c0914;
  width: 44rem;
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
    margin-top: 4rem;
    width: 95%;
    padding: 0rem 1rem 2rem 1.5rem;
    gap: 1rem;
    border-radius: 18px;
  }
  @media screen and (min-width: 493px) and (max-width: 768px) {
    margin-top: 4rem;
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
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 1rem;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 6px;
  }
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
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
`;
const StyledShowModule = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #434bfd;
  border-radius: 50px;
`;
export default MentorShipProgram;
