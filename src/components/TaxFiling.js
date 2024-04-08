import styled from 'styled-components';
import ContactUs from './ContactUs';
import star from '../img/tick icon png.png'
import proTraderBackImg from '../img/pro trade card eclipse.png'

const TaxFiling = ()=>{
  
    return (
        <>
            <StyledHeader>
                        <H2>File your<StyledSpan> tax on time.</StyledSpan></H2>
                           
                <StyledPara>Plan and file your taxes with our team</StyledPara>
            </StyledHeader>
            <StyledCardContainer>
                
                <StyledSecondCard>
                <Card>
                <BackDropImg src={proTraderBackImg}/>
                    
                    <CardH3>Tax Filing</CardH3>
                    <CardPara>We help you to file taxes for individuals & for
business</CardPara>
                    <StyledCardSpan>₹ 199</StyledCardSpan>
                    <StyledAmount>₹ Free  <STyledAmountSpan>/ only for consultation</STyledAmountSpan></StyledAmount>
                    
                    <StyledBlocks><Img src={star}></Img>

                        <StyledBlockP>Income tax returns filing</StyledBlockP>
                    </StyledBlocks>
                    <StyledBlocks><Img src={star}></Img>

                        <StyledBlockP>GST services</StyledBlockP>
                    </StyledBlocks>
                    <StyledBlocks><Img src={star}></Img>

                        <StyledBlockP>Outstanding demands</StyledBlockP>
                    </StyledBlocks>
                    <StyledBlocks><Img src={star}></Img>

                        <StyledBlockP>Projections</StyledBlockP>
                    </StyledBlocks>
                   
                    <BottomButtons>
                        <StyledJoinBatch>Call</StyledJoinBatch>
                        <StyledShowModule>Book consultation call</StyledShowModule>
                    </BottomButtons>
                </Card>
                </StyledSecondCard>
            </StyledCardContainer>
            
            <ContactUsDiv>
                <ContactUs/>
            </ContactUsDiv>
            
        </>
    )
}
const BackDropImg = styled.img`
       width: 24rem;
    height: 43rem;
    position: absolute;
    top: -130px;
    right: -25px;
    z-index: 1;
    transform: rotate(-90deg);
`
const H2 = styled.h2`
    font-size: 6rem;
    color: #0A0B0F;
    font-weight: 600;
    line-height: 7rem;
    text-align: center;
    @media screen and (max-width: 460px){
        font-size: 30px;
        line-height: 5rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 40px;
    line-height: 5rem;
  }
  @media screen and (max-width: 493px){
    font-size: 30px;
    line-height: 4rem;
  }
  @media screen and (min-width: 768px ){
    line-height: 8rem;
  }
 
`
const StyledPara = styled.p`
    font-size: 1.875rem;
    width: 60%;
    text-align: center;
  margin-top: 1rem;
    @media screen and (max-width: 460px){
        font-size: 1.2rem;
        width: 80%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 70%;
}
`
const Img = styled.img`
    width: 1.8rem;
    height: auto;
    @media screen and (max-width: 500px){
        width: 1.6rem;
    }
`
const ContactUsDiv = styled.div`
    display: flex;
    width: 100%;
`

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    flex-direction: column;
`
const StyledCardContainer = styled.div`
    display: flex;
    gap: 6rem;
    width: 100%;
  justify-content: center;
  padding: 0 2rem;
  @media screen and (max-width: 700px){
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 6rem;
  }
`
const StyledSecondCard = styled.div`
    display: flex;
    width: auto;
    justify-content: center;

`

const StyledSpan = styled.span`
  background: linear-gradient(92.12deg, #434BFD 26.52%, #FF3737 115.58%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: 105% auto;
  color: #000;
  letter-spacing: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;
`
const Card = styled.div`
    display: flex;
    align-items: baseline;
    padding: 4rem 2rem;
    background: #0C0914;
    width: 44rem;
    border-radius: 30px;
    margin: 4rem 0;
    border: double 4px transparent;
  background-image: linear-gradient(#0C0914, #0C0914), radial-gradient(circle at top, #434BFD,rgba(255, 182, 182, 0.44));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  flex-direction: column;
    position: relative;
    @media screen and (max-width: 768px) {
        width: 76%;
        margin: 0;
        padding: 1rem;
        gap: 1rem;
    }
    @media screen and (min-width:768px) and (max-width:1200px){
        width: 44rem;
        margin-top: 4rem;
    }

    @media screen and (max-width:493px){
        margin-top: 1rem;
        width: 95%;
        padding: 0rem 1rem 2rem 1.5rem;
        gap: 1rem;
        border-radius: 18px;
    }
    @media screen and (min-width:493px) and (max-width:768px){
        margin-top: 1rem;
        width: 40rem;
        padding: 0rem 1rem 2rem 1.5rem;
        gap: 1rem;
        border-radius: 18px;
    }
    
   
`
const CardH3 = styled.h3`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-top: 2rem;
    line-height: 2rem;
    @media screen and (max-width: 768px) {
        font-size: 2rem;
        margin-top: 8rem;
    }
    @media screen and (max-width:493px){
        font-size: 18px;
        margin-top: 8rem;
    }
    @media screen and (min-width: 768px){
        line-height: 4rem;
    }
`
const CardPara = styled.p`
    font-size: 1.6rem;
    color: #B0B0B0;
    @media screen and (max-width:493px){
        font-size: 12px;
        width: 84%;
    }
`
const StyledCardSpan = styled.span`
    font-size: 1.5rem;
    text-decoration: line-through;
    color: #fff;
    @media screen and (max-width:493px){
    font-size: 12px;
    color: #b0b0b0;
    position: relative;
    top: 10px;
    }
    @media screen and (min-width: 493px) and (max-width:1200px){
        font-size: 12px;
        color: #b0b0b0;
        position: relative;
        top: 10px;
    }
    @media screen and (min-width: 1200px){
        font-size: 12px;
        color: #b0b0b0;
        position: relative;
        top: 2px;
        margin-top: 10px;
    }
`
const StyledAmount = styled.p`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 8px;
`
const STyledAmountSpan = styled.span`
    font-size: 12px;
    color: #b0b0b0;
    font-weight:400;
`
const StyledBlocks = styled.div`
    display: flex;
    border-radius: 40px;
    width: 100%;
    background: #181D0DD9;
    padding: 1rem 1.5rem;
    align-items: center;
    gap: 1rem;
   
    @media screen and (max-width: 768px) {
        padding: 1rem 0 1rem 1rem;
    }
    @media screen and (min-width: 1200px) {
        margin-bottom: 6px;
}
`

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
    @media screen and (max-width: 350px){
        font-size:10px;
    }
    
`
const BottomButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`

const StyledJoinBatch = styled.button`
    width: 100%;
    border-radius: 50px;
    margin-top: 2rem;
`
const StyledShowModule = styled.button`
    width: 100%;
    background: transparent;
    border:2px solid #434BFD;
    border-radius: 50px;
`
export default TaxFiling;