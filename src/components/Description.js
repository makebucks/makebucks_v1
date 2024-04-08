import styled from "styled-components";
const Description = () =>{
    return(
        <>
            <DescriptionHolder>
                <FirstDiv>
                    <Card>
                        <TopDiv>
                            <GreySpan>Prior knowledge</GreySpan>
                            <BoldP>Not required</BoldP>
                        </TopDiv>
                        <P>You will learn everything from absolute scratch to highly skilled advanced trader. </P>
                    </Card>
                </FirstDiv>
                <SecondDiv>
                    <Card>
                        <GreySpan>Duration</GreySpan>
                        <BoldP>1 month</BoldP>
                    </Card>
                    <Card>
                        <GreySpan>Language</GreySpan>
                        <BoldP>Tamil</BoldP>
                    </Card>
                </SecondDiv>
                <ThirdDiv>
                    <Card>
                        <GreySpan>Support</GreySpan>
                        <BoldP>Lifetime</BoldP>
                    </Card>
                </ThirdDiv>

                
            </DescriptionHolder>
             
        </>
    )
}
const DescriptionHolder = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    margin: 2rem auto;
    justify-content: flex-start;
    align-items: baseline;

    @media screen and (max-width:700px){
        width: 95%;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
    }
`
const FirstDiv = styled.div`
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    height: 22rem;
    width: 42rem;
    @media screen and (max-width:700px){
        height: 18rem;
        width:100%;
    }
`

const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    @media screen and (max-width:700px){
        margin-bottom: 2rem;
    }
`
const GreySpan = styled.span`
    font-size: 16px;
    color: rgba(129, 129, 129, 1);
    @media screen and (max-width:700px){
        font-size: 13px;
    }
`
const BoldP = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    @media screen and (max-width:500px){
        font-size: 14px;
    }
   
`
const P = styled.p`
    font-size: 16px;
    color: #fff;
    @media screen and (max-width:700px){
        font-size: 12px;
    }
    @media screen and (min-width:500px) and (max-width:700px){
        font-size: 16px;
    }
`
const SecondDiv = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
    height: 22rem;
    width: 22rem;
    @media screen and (max-width:700px){
        width: 100%;
        height:19rem;
    }
`
const ThirdDiv = styled.div`
       display: flex;
    gap: 1rem;
    flex-direction: column;
    height: 10.4rem;
    width: 22rem;
    @media screen and (max-width:700px){
        width: 100%;
        height:9rem;
    }
`
const Card = styled.div`
    display: flex;
    align-items: baseline;
    padding: 2rem;
    background: #0C0914;
    width: 100%;
    border-radius: 20px;
    margin: 0 auto;
    flex-direction: column;
    height: 100%;
    @media screen and (max-width:460px){
    border-radius: 10px;
    padding: 2rem;
  }
`

export default Description;