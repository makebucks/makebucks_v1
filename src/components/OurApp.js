import styled from "styled-components";
import ourApp from '../img/Laptop (1).png'
import ContactUs from "./ContactUs";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { submitNotifyMe } from "../services/notifyme";

const OurApp = ()=>{
    const queryClient = useQueryClient();
    const {register, handleSubmit, reset} = useForm();
    const {mutate, isLoading} = useMutation({
        mutationFn: submitNotifyMe,
        onSuccess:()=>{
            toast.success("Submitted successfully :)");
            queryClient.invalidateQueries({
                queryKey:["notifyme"]
            });
            reset();
        },
        onError:(err)=>toast.error(err.message)
    })

    const onSubmit = (data) =>{
        mutate(data);
    }
    return(
        <>
        <OurAppContainer>
            <StyledHeader>
            <StyledContainer>
                <StyledTitle>
                        <H2>Coming soon.</H2>
                           
                    </StyledTitle>
                <P>Never miss your trading journal</P>
            </StyledContainer>
            </StyledHeader>
            <NotyfyMeDiv>
                <Img src={ourApp}></Img>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputDiv>
                        <Input placeholder="Email address"  {...register('email')}></Input>
                        <NotifyButton type="submit" disabled={isLoading}>Notify me</NotifyButton>
                    </InputDiv>
                </Form>
                <CircleOne></CircleOne>
                <CircleTwo></CircleTwo>
            </NotyfyMeDiv>
            
            <ContactUs/>
           
            </OurAppContainer>
        </>
    )
}
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items:center;
`
const H2 = styled.h2`
    font-size: 6rem;
    background: linear-gradient(92.12deg, #434BFD 26.52%, #FF3737 115.58%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: 105% auto;
  letter-spacing: 0;
  margin: 0;
  text-align: center;
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
`
const P = styled.p`
    font-size: 1.875rem;
    margin: 1rem 0 4rem 0;
    text-align: center;

    @media screen and (max-width: 460px){
        font-size: 1.2rem;
  }
  @media screen and (min-width: 460px) and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 5rem;
}
`
const NotyfyMeDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 10rem;
`
const InputDiv= styled.div`
    display: flex;
    position: relative;
    padding: 0 1rem;
    @media screen and (max-width: 500px){
        width: 30rem;
    }
    @media screen and (min-width: 500px) and (max-width: 768px){
        width: 40rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1200px){
        width: 40rem;
    }
    @media screen and (min-width: 1200px){
        width: 50rem;
    }
`
const Input = styled.input`
    background: #fff;
    border: 0;
    border-radius: 30px;
    padding: 1rem 0 1rem 2rem;
    width: 100%;
`
const NotifyButton = styled.button`
        background-color: rgba(67, 75, 253, 1);
    font-size: 1.2rem;
    color: #fff;
    position: absolute;
    top: 16%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    @media screen and (min-width: 500px) and (max-width: 768px){
        right: 5%;
    }
    @media screen and (max-width: 768px){
        top:18%;
    }
`
const CircleOne = styled.div`
        width: 40rem;
    height: 40rem;
    border-radius: 100%;
    position: absolute;
    z-index: 1;
    background: rgba(67, 75, 253, 0.1);
    top: -4%;
    @media screen and (max-width: 500px){
        width: 25rem;
        height: 25rem;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        background: rgba(67, 75, 253, 0.1);
        top: -5%;
    }

`
const CircleTwo = styled.div`
    width: 30rem;
    height: 30rem;
    border-radius: 100%;
    position: absolute;
    z-index: 1;
    background: rgba(67, 75, 253, 0.25);
    top: 4%;
    @media screen and (max-width: 500px){
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        background: rgba(67, 75, 253, 0.25);
        top: 2%;
    }
`
const OurAppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
        width: 50rem;
    height: 50rem;
    z-index: 3;
    position: relative;
    bottom: 8rem;

    @media screen and (max-width: 500px){
        width: 30rem;
        height: 30rem;
        bottom: 5rem;
    }
`
const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 10rem;
`
const StyledContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`
const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


export default OurApp;