import styled from "styled-components";
import excla from "../img/banner.png";
const Banner = () => {
  return (
    <>
      <BannerSection id="banner">
        <BannerContainer>
          <BannerContent>
            <div className="excla">
              <img src={excla} alt="exc" />
            </div>
            <H4>We have paused our current live mentorship program </H4>
            <P>
              It will be available soon, even if you purchase any of above
              courses. You will be added to our discord community we will guide
              you live from there.
            </P>
          </BannerContent>
        </BannerContainer>
      </BannerSection>
    </>
  );
};
const BannerSection = styled.div`
  width: 80%;
  height: 17rem;
  background: linear-gradient(180deg, #ffd0b1 -5%, #cbcbcb 116.22%);
  margin: 0 auto;
  padding: 3rem 3rem;
  border: 3px solid #ffff;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 94%;
    height: 24rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1080px) {
    width: 80%;
    height: 24rem;
  }
  @media screen and (min-width: 1080px) {
    width: 94rem;
  }
`;
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 3;
`;
const P = styled.p`
  font-size: 1.275rem;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 14px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 0 1rem;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 460px) {
    width: 100%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1080px) {
    width: 80%;
  }
`;
const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0c0914;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 18px;
  }
`;
export default Banner;
