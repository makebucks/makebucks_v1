import styled from "styled-components";
import { useEffect, useState } from "react";
import {faqData} from '../utils/data';
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const FAQ = () =>{
    const [value, setValue] = useState('');
    const navigate = useNavigate()
    const toggleAns =(val)=>{
        if(value === val){
            setValue(()=>{
                val = 'null';
                return val;
            })
        }
        setValue((oldval) => {   
            return val;
          });
    }
    const [questions, setQuestions] = useState(faqData);
    const [currentQues, setCurrentQues] = useState(0)
    useEffect(()=>{
        setQuestions(faqData);
    },[])
    const prevSlide = () => {
        setCurrentQues((oldQues) => {
          const result = (oldQues - 1 + questions.length) % questions.length;
          return result;
        });
      };
      const nextSlide = () => {
        setCurrentQues((oldQues) => {
          const result = (oldQues + 1) % questions.length;
          return result;
        });
      };
    return(
        <>
            <StyledFAQSection>
                    <H2>Frequently Asked Questions.</H2>
                    <P>Most common questions about our mentroship program</P>
                <AccordianSection>
               
                    <section className="slider-container">
                        {questions.map((quest, qIndex)=>{
                            const {id, q1, ans1,q2,ans2,q3,ans3} = quest;
                            return (
                                <article className="slide" style=
                                {{transform:`translateX(${100*(qIndex-currentQues)}%)`,
                                  opacity: qIndex === currentQues ?1:0,
                                  visibility:qIndex=== currentQues?'visible':'hidden'
                                }} key={id}>
                                    
                                        <Quetion onClick={()=>{toggleAns(q1)}}>
                                        <DropDownSection>
                                        <H4 >{q1}</H4><span>{value === q1? '-' : '+'}</span>
                                        </DropDownSection>
                                        { value === q1 &&
                                        <Answer>
                                            <AnsP>{ans1}{q1=== "Are you a profitable trader ?" && <A href="https://verifiedpnldocs.fyers.in/VerifiedPNL/htmls/aaa841a7-7e26-4714-a04c-bdfefc3a246e.html" target="_blank"
                rel="noreferrer"> Verified P&L</A>}</AnsP>
                                        </Answer>
                                        }
                                        </Quetion>
                                        <Quetion onClick={()=>{toggleAns(q2)}}>
                                        <DropDownSection>
                                            <H4 >{q2}</H4><span>{value === q2? '-' : '+'}</span>
                                        </DropDownSection>
                                        { value === q2 &&
                                            <Answer>
                                                <AnsP>{ans2}{ q2 === "Still have more questions on your mind?" && <><A href='https://wa.me/919972470399' target="_blank" rel="norefrrer">WhatsApp</A>, <A href='https://mail.google.com/mail/?view=cm&fs=1&to=makebucks.in@gmail.com' target="_blank"
                rel="noreferrer">Mail</A> or <A onClick={()=>navigate("/contact-us")}>Form</A>. We will get back to you ;)</> }</AnsP>
                                            </Answer>
                                        }
                                        </Quetion>
                                        {q3 && <Quetion onClick={()=>{toggleAns(q3)}}>
                                        <DropDownSection>
                                            <H4 >{q3}</H4><span>{value === q3? '-' : '+'}</span>
                                        </DropDownSection>
                                        {value === q3 &&
                                            <Answer>
                                                <AnsP>{ans3}</AnsP>
                                            </Answer>
                                        }
                                        </Quetion>}
                                
                                </article>
                            )
                        })}
                         <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
                    </section>
                </AccordianSection>
                </StyledFAQSection>
        </>
    )
}
const A = styled.a`
  color:#434BFD;
  text-decoration:underline;
`
const H2 = styled.h2`
    font-size: 6rem;
    text-align: center;
    line-height: 5rem;
    @media screen and (max-width: 460px){
        font-size: 30px;
        line-height: 4rem;

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
    text-align: center;

    @media screen and (max-width: 460px){
        font-size: 1.2rem;
        width: 70%;
        margin-top:.6rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    width: 77%;
}
@media screen and (max-width: 393px){
    font-size: 14px;
    padding-top: 1rem;
  }
`
const StyledFAQSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 8rem 0 0 0;
    align-items: center;
    justify-content: center;
`
const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 53%;
  margin-top: 1rem;
  @media screen and (max-width: 460px){
        width: 84%;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    width: 80%;
}
`
const Quetion = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#fff, #fff), radial-gradient(circle at left, rgba(67, 75, 253, 1),rgba(255, 255, 255, 1));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  cursor:pointer;

@media screen and (max-width:500px){
  padding:1.5rem;
}
`
const DropDownSection = styled.div`
    display: flex;
  width: 100%;
  color: #0C0914;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  border-radius: 4px;
`
const H4 = styled.h4`
    font-weight: 500;
    text-align: left;
    @media screen and (max-width:500px){
        font-size: 12px;
    }
`
const Answer = styled.div`
    display: flex;
   text-align: left;
   color: #595959;
`
const AnsP = styled.p`
    font-size:14px;
    @media screen and (max-width:500px){
      font-size:10px;
    }
`
export default FAQ;