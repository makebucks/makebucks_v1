import styled from "styled-components"
import performanceImg from '../img/Our performance/illustration.png'
import PL from '../img/Our performance/verfied p&l.png'
import YT from '../img/Our performance/youtube.png'
import WN from '../img/Our performance/watch now.png'
import backdropRight from '../img/Our performance/Our performance right eclipse.png'
import backdropLeft from '../img/Our performance/Our performance left eclipse.png'

const OurPerformance = ()=>{
    return (
        <>
             <StyledPerformanceSection>

                    <H2>Our performance.</H2>
        
                
                    <P>Not like other fake gurus, <Styledp>We don’t just teach</Styledp>. We are traders with 
                        4+ experience, who actually trades every single day in the market, 
                        and make consistent profits by selling options.</P>
                    <StyledDiv>
                        <StyledImageLeftDiv>
                            <Img src={performanceImg}/>
                        </StyledImageLeftDiv>
                        <StyledImageRightDiv>
                            <RightDivPL>
                                <PLContent>
                                    <Plp>Verified P&L <PlSpan>(FY 2023 - 2024)</PlSpan></Plp>
                                    <button>View</button>
                                </PLContent>
                                <Plimg src={PL}></Plimg>
                            </RightDivPL>
                            <RightDivYT>
                                    <WCImg src={WN}></WCImg>
                                <YTContent>
                                    <Plp>2023 Trading performance</Plp>
                                    <TYImageDiv>
                                        <YTImg src={YT}></YTImg>
                                        <Plp><a className='twitter' href='https://youtube.com/@makebucks-in?si=hc7d0rG-eJ9pbP3A' target="_blank"
                rel="noreferrer">Watch now</a></Plp>
                                    </TYImageDiv>
                                    
                                </YTContent>
                            </RightDivYT>
                        </StyledImageRightDiv>
                    </StyledDiv>
                    <Img1 src={backdropRight}></Img1>
                    <Img2 src={backdropLeft}></Img2>
                </StyledPerformanceSection>
        </>
    )
}
const Img1 = styled.img`
    width: 50rem;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
`
const Img2 = styled.img`
    width: 50rem;
    height: auto;
    position: absolute;
    bottom: -41%;
    left: 0;
    z-index: 1;
`

const H2 = styled.h2`
    font-size: 6rem;
    text-align: center;
    line-height: 5rem;
    @media screen and (max-width: 460px){
        font-size: 3rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 3rem;
}
@media screen and (max-width: 393px){
    font-size: 30px;
    line-height: 4rem;
  }
  @media screen and (min-width: 768px ){
    line-height: 8rem;
  }
  @media screen and (max-width: 350px){
    font-size:24px;
}
`
const P = styled.p`
    font-size: 1.875rem;
    width: 41%;
    margin: 0rem 0 4rem 0;
    text-align: center;
    @media screen and (max-width: 393px){
    font-size: 1.2rem;
    width: 100%;
    margin-bottom: 4rem;
  }
    @media screen and (max-width: 460px){
        font-size: 1.2rem;
        width: 90%;
        margin-top:.6rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 77%;
    margin-bottom: 5rem;
}

@media screen and (min-width: 768px){
    width: 70rem;
}
@media screen and (max-width: 350px){
   width:100%;
}

`
const Plp = styled.p`
    font-size: 1.875rem;
    text-align: center;
    font-weight:600;
    @media screen and (max-width: 460px){
        font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
}
`
const StyledPerformanceSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Styledp = styled.span`
    font-weight: 600;
    display: inline-block;
`
const StyledDiv = styled.div`
     display: flex;
    width: 100%;
    padding: 0rem 6rem;
    justify-content: center;
    z-index: 3;
    @media screen and (max-width:393px){
        height: auto;
     }
    @media screen and (max-width:460px){
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
    @media screen and (min-width:1080px){
        gap: 5rem;
    }
`

const StyledImageLeftDiv = styled.div`
    display: flex;
    width: 48%;
    height: 100%;
    justify-content: center;
    align-items: center;
border: double 4px transparent;
border-radius: 28px;
  background-image: linear-gradient(white, white), radial-gradient(circle at top, #434BFD,rgba(255, 182, 182, 0.44));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  
  @media screen and (max-width:393px){
    width: 90%;
    border-radius: 14px;
    height: 20rem;
  }
  @media screen and (max-width:460px){
    width: 90%;
    border-radius: 14px;
    height: 20rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    width: 38rem;
    border-radius: 14px;
    height: 20rem;
  }
  @media screen and (min-width: 768px) and (max-width: 968px) {
    width: 50rem;
    height: 30rem;
    border-radius: 14px;
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
    width: 38rem;
    height: 28rem;
    border-radius: 14px;
  }
  @media screen and (min-width:1080px){
    width: 56rem;
    height: 40rem;
    }

`
const Img = styled.img`
    width: 70%;
    height: auto;
`

const StyledImageRightDiv = styled.div`
    display: flex;
    width: 38%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width:460px){
        width: 94%;
    }
    @media screen and (min-width: 460px) and (max-width: 968px) {
        width: 94%;
    }
    @media screen and (min-width: 968px) and (max-width: 1080px) {
        width: 40rem;
    }
    @media screen and (min-width:1080px){
    width: 52rem;
    }
    `
const RightDivPL = styled.div`
     display: flex;
    background: rgba(12, 9, 20, 1);
    height: 50%;
    border-radius: 28px;
    width: 89%;
    padding: 0 3.5rem;
    position: relative;
    @media screen and (max-width:530px){
    border-radius: 10px;
    padding: 0 1rem;
  }
 

  @media screen and (max-width:460px){
    height: 12rem;
    width: 94%;
    padding: 0 3rem;
    border-radius: 14px;
  }
  @media screen and (min-width:460px) and (max-width:768px){
    height: 14rem;
    width: 38rem;
    padding: 0 3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 968px) {
    width: 49rem;
    height: 17rem;
    border-radius: 14px;
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
        width: 40rem;
    }
    @media screen and (min-width:1080px){
    width: 52rem;
    }
    @media screen and (max-width:350px){
        padding: 0 1.5rem;
      }
`
const PLContent = styled.div`
        display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: baseline;
    font-size: 1.5rem;
    font-weight: 700;
    flex-direction: column;
    color: #fff;
`
const PlSpan = styled.span`
    color: rgba(183, 183, 183, 1);
`
const Plimg = styled.img`
        width: 20%;
    height: 56%;
    position: absolute;
    right: 38px;
    top: 20%;
    @media screen and (max-width:530px){
        width: 18%;
    height: 48%;
    right: 19px;
    top: 26%;
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
    width: 14%;
    right: 20px;
  }
  @media screen and (max-width:350px){
    width: 14%;
    height: 37%;
    right: 10px;
    top: 25%;
  }
`
const RightDivYT = styled.div`
    background: #fff;
    display: flex;
    width: 89%;
    height: 50%;
    border-radius: 28px;
    justify-content: center;
    padding: 1.5rem;
    position: relative;
    @media screen and (max-width:460px){
        border-radius: 14px;
    height: 12rem;
    width: 94%;
  }
 
  @media screen and (min-width:460px) and (max-width:768px){
    height: 14rem;
    width: 38rem;
    border-radius: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 968px) {
    width: 49rem;
    height: 17rem;
    border-radius: 14px;
    
  }
  @media screen and (min-width: 968px) and (max-width: 1080px) {
        width: 40rem;
    }
    @media screen and (min-width:1080px){
    width: 52rem;
    }
`

const WCImg = styled.img`
    width: 35%;
    height: 106%;
    position: absolute;
    bottom: 0;
    left: 0px;
    @media screen and (max-width:530px){

    width: 31%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 15px;
    }

    @media screen and (min-width: 968px) and (max-width: 1080px) {
        width: 29%;
    height: 88%;
    left: -5px;
    }
    @media screen and (max-width:350px){
        width: 30%;
        height: 85%;
        position: absolute;
        bottom: 0;
        left: 6px;
    }
`
const YTContent = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    top: 30%;
    font-size:1.5rem;
    font-weight: 500;
    @media screen and (max-width:530px){
        right: 17%;
    top: 30%;
    }
    @media screen and (max-width:393px){
        right: 10%;
    top: 30%;
    }
    @media screen and (max-width:350px){
        right: 3%;
    top: 30%;
    }
`
const TYImageDiv = styled.div`
        display: flex;
    align-items: center;
    gap: 1rem;
    color: #434BFD;
    font-weight: 600;
    margin-top: 1rem;
    
`
const YTImg = styled.img`
    width: 25%;
`
export default OurPerformance;