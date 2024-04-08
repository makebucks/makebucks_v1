import styled from "styled-components";
import bannerImg from '../img/Saly-12.png'
const Banner = () =>{
    return (
        <>
            <BannerSection id="banner">
            <BannerContainer>
                <BannerContent>
                    <H4>We are working on our payment gateway </H4>
                    <P>Meanwhile to buy our program, you can WhatsApp us.</P>
                </BannerContent>
                <a className='mail' href='https://wa.me/919972470399' target="_blank"
                rel="noreferrer"><WhatsAppDiv>
                    <Span>WhatsApp us</Span>
                </WhatsAppDiv></a>
            </BannerContainer>
            <BannerImage>
                 <Img1 src={bannerImg}></Img1>
            </BannerImage>
            </BannerSection>
        </>
    )
}
const BannerSection = styled.div`
   width: 80%;
    height: 17rem;
    background: linear-gradient(180deg, #FFD0B1 -5%, #CBCBCB 116.22%);
    margin: 0 auto;
    padding: 3rem 3rem;
    border: 3px solid #ffff;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        width:94%;
    }
    @media screen and (min-width: 768px) and (max-width: 1080px){
        width: 80%;
    }
    @media screen and (min-width: 1080px){
        width: 94rem;
    }
`
const BannerContainer = styled.div`
           z-index: 3;
   
`
const P = styled.p`
    font-size: 1.875rem;

    @media screen and (max-width: 460px){
        font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {
    font-size:14px;
}
`
const BannerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 1rem;
    @media screen and (max-width: 460px){
        width: 0;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    width: 18%;
}
`
const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 0 1rem;
`
const H4 = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    @media screen and (max-width: 460px){
        font-size: 1.5rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.7rem;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {
    font-size:18px;
}
`
const WhatsAppDiv = styled.button`
    background: rgba(23, 181, 82, 1);
    padding: .5rem 1rem;
;
`
const Span = styled.span`
    font-size: 1.2rem;
    color: #fff;
    @media screen and (min-width: 768px) and (max-width: 1080px) {
        font-size:12px;
    }
`
const Img1 = styled.img`
    width: 16rem;
    height: auto;
    @media screen and (max-width: 460px){
        width: 10rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    width: 10rem;
}
   
`
export default Banner;