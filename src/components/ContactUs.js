
import styled from "styled-components";
import logo from '../img/logo.png'
import insta from '../img/Social icons/Insta icon.png'
import facebook from '../img/Social icons/facebook icon.png'
import gmail from '../img/Social icons/gmail icon.png'
import X from '../img/Social icons/X icon.png'
import whatsApp from '../img/Social icons/Whatsapp icon.png'
import backdropImg from '../img/Contact us eclipse.png'
import { useNavigate } from "react-router-dom";
const ContactUs = ()=>{
    const navigate = useNavigate();

    return(
        <>
        <Container>
            <ContactUsDiv>
                <FirstDiv>
                    <LogoDiv>
                        <Img src={logo} alt="makebucks"></Img>
                        <H4>makebucks</H4>
                    </LogoDiv>
                    <TaglinePara>
                         We are on our mission to educate, every common people about stock market trading.
                    </TaglinePara>
                </FirstDiv>
                <SecondDiv>
                    <H4>Pages</H4>
                    <PagesSection>
                        <Para onClick={()=>navigate("/home")}>Home</Para>
                        <Para onClick={()=>navigate("/traders-mentorship")}>Mentorship</Para>
                        <Para onClick={()=>navigate("/our-app")}>Our app</Para>
                        <Para onClick={()=>navigate("/contact-us")}>Contact us</Para>
                        <Para onClick={()=>navigate("/privacy-policy")}>Privacy Policy</Para>
                        <Para onClick={()=>navigate("/terms&condition")}>Terms & Conditions</Para>
                    </PagesSection>
                </SecondDiv>
                <ThirdDiv>
                <H4>Socials</H4>
                    <PagesSection>
                        <Para> <a className='insta' href='https://instagram.com/makebucks.in?igshid=MzNINGNkZWQ4Mg==' target="_blank"
                rel="noreferrer">Instagram</a></Para>
                        <Para><a className='insta' href='https://www.facebook.com/share/QxtJSMkrEuZMbpiS/?mibextid=qi2Omg' target="_blank"
                rel="noreferrer">Facebook</a></Para>
                        <Para> <a className='twitter' href='https://twitter.com/makebucks_in?t=9fvZJ7_Ud7Fi9Ckc45krqA&s=08' target="_blank"
                rel="noreferrer">Twitter</a></Para>
                        <Para> <a className='twitter' href='https://youtube.com/@makebucks-in?si=hc7d0rG-eJ9pbP3A' target="_blank"
                rel="noreferrer">Youtube</a></Para>
                    </PagesSection>
                </ThirdDiv>
                <ThirdDiv>
                <H4>Contact us</H4>
                    <PagesSection>
                        <Para><a className='mail' href='https://wa.me/919972470399' target="_blank"
                rel="noreferrer">WhatsApp</a></Para>
                        <Para><a className='mail' href='https://mail.google.com/mail/?view=cm&fs=1&to=makebucks.in@gmail.com' target="_blank"
                rel="noreferrer">Gmail</a></Para>
                        <Para><a className='cal' href='http://www.cal.com/makebucks' target="_blank"
                rel="noreferrer">Cal.com</a></Para>
                    </PagesSection>
                </ThirdDiv>
            </ContactUsDiv>
            <SocialMedia>
                <Span>Contact us - 9972470399</Span>
                <Icons>
                <a className='insta'  href='https://twitter.com/makebucks_in?t=9fvZJ7_Ud7Fi9Ckc45krqA&s=08' target="_blank"
                rel="noreferrer"><SImg src={insta}></SImg></a>
                   <a className='insta' href='https://www.facebook.com/share/QxtJSMkrEuZMbpiS/?mibextid=qi2Omg' target="_blank"
                rel="noreferrer"><SImg src={facebook}></SImg></a> 
                    <a className='mail' href='https://mail.google.com/mail/?view=cm&fs=1&to=makebucks.in@gmail.com' target="_blank"
                rel="noreferrer"><SImg src={gmail}></SImg></a>
                    <a className='twitter' href='https://instagram.com/makebucks.in?igshid=MzNINGNkZWQ4Mg==' target="_blank"
                rel="noreferrer"><SImg src={X}></SImg></a>
                    <a className='mail' href='https://wa.me/919972470399' target="_blank"
                rel="noreferrer"><SImg src={whatsApp}></SImg></a>

                </Icons>
                <Span><BoldSpan>&copy; <StyledPara>makebucks</StyledPara> 2024</BoldSpan> | Designed by Vipin</Span>
            </SocialMedia>
            <BackImg src={backdropImg}></BackImg>
            </Container>
        </>
    )
}
const BackImg = styled.img`
        width: 56rem;
    height: 40rem;
    position: absolute;
    top: 0px;
    left: 14%;
    z-index: -1;
   
    @media screen and (max-width: 460px){
        width: 20rem;
        left: 0;
    }
    @media screen and (min-width: 460px) and (max-width:700px){
        width: 40rem;
        left: 0;
    }
`
const Container = styled.div`
       width: 90%;
    display: flex;
    border-radius: 40px;
    background: #fff;
    padding: 3rem 6rem 2rem 6rem;
    gap: 8rem;
    margin: 4rem auto ;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    z-index: 3;
`
const ContactUsDiv = styled.div`
    
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0rem;
    z-index:999;
    @media screen and (max-width: 700px){
        flex-wrap: wrap;
        gap: 4rem;
    }
`
const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
`
const Icons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
const SImg = styled.img`
    width: 3rem;
`
const FirstDiv = styled.div`
        display: flex;
    flex-direction: column;
    width: 34%;
    padding: 0 2rem 0 0;
    letter-spacing: 1px;
    gap: 1rem;
    @media screen and (max-width: 700px){
        width: 100%;
    }
`
const LogoDiv = styled.div`
    display: flex;
    gap: 1.2rem;
`
const Para = styled.p`
    font-size: 1.5rem;
    color: #777777;
    display:inline-block;
    &:hover{
        color: var(--color-grey-800);
        border-bottom: 1px solid rgba(67, 75, 253, 1);
    }
    @media screen and (max-width: 460px){
        font-size: 1rem;
    }
    @media screen and (min-width: 460px) and (max-width:700px){
        font-size: 1.5rem;
    }
`
const Span = styled.p`
    font-size: 1.5rem;
    color: #777777;
    display:inline-block;
    
    @media screen and (max-width: 460px){
        font-size: 1rem;
    }
    @media screen and (min-width: 460px) and (max-width:700px){
        font-size: 1.5rem;
    }
`
const TaglinePara = styled.p`
    font-size: 1.5rem;
    color: #777777;
    letter-spacing: 0;
    @media screen and (max-width: 460px){
        font-size: 1rem;
    }
    @media screen and (min-width: 460px) and (max-width:700px){
        font-size: 1.5rem;
    }
`
const StyledPara = styled.span`
    color: rgba(67, 75, 253, 0.75);
    display: inline-block;
;
`
const BoldSpan = styled.span`
    font-weight: 600;
`
const Img = styled.img`
    width: 4rem;
    height: auto;
    position: relative;
    bottom: 3px;
`
const H4 = styled.h3`
    font-size: 2rem;
    color: #0C0914;
    font-weight: 500;
`

const SecondDiv = styled.div`
       display: flex;
    flex-direction: column;
    gap: 1rem;
`
const ThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const PagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default ContactUs;