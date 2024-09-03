import styled from "styled-components";
import backdropRight from "../img/Our performance/Our performance right eclipse.png";
import backdropLeft from "../img/Our performance/Our performance left eclipse.png";

const OurPerformance = () => {
  return (
    <>
      <StyledPerformanceSection>
        <H2>Our performance.</H2>

        <P>
          Not like other fake gurus, <Styledp>We don’t just teach</Styledp>. We
          are traders with 4+ experience, who actually trades every single day
          in the market, and make consistent profits by selling options.
        </P>
        <StyledDiv>
          <StyledImageRightDiv>
            <RightDivPL>
              <PLContent>
                <Plp>
                  Verified P&L <PlSpan>(FY 2023 - 2024)</PlSpan>
                </Plp>
                <div className="PlBttn">
                  <a
                    className="view"
                    href="https://verifiedpnldocs.fyers.in/VerifiedPNL/htmls/aaa841a7-7e26-4714-a04c-bdfefc3a246e.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>View</button>
                  </a>
                  <a
                    className="yt"
                    href="https://youtube.com/@makebucks-in?si=hc7d0rG-eJ9pbP3A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="yt">Watch on YouTube</button>
                  </a>
                </div>
              </PLContent>
            </RightDivPL>
          </StyledImageRightDiv>
        </StyledDiv>
        <Img1 src={backdropRight}></Img1>
        <Img2 src={backdropLeft}></Img2>
      </StyledPerformanceSection>
    </>
  );
};
const Img1 = styled.img`
  width: 50rem;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
`;
const Img2 = styled.img`
  width: 50rem;
  height: auto;
  position: absolute;
  bottom: -41%;
  left: 0;
  z-index: 1;
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
  @media screen and (max-width: 393px) {
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
  width: 41%;
  margin: 0rem 0 4rem 0;
  text-align: center;
  @media screen and (max-width: 393px) {
    font-size: 1.2rem;
    width: 100%;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
    width: 90%;
    margin-top: 0.6rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 77%;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 768px) {
    width: 70rem;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;
const Plp = styled.p`
  font-size: 1.875rem;
  text-align: center;
  font-weight: 600;
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const StyledPerformanceSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Styledp = styled.span`
  font-weight: 600;
  display: inline-block;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 6rem;
  justify-content: center;
  z-index: 3;
  @media screen and (max-width: 393px) {
    height: auto;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0;
  }
  @media screen and (min-width: 460px) and (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0;
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
    padding: 0;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 1080px) {
    gap: 5rem;
  }
`;

const StyledImageRightDiv = styled.div`
  display: flex;
  width: 38%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 460px) {
    width: 94%;
  }
  @media screen and (min-width: 460px) and (max-width: 968px) {
    width: 94%;
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
    width: 40rem;
  }
  @media screen and (min-width: 1080px) {
    width: 52rem;
  }
`;
const RightDivPL = styled.div`
  display: flex;
  background: rgba(12, 9, 20, 1);
  height: 25vh;
  border-radius: 28px;
  width: 84%;
  position: relative;
  justify-content: center;
`;
const PLContent = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: baseline;
  font-size: 1.5rem;
  font-weight: 700;
  flex-direction: column;
  color: #fff;
  .PlBttn {
    display: flex;
    gap: 2rem;
  }
  .yt {
    background-color: #555555;
  }
`;
const PlSpan = styled.span`
  color: rgba(183, 183, 183, 1);
`;

export default OurPerformance;
