import styled from 'styled-components'
import Market from '../img/Why choose us/Market analysis.png'
import LiveTrade from '../img/Why choose us/Live trading.png'
import LiveQA from '../img/Why choose us/Live Q&A.png'
import stratergy from '../img/Why choose us/Strategy updates.png'
import personalMentor from '../img/Why choose us/Personal mentor.png'
import more from '../img/Why choose us/And more.png'
const WcuSection =()=>{
    return(
        <>
            <StyledWCUSection id="wcu">
                    <H2>Why choose us.</H2>
                    <StyledPara>Here are some highlights about our goals & offerings</StyledPara>
                
                <CardSection>   
                    <SmallCard>
                        <CardBlock>
                            <Img src={Market}></Img>
                            <P>Market analysis</P>
                        </CardBlock>
                        <CardBlock>
                            <Img src={LiveTrade}></Img>
                            <P>Live trading</P>
                        </CardBlock>
                       <CardBlock>
                            <Img src={LiveQA}></Img>
                            <P>Live Q/A sessions</P>
                        </CardBlock>
                    </SmallCard>
                   
                    <MiddleCard>
                        <Learn>
                            <H4>Learn with <StyledSpan>makebucks</StyledSpan></H4>
                            <StyledTagLine>We are on a mission to make every
                                common people to a profitable trader 
                                and the social connection to support 
                                and build a strong financial future 
                                in the community. </StyledTagLine>
                        </Learn>
                        </MiddleCard>
                    <SmallCard>
                        <CardBlock>
                            <Img src={stratergy}></Img>
                            <P>Stratergy pdates</P>
                        </CardBlock>
                        <CardBlock>
                            <Img src={personalMentor}></Img>
                            <P>Personal mentor</P>
                        </CardBlock>
                        <CardBlock>
                            <Img src={more}></Img>
                            <P>And more</P>
                        </CardBlock>
                    </SmallCard>
                    </CardSection>
                </StyledWCUSection>
        </>
    )
}
const H2 = styled.h2`
    font-size: 6rem;
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
const StyledTagLine = styled.p`
     font-size: 1.875rem;
    text-align: left;
    color: #C3C3C3;
    @media screen and (max-width: 460px){
        font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
       font-size: 1.5rem;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {  
        font-size: 1.5rem;
}
@media screen and (max-width: 393px){
    font-size: 14px;
    font-weight: 400;
    padding-top: 1rem;
  }
  @media screen and (max-width: 320px){
    font-size: 12px;
  }
`
const P = styled.p`
    font-size: 1.875rem;
    text-align: center;
    @media screen and (max-width: 460px){
        font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
       font-size: 1.5rem;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {  
        font-size: 1.5rem;
}
@media screen and (max-width: 393px){
    font-size: 12px;
    padding-top: 1rem;
  }
  @media screen and (max-width: 350px){
    font-size: 10px;
    padding-top: 1rem;
  }
`
const StyledPara = styled.p`
    font-size: 1.875rem;
    text-align: center;
    width: 63%;
    @media screen and (max-width: 460px){
        width: 80%;
        margin-top:.6rem;
        font-size: 1.2rem;

  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 70%;
  }
  @media screen and (max-width: 393px){
    font-size: 1.2rem;
    width: 80%;
  }
`
const CardBlock = styled.div`
       display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
`
const Img = styled.img`
    width: 3rem;
    height: auto;
`
const StyledWCUSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

const CardSection = styled.div`
        display: flex;
    gap: 3rem;
    width: 100%;
    padding: 6rem;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 3rem 1rem;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {
        flex-direction: row;
        padding: 3rem 1rem;
        font-size: 1.875rem;
        gap: 1rem;
}
@media screen and (min-width:1080px){
    gap: 3rem;
    padding: 6rem 1rem;
}
`
const SmallCard = styled.div`
        display: flex;
    flex-direction: column;
    width: 26%;
    border: 6px solid #ddd;
    height: 26rem;
    justify-content: center;
    padding: 1rem 2rem;
    align-items: baseline;
    gap: 5rem;
    border-radius: 34px;
    background-color: #fff;
    border: double 4px transparent;
  border-radius: 40px;
  background-image: linear-gradient(white, white), radial-gradient(circle at top, #434BFD,rgba(255, 182, 182, 0.44));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  @media screen and (max-width: 460px){
            width: 56%;
            border-radius: 18px;
            gap: 1rem;
            padding: 0rem 0.5rem 0rem 1.5rem;
            height: 15rem;
    }
    @media screen and (min-width: 460px) and (max-width: 768px) {
            width: 25rem;
            border-radius: 18px;
            gap: 1rem;
            padding: 0rem 0.5rem 0rem 1.5rem;
            height: 15rem;
    }
        @media screen and (max-width: 393px){
            width: 68%;
            border-radius: 18px;
            gap: 1rem;
            padding: 0rem 0.5rem 0rem 1.5rem;
            height: 15rem;
}

@media screen and (min-width: 768px) and (max-width: 1080px) {
    width: 32rem;
    font-size: 1.875rem;
    gap: 2rem;
    padding: 1rem 0 1rem 2rem;
    height: 18rem;
}
@media screen and (min-width:1080px){
    width: 30rem;
}
    
`

const MiddleCard = styled.div`
        display: flex;
    flex-direction: column;
    width: 33%;
    background: rgba(12, 9, 20, 1);
    height: 33rem;
    justify-content: center;
    padding: 2rem 4rem;
    align-items: baseline;
    gap: 6rem;
    border-radius: 34px;
    color: #fff;
    @media screen and (max-width: 460px){
        width: 82%;
    border-radius: 18px;
    padding: 1rem 0 0 2rem;
    height: 22rem;
    }
    @media screen and (min-width: 460px) and (max-width: 768px) {
        width: 40rem;
        height: 28rem;
        padding: 2rem;
}
@media screen and (max-width: 393px){
        width: 100%;
        border-radius: 18px;
        padding: 2rem;
        height: 22rem;
    }

    @media screen and (min-width:780px) and (max-width:1080px){
        width: 44%;
}
    @media screen and (min-width:1080px){
        width: 46rem;
        height: 40rem;
}
`
const Learn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width: 393px){
       gap: 0;
    }
`
const H4 = styled.h4`
    font-size: 2.8rem;
    font-weight: 400;
    @media screen and (min-width: 768px) and (max-width: 1080px) {
        font-size: 2rem;
}
@media screen and (max-width: 393px){
       font-size: 22px;
    }
    @media screen and (max-width: 460px){
        font-size: 22px;
    }
    @media screen and (max-width: 320px){
        font-size: 18px;
    }
`
const StyledSpan = styled.span`
    color: rgba(118, 124, 255, 1);
` 
export default WcuSection;