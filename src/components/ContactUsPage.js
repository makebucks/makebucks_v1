import styled from "styled-components";
import ContactUs from "./ContactUs";
import backdropImg from '../img/Contact us eclipse.png'
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitForm } from "../services/contactUs";
import toast from "react-hot-toast";

const ContactUsPage = () =>{
    const queryClient = useQueryClient();
    const {register, handleSubmit, reset, formState} = useForm();
    const {errors}= formState;


    const {mutate, isLoading} = useMutation({
        mutationFn: submitForm,
        onSuccess:()=>{
            toast.success("Contact details submited successfully !");
            queryClient.invalidateQueries({
                queryKey:["contactus"]
            });
            reset();
        },
        onError:(err)=>toast.error(err.message)
    })

    const onSubmit = (data) =>{
        mutate(data);
    }
   
    return (
        <>
            <ContactUsContainer>
                <StyledHeader>
                
                            <H2><StyledSpan>Contact</StyledSpan> us.</H2>
                            
                    <StyledPara>More questions on your mind, Get in touch with us today</StyledPara>
               
                </StyledHeader>
                <Card>
                    <H4>Get in touch</H4>
                    <CardP>You can reach us anytime</CardP>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormField>
                            <Input type="text" id="name" {...register('name',
                        {"required":'This field is required'})}></Input>
                            <Label htmlFor="name">Name</Label>
                            {errors?.name?.message && <Error>{errors.name.message}</Error>}
                        </FormField>
                        <FormField>
                            <Input type="text" id="email" {...register('email',{"required":'This field is required',
                         pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          }})}></Input>
                            <Label htmlFor="email">Email address</Label>
                            {errors?.email?.message && <Error>{errors.email.message}</Error>}
                        </FormField>
                        <FormField>
                            <Input type="text" id="contactNo" {...register('contactNo',{"required":'This field is required',
                              pattern: {
                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                message: "Invalid phone no",
                              }  
                        })}></Input>
                            <Label htmlFor="contactNo">Conatct number</Label>
                            {errors?.contactNo?.message && <Error>{errors.contactNo.message}</Error>}

                        </FormField>
                        <FormField>
                            <TextInput id="message" {...register('message',{"required":'This field is required'})}></TextInput>
                            <Label htmlFor="message">Message</Label>
                            {errors?.message?.message && <Error>{errors.message.message}</Error>}

                        </FormField>
                        <SubmitButton type="submit" disabled={isLoading}>Submit</SubmitButton>
                        <Line><P>or</P></Line>
                        <a className='mail' href='https://wa.me/919972470399' target="_blank"
                rel="noreferrer"><WhatsAppButton type="button">Chat on whatsapp</WhatsAppButton></a>
                        <a className='cal' href='http://www.cal.com/makebucks' target="_blank"
                rel="noreferrer"><BookVideoCall type="button">Book a Video Call</BookVideoCall></a>

                    </Form>
                </Card>
                <ContactUs/>
                <BackdropDivImg src={backdropImg}></BackdropDivImg> 
            </ContactUsContainer>
        </>
    )
}
const Error= styled.span`
    font-size:12px;
    color:red;
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
  @media screen and (max-width: 350px){
    font-size:24px;
}
 
`
const SubmitButton = styled.button`
    width: 100%;
    padding: .5rem;
    background: rgba(67, 75, 253, 1);
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 50px;
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(113, 113, 113, 1);
    position: relative;
`
const P = styled.p`
        padding: 0.5rem;
    position: absolute;
    top: -16px;
    left: 47%;
    background: #0C0914;
    color: #ddd;
`
const WhatsAppButton = styled.button`
     width: 100%;
    padding: .5rem;
    background: rgba(23, 181, 82, 1);
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 50px;
    
`
const BookVideoCall = styled.button`
    width: 100%;
    padding: .5rem;
    background: #fff;
    padding: 1rem;
    border-radius: 50px;
    color: black;
`
const H4 = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
`
const CardP = styled.p`
    font-size: 1.2rem;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
const FormField = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin: 2rem 0;
    flex-direction: column;
    gap: .5rem;
`
const Input = styled.input`
    border: double 1px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#0C0914, #0C0914), radial-gradient(circle at left, rgba(67, 75, 253, 1),rgba(214, 101, 101, 1));
  background-origin: border-box;
  background-clip: padding-box, border-box;
    width: 100%;
    padding: 1.5rem 2.8rem;
`
const TextInput = styled.textarea`
 border: double 1px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#0C0914, #0C0914), radial-gradient(circle at left, rgba(67, 75, 253, 1),rgba(214, 101, 101, 1));
  background-origin: border-box;
  background-clip: padding-box, border-box;
    width: 100%;
    padding: 1.5rem 2.8rem;
    height: 16rem;
    @media screen  and (max-width: 768px) {
        height: 10rem;
    }
`
const Label = styled.label`
    display: flex;
    position: absolute;
    padding: 0.5rem 2rem;
    top: -13px;
    left: 12px;
    font-size: 1.2rem;
    background: #0C0914;
`

const BackdropDivImg = styled.img`
    width: 100rem;
    height: auto;
    position: absolute;
    top: 0;
    z-index:1;
`
const ContactUsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const StyledHeader = styled.div`
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    flex-direction: column;
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
@media screen and (max-width: 350px){
    font-size:12px;
}
`
const Card = styled.div`
   display: flex;
    align-items: baseline;
    padding: 4rem;
    background: #0C0914;
    width: 50rem;
    border-radius: 24px;
    margin: 2rem 0;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    color: #fff;
    margin-top: 8rem;
    z-index: 999;
    @media screen and (min-width: 430px) and (max-width: 768px) {
        width: 40rem;
    }
    @media screen  and (max-width: 430px) {
        width: 34rem;
    }
   
`

export default ContactUsPage;