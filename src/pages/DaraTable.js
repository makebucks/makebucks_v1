import { useState } from "react";
import ContactUsTable from "./ContactUsTable";
import NotifyMeTable from "./NotifyMeTable";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const DataTable = () =>{
    const [showPage, setShowPage] = useState(false);

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        if(data.passcode === "makebucksusers@07042024"){
            setShowPage(true);
        }
    }
    return(
        <>
        <p>Enter passcode</p>
        {!showPage && <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormField>
                            <Input type="text" id="passcode" {...register('passcode')}></Input>
                            <Label htmlFor="passcode">Passcode</Label>
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </FormField>
        </Form>}
        { showPage && <>
        <Users>
            <h1 style={{textAlign:"center"}}>User Details</h1>
            <Container>
            <NotifyMeTable/>
            <ContactUsTable/>
            </Container>
        </Users>
        </>
        }
        </>
    )
}
const Users = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
gap: 2rem;
padding: 6rem 0;
`
const SubmitButton = styled.button`
    width: 100%;
    padding: .5rem;
    background: rgba(67, 75, 253, 1);
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 50px;
`
const Label = styled.label`
    display: flex;
    position: absolute;
    padding: 0.5rem 2rem;
    top: -13px;
    left: 12px;
    font-size: 1.2rem;
    background: #0C0914;
    color:#fff;
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
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height:100vh;
`
const FormField = styled.div`
display: flex;
width: 31%;
position: relative;
margin: 2rem auto;
flex-direction: column
`
const Container = styled.div`
margin: 0 auto;
display: flex;
gap: 1.2rem;
width: 100%;
justify-content: center;
height: 90.8vh;
overflow: auto;

`
export default DataTable;